"use strict";
const main_runs = document.querySelector(".score-number");
const oversEl = document.querySelector(".over");
const ballsEl = document.querySelector(".balls");
const btn0 = document.querySelector(".btn--0");
const btn1 = document.querySelector(".btn--1");
const btn2 = document.querySelector(".btn--2");
const btn3 = document.querySelector(".btn--3");
const btn4 = document.querySelector(".btn--4");
const btn6 = document.querySelector(".btn--6");
const wicket = document.querySelector(".btn--wicket");
const wide = document.querySelector(".btn--wide");
const nb = document.querySelector(".btn--nb");
const other = document.querySelector(".btn--other");
const p0i0 = document.querySelector(".p0i0");
const p1i0 = document.querySelector(".p1i0");
const runrate = document.querySelector(".run_rate");
const new_game = document.querySelector(".new");
const targetEl = document.querySelector(".target");
const ball1 = document.querySelector(".ball-1");
const ball2 = document.querySelector(".ball-2");
const ball3 = document.querySelector(".ball-3");
const ball4 = document.querySelector(".ball-4");
const ball5 = document.querySelector(".ball-5");
const ball6 = document.querySelector(".ball-6");
const theLastBall = document.querySelector(".last_ball");
const listEl = document.querySelector("ul");
const playerNameEl = document.querySelector(".player-name");
const wicktesEl = document.querySelector(".wickets");

let runs,
  overs,
  balls,
  runRate,
  playerActive,
  scoreBoard,
  userOvers,
  oneWicketFall,
  activeTimeline,
  limit,
  active_ball,
  lastBall,
  extraBalls,
  totalBalls,
  noBall,
  target,
  fix,
  userBalls,
  ballsPlayer1,
  namePlayer0,
  namePlayer1,
  totalWickets,
  wickets;

