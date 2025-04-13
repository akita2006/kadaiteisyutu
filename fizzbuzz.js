let answer = "";
for (let i = 1; i <= 20; i++) {
    //15は3と5の倍数を含むため最初にチェック
    if (i % 15 === 0) {       
        answer += "FizzBuzz<br>";
    } else if (i % 3 === 0) {
        answer +="Fizz<br>";
    } else if (i % 5 === 0) {
        answer += "Buzz<br>";
    } else {
        answer += i + "<br>";
    }
}

document.getElementById("answer").innerHTML = answer;
