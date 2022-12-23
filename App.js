import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Play from './src/screens/play';

export default function App() {

    return (
        <View style={{flex:1}}>
            <StatusBar style="auto" />
            <Play />
        </View>
    );
}

