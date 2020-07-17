import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addList, editTitle } from "../actions/listsActions";
import { addCard } from "../actions/cardsActions";
import { Button } from "./styled/Base";

const AddButton = (props) => {
  const { list, dispatch, listId, title } = props;

  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAddList = () => {
    if (text) {
      dispatch(addList(text));
      setText("");
    }
    return;
  };

  const handleAddCard = () => {
    if (text) {
      dispatch(addCard(listId, text));
      setText("");
    }
  };

  const renderButton = () => {
    const buttonText = list ? "+ Add another List" : "+ Add another card";
    return <div onClick={() => setFormOpen(true)}>{buttonText}</div>;
  };

  const renderForm = () => {
    const placeholder = list
      ? "Enter list title"
      : "Enter a title for this card...";
    return (
      <div>
        <textarea
          placeholder={placeholder}
          autoFocus
          onBlur={() => setFormOpen(false)}
          value={text}
          onChange={handleChange}
        />
        <br></br>
        <Button onMouseDown={list ? handleAddList : handleAddCard}>Save</Button>
      </div>
    );
  };

  return formOpen ? renderForm() : renderButton();
};

AddButton.propTypes = {
  list: PropTypes.string.isRequired,
};

export default connect()(AddButton);
