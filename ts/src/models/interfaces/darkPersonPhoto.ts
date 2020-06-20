import { DarkPerson } from "./darkPerson";
import { AgeGroup } from "../constants/enum/ageGroup";

export class DarkPersonPhoto {
    young: string|undefined;
    adult: string|undefined;
    old: string|undefined;

    constructor(person : string, ageGroups: AgeGroup[]|undefined){
        if(ageGroups == undefined){
            this.young = 'assets/persons/'+person+'0.jpg';
            this.adult = 'assets/persons/'+person+'1.jpg';
            this.old = 'assets/persons/'+person+'2.jpg';
        }else{
            this.young = undefined;
            this.adult = undefined;
            this.old = undefined;
            if(ageGroups.includes(AgeGroup.young)){
                this.young = 'assets/persons/'+person+'0.jpg';
            }
            if(ageGroups.includes(AgeGroup.adult)){
                this.adult = 'assets/persons/'+person+'1.jpg';
            }
            if(ageGroups.includes(AgeGroup.old)){
                this.old = 'assets/persons/'+person+'2.jpg';
            }
        }
    }
}