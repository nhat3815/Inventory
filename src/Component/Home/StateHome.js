import React from 'react';
 const ItemMenu = [
    {
      id: 1,
      navigation: 'KiemDemNav',
      Title: 'Kiểm đếm',
      classIcon:'fab',
      Icon: 'Check.png',
      isShow: true,
    },
    {
      id: 2,
      navigation: 'SearchPONav',
      Title: 'Nhập PO',
      classIcon:'fab',
      Icon: 'can.png',
      isShow: true,
    },
    {
      id: 3,
      navigation: 'TestNav',
      Title: 'Test',
      classIcon:'fab',
      Icon: 'loupe.png',
      isShow: true,
    },
  ];

export const get_success = () => {
  return(dispatch,getState) =>{
    dispatch(get_item(ItemMenu))
  }
}
export const get_item = function(data) {
  return {
    type: 'SHOW_ALL',
    data
  }
}
