import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/home';
import Carrinho from '../../screens/carrinho';
import ConcluirPedido from '../../screens/concluirPedido';
import Estabelecimento from '../../screens/estabelecimento';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Estabelecimento"
                component={Estabelecimento}
            />
            <Stack.Screen
                name="Carrinho"
                component={Carrinho}
            />
            <Stack.Screen
                name="ConcluirPedido"
                component={ConcluirPedido}
            />
        </Stack.Navigator>
    );
}

export default App;