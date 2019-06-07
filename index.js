// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare;
  }
}

function fareDoubler(fare) {
  return 2 * fare;
}

function fareTripler(fare) {
  return 3 * fare;
}

function selectDifferentDrivers(arrayOfDrivers, someFunction) {
  return someFunction(arrayOfDrivers);
}
