package org.example.exercices;

import java.util.Scanner;

public class Exo1 {

    public static Scanner s = new Scanner(System.in);

        public static void solutionExo22() {
            int nombre = 0;
            int carre = 0;
            System.out.println("Merci de saisir le nombre à calculer :");

            nombre = s.nextInt();
            carre = nombre * nombre;
            System.out.print("Le carre du nombre" + " " + nombre + " " + "est" + " " + carre + ".");
            s.close();
        }

        public  static void solutionExo23() {
            String nom = " ";

            System.out.println("Machine : Quel est votre prénom?");
            nom = s.next();
            System.out.print("Utilisateur :" + " " + nom + " " + "\nMachine : Bonjour," + " " + nom + "!");
            s.close();
        }


        public static void solutionExo24() {
            int prix = 0;
            int nombre = 0;
            float taux = 0;
            double total = 0;
            System.out.println("Quel est le prix de l'article HT?");
            prix = s.nextInt();
            System.out.println("Quel est le taux de TVA (exemple 3 pour 3%) ?");
            taux = s.nextFloat();
            System.out.println("Quel est le nombre d'article?");
            nombre = s.nextInt();
            total = (prix * (1 + (taux/100))) * nombre;
            System.out.print("La prix total pour le produit au prix de" + " " + prix + " " + "euros HT, avec un taux de TVA de" + " " + taux +"% et une quantité de" + " " +  nombre + " " + "est de :" + " " + total +" "+"euros.");
            s.close();
        }


        public static void solutionExo31() {
            int nombre = 0;
            System.out.println("Merci de saisir le nombre :");
            nombre = s.nextInt();
            if (nombre < 0) {
                System.out.print("Le nombre" + " " + nombre + " " + "est négatif.");
            } else {
                System.out.print("Le nombre" + " " + nombre + " " + "est positif.");
            }
            s.close();
        }


        public static void solutionExo32() {
            int nombre1 = 0;
            int nombre2 = 0;
            System.out.println("Merci de saisir le premier nombre :");
            nombre1 = s.nextInt();
            System.out.println("Merci de saisir le second nombre :");
            nombre2 = s.nextInt();

            if ((nombre1 < 0 && nombre2 < 0) ||(nombre1 > 0 && nombre2 > 0) ){
                System.out.print("Le produit de" + " " + nombre1 + " " + "et de" + " " + nombre2 + " " + "est positif ");
            } else {
                System.out.print("Le produit de" + " " + nombre1 + " " + "et de " + " " + nombre2 + " " + "est negatif ");

            }
            s.close();
        }

    public static void solutionExo32Autre() {
        int nombre1 = 0;
        int nombre2 = 0;
        System.out.println("Merci de saisir le premier nombre :");
        nombre1 = s.nextInt();
        System.out.println("Merci de saisir le second nombre :");
        nombre2 = s.nextInt();

        if ((nombre1 < 0) ^ (nombre2 < 0)) {
            System.out.print("Le produit de" + " " + nombre1 + " " + "et de" + " " + nombre2 + " " + "est négatif ");
        } else {
            System.out.print("Le produit de" + " " + nombre1 + " " + "et de " + " " + nombre2 + " " + "est positif ");

        }
        s.close();
    }

        public static  void solutionExo33() {
            String nom = " ";
            String nom2 = " ";
            String nom3 = " ";
            System.out.println("Quel est le nom 1 ?");
            nom = s.next().toLowerCase();
            System.out.println("Quel est le nom 2 ?");
            nom2 = s.next().toLowerCase();
            System.out.println("Quel est le nom 3 ?");
            nom3 = s.next().toLowerCase();
            if (nom.compareTo(nom2) < 0 && nom2.compareTo(nom3) < 0) {
                System.out.print("Les noms" + " " + nom + ", " + nom2 + ", " + nom3 + " " + "sont rangés dans l'ordre alphabétique.");
            } else {
                System.out.print("Les noms" + " " + nom + ", " + nom2 + ", " + nom3 + " " + "ne sont pas rangés dans l'ordre alphabétique.");
            }
            s.close();
        }





}
