package org.example.structure;

public class Structure2 {

    public static void getBoucleFor() {

        int[] tab = {1,5,6};
        int sum = 0;

        for (int i = 0; i < tab.length; i++) {

            System.out.println(" i = " + i + " , valeur tab " + tab[i]);

        }

        for (int i = 0, j = 10; i < j; i++, j--) {

            System.out.println(" i : " + i  + " j : " + j);
        }

        for (int numb : tab) {
            sum += numb;
        }
        System.out.println("La somme du tableau est : " + sum);

    }

    public static void getWhile() {
        int i = 1;
        while (i<=5){
            System.out.println(" i : " + i);
            i++;
        }

    }


    public static void getBreakAndContinue() {

        System.out.println(" ----- continue ------ ");
        for (int i = 0; i < 5; i++) {

            if(i%2==0){
                System.out.println("ça continue");
                continue;
            }

            System.out.println("counter " + i);
        }
        System.out.println(" ----- break ------ ");

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {

                if(j==3){
                    break;
                }
                System.out.println(" j " + j);
            }
            System.out.println(" counter " + i);
        }


    }


}
