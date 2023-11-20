package org.example.string;

import java.util.Arrays;

public class ChaineCharactere {

    public static void getMethodString() {

        System.out.println(" --- Les chaines de caractères ---  ");
        String s = " hello ";
        System.out.println("s.length() " + s.length());
        System.out.println("s.contains(\"he\") : " + s.contains("he") );
        System.out.println("s.isEmpty : " + s.isEmpty());
        System.out.println("s.toUpperCase() " + s.toUpperCase());
        System.out.println("s.startWith(\"h\") " + s.startsWith("h"));
        System.out.println("s.endsWith(\" \") " + s.endsWith(" "));
        System.out.println("s.replace(\"ll\", \"LL\") " + s.replace("ll", "LL"));
        System.out.println("s.trim() " + s.trim()); //hello
        System.out.println("s.substring(0,3) : " + s.substring(0,3));
        System.out.println("s.chartAt(1) " + s.charAt(1));
        System.out.println("Arrays.toString(s.split(\"e\")) " + Arrays.toString(s.split("e")));
        System.out.println(s);

    }

    public static void getComparaisonString() {

        System.out.println(" --- Comparaison String --- ");

        String s = " hello ";
        String s2 = " hello ";
        System.out.println(" s == s2 " + (s==s2)); // true
        String s3 = new String(" hello ");
        System.out.println( "s == s3 " + (s == s3)); //false
        System.out.println("s.equals(s3) " + (s.equals(s3))); // true
        String firstName = "Alain";
        String firstName1 = "alain";
        System.out.println("firstName.equals(firstName1) " + (firstName.equals(firstName1))); // false
        System.out.println("firstName.equals(firstName1) " + (firstName.equalsIgnoreCase(firstName1))); // true

    }

    public static void getFormatString() {
        System.out.println(" --- Formattage String --- ");

        String firstName = "Alain";
        String phrase = "Salut, cher %s !, Good %s !";
        String morning = "Morning";
        String Evening = "Evening";
        String Afternoon = "Afternoon";

        String nouvellePhrase = String.format(phrase,firstName,morning);
        System.out.println(nouvellePhrase);

        System.out.printf(" Vous allez gagner %d à l'euro-millions dans %d jours \n",1000000, 10);

        String nomProduit = "Chocolat";
        double prix = 2.99;
        int quantite = 10;

        System.out.printf("Total pour %d unités de %s : %.2f euros ", quantite, nomProduit,prix*quantite);
    }


}
