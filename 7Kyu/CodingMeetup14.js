// https://www.codewars.com/kata/583952fbc23341c7180002fd

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }

// Notes:

//     The order of the meals count in the object does not matter.
//     The count value should be a valid number.
//     The input array will always be valid and formatted as in the example above.
//     there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

function orderFood(list) {
    let countStandard = 0, countVegan = 0, countVegetarian = 0, countDiabetic = 0, countGlutenIntolerant = 0
    let finalObj = {}
    list.forEach(element => {
        element.meal === 'standard' ? countStandard++
        : element.meal === 'vegan' ? countVegan++ 
        : element.meal === 'vegetarian' ? countVegetarian++
        : element.meal === 'diabetic' ? countDiabetic++
        : element.meal === 'gluten-intolerant' ? countGlutenIntolerant++
        : 0
    })
    if(countStandard > 0){
        finalObj.standard = countStandard
    }
    if(countVegan > 0){
        finalObj.vegan = countVegan
    }
    if(countVegetarian > 0){
        finalObj.vegetarian = countVegetarian
    }
    if(countDiabetic > 0){
        finalObj.diabetic = countDiabetic
    }
    if(countGlutenIntolerant > 0){
        finalObj['gluten-intolerant'] = countGlutenIntolerant
    }
    return finalObj
}

console.log(orderFood(list1))