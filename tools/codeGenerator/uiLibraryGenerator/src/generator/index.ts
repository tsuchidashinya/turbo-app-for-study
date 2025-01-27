import fs from "fs";
import { ComponentData } from "../parser/ComponentData";
import { mkdir } from "../utils/mkdir";
import { createComponentTree, TreeNode } from "./createComponentTree";
import { getComponentCode } from "./getComponentCode";
import { getScssCode } from "./getScssCode";
import { getStorybookCode } from "./getStorybookCode";

type ComponentCategory = "ui" | "page";

const generateFromTree = (
  treeNode: TreeNode,
  components: ComponentData[],
  destPath: string,
  exclude: ("component" | "storybook" | "scss")[]
) => {
  if (treeNode.children.length === 0) {
    return;
  }
  for (const childNode of treeNode.children) {
    const childComponent = components.find(
      (component) => component.name === childNode.name
    );
    if (childComponent) {
      const dirPath = `${destPath}/${childComponent.name}`;
      console.log(`writeBefore`);
      mkdir(dirPath);
      console.log(`writeCode`);

      if (!exclude.includes("component")) {
        const componentCode = getComponentCode(childComponent);
        fs.writeFileSync(`${dirPath}/index.tsx`, componentCode);
      }

      if (!exclude.includes("scss")) {
        const scssCode = getScssCode(childComponent);
        fs.writeFileSync(`${dirPath}/index.module.scss`, scssCode);
      }
    }
    if (childNode.children.length > 0) {
      generateFromTree(
        childNode,
        components,
        `${destPath}/${childNode.name}`,
        exclude
      );
    }
  }
};

const generateComponent = (
  destPath: string,
  componentList: ComponentData[],
  exclude: ("component" | "storybook" | "scss")[]
) => {
  const componentTree = createComponentTree(componentList);
  generateFromTree(componentTree, componentList, destPath, exclude);

  for (const rootChild of componentTree.children) {
    const component = componentList.find(
      (component) => component.name === rootChild.name
    );
    if (component && !exclude.includes("storybook")) {
      const storybookCode = getStorybookCode(component);
      fs.writeFileSync(
        `${destPath}/${rootChild.name}/index.stories.tsx`,
        storybookCode
      );
    }
  }
};

export { generateComponent };
export type { ComponentCategory };
