import React from 'react';

export const AppContext = React.createContext({
    authenticated: true,
    lang: 'en',
    theme: 'dark'
});
