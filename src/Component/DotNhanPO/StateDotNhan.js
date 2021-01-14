let ItemDotNhan = [
    {
        POID: '12345PO0120120215555',
        DotNhan:'12345DN14012021',
        NgayNhan:'10/12/1997',
        HinhThuc:'Put',
        TrangThai:1,
    },

    {
      POID: '12345PO0120120215555',
      DotNhan:'12345DN14012022',
      NgayNhan:'10/12/1997',
      HinhThuc:'Put',
      TrangThai:1,
    },
    {
      POID: '12345PO0120120215556',
      DotNhan:'12345DN14012024',
      NgayNhan:'10/12/1997',
      HinhThuc:'Put',
      TrangThai:1,
    },
];


export const get_success = () => {
    return(dispatch,getState) =>{
      dispatch(get_item(ItemDotNhan))
    }
  }

  export const get_item = function(data) {
    return {
      type: 'SHOW_ALL_DN',
      data
    }
    }

  export const getItemDNToPO = (id) =>{
    return(dispatch, getState) => {
      let listTam = []
      ItemDotNhan.map((e)=> {
        if(id !== e.POID) return e
        else{
          console.log('Test ID: ', id,'====', e.POID)
          listTam.push(e)
          return listTam
        }
      })
      dispatch(get_item(listTam))
      return(ItemDotNhan = listTam)     
    }
  }

// export const getItem = function(DotNhan) {
//     return{
//         type:'GetDataInDotNhan',
//         DotNhan:DotNhan,
//     }            

  // export const  = (poid) =>{

  //   }
// }