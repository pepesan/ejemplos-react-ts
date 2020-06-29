import {ADD_ARTICLE, MiAccion} from "./action-types";

export function addArticle(payload: string): MiAccion {
    return { type: ADD_ARTICLE, payload };
}
export interface MisProps {
    articles: string[],
    addArticle: (payload: string) => void
}
