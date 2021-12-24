const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

try {
  inputYamlPath = path.join('assets', 'base.yaml');
  dest = path.join('assets', 'data.json');

  fileContents = fs.readFileSync(inputYamlPath, 'utf8');
  data = yaml.load(fileContents);
  fs.writeFileSync(dest, JSON.stringify(data), 'utf8');
  console.log(data);
} catch (e) {
  console.log('Garchamos');
}