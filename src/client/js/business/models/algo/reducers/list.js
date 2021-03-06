const initialState = {
    init: false,
    results: {},
    error: null,
    loading: false,
};

export default actionTypes =>
    (state = initialState, {type, payload}) => {
        switch (type) {
        case actionTypes.list.REQUEST:
        case actionTypes.list.RESET:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.list.SUCCESS:
            return {
                ...state,
                results: {...state.results, ...payload},
                init: true,
                error: null,
                loading: false,
            };
        case actionTypes.list.FAILURE:
            return {
                ...state,
                results: {},
                error: payload,
                loading: false,
            };
        case actionTypes.list.UPDATE:
            return {
                ...state,
                ...payload, // update count, next, previous, results if necessary
            };
        default:
            return state;
        }
    };

