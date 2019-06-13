function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue){
  return function (value) {
    return multiplyValue * value
  }

}

function fareDoubler(fare){
  return fare * 2
}

function fareTripler(fare){
  return fare * 3
}


const selectDifferentDrivers = function (drivers, returnLastTwoDrivers){
  return returnLastTwoDrivers(drivers)
}
