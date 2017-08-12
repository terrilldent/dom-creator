# dom-creator

Super small DOM builder that supports chaining.

It exposes one function called `create(tagName, attributes)` that can be used to create elements with attributes.

It checks for a special `fragment` case which cannot have attributes.

The response is a `builder` object that has the methods:

- append(builder)
- addEventListener(event, listener)


### Create an `h1` title:

```
create('h1', {
    className: 'title',
    textContent: 'DOM Creator'
  })
  .build()
```

### Create a list with nested elements.

```
create('div', {className: 'main-column'})
  .append(
    create('ul', {className: 'primary-nav'})
      .append(create('li', {className: 'primary-nav-item', textContent: 'Home'}))
      .append(create('li', {className: 'primary-nav-item', textContent: 'Blog'}))
      .append(create('li', {className: 'primary-nav-item', textContent: 'Contact'}))
  )
  .build()
```

### Create a button with an icon, label, and click action

```
create('button', {className: 'main-column'})
  .append(create('img', {className: 'button-icon', src: 'https://dummyimage.com/8x8/5060ba/56b399.png'}))
  .append(create('span', {className: 'button-title', textContent: 'Submit'}))
  .addEventListener('click', function() {
    alert('Submitted');
  })
  .build()

```
