import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConcluirPedido = () => {

    const {
        navigate
    } = useNavigation();

    const onPressConcluir = () => {
        navigate("Home");
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        height: 40,
                        backgroundColor: "white",
                        justifyContent: 'center',
                        paddingLeft: 5,
                    }}
                >
                    <Text>Forma de Entrega</Text>
                </View>
                <View
                    style={{
                        height: 40,
                        backgroundColor: "white",
                        justifyContent: 'center',
                        paddingLeft: 5,
                    }}
                >
                    <Text>Endereço de Entrega</Text>
                </View>
                <View
                    style={{
                        height: 40,
                        backgroundColor: "white",
                        justifyContent: 'center',
                        paddingLeft: 5,
                    }}
                >
                    <Text>Forma de Pagamento</Text>
                </View>
                <TouchableOpacity
                    onPress={onPressConcluir}
                    style={{
                        height: 50,
                        width: "99%",
                        position: "absolute",
                        backgroundColor: "red",
                        bottom: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        borderRadius: 5,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >Concluir Pedido</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ConcluirPedido;