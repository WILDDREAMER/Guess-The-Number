import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    const numberInputHnadler = nputText => {
        setEnteredValue(nputText.replace(/[^0-9]/g, ''));
    };

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }


    const confirmInputHnadler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.confirmedOutput}>
                <TitleText >Chosen Number</TitleText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                {/* <View><Button title='Start' color={Colors.primary} onPress={() => props.onStartGame(selectedNumber)} /></View> */}
                <MainButton Color={Colors.primary} onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
            </Card>
        );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start a new Game!</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a Number</BodyText>
                            <Input
                                style={styles.input}
                                blurOnSumbit
                                autoCapitalise='none'
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHnadler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <MainButton Color={Colors.accent} onPress={resetInputHandler} style={{width:buttonWidth}}>Reset</MainButton>
                                <MainButton Color={Colors.primary} onPress={confirmInputHnadler} style={{width:buttonWidth}}>Confirm</MainButton>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen:
    {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 15,
    },
    title:
    {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:
    {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    buttonContainer:
    {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    // button:
    // {
    //     width: Dimensions.get('window') / 2
    // },
    input: {
        width: 50
    },
    confirmedOutput:
    {
        marginTop: 20,
        alignItems: 'center'
    },
    selectedNumber: {
        width: 45,
        height: 45,
        borderRadius: 30,
        alignItems: 'center',
        paddingTop: 4,
        elevation: 10,
        backgroundColor: Colors.primary,
    },
});

export default StartGameScreen;