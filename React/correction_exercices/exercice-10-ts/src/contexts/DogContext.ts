import { createContext } from "react";
import Dog from "../models/Dog";

export interface DogState {
    dogs: Dog[],
    setDogs: React.Dispatch<React.SetStateAction<Dog[]>>
}

export const DogContext = createContext<DogState | null>(null)