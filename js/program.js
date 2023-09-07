'use strict';
const main_runs = document.querySelector('.score-number');
const oversEl = document.querySelector('.over');
const ballsEl = document.querySelector('.balls');
const btn0 = document.querySelector('.btn--0');
const btn1 = document.querySelector('.btn--1');
const btn2 = document.querySelector('.btn--2');
const btn3 = document.querySelector('.btn--3');
const btn4 = document.querySelector('.btn--4');
const btn6 = document.querySelector('.btn--6');
const wicket = document.querySelector('.btn--wicket');
const wide = document.querySelector('.btn--wide');
const nb = document.querySelector('.btn--nb');
const other = document.querySelector('.btn--other');
const p0i0 = document.querySelector('.p0i0');
const p1i0 = document.querySelector('.p1i0');
const runrate = document.querySelector('.run_rate');
const new_game = document.querySelector('.new');
const targetEl = document.querySelector('.target');
const ball1 = document.querySelector('.ball-1');
const ball2 = document.querySelector('.ball-2');
const ball3 = document.querySelector('.ball-3');
const ball4 = document.querySelector('.ball-4');
const ball5 = document.querySelector('.ball-5');
const ball6 = document.querySelector('.ball-6');
const theLastBall = document.querySelector('.last_ball');
const listEl = document.querySelector('.time_line');
const playerNameEl = document.querySelector('.player-name');
const wicktesEl = document.querySelector('.wickets');
const scorecardEl = document.querySelector('.main_scorecard');

let runs,
  overs,
  balls,
  runRate,
  playerActive,
  scoreBoard,
  userOvers,
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
  totalWickets,
  wickets,
  playerRuns,
  singlePlayerRuns,
  strike,
  activeTwoPlayers,
  fix_counter,
  batterNames,
  activeBatter,
  teamScorecard,
  allPlayers,
  allRuns,
  activeBatters,
  striker,
  allTeams,
  allBalls,
  team,
  activeTeam;

const starting = function () {
  // userOvers = parseInt(prompt("how many overs do you want"));
  userOvers = 10;
  allTeams = [
    // inputTakerAndValidChecker(
    //   'Enter the name of the team which will bat first (team1)'
    // ),
    // inputTakerAndValidChecker(
    //   'Enter the name of the team which will ball first (team2)'
    // ),
    'lions',
    'tigers',
  ];

  playerRuns = [0];
  singlePlayerRuns = 0;
  runs = 0;
  balls = 0;
  overs = 0;
  totalWickets = 0;
  wickets = 0;
  target = 0;
  // batterNames = ['Batter1', 'Batter2'];
  activeBatter = 0;
  // teamScorecard = new Object();
  // teamScorecard[batterNames[0]] = 0;
  // teamScorecard[batterNames[1]] = 0;
  targetEl.textContent = target;
  wicktesEl.textContent = wickets;
  ballsEl.textContent = balls;
  main_runs.textContent = runs;
  oversEl.textContent = overs;
  runRate = '0.00';
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
  fix_counter = 1;
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
  document.querySelector('.leadplayer').textContent = ``;
  document.querySelector('.leadtextwon').textContent = '';
  document.querySelector('.leadruns').textContent = '';
  document.querySelector('.some-words').textContent = '';
};

// var starter = document.createElement('div');
// starter.classList.add('div-batter');
// starter.classList.add(`div-batter${fix_counter}`);
// scorecardEl.appendChild(starter);

// // Adding the batter's name
// var starter11 = document.createElement('div');
// starter11.appendChild(document.createTextNode(`Batter ${fix_counter}`));
// document.querySelector(`.div-batter${fix_counter}`).appendChild(starter11);

// // Adding the information DIV element
// var starter12 = document.createElement('div');
// starter12.classList.add('div-score');
// starter12.classList.add(`div-score${fix_counter}`);
// document.querySelector(`.div-batter${fix_counter}`).appendChild(starter12);

// // Adding the runs in the information conatainer
// var starter13 = document.createElement('p');
// starter13.textContent = singlePlayerRuns;
// document.querySelector(`.div-score${fix_counter}`).appendChild(starter13);

// fix_counter++;

// var starter2 = document.createElement('div');
// starter2.classList.add('div-batter');
// starter2.classList.add(`div-batter${fix_counter}`);
// scorecardEl.appendChild(starter2);

// var starter21 = document.createElement('div');
// starter21.appendChild(document.createTextNode(`Batter ${fix_counter}`));
// document.querySelector(`.div-batter${fix_counter}`).appendChild(starter21);

// // Adding the information DIV element
// var starter22 = document.createElement('div');
// starter22.classList.add('div-score');
// starter22.classList.add(`div-score${fix_counter}`);
// document.querySelector(`.div-batter${fix_counter}`).appendChild(starter22);

// // Adding the runs in the information conatainer
// var starter23 = document.createElement('p');
// starter23.textContent = singlePlayerRuns;
// document.querySelector(`.div-score${fix_counter}`).appendChild(starter23);
// defaultTimeline();
///////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//                  LATEST COMMENTED CODE ⬇️
//
//
//
//
//
//
//
//
//
//
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//27.5.23

//   team = {
//     activeTeam: 1,
//     allPlayers1: [
//       inputTakerAndValidChecker('Enter the name of batter 1 : '),
//       inputTakerAndValidChecker('Enter the name of batter 2 : '),
//     ],
//     // console.log(players);
//     // console.log(players[1]);
//     // cl
//     allRuns1: {},
//     activeBatters1: new Array(),
//     allBalls1: {},
//     striker: 0,
//     allPlayers2: [],
//     allBowlers2: {},
//     activeBowler: '',
//     activeTeam: 1,
//     ////////////////////////////////////////////////////////////////////////////////
//   };
//   team.allRuns1[team.allPlayers1[0]] = 0;
//   team.allRuns1[team.allPlayers1[1]] = 0;
//   team.allBalls1[team.allPlayers1[0]] = 0;
//   team.allBalls1[team.allPlayers1[1]] = 0;
//   team.activeBatters1[0] = team.allPlayers1[0];
//   team.activeBatters1[1] = team.allPlayers1[1];
//   team.activeBowler = inputTakerAndValidChecker('Enter the name bowler : ');
//   team.allPlayers2.push(team.activeBowler);
//   team.allBowlers2[team.activeBowler] = 0;
// };
starting();

