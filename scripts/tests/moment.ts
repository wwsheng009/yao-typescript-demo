import moment from 'moment';

//yao run scripts.tests.moment.main
function main() {
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // 十月 4日 2024, 9:33:10 晚上
  console.log(moment().format('dddd')); // 星期五
  console.log(moment().format('MMM Do YY')); // 10月 4日 24
  console.log(moment().format('YYYY [escaped] YYYY')); // 2024 escaped 2024
  console.log(moment().format()); // 2024-10-04T21:33:10+08:00
}
