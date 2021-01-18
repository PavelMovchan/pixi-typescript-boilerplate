import ITimePeriod from "../Interactors/Interfaces/TimePeriod";

/* eslint-disable @typescript-eslint/no-empty-function */
class BitUtils {
    constructor() {}

    public static setBit(bits: number, pos: number, value: boolean): number {
        const mask: number = 1 << pos;
        return value ? bits | mask : bits & ~mask;
    }

    public static getBit(bits: number, pos: number): boolean {
        return (bits & (1 << pos)) != 0;
    }

    public static defineIntPositions(arr: Array<ITimePeriod>): number {
        let time = 0;
        const size: number = arr.length;

        for (let i = 0; i < size; i++) {
            const period: ITimePeriod = arr[i];
            for (let j: number = period.start; j < period.end; j++) {
                time = BitUtils.setBit(time, j, true);
            }
        }
        return time;
    }
}

export default BitUtils;
