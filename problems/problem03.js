require('z');

module.exports = (function(){
  const myElementAt = function(list, position) {
    return list.matches(
      (x, xs) => position == 1 ? x : myElementAt(xs, position - 1)
    )
  };

  return {
    'title': 'Find the K\'th element of a list. The first element in the list is number 1.',
    'example': 'myElementAt([\'a\', \'b\', \'c\', \'d\', \'e\'], 3)',
    'result': 'c',
    'myElementAt': myElementAt
  }
})();