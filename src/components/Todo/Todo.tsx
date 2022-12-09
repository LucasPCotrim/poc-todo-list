import { TodoContainer } from './Todo.style';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { useState } from 'react';

type TodoProps = {
  name: string;
  index: number;
  handleDelete: (index: number) => void;
};

export default function Todo({ name, index, handleDelete }: TodoProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = (event: React.MouseEvent<HTMLElement>) => {
    setChecked(!checked);
  };

  return (
    <TodoContainer checked={checked}>
      <div className='content'>{name}</div>
      <div className='todo-buttons'>
        <div className='status-icon' onClick={handleCheck}>
          {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </div>
        <div className='delete-icon' onClick={() => handleDelete(index)}>
          <RiDeleteBin5Fill />
        </div>
      </div>
    </TodoContainer>
  );
}
