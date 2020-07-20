import React from "react";
import List from "./components/List";
import { connect } from "react-redux";
import AddButton from "./components/AddButton";
import "./css/App.css";
import { Base, BoardLists, Board, BoardList } from "./components/styled/Base";

function App(props) {
  const { lists } = props;

  const renderList = () => {
    if (lists) {
      return lists.map((list) => {
        return (
          <List
            key={list.id}
            listId={list.id}
            title={list.title}
            cards={list.cards}
          />
        );
      });
    }
    return null;
  };

  return (
    <Base>
      <Board>
        <BoardLists>
          {renderList()}
          <BoardList>
            <AddButton list />
          </BoardList>
        </BoardLists>
      </Board>
    </Base>
  );
}

const mapStateToProps = (state) => {
  return { lists: state.lists };
};

export default connect(mapStateToProps)(App);
