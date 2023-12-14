"use strict";

export function setAttributes(element, attributes){
  for (const key in attributes){
    if(attributes.hasOwnProperty(key)){
      element.setAttribute(key, attributes[key]);
    }
  }
}