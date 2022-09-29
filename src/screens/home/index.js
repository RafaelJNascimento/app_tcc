import React, { useEffect } from 'react';
import {
    Alert,
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Home = () => {

    const {
        navigate
    } = useNavigation();

    useEffect(() => {
        loadEstabelecimentos()
    }, []);

    const loadEstabelecimentos = () => {
    }

    const onPressItem = () => {
        navigate("Estabelecimento");
    }

    const onPressCriarConta = () => {
        firestore()
            .collection("estabelecimentos")
            .add({
                capa: "",
                img: "",
                nome: "Empório do Pescado",
                created_at: firestore.FieldValue.serverTimestamp(),
                produtos: [
                    {
                        nome: "Tilápia",
                        quantidade: "1000",
                        valor: "40.00",
                    }
                ]
            })
            .then(() => {
                Alert.alert("Cadastro", " Cadastrado com sucesso");
            })
            .catch((err) => console.log(err));
    }

    function categorias() {
        let aux = [];
        for (let i = 0; i < 14; i++) {
            aux.push(
                <View
                    key={i}
                    style={{
                        height: 90,
                        width: 90,
                        margin: 3,
                        backgroundColor: "red",
                    }}
                ></View>
            );
        }
        return aux
    }

    function Estabelecimentos() {
        let aux = [];
        for (let i = 0; i < 150; i++) {
            aux.push(
                <TouchableOpacity
                    key={i}
                    onPress={onPressItem}
                    style={{
                        height: 120,
                        width: "32.77%",
                        margin: 1,
                        backgroundColor: "red",
                    }}
                >
                </TouchableOpacity>
            );
        }
        return aux
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <View
                style={{
                    paddingTop: 12,
                }}>
                <View
                    style={{
                        height: 45,
                        width: "95%",
                        backgroundColor: "white",
                        alignSelf: "center",
                        padding: 10,
                        borderRadius: 12,
                        borderColor: "black",
                        borderWidth: 0.5,
                        justifyContent: "center",

                    }}>
                    <Text>busca</Text>
                </View>
                <View style={{
                    marginTop: 15,
                    height: 25,
                    paddingLeft: 5,
                    justifyContent: "center",
                    backgroundColor: "white"
                }}>
                    <TouchableOpacity onPress={onPressCriarConta}>
                        <Text
                            style={{
                                fontSize: 14
                            }}
                        >Categorias</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={{ backgroundColor: "white" }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {categorias()}
                </ScrollView>
            </View >
            <View style={{
                marginTop: 15,
                height: 25,
                paddingLeft: 5,
                justifyContent: "center",
                backgroundColor: "white"
            }}>
                <Text
                    style={{
                        fontSize: 14
                    }}
                >Estabelecimentos</Text>
            </View>
            <ScrollView>
                <View style={{
                    width: "95%",
                    alignSelf: "center",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
                >
                    {
                        Estabelecimentos()
                    }
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default Home;