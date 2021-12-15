// Code your solution here
const findMatching = (driverArray, driver) => {
    return driverArray.filter(human => {
        return human.toLowerCase() === driver.toLowerCase()
        })
    }
    
    const fuzzyMatch = (driverArray, firstLetters) => {
        return driverArray.filter(driver => {
            const testLength = firstLetters.length
            return driver.slice(0, testLength).toLowerCase() === firstLetters.toLowerCase()
    
        })
    }
    const matchName = (driverArray, driver) => {
        return driverArray.filter(driverObj => {
           return driverObj.name === driver
        })
    } 
    