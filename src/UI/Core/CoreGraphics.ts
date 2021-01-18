/* eslint-disable @typescript-eslint/no-empty-function */
import * as PIXI from "pixi.js";
import IFrame from "../Core/IFrame";
abstract class CoreGraphics extends PIXI.Graphics {
    _frame = { x: 0, y: 0, width: 0, height: 0 };
    protected abstract invalidate(): void;
    constructor() {
        super();
    }

    set frame(v: IFrame) {
        this._frame = v;
        this.width = v.width;
        this.height = v.height;
        this.x = v.x;
        this.y = v.y;
        this.invalidate();
    }

    get frame(): IFrame {
        return this._frame;
    }
}

export default CoreGraphics;
