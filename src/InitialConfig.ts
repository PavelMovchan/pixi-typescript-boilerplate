/* eslint-disable @typescript-eslint/no-empty-function */
export enum STAT_TYPE {
    UNKNOW = 0,
    KR = 1 << 0,
    KYIV = 1 << 1,
    ADMIN = 1 << 2,
}

class InitialConfig {
    type: STAT_TYPE = STAT_TYPE.KYIV;
    constructor() {}

    public static pathToType(v: string): STAT_TYPE {
        switch (v) {
            case "kyiv": {
                return STAT_TYPE.KYIV;
            }
            case "kr": {
                return STAT_TYPE.KR;
            }
            case "admin": {
                return STAT_TYPE.ADMIN;
            }
            default: {
                return STAT_TYPE.KYIV;
            }
        }
    }
}

export default InitialConfig;
