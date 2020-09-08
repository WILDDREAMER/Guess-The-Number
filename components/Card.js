import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card:
    {
        // shadowColor: 'black',
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        elevation: 10,
        padding: 20,
        // borderRadius: 20,
        backgroundColor: 'white',
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }
});

export default Card;