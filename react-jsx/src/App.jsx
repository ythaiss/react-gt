import { useState } from 'react'
import Saudacao from '../src/components/Saudacao/Saudacao'
import BotaoDinamico from '../src/components/BotaoDinamico/BotaoDinamico'
import './App.css'

function App() {

  const saldo =10
  const saldo2 =12

  return (
    <>
      <Saudacao nome = 'Fulano' saldo={saldo}/>
      <Saudacao nome = 'Maria' saldo={saldo2}/>
      <BotaoDinamico fundo='red' cor= 'black'>Error</BotaoDinamico>
      <BotaoDinamico fundo='yellow' cor= 'black'>Alterar</BotaoDinamico>
      <BotaoDinamico fundo='green' cor= 'black'>Enviar</BotaoDinamico>
    </>
  )
}

export default App
