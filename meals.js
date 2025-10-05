const entree1 = { //Object Meals
    starter : "Bacon Cheese Fries",
    main: "Beef Burger and Coleslaw",
    dessert: "Deep Fried Ice-Cream"
};

const entree2 = {
    starter : "Smoked Salmon On Rye",
    main: "Vegetarian Couscous Rolls",
    dessert: "Fruit Plate"
};

const entree3 = {
    starter : "Chips and Hummus",
    main: "Grilled Chicken in Hot Sauce",
    dessert: "Chocolate Ganache Cake"
};

const entree4 = { //I added
    starter : "Breadsticks",
    main: "Fettuccine Alfredo",
    dessert: "Tiramisu"
};

const entree5 = { //I added
    starter : "Mashed Potatoes",
    main: "Turkey",
    dessert: "Pumpkin Pie"
};

const meals = [entree1, entree2, entree3, entree4, entree5]; //Array

const randomMeal = function() { //the function that gets the random number between 0 and the last valid index
    // Get a random number between 0 and the length of the array, meals
    let mealNumber = Math.floor(Math.random() * meals.length); 
    showMeal(mealNumber);
};


const showMeal = (mealNumber)=> { //display the meal information
    let str = `Start with ${meals[mealNumber].starter}, 
    followed by ${meals[mealNumber].main}, 
    and finish off your meal with ${meals[mealNumber].dessert}`;

    let area = document.querySelector(".randomMeal");
    area.innerHTML = str;
};