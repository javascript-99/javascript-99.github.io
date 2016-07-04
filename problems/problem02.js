require('z');

module.exports = (function(){
  const myButLast = list => {
    return list.matches(
      (x, xs) => xs.length == 1 ? x : myButLast(xs)
    )
  };

  return {
    'title': 'Find the last but one element of a list.',
    'example': 'myButLast([1, 2, 3, 4])',
    'result': 3,
    'myButLast': myButLast
  }
})();