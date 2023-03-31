import { Link, redirect } from "react-router-dom"
import { Cliente, post } from "../../services/clienteService"
import "./styles.scss"
import { useEffect, useState } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    updateData?: Cliente
}

const Form: React.FC<Props> = ({ updateData }) => {
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [telefone, setTelefone] = useState('')

    const data = Object(updateData)[0]

    useEffect(() => {
        setNome(data?.TECL_NOME)
        setCidade(data?.TECL_CIDADE)
        setEndereco(data?.TECL_ENDERECO)
        setTelefone(data?.TECL_TELEFONE)
        setUf(data?.TECL_UF)
    }, [data])

    const saveData = () => {
        const obj: Cliente = {
            TECL_NOME: nome,
            TECL_ENDERECO: endereco,
            TECL_TELEFONE: telefone,
            TECL_CIDADE: cidade,
            TECL_UF: uf,
        }

        post(obj).then((response) => {
            const { data } = response
            alert(data.message)
        })
    }

    return (
        <div className="c-container">
            <form className="c-form">
                <div className="c-form__row">
                    <label className="c-form__field" id="TECL_NOME">
                        Nome
                        <input 
                            type="text" 
                            name="TECL_NOME" 
                            maxLength={50} 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>

                    <label className="c-form__field" id="TECL_ENDERECO">
                        Endereço
                        <input 
                            type="text" 
                            name="TECL_ENDERECO" 
                            maxLength={100}
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                    </label>
                </div>

                <div className="c-form__row">
                    <label className="c-form__field" id="TECL_CIDADE">
                        Cidade
                        <input 
                            type="text" 
                            name="TECL_CIDADE" 
                            maxLength={100} 
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </label>

                    <label className="c-form__field" id="TECL_UF">
                        UF
                        <input 
                            type="text" 
                            name="TECL_UF" 
                            maxLength={2}
                            value={uf}
                            onChange={(e) => setUf(e.target.value)}
                        />
                    </label>

                    <label className="c-form__field" id="TECL_TELEFONE">
                        Telefone
                        <input 
                            type="text" 
                            name="TECL_TELEFONE"
                            maxLength={10}
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </label>
                </div>

                <div className="c-form__container-buttons">
                    <Link to={'/list'}>
                        <button 
                            className="c-form__button" onClick={saveData}>
                            Salvar
                        </button>
                    </Link>

                    <Link to={'/list'}>
                        <button className="c-form__button">
                            Cancelar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Form