function BotaoDinamico (props) {
    const estiloBotao = {
        backgroundColor: props.fundo,
        color: props.cor ,
        padding: '15px',
        margin: '10px',
        border: 'nome',
        boderRadius: '15px',
        cursor: 'pointer',
        fontSize: "16px"
    }
    return <button style={estiloBotao}>
           {props.children}
           </button>
}

export default BotaoDinamico
