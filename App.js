import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Play from './src/screens/play';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {

    return (
        <PaperProvider>
            <View style={{ flex: 1 }}>
                <StatusBar style="auto" />
                <Play />
            </View>
        </PaperProvider>
    );
}

