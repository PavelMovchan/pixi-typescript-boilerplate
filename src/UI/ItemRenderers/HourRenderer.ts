import * as PIXI from "pixi.js";

class HourRenderer extends PIXI.Graphics {
    constructor() {
        super();
        this.update();
    }

    update(): void {
        this.beginFill(0xffff00);
        this.lineStyle(5, 0xff0000);
        this.drawRect(0, 0, this.width, this.height);
    }
}

export default HourRenderer;
