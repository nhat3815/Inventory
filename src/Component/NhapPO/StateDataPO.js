let ItemPO = [
    {
        POID: '12345PO0120120215555',
        DotNhan:'DN001',
        id:1,
        Name:'Nước lama',
        dvt: 'Lon',
        So_luong_nhap:100,
        So_luong_nhan: 0,
        Status: 1, //1-chưa xử lý 2-đang xử lý 3-Đã hoàn thành 9-Erro
        UserCheck: 'NhatNHM'
    },
    {
        POID: '12345PO0120120215555',
        DotNhan:'DN001',
        id:2,
        Name:'Nước lama 2',
        dvt: 'Lon',
        So_luong_nhap:100,
        So_luong_nhan: 10,
        Status: 1, //1-chưa xử lý 2-đang xử lý 3-Đã hoàn thành 9-Erro
        UserCheck: 'NhatNHM'
        
    },
];


export const get_success = () => {
    return(dispatch,getState) =>{
      dispatch(get_item(ItemPO))
    }
  }

  export const get_item = function(data) {
    return {
      type: 'SHOW_ALL_PO',
      data
    }
    }

    export const UpNhan = function(data) {
      return{
        type:'UpNhan',
        data
      }
    }
    export const downNhan = function(data) {
      return{
        type:'DOWNNhan',
        data
      }
    }
    export const get_successDN = function(data){
      return{
        type: 'Apply',
        data
      }
    }

    export const Apply_success = () => {
      return (dispatch, getState) =>{
        let Status = ItemPO.map((e)=> {
          // if(e.DotNhan !== ) return e
          return{...e, Status: e.Status = 3}
        })
        console.log('Trạng thái: ', e.Status)
        dispatch(get_successDN(Status))
        return(ItemPO = Status)
      }
    }

    export const DownNhan_success = (id) =>{
      return (dispatch,getState) =>{
        let So_luong_nhan = ItemPO.map((e)=> {
          if(e.id !== id) return e
          else {
            console.log('Số lượng nhận: ', e.So_luong_nhan !== 0)
            if(e.So_luong_nhan !== 0){
              return{...e, So_luong_nhan: e.So_luong_nhan -1}
            }
            else {
              return e
            }
          }
        })
        
        console.log('eeeeee',ItemPO)
        dispatch(downNhan(So_luong_nhan))
        return (ItemPO = So_luong_nhan)
      }
    }

    export const UpNhan_success = (id) => {
      return (dispatch,getState) => {
        let So_luong_nhan = ItemPO.map((e)=> {
          if(e.id !== id ) return e
          else {
            return{...e, So_luong_nhan: e.So_luong_nhan +1}
          }
        })
        
        console.log('eeeeee',ItemPO)
        dispatch(UpNhan(So_luong_nhan))
        return (ItemPO = So_luong_nhan)
      }
    }

  
