import { StyleSheet } from 'react-native';

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
    },
    modal: {
        padding: 10,
    },
    containerModal: {
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardModal: {
        padding: 10,
        width: '80%',
    },
    button: {
        marginVertical: 7,
        padding: 10,
        width: 200,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    }
});