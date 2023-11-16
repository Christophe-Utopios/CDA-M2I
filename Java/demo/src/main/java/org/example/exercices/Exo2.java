package org.example.exercices;

import java.util.Scanner;

public class Exo2 {

    public static Scanner scanner = new Scanner(System.in);

    public static void solutionExo34() {
        int nombre = 0;
        System.out.println("Merci de saisir un nombre?");

        nombre = scanner.nextInt();

        if (nombre == 0) {
            System.out.println("Le nombre est null");
        } else if (nombre < 0) {
            System.out.println("Le nombre est négatif");
        } else {
            System.out.println("Le nombre est positif");
        }
        scanner.close();
    }

    public void solutionExo35() {

        System.out.println("Merci de saisir l'age de l'enfant?");
        int age = scanner.nextInt();

        if (age >= 12) {
            System.out.println("Il est dans la catégorie Cadet");
        } else if (age >= 10) {
            System.out.println("Il est dans la catégorie Minime");
        } else if (age >= 8) {
            System.out.println("Il est dans la catégorie Pupille");
        } else if (age >= 6) {
            System.out.println("Il est dans la catégorie Poussin");
        } else{
            System.out.println("Aucune catégorie");
        }

        scanner.close();
    }


    public void solutionExo36() {
        int nombre = 0;
        System.out.println("Merci de saisir un nombre entier?");

        nombre = scanner.nextInt();

        if (nombre % 3 == 0) {
            System.out.println("Le nombre est divisible par 3.");
        } else {
            System.out.println("Le nombre n'est pas divisible par 3.");
        }
        scanner.close();
    }

    public void solutionExo37() {

        System.out.println("Merci de saisir le nombre de photocopies à réaliser ?");
        int nombre = scanner.nextInt();
        double total;

        if (nombre > 20) {
            total = nombre * 0.05;
        } else if (nombre > 10) {
            total = nombre * 0.10;
        } else {
            total = nombre * 0.15;
        }

        System.out.println("Le prix à payer est de " + total + " euros");

        scanner.close();

    }
}