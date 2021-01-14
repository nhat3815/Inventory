let ItemDotNhan = {
    item:[
        {
            POID: '12345PO0120120215555',
            DotNhan:'12345DN14012021',
            NgayNhan:'10/12/1997',
            HinhThuc:'Put',
            TrangThai:1,
        }
    ]

};
 
const reducerDotNhan = (state = ItemDotNhan, action) => {
    switch (action.type) {
        case 'SHOW_ALL_DN':
            return {
                ...state,
                item: action.data,
            }
        case 'GetDataInDotNhan':
            return {
                ...state,
                item: action.data,
            }
        default:
            console.log(action.type)
            return state
    }
}

export {reducerDotNhan}
