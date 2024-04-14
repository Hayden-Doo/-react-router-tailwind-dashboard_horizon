import {
  CheckIcon,
  CloseIcon,
  NotAllowedIcon,
  SmallCloseIcon,
} from '@chakra-ui/icons';
import {
  Card,
  Progress,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { progress } from 'framer-motion';

function ComplexTable() {
  const complexData = [
    {
      id: 1,
      name: 'MarketPlace',
      status: 'approved',
      date: '12/12/2021',
      progress: 20,
    },
    {
      id: 2,
      name: 'MarketPlace',
      status: 'disable',
      date: '12/12/2021',
      progress: 70,
    },
    {
      id: 3,
      name: 'MarketPlace',
      status: 'error',
      date: '12/12/2021',
      progress: 40,
    },
    {
      id: 4,
      name: 'MarketPlace',
      status: 'approved',
      date: '12/12/2021',
      progress: 100,
    },
  ];

  return (
    <Card my={10}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>name</Th>
              <Th>status</Th>
              <Th>date</Th>
              <Th>progress</Th>
            </Tr>
          </Thead>
          <Tbody>
            {complexData.map((data) => (
              <Tr key={data.id}>
                <Td>{data.name}</Td>
                <Td>
                  {data.status === 'approved' && <CheckIcon color={'green'} />}
                  {data.status === 'disable' && (
                    <SmallCloseIcon color={'red'} fontSize={24} />
                  )}
                  {data.status === 'error' && (
                    <NotAllowedIcon color={'red'} fontSize={20} />
                  )}
                  {data.status}
                </Td>
                <Td>{data.date}</Td>
                <Td>
                  <Progress value={data.progress} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default ComplexTable;
