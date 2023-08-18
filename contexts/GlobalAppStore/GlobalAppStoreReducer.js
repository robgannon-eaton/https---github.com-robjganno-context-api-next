export const globalAppStoreReducer = (state, action) => {
  switch (action.type) {
    case 'MY_STORE':
      return {
        ...state,
        myStore: { ...state.myStore, ...action.payload },
      };
    case 'MY_GLOBAL_VARIABLE':
      return {
        ...state,
        globalVariable: action.payload,
      };
myStore
    default:
      return state;
  }
};
