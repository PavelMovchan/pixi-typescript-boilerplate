/* eslint-disable @typescript-eslint/no-explicit-any */
import DayModel from "../Models/DayModel";
import ModeratorModel from "../Models/ModeratorModel";
import testModersResponseString from "../testRes/testModersResponseString";
import testTimeSheetResponseString from "../testRes/testTimeSheetResponseString";
import TimesheetApi from "./TimesheetApi";
/* eslint-disable @typescript-eslint/no-empty-function */
class TimesheetInteractor {
    private static sharedInstance: TimesheetInteractor;
    private static api = TimesheetApi.shared();
    page = 0;
    numDaysInWeek = 7;
    private moderatorsMap = new Map();
    private moderatorsWorkingThisWeekMap = new Map();
    private timesheet: Array<DayModel> = [];
    // private allModerators = <ModeratorModel><unknown>[]

    private constructor() {}

    public static shared(): TimesheetInteractor {
        if (!TimesheetInteractor.sharedInstance) {
            TimesheetInteractor.sharedInstance = new TimesheetInteractor();
        }
        return TimesheetInteractor.sharedInstance;
    }

    public start(): void {
        this.defineModeratorsList();
        this.parseTimesheet();
    }

    defineModeratorsList(): void {
        const modersJSONTestObject = JSON.parse(testModersResponseString);
        modersJSONTestObject.data.map((c: any) => {
            this.moderatorsMap.set(c.name, new ModeratorModel(c));
        });
    }

    parseTimesheet(): void {
        const timesheetSONTestObject = JSON.parse(testTimeSheetResponseString);
        timesheetSONTestObject.data.moderators.map((c: any, i: number) => {
            this.moderatorsWorkingThisWeekMap.set(i, c);
        });
        timesheetSONTestObject.data.time_sheet.map((c: any, i: number) => {
            this.timesheet.push(new DayModel(c));
            this.moderatorsWorkingThisWeekMap.forEach((value: ModeratorModel, key: string) => {
                const day = new DayModel(c, this.moderatorsMap);
            });
        });
        // console.log(this.timesheet);
        // console.log(timesheetSONTestObject);
        // console.log(this.moderatorsWorkingThisWeekMap);
    }
}

export default TimesheetInteractor;
