'use strict';

import {test} from 'tape';
import {apples} from './apples';

test('if apples', t => {
    let name = new apples;  // it létrehozok egy instance-t az apples class alá 'name' néven
    t.equal(name.getApple ('apples'), 'apples');  // a zárójelben bemeneti és kimeneti teszt érték van a getApple func.-oz
    t.end();
  });

