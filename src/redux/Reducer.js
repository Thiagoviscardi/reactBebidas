
import lista from './Lista'
const initialSatate =[
    ...lista
]

export default (state =  initialSatate, action)=>{
    switch (action.type){
        case "ADD_ITEM":
            return[...state, action.item];
        case "REMOVE_ITEM":
            return state.filter(item=>item.id !== action.id);
        default:
            return state;
    }

}
export const addItem = (item) =>{
    return{
        type : "ADD_ITEM",
        item
    }
}

export const removeItem = (id) =>{/* Lista.js que ta nos componentes ta chamando esse remover*/
    return{
        type: "REMOVE_ITEM",
        id
    }
}