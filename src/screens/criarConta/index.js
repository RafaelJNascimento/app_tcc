import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import {
    Alert,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

// import { Container } from './styles';

const CriarConta = () => {

    const {
        navigate
    } = useNavigation();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    const CreateNewAcount = () => {
        auth().
            createUserWithEmailAndPassword(login, senha).
            then(() => {
                Alert.alert("Conta", "Cadastrado com sucesso");
                setLogin("");
                setSenha("");
                navigate("Home");
            });

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    width: 350,
                    height: 180,
                    marginTop: "30%",
                    alignSelf: 'center',
                }}>
                    <Text
                        style={{
                            margin: 10,
                        }}
                    >Login</Text>
                    <TextInput
                        style={{
                            width: "98%",
                            alignSelf: "center",
                            height: 40,
                            borderWidth: 1,
                        }}
                        value={login}
                        onChangeText={setLogin}
                    />
                    <Text
                        style={{
                            margin: 10,
                        }}
                    >Senha</Text>
                    <TextInput
                        style={{
                            width: "98%",
                            alignSelf: "center",
                            height: 40,
                            borderWidth: 1,
                        }}
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                <TouchableOpacity
                    onPress={CreateNewAcount}
                    style={{
                        width: "50%",
                        alignSelf: "center",
                        height: 40,
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default CriarConta;