import { generateComponent } from "./generator";
import { parseComponents } from "./parser/parseComponents";
import { settings } from "./setting";

const main = async () => {
  const { csvFilePath, outputPath, exclude } = settings;
  const components = await parseComponents(csvFilePath);
  generateComponent(outputPath, components, exclude);
  console.log(`generated on ${outputPath}!!!!`);
};

main();
