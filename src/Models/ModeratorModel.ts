/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
export enum ModeratorRole {
    UNKNOW = 0,
    PICTURE = 1 << 0,
    TEXT = 1 << 1,
    REPORT = 1 << 2,
    SOCIAL = 1 << 3,
    SUPER = 1 << 4,
    ADMIN = 1 << 5,
}

class ModeratorModel {
    color = "";
    name = "";
    displayName = "";
    id = 0;
    displayIndex = 0;
    moderatorKind = ModeratorRole.UNKNOW;
    deleted = false;
    showOnGraph = true;
    hoursInWeek = 0;
    countModeratorThisHour = [];
    //ocalIndex = 0;

    constructor(json: any) {
        Object.assign(this, json);
    }
}

export default ModeratorModel;
