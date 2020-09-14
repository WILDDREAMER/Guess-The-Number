import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

import Colors from '../constants/colors'
import colors from '../constants/colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21)
        ButtonComponent = TouchableNativeFeedback;
    return (
        <View style={{...styles.buttonContainer, ...props.style}}>
            <ButtonComponent activeOpacity={0.7} onPress={props.onPress}>
                <View style={{ ...styles.button, ...{ backgroundColor: props.Color } }}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        // backgroundColor:'white',
        // borderColor: 'white',
        // borderWidth:1,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        // borderTopRightRadius:15,
        // borderBottomLeftRadius:15,
        // borderBottomRightRadius:15,
        elevation: 10,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans'
    },
    buttonContainer:{
        borderRadius: 10,
        overflow:'hidden'
    }
});

export default MainButton;