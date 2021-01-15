import * as PIXI from "pixi.js";
import HourRenderer from "./UI/ItemRenderers/HourRenderer";
import "./style.css";

const app = new PIXI.Application({
    backgroundColor: 0xffffff,
});

const stage = app.stage;

window.onload = async (): Promise<void> => {
    await loadAssets();

    document.body.appendChild(app.view);

    resizeCanvas();

    const hourTest = new HourRenderer();
    hourTest.width = 100;
    hourTest.height = 100;
    stage.addChild(hourTest);
};

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

function getBird(): PIXI.AnimatedSprite {
    const bird = new PIXI.AnimatedSprite([]);

    bird.loop = true;
    bird.animationSpeed = 0.1;
    bird.play();
    bird.scale.set(3);

    return bird;
}
