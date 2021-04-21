import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {

    const [dados, setDados] = useState([])

    useEffect(() => {

        axios
            .get('https://api.punkapi.com/v2/beers/')
            .then((res) => {
                setDados(res.data)
            })
    })

    console.log(setDados)

    return (
        <>

            <div className="row col-md-9">
                <h5 className="listagemH5">Listagem de Bebidas</h5>
                <div className="all-cards">
                    {dados.map(dado => (


                        <div className="card">
                            <div className="card-body">
                                <img src={dado.image_url} />
                                <p className="card-text">id : {dado.id}</p>
                                <p>Nome: {dado.name}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )

}

export default Home
