'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import ComplaintsTable from './components/ComplaintsTable';

const Map = dynamic(() => import('@/app/components/Map'), { ssr: false });
const Home = () => {
  return (
    <>
      <Flex gap={4}>
        <Box flex={1}>
          <Map />
        </Box>
        <Box flexBasis='400px' overflow='hidden'>
          <ComplaintsTable />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
