import React from 'react';

import Theme from './theme';
import ThemedButton from './ThemedButton';

const Sample = () => (

    <Theme.Provider value='dark'>

            <ThemedButton />

    </Theme.Provider>

);

export default Sample;
