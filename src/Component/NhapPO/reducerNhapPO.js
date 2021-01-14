
const ItemPO = {
    item: [{
        POID: '12345PO0120120215555',
        DotNhan: '',
        id: 1,
        Name: '',
        dvt: '',
        So_luong_nhap: 0,
        So_luong_nhan: 0,
        Status: 1, //1-chưa xử lý 2-đang xử lý 3-Đã hoàn thành 9-Erro
        UserCheck: ''
    },]
};

const reducerNhapPO = (state = ItemPO, action) => {
    console.log('action.data',action.data);
    switch (action.type) {
        case "SHOW_ALL_PO":
            return {
                ...state,
                item: action.data,
            };
        case "UpNhan":
            return {
                ...state,
                item: action.data,
            }
        case "DOWNNhan":
            return {
                ...state,
                item: action.data,
            }
        case "Apply":
            return {
                ...state,
                item: action.data,
            }

        case "Processing":
            return {
                ...state,
                ItemPO: state.ItemPO.map((e) => {
                    if (e.id !== action.id) return e;
                    return { ...e, Status: e.Status = 3 }
                }
                )
            }

        case "Error":
            return {
                ...state,
                ItemPO: state.ItemPO.map((e) => {
                    if (e.id !== action.id) return e;
                    return { ...e, Status: e.Status = 9 }
                })
            }

        case "UpUserCheck":
            return {
                ...state,
                ItemPO: state.ItemPO.map((e) => {
                    if (e.id !== action.id) return e;
                    return { ...e, UserCheck: e.UserCheck }
                })
            }
        default:
            break;
    }
    console.log('action PO: ' + action);
    return state;
}
export { reducerNhapPO };