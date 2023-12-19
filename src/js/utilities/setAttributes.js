"use strict";

export function setAttributes(element, attributes) {
  if (!isValidElement(element)) {
    throw new Error('The first argument to setAttributes must be an element');
  }

  if (typeof attributes !== 'object' || attributes === null) {
    throw new Error('The second argument to setAttributes must be an object');
  }

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element[key] = attributes[key];
    }
  }
}

function isValidElement(element) {
  return element instanceof HTMLElement;
}