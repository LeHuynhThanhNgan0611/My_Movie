import { publicRoutes } from './routes/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <route.Layout>
                                <route.Component></route.Component>
                            </route.Layout>
                        }
                    ></Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
