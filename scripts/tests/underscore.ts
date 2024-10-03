import _ from 'underscore';

//yao run scripts.tests.underscore.main
function main() {
  const numbers = [10, 5, 100, 2, 1000];
  const sorted = _.sortBy(numbers);
  console.log(sorted); // [2, 5, 10, 100, 1000]
}
