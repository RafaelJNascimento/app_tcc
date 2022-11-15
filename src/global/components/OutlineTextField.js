import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

const OutlineTextField = (props) => {

    const refInput = useRef(null);
    const [inFocus, setInFocus] = useState(false);

    const {
        label = '',
        value,
        onChangeText,
    } = props;


    return (
        <View
            style={{
                width: "98%",
                alignSelf: "center",
                height: 50,
                borderWidth: 2,
                borderRadius: 4,
                borderColor: inFocus ? "red" : "#d3d3d3",
            }}>
            {
                inFocus
                && <Text
                    style={{
                        position: "absolute",
                        top: "-20%",
                        backgroundColor: "#fff",
                        left: "2%",
                        color: "red",
                        paddingHorizontal: 4,
                    }}
                >{label}</Text>
            }
            <TextInput
                ref={refInput}
                style={{
                    width: "100%",
                    paddingHorizontal: 5,
                    height: "100%",
                    paddingVertical: 0,
                    paddingHorizontal: 10,
                }}
                placeholder={!inFocus ? label : ""}
                onFocus={() => { setInFocus(true); }}
                onBlur={() => { setInFocus(false); }}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default OutlineTextField;