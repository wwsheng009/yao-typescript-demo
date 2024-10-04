import pd from 'pandas-js';
import { Series, DataFrame } from 'pandas-js';


// https://stratodem.github.io/pandas.js-docs/#introduction


// yao run scripts.tests.pandas.main
function main1() {
  const ds = new Series([1, 2, 3, 4], {
    name: '我的测试名称',
    index: [2, 3, 4, 5]
  });
  console.log(ds.toString());
  // 输出:
  // 2   1
  // 3   2
  // 4   3
  // 5   4
  // 名称: 我的测试名称, 类型: int

  const ds1 = new Series([1, 2, 3]);
  // 返回Series([2, 3]);
  ds1.filter(ds1.gte(2));

  const ds2 = new Series([1, 2, 3], { name: '测试名称' });

  // 返回Series([真, 假, 假])
  ds2.eq(1);

  // 返回Series([假, 真, 真])
  ds2.eq(new Series([0, 2, 3]));
  
  // 同上，使用Immutable.List
  //   ds.eq(Immutable.List([0, 2, 3]));
  
  // 或直接使用数组
  ds2.eq([0, 2, 3]);
  
  // 返回Series([2, 3])
  ds2.filter(ds2.eq([0, 2, 3]));
  
  const df = new DataFrame([
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 4 }
  ]);
  
  // 输出:
  //     x |  y
  // 0  1 |  2
  // 1  2 |  3
  // 2  3 |  4
  console.log(df.toString());
  console.log(df.columns)
}

main();
// npm i babel-runtime
// yao run scripts.tests.pandas.main
function main() {
  // 创建一个 DataFrame
  const data = {
    Name: ['Alice', 'Bob', 'Charlie'],
    Age: [25, 30, 35],
    City: ['New York', 'San Francisco', 'Los Angeles']
  };

  const df = new pd.DataFrame(data);
  console.log(df);

  // 选择某一列
  const ageColumn = df.get('Age');
  console.log(ageColumn);

  // 筛选年龄大于25的数据
  const filtered = df.filter((row) => row.get('email') > 25);
  console.log(filtered);

  // 添加新列 "Salary"
  df.assign('Salary', [50000, 60000, 70000]);
  console.log(df);

  // 删除 "City" 列
  df.drop(['City']);
  console.log(df);

  // 计算年龄的平均值
  const meanAge = df.get('Age').mean();
  console.log('Mean Age: ', meanAge);
}
