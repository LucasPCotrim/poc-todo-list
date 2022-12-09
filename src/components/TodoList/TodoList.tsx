import { TodoListContainer, CreateTodoFormContainer } from './TodoList.style';
import Todo from '../Todo/Todo';
import { useState } from 'react';

type CreateToDoFormProps = {
  toDos: toDoType[];
  setToDos: (toDos: toDoType[]) => void;
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
    setToDos([...toDos, { name: form.toDo, checked: false }]);
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

type toDoType = {
  name: string;
  checked: boolean;
};
export default function TodoList() {
  const [toDos, setToDos] = useState([] as toDoType[]);

  const handleDelete = (index: number) => {
    setToDos(toDos.filter((todo, i) => i !== index));
  };

  const handleCheck = (index: number) => {
    setToDos(
      toDos.map((todo, i) => {
        if (i === index) return { ...todo, checked: !todo.checked };
        return todo;
      })
    );
  };

  return (
    <>
      <CreateToDoForm toDos={toDos} setToDos={setToDos} />
      <TodoListContainer>
        {toDos.map((toDo, index) => (
          <Todo
            key={index}
            name={toDo.name}
            checked={toDo.checked}
            index={index}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </TodoListContainer>
    </>
  );
}
