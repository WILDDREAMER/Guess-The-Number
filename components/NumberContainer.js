import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'

import Colors from '../constants/colors'

const NumberContainer = props => {
    return (
        <View style={styles.container}>
                <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:45,
        height:45,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        borderColor:Colors.primary,
        borderWidth:1.5,
        backgroundColor:'white',
        marginTop:10,
        marginVertical:10
    },
    number: {
        fontSize:20,
    }
});

export default NumberContainer; 