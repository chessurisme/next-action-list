import Handlebars from "handlebars";

document.addEventListener('DOMContentLoaded', () => {
  fetch('./templates/layout.hbs')
    .then(response => response.text())
    .then(templateSource => {

      const template = Handlebars.compile(templateSource);

      const layout = template();

      document.body.innerHTML = layout;
    });
})