import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../screens/Login';
import CriarConta from '../../screens/criarConta';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CriarConta"
                component={CriarConta}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default App;