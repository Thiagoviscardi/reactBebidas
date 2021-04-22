import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/Reducer'
import Menu from '../menu/menu'
import './adicionar.css'

function Adicionar() {

    const [item, setItem] = useState({ name: "", description: "" })
    const dispatch = useDispatch();

    function formChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    function onSubmit(e) {
        e.preventDefault();
        dispatch(addItem(item))
        setItem({ name: "", description: "" })
    }
    return (
        <>
            <Menu />
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="group-form">
                        <label>Titulo</label>
                        <input className="form-control"
                            onChange={formChange}
                            name="name"
                            value={item.name} />
                    </div>
                    <div className="group-form">
                        <label>Descrição</label>
                        <input className="form-control"
                            onChange={formChange}
                            name="description"
                            value={item.description} />
                    </div>
                    <div className="group-form">
                        <button>Salvar</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Adicionar