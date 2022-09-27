import React from 'react';
import {
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Estabelecimento = (props) => {

    const {
        navigate
    } = useNavigation();

    const onPressItem = () => {
        navigate("Carrinho");
    }

    const productsList = () => {
        let aux = [];
        for (let i = 0; i < 100; i++) {
            aux.push(
                <TouchableOpacity
                    key={i}
                    style={{
                        height: 50,
                        width: "98%",
                        marginVertical: 2,
                        backgroundColor: "blue",
                        alignSelf: "center",
                    }}
                    onPress={onPressItem}>

                </TouchableOpacity>
            )
        }
        return aux;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                height: 200,
                backgroundColor: "red",
                marginBottom: 10,
            }}>

            </View>
            <ScrollView>
                {
                    productsList()
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default Estabelecimento;