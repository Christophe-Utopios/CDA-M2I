package org.example.array;

public class Array {


    public static void getArray(){
        int[] tab = {2,5,6};
        int tab2[];
        tab2 = new int[10];

        String[] tab3 = new String[5];

        int[][] matrice = {{1,5,9},{1,9,9},{7,5,9}};

        for (int i = 0; i < tab.length; i++) {
            tab[i] = i+1;
            System.out.println("Valeur du tableau à position " + i + " : " + tab[i]);
        }

    }





}
