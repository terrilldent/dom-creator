var create = (function() {
  var builderProto = {
    append: function(childBuilder) {
      this.element.appendChild(childBuilder.element);
      return this;
    },
    addEventListener: function(event, fn) {
      this.element.addEventListener(event, fn, true);
      return this;
    }
  };

  return function(tagName, attributes) {
    var builder = Object.create( builderProto );

    if (tagName === 'fragment') {
      builder.element = document.createDocumentFragment();
    } else {
      builder.element = document.createElement( tagName );
      for( key in attributes ) {
        if( attributes.hasOwnProperty( key ) ) {
          builder.element[ key ] = attributes[ key ];
        }
      }
    }

    return builder;
  };
}());
