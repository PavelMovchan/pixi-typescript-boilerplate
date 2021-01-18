/* eslint-disable @typescript-eslint/no-explicit-any */

import InitialConfig, { STAT_TYPE } from "../InitialConfig";
import ModeratorModel from "../Models/ModeratorModel";
require("axios");
import http from "axios";
/* eslint-disable @typescript-eslint/no-empty-function */
class HttpManager {
    ONLINE_USERS_KEY = "790FC5834B849B996FAC60DE1C14C9D6";
    ONLINE_WEBRTC_USERS_KEY = "pp84c0ar111hmx6xy52zzkdf3";
    private apiUrl = "http://timesheet.videochat-server.com/";
    private reqKey = "421e6726699445a89f79da34f8d146a9";
    private static sharedInstance: HttpManager;
    private constructor() {}

    public static shared(): HttpManager {
        if (!HttpManager.sharedInstance) {
            HttpManager.sharedInstance = new HttpManager();
        }
        return HttpManager.sharedInstance;
    }

    public getTimeSheet(page: number, type: STAT_TYPE = STAT_TYPE.UNKNOW): Promise<JSON[]> {
        return http
            .get(this.apiUrl, {
                params: {
                    key: this.reqKey,
                    month_offset: page,
                },
            })
            .then((response) => {
                return response.data.data.map((u: any) => new ModeratorModel(u));
            });
    }
}

export default HttpManager;
