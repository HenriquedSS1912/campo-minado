import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import general from '../styles/general';


export default function Mine() {
    return (
        <View style={general.container}>
            <View style={general.coreMine} />
            <View style={general.line} />
            <View style={[general.line, { transform: [{ rotate: '45deg' }] }]} />
            <View style={[general.line, { transform: [{ rotate: '90deg' }] }]} />
            <View style={[general.line, { transform: [{ rotate: '135deg' }] }]} />
        </View>
    )
}