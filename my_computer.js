function Computer(name, brand, year, color) {
  this.name = name;
  this.brand = brand;
  this.year = year;
  this.color = color;
};

Computer.prototype.toString = function () {
  return "The computer is a(n) " + this.brand +
    " made in " + this.year + ".  " +
    "It's name is the " + this.color + " " +
    this.name + ".";
};

var mine = new Computer('Greyskull', 'Apple',
                        '2008', 'Silver');

console.log(mine.toString());
