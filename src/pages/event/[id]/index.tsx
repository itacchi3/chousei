import React, { useEffect } from 'react';
import { firebaseApp } from 'src/config/firebase';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import AttendanceTable from 'src/components/AttendanceTable';
import { attendeesObjectToArray } from 'src/utils/DataConvert';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { eventState, attendeeState, Event } from 'src/atoms/eventState';
import { useAuth } from 'src/hooks/auth';
import { GetServerSideProps } from 'next';

type Props = {
  eventId: string;
  eventData: Event;
};

export default function Event({ eventId, eventData }: Props) {
  const { liff } = useAuth();
  const router = useRouter();
  // const eventId = router.query.id;

  const [event, setEvent] = useRecoilState(eventState);
  const [attendee, setAttendee] = useRecoilState(attendeeState);
  // useEffect(() => {
  //   //Realtime Databaseからデータを取得
  //   if (!eventId) {
  //     return;
  //   }
  //   firebaseDb.ref(`events/${eventId}`).on('value', (snapshot) => {
  //     const eventData = snapshot.val();
  //     setEvent({
  //       eventId: eventId as string,
  //       eventName: eventData.name,
  //       description: eventData.description,
  //       dates: eventData.dates,
  //       times: eventData.times,
  //       prospectiveDates: eventData.prospectiveDates,
  //       attendees: attendeesObjectToArray(eventData.attendees),
  //     });
  //   });
  //   // console.log(event);
  // }, [setEvent, eventId]);
  useEffect(() => {
    setEvent({
      eventId: eventId,
      name: eventData.name,
      description: eventData.description,
      dates: eventData.dates,
      times: eventData.times,
      prospectiveDates: eventData.prospectiveDates,
      attendees: attendeesObjectToArray(eventData.attendees),
    });
  }, [eventData, setEvent, eventId]);

  // Lineで友達にイベントリンクを共有
  const sharedScheduleByLine = () => {
    if (liff!.isApiAvailable('shareTargetPicker')) {
      liff!.shareTargetPicker([
        {
          type: 'text',
          text:
            '【イベント名】\n' +
            event.name +
            '\n' +
            '【概要】\n' +
            event.description +
            '\n' +
            'https://liff.line.me/1656098585-v7VEeZ7Q/event/' +
            eventId,
          // wrap: true,
        },
      ]);
    }
  };

  //時間候補入力へ移動
  const answerDates = () => {
    router.push({
      pathname: `/event/${eventId}/input`,
    });
  };

  return (
    <Grid id="event" container alignItems="center" xs={12} justify="center" spacing={3}>
      <Grid container item xs={12} direction="column" justify="center" alignItems="flex-start">
        <Grid item className="guide-title">
          {event.name}
        </Grid>
        <Grid item className="guide-message">
          {event.description}
        </Grid>
      </Grid>
      <Grid container item spacing={3} direction="column" justify="center" alignItems="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => sharedScheduleByLine()}>
            友達へ共有する
          </Button>
        </Grid>
        <Grid item container>
          <AttendanceTable columns={event.prospectiveDates} attendees={event.attendees} />
        </Grid>
      </Grid>
      <Grid container item xs={12} justify="center" alignItems="center" spacing={3}>
        <Grid container item xs={11} direction="column">
          <Grid item className="guide-title">
            出欠を入力してください
          </Grid>
          <Grid item>
            <TextField
              placeholder="名前"
              value={attendee.name}
              onChange={(e) => setAttendee((state) => ({ ...state, name: e.target.value }))}
              fullWidth={true}
              variant="outlined"
            />
            <TextField
              margin="normal"
              placeholder="コメント"
              multiline
              rows={7}
              value={attendee.comment}
              onChange={(e) => setAttendee((state) => ({ ...state, comment: e.target.value }))}
              fullWidth={true}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={10}
          spacing={1}
          justify="center"
          alignItems="center"
          direction="row"
        ></Grid>
      </Grid>
      <Grid container item xs={12} justify="center">
        <Button variant="contained" color="primary" onClick={() => answerDates()}>
          時間候補を入力する
        </Button>
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const eventId = context.query.id;
  const firebaseDb = firebaseApp.database();
  const ref = firebaseDb.ref(`events/${eventId}`);

  return ref.once('value').then((snapshot) => {
    const eventData = snapshot.val();
    return { props: { eventId, eventData } };
  });
};
