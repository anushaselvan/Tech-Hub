import {
  ADD_QUESTION,
  ADD_ANSWER,
} from './actions';

const initalState = {
  question: [],
  active: false,
  answer: [],
}

export default function reducer (state = initalState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        active: true,
        question: [...state.question, action.question],
      };

      case ADD_ANSWER:
        return {
          ...state,
          answer: [...state.answer, action.answer],
        };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
      }
};
