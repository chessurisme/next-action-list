document.addEventListener('DOMContentLoaded', function () {
  fetch('layout.hbs')
    .then(response => response.text())
    .then(templateSource => {

      const template = Handlebars.compile(templateSource);

      const html = template(data);

      document.body.appendChild(html);
    });
})