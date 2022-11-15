
import React, { useEffect, useState } from 'react';
import {
    Image,
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Home = () => {

    const [estabelecimentos, setEstabelecimentos] = useState([]);

    useEffect(() => {
        loadEstabelecimentos();
    }, []);

    const loadEstabelecimentos = async () => {
        await firestore().collection("estabelecimentos")
            .onSnapshot((query) => {
                const list = [];
                query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                setEstabelecimentos(list);
            });
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <View style={{
                marginTop: 0,
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
            <FlatList
                numColumns={3}
                data={estabelecimentos}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => { }}
                        style={{
                            height: 120,
                            width: "32.77%",
                            margin: 1,
                            backgroundColor: "#fff"
                        }}
                    >
                        <Image
                            style={{
                                height: 100,
                                width: "100%",
                                resizeMode: "contain",
                            }}
                            source={{ uri: item.img }}
                        />
                        <Text
                            style={{
                                marginLeft: 5,
                                fontSize: 11
                            }}
                        >{item.nome}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

export default Home;