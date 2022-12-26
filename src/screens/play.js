import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from '../services/params';
import MineField from '../components/mineField';
import Header from '../components/header';
import LevelSelection from './levelSelection';
import {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
} from '../services/logic';

export default class Play extends Component {

    constructor(props) {
        super(props)
        this.state = this.createState();
    }

    minesAmount = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: false,
        }
    }

    onOpenField = (row, column) => {

        const board = cloneBoard(this.state.board);
        openField(board, row, column);
        const lost = hadExplosion(board);
        const won = wonGame(board);

        if (lost) {
            showMines(board);
            Alert.alert('Perdeeeeu!', 'Mas não desista, tente novamente. Clique em "Novo Jogo"!\n\n*Se desejar selecione um nível clicando na bandeira.');
        }

        if (won) {
            Alert.alert('Parabéns', 'Você Venceu!!!\n\n*Se desejar selecione um nível clicando na bandeira.');
        }

        this.setState({ board, lost, won });
    }

    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board);
        invertFlag(board, row, column);
        const won = wonGame(board);

        if (won) {
            Alert.alert('Parabéns', 'Você Venceu!');
        }

        this.setState({ board, won });
    }

    onLevelSelected = level => {
        params.difficultLevel = level;
        this.setState(this.createState())
    }

    render() {
        return (
            <View style={styles.container}>
                <LevelSelection isVisible={this.state.showLevelSelection}
                    onLevelSelected={this.onLevelSelected}
                    onCancel={() => this.setState({ showLevelSelection: false })} />
                <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
                    onNewGame={() => this.setState(this.createState())}
                    onFlagPress={() => this.setState({ showLevelSelection: true })} />
                <View style={styles.board}>
                    <MineField
                        board={this.state.board}
                        onOpenField={this.onOpenField}
                        onSelectField={this.onSelectField} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    board: {
        alignItems: 'center',
        backgroundColor: '#AAA'
    },
    containerAnimation: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
});