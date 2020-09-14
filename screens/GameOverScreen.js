import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Button,
    Text,
    Dimensions,
    ScrollView,
    SafeAreaView
} from 'react-native'


import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import Card from '../components/Card'
import MainButton from '../components/MainButton'


const GameOverScreen = props => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceHeight(Dimensions.get('window').height);
            setAvailableDeviceWidth(Dimensions.get('window').width);
        }

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    })

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.screen}>
                    <TitleText>The Game Is Over!</TitleText>
                    <View style={{
                        ...styles.imageContainer, ...{
                            width: availableDeviceWidth * 0.6,
                            height: availableDeviceWidth * 0.6,
                            borderRadius: availableDeviceWidth * 0.6 / 2,
                            marginVertical: availableDeviceHeight / 40

                        }
                    }}>
                        <Image
                            // fadeDuration={1000}
                            source={require('../assets/success.png')}
                            // source={{uri: 'https://i.pinimg.com/originals/4f/6e/76/4f6e7646f881b63861e20f21b1c63cec.jpg'}}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                    <Card style={{ ...styles.resultContainer, ...{ marginVertical: availableDeviceHeight / 60, } }}>
                        <BodyText style={{ ...styles.resultText, ...{ fontSize: availableDeviceHeight > 600 ? 20 : 13 } }}>
                            Your phone needed{' '}
                            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds
                    to guess the number{' '}
                            <Text style={styles.highlight}>{props.userNumber}</Text>.
                </BodyText>
                    </Card>
                    <MainButton Color={Colors.primary} onPress={props.onRestart}>NEW GAME</MainButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 7,
    },
    imageContainer: {
        // width: Dimensions.get('window').width * 0.5,
        // height: Dimensions.get('window').width * 0.5,
        // borderRadius: Dimensions.get('window').width * 0.5 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        // marginVertical: Dimensions.get('window').height / 40,
        elevation: 20
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: 30,
        // marginVertical: Dimensions.get('window').height / 60,
    },
    resultText: {
        textAlign: 'center',
        // fontSize: Dimensions.get('window').height > 600 ? 20 : 15
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;