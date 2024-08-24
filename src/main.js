// import { createApp, render } from "vue";
// import "./style.css";
import { createRenderer } from "vue";
import App from "./App.vue";
import { Application, Graphics } from "pixi.js";

const game = new Application({
  width: 500,
  height: 500,
});

document.body.append(game.view);

const renderer = createRenderer({
  createElement(type) {
    console.log("🚀 ~ createElement ~ type:", type);
    // const element = document.createElement(type);

    let element;
    if (type === "rect") {
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0, 0, 50, 50);
      element.endFill();
    } else if (type === "circle") {
      element = new Graphics();
      element.beginFill(0xffff00);
      element.drawCircle(0, 0, 50);
      element.endFill();
    }

    return element;
  },

  insert(el, parent) {
    console.log("🚀 ~ insert ~ el:", el);
    console.log("🚀 ~ insert ~ parent:", parent);
    // parent.append(el);
    parent.addChild(el);
  },

  patchProp(el, key, prevValue, nextValue) {
    el[key] = nextValue;
  },

  //   setElementText(node, text) {
  //     node.append(document.createTextNode(text));
  //   },
});

console.log(renderer);
// !
renderer.createApp(App).mount(game.stage);

// renderer.createApp(App).mount(document.querySelector("#app"));

// console.log("app ", { App, render: App.render() });
// createApp(App).mount("#app");
