// Code your solution in this file.

function lowerCaseDrivers(drivers){
    return drivers.map(function(name) {
       return name.toLowerCase()
    })
}

function nameToAttributes (drivers){
return drivers.map(function(driver){
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast }})


}

function attributesToPhrase(arr) {
    return arr.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}