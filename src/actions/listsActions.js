import CONSTANTS from "../actions";

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};

export const editTitle = (listID, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle,
    },
  };
};

export const deleteList = (listId) => {
  return {
    type: CONSTANTS.DELETE_LIST,
    payload: { listId },
  };
};

