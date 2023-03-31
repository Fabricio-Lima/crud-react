import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import List from '../pages/list-cliente';
import Register from '../pages/register-cliente';
import EditarCliente from '../pages/edit-cliente';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/list" />} />
                <Route path="/list" element={<List />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/edit/:id" element={<EditarCliente />} />
            </Routes>
        </BrowserRouter>
    )
}