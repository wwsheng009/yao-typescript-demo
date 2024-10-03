import { Process } from '@yaoapps/client';
import { default as countBy } from 'lodash-es/countBy.js';
import { default as keyBy } from 'lodash-es/keyBy';
import dayjs from 'dayjs';
import { zxcvbn } from '@zxcvbn-ts/core';
import { keys } from 'radash';
import { sum } from 'es-toolkit';

import { default as cytoscape } from 'cytoscape';
/**
 * yao run scripts.tests.lodash.test
 */
function test() {
  console.log(countBy([6.1, 4.2, 6.3], Math.floor));
  // => { '4': 1, '6': 2 }
  console.log(countBy(['one', 'two', 'three'], 'length'));
  const data = Process('models.admin.user.get', {});
  console.log(keyBy(data, 'email'));
  console.log(dayjs('2018-08-08'));
  console.log(dayjs().add(1, 'year')); //'2018-08-08'));
  console.log(zxcvbn('12#133%&*3').score);
  console.log(keys(data[0]));
  console.log(sum([1, 2, 3]));

  const cy = cytoscape({});
  cy.add({
    group: 'nodes',
    data: { weight: 75 },
    position: { x: 200, y: 200 }
  });
  console.log(cy.json());
}
