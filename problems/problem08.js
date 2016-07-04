require('z');

module.exports = (function(){
  const myCompress = list => {
    return list.matches(
      (x)        => [x],
      (x, y, xs) => (x == y) ? myCompress([x].concat(xs))
                             : [x].concat(myCompress([y].concat(xs)))
    )
  }

  return {
    'title': 'Eliminate consecutive duplicates of list elements. If a list contains repeated elements they should be replaced with a single copy of the element. The order of the elements should not be changed.',
    'example': 'myCompress([\'a\', \'a\', \'a\', \'a\', \'b\', \'c\', \'c\', \'a\', \'a\', \'d\', \'e\', \'e\', \'e\', \'e\'])',
    'result': ['a','b','c', 'a', 'd', 'e'],
    'myCompress': myCompress
  }
})();