// ThemedButton.js
import React from 'react';
import Theme from './theme';

const ThemedButton = (props: any) => (

    <Theme.Consumer>

        {theme => <button { ...props }>button with them: {theme}</button>}

    </Theme.Consumer>

);
export default ThemedButton
