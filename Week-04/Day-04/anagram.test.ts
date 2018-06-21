'use strict'

import {test} from 'tape';
import {LLevi} from './anagram';

test('if sum', t => {
    let annagram = new LLevi; 
    t.equal(annagram.anagram ('levi', 'vile'), true);
    t.end();
  });