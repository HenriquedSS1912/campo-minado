// criar linas e colunas
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

// espalhar as minas
const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;

    while (minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10);
        const colSel = parseInt(Math.random() * columns, 10);

        // se esse campo ainda nao esta minado entao:
        if (!board[rowSel][colSel].mined) {
            board[rowSel][colSel].mined = true;
            minesPlanted++
        }
    }
}

// cria todo o tabuleiro com linas, colunas e espalha as minas 
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}

// clona o tablueiro
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

// pegar os campos vizinhos
const getNeighbors = (board, row, col) => {
    const neighbors = [];
    const rows = [row - 1, row, row + 1];
    const cols = [col - 1, col, col + 1];

    rows.forEach(r => {
        cols.forEach(c => {
            const different = r !== row || c !== col;
            const validRow = r >= 0 && r < board.length;
            const validCol = c >= 0 && c < board[0].length;

            if (different && validRow && validCol) {
                neighbors.push(board[r][c]);
            }
        })
    })
    return neighbors;
}

// saber se os campos vizinhos são seguros
const safeNeighborhood = (board, row, col) => {
    const safes = (result, neighbor) => result && !neighbor.mined;
    return getNeighbors(board, row, col).reduce(safes, true);
}

// abrir um campo (de maneira recursiva)
const openField = (board, row, col) => {
    const field = board[row][col];
    if (!field.opened) {
        field.opened = true;
        if (field.mined) {
            field.exploded = true;
        } else if (safeNeighborhood(board, row, col)) {
            getNeighbors(board, row, col)
                .forEach(n => openField(board, n.row, n.col))
        } else {
            const neighbors = getNeighbors(board, row, col);
            field.nearMines = neighbors.filter(n => n.mined).length;
        }
    }
}

const fields = board => [].concat(...board);
const hadExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0;
const pendding = field => (field.mined && !field.flagged) ||
    (!field.mined && !field.opened);
const wonGame = board => fields(board).filter(pendding).length === 0;
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true);

const invertFlag = (board, row, col) => {
    const field = board[row][col];
    field.flagged = !field.flagged;
}

const flagsUsed = board => fields(board)
    .filter(field => field.flagged).length;

export {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
}