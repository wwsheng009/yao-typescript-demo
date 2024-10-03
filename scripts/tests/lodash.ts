// import  * as _ from 'lodash-es'
import { Process } from '@yaoapps/client';
import  _ from 'lodash-es'
import { default as countBy } from 'lodash-es/countBy.js';
import { default as keyBy } from 'lodash-es/keyBy';

//yao run scripts.tests.lodash.main
function main(){

  console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
  // => { '4': 1, '6': 2 }
  console.log(_.countBy(['one', 'two', 'three'], 'length'));

  console.log(countBy([6.1, 4.2, 6.3], Math.floor));
  // => { '4': 1, '6': 2 }
  console.log(countBy(['one', 'two', 'three'], 'length'));
  const data = Process('models.admin.user.get', {});
  console.log(keyBy(data, 'email'));
}