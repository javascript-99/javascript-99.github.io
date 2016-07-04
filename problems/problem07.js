require('z');

module.exports = (function(){
  var myFlatten = function(list){
    return list.matches(
      ([x]) =>  { return x },
      (x, xs) => { return x.concat(myFlatten(xs))}
    )
  }

  return {
    'title': 'Reverse a list',
    'example': 'myFlatten[\'A\', [\'B\', [\'C\', \'D\'], \'E\']]',
    'result': ['A', 'B', 'C', 'D', 'E'],
    'myFlatten': myFlatten
  }
})();