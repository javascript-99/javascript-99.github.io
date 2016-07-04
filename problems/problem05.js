require('z');

module.exports = (function(){
  const myReverse = list => {
    return list.matches(
      () =>      { return [] },
      (x, xs) => { return myReverse(xs).concat(x)}
    )
  };

  return {
    'title': 'Reverse a list',
    'example': 'myReverse([\'a\', \'b\', \'c\', \'d\', \'e\'])',
    'result': ['e', 'd', 'c', 'b', 'a'],
    'myReverse': myReverse
  }
})();