import { TodoContainer } from './Todo.style';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

type TodoProps = {
  name: string;
  checked: boolean;
  index: number;
  handleDelete: (index: number) => void;
  handleCheck: (index: number) => void;
};

export default function Todo({
  name,
  checked,
  index,
  handleDelete,
  handleCheck,
}: TodoProps) {
  return (
    <TodoContainer checked={checked}>
      <div className='content'>{name}</div>
      <div className='todo-buttons'>
        <div className='status-icon' onClick={() => handleCheck(index)}>
          {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </div>
        <div className='delete-icon' onClick={() => handleDelete(index)}>
          <RiDeleteBin5Fill />
        </div>
      </div>
    </TodoContainer>
  );
}
