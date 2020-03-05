import React, {ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler} from 'react';
import Theme from "./theme";
import ThemedButton from "./ThemedButton";
class AnyComponent extends React.Component {
    state = {
        theme: 'dark',
        themes: ['light', 'dark']
    };
    handleSelect = (evt:ChangeEvent<HTMLSelectElement>) => {
        console.log('Changing value to ' + evt.target.value);

        this.setState({
            theme: evt.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <h2>Any component</h2>
                <select value = {this.state.theme}
                        onChange ={this.handleSelect}>
                    { this.state.themes.map(t =>
                        <option value = {t} >{t}</option>)
                    }
                </select>
                <div>
                    Selected theme: {this.state.theme}
                </div>
                <Theme.Provider value ={this.state.theme}>
                    <ThemedButton theme={this.state.theme} />
                </Theme.Provider>
            </React.Fragment>
        );

    }
}

export default AnyComponent;
