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

const Login = () => {

    const {
        navigate
    } = useNavigation();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const CreateNewAcount = () => {
        auth().
            signInWithEmailAndPassword(login, senha).
            then(() => {
                setLogin("");
                setSenha("");
                navigate("Home");
            }).catch((e) => {
                Alert.alert(
                    "Erro",
                    "Verifique suas credenciais e tente novamente"
                );
            });

    }

    const forgotPassword = () => {
        auth().
            sendPasswordResetEmail(login).
            then(() => {
                Alert.alert(
                    "Redefinir senha",
                    "Enviamos um e-mail, para você!");
            });
    }

    const onPressCreateAcount = () => {
        navigate("CriarConta");
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
                            paddingHorizontal: 5,
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
                            paddingHorizontal: 5,
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
                        marginBottom: 10,
                        alignSelf: "center",
                        height: 40,
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressCreateAcount}
                    style={{
                        width: "50%",
                        marginBottom: 10,
                        marginBottom: 10,
                        alignSelf: "center",
                        height: 40,
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text>Criar Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={forgotPassword}
                    style={{
                        width: "50%",
                        alignSelf: "center",
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text>Esqueci a senha</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;