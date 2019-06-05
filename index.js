// Code your solution in this file!

// array = ['Sally', 'Bob', 'Freddy', 'Claudia']
function returnFirstTwoDrivers(array) {
    return array.slice(0,2)
}

function returnLastTwoDrivers(array) {
   return array.slice((array.length - 2), array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer) {
    return function (multiplier) {
        return integer * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
  };