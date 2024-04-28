import { Button, Checkbox, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

// const TodoItem = ({ todo }) => {
const TodoItem = ({ id, isDone, task, createdDate, onUpdate, onDelete }) => {
  return (
    <Flex key={id} as={'li'} alignItems={'center'} gap={3}>
      <Checkbox
        checked={isDone}
        name="todoTask"
        id={id}
        onChange={() => onUpdate(id)}
      >
        <Text
          as={'strong'}
          fontSize={20}
          fontWeight={600}
          textDecoration={isDone ? 'line-through' : 'none'}
          color={isDone && 'red'}
          // style={{ textDecoration: isDone ? 'line-through' : 'none' }}
        >
          {task}{' '}
        </Text>
        <span>{new Date(createdDate).toLocaleDateString()}</span>
      </Checkbox>
      <Spacer />
      <Button onClick={() => onDelete(id)}>삭제</Button>
    </Flex>
  );
};

export default TodoItem;
