import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList/TodoList';

describe('ToDoList', () => {
  test('must render TodoList', () => {
    render(<TodoList />);
    const ToDoList = screen.getByTestId('todo-list');
    expect(ToDoList).toBeInTheDocument();
  });
  test('must not render any ToDos initially', () => {
    render(<TodoList />);
    const ToDos = screen.queryAllByTestId('todo');
    expect(ToDos.length).toBe(0);
  });
});

describe('CreateToDoForm', () => {
  test('must render createToDoForm', () => {
    render(<TodoList />);
    const createToDoForm = screen.getByTestId('create-todo-form');
    expect(createToDoForm).toBeInTheDocument();
  });
  test('form state must have emtpy string initially', () => {
    render(<TodoList />);
    const createToDoForm = screen.getByTestId('create-todo-form');
    expect(createToDoForm).toHaveFormValues({
      toDo: '',
    });
  });
  test('user must be able to enter any string into input', () => {
    render(<TodoList />);
    const createToDoFormInput = screen.getByTestId('create-todo-form-input');
    fireEvent.change(createToDoFormInput, { target: { value: 'ToDo Test 1' } });
    expect(createToDoFormInput.value).toBe('ToDo Test 1');
  });
  test('user must be able to create a new To Do', () => {
    render(<TodoList />);
    const createToDoFormInput = screen.getByTestId('create-todo-form-input');
    const createToDoFormButton = screen.getByTestId('create-todo-form-button');
    fireEvent.change(createToDoFormInput, { target: { value: 'ToDo Test 1' } });
    fireEvent.click(createToDoFormButton);
    const ToDos = screen.queryAllByTestId('todo');
    expect(ToDos.length).toBe(1);
  });
});
