import Form from "../../components/Form"
import Navbar from "../../components/Navbar"
import { Cliente, post } from "../../services/clienteService"

const RegisterCliente = () => {
    const obj: Cliente = {
        TECL_NOME: "teste 22",
        TECL_ENDERECO: "Rua",
        TECL_TELEFONE: "12345678",
        TECL_CIDADE: "Cidade",
        TECL_UF: "SP",
    }

    const postData = () => {
        post(obj).then((response: any) => {
            const { data } = response
            console.log(data.message)
        }).catch((error: any) => {
            console.log(error)        
        })   
    }

    return (
        <>
            <Navbar title="Novo Registro" />
            <Form />
            <button onClick={postData}></button>
        </>
    )
}

export default RegisterCliente