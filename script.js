"use strict";
const main_runs = document.querySelector(".score-number");
const overs = document.querySelector(".over");
const balls = document.querySelector(".balls");
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
const p0i1 = document.querySelector(".p0i1");
const p1i0 = document.querySelector(".p1i0");
const p1i1 = document.querySelector(".p1i1");
const bat0 = document.querySelectorAll(".bat0");
const bat1 = document.querySelectorAll(".bat1");
const bat2 = document.querySelectorAll(".bat2");
const bat3 = document.querySelectorAll(".bat3");
const bat4 = document.querySelectorAll(".bat4");
const bat6 = document.querySelectorAll(".bat6");
const lead = document.querySelector(".leadruns");
const runrate = document.querySelector(".run_rate");
const new_game = document.querySelector(".new");
const target = document.querySelector(".target");

let active_player,
  runs,
  ball,
  over,
  bat_0,
  bat_1,
  bat_2,
  bat_3,
  bat_4,
  bat_6,
  leadruns,
  runs_player0,
  runs_player1,
  inning,
  wtc_btn_click,
  the_balls,
  run__rate,
  target_runs,
  scoreBoard,
  totalPlayer0,
  totalPlayer1,
  fix;

const starting = function () {
  active_player = 0;
  runs = 0;
  ball = 0;
  over = 0;
  bat_0 = 0;
  bat_1 = 0;
  bat_2 = 0;
  bat_3 = 0;
  bat_4 = 0;
  bat_6 = 0;
  leadruns = 0;
  runs_player0 = 0;
  runs_player1 = 0;
  inning = 1;
  wtc_btn_click = 0;
  the_balls = 0;
  run__rate = 0;
  target_runs = 0;
  totalPlayer0 = 0;
  totalPlayer1 = 0;
  fix = false;
  runrate.textContent = "0.00";
  main_runs.textContent = 0;
  overs.textContent = 0;
  balls.textContent = 0;
  btn0.disabled = false;
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  btn6.disabled = false;
  wicket.disabled = false;
  wide.disabled = false;
  nb.disabled = false;
  p0i0.textContent = 0;
  p0i1.textContent = 0;
  p1i0.textContent = 0;
  p1i1.textContent = 0;
  scoreBoard = [0, 0, 0, 0];
  document.querySelector(".leadplayer").textContent = "Player 1";
  document.querySelector(".leadtextwon").textContent = " has the lead of ";
  document.querySelector(".leadruns").textContent = 0;
  document.querySelector(".some-words").textContent = " runs";
  document.querySelector(".bat6").textContent = bat_6;
  document.querySelector(".bat1").textContent = bat_1;
  document.querySelector(".bat0").textContent = bat_0;
  document.querySelector(".bat2").textContent = bat_2;
  document.querySelector(".bat4").textContent = bat_4;
};
starting();

