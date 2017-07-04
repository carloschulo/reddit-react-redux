export const loadState = () => {
  try {
    const serialized = localStorage.getItem('state');
    if( serialized === null){
      return undefined;
    }
    return JSON.parse(serialized);
  } catch (error) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    //ignore for now
  }
}