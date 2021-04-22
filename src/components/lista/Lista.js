import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './lista.css'
import Menu from '../menu/menu'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../redux/Reducer'
function Lista() {

    const [lista, setLista] = useState([]); //Criando as constantes de estado.
    const listaProdutos = useSelector((state) => state.lista) //vem do redux
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(' https://api.punkapi.com/v2/beers/')
            .then((res => {
                setLista(res.data) //lista recebe os dados da api
            }))
    })


    const allItens = Object.assign([], lista, listaProdutos);

    function AdicionaItensRedux() { // acho que tem que fazer algo aqui para adicionar todos os elemetos 
        dispatch(addItem(lista))
    }


    return (
        <>
            <Menu />
            <div className="container">
                <h2 className="text-center">Listagem de todas as bebidas</h2>
                <div className="page-list-cervejas">
                    {/* mapeia os dados */}
                    {allItens.map(cervejas => (

                        <div className="card">
                            <img src={cervejas.image_url} className="img-responsive" />
                            <p className="title">{cervejas.name}</p>
                            <p className="descCard">{cervejas.description}</p>
                            <button className="remove-item" onClick={() => dispatch(removeItem(cervejas.id))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </button>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )

}

export default Lista;