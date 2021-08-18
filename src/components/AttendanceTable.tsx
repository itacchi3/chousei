// import "../assets/styles/AttendanceTable.css";
import React from 'react';
// import Table from '@material-ui/core/Table';
import { AttendeeType } from 'src/atoms/eventState';
import { Avatar } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react';

type Props = {
  columns: string[];
  attendees: AttendeeType[];
};

const AttendanceTable = (props: Props) => {
  if (!props.columns) {
    return <></>;
  }
  const attendanceCounts = props.columns.map((column, i) => {
    return {
      date: column,
      positiveCounts: props.attendees.filter((attendee) => attendee.votes[i] === '○').length,
      evenCounts: props.attendees.filter((attendee) => attendee.votes[i] === '△').length,
      negativeCounts: props.attendees.filter((attendee) => attendee.votes[i] === '×').length,
    };
  });

  return (
    <>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>
              <Center>日程</Center>
            </Th>
            <Th>
              <Center>○</Center>
            </Th>
            <Th>
              <Center>△</Center>
            </Th>
            <Th>
              <Center>×</Center>
            </Th>
            {props.attendees.map((atendee, i) => (
              <Th key={i} p="2">
                <Popover placement="top">
                  <PopoverTrigger>
                    <Center>
                      <Avatar src={atendee.profileImg} size="sm" />
                    </Center>
                  </PopoverTrigger>
                  <PopoverContent w="auto">
                    <PopoverArrow />
                    <PopoverBody>{atendee.name}</PopoverBody>
                  </PopoverContent>
                </Popover>
              </Th>
            ))}
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
            <Th p="2">
              <Popover placement="top">
                <PopoverTrigger>
                  <Center>
                    <Avatar size="sm" />
                  </Center>
                </PopoverTrigger>
                <PopoverContent w="auto">
                  <PopoverArrow />
                  <PopoverBody>板井俊樹</PopoverBody>
                </PopoverContent>
              </Popover>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {attendanceCounts.map((count, i) => (
            <Tr key={i}>
              <Td>
                <Center>{props.columns[i]}</Center>
              </Td>
              <Td>
                <Center>{count.positiveCounts}</Center>
              </Td>
              <Td>
                <Center>{count.evenCounts}</Center>
              </Td>
              <Td>
                <Center>{count.negativeCounts}</Center>
              </Td>
              {props.attendees.map((atendee, index) => (
                <Td key={index}>
                  <Center>{atendee.votes[i]}</Center>
                </Td>
              ))}
              <Td>
                <Center>○</Center>
              </Td>
              <Td>
                <Center>○</Center>
              </Td>
              <Td>
                <Center>○</Center>
              </Td>
              <Td>
                <Center>○</Center>
              </Td>
              <Td>
                <Center>○</Center>
              </Td>
              <Td>
                <Center>○</Center>
              </Td>
              <Td>
                <Center>○</Center>
              </Td>
              <Td>
                <Center>○</Center>
              </Td>
              <Td>
                <Center>○</Center>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Table>
        <Tr>
          <Th size="small">コメント</Th>
        </Tr>
      </Table>
      <Table>
        <Tbody>
          {props.attendees.map(
            (atendee, i) =>
              atendee.comment !== '' && (
                <Tr key={i}>
                  <Td key={i} p="2" w="24">
                    <Popover placement="top">
                      <PopoverTrigger>
                        <Center>
                          <Avatar src={atendee.profileImg} size="sm" />
                        </Center>
                      </PopoverTrigger>
                      <PopoverContent w="auto">
                        <PopoverArrow />
                        <PopoverBody>{atendee.name}</PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Td>
                  <Td align="center">{atendee.comment}</Td>
                </Tr>
              ),
          )}
        </Tbody>
      </Table>
    </>
  );
};

export default AttendanceTable;
