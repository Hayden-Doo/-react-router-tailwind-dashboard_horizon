import React from 'react';
import { format } from 'date-fns';
import { Text, Box, Heading } from '@chakra-ui/react';

const TodoHd = () => {
  return (
    <Box py={5}>
      <Heading as={'h2'} fontSize={20}>
        할 일 관리 앱
      </Heading>
      <Box mt={3}>
        <Text as={'span'} fontSize={18} fontWeight={700}>
          {format(new Date(), 'yyyy.MM.dd')}
        </Text>{' '}
        오늘의 할 일을 적어보세요.
      </Box>
    </Box>
  );
};

export default TodoHd;
