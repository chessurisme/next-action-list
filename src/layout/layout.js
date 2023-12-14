import { handlebars } from 'handlebars';
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('layout.hbs');
  const layoutSource = await response.text();

  const template = handlebars.compile(layoutSource);
  
  const result = template(data);
  document.body.appendChild(result);
});