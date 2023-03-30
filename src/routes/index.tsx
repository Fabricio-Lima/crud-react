import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import List from '../pages/list';
import Register from '../pages/register';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/list" element={<List />}/>
                <Route path="/Register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}