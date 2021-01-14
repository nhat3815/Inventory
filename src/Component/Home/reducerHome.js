const ItemMenu = {
  item:[
    {
      id: 1,
      navigation: '',
      Title: '',
      classIcon:'',
      Icon: '',
      isShow: true,
    }
  ]
}

const ReducerHome = (state = ItemMenu, action) => {

  switch (action.type) {
    case 'SHOW_ALL':
      return {
        ...state,
        item: action.data,
      };
    default:
      break;
  }
    console.log('actionHome ' + action);
  return state;
};
export {ReducerHome};
