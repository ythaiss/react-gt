import React, { useState, useEffet } from 'react';
import styles from './styles.modules.css'

function ListaDeTenis(){
    const[tenis, setTenis] = useState([]);

    useEffect(() => {
        async function carregarTenis() {
            const resposta = await fetch('https://api-store-dolw.onrender.com/shoes')
            const imagemTenis = resposta.json;

            setTenis(imagemTenis);
        }
        carregarTenis();
    }, [])

    return (
        <>
            <ul>
                {tenis.map(tenis => (
                    <li>
                        <img src={tenis.imagem_url} className='' alt="" />
                    </li>
                ))}
            </ul>  
        </>
    )
}