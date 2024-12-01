import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en Private Route', () => {

    test('debe de mostrar el children si no está autenticado', () => { 
        

        Storage.prototype.setItem = jest.fn();


        const contextValue = {
            logged: true,
            user:{
                name:'Strider',
                id:'123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=batman");
        // screen.debug();

     })

 })