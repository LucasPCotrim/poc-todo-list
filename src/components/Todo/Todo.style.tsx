import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`;

export const TodoContainer = styled.div<{ checked: boolean }>`
  background-color: ${(props) => (props.checked ? '#659b6a' : '#ffffff')};
  min-width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  opacity: 0;
  animation-name: ${fadeInAnimation};
  animation-fill-mode: forwards;
  animation-duration: 1s;

  .todo-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    .status-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: ${(props) => (props.checked ? '#3122a5' : '#3122a5')};
      transform: translateY(1.5px);
      cursor: pointer;
    }

    .delete-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      color: #852121;
      cursor: pointer;
    }
  }

  .content {
    font-size: 20px;
    color: ${(props) => (props.checked ? 'white' : 'black')};
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
`;
