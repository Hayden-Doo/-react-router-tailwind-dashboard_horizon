import { Button, Checkbox, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useTodoDispatch } from '../../../contexts/TodoContext';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../../../store/slices/todoSlice';
// import { onDelete, onUpdate } from '../../../store/actions/todoAction';

const TodoItem = ({ id, isDone, task, createdDate }) => {
  const dispatch = useDispatch();

  return (
    <Flex key={id} as={'li'} alignItems={'center'} gap={3}>
      <Checkbox
        checked={isDone}
        name="todoTask"
        id={id}
        onChange={() => dispatch(updateTodo(id))}
      >
        <Text
          as={'strong'}
          fontSize={20}
          fontWeight={600}
          textDecoration={isDone ? 'line-through' : 'none'}
          color={isDone && 'red'}
        >
          {task}{' '}
        </Text>
        <span>{new Date(createdDate).toLocaleDateString()}</span>
      </Checkbox>
      <Spacer />
      <Button onClick={() => dispatch(deleteTodo(id))}>삭제</Button>
    </Flex>
  );
};

export default React.memo(TodoItem);
