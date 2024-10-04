import * as R from 'ramda'

//yao run scripts.tests.ramda.main
function main(){

    const matchPhrases = R.compose(
        R.objOf('must'),
        R.map(R.objOf('match_phrase'))
      );
      ;
      console.log(matchPhrases(['foo', 'bar', 'baz']))
}