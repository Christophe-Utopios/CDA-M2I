export class TicTacToe {
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]
        this.countRound = 1;
    }

    showBoard() {
        for(let line = 0; line < this.board.length; line++) {
            let write = '';
            for(let column = 0; column < this.board[line].length; column++) {
                write += column === 0 ? ` ${this.board[line][column]} ` : `| ${this.board[line][column]} `;
            }
            console.log(write);
            
            if (line !== this.board.length -1) console.log('------------')
        }
    }

    play(posX, posY, player) {
        if (this.verifyInput(posX) && this.verifyInput(posY) && this.verifyPosition(posX, posY)) {
            this.countRound++;
            this.board[posX][posY] = player;
            return true;
        }
        return false;
    }

    verifyInput(input) {
        return input >= 0 || input < 3
    }

    verifyPosition(posX, posY) {
        return this.board[posX][posY] === ' ';
    }

    isWon(player) {
        return this.checkDiagonal(player) || this.checkVerticalHorizontal(player) 
    }

    // Vérification des diagonales
    checkDiagonal(player) {
        return (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) || (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)
    }

    // Vérification des lignes et des colonnes
    checkVerticalHorizontal(player) {
        for(let count = 0; count < this.board.length; count++) {

            // La première condition vérifie les lignes, la seconde les colonnes
            if((this.board[count][0] === player && this.board[count][1] === player && this.board[count][2] === player) || (this.board[0][count] === player && this.board[1][count] === player && this.board[2][count] === player)) {
                return true
            } 
        }
        return false;
    }
}