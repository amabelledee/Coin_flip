// Coin Flip JavaScript
// These variables are declared for us.
var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;

function flipThatCoin(result) {

  //  STEP ONE:

  //  Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
  // NTS: Random number function does not have to have function () syntax since it's already a function
  // NTS: math round returns 0 and 1 only by default. You can also use floor
  var randomNumber = Math.round(Math.random());
  console.log(randomNumber);

  //  STEP TWO:
  //  If randomNumber is equal to zero (heads) then:
  if (randomNumber === 0) {
    $("#coin-image").html(
      "<img src='https://www.gambling911.com/files/styles/article_image/public/publisher/Super-Bowl-Coin-Toss-Heads-020316L.jpg?itok=L4jga2uu' width='300px' height='300px' />"
    );
  }
  // Else:
  //  Find the div with an id of coin-image.
  //  Replace its html with an img tag containing this image:
  //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg
  else {
    $("#coin-image").html(
      "<img src='https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png' width='300px' height='300px' />"
    );
  }
  //  STEP THREE:

  // If result is equal to randomNumber, do the following:
  //  Increment wins by one.
  //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
  if (result === randomNumber) {
    $("#win-lose").html("<h2>Winner!</h2>");
    //  Find the div with an id of wins. Update it with the value of the wins variable.
    $("#wins").html(wins++);
  }
  // Else:

  //  Increment losses by one.
  else {
    losses++;
    //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
    $("#win-lose").html("<h2>Loser!</h2>");
    //  Find the div with an id of losses. Update it with the value of the losses variable.
    $("#losses").html(losses++);
  }
}

// This on click function has been completed for us.
$("#heads").on("click", function () {
  headsCount++;
  $("#heads-chosen").text(headsCount);
  $("#guess").html("<b>Heads</b>");
  flipThatCoin(0);
});

$("#tails").on("click", function () {

  //  STEP FOUR:

  //  Increment tailsCount by one.
  $("#tails").on("click", function () {
    tailsCount++;
    //  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
    $("#tails-chosen").text(tailsCount);
    //  Find the div with an id of guess. Update it with the word "Tails" bolded.
    $("#guess").html("<b>Tails</b>");
    //  Call the flipThatCoin function and pass value 1 into it.
    flipThatCoin(1);
  });




});