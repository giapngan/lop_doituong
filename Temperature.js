class Temperature {
    celsius;
    constructor(c) {
        this.celsius = c;
    }
    convertCtoK() {
      return(this.celsius + 273.15) + "K";
    }
    convertCtoF() {
      return(this.celsius * 1.8 + 32) +"F";
    }
}
let temp = new Temperature(25);
document.write (temp.convertCtoF() + "<br>");
document.write (temp.convertCtoK());