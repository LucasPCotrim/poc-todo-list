import { TodoListContainer } from './TodoList.style';
import Todo from '../Todo/Todo';
import { useState } from 'react';

export default function TodoList() {
  const [toDos, setToDos] = useState(['ToDo 1', 'ToDo 2']);

  const handleDelete = (index: number) => {
    setToDos([...toDos].splice(index, 1));
  };

  return (
    <>
      <TodoListContainer>
        {toDos.map((toDo, index) => (
          <Todo
            key={index}
            name={toDo}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </TodoListContainer>
    </>
  );
}
