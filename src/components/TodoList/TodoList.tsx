import { TodoListContainer } from './TodoList.style';
import Todo from '../Todo/Todo';
import { useState } from 'react';

export default function TodoList() {
  const [toDos, setToDos] = useState(['ToDo 1', 'ToDo 2', 'ToDo 3', 'ToDo 4']);

  const handleDelete = (index: number) => {
    setToDos(toDos.filter((todo, i) => i !== index));
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
