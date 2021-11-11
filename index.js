const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._course.mains;
  },
  get desserts() {
    return this.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },

  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  // This generates the random meal by selecting randomly (between 0 and the length of the array) one of the meals.
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name} as appetizer, ${main.name} as the main course and ${dessert.name} as a desert. The total amount to pay is €${totalPrice}.`;
  },
};

// Here we are adding meals to the menu.
menu.addDishToCourse("appetizers", "Tostis with cheese", 5);
menu.addDishToCourse("appetizers", "Broccoli sticks with vegan butter", 7);
menu.addDishToCourse("appetizers", "Olives and bread sticks with herbs", 4);
menu.addDishToCourse("mains", "Vegan lasagna", 22);
menu.addDishToCourse("mains", "Vegan cheeseburger", 15);
menu.addDishToCourse("mains", "Vegan Mac & Cheese", 18);
menu.addDishToCourse("desserts", "Vegan cheesecake", 9);
menu.addDishToCourse("desserts", "Vegan icecream", 8);
menu.addDishToCourse("desserts", "Vegan carrot cake", 9);
let meal = menu.generateRandomMeal();
console.log(meal);