// function scoreBoardDivAdder() {
//   let html;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//               LATEST COMMENTED CODE ⬆️
//
//               NEW CODE ⬇️
//
//
//
//
//
//
//
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const setVariablesForInning = function (a) {
  let bat1 = document
    .getElementById(a == 0 ? 'bat1' : 'bat1-2')
    .value.toLowerCase();
  let bat2 = document
    .getElementById(a == 0 ? 'bat2' : 'bat2-2')
    .value.toLowerCase();
  let bowler = document
    .getElementById(a == 0 ? 'bowler' : 'bowler-2')
    .value.toLowerCase();

  if (match[match.batting].allPlayers.includes(bat1) == false) {
    match[match.batting].allPlayers.push(bat1);
  }
  if (match[match.batting].allPlayers.includes(bat2) == false) {
    match[match.batting].allPlayers.push(bat2);
  }
  match[match.batting].battingDept.activeBatters = new Array();
  match[match.batting].battingDept.activeBatters.push(bat1, bat2);
  match[match.batting].battingDept.allBatters.push(bat1, bat2);

  match.striker = 0;
  match[match.batting].battingDept.allRuns[
    match[match.batting].allPlayers[0]
  ] = 0;
  match[match.batting].battingDept.allRuns[
    match[match.batting].allPlayers[1]
  ] = 0;
  match[match.batting].battingDept.allBalls[
    match[match.batting].allPlayers[0]
  ] = 0;
  match[match.batting].battingDept.allBalls[
    match[match.batting].allPlayers[1]
  ] = 0;
  match[match.batting].battingDept.runs = 0;

  if (match[match.bowling].allPlayers.includes(bowler) == false) {
    match[match.bowling].allPlayers.push(bowler);
  }
  match[match.bowling].bowlingDept.allBowlers.push(bowler);
  match[match.bowling].bowlingDept.activeBowler = bowler;
  match[match.bowling].bowlingDept.allRuns[
    match[match.bowling].bowlingDept.activeBowler
  ] = 0;
  match[match.bowling].bowlingDept.allBalls[
    match[match.bowling].bowlingDept.activeBowler
  ] = 0;
  match[match.bowling].bowlingDept.allWickets[
    match[match.bowling].bowlingDept.activeBowler
  ] = 0;
  if (bat1 && bat2 && bowler) {
    document
      .querySelector(a == 0 ? '.info-scr-2' : '.info-scr-3')
      .classList.toggle('none');
    document.querySelector('.main-scr').classList.toggle('none');
    playerNameEl.textContent = match[match.batting].name;
  } else {
    alert('Fill the input fields correctly');
  }
};
//
//
//
//
//
//
//
//
let nameT1;
let nameT2;
let match = {
  target: 0,
  currentInning: 0,
  matchWickets: 0,
  team1: {
    allPlayers: new Array(),
    battingDept: {
      allBatters: new Array(),
      allRuns: new Object(),
      allBalls: new Object(),
      runs: 0,
      extra: 0,
    },
    bowlingDept: {
      allBowlers: new Array(),
      allRuns: new Object(),
      allBalls: new Object(),
      allWickets: new Object(),
      activeBowler: '',
    },
  },
  team2: {
    allPlayers: new Array(),
    battingDept: {
      allBatters: new Array(),
      allRuns: new Object(),
      allBalls: new Object(),
      runs: 0,
      extra: 0,
    },
    bowlingDept: {
      allBowlers: new Array(),
      allRuns: new Object(),
      allBalls: new Object(),
      allWickets: new Object(),
      activeBowler: '',
    },
  },
};
let bothChecked = false;

document.querySelector('.next').addEventListener('click', () => {
  nameT1 = document.getElementById('team1').value.toLowerCase();
  nameT2 = document.getElementById('team2').value.toLowerCase();
  match.team1.name = nameT1;
  match.team2.name = nameT2;

  if (
    document.getElementById('chk-1').checked &&
    document.getElementById('chk-2').checked == false
  ) {
    match.firstBat = 'team1';
    match.batting = 'team1';
    match.bowling = 'team2';
    match.team1.first = 'bat';
    match.team2.first = 'ball';
    bothChecked = false;
  } else if (
    document.getElementById('chk-2').checked &&
    document.getElementById('chk-1').checked == false
  ) {
    match.firstBat = 'team2';
    match.batting = 'team2';
    match.bowling = 'team1';
    match.team2.first = 'bat';
    match.team1.first = 'ball';
    bothChecked = false;
  } else if (
    document.getElementById('chk-2').checked &&
    document.getElementById('chk-1').checked
  ) {
    bothChecked = true;
  }
  let overs = parseInt(document.getElementById('ovr').value);
  let ovrError = false;
  if (isFinite(overs)) {
    match.overs = overs;
    ovrError = false;
  } else {
    ovrError = true;
  }
  if (nameT1 && nameT2 && !bothChecked && !ovrError) {
    document.querySelector('.info-scr').classList.toggle('none');
    document.querySelector('.info-scr-2').classList.toggle('none');
  } else {
    alert('Fill the input fields correctly');
  }
});

document.querySelector('.next-2').addEventListener('click', () => {
  setVariablesForInning(0);
  console.log(match);
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function inputTakerAndValidChecker(message, type = 'str') {
  // let numValue;
  // if(type == num){
  //   numValue = int(input)
  // }
  let theInput;
  if (type == 'str') {
    theInput = prompt(message);
    while (theInput == null) {
      theInput = prompt(`INVALID INPUT\n${message}`);
    }
    while (theInput.length == 0) {
      theInput = prompt(`INVALID INPUT\n${message}`);
    }
  } else if (type == 'num') {
    theInput = Number(prompt(message));
    while (theInput <= 0) {
      theInput = prompt(`INVALID INPUT\n${message}`);
    }
  }
  return theInput.toLowerCase();
}

const runAdder = function (num, normal = true, nb = false) {
  let value = num;
  if (nb) {
    let moreNum = inputTakerAndValidChecker(
      'How many runs are made on this ball (excluding the 1 run of no ball)'
    );
    value += moreNum;
  }
  runs += value;
  match[match.batting].battingDept.runs += value;
  main_runs.textContent = runs;
  wicket.disabled = false;
  // singlePlayerRuns += value;
  // teamScorecard[`Batter${activeBatter + 1}`] += value;
  // console.log(teamScorecard);
  // console.log('starting' + activeBatter);

  // console.log(`all players : ${allPlayers}`);
  // console.log(`all runs : ${Object.getOwnPropertyNames(team.allRuns1)}`);
  // console.log(`active batters : ${team.activeBatters1}`);
  // console.log(team.allRuns1);
  // console.log(team.allRuns1[team.activeBatters1[team.striker]]);
  // console.log(team.allBalls1);
  // console.log(`striker : ${team.activeBatters1[team.striker]}`);
  // console.log(team.allBowlers2);
  // if (normal) {
  //   team.allRuns1[team.activeBatters1[team.striker]] += value;
  //   team.allBalls1[team.activeBatters1[team.striker]] += 1;
  //   if (value % 2 !== 0) {
  //     switch (team.striker) {
  //       case 0:
  //         team.striker = 1;
  //         break;
  //       case 1:
  //         team.striker = 0;
  //         break;
  //     }
  //     console.log(`str : ${team.striker}`);
  //   }
  //   team.allBowlers2[team.activeBowler]++;
  // }
  // console.log(` after all players : ${team.allPlayers1}`);
  // console.log(` after all runs : ${Object.getOwnPropertyNames(team.allRuns1)}`);
  // console.log(`active batters : ${team.activeBatters1}`);
  // console.log(team.allRuns1);
  // console.log(team.allRuns1[team.activeBatters1[team.striker]]);
  // console.log('focus');
  // console.log(team.allBalls1);
  // console.log(`striker : ${team.activeBatters1[team.striker]}`);
  // console.log(team.allBowlers2);
  // console.log('//////////////////////////////////////////////////////');
  //
  //
  //
  //
  //
  //

  if (normal) {
    match[match.batting].battingDept.allRuns[
      match[match.batting].battingDept.activeBatters[match.striker]
    ] += value;
    match[match.bowling].bowlingDept.allRuns[
      match[match.bowling].bowlingDept.activeBowler
    ] += value;
    if (value % 2 !== 0) {
      switch (match.striker) {
        case 0:
          match.striker = 1;
          break;
        case 1:
          match.striker = 0;
          break;
      }
    }
    console.log(`str : ${match.striker}`);
    // team.allBowlers2[team.activeBowler]++;
  } else if (!normal) {
    match[match.batting].battingDept.extra += value;
  }
  console.log(match);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
};
const overChange = function () {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  match[match.batting].battingDept.allBalls[
    match[match.batting].battingDept.activeBatters[match.striker]
  ]++;
  match[match.bowling].bowlingDept.allBalls[
    match[match.bowling].bowlingDept.activeBowler
  ]++;

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  balls++;
  if (balls === 6) {
    balls = 0;
    overs++;
    switch (match.striker) {
      case 0:
        match.striker = 1;
        break;
      case 1:
        match.striker = 0;
        break;
    }
    console.log(`str : ${match.striker}`);
    oversEl.textContent = overs;
    ballsEl.textContent = balls;
    totalBalls++;
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    if (overs !== match.overs) {
      let newBowler = inputTakerAndValidChecker(
        'Enter the name of the new bowler : '
      );
      while (newBowler == match[match.bowling].bowlingDept.activeBowler) {
        newBowler = inputTakerAndValidChecker(
          'SAME \nEnter the name of the new bowler : '
        );
      }
      if (newBowler !== match[match.bowling].bowlingDept.activeBowler) {
        match[match.bowling].bowlingDept.activeBowler = newBowler;
        if (
          match[match.bowling].bowlingDept.allBowlers.includes(newBowler) ==
          false
        ) {
          match[match.bowling].allPlayers.push(newBowler);
          match[match.bowling].bowlingDept.allWickets[
            match[match.bowling].bowlingDept.activeBowler
          ] = 0;
          match[match.bowling].bowlingDept.allRuns[
            match[match.bowling].bowlingDept.activeBowler
          ] = 0;
          match[match.bowling].bowlingDept.allBalls[
            match[match.bowling].bowlingDept.activeBowler
          ] = 0;
        }
      }
    }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    if (playerActive == 1) {
      ballsPlayer1++;
    }
    // let newBowler = inputTakerAndValidChecker(
    //   'Enter the name of next Bowler : '
    // );
    // while (newBowler) {
    //   newBowler = inputTakerAndValidChecker(
    //     'SAME BOWLER!\nEnter the name of next Bowler : '
    //   );
    // }
    // if (newBowler != team.activeBowler) {
    //   team.activeBowler = newBowler;
    //   team.allBowlers2[team.activeBowler] = 0;
    // }
  } else {
    oversEl.textContent = overs;
    ballsEl.textContent = balls;
    totalBalls++;
    if (playerActive == 1) {
      ballsPlayer1++;
    }
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
  ball1.textContent = '';
  ball2.textContent = '';
  ball3.textContent = '';
  ball4.textContent = '';
  ball5.textContent = '';
  ball6.textContent = '';
  console.log(activeTimeline);
  console.log('defaultTimeline function called');
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
  if (active_ball == limit) {
    defaultTimeline();
  }
  console.log(active_ball);
};
const specialTimelineFunction = function (value) {
  extraBalls++;
  limit++;
  var node = document.createElement('li');
  node.classList.add(`ball-${limit}`);
  node.classList.add('ball');
  node.appendChild(document.createTextNode(''));
  listEl.appendChild(node);
  timelineFunction(value);
};
const needSentenceFunction = function () {
  if (match.firstInningOver == true) {
    // document.querySelector('.leadplayer').textContent = `${namePlayer1} `;
    document.querySelector('.leadtextwon').textContent = ' needs ';
    document.querySelector('.leadruns').textContent = target - runs;
    document.querySelector('.some-words').textContent = ` runs to win on ${
      userBalls - ballsPlayer1
    } balls`;
  }
};

let buttons = [btn0, btn1, btn2, btn3, btn4, btn6, wicket, wide, nb];

const btnDisabledFunction = function (a = true) {
  if (a) {
    buttons.forEach(i => (i.disabled = true));
  } else if (!a) {
    buttons.forEach(i => (i.disabled = false));
  }
};

const winCheckerFunction = function () {
  if (playerActive === 1) {
    if (runs == target || runs > target) {
      // document.querySelector('.leadplayer').textContent = `${namePlayer1} `;
      document.querySelector('.leadtextwon').textContent = ' has won the match';
      document.querySelector('.leadruns').textContent = '';
      document.querySelector('.some-words').textContent = '';
      p1i0.textContent = scoreBoard[playerActive];
      btnDisabledFunction();
    }
  }
};

const allOutChecker = function () {};

// const teamToggler = function (a) {
//   switch (a) {
//     case 'team1':
//       a = 'team2';
//       break;
//     case 'team2':
//       a = 'team1';
//       break;
//   }
// };

const startSecondInning = function () {
  btnDisabledFunction();
  setTimeout(() => {
    console.log('Delayed for 1 second.');

    document.querySelector('.main-scr').classList.toggle('none');
    document.querySelector('.alert-scr').classList.toggle('none');

    document.querySelector('.continue').addEventListener('click', () => {
      document.querySelector('.alert-scr').classList.toggle('none');
      document.querySelector('.info-scr-3').classList.toggle('none');

      btnDisabledFunction(false);
      // teamToggler(match.batting);
      // teamToggler(match.bowling);

      switch (match.batting) {
        case 'team1':
          match.batting = 'team2';
          break;
        case 'team2':
          match.batting = 'team1';
          break;

        default:
          break;
      }
      switch (match.bowling) {
        case 'team1':
          match.bowling = 'team2';
          break;
        case 'team2':
          match.bowling = 'team1';
          break;

        default:
          break;
      }
      balls = 0;
      overs = 0;
      runs = 0;
      runRate = 0;
      totalBalls = 0;
      wickets = 0;
      main_runs.textContent = runs;
      oversEl.textContent = overs;
      ballsEl.textContent = balls;
      runrate.textContent = runRate;
      wicktesEl.textContent = wickets;
      match.currentInning = 1;
      document.querySelector('.next-3').addEventListener('click', () => {
        setVariablesForInning(1);
        document.querySelector('.info-scr-3').classList.add('none');
        document.querySelector('.main-scr').classList.remove('none');
        console.log(match);
      });
    });
  }, 500);
};

const inningChange = function () {
  if (playerActive == 0) {
    console.log(runs);
    target = runs + 1;
    targetEl.textContent = target;
    console.log(target);
  }
  switch (match.currentInning) {
    case 0:
      match.firstInningOver = true;
      p0i0.textContent = scoreBoard[playerActive];
      runs = 0;
      needSentenceFunction();
      playerActive = 1;
      // playerNameEl.textContent = namePlayer1;
      break;
    case 1:
      btnDisabledFunction();
      if (runs < scoreBoard[0]) {
        document.querySelector('.leadplayer').textContent = `${namePlayer0} `;
        document.querySelector('.leadtextwon').textContent =
          ' has won the match';
        document.querySelector('.leadruns').textContent = '';
        document.querySelector('.some-words').textContent = '';
      } else if (runs === scoreBoard[0]) {
        document.querySelector('.leadplayer').textContent = 'There is a draw';
        document.querySelector('.leadtextwon').textContent = '';
        document.querySelector('.leadruns').textContent = '';
        document.querySelector('.some-words').textContent = '';
      }
      p1i0.textContent = scoreBoard[playerActive];
      break;
  }
  defaultTimeline();
};

const wicketFalls = () => {
  // console.log('before wicket //////////////////');

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // singlePlayerRuns = 0;
  totalWickets++;

  // let newBatter = inputTakerAndValidChecker('Enter the name of new batter');
  // team.allPlayers1.push(newBatter);
  // team.allRuns1[newBatter] = 0;
  // team.allBalls1[newBatter] = 0;
  // team.activeBatters1[team.striker] = newBatter;
  // // team.allBalls1[team.activeBatters[team.striker]] = 0;
  // console.log(team.allBalls1);
  // console.log(team.allPlayers1);
  // console.log(team.allRuns1);
  // console.log(`striker: ${team.activeBatters1[team.striker]}`);
  // console.log('\nafter wicket /////////////////////////////////\n');
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  ///////////////////////////////////////////////////////////////////////////////
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  if (match.matchWickets < 9) {
    wickets++;
    wicktesEl.textContent = wickets;
    match.matchWickets++;
    let newBatter = inputTakerAndValidChecker(
      'Enter the name of the new batsman : '
    );
    while (match[match.batting].allPlayers.includes(newBatter)) {
      newBatter = inputTakerAndValidChecker(
        'SAME \nEnter the name of the new batsman : '
      );
    }

    match[match.batting].allPlayers.push(newBatter);
    match[match.batting].battingDept.allBatters.push(newBatter);

    match[match.batting].battingDept.activeBatters[match.striker] = newBatter;
    match[match.batting].battingDept.allRuns[
      match[match.batting].battingDept.activeBatters[match.striker]
    ] = 0;
    match[match.batting].battingDept.allBalls[
      match[match.batting].battingDept.activeBatters[match.striker]
    ] = 0;
    match[match.bowling].bowlingDept.allWickets[
      match[match.bowling].bowlingDept.activeBowler
    ]++;
  } else if (match.matchWickets == 9) {
    startSecondInning();
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //////////////////////////////////////////////////////////////////////////////////
  //
  //
  //
  //
  //
  //
  //
  overChange();
  timelineFunction('wk');
  if (totalWickets == 10 || totalWickets == 20) {
    //   inningChange();
  }
  lastBall = 'wicket';
  theLastBall.textContent = lastBall;
  console.log(runs);
  main_runs.textContent = runs;
};
const limitChecker = function () {
  console.log(overs == match.overs);
  if (overs == match.overs) {
    // inningChange();
    startSecondInning();
    winCheckerFunction();
  }
};

const specialRunAdder = function (value) {
  runAdder(1, false, true);
  RunRate();
  scoreBoardUpdater();
  specialTimelineFunction(value);
  needSentenceFunction();
  winCheckerFunction();
};
const superFunction = function (value) {
  runAdder(value);
  overChange();
  timelineFunction(value);
  RunRate();
  scoreBoardUpdater();
  needSentenceFunction();
  winCheckerFunction();
  limitChecker();
};

btn1.addEventListener('click', function () {
  superFunction(1);
});
btn2.addEventListener('click', function () {
  superFunction(2);
});
btn3.addEventListener('click', function () {
  superFunction(3);
});
btn4.addEventListener('click', function () {
  superFunction(4);
});
btn6.addEventListener('click', function () {
  superFunction(6);
});
btn0.addEventListener('click', function () {
  superFunction(0);
});
wide.addEventListener('click', function () {
  specialRunAdder('wd');
});
nb.addEventListener('click', function () {
  specialRunAdder('nb');
  wicket.disabled = true;
});
wicket.addEventListener('click', function () {
  wicketFalls(1);
});
new_game.addEventListener('click', function () {
  starting();
});
const currentYear = new Date().getFullYear();
document.querySelector('.year').textContent = currentYear;
let version = '5.0';
document.querySelector('.verison').textContent = version;

const list = document.querySelectorAll('.nav-btn');

function activeLink() {
  list.forEach(item => item.classList.remove('active-nav-btn'));
  this.classList.add('active-nav-btn');
}
list.forEach(item => item.addEventListener('click', activeLink));

document.getElementById('btn-_h').addEventListener('click', function () {
  document.getElementById('main-container1').classList.remove('nonedis');
  document.getElementById('main-container2').classList.add('nonedis');
  document.getElementById('main-container3').classList.add('nonedis');
});
document.getElementById('btn-_s').addEventListener('click', function () {
  document.getElementById('main-container1').classList.add('nonedis');
  document.getElementById('main-container2').classList.remove('nonedis');
  document.getElementById('main-container3').classList.add('nonedis');
});
document.getElementById('btn-_t').addEventListener('click', function () {
  document.getElementById('main-container1').classList.add('nonedis');
  document.getElementById('main-container2').classList.add('nonedis');
  document.getElementById('main-container3').classList.remove('nonedis');
});

document.querySelector('.mobile-nav-btn').addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('active');
});
