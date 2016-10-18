var numberString = prompt("Give a number between 1-100");
var number = parseInt(number);
var result = "";


while(number > -10){
    if(number >= 9){
        number -= 10;
        result += "X";
    }else if(number >= 1){
        number -= 1;
        result += "I";
    }
    if(number <= -1){
        result.slice(result.length - 1, result.length - 1);
        result += "IX";
    }
}