const over_change = function () {
  ball += 1;
  if (ball === 6) {
    over += 1;
    ball = 0;
  }
  balls.textContent = ball;
  overs.textContent = over;
};
const run_adder = function (value) {
  runs += value;
  if (active_player === 0) {
    runs_player0 += value;
  } else if (active_player === 1) {
    runs_player1 += value;
  }
  main_runs.textContent = runs;
  the_balls += 1;
};
const run_rate = function () {
  run__rate = (runs / the_balls) * 6;
  runrate.textContent = run__rate.toFixed(2);
};
const extraRunAdder = function () {
  runs++;
  main_runs.textContent = runs;
  if (active_player == 0) {
    runs_player0++;
  } else if (active_player == 1) {
    runs_player1++;
  }
};
const lost = function () {
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
const playerWins = function (playerNumber) {
  document.querySelector(".leadplayer").textContent = `Player ${
    playerNumber === 0 ? 1 : 2
  } `;
  document.querySelector(".leadtextwon").textContent = "has won the match";
  document.querySelector(".leadruns").textContent = " ";
  document.querySelector(".some-words").textContent = " ";
};
const sentence = function () {
  if (runs_player0 > runs_player1) {
    document.querySelector(".leadplayer").textContent = "Player 1";
    document.querySelector(".leadruns").textContent =
      runs_player0 - runs_player1;
  } else if (runs_player1 > runs_player0) {
    document.querySelector(".leadplayer").textContent = "Player 2";
    document.querySelector(".leadruns").textContent =
      runs_player1 - runs_player0;
  } else if (runs_player0 === runs_player1) {
    document.querySelector(".leadruns").textContent = 0;
  }

  if (wtc_btn_click === 3 && scoreBoard[1] > scoreBoard[0] + scoreBoard[2]) {
    lost();
    playerWins(1);
  }
};
const liveUpdateUpdater = function (index) {
  scoreBoard[index] = runs;
  if (index === 0 || index === 2) {
    totalPlayer0 = scoreBoard[0] + scoreBoard[2];
  } else if (index === 1 || index === 3) {
    totalPlayer1 = scoreBoard[1] + scoreBoard[3];
  }
};
const fixSentence = function () {
  if (fix == true && totalPlayer1 > totalPlayer0) {
    lost();
    playerWins();
  }
};
const needSentence = function () {
  if (fix == true) {
    console.log(target_runs);
    document.querySelector(".leadplayer").textContent = "Player 1 ";
    document.querySelector(".leadtextwon").textContent = " needs ";
    document.querySelector(".leadruns").textContent =
      totalPlayer1 - totalPlayer0 + 1;
    document.querySelector(".some-words").textContent = " to win";
  }
};
const liveUpdate = function () {
  switch (inning) {
    case 1:
      liveUpdateUpdater(0);
    case 2:
      liveUpdateUpdater(1);
    case 3:
      liveUpdateUpdater(2);
    case 4:
      liveUpdateUpdater(3);
  }
};

btn6.addEventListener("click", function () {
  run_adder(6);
  over_change();
  run_rate();
  sentence();
  bat_6 += 1;
  document.querySelector(".bat6").textContent = bat_6;
  liveUpdate();
  fixSentence();
  needSentence();
});
btn1.addEventListener("click", function () {
  run_adder(1);
  over_change();
  run_rate();
  sentence();
  bat_1 += 1;
  document.querySelector(".bat1").textContent = bat_1;
  liveUpdate();
  fixSentence();
  needSentence();
});
btn0.addEventListener("click", function () {
  run_adder(0);
  over_change();
  run_rate();
  sentence();
  bat_0 += 1;
  document.querySelector(".bat0").textContent = bat_0;
  liveUpdate();
  fixSentence();
  needSentence();
});
btn2.addEventListener("click", function () {
  run_adder(2);
  over_change();
  run_rate();
  sentence();
  bat_2 += 1;
  document.querySelector(".bat2").textContent = bat_2;
  liveUpdate();
  fixSentence();
  needSentence();
});
btn3.addEventListener("click", function () {
  run_adder(3);
  over_change();
  run_rate();
  sentence();
  bat_3 += 1;
  liveUpdate();
  fixSentence();
  needSentence();
});
btn4.addEventListener("click", function () {
  run_adder(4);
  over_change();
  run_rate();
  sentence();
  bat_4 += 1;
  document.querySelector(".bat4").textContent = bat_4;
  liveUpdate();
  fixSentence();
  needSentence();
});
wide.addEventListener("click", function () {
  extraRunAdder();
  run_rate();
  sentence();
  fixSentence();
  needSentence();
});
nb.addEventListener("click", function () {
  extraRunAdder();
  run_rate();
  sentence();
  fixSentence();
  needSentence();
});
wicket.addEventListener("click", function () {
  switch (inning) {
    case 1:
      scoreBoard[0] = runs;
      p0i0.textContent = runs;
      inning = 2;
      break;

    case 2:
      scoreBoard[1] = runs;
      p1i0.textContent = runs;
      inning = 3;
      break;

    case 3:
      scoreBoard[2] = runs;
      p0i1.textContent = runs;
      target_runs = scoreBoard[0] + scoreBoard[2] - scoreBoard[1] + 1;
      target.textContent = target_runs;
      inning = 4;
      fix = true;
      break;

    case 4:
      scoreBoard[3] = runs;
      p1i1.textContent = runs;
      inning = 0;
      lost();
      break;
  }
  runs = 0;
  main_runs.textContent = runs;
  over = 0;
  ball = 0;
  the_balls = 0;
  run__rate = 0;
  runrate.textContent = "0.00";
  balls.textContent = ball;
  overs.textContent = over;
  document.querySelector(".player-name").textContent = `Player ${
    active_player == 0 ? 2 : 1
  }`;
  if (active_player === 0) {
    active_player = 1;
  } else if (active_player === 1) {
    active_player = 0;
  }
  wtc_btn_click += 1;
  if (wtc_btn_click === 4) {
    if (scoreBoard[0] + scoreBoard[2] > scoreBoard[1] + scoreBoard[3]) {
      playerWins(1);
    } else if (scoreBoard[0] + scoreBoard[2] < scoreBoard[1] + scoreBoard[3]) {
      playerWins(0);
    } else {
      document.querySelector(".leadplayer").textContent = "There is a draw";
      document.querySelector(".leadtextwon").textContent = "";
      document.querySelector(".leadruns").textContent = " ";
      document.querySelector(".some-words").textContent = " ";
    }
  }
  sentence();
  needSentence();
});

new_game.addEventListener("click", function () {
  starting();
});

const currentYear = new Date().getFullYear();
document.querySelector(".year").textContent = currentYear;
let version = "3.1";
document.querySelector(".verison").textContent = version;
