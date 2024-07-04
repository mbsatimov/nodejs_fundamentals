// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine");

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order", (size, topping) => {
// 	console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// 	drinkMachine.serveDrink(size);
// });

// pizzaShop.order("large", "pepperoni");
// pizzaShop.displayOrderNumber();

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
// 	console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size) => {
// 	if (size === "large") {
// 		console.log("Larger Pizza coming right up!");
// 	}
// });
// emitter.emit("order-pizza", "large", "pepperoni");
