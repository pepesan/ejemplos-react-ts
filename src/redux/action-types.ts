export const ADD_ARTICLE = "ADD_ARTICLE";
export interface MiAccion {
    type: string,
    payload: string
}
export interface GlobalState {
    articles: string []
}
