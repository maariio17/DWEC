function calculateSupply (edad, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - edad);
  var message = '<p>Necesitará ' + totalNeeded + ' bocadillos para que te dure hasta la edad madura de ' + maxAge+ (' años </p>');
  document.write (message);
}

calculateSupply (28, 36);
calculateSupply (28, 2.5);
calculateSupply (28, 400);