const starting = function () {
    userOvers = parseInt(prompt("how many overs do you want"));
    namePlayer0 = prompt("enter the name of player1");
    namePlayer1 = prompt("enter the name of player2");
  playerNameEl.textContent = namePlayer0;
  oneWicketFall = false;
  // userOvers = 2;
  runs = 0;
  balls = 0;
  overs = 0;
  totalWickets = 0;
  wickets = 0;
  target = 0;
  targetEl.textContent = target;
  wicktesEl.textContent = wickets;
  ballsEl.textContent = balls;
  main_runs.textContent = runs;
  oversEl.textContent = overs;
  runRate = "0.00";
  playerActive = 0;
  scoreBoard = [0, 0];
  runrate.textContent = runRate;
  userBalls = userOvers * 6;
  ballsPlayer1 = 0;
  activeTimeline = [0, 0, 0, 0, 0, 0];
  limit = 6;
  active_ball = 0;
  lastBall = 0;
  extraBalls = 0;
  totalBalls = 0;
  wicket.disabled = false;
  fix = false;
  btn0.disabled = false;
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  btn6.disabled = false;
  wicket.disabled = false;
  wide.disabled = false;
  nb.disabled = false;
  p0i0.textContent = scoreBoard[0];
  p1i0.textContent = scoreBoard[1];
  document.querySelector(".leadplayer").textContent = ``;
  document.querySelector(".leadtextwon").textContent = "";
  document.querySelector(".leadruns").textContent = "";
  document.querySelector(".some-words").textContent = ``;

  defaultTimeline();
};
starting();
const runAdder = function (value) {
  runs += value;
  main_runs.textContent = runs;
  wicket.disabled = false;
};
const overChange = function () {
  balls++;
  if (balls === 6) {
    balls = 0;
    overs++;
  }
  oversEl.textContent = overs;
  ballsEl.textContent = balls;
  totalBalls++;
  if (playerActive == 1) {
    ballsPlayer1++;
  }
};
const RunRate = function () {
  runRate = (runs / totalBalls) * 6;
  runrate.textContent = runRate.toFixed(2);
};
const scoreBoardUpdater = function () {
  scoreBoard[playerActive] = runs;
};
function defaultTimeline() {
  activeTimeline = [0, 0, 0, 0, 0, 0];
  ball1.textContent = "";
  ball2.textContent = "";
  ball3.textContent = "";
  ball4.textContent = "";
  ball5.textContent = "";
  ball6.textContent = "";
  console.log(activeTimeline);
  console.log("defaultTimeline function called");
  while (limit > 6) {
    console.log(extraBalls);
    listEl.removeChild(listEl.lastElementChild);
    limit--;
  }
  active_ball = 0;
}
const timelineFunction = function (runs) {
  lastBall = runs;
  theLastBall.textContent = lastBall;
  document.querySelector(`.ball-${active_ball + 1}`).textContent = runs;
  activeTimeline[active_ball] = runs;
  console.log(activeTimeline);
  active_ball++;
  if (active_ball === limit) {
    defaultTimeline();
  }
};
const specialTimelineFunction = function (value) {
  extraBalls++;
  limit++;
  var node = document.createElement("li");
  node.classList.add(`ball-${limit}`);
  node.appendChild(document.createTextNode(""));
  listEl.appendChild(node);
  timelineFunction(value);
};
const needSentenceFunction = function () {
  if (oneWicketFall == true) {
    document.querySelector(".leadplayer").textContent = `${namePlayer1} `;
    document.querySelector(".leadtextwon").textContent = " needs ";
    document.querySelector(".leadruns").textContent = target - runs;
    document.querySelector(".some-words").textContent = ` runs to win on ${
      userBalls - ballsPlayer1
    } balls`;
  }
};
const btnDisabledFunction = function () {
  btn0.disabled = true;
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  btn6.disabled = true;
  wicket.disabled = true;
  wide.disabled = true;
  nb.disabled = true;
};
const winCheckerFunction = function () {
  if (playerActive === 1) {
    if (runs == target || runs > target) {
      document.querySelector(".leadplayer").textContent = `${namePlayer1} `;
      document.querySelector(".leadtextwon").textContent = " has won the match";
      document.querySelector(".leadruns").textContent = "";
      document.querySelector(".some-words").textContent = "";
      p1i0.textContent = scoreBoard[playerActive];
      btnDisabledFunction();
    }
  }
};
const wicketFalls = function () {
  totalWickets++;
  wickets++;
  wicktesEl.textContent = wickets;
  runrate.textContent = "0.00";
  if (totalWickets == 10 || totalWickets == 20) {
    wickets = 0;
    wicktesEl.textContent = wickets;
    balls = 0;
    overs = 0;
    runRate = 0;
    totalBalls = 0;
    ballsEl.textContent = balls;
    oversEl.textContent = overs;
    if (playerActive == 0) {
      console.log(runs);
      target = runs + 1;
      targetEl.textContent = target;
      console.log(target);
    }
    switch (playerActive) {
      case 0:
        oneWicketFall = true;
        p0i0.textContent = scoreBoard[playerActive];
        runs = 0;
        needSentenceFunction();
        playerActive = 1;
        playerNameEl.textContent = namePlayer1;
        break;
      case 1:
        btnDisabledFunction();
        if (runs < scoreBoard[0]) {
          document.querySelector(".leadplayer").textContent = `${namePlayer0} `;
          document.querySelector(".leadtextwon").textContent =
            " has won the match";
          document.querySelector(".leadruns").textContent = "";
          document.querySelector(".some-words").textContent = "";
        } else if (runs === scoreBoard[0]) {
          document.querySelector(".leadplayer").textContent = "There is a draw";
          document.querySelector(".leadtextwon").textContent = "";
          document.querySelector(".leadruns").textContent = "";
          document.querySelector(".some-words").textContent = "";
        }
        p1i0.textContent = scoreBoard[playerActive];
        break;
    }
  }
  lastBall = "wicket";
  theLastBall.textContent = lastBall;
  console.log(runs);
  main_runs.textContent = runs;
  defaultTimeline();
  overChange();
};
const limitChecker = function () {
  if (overs === userOvers) {
    wicketFalls();
    winCheckerFunction();
  }
};

const specialRunAdder = function (value) {
  runAdder(1);
  RunRate();
  scoreBoardUpdater();
  specialTimelineFunction(value);
  needSentenceFunction();
  winCheckerFunction();
};
const superFunction = function (value) {
  runAdder(value);
  overChange();
  RunRate();
  scoreBoardUpdater();
  timelineFunction(value);
  needSentenceFunction();
  winCheckerFunction();
  limitChecker();
};

btn1.addEventListener("click", function () {
  superFunction(1);
});
btn2.addEventListener("click", function () {
  superFunction(2);
});
btn3.addEventListener("click", function () {
  superFunction(3);
});
btn4.addEventListener("click", function () {
  superFunction(4);
});
btn6.addEventListener("click", function () {
  superFunction(6);
});
btn0.addEventListener("click", function () {
  superFunction(0);
});
wide.addEventListener("click", function () {
  specialRunAdder("wd");
});
nb.addEventListener("click", function () {
  specialRunAdder("nb");
  wicket.disabled = true;
});
wicket.addEventListener("click", function () {
  wicketFalls(1);
});
new_game.addEventListener("click", function () {
  starting();
});
const currentYear = new Date().getFullYear();
document.querySelector(".year").textContent = currentYear;
let version = "5.0";
document.querySelector(".verison").textContent = version;
