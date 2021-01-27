let ism = prompt('Привет! Как Вас зовут?');

while (ism == "" || ism == null){
  ism = prompt('Привет! Как Вас зовут?');

}

alert(ism + ", Я загадал число от 1 до 100. Попробуйте отгадать его за наименьшее количество попыток. После каждой попытки я скажу: мало, много или угадал.");

let num = Math.ceil(Math.random()*100);
let guess = prompt("Какое число я загадал?");
let numOfGuess = 0;

while(guess != num){
  if(guess > num){
    guess = prompt("Много. Попробуйте еще раз. Не угадали ещё.");
    numOfGuess += 1;
  }
  if(guess < num){
    guess = prompt("Мало. Попробуйте еще раз. Не угадали ещё.");
    numOfGuess += 1;
  }
}

alert("Вы угадали! Это число " + num + ". Вам понадобилось " + numOfGuess + " попыток.");