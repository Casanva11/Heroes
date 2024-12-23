import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui/components/Navbar";

const mokedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mokedUseNavigate
}));

describe('Pruebas en Navbar', () => { 
    
    const contextValue = {
            logged: true,
            use:{ name: 'Carlos '},
            logout: jest.fn()
        }
    
        beforeEach(() => jest.clearAllMocks() );
    
    
    test('debe de mostrar el nombre del usuario', () => { 
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Carlos')).toBeTruthy();


     });

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => { 
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn =  screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contexValue.logout).toHaveBeenCalled();
        expect(mokedUserNavigate).toHaveBeenCalledWith('/login',{'replace':true});



     });

 });