const getTheTitles = function(arrOfObj) {
    return arrOfObj.reduce((titles, currItem) => {
        titles.push(currItem.title);
        return titles;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
