import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`;

export const TodoListContainer = styled.div`
  width: min(90%, 800px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const CreateTodoFormContainer = styled.div`
  position: relative;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c1c1c2;
  margin-bottom: 50px;
  padding: 20px;
  border-radius: 15px;

  opacity: 0;
  animation-name: ${fadeInAnimation};
  animation-fill-mode: forwards;
  animation-duration: 1s;

  -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

  .form-title {
    position: absolute;
    top: 20px;
    left: 20px;
    color: black;
    font-size: 20px;
  }

  form {
    height: 100%
    position: relative;
    > input {
      width: 100%;
      height: 58px;
      background-color: #ffffff;
      border-radius: 8px;
      font-size: 20px;
      line-height: 23px;
      color: var(--tertiary-color-alt);
      padding-left: 15px;
      outline: none;
      &::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: gray;
      }
      &:focus::placeholder {
        color: transparent;
      }
    }
    > button {
      background-color: #518f41;
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 80px;
      height: 35px;
      border-radius: 8px;
      color: #ffffff;
      &:disabled {
        background-color: #ffffff;
        color: black;
      }
    }
  }
`;
