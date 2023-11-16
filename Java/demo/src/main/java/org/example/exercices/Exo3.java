package org.example.exercices;

import java.util.Scanner;

public class Exo3 {
    public static Scanner scanner = new Scanner(System.in);

    public static void solutionExo51() {
        int nombre = 0;
        do {
            System.out.println("Merci de saisir le nombre :");

            nombre = scanner.nextInt();
        } while (nombre > 3 || nombre < 1);
    }

    public static void solutionExo52() {
        int nombre4 = 0;
        do {
            System.out.println("Donnez moi un nombre compris entre 10 et 20?");

            nombre4 = scanner.nextInt();

            if (nombre4 > 20) {
                System.out.println("Plus petit!");
            } else if (nombre4 < 10) {
                System.out.println("Plus grand!!");
            }

        } while (nombre4 < 10 || nombre4 > 20);
    }


    public static void solutionExo53() {
        System.out.println("Donnez moi le nombre de depart?");
        int nombre = scanner.nextInt();
        int i = nombre;
        while (i < nombre + 10) {
            System.out.println(i);
            i++;
        }
    }

    public static void solutionExo54() {
        int nombre5 = 0;
        System.out.println("Donnez moi le nombre de depart?");

        nombre5 = scanner.nextInt();
        for (int i = nombre5; i < (nombre5 + 10); i++) {
            System.out.println(i);
        }
    }

    public static void solutionExo55() {
        Integer nombre6 = 0;
        Integer resultat = 0;
        System.out.println("Donnez moi le nombre de depart?");
        nombre6 = scanner.nextInt();
        System.out.println("Table de multiplication" + " " + nombre6);
        for (int i = 1; i <= 10; i++) {
            resultat = nombre6 * i;
            System.out.println(nombre6 + " " + "X" + " " + i + " " + "=" + " " + resultat);
        }
    }

    public static void solutionExo56() {
        Integer somme = 0;
        Integer nombre7 = 0;
        System.out.println("Donnez moi le nombre de depart?");

        nombre7 = scanner.nextInt();
        for (int i = 0; i <= nombre7;) {
            somme = somme + i;
            i++;
        }

        System.out.println("Somme =" + " " + somme);
    }

    public static void solutionExo57() {
        Integer nombre8 = 0;
        Integer compteur = 0;
        Integer max = 0;

        while (compteur < 20) {
            compteur++;
            System.out.println("Entrez le nombre" + " " + compteur + ":");

            nombre8 = scanner.nextInt();
            if (nombre8 > max) {
                max = nombre8;
            }
        }
        System.out.println("Le nombre le plus grand est" + " " + max);
    }

    public static void solutionExo572() {
        Integer nombre9 = 0;
        Integer compteur1 = 0;
        Integer max1 = 0;
        Integer numero = 0;

        while (compteur1 < 20) {
            compteur1 = compteur1 + 1;
            System.out.println("Entrez le nombre" + " " + compteur1 + ":");

            nombre9 = scanner.nextInt();
            if (nombre9 > max1) {
                max1 = nombre9;
                numero = compteur1;
            }
        }
        System.out.println("Le nombre le plus grand est" + " " + max1);
        System.out.println("C'etait le nombre numéro" + " " + numero);
    }

    public static void solutionExo58() {
        System.out.println("Donnez moi le nombre de départ?");

        int nombre = scanner.nextInt();

        long val2 = 1;
        int val = 1;

        while (val <= nombre) {
            val2 *= val;
            val++;
        }

        System.out.println("La factorielle de " + nombre + " est de " + val2);
    }

    public static void solutionExo59() {
        int max =0;
        int nombreSaisi;

        System.out.println("Entrez des nombres (entrez 0 pour arrêter) :");

        do {
            nombreSaisi = scanner.nextInt();

            if (nombreSaisi != 0 && nombreSaisi > max) {
                max = nombreSaisi;
            }

        } while (nombreSaisi != 0);


            System.out.println("Le nombre le plus grand est " + max);

    }

    public static void solutionExo510() {
        int achat = 0;
        System.out.println("Saisir le prix (0 pour terminer) :");
        int prix;
        while ((prix = scanner.nextInt()) != 0) {
            achat += prix;
            System.out.println("total : " + achat);
        }
        System.out.println("Vous devez régler la somme de : " + achat);
        System.out.println("Merci de saisir le montant de votre paiement");
        int paye = scanner.nextInt();
        int remise = paye - achat;
        System.out.println("remise : " + remise);
        while (remise >= 10) {
            System.out.println("10 euros");
            remise -= 10;
        }
        while (remise >= 5) {
            System.out.println("5 euros");
            remise -= 5;
        }
        while (remise >= 1) {
            System.out.println("1 euro");
            remise -= 1;
        }
    }

    public static void solutionExo511() {
        Integer somme1 = 0;
        Integer val12 = 0;
        while (somme1 < 101) {
            val12 += val12;
            somme1 = somme1 + val12;
        }
        System.out.println("le premier entier qui permet de depasser 100 est" + " " + val12);
    }
}


