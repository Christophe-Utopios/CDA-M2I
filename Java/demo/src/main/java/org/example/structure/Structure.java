package org.example.structure;

public class Structure {
    static int int1 = 100;
   static int int2 = 200;

    public static void getIfElse() {
        if(int1 > int2){
            System.out.println("int1 > int2");
        }else{
            System.out.println("int1 < int2");
        }

    }

    public static void getIfElseElseIf() {
        if(int1 > int2){
            System.out.println("int1 > int2");
        }else if(int1 == int2){
            System.out.println("int1 == int2");
        }else{
            System.out.println("int1 < int2");
        }

    }

    public static void getSwitch() {

       String val = "titi";

       switch (val){
           case "titi":
               System.out.println("C'est titi");
               break;
           case "toto":
               System.out.println("C'est toto");
               break;
           case "tutu":
               System.out.println("C'est tutu");
               break;
           case "tata":
               System.out.println("C'est tata");
               break;
           case "tete":
               System.out.println("C'est tete");
               break;
           default:
               System.out.println("y a rien");
       }

    }


}
