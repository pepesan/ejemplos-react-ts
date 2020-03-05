import { ADD_ARTICLE } from "./action-types";

export function addArticle(payload: string) {
    return { type: ADD_ARTICLE, payload };
}
export interface MisProps {
    articles: string[],
    addArticle: (payload: string) => void
}
