import React from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native'


import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import Card from '../components/Card'
import MainButton from '../components/MainButton'


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game Is Over!</TitleText>
            <View style={styles.containerImage}>
                <Image
                    // fadeDuration={1000}
                    source={require('../assets/success.png')}
                    // source={{uri: 'https://i.pinimg.com/originals/4f/6e/76/4f6e7646f881b63861e20f21b1c63cec.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Card style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed{' '}
                    <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds 
                    to guess the number{' '}
                    <Text style={styles.highlight}>{props.userNumber}</Text>.
                </BodyText>
            </Card>
            <MainButton Color={Colors.primary} onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerImage: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
        elevation: 20
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginBottom: 15,
        marginTop:-15,
        elevation: 7,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;