import CONSTANTS from "../actions";

const initialState = [
  {
    title: "List 1",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Task 1",
      },
      {
        id: 1,
        text: "Task 2",
      },
    ],
  },
  {
    title: "List 2",
    id: 1,
    cards: [
      {
        id: 0,
        text: "Task 3",
      },
      {
        id: 1,
        text: "Task 4",
      },
    ],
  },
];

let listId = 2;
let cardId = 2;

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const newList = {
        title: action.payload,
        id: listId,
        cards: [],
      };
      listId += 1;
      return [...state, newList];
    }
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: cardId,
      };
      cardId += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case CONSTANTS.DELETE_LIST: {
      const { listId } = action.payload;
      return state.filter((list) => {
        if (list.id !== listId) return list;
        return list;
      });
    }
    case CONSTANTS.DELETE_CARD: {
      const { listId, id } = action.payload;
      return state.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            cards: list.cards.filter((card) => card.id !== id),
          };
        }
        return list;
      });
    }
    default:
      return state;
  }
};

export default listReducer;
