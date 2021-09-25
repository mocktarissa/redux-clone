function createStore() {
  let state;
  let listeners = [];
  /**
   * Dispatch clone from redux
   * @param
   */
  function dispatch(action) {
    //First call the reducer
    state = reducer(state, action);
    // Then notifies the subscribers
    for (let listener of listeners) {
      listener();
    }
  }

  /**
   * Using the Propriety that makes it such that functions are first class citizens
   * Encapsualtes the state variable a makes it read only
   * @params:re
   */
  function getState(reducer) {
    return state;
  }

  /**
   * Helps the UI compoenents subscribe to the store
   */

  function subscribe(listener) {
    listeners.push(listener);
  }
  return {
    dispatch,
    getState,
    subscribe,
  };
}
