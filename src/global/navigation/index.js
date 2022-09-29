import * as React from 'react';
import {
    TouchableOpacity, Image
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import Home from '../../screens/home';
import Carrinho from '../../screens/carrinho';
import ConcluirPedido from '../../screens/concluirPedido';
import Estabelecimento from '../../screens/estabelecimento';

const logoutImg = require('../assets/img/logout.png');

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerRight: () => (
                        <TouchableOpacity
                            style={{
                                height: 35,
                                width: 30,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onPress={() => auth().signOut()}>
                            <Image
                                style={{
                                    height: 30,
                                    width: 30,
                                    
                                }}
                                source={logoutImg}
                            />
                        </TouchableOpacity>
                    )
                }}
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