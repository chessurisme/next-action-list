import { handlebars } from 'handlebars';
import { fs } from 'fs/promises';
document.addEventListener('DOMContentLoaded', async () => {
  const layoutSource = await fs.readFile('layout.hbs', 'utf8');
  const template = handlebars.compile(layoutSource);
  const result = template(data);
  document.body.appendChild(result);
});