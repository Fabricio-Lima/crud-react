import { useEffect, useState } from "react"
import Form from "../../components/Form"
import Navbar from "../../components/Navbar"
import { getById } from "../../services/clienteService"
import { useParams } from "react-router-dom"

const EditCliente = () => {
    const routeParams = useParams()
    const [cliente, setCliente] = useState()

    useEffect(() => {
        if(routeParams.id){
            getById(parseInt(routeParams.id)).then((response: any) => {
                const { data } = response
                setCliente(data.data)
            })
            .catch((error: any) => {
                alert(error.message)
            })
        }
    }, [routeParams.id])

    return (
        <>
            <Navbar title="Editar Registro" />
            <Form updateData={cliente}/>
        </>
    )
}

export default EditCliente