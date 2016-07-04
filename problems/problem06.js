require('z');

module.exports = (function(){
  var myIsPalindrome = function(list){
    return list.matches(
      ()      => true,
      (_)     => true,
      (x, xs) => x == xs.last() ? myIsPalindrome(xs.init()) : false
    )
  }

  return {
    'title': 'Find out whether a list is a palindrome. A palindrome can be read forward or backward; e.g. (x a m a x).',
    'example': 'myIsPalindrome("madamimadam")',
    'result': true,
    'myIsPalindrome': myIsPalindrome
  }
})();