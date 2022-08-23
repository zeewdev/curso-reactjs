import styled from "styled-components";
export const TodoContent = styled.form`
  width: 100%;
  max-width: 500px;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1.2em;
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

export const TodoContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
`;

export const TodoContentBotton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
`;

export const TodoModalBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const TodoTextArea = styled.textarea`
  width: 100%;
  height: 10em;
  border: none;
  border-radius: 8px;
  padding: 1em;
  margin-bottom: 1em;
  resize: none;
  background-color: #2a2a2a;
  color: white;
  outline: none;
`;

export const TodoBottonCreate = styled.button`
  background: #3a3a3a;
  border: none;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1em;
  width: 100%;
  padding: 5px 0px;
`;
