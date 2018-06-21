'use strict';

import {test} from 'tape';
import {Levi} from './sum';

test('if sum', t => {
    let numbers = new Levi; 
    t.equal(numbers.sum ([1,2,3]), 6);
    t.end();
  });

  test('if sum', t => {
    let numbers = new Levi; 
    t.equal(numbers.sum ([1]), 1);
    t.end();
  });

  test('if sum', t => {
    let numbers = new Levi; 
    t.equal(numbers.sum ([]), 0);
    t.end();
  });

  test('if sum', t => {
    let numbers = new Levi; 
    t.equal(numbers.sum ([null]), 1);
    t.end();
  });

  test('if sum', t => {
    let numbers = new Levi; 
    t.equal(numbers.sum (['levi', 'levi', 'levi']), 6);
    t.end();
  });
  
