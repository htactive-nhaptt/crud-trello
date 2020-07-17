import React from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import { useState } from "react";
import { editTitle, deleteList } from "../actions/listsActions";
import { connect } from "react-redux";
import { ListTitle, BoardList } from "./styled/Base";

const List = (props) => {
  const { title, cards, listId, dispatch } = props;
  const [isEditting, setIsEditting] = useState(false);
  const [listTitle, setListTitle] = useState(title);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleUpdate = () => {
    setIsEditting(false);
    dispatch(editTitle(listId, listTitle));
  };

  const handleChangeTitle = (event) => {
    setListTitle(event.target.value);
  };

  const handleForcus = (event) => {
    event.target.select();
  };

  const handleDeleteList = () => {
    console.log(listId);
    dispatch(deleteList(listId));
  };

  const renderEditForm = () => {
    return (
      <form>
        <div>
          <textarea
            autoFocus
            onFocus={handleForcus}
            onBlur={handleUpdate}
            value={listTitle}
            onChange={handleChangeTitle}
          />
          <div>
            <button>Save</button>
            {isDeleting ? (
              <button onMouseDown={handleDeleteList}>Delete List</button>
            ) : null}
          </div>
        </div>
      </form>
    );
  };

  return (
    <BoardList>
      {isEditting ? (
        renderEditForm()
      ) : (
        <div
          onMouseEnter={() => {
            setIsDeleting(true);
          }}
          onMouseLeave={() => {
            setIsDeleting(false);
          }}
        >
          <ListTitle onClick={() => setIsEditting(true)}>{listTitle}</ListTitle>
        </div>
      )}
      {cards.map((card) => {
        return <Card id={card.id} listId={listId} text={card.text} />;
      })}

      <AddButton title={title} listId={listId} />
    </BoardList>
  );
};

export default connect()(List);
