import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Box, Heading, Input } from '@chakra-ui/react';

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredTodo = () => {
    return todo.filter((item) =>
      item.task.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <Box py={5}>
      <Heading as={'h2'} fontSize={20}>
        할 일 목록
      </Heading>
      <Input
        type="text"
        placeholder="search"
        my={3}
        bg={'white'}
        onChange={onChangeSearch}
        value={search}
      />

      <ul>
        {/* <TodoItem todo={filteredTodo()} /> */}
        {filteredTodo().map((item) => (
          <TodoItem
            key={item.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
            {...item}
          />
        ))}
      </ul>
    </Box>
  );
};

export default TodoList;
