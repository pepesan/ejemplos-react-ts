import React from 'react';
export interface Contexto {
    authenticated: boolean,
    lang: string,
    theme: string
}
export const AppContext = React.createContext<Contexto>({
    authenticated: true,
    lang: 'en',
    theme: 'dark'
});
