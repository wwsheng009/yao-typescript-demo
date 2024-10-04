import F from 'futil-js';

import md5 from 'md5';

//yao run scripts.tests.futil-js.main
async function main() {
  console.log(md5('message'));

  let braceHighlight = F.highlight('{', '}');
  console.log(braceHighlight('l o', 'hello world')); //-> "he{llo} w{o}r{l}d"
  console.log(braceHighlight(/l+\w/, 'hello world')); //-> "he{llo} wor{ld}"

  console.log(F.compactObject({ a: 1, b: null, c: 3 }));
  // => { a: 1, c: 3 }

  console.log(F.flattenObject({ a: 1, b: { x: 10, y: 11 }, c: 3 }));
  // => { a: 1, 'b.x': 10, 'b.y': 11, c: 3 }

  console.log(F.unflattenObject({ a: 1, 'b.x': 10, 'b.y': 11, c: 3 }));
  // => { a: 1, b: { x: 10, y: 11 }, c: 3}

  //   let tree = { a: { b: { c: [1, 2, 3] } } };
  //   let walkAsyncTest = F.walkAsync()(async (node) => {
  //     await Promise.delay(10);
  //     if (F.isArray(node)) node.push(4);
  //   })(tree);
  //   tree.a.b.c.length;
  //   /* => 3 */
  //   await walkAsyncTest;
  //   tree.a.b.c.length;
  /* => 4 */
}
