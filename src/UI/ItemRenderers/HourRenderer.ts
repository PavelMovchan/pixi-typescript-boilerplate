import CoreGraphics from "../Core/CoreGraphics";

class HourRenderer extends CoreGraphics {
    constructor() {
        super();
        this.update();
    }

    update(): void {
        this.beginFill(0xff0000);
        this.drawRect(0, 0, 10, 10);
    }
}

export default HourRenderer;
