const initialState = {
  list: [
    {title: 'Welcome to RealNotes', body: 'Developer by jrrealsolutions.co.uk'},
  ],
};
export default (state = initialState, action) => {
  let newList = [...state.list];

  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body,
      });
      break;
    case 'EDIT_NOTE':
      if (newList[action.payload.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          body: action.payload.body,
        };
      }
      break;
    case 'DEL_NOTE':
      newList = newList.filter((item, index) => index != action.payload.key);
  }

  return {...state, list: newList};
};
