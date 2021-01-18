import * as PIXI from "pixi.js";
import HourRenderer from "./UI/ItemRenderers/HourRenderer";
import TimesheetInteractor from "./Interactors/TimeSheetInteractor";
import "./style.css";

const app = new PIXI.Application({
    backgroundColor: 0xffffff,
});

const stage = app.stage;

window.onload = async (): Promise<void> => {
    await loadAssets();

    initInteractor();
    document.body.appendChild(app.view);

    resizeCanvas();

    const hourTest = new HourRenderer();
    hourTest.frame = { width: 100, height: 100, x: 10, y: 10 };

    stage.addChild(hourTest);
};

function initInteractor(): void {
    TimesheetInteractor.shared().start();
}

async function loadAssets(): Promise<void> {
    return new Promise((res, rej) => {
        const loader = PIXI.Loader.shared;
        loader.add("rabbit", "./assets/simpleSpriteSheet.json");

        loader.onComplete.once(() => {
            res();
        });

        loader.onError.once(() => {
            rej();
        });

        loader.load();
    });
}

function resizeCanvas(): void {
    const resize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    };

    resize();

    window.addEventListener("resize", resize);
}
