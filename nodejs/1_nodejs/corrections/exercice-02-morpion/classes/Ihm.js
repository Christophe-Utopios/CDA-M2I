import { TicTacToe } from "./TicTacToe.js";
import { input } from "../input.js";

export class Ihm {
    constructor() {
        this.ticTacToe = new TicTacToe();
        this.first = true;
        this.player = 'X';

    }

    async play() {
        while(true) {
            this.player = this.first ? 'X' : 'O';
            let posX = await input('Saisir la position X: ');
            let posY = await input('Saisir position Y: ');

            // On vérifie l'entrée de l'utilisateur
            while(!this.ticTacToe.play(posX, posY, this.player)) {
                console.log('Saisie incorrecte !')
                posX = await input('Saisir la position X: ');
                posY = await input('Saisir position Y: ');
            }

            // Affichage de la grille
            this.ticTacToe.showBoard();

            // On change de joueur
            this.first = !this.first;
    
            // On vérifie si le joueur a gagné uniquement si il a fait entre 5 et 9 coups
            if((this.ticTacToe.countRound >= 5 && this.ticTacToe.countRound < 10) && (this.ticTacToe.isWon(this.player))) {
                console.log(`Félicitations! Le jouer ${this.player} a gagné :D`)
                break;
            } 
            
            // Si on dépasse le nombre de coup possibles, on fait match nul
            if(this.ticTacToe.countRound > 9) {
                console.log(`Match nul`)
                break;
            }
        }

    }
}