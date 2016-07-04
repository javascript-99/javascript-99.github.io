require('z');

module.exports = (function(){
  var myFlatten = function(list){
    return list.matches(
      (x)     => Array.isArray(x) ? myFlatten(x) : x,
      (x, xs) => Array.isArray(x) ? x.concat(myFlatten(xs)) : [x].concat(myFlatten(xs))
    )
  }

  return {
    'title': 'Flatten a nested list structure. Transform a list, possibly holding lists as elements into a "flat" list by replacing each list with its elements (recursively).',
    'example': 'myFlatten([1, [2, [3, 4], 5]])',
    'result': [1, 2, 3, 4, 5],
    'myFlatten': myFlatten
  }
})();