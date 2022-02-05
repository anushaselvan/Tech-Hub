
const initalState = {};


export default function reducer (state = initalState, action) {

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
      return state;
  
}

