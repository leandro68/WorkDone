const Client = ({client}) => {
    return (
        <div>
            <p>{client.name} - Abonado: {client.subscriber ? 'SI' : 'NO'} - Valor abono: ${client.subscriptionCost}.-</p> 
        </div>
    )
}

export default Client