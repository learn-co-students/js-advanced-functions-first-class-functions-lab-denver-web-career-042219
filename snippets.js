Script started on Tue Jun  4 22:12:32 2019
bash: parse_git_branch: command not found
[?1034h]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:12:33[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mscript snippets.js[K :run[C[C[C[C[C[4Patom -h[C[C[C[C[Cscript :run: run :run[1P:run[K[4Plsatom .open dom_example.html [C[C[C[C[Ctouch dom_example.html[C[C[C[C[Copen dom_example.html [C[C[C[C[Catom .[K[4Plsscript:run
bash: script:run: command not found
bash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:12:42[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mscript:run[C[C[C[C[C[Kscript:run snippets.js[K :run[C[C[C[C[C[4Patom -h[C[C[C[C[Cscript :run
Script started, output file is :run
bash: parse_git_branch: command not found
[?1034h]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:12:52[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mi[Klarn[K[K[Kearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  2) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  3) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  4) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  5) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  6) returns a function[0m
    [31m  7) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  8) is a function[0m
    [31m  9) doubles fares[0m
[0m    fareTripler()[0m
    [31m  10) is a function[0m
    [31m  11) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 0 passing[0m[90m (536ms)[0m
[31m  13 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:
[0m[31m     AssertionError: expected undefined to deeply equal [ 'Sally', 'Bob' ][0m[90m
      at Context.<anonymous> (test/indexTest.js:10:49)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  13) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:13:22[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  2) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  3) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  4) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  5) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  6) returns a function[0m
    [31m  7) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  8) is a function[0m
    [31m  9) doubles fares[0m
[0m    fareTripler()[0m
    [31m  10) is a function[0m
    [31m  11) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 0 passing[0m[90m (437ms)[0m
[31m  13 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:
[0m[31m     AssertionError: expected 'a' to deeply equal [ 'Sally', 'Bob' ][0m[90m
      at Context.<anonymous> (test/indexTest.js:10:49)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  13) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:15:32[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  2) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  3) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  4) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  5) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  6) returns a function[0m
    [31m  7) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  8) is a function[0m
    [31m  9) doubles fares[0m
[0m    fareTripler()[0m
    [31m  10) is a function[0m
    [31m  11) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 0 passing[0m[90m (501ms)[0m
[31m  13 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:
[0m[31m     AssertionError: expected 'a' to deeply equal [ 'Sally', 'Bob' ][0m[90m
      at Context.<anonymous> (test/indexTest.js:10:49)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  13) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:18:43[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  2) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  3) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  4) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  5) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  6) returns a function[0m
    [31m  7) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  8) is a function[0m
    [31m  9) doubles fares[0m
[0m    fareTripler()[0m
    [31m  10) is a function[0m
    [31m  11) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 0 passing[0m[90m (503ms)[0m
[31m  13 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:
[0m[31m     AssertionError: expected 'a' to deeply equal [ 'Sally', 'Bob' ][0m[90m
      at Context.<anonymous> (test/indexTest.js:10:49)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  13) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:19:19[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json

/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babel-core/lib/transformation/file/index.js:558
      throw err;
      ^

SyntaxError: /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/index.js: Unexpected token (3:0)
[0m [90m 1 | [39m[90m// Code your solution in this file![39m
 [90m 2 | [39m[36mconst[39m returnFirstTwoDri
[31m[1m>[22m[39m[90m 3 | [39mvers [33m=[39m [36mfunction[39m(arr) {
 [90m   | [39m[31m[1m^[22m[39m
 [90m 4 | [39m  [36mreturn[39m arr[33m.[39mslice([35m2[39m)
 [90m 5 | [39m}
 [90m 6 | [39m[0m
    at Parser.pp$5.raise (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:4454:13)
    at Parser.pp.unexpected (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:1761:8)
    at Parser.pp$1.parseVar (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:2342:12)
    at Parser.pp$1.parseVarStatement (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:2169:8)
    at Parser.pp$1.parseStatement (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:1861:19)
    at Parser.pp$1.parseBlockBody (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:2268:21)
    at Parser.pp$1.parseTopLevel (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:1778:8)
    at Parser.parse (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:1673:17)
    at parse (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babylon/lib/index.js:7305:37)
    at File.parse (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babel-core/lib/transformation/file/index.js:485:15)
    at File.parseCode (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babel-core/lib/transformation/file/index.js:570:20)
    at /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babel-core/lib/transformation/pipeline.js:49:12
    at File.wrap (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babel-core/lib/transformation/file/index.js:532:16)
    at Pipeline.transform (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babel-core/lib/transformation/pipeline.js:47:17)
    at Object.transformFileSync (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/babel-core/lib/api/node.js:152:10)
    at Object.<anonymous> (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/test/helpers.js:10:27)
    at Module._compile (internal/modules/cjs/loader.js:759:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:770:10)
    at Module.load (internal/modules/cjs/loader.js:628:32)
    at Function.Module._load (internal/modules/cjs/loader.js:555:12)
    at Module.require (internal/modules/cjs/loader.js:666:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/mocha/lib/mocha.js:250:27
    at Array.forEach (<anonymous>)
    at Mocha.loadFiles (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/mocha/lib/mocha.js:247:14)
    at Mocha.run (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/mocha/lib/mocha.js:576:10)
    at Object.<anonymous> (/Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219/node_modules/mocha/bin/_mocha:637:18)
    at Module._compile (internal/modules/cjs/loader.js:759:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:770:10)
    at Module.load (internal/modules/cjs/loader.js:628:32)
    at Function.Module._load (internal/modules/cjs/loader.js:555:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:826:10)
    at internal/main/run_main_module.js:17:11
[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:19:34[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0m[1mTraceback[m (most recent call last):
	11: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/bin/ruby_executable_hooks:24:in `<main>'
	10: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/bin/ruby_executable_hooks:24:in `eval'
	 9: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/bin/learn-test:23:in `<main>'
	 8: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/bin/learn-test:23:in `load'
	 7: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/bin/learn-test:68:in `<top (required)>'
	 6: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/runner.rb:20:in `run'
	 5: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/runner.rb:20:in `fork'
	 4: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/runner.rb:21:in `block in run'
	 3: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/runner.rb:44:in `report_and_clean'
	 2: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/reporter.rb:13:in `report'
	 1: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/reporter.rb:47:in `report'
/Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/strategies/mocha.rb:42:in `results': [1mundefined method `[]' for nil:NilClass ([1;4mNoMethodError[m[1m)[m
learn
^[[A
> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
^C[1mTraceback[m (most recent call last):
	9: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/bin/ruby_executable_hooks:24:in `<main>'
	8: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/bin/ruby_executable_hooks:24:in `eval'
	7: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/bin/learn-test:23:in `<main>'
	6: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/bin/learn-test:23:in `load'
	5: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/bin/learn-test:68:in `<top (required)>'
	4: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/runner.rb:16:in `run'
	3: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/strategies/mocha.rb:21:in `run'
	2: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/strategies/mocha.rb:63:in `run_mocha'
	1: from /Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/strategies/mocha.rb:75:in `run_node_based_mocha'
/Users/josephreilly/.rvm/gems/ruby-2.6.1/gems/learn-test-2.6.1/lib/learn_test/strategies/mocha.rb:75:in `system': [1m[1;4mInterrupt[m

bash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:21:02[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  2) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  3) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  4) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  5) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  6) returns a function[0m
    [31m  7) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  8) is a function[0m
    [31m  9) doubles fares[0m
[0m    fareTripler()[0m
    [31m  10) is a function[0m
    [31m  11) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 0 passing[0m[90m (713ms)[0m
[31m  13 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:

      [31mAssertionError: expected [ 'Freddy', 'Claudia' ] to deeply equal [ 'Sally', 'Bob' ][0m
      [32m+ expected[0m [31m- actual[0m

       [
      [31m-  "Freddy"[0m
      [31m-  "Claudia"[0m
      [32m+  "Sally"[0m
      [32m+  "Bob"[0m
       ]
      [0m[90m
      at Context.<anonymous> (test/indexTest.js:10:49)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  13) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:21:09[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  2) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  3) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  4) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  5) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  6) returns a function[0m
    [31m  7) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  8) is a function[0m
    [31m  9) doubles fares[0m
[0m    fareTripler()[0m
    [31m  10) is a function[0m
    [31m  11) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 0 passing[0m[90m (465ms)[0m
[31m  13 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:

      [31mAssertionError: expected [ 'Bob', 'Freddy', 'Claudia' ] to deeply equal [ 'Sally', 'Bob' ][0m
      [32m+ expected[0m [31m- actual[0m

       [
      [32m+  "Sally"[0m
         "Bob"
      [31m-  "Freddy"[0m
      [31m-  "Claudia"[0m
       ]
      [0m[90m
      at Context.<anonymous> (test/indexTest.js:10:49)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  13) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:22:07[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  2) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  3) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  4) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  5) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  6) returns a function[0m
    [31m  7) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  8) is a function[0m
    [31m  9) doubles fares[0m
[0m    fareTripler()[0m
    [31m  10) is a function[0m
    [31m  11) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 0 passing[0m[90m (510ms)[0m
[31m  13 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:

      [31mAssertionError: expected [ 'Freddy', 'Claudia' ] to deeply equal [ 'Sally', 'Bob' ][0m
      [32m+ expected[0m [31m- actual[0m

       [
      [31m-  "Freddy"[0m
      [31m-  "Claudia"[0m
      [32m+  "Sally"[0m
      [32m+  "Bob"[0m
       ]
      [0m[90m
      at Context.<anonymous> (test/indexTest.js:10:49)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  13) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:22:46[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
    [31m  2) "after each" hook for "should return a new array containing the first two drivers from the passed-in array"[0m


[92m [0m[32m 0 passing[0m[90m (494ms)[0m
[31m  2 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:
[0m[31m     AssertionError: expected 'Claudia' to deeply equal [ 'Sally', 'Bob' ][0m[90m
      at Context.<anonymous> (test/indexTest.js:10:49)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       "after each" hook for "should return a new array containing the first two drivers from the passed-in array":

      [31mMAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE[0m
      [32m+ expected[0m [31m- actual[0m

       [
         "Sally"
         "Bob"
         "Freddy"
      [32m+  "Claudia"[0m
       ]
      [0m[90m
      at Context.<anonymous> (test/indexTest.js:5:82)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:23:04[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [31m  1) should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  2) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  3) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  4) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  5) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  6) returns a function[0m
    [31m  7) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  8) is a function[0m
    [31m  9) doubles fares[0m
[0m    fareTripler()[0m
    [31m  10) is a function[0m
    [31m  11) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 0 passing[0m[90m (434ms)[0m
[31m  13 failing[0m

[0m  1) index.js
       returnFirstTwoDrivers()
         should return a new array containing the first two drivers from the passed-in array:
[0m[31m     TypeError: arr.length.slice is not a function[0m[90m
      at returnFirstTwoDrivers (about:blank:5:21)
      at Context.<anonymous> (test/indexTest.js:10:14)
[0m
[0m  2) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  13) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:24:18[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  1) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  2) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  3) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  4) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  5) returns a function[0m
    [31m  6) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  7) is a function[0m
    [31m  8) doubles fares[0m
[0m    fareTripler()[0m
    [31m  9) is a function[0m
    [31m  10) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  11) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  12) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 1 passing[0m[90m (445ms)[0m
[31m  12 failing[0m

[0m  1) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:
[0m[31m     ReferenceError: returnLastTwoDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:16:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:27:06[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [31m  1) should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  2) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  3) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  4) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  5) returns a function[0m
    [31m  6) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  7) is a function[0m
    [31m  8) doubles fares[0m
[0m    fareTripler()[0m
    [31m  9) is a function[0m
    [31m  10) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  11) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  12) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 1 passing[0m[90m (486ms)[0m
[31m  12 failing[0m

[0m  1) index.js
       returnLastTwoDrivers()
         should return an array of the last two drivers:

      [31mAssertionError: expected [] to deeply equal [ 'Freddy', 'Claudia' ][0m
      [32m+ expected[0m [31m- actual[0m

      [31m-[][0m
      [32m+[[0m
      [32m+  "Freddy"[0m
      [32m+  "Claudia"[0m
      [32m+][0m
      [0m[90m
      at Context.<anonymous> (test/indexTest.js:16:78)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  12) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:28:49[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (481ms)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:29:26[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (450ms)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnFirstTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:22:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnLastTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:26:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     TypeError: selectingDrivers[0] is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:33)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:33:09[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (462ms)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnFirstTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:22:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnLastTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:26:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     TypeError: selectingDrivers[0] is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:33)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:33:51[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (2s)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnFirstTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:22:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnLastTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:26:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     TypeError: selectingDrivers[0] is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:33)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:40:23[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (916ms)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnFirstTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:22:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnLastTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:26:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     TypeError: selectingDrivers[0] is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:33)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:41:24[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (1s)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnFirstTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:22:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnLastTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:26:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     TypeError: selectingDrivers[0] is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:33)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:45:57[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (1s)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnFirstTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:22:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnLastTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:26:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     TypeError: selectingDrivers[0] is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:33)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:50:48[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (900ms)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:22:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:26:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     ReferenceError: selectingDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:51:19[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (529ms)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnFirstTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:22:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnLastTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:26:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     TypeError: selectingDrivers[0] is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:33)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:51:37[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [31m  1) has the `returnFirstTwoDrivers` function to as its first element[0m
    [31m  2) has the `returnLastTwoDrivers` function to as its last element[0m
    [31m  3) allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  4) returns a function[0m
    [31m  5) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  6) is a function[0m
    [31m  7) doubles fares[0m
[0m    fareTripler()[0m
    [31m  8) is a function[0m
    [31m  9) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  10) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  11) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 2 passing[0m[90m (1s)[0m
[31m  11 failing[0m

[0m  1) index.js
       selectingDrivers
         has the `returnFirstTwoDrivers` function to as its first element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnFirstTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:22:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       selectingDrivers
         has the `returnLastTwoDrivers` function to as its last element:
[0m[31m     AssertionError: expected undefined to deeply equal [Function: returnLastTwoDrivers][0m[90m
      at Context.<anonymous> (test/indexTest.js:26:38)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       selectingDrivers
         allows us to invoke either function from the array:
[0m[31m     TypeError: selectingDrivers[0] is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:30:33)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  9) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  10) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  11) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:54:38[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [32m  ✓[0m[90m has the `returnFirstTwoDrivers` function to as its first element[0m
    [32m  ✓[0m[90m has the `returnLastTwoDrivers` function to as its last element[0m
    [32m  ✓[0m[90m allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  1) returns a function[0m
    [31m  2) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  3) is a function[0m
    [31m  4) doubles fares[0m
[0m    fareTripler()[0m
    [31m  5) is a function[0m
    [31m  6) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  7) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  8) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 5 passing[0m[90m (431ms)[0m
[31m  8 failing[0m

[0m  1) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:55:32[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [32m  ✓[0m[90m has the `returnFirstTwoDrivers` function to as its first element[0m
    [32m  ✓[0m[90m has the `returnLastTwoDrivers` function to as its last element[0m
    [32m  ✓[0m[90m allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  1) returns a function[0m
    [31m  2) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  3) is a function[0m
    [31m  4) doubles fares[0m
[0m    fareTripler()[0m
    [31m  5) is a function[0m
    [31m  6) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  7) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  8) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 5 passing[0m[90m (435ms)[0m
[31m  8 failing[0m

[0m  1) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:56:01[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [32m  ✓[0m[90m has the `returnFirstTwoDrivers` function to as its first element[0m
    [32m  ✓[0m[90m has the `returnLastTwoDrivers` function to as its last element[0m
    [32m  ✓[0m[90m allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  1) returns a function[0m
    [31m  2) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  3) is a function[0m
    [31m  4) doubles fares[0m
[0m    fareTripler()[0m
    [31m  5) is a function[0m
    [31m  6) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  7) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  8) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 5 passing[0m[90m (466ms)[0m
[31m  8 failing[0m

[0m  1) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:38:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     ReferenceError: createFareMultiplier is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:44:30)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m22:56:24[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0mlearn

> js-advanced-functions-first-class-functions-lab@0.1.0 test /Users/josephreilly/Documents/Development/3rd-mod/labs/js-advanced-functions-first-class-functions-lab-denver-web-career-042219
> mocha -R mocha-multi --reporter-options spec=-,json=.results.json


[0m[0m
[0m  index.js[0m
[0m    returnFirstTwoDrivers()[0m
    [32m  ✓[0m[90m should return a new array containing the first two drivers from the passed-in array[0m
[0m    returnLastTwoDrivers()[0m
    [32m  ✓[0m[90m should return an array of the last two drivers[0m
[0m    selectingDrivers[0m
    [32m  ✓[0m[90m has the `returnFirstTwoDrivers` function to as its first element[0m
    [32m  ✓[0m[90m has the `returnLastTwoDrivers` function to as its last element[0m
    [32m  ✓[0m[90m allows us to invoke either function from the array[0m
[0m    createFareMultiplier()[0m
    [31m  1) returns a function[0m
    [31m  2) should multiply a given value using the created multiplier[0m
[0m    fareDoubler()[0m
    [31m  3) is a function[0m
    [31m  4) doubles fares[0m
[0m    fareTripler()[0m
    [31m  5) is a function[0m
    [31m  6) triples fares[0m
[0m    selectDifferentDrivers(arrayOfDrivers, function)[0m
    [31m  7) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument[0m
    [31m  8) returns the last two drivers when passed returnLastTwoDrivers() as the second argument[0m


[92m [0m[32m 5 passing[0m[90m (537ms)[0m
[31m  8 failing[0m

[0m  1) index.js
       createFareMultiplier()
         returns a function:
[0m[31m     AssertionError: expected undefined to be a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:40:36)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  2) index.js
       createFareMultiplier()
         should multiply a given value using the created multiplier:
[0m[31m     TypeError: fareQuintupler is not a function[0m[90m
      at Context.<anonymous> (test/indexTest.js:46:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  3) index.js
       fareDoubler()
         is a function:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:52:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  4) index.js
       fareDoubler()
         doubles fares:
[0m[31m     ReferenceError: fareDoubler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:56:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  5) index.js
       fareTripler()
         is a function:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:62:14)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  6) index.js
       fareTripler()
         triples fares:
[0m[31m     ReferenceError: fareTripler is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:66:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  7) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the first two drivers when passed returnFirstTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:72:7)
      at processImmediate (internal/timers.js:439:21)
[0m
[0m  8) index.js
       selectDifferentDrivers(arrayOfDrivers, function)
         returns the last two drivers when passed returnLastTwoDrivers() as the second argument:
[0m[31m     ReferenceError: selectDifferentDrivers is not defined[0m[90m
      at Context.<anonymous> (test/indexTest.js:76:7)
      at processImmediate (internal/timers.js:439:21)
[0m


[37;40mnpm[0m [0m[31;40mERR![0m[35m[0m Test failed.  See above for more details.
[0mbash: parse_git_branch: command not found
]2;josephreilly@Josephs-MacBook-Air[[37;44;1m23:00:55[0m][0;31m [0;32mjs-advanced-functions-first-class-functions-lab-denver-web-career-042219
[0;34m//[0;31m ♥ [0m