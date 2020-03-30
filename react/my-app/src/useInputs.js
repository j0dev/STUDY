import { useCallback, useReducer } from 'react'


function reducer(state, action) {
    //CHANGE
    switch (action.type) {
        case 'CHANGE':
            // console.log(...state)
            
            return {
                ...state,
                [action.name]:action.value
            }
            
        case 'RESET':
            console.log('reset');
            // console.log(initialFrom);
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
            
        default:
            break;
    }
    //RESET
}


// function useInputs(initialFrom) {
//     const [form, setFrom] = useState(initialFrom);
//     const onChange = useCallback(e=> {
//         const {name, value} = e.target;
//         setFrom(form => ({ ...form, [name]: value}));
//     }, [])
//     const reset = useCallback(() => setFrom(initialFrom), [initialFrom])

//     return [form, onChange, reset]
// }

function useInputs(initialFrom){
    const [form, dispatch] = useReducer(reducer, initialFrom);
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        })
    }, [])

    const reset = useCallback(() => {
        dispatch({
            type: 'RESET',           
            
        })
    }, [])
    
    return [form, onChange, reset]
}


export default useInputs