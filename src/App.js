/* eslint-disable no-unused-expressions */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Main from './features/main';

const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Main />
            </SafeAreaView>
        </Fragment>
    );
};

export default App;
