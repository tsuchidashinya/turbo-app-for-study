import { ComponentData } from "../parser/ComponentData";
import {
  ARGS_TEMPLATE,
  STORY_OBJECT_TEMPLATE,
  STORYBOOK_TEMPLATE,
} from "../template/storybook";
import { convertUpperCamelCase } from "../utils/convertUpperCamelCase";

const getArgs = (props: ComponentData["props"]) => {
  return props
    .map(({ name, default: defaultValue }, index) => {
      return (
        ARGS_TEMPLATE.replace(/\{\$NAME\}/g, name).replace(
          /\{\$DEFAULT\}/g,
          defaultValue ?? "undefined",
        ) + (index < props.length - 1 ? "," : "")
      );
    })
    .join("\n");
};

const getStoryObject = (props: ComponentData["props"]) => {
  return props
    .map(({ name, default: defaultValue }) => {
      return STORY_OBJECT_TEMPLATE.replace(
        /\{\$ARG_CAMEL_NAME\}/,
        convertUpperCamelCase(name),
      )
        .replace(/\{\$ARG\}/, name)
        .replace(/\{\$DEFAULT\}/, defaultValue ?? "undefined");
    })
    .join("\n");
};

const getStorybookCode = (componentData: ComponentData) => {
  return STORYBOOK_TEMPLATE.replace(
    /\{\$NAME\}/g,
    convertUpperCamelCase(componentData.name),
  )
    .replace(/\{\$ARGS\}/g, getArgs(componentData.props))
    .replace(/\{\$STORY_OBJECT\}/g, getStoryObject(componentData.props));
};

export { getStorybookCode };
