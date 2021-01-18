import ModeratorModel from "./ModeratorModel";

/* eslint-disable @typescript-eslint/no-empty-function */
class DayModel {
    constructor(json: any, moderatorsInfoMap: Map<string, ModeratorModel>) {
        console.log(json);
        Object.assign(this, json);
    }
}

export default DayModel;
