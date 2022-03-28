import * as actions from '../store/actions/actions'

import { useSelector, useDispatch } from 'react-redux'

function Counter() {
    const counter = useSelector((state) => state.counterReducer)
    const dispatch = useDispatch()
    const hanlderClick = () => {

        dispatch({ type: actions.INCREASE })
    }

    return (
        <>
            <h1>this is my Counter {counter} </h1>
            <button onClick={() => hanlderClick()}>Add One </button>
        </>
    )
}

export default Counter