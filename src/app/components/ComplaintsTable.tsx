import {
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
import { mockComplaints } from '../data';

const ComplaintsTable = () => {
  return (
    <TableContainer fontSize='14px'>
      <Table variant='simple'>
        <TableCaption>Noise Complaints</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Lat</Th>
            <Th>Lon</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mockComplaints.slice(0, 15).map(({ name, lat, lon }) => (
            <Tr key={`${lat}-${lon}`}>
              <Td>{name}</Td>
              <Td>{lat.toFixed(4)}</Td>
              <Td>{lon.toFixed(4)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ComplaintsTable;
