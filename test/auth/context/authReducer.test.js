
import { authReducer, types } from '../../../src/auth'


describe('Pruebas en el AuthRouter', () => { 

    test('debe retornar el estado por defecto', () => { 

        const state =  authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged:false}); 
    
    })
    
    test('debe de (login) llamar el login autenticar y establecer el use', () => { 

        const action =  {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }
        
        const state = authReducer({ logged: false }, action );
        expect( state ).toEqual({ 
            ...state,
            logged: true,
            user: action.payload
        }); 
    })

    test('debe de (logout) borrar el name del usuario y logged en false', () => { 

        const action =  {
            type: types.logout
        }

        const state =  {
            type: true,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }
        
        const newState = authReducer(state, action );
        expect( newState ).toEqual({ logged: false }); 
    })


 })