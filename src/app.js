import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './global/navigation';
import AuthRoutes from './global/navigation/auth'

import auth from '@react-native-firebase/auth';

const App = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(setUser);
        return subscribe;
    }, []);

    return (
        <NavigationContainer>
            { user ? <Navigation /> : <AuthRoutes />}
        </NavigationContainer>
    );
}

export default App;