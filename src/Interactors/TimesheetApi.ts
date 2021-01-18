/* eslint-disable @typescript-eslint/no-explicit-any */

import InitialConfig, { STAT_TYPE } from "../InitialConfig";
import ModeratorModel, { ModeratorRole } from "../Models/ModeratorModel";
require("axios");
import HttpManager from "./HttpManager";
/* eslint-disable @typescript-eslint/no-empty-function */
class TimesheetApi {
    private static sharedInstance: TimesheetApi;
    private constructor() {}
    page = 0;
    public static shared(): TimesheetApi {
        if (!TimesheetApi.sharedInstance) {
            TimesheetApi.sharedInstance = new TimesheetApi();
        }
        return TimesheetApi.sharedInstance;
    }
}

export default TimesheetApi;
