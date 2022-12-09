import styled from 'styled-components';

export const TodoContainer = styled.div`
  background-color: #a2a2a2;
  width: min(100%, 800px);
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 15px;

  .content {
    font-size: 20px;
    color: #103558;
  }

  .delete-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: #852121;
    cursor: pointer;
  }
`;
