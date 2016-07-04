require('z');

module.exports = (function(){
  const myLength = list => {
    return list.matches(
      () =>      { return 0 },
      (_, xs) => { return 1 + myLength(xs) }
    )
  };

  return {
    'title': 'Find the number of elements of a list',
    'example': 'myLength("Hello, world!")',
    'result': 13,
    'myLength': myLength
  }
})();