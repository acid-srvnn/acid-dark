import { TimeTravel } from "../models/interfaces/timeTravel";
import { TimeLine } from "../models/constants/enum/timeLine";
import { TimeTravelDevice } from "../models/constants/enum/timeTravelDevice";
import { DarkPersons } from "../models/constants/darkPersons";
import { AgeGroup } from "../models/constants/enum/ageGroup";

export class TimeTravels {
    public static tt111: TimeTravel = {
        from: TimeLine.t2019,
        to: TimeLine.t1986,
        device: TimeTravelDevice.cave,
        location: '',
        persons: [{ person: DarkPersons.mikkelNielsen, personTime: AgeGroup.young }]
    }
}