import CoreGraphics from "../Core/CoreGraphics";
import IFrame from "../Core/IFrame";

class HourRenderer extends CoreGraphics {
    constructor() {
        super();
        this.invalidate();
    }

    invalidate(): void {
        this.beginFill(0xff0000);
        this.drawRect(this.frame.x, this.frame.y, this.frame.width, this.frame.height);
    }
}

export default HourRenderer;
