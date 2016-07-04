require('z');

module.exports = (function(){
  var myIsPalindrome = function(list){
    return list.matches(
      () =>  { return true },
      (_) => { return true },
      (x, xs) => {
        return x == xs.last() ? myIsPalindrome(xs.init()) : false
      }
    )
  }

  return {
    'title': 'Reverse a list',
    'example': 'myIsPalindrome("madamimadam")',
    'result': true,
    'myIsPalindrome': myIsPalindrome
  }
})();