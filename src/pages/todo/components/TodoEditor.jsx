import React, { useRef, useState } from 'react';
import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';

const TodoEditor = ({ addTodo }) => {
  const [task, setTask] = useState('');
  // const inputRef = useRef();
  const onChange = (e) => {
    setTask(e.target.value);
  };
  const onSubmit = () => {
    if (!task) {
      alert('입력하세요!!!!');
      return;
    }
    addTodo(task);
    setTask('');
  };
  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit();
  };

  return (
    <Box py={5}>
      <Heading as={'h2'} fontSize={20}>
        새로운 todo 작성하기
      </Heading>
      <Flex py={3} gap={3}>
        <Input
          ref={(inputRef) => {
            inputRef && inputRef.focus();
          }}
          type="text"
          placeholder="할 일을 추가하세요."
          bg={'white'}
          gap={3}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={task}
        />
        <Button onClick={onSubmit}>추가</Button>
      </Flex>
    </Box>
  );
};

export default TodoEditor;
