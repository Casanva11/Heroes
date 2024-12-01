import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";



describe('Pruebas en <AppRouter/>', () => { 
    
    test('debe de mostrar el login si no está autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render(
        
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter    />      
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        expect( screen.getAllByText('Login'.length)).toBe(2);

     })


     test('debe de mostrar el componente de marvel si esta autenticado', () => { 

        const contextValue = {
            logged: false,
            user:{
                id:'ABC',
                name: 'carlos sanchez'
            }
        }

        render(
        
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter    />      
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        expect( screen.getAllByText('Marvel'.length)).toBe(1);

     })

 })