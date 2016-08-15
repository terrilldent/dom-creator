# dom-creator

Super small DOM builder that supports chaining.

It exposes one function called `create(tagName, attributes)` that can be used to create elements with attributes.

It checks for a special `fragment` case which cannot have attributes.

The response is a `builder` object that has the methods:

- append(builder)
- addEventListener(event, listener)
