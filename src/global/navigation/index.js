import * as React from 'react';
import {
    TouchableOpacity, Image
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import Home from '../../screens/Home';

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
        </Stack.Navigator>
    );
}

export default App;