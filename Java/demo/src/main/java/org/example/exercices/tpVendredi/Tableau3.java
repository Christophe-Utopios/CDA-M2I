package org.example.exercices.tpVendredi;

import java.util.Arrays;

public class Tableau3 {

    public static int[] tab = {1, 3, 4, 9, 12, 45, 89, 100};
    public static int[] tab2 = {15, 39, 4, 9, 87, 45, 89, 108};

    private void solutionExo55Tableau() {
        System.out.println("Le tableau :");
        System.out.println(Arrays.toString(tab));
        int i = 0;
        int j = tab.length - 1;
        int temp = 0;
        while (i < j) {
            temp = tab[i];
            tab[i] = tab[j];
            tab[j] = temp;
            i++;
            j--;
        }
        System.out.println("");
        System.out.println("Le tableau inversé:");
        System.out.println(Arrays.toString(tab));
    }


    private void solutionExo56Tableau() {
        System.out.println("Le tableau :");
        System.out.println(Arrays.toString(tab));
        System.out.println(" Les étapes :");

        for (int indice = 0; indice < tab.length - 1; indice++) {
            int indiceMin = indice;
            for (int i = indice + 1; i < tab.length; i++) {
                if (tab[i] < tab[indiceMin]) {
                    indiceMin = i;
                }
            }
            int temp = tab[indice];
            tab[indice] = tab[indiceMin];
            tab[indiceMin] = temp;

            System.out.println(Arrays.toString(tab));
        }

        System.out.println("\nLe tableau trié croissant (Sélection):");
        System.out.println(Arrays.toString(tab));
    }


    private void solutionExo57Tableau() {
        System.out.println("Le tableau :");
        System.out.println(Arrays.toString(tab));
        int temp = 0;
        int i = 0;
        while (i <= tab.length-1) {
            for (int j = 0; j < (tab.length-1)-i; j++) {
                if (tab[j] > tab[j + 1]) {
                    temp = tab[j];
                    tab[j] = tab[j + 1];
                    tab[j + 1] = temp;
                }
            }
            i++;
        }
        System.out.println("Le tableau avec tri à bulle :");
        System.out.println(Arrays.toString(tab));
    }



        public static void solutionExo58Tableau() {

            if (tab.length != tab2.length) {
                System.out.println("Les tableaux n'ont pas la même dimension");
            }
            int[] somme = new int[tab.length];
            for (int i = 0; i < tab.length; i++) {
                somme[i] = tab[i] + tab2[i];
            }
            System.out.println("Les tableaux ont la même dimension et leurs sommes est de  : " + Arrays.toString(somme));

        }





}
