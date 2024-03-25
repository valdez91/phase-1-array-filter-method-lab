// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
 findMatching =(name, drivers) =>{
    return name.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === drivers.toLowerCase()
    );
  }
  
  fuzzyMatch =(name, testString) =>{
    return name.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  matchName =(name, driveName) =>{
    return name.filter((record) => record.name === driveName);
  }