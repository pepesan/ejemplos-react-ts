import {ADD_ARTICLE, GlobalState, MiAccion} from "./action-types";

const initialState = {
    articles: []
};

function rootReducer(state: GlobalState = initialState, action: MiAccion) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;
