import React, {Component} from 'react';
import {AppContext} from "./contexto";

class  MiComponenteContextualizado extends Component{
    render(): React.ReactElement{
        return (
            <AppContext.Consumer>{
                appcontext =>
                {
                    if (appcontext.authenticated){
                        return(
                            <h1>Logueado</h1>
                        )
                    }else {
                        return <h1>No estás logueado</h1>
                    }

                }

            }
            </AppContext.Consumer>
        )
    }
}

export default MiComponenteContextualizado;
