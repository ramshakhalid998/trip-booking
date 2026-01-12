
function isTripsValidArray(trips) {
    return Array.isArray(trips)
}

function bookTripById(trips, id) {
    if (!isTripsValidArray) {
        return "Trips must be an array "
    }

    const trip = trips.find((t) => t.id === id);

    if (!trip) {
        return "Trip doesn't exist"
    }
   
    if (!trip.available) {
    return "Trip already booked"
   }
    trip.available = false
    return `You have successfully booked a trip to ${trip.destination}!`
}



module.exports = { bookTripById };




