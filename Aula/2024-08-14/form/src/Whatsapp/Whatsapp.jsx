import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Whatsapp() {

    return (
        <FloatingWhatsApp phoneNumber='+5534998677621' 
        accountName='Ta doido?' 
        chatMessage='Seja bem-vindo a nossa equipe de suporte. Informe a sua mensagem abaixo:' 
        statusMessage='Disponível' 
        placeholder='Digite a sua mensagem' 
        allowClickAway={true} allowEsc={true} />
    )
}