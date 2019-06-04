// Code your solution in this file!
const drivers = ["mark", "kyle", "josh"]

function returnFirstTwoDrivers(drivers){
   let firstTwo = []
   firstTwo.push(drivers[0])
   firstTwo.push(drivers[1])
   return firstTwo
}

function returnLastTwoDrivers(drivers){
    let lastTwo = []
    const i = drivers.length - 1
    const k = drivers.length - 2
    lastTwo.push(drivers[k])
    lastTwo.push(drivers[i])
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x){
   return function(){return x * x }
}

function fareDoubler(y){
    return y * 2
}

function fareTripler(z){
    return z * 3
}

