import { http, Process } from '@yaoapps/client';
import * as dp from 'datapipe-js/dist/data-pipe.min.js';


//yao run scripts.tests.datapipe-js.main
function main(){
    const dataUrl = "https://raw.githubusercontent.com/FalconSoft/sample-data/master/CSV/sample-testing-data-100.csv";
    const csv = Process('encoding.base64.Decode', http.Get(dataUrl).data);

    // console.log('csv',csv)
    const data =  dp.dataPipe()
    .fromCsv(csv)
    .groupBy(r => r.Country)
    .select(g => ({
        country: dp.first(g).Country,
        sales: dp.dataPipe(g).sum(i => i.Sales),
        averageSales: dp.avg(g, i => i.Sales),
        count: g.length
    })
    )
    .where(r => r.sales > 5000)
    .sort("sales DESC")
    .toArray();
    console.log(data)
}