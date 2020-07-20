import styled from "styled-components";

export const Base = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 14px;
  display: grid;
  grid-template-rows: max-content auto;
  grid-gap: 10px;
  height: 100%;
  padding: 5px;
`;

export const BoardList = styled.div`
  background-color: rgb(235, 236, 240);
  border-radius: 3px;
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 10px;
  height: max-content;
  padding: 10px;
`;

export const BoardLists = styled.div`
  display: grid;
  grid-auto-columns: 272px;
  grid-auto-flow: column;
  grid-gap: 8px;
  overflow: auto;
`;

export const ListTitle = styled.div`
  font-weight: bold;
`;

export const Task = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  padding: 10px;
`;

export const AddCard = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
`;

export const Board = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: max-content auto;
`;

export const Button = styled.button`
  margin-bottom: 10px;
`;
