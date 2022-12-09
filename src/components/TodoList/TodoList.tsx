import { TodoListContainer, CreateTodoFormContainer } from './TodoList.style';
import Todo from '../Todo/Todo';
import { useState } from 'react';

type CreateToDoFormProps = {
  toDos: string[];
  setToDos: (toDos: string[]) => void;
};
function CreateToDoForm({ toDos, setToDos }: CreateToDoFormProps) {
  const [form, setForm] = useState({
    toDo: '',
  });

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      toDo: '',
    });
  };
  const executeCreateToDo = (event: React.FormEvent) => {
    event.preventDefault();
    setToDos([...toDos, form.toDo]);
    console.log(form);
    clearForm();
  };
  const invalidToDo = form.toDo === '';

  return (
    <>
      <CreateTodoFormContainer>
        <div className='form-title'>Create a To Do</div>
        <form onSubmit={executeCreateToDo}>
          <input
            name='toDo'
            type='text'
            onChange={handleForm}
            value={form.toDo}
            placeholder='Insert your To Do here'
          />
          <button disabled={invalidToDo}>submit</button>
        </form>
      </CreateTodoFormContainer>
    </>
  );
}

export default function TodoList() {
  const [toDos, setToDos] = useState([] as string[]);

  const handleDelete = (index: number) => {
    setToDos(toDos.filter((todo, i) => i !== index));
  };

  return (
    <>
      <CreateToDoForm toDos={toDos} setToDos={setToDos} />
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
