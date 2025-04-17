import { useState, useEffect } from "react"
import Client from "./components/Client"
import clients from "./services/clients"

const App = () => {

    const [clientList, setClientList] = useState([])

    useEffect(() => {
        clients.getAll()
            .then(initialClients => {
                setClientList(initialClients)
            })
        }
    , [])

    return (
        <div>
            {clientList.map(client => 
                <Client key={client.id} client={client} />
            )}
        </div>
    )
}

export default App