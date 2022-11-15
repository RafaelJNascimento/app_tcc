import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import {
    Alert,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import OutlineTextField from '../../global/components/OutlineTextField';

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
            }).catch((e) => {
                Alert.alert(
                    "Erro",
                    "Verifique suas credenciais e tente novamente"
                );
            });
    }

    const onPressCreateAcount = () => {
        navigate("CriarConta");
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    width: 350,
                    height: 240,
                    marginTop: "30%",
                    alignSelf: 'center',
                }}>
                    <Text
                        style={{
                            fontSize: 35,
                            fontWeight: 'bold',
                            letterSpacing: -1.5,
                            textAlign: 'center'
                        }}
                    >Bem Vindo</Text>
                    <View
                        style={{ padding: 24 }}
                    />
                    <OutlineTextField
                        label={'Email'}
                        value={login}
                        onChangeText={setLogin}
                    />
                    <View
                        style={{
                            margin: 10,
                        }}
                    />
                    <OutlineTextField
                        label={'Senha'}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>
                <View style={{
                    width: 350,
                    height: 85,
                    alignSelf: 'center',
                }}>
                    <TouchableOpacity
                        onPress={CreateNewAcount}
                        style={{
                            width: "98%",
                            marginBottom: 5,
                            alignSelf: "center",
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "red",
                            borderRadius: 4
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                        >Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={onPressCreateAcount}
                    style={{
                        width: "100%",
                        marginBottom: 10,
                        marginBottom: 10,
                        alignSelf: "center",
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text
                    style={{
                        color: "red",
                        fontWeight: "bold",
                    }}
                    >Ainda não tem conta? Cadastre-se agora.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;