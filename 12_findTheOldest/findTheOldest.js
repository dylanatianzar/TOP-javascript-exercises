const findTheOldest = function(people) {
    return people.reduce((person, currItem) => {
        let ageCurr = (Object.values(currItem).length < 3) ? 0 : currItem.yearOfDeath - currItem.yearOfBirth;
        let ageOld = (Object.values(person).length < 3) ? 0 :  person.yearOfDeath - person.yearOfBirth;

        if ("yearOfDeath" in person && "yearOfDeath" in currItem) {
            return (ageCurr > ageOld) ? currItem : person;
        }
        return (currItem.yearOfBirth < person.yearOfBirth) ? currItem : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
