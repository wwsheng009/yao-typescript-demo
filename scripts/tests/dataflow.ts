import * as df from 'dataflow-api';
//yao run scripts.tests.dataflow.main
function main() {
  var flow = df.dataflow([
    df
      .aggregate()
      .groupby(['category'])
      .measure([df.count(), df.sum('amount').as('sum')])
  ]);

  flow.insert([
    { category: 'a', amount: 12 },
    { category: 'a', amount: 5 },
    { category: 'b', amount: 11 }
  ]);

  // [{category: 'a', count: 2, sum: 17}, {category: 'b', count: 1, sum: 11}]
  console.log(flow.values());

  // Bin the 'amount' field, up to a maximum of 30 bins
  // Write the bin boundaries to the fields 'bin_start' and 'bin_end'
  df.bin().field('amount').maxbins(30).as(['bin_start', 'bin_end']);

  // Identical specification using shorthand arguments
  df.bin('amount').maxbins(30).as(['bin_start', 'bin_end']);
}
// yao run scripts.tests.dataflow.main1
function main1() {
  const input = [
    { foo: 0, bar: 'a' },
    { foo: 1, bar: 'a' },
    { foo: 2, bar: 'b' },
    { foo: 3, bar: 'b' }
  ];

  const flow = df.dataflow([
    df.formula('baz', df.expr((d) => 1 + d.foo * d.foo).fields(['foo']))
  ]);

  const output = flow.insert(input).values();
  return output;
}
