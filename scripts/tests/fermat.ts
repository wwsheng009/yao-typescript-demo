
import {numberFormat, parseNumber, scientificFormat, toWord,Matrix} from '@mathigon/fermat';
import {Point, Line,drawSVG, Polygon} from '@mathigon/euclid'
import { FS } from '@yaoapps/client';

//yao run scripts.tests.fermat.main
function main(){
    console.log('numberFormat(1234, 5)',numberFormat(1234, 5))

    const m = [[1e-17, 1.04, -0.04], [-1.04, 0, 1], [0, 0, 1]];

    console.log(Matrix.product(m, Matrix.inverse(m)))
}

//yao run scripts.tests.fermat.main2

function main2(){
    const poly = (...p: number[][]) => new Polygon(...p.map(q => new Point(q[0], q[1])));

    const p1 = poly([0, 0], [5, 0], [5, 5], [0, 5]);
    const path = drawSVG(p1, {cornerRadius: 1}).replace(/(\.\d\d)\d+/g, '$1');
    console.log('path',path)

    // const fs = new FS('system')

    // fs.WriteFile('test.svg',path)
}