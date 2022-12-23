import { StyleSheet, Platform, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const COLORS = {
    white: '#fff',
    black: '#000',
    // your colors
}

export default general = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black',
    }
});