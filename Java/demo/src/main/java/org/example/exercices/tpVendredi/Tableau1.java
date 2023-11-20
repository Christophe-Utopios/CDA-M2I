package org.example.exercices.tpVendredi;

import java.util.Random;
import java.util.Scanner;

public class Tableau1 {

    public static void getExercice1() {
        int[] tableau = {1, 2, 3, 4, 5};
        int troisiemeValeur = tableau[2];
        System.out.println("La valeur de la troisième case du tableau est : " + troisiemeValeur);
    }


    public static void getExercice2() {
        int[] tableau = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        for (int i = 0; i < tableau.length; i++) {
            System.out.println("Élément à l'indice " + i + " : " + tableau[i]);
        }
    }



    public static void getExercice3() {

        int[] tableau = {10, 20, 30, 40, 50, 60, 70, 80};


        Scanner scanner = new Scanner(System.in);
        System.out.print("Entrez un entier à rechercher : ");
        int entierRecherche = scanner.nextInt();


        boolean entierTrouve = false;
        for (int valeur : tableau) {
            if (valeur == entierRecherche) {
                entierTrouve = true;
                break;
            }
        }


        if (entierTrouve) {
            System.out.println("L'entier est présent dans le tableau.");
        } else {
            System.out.println("L'entier n'est pas présent dans le tableau.");
        }
    }



    public static void getExercice4() {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Entrez la taille du tableau: ");
        int taille = scanner.nextInt();

        int[] tableau = new int[taille];

        System.out.println("Entrez les éléments du tableau:");

        for (int i = 0; i < taille; i++) {
            tableau[i] = scanner.nextInt();
        }

        boolean tousPairs = true;

        for (int i = 0; i < taille; i++) {
            if (tableau[i] % 2 != 0) {
                tousPairs = false;
                break;
            }
        }

        if (tousPairs) {
            System.out.println("Tous les éléments sont pairs");
        } else {
            System.out.println("Au moins un élément est impair");
        }

    }


    public static void getExercice5(String[] args) {
        Random random = new Random();
        int[] tableau = new int[10];
        for (int i = 0; i < tableau.length; i++) {
            tableau[i] = random.nextInt(100) + 1;
            System.out.println("tableau[" + i + "] = " + tableau[i]);
        }
    }

    public static void getExercice6() {
        Random random = new Random();
        int[] tableau1 = new int[10];
        int[] tableau2 = new int[10];
        for (int i = 0; i < tableau1.length; i++) {
            tableau1[i] = random.nextInt(100) + 1;
            tableau2[i] = random.nextInt(100) + 1;
        }
        int somme = 0;
        for (int i = 0; i < tableau1.length; i++) {
            somme += tableau1[i] + tableau2[i];
        }
        System.out.println("La somme des éléments des deux tableaux est : " + somme);
    }

    public static void getExercice7() {
        Random random = new Random();
        int[] tableau = new int[10];
        int max = 0;
        for (int i = 0; i < tableau.length; i++) {
            tableau[i] = random.nextInt(100) + 1;
            if (tableau[i] > max) {
                max = tableau[i];
            }
        }
        System.out.println("Le plus grand élément du tableau est : " + max);
    }

}
