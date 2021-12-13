import { Meta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { AttendanceTable } from './AttendanceTable';

export default {
  component: AttendanceTable,
} as Meta;

const event = {
  id: 'event1',
  name: 'test',
  description: 'testです。',
  possibleDates: [
    {
      id: 1,
      index: 0,
      eventId: 'event1',
      date: new Date(2021, 11, 1),
      dateString: '12/1(水)',
      startTime: new Date(2021, 11, 1, 12, 0),
      endTime: new Date(2021, 11, 1, 13, 0),
      timeWidthString: '12:00〜13:00',
      votes: [
        {
          userId: 'user1',
          possibleDateId: 1,
          vote: '○',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 1, 0, 0),
        },
        {
          userId: 'user2',
          possibleDateId: 1,
          vote: '△',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 2, 0, 0),
        },
        {
          userId: 'user3',
          possibleDateId: 1,
          vote: '○',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 3, 0, 0),
        },
      ],
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      id: 2,
      index: 2,
      eventId: 'event1',
      date: new Date(2021, 11, 1),
      dateString: '12/1(水)',
      startTime: new Date(2021, 11, 1, 14, 0),
      endTime: new Date(2021, 11, 1, 16, 0),
      timeWidthString: '14:00〜16:00',
      votes: [
        {
          userId: 'user1',
          possibleDateId: 2,
          vote: '○',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 1, 0, 0),
        },
        {
          userId: 'user2',
          possibleDateId: 2,
          vote: '△',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 2, 0, 0),
        },
        {
          userId: 'user3',
          possibleDateId: 2,
          vote: '×',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 3, 0, 0),
        },
      ],
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      id: 3,
      index: 3,
      eventId: 'event1',
      date: new Date(2021, 11, 3),
      dateString: '12/3(金)',
      startTime: new Date(2021, 11, 3, 12, 0),
      endTime: new Date(2021, 11, 3, 13, 0),
      timeWidthString: '12:00〜13:00',
      votes: [
        {
          userId: 'user1',
          possibleDateId: 3,
          vote: '○',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 1, 0, 0),
        },
        {
          userId: 'user2',
          possibleDateId: 3,
          vote: '△',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 2, 0, 0),
        },
        {
          userId: 'user3',
          possibleDateId: 3,
          vote: '○',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 3, 0, 0),
        },
      ],
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      id: 4,
      index: 4,
      eventId: 'event1',
      date: new Date(2021, 11, 3),
      dateString: '12/3(金)',
      startTime: new Date(2021, 11, 3, 14, 0),
      endTime: new Date(2021, 11, 3, 16, 0),
      timeWidthString: '14:00〜16:00',
      votes: [
        {
          userId: 'user1',
          possibleDateId: 4,
          vote: '○',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 1, 0, 0),
        },
        {
          userId: 'user2',
          possibleDateId: 4,
          vote: '△',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 2, 0, 0),
        },
        {
          userId: 'user3',
          possibleDateId: 4,
          vote: '×',
          createdAt: new Date(2021, 11, 1, 0, 0),
          updatedAt: new Date(2021, 11, 3, 0, 0),
        },
      ],
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
  ],
  comments: [
    {
      comment: 'コメント1',
      eventId: 'event1',
      userId: 'user1',
      user: {
        id: 'user1',
        name: 'user1',
        profileImg: 'user1',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      comment: 'コメント2',
      eventId: 'event2',
      userId: 'user2',
      user: {
        id: 'user2',
        name: 'user2',
        profileImg: 'user2',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 2, 0, 0),
    },
    {
      comment: 'コメント3',
      eventId: 'event3',
      userId: 'user3',
      user: {
        id: 'user3',
        name: 'user3',
        profileImg: 'user3',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 3, 0, 0),
    },
  ],
  participants: [
    {
      eventId: 'event1',
      userId: 'user2',
      isCheck: true,
      isCreate: false,
      isVote: true,
      user: {
        id: 'user2',
        name: 'user2',
        profileImg: 'user2',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      eventId: 'event1',
      userId: 'user3',
      isCheck: true,
      isCreate: false,
      isVote: true,
      user: {
        id: 'user3',
        name: 'user3',
        profileImg: 'user3',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      eventId: 'event1',
      userId: 'user4',
      isCheck: true,
      isCreate: false,
      isVote: false,
      user: {
        id: 'user4',
        name: 'user4',
        profileImg: 'user4',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      eventId: 'event1',
      userId: 'user1',
      isCheck: true,
      isCreate: true,
      isVote: true,
      user: {
        id: 'user1',
        name: 'user1',
        profileImg: 'user1',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      eventId: 'event1',
      userId: 'user2',
      isCheck: true,
      isCreate: false,
      isVote: true,
      user: {
        id: 'user2',
        name: 'user2',
        profileImg: 'user2',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      eventId: 'event1',
      userId: 'user2',
      isCheck: true,
      isCreate: false,
      isVote: true,
      user: {
        id: 'user2',
        name: 'user2',
        profileImg: 'user2',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      eventId: 'event1',
      userId: 'user2',
      isCheck: true,
      isCreate: false,
      isVote: true,
      user: {
        id: 'user2',
        name: 'user2',
        profileImg: 'user2',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
    {
      eventId: 'event1',
      userId: 'user2',
      isCheck: true,
      isCreate: false,
      isVote: true,
      user: {
        id: 'user2',
        name: 'user2',
        profileImg: 'user2',
        createdAt: new Date(2021, 11, 1, 0, 0),
        updatedAt: new Date(2021, 11, 1, 0, 0),
      },
      createdAt: new Date(2021, 11, 1, 0, 0),
      updatedAt: new Date(2021, 11, 1, 0, 0),
    },
  ],
  createdAt: new Date(2021, 11, 1, 0, 0),
  updatedAt: new Date(2021, 11, 1, 0, 0),
};

const attendanceCounts = event.possibleDates.map((possibleDate) => {
  return {
    date: possibleDate.date,
    positiveCount:
      possibleDate.votes !== undefined
        ? possibleDate.votes.filter((_vote) => _vote.vote === '○').length
        : 0,
    evenCount:
      possibleDate.votes !== undefined
        ? possibleDate.votes.filter((_vote) => _vote.vote === '△').length
        : 0,
    negativeCount:
      possibleDate.votes !== undefined
        ? possibleDate.votes.filter((_vote) => _vote.vote === '×').length
        : 0,
  };
});

const scores = attendanceCounts.map((count) => {
  return count.positiveCount * 3 + count.evenCount * 2;
});
const max = Math.max(...scores);
const evaluations = scores.map((score) => {
  return score === max && score > 0 ? 'green.100' : 'white';
});

const eventDetailData = {
  eventData: event,
  counts: attendanceCounts,
  colors: evaluations,
};

export const attendanceTable = () => {
  return (
    <RecoilRoot>
      <AttendanceTable
        event={eventDetailData.eventData}
        counts={eventDetailData.counts}
        colors={eventDetailData.colors}
      />
    </RecoilRoot>
  );
};
