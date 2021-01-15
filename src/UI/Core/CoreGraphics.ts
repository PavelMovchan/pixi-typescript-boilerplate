/* eslint-disable @typescript-eslint/no-empty-function */
import * as PIXI from "pixi.js";
import IFrame from "../Core/IFrame";
class CoreGraphics extends PIXI.Graphics {
    _frame = { x: 0, y: 0, width: 0, height: 0 };
    constructor() {
        super();
    }

    set frame(v: IFrame) {
        this.invalidate();
        this._frame = v;
    }

    get frame(): IFrame {
        return this._frame;
    }

    invalidate(): void {}
}

export default CoreGraphics;
