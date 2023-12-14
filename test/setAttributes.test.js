"use strict";

import { JSDOM } from 'jsdom';
import { setAttributes } from "../src/js/utilities/setAttributes.js";

const dom = new JSDOM('<!DOCTYPE html>');
global.window = dom.window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;

describe('setAttributes function', () => {
  it('should set attributes on a valid DOM element', () => {
    const apple = document.createElement('div');
    const attributes = {
      id: 'apple',
      className: 'fruit'
    };

    setAttributes(apple, attributes);

    expect(apple.id).toBe('apple');
    expect(apple.className).toBe('fruit');
  });

  it('should not set attributes with invalid keys or values', () => {
    const element = document.createElement('div');
    const attributes = {
      id: 'apple',
      class: null,
      data: undefined
    };

    setAttributes(element, attributes);

    expect(element.id).toBe('apple');
    expect(element.className).toBe('');
    expect(element.getAttribute('data')).toBe(null);
  });

  it('should handle empty attribute objects', () => {
    const element = document.createElement('div');
    const attributes = {};

    setAttributes(element, attributes);

    expect(element.getAttributeNames().length).toBe(0);
  });

  it('should throw an error if the first argument is not a valid element', () => {
    let invalidElement = 6;
    const attributes = {
      id: 'apple',
      className: 'fruit'
    };

    expect(() => setAttributes(invalidElement, attributes)).toThrowError('The first argument to setAttributes must be an element');
  });

  it('should throw an error if the second argument is not an object', () => {
    const validElement = document.createElement('div');
    const invalidAttributes = 'notAnObject';

    expect(() => setAttributes(validElement, invalidAttributes)).toThrowError('The second argument to setAttributes must be an object');
  });

  it('should set attributes on a valid DOM element', () => {
    const validElement = document.createElement('div');
    const attributes = {
      id: 'apple',
      className: 'fruit'
    };

    setAttributes(validElement, attributes);

    expect(validElement.id).toBe('apple');
    expect(validElement.className).toBe('fruit');
  });

  it('should not set attributes with invalid keys or values', () => {
    const element = document.createElement('div');
    const attributes = {
      id: 'apple',
      class: null,
      data: undefined
    };

    setAttributes(element, attributes);

    expect(element.id).toBe('apple');
    expect(element.className).toBe('');
    expect(element.getAttribute('data')).toBe(null);
  });

  it('should handle empty attribute objects', () => {
    const element = document.createElement('div');
    const attributes = {};

    setAttributes(element, attributes);

    expect(element.getAttributeNames().length).toBe(0);
  });
});