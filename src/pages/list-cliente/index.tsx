import Table from "../../components/Table"
import "./styles.scss"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import { getAll } from "../../services/clienteService"

const ListCliente = () => {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getAll().then((response: any) => {
                const { data } = response
                setClientes(data.data)
            })
            .catch((error: any) => {
                alert(error.message)
            })
        }, 1000)
    }, [])

    return (
        <>
            <Navbar title="Teste ReactJS - SaibWeb"/>
            <Table values={clientes}/>
        </>
    )
}

export default ListCliente