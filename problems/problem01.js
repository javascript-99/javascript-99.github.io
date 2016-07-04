require('z');

module.exports = (function(){
  const myLast = list => {
    return list.matches(
      (x)     => x,
      (_, xs) => myLast(xs)
    );
  };

  return {
    'title': 'Find the last element of a list.',
    'example': 'myLast([1,2,3,4])',
    'result': 4,
    'myLast': myLast
  }
})();