import { TodoListContainer } from './TodoList.style';
import Todo from '../Todo/Todo';

export default function TodoList() {
  return (
    <>
      <TodoListContainer>
        <Todo />
        <Todo />
        <Todo />
      </TodoListContainer>
    </>
  );
}
