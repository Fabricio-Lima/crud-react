import api from './api';

export interface Cliente {
    TECL_ID?: number;
    TECL_NOME: string
    TECL_ENDERECO: string;
    TECL_CIDADE: string;
    TECL_UF: string;
    TECL_TELEFONE: string;
}

export const getAll = () => {
    return api.get('/v1/teste/clientes');
}

export const getById = (id: number) => {
    return api.get(`/v1/teste/cliente/${id}`);
}

export const post = (value: Cliente) => {
    return api.post('/v1/teste/cliente', value);
}

export const put = (value: Cliente) => {
    return api.put('/v1/teste/cliente', value);
}

export const remove = (id: number) => {
    return api.delete(`/v1/teste/cliente/${id}`);
}