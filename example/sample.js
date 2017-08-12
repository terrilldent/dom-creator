document.addEventListener('DOMContentLoaded', function() {
  var body = document.getElementsByTagName('body')[0];

  body.appendChild(
    create('h1', {
      className: 'title',
      textContent: 'DOM Creator'
    })
    .build()
  );

  body.appendChild(
    create('div', {className: 'main-column'})
      .append(
        create('ul', {className: 'primary-nav'})
          .append(create('li', {className: 'primary-nav-item', textContent: 'Home'}))
          .append(create('li', {className: 'primary-nav-item', textContent: 'Blog'}))
          .append(create('li', {className: 'primary-nav-item', textContent: 'Contact'}))
      )
      .build()
  );

  body.appendChild(
    create('button', {className: 'main-column'})
      .append(create('img', {className: 'button-icon', src: 'https://dummyimage.com/8x8/5060ba/56b399.png'}))
      .append(create('span', {className: 'button-title', textContent: 'Submit'}))
      .addEventListener('click', function() {
        alert('Submitted');
      })
      .build()
  );
});
