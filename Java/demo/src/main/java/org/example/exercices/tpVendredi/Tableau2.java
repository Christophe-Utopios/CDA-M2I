package org.example.exercices.tpVendredi;

import java.util.Arrays;
import java.util.Scanner;

public class Tableau2 {
    public static int[] tab = {1, 3, 4, 9, 12, 45, 89, 100};
    public static char[] tabDecalage = {'D', 'E', 'C', 'A', 'L', 'A', 'G', 'E'};

    private static void solutionExo51Tableau() {
        System.out.println("Le tableau :");
        System.out.println(Arrays.toString(tab));
        System.out.print("\nMerci de saisir le nombre à vérifier: ");
        Scanner scanner = new Scanner(System.in);
        int nombre = scanner.nextInt();
        int occurrence = 0;
        for (int valeur : tab) {
            if (nombre == valeur) {
                occurrence++;
            }
        }
        scanner.close();
        System.out.println("\nLe nombre " + nombre + " est présent " + occurrence + " fois.");
    }


    public static void verificationCroissantTab() {
        boolean estTrie = true;
        for (int i = 0; i < tab.length - 1; i++) {
            if (tab[i] > tab[i + 1]) {
                estTrie = false;
                break;
            }
        }
        if (estTrie) {
            System.out.println("Le tableau est trié de manière croissante.");
        } else {
            System.out.println("Le tableau n'est pas trié de manière croissante.");
        }
    }


    public static void solutionExo53Tableau() {
        System.out.println("Le tableau :");
        System.out.println( Arrays.toString(tab));

        if (tab.length > 0) {
            int max = tab[0];
            int min = tab[0];

            for (int i = 1; i < tab.length; i++) {
                if (tab[i] > max) {
                    max = tab[i];
                } else if (tab[i] < min) {
                    min = tab[i];
                }
            }
            int ecart = max - min;
            System.out.println("\nLe plus grand écart entre deux nombres dans ce tableau est de " + ecart + ".");
        } else {
            System.out.println("\nLe tableau est vide.");
        }
    }

    public static void solutionExo54Tableau() {
        System.out.println("Le tableau :");
        System.out.println(Arrays.toString(tabDecalage));

        if (tabDecalage.length > 0) {
            char dernierElement = tabDecalage[tabDecalage.length - 1];
            for (int i = tabDecalage.length - 1; i > 0; i--) {
                tabDecalage[i] = tabDecalage[i - 1];
            }
            tabDecalage[0] = dernierElement;
        }

        System.out.println("Le tableau décalé vers la droite :");
        System.out.println(Arrays.toString(tabDecalage));
    }

}