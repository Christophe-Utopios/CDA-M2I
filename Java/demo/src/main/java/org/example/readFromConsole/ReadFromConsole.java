package org.example.readFromConsole;
import java.util.Scanner;

public class ReadFromConsole {

    public static void getReadWrite() {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Donne moi un nom : ");
        String nom = scanner.next();
        System.out.println("Le nom saisi est " + nom);
        System.out.println("Donne moi un nombre : ");
        Integer nombre = scanner.nextInt();
        System.out.println("Le nombre saisi est " + nombre);

    }

}
