let typeEl = document.getElementById("Convert");

function enter(typeEl) {
  // length

  let resultOne = typeEl * (3.28084).toFixed(3);
  let decimalResultOne = resultOne.toFixed(3);

  let resultTwo = typeEl / (3.28084).toFixed(3);
  let decimalResultTwo = resultTwo.toFixed(3);

  document.getElementById("length").textContent =
    typeEl +
    " meters = " +
    decimalResultOne +
    " feet | " +
    typeEl +
    "  feet = " +
    decimalResultTwo +
    " meters";

  // volume

  let resultThree = typeEl * (0.2641722).toFixed(3);
  let decimalResultThree = resultOne.toFixed(3);

  let resultFour = typeEl / (0.2641722).toFixed(3);
  let decimalResultFour = resultTwo.toFixed(3);

  document.getElementById("volume").textContent =
    typeEl +
    " liters = " +
    decimalResultThree +
    " gallons | " +
    typeEl +
    "  gallons = " +
    decimalResultFour +
    " liters";

  // mass

  let resultFive = typeEl * (2.205).toFixed(3);
  let decimalResultFive = resultOne.toFixed(3);

  let resultSix = typeEl / (2.205).toFixed(3);
  let decimalResultSix = resultTwo.toFixed(3);

  document.getElementById("mass").textContent =
    typeEl +
    " kilos = " +
    decimalResultFive +
    " pounds | " +
    typeEl +
    "  pounds = " +
    decimalResultSix +
    " kilos";
}
