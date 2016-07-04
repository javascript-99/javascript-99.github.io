require('z');

module.exports = (function(){
  const myReverse = list => {
    return list.matches(
      ()      =>      [],
      (x, xs) => myReverse(xs).concat(x)
    )
  };

  return {
    'title': 'Reverse a list.',
    'example': 'myReverse([\'a\', \'b\', \'c\', \'d\', \'e\'])',
    'result': ['e', 'd', 'c', 'b', 'a'],
    'myReverse': myReverse
  }
})();