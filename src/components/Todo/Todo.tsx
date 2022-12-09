import { TodoContainer } from './Todo.style';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export default function Todo() {
  return (
    <TodoContainer>
      <div className='content'>ToDo</div>
      <div className='delete-icon'>
        <RiDeleteBin5Fill />
      </div>
    </TodoContainer>
  );
}
