var should = require('chai').should()

require('z');

describe('problems 01 to 10', function () {

  it('problem 01', function () {
    var myLast = function(list) {
      return list.$match(
        function (x)     { return x },
        function (_, xs) { return myLast(xs) }
      )
    }

    myLast([1, 2, 3, 4]).should.equal(4)
  });

  it('problem 02', function () {
    var myButLast = function(list) {
      return list.$match(
        function (x, xs) { return xs.length == 1 ? x : myButLast(xs) }
      )
    }

    myButLast([1, 2, 3, 4]).should.equal(3)
  });

  it('problem 03', function () {
    var elementAt = function(list, position) {
      return list.$match(
        function (x, xs) { return position == 1 ? x : elementAt(xs, position - 1) }
      )
    }

    elementAt([1, 2, 3], 2).should.equal(2)
  });

  it('problem 04', function () {
    var myLength = function(list) {
      return list.$match(
        function ()      { return 0 },
        function (_, xs) { return 1 + myLength(xs) }
      )
    }

    myLength([123, 456, 789]).should.equal(3)
  });

  it('problem 05', function () {
    var myReverse = function(list) {
      return list.$match(
        function ()      { return [] },
        function (x, xs) { return myReverse(xs).concat(x)}
      )
    }

    myReverse([1,2,3,4]).should.eql([4,3,2,1])
  });

  it('problem 06', function(){
    var myIsPalindrome = function(list){
      return list.$match(
        function ()  { return true },
        function (_) { return true },
        function (x, xs) {
          return x == xs.$last() ? myIsPalindrome(xs.$init()) : false
        }
      )
    }

    myIsPalindrome("madamimadam").should.equal(true)
    myIsPalindrome([1,2,3]).should.equal(false)
  })

  it('problem 08', function(){
    var myFlatten = function(list){
      return list.$match(
        function (x) {
          return Array.isArray(x) ? myFlatten(x) : x
        },
        function (x, xs) {
          var head = Array.isArray(x) ? x : [x]
          return head.concat(myFlatten(xs))
        }
      )
    }

    myFlatten ([1, [2, [3, 4], 5]]).should.eql([1, 2, 3, 4, 5])
  })

  it.only('problem 09', function(){
    var myCompress = function(list) {
      return list.$match(
        function (x)       { return [x] },
        function(x, y, xs) { return (x == y) ? myCompress([x].concat(xs))
                                             : [x].concat(myCompress([y].concat(xs))) }
      )
    }

    myCompress([1, 1, 1, 1, 2, 3, 4, 1, 1, 4, 5, 5, 5, 5, 5]).should.equal([1, 2, 3, 1, 4, 5])
  })





});