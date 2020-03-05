import React, {Component} from 'react';
import {AppContext} from "./contexto";
import MiComponenteContextualizado from "./MiComponenteContextualizado";
import MiCambiaContexto from "./MiCambiaContexto";

class  MiContenedor extends Component{
    setLanguage = (language: string) => {
        this.setState({ language });
    };
    state = {
        language: "en",
        setLanguage: this.setLanguage
    };

    render(): React.ReactElement{
        return (
            <AppContext.Provider value={ {
                lang: 'de',
                authenticated: true,
                theme: 'light',
            } }>
                <div id="MiContenedor">
                    <h2>Mi Contenedor</h2>
                    <MiCambiaContexto/>
                    <MiComponenteContextualizado/>
                </div>
            </AppContext.Provider>
        )
    }
}

export default MiContenedor;
