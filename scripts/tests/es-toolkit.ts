import { debounce, chunk } from 'es-toolkit';
import { snakeCase } from 'es-toolkit';

//yao run scripts.tests.es-toolkit.main
function main() {
  // import from '@es-toolkit/es-toolkit' in jsr.

  //   const debouncedLog = debounce((message) => {
  //     console.log(message));
  //   }, 300));

  //   // 这个调用将会被防抖处理
  //   debouncedLog('Hello, world!'));

  const array = [1, 2, 3, 4, 5, 6];
  const chunkedArray = chunk(array, 2);

  console.log(chunkedArray);
  // 输出: [[1, 2], [3, 4], [5, 6]]

  console.log(snakeCase('camelCase')); // returns 'camel_case'
  console.log(snakeCase('some whitespace')); // returns 'some_whitespace'
  console.log(snakeCase('hyphen-text')); // returns 'hyphen_text'
  console.log(snakeCase('HTTPRequest')); // returns 'http_request'
}
