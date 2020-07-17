import React, { useState } from "react";
import PropTypes from "prop-types";
import { editCard, deleteCard } from "../actions/cardsActions";
import { connect } from "react-redux";
import { Task } from "./styled/Base";

const Card = (props) => {
  const { text, id, listId, dispatch } = props;

  const [cardText, setCardText] = useState(text);
  const [isEditing, setEditting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleChange = (event) => {
    setCardText(event.target.value);
  };

  const updateCard = (event) => {
    event.preventDefault();
    dispatch(editCard(id, listId, cardText));
    setEditting(false);
  };

  const handleDeleteCard = () => {
    dispatch(deleteCard(id, listId));
  };

  const renderEditForm = () => {
    return (
      <form>
        <div>
          <textarea
            autoFocus
            onBlur={updateCard}
            value={cardText}
            onChange={handleChange}
          />
          <div>
            <button>Save</button>
            {isDeleting ? (
              <button onMouseDown={handleDeleteCard}>Delete</button>
            ) : null}
          </div>
        </div>
      </form>
    );
  };

  return (
    <div
      onMouseEnter={() => setIsDeleting(true)}
      onMouseLeave={() => setIsDeleting(false)}
    >
      {isEditing ? (
        renderEditForm()
      ) : (
        <Task onClick={() => setEditting(true)}>{cardText}</Task>
      )}
    </div>
  );
};

Card.propTypes = {};

export default connect()(Card);
