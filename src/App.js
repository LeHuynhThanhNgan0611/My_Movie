import { createTheme } from '@mui/material';
import { publicRoutes } from './routes/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

function App() {
    const [redTheme, setRedTheme] = useState(true);
    const changeTheme = () => {
        setRedTheme(!redTheme);
    };
    const theme = createTheme({
        palette: {
            primary: {
                main: redTheme ? '#ff0000' : '#3f51b5',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <route.Layout changeTheme={changeTheme}>
                                    <route.Component></route.Component>
                                </route.Layout>
                            }
                        ></Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
