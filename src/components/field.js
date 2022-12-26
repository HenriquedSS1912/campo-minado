import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import general from '../styles/general';
import params from '../services/params';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Mine from './mine';
import Flag from './flag';

SplashScreen.preventAutoHideAsync();

export default function Field(props) {
    const { mined, opened, nearMines, exploded, flagged } = props;
    
    const styleField = [styles.field];
    //outros estilos de acordo com a props
    if (opened) styleField.push(styles.opened);
    if (exploded) styleField.push(styles.exploded);
    if (flagged) styleField.push(styles.flagged);
    if (!opened && !exploded) styleField.push(styles.regular);

    let color = null;

    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28d7';
        if (nearMines == 2) color = '#2B520F';
        if (nearMines > 2 && nearMines <= 6) color = '#F9060A';
        if (nearMines >= 6) color = '#F221A9';
    }

    // FONTS
    const [fontsLoaded] = useFonts({
        'PressStart2P': require('../styles/fonts/PressStart2P-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
            <View style={styleField} onLayout={onLayoutRootView}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[general.label, { color: color, fontFamily: 'PressStart2P', height: 15 }]}>
                        {nearMines}
                    </Text> : false}

                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    }
});