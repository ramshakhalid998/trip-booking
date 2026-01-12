const trips = require ("./trips");
const { bookTripById } = require("./booking")

function runDemo() {
    console.log("Initial trips:", trips)



try {
    console.log(bookTripById(trips, 1));
    console.log(bookTripById(trips, 1));
    console.log(bookTripById(trips,99));
} catch(error) {
    console.log("Error:", error.message)
}

console.log("final trips:", trips)
}
runDemo()