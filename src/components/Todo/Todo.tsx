import { TodoContainer } from './Todo.style';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { useState } from 'react';

export default function Todo() {
  const [checked, setChecked] = useState(false);

  const handleCheck = (event: React.MouseEvent<HTMLElement>) => {
    setChecked(!checked);
  };

  return (
    <TodoContainer checked={checked}>
      <div className='content'>ToDo</div>
      <div className='todo-buttons'>
        <div className='status-icon' onClick={handleCheck}>
          {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </div>
        <div className='delete-icon'>
          <RiDeleteBin5Fill />
        </div>
      </div>
    </TodoContainer>
  );
}
