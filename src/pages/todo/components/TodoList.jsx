import React, { useMemo, useState } from 'react';
import TodoItem from './TodoItem';
import { Box, Heading, Input } from '@chakra-ui/react';
import { useTodoDispatch, useTodoState } from '../../../contexts/TodoContext';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const [search, setSearch] = useState('');
  // const todo = useTodoState();
  // const dispatch = useTodoDispatch();
  const todo = useSelector((state) => state.todo.todos);
  // const dispatch = useDispatch();

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredTodo = useMemo(() => {
    if (Array.isArray(todo)) {
      return todo.filter((item) =>
        item.task.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return [];
    }
  }, [search, todo]);

  const lookBack = useMemo(() => {
    console.log('lookBack');
    const total = todo.length;
    const done = todo.filter((item) => item.isDone).length;
    const left = total - done;

    return { total, done, left };
  }, [todo]);

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
        {/* {filteredTodo().map((item) => ( */}
        {filteredTodo.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
      <div>
        {/* {lookBack().total}개 중에 {lookBack().done}개 완료, {lookBack().left}개 남음 */}
        <hr />
        <h3>통계</h3>
        {lookBack.total}개 중에 {lookBack.done}개 완료, {lookBack.left}개 남음
      </div>
    </Box>
  );
};

export default TodoList;
