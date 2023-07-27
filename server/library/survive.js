function survive(request, response) {
  try {
    const scenarios = [
      "You made it to the saloon congrats",
      "You died of dsyentery",
      "A snake gotcha",
      "Your horse made it... you did not",
      "You found gold",
      "You found oil",
      "You didn't even attempt to cross the Oregon trail.",
    ];
    const randomNum = Math.floor(Math.random() * scenarios.length);
    const outcome = scenarios[randomNum];

    if (outcome) {
      response.status(200).json(outcome);
    } else {
      response.status(404).json("Not Found");
    }
  } catch (error) {
    response.status(404).json(error);
  }
}

module.exports = survive;
