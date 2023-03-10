import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import general from '../styles/general';
import Flag from './flag';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity style={styles.flagButton} onPress={props.onFlagPress}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={{ ...general.button, backgroundColor: '#999' }} onPress={props.onNewGame}>
                <Text style={{ ...general.buttonLabel, color: '#DDD' }}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row'
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold'
    }
})