import * as actions from '../actions/actions'


const counterReducer = (state = 5, action) => {
    switch (action.type) {
        case actions.INCREASE:
            return parseInt(state) + 1
        default:
            return state
    }
}

export default counterReducer