import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/colors'
import colors from '../constants/colors';

const MainButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        // backgroundColor:'white',
        // borderColor: 'white',
        // borderWidth:1,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius:20,
        // borderTopRightRadius:15,
        // borderBottomLeftRadius:15,
        // borderBottomRightRadius:15,
        elevation:10,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans'
    }
});

export default MainButton;