import { render, screen } from "@testing-library/react"
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from "../../src/auth/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en <PublicRoute/>', () => { 
    
    test('debe de mostrar el children si no está autenticado', () => { 
        
        const contextValue = {
            logged: true
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <PublicRoute>
                        <h1>Ruta Pública</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Pública')).toBeTruthy();
        // screen.debug();

     })

     test('debe de navegar si está autenticado', () => { 

        const contextValue = {
            logged: true,
            user:{
                name:'Strider',
                id:'123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Página Marvel</h1>} /> 
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página Marvel')).toBeTruthy();
        // screen.debug();


      })

 })