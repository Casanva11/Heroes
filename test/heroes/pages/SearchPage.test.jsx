import { fireEvent, render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('Preubas en <SearchPage></SearchPage>', () => { 
    
    test('debe de mostrarse correctamente con valores por defecto', () => { 
        
        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )
        
        expect( container ).toMatchSnapshot();
        // screen.debug();

     })


     test('debe de mostrarse a batman y el input con el valor del queryString', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');
    
        const img = screen.getByRole('img')
        expect ( img.src ).toContain('/assets/heros/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('none');

        // screen.debug();

     })


     test('debe de mostrarse de mostrar un error si no se encuentra el hero', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('');
        
        screen.debug();

     })

     test('debe de llmmar el navigate a la pantalla nueva', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox2');
        fireEvent.change(input, {target:{name:'searchText', value:'superman'}})
        
        const form = screen 
        
        screen.debug();

     })





 })