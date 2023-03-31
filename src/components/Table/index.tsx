import "./styles.scss"

import editIcon from '../../assets/icons/edit.png';
import deleteIcon from '../../assets/icons/minus.png';
import addIcon from '../../assets/icons/plus.png';
import { Cliente, remove } from "../../services/clienteService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    values: Cliente[]
}

const Table: React.FC<Props> = ({ values }) => {
    useEffect(() => {
        setData(values)
    }, [values])

    const handleDelete = (id: number) => {
        if (window.confirm("Deletar cliente de Id." + id)){
            remove(id).then((response) => {
                const { data } = response
                alert(data.message)
            })
        }
    }

    const [data, setData] = useState<Cliente[]>([])

    const searchTable = (value: any) => {
        var filteredData = []

        if (value.length === 0) {
            return values; 
        }

        for(var i = 0; i < data.length; i++){
            const valueLowCase = value.toLowerCase()
           
            var nomeCliente = data[i].TECL_NOME.toLowerCase() 

            if(nomeCliente.includes(valueLowCase))
                filteredData.push(data[i])
        }

        console.log(filteredData)

        return filteredData
    }

    function handleInput(e: any) {
        const inputValue = e.target.value;

        setData(searchTable(inputValue));
    }

    return (
        <table className="c-table">
            <thead className="c-thead">
                <tr className="c-thead__tr">
                    <th className="c-thead__th">
                        <Link to={'/register'}>
                            <button
                                className="c-thead__th__button"
                            >
                                <img src={addIcon} alt="" />
                            </button>
                        </Link>
                    </th>
                    <th className="c-thead__th">
                        <input
                            placeholder="Procurar nome cliente"
                            className="c-search-input"
                            onChange={handleInput}
                        />
                    </th>
                    <th className="c-thead__th">
                        Nome
                    </th>
                    <th className="c-thead__th">
                        Endereço
                    </th>
                    <th className="c-thead__th">
                        Cidade
                    </th>
                    <th className="c-thead__th">
                        UF
                    </th>
                    <th className="c-thead__th">
                        Telefone
                    </th>
                </tr>
            </thead>

            <tbody className="c-tbody">
                {data.length > 0 ? (
                    data.map((value) => (
                    <tr className="c-tbody__tr" key={value.TECL_ID}>
                        <td>
                            <Link to={'/list'}>
                                <button
                                    className="c-button"
                                    onClick={() => handleDelete(Number(value.TECL_ID))}
                                >
                                    <img src={deleteIcon} alt="" />
                                </button>
                            </Link>
                        </td>
                        <td>
                            <Link to={`/edit/${value.TECL_ID}`}>
                                <button
                                    className="c-button"
                                >
                                    <img src={editIcon} alt="" />
                                </button>
                            </Link>
                        </td>
                        <td> {value.TECL_NOME} </td>
                        <td> {value.TECL_ENDERECO} </td>
                        <td> {value.TECL_CIDADE} </td>
                        <td> {value.TECL_UF} </td>
                        <td> {value.TECL_TELEFONE} </td>
                    </tr>
                ))
                ) : (
                    <tr>
                        <td colSpan={7}>Sem clientes!</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table