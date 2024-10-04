import { tidy, mutate, arrange, desc } from '@tidyjs/tidy'
import { summarize, sum, groupBy } from '@tidyjs/tidy'


// yao run scripts.tests.tidy.main
function main(){

    const data = [
        { a: 1, b: 10 }, 
        { a: 3, b: 12 }, 
        { a: 2, b: 10 }
      ]
      
      const results = tidy(
        data, 
        mutate({ ab: d => d.a * d.b }),
        arrange(desc('ab'))
      )
      console.log(results)
}
// yao run scripts.tests.tidy.groupBytest

function groupBytest(){
    const data = [
        { key: 'group1', value: 10 }, 
        { key: 'group2', value: 9 }, 
        { key: 'group1', value: 7 }
      ]
      
      const results = tidy(
        data,
        groupBy('key', [
          summarize({ total: sum('value') })
        ])
      )
      console.log(results)
}