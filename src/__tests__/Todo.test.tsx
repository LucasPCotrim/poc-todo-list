import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList/TodoList';

describe('ToDo', () => {
  test('user must be able to mark To Do as checked', () => {
    render(<TodoList />);
    const createToDoFormInput = screen.getByTestId('create-todo-form-input');
    const createToDoFormButton = screen.getByTestId('create-todo-form-button');
    fireEvent.change(createToDoFormInput, { target: { value: 'ToDo Test 1' } });
    fireEvent.click(createToDoFormButton);
    const checkToDoButton = screen.getByTestId('todo-check-button');
    fireEvent.click(checkToDoButton);
    const toDoAfter = screen.queryByTestId('todo');
    expect(toDoAfter.checked).toBe(true);
  });
  test('user must be able to delete To Do', () => {
    render(<TodoList />);
    const createToDoFormInput = screen.getByTestId('create-todo-form-input');
    const createToDoFormButton = screen.getByTestId('create-todo-form-button');
    fireEvent.change(createToDoFormInput, { target: { value: 'ToDo Test 1' } });
    fireEvent.click(createToDoFormButton);
    const toDosBefore = screen.queryAllByTestId('todo');
    expect(toDosBefore.length).toBe(1);
    const deleteToDoButton = screen.getByTestId('todo-delete-button');
    fireEvent.click(deleteToDoButton);
    const toDosAfter = screen.queryAllByTestId('todo');
    expect(toDosAfter.length).toBe(0);
  });
});
