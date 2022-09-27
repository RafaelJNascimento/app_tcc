import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { db, getEstabelecimentos } from '../../global/config/firebase';

const Home = () => {

    const {
        navigate
    } = useNavigation();

    useEffect(() => {
        loadEstabelecimentos()
    }, []);

    const loadEstabelecimentos = () => {
        getEstabelecimentos(db).then((list) => {
            console.log(list)
        })
    }

    const onPressItem = () => {
        navigate("Estabelecimento");
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
                    <Text
                        style={{
                            fontSize: 14
                        }}
                    >Categorias</Text>
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