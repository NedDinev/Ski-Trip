function skiTrip(input) {
  let sleepovers = Number(input[0]) - 1;
  let typeOfRooms = input[1];
  let customerReview = input[2];

  let onePersonRoom = 18;
  let apartament = 25;
  let presidentApartament = 35;

  let finalPrice;

  switch (typeOfRooms) {
    case "room for one person":
      finalPrice = onePersonRoom * sleepovers;

      break;
    case "apartment":
      if (sleepovers < 10) {
        finalPrice = apartament * sleepovers;
        finalPrice -= finalPrice * 0.3;
      } else if (sleepovers >= 10 && sleepovers <= 15) {
        finalPrice = apartament * sleepovers;

        finalPrice -= finalPrice * 0.35;
      } else if (sleepovers > 15) {
        finalPrice = apartament * sleepovers;
        finalPrice -= finalPrice * 0.5;
      }

      break;
    case "president apartment":
      if (sleepovers < 10) {
        finalPrice = presidentApartament * sleepovers;
        finalPrice -= finalPrice * 0.1;
      } else if (sleepovers <= 15 && sleepovers >= 10) {
        finalPrice = presidentApartament * sleepovers;
        finalPrice -= finalPrice * 0.15;
      } else if (sleepovers > 15) {
        finalPrice = presidentApartament * sleepovers;

        finalPrice -= finalPrice * 0.2;
      }
      break;
    default:
      break;
  }
  if (customerReview == "positive") {
    finalPrice += finalPrice * 0.25;
  } else if (customerReview == "negative") {
    finalPrice -= finalPrice * 0.1;
  }

  console.log(finalPrice.toFixed(2));
}
skiTrip(["30", "president apartment", "negative"]);
