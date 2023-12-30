import fs from 'fs';
import path from 'path';
import { generateApi } from 'swagger-typescript-api';

generateApi({
  name: 'NvCmsApi.ts',
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), './src/__generated_apis__'),
  url: 'http://localhost:1337/api',
  input: path.resolve(process.cwd(), 'full_documentation.json'),
  spec: {
    swagger: '2.0',
    info: {
      version: '1.0.0',
      title: 'Nv Cms Api',
    },
    // ...
  },
  generateRouteTypes: true,
  moduleNameFirstTag: true,
  modular: true,
})
  .then(({ files }) => {
    files.forEach((params) => {
      const { content } = params;
      if (content) fs.writeFile(path, content);
    });
  })
  .catch((e) => console.error(e));
