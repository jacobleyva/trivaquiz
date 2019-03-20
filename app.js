
var allQuestions = [];

function question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
};

var quest1 = new question("What is the Capital of California ", ["Riverside", "Irvine", "Sacramento", "San Fransisco"]);
setTimeout(function loop() {
    document.getElementById("#q1").innerHTML =`quest1`;

    if (ary.length)
        setTimeout(loop, 5000);
}, 5000);
var q2 = new question("Which Movie Stars Leonardo De Caprio", ["Wolf of Wall St.", "The Big Short", "Interstellar", "Zombie Land"]);
setTimeout(function loop() {
    document.getElementById("#q2").innerHTML =q2;

    if (ary.length)
        setTimeout(loop, 5000);
}, 5000);
var q3 = new question("Who is Obi-Wans best friend? ", ["Mace Windu", "Darth Maul", "Commander Cody", "Anakin Skywalker"]);
setTimeout(function loop() {
    document.getElementById("#q3").innerHTML =q3;

    if (ary.length)
        setTimeout(loop, 5000);
}, 5000);

var countDownDate = new Date("3:20").getTime();
var x = setInterval(function() {
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("#counter").innerHTML = minutes + "m " + seconds + "s "
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("#counter").innerHTML = "YOU FAILED";
  }
}, 1000);

