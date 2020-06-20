import { DarkFamily } from "../constants/enum/darkFamily";
import { DarkPersonPhoto } from "./darkPersonPhoto";

export interface DarkPerson {
    name: string,
    family: DarkFamily,
    photos: DarkPersonPhoto,
    father: DarkPerson | undefined,
    mother: DarkPerson | undefined,
    altName?: string[]
}