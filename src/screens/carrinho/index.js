import React from 'react';
import {
    View,
    Alert,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Carrinho = () => {

    const {
        navigate
    } = useNavigation();

    const onPressItem = () => {
        Alert.alert(
            "",
            "Deseja excluir esse item?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Remover", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    const onPressConcluir = () => {
        navigate("ConcluirPedido");
    }

    const onPressContinuar = () => {
        navigate("Estabelecimento");
    }

    const itens = () => {
        let aux = [];
        for (let i = 0; i < 3; i++) {
            aux.push(
                <TouchableOpacity
                    key={i}
                    style={{
                        height: 80,
                        width: "98%",
                        marginVertical: 2,
                        borderColor: "black",
                        borderWidth: 0.5,
                        backgroundColor: "white",
                        alignSelf: "center",
                        padding: 10,
                    }}
                    onPress={onPressItem}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            height: 30,
                        }}
                    >
                        <Text
                            style={{

                            }}
                        >Nome Item</Text>
                        <Text
                            style={{

                            }}
                        >R$ 100</Text>
                    </View>
                    <Text>
                        Massa de pizza
                        Creme de leite
                        Leite condensado
                        Goiabada-cascão
                        Mussarela em fatias
                        Canela em pó
                    </Text>
                </TouchableOpacity>
            )
        }
        return aux;
    }

    return (
        <SafeAreaView>
            <View
                style={{
                    height: "94%"
                }}>
                <ScrollView>
                    {
                        itens()
                    }
                </ScrollView>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <TouchableOpacity
                    onPress={onPressContinuar}
                    style={{
                        height: 45,
                        width: "48%",
                        margin: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red",
                        borderRadius: 8,
                    }} >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "700",
                        }}>
                        Continuar Comprando
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressConcluir}
                    style={{
                        height: 45,
                        width: "48%",
                        margin: 5,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "green",
                    }} >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "700",
                        }}>
                        Concluir
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Carrinho;