const settings: {
  csvFilePath: string;
  outputPath: string;
  exclude: ("component" | "storybook" | "scss")[];
} = {
  csvFilePath: "/Users/tsuchida/Downloads/Icon.csv",
  outputPath:
    "/Users/tsuchida/develop/webApplication/basic-web-app/packages/ui-library/src/components/Other",
  exclude: ["component", "scss"],
};

export { settings };
