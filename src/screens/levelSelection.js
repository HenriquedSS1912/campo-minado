import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';
import general from '../styles/general';

export default function LevelSelection(props) {

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <Card style={general.cardModal}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Selecione o Nível</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.bgEasy]}
                            onPress={() => props.onLevelSelected(0.1)}>
                            <Text style={styles.buttonLabel}>Fácil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.bgNormal]}
                            onPress={() => props.onLevelSelected(0.2)}>
                            <Text style={styles.buttonLabel}>Intermediário</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.bgHard]}
                            onPress={() => props.onLevelSelected(0.3)}>
                            <Text style={styles.buttonLabel}>Difícil</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconClose: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: 5,
        flexDirection: 'row',
        color: '#a1a1a1'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10
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
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
});