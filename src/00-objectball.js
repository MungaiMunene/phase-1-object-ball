function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  console.log(gameObject());

//Points scored 
  function numPointsScored(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
      if (team.players[playerName]) {
        return team.players[playerName].points;
      }
    }
    return null; // Player not found
  }

  // shoe size
  function shoeSize(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
      if (team.players[playerName]) {
        return team.players[playerName].shoe;
      }
    }
    return null; // Player not found
  }
// team colors
  function teamColors(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
      if (team.teamName === teamName) {
        return team.colors;
      }
    }
    return null; // Team not found
  }
//team names 
function teamNames() {
  const game = gameObject();
  return Object.values(game).map(team => team.teamName);
}

//player numbers

function playerNumbers(teamName) {
  const game = gameObject();
  for (const team of Object.values(game)) {
    if (team.teamName === teamName) {
      return Object.values(team.players).map(player => player.number);
    }
  }
  return null; // Team not found
}

//player stats
function playerStats(playerName) {
  const game = gameObject();
  for (const team of Object.values(game)) {
    if (team.players[playerName]) {
      return { ...team.players[playerName] };
    }
  }
  return null; // Player not found
}
//big shoe rebound
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoePlayer = null;

  for (const team of Object.values(game)) {
    for (const player of Object.values(team.players)) {
      if (!largestShoePlayer || player.shoe > largestShoePlayer.shoe) {
        largestShoePlayer = player;
      }
    }
  }

  return largestShoePlayer ? largestShoePlayer.rebounds : null;
}

//most points scored 
function mostPointsScored() {
  const game = gameObject();
  let topScorer = null;

  for (const team of Object.values(game)) {
    for (const player of Object.values(team.players)) {
      if (!topScorer || player.points > topScorer.points) {
        topScorer = player;
      }
    }
  }

  return topScorer ? topScorer.name : null;
}

//winning team

function winningTeam() {
  const game = gameObject();
  let highestScoringTeam = null;
  let highestScore = 0;

  for (const team of Object.values(game)) {
    const teamScore = Object.values(team.players).reduce((total, player) => total + player.points, 0);
    if (teamScore > highestScore) {
      highestScore = teamScore;
      highestScoringTeam = team.teamName;
    }
  }

  return highestScoringTeam;
}

//player with longest name

function playerWithLongestName() {
  const game = gameObject();
  let longestNamePlayer = null;

  for (const team of Object.values(game)) {
    for (const player of Object.values(team.players)) {
      if (!longestNamePlayer || player.name.length > longestNamePlayer.name.length) {
        longestNamePlayer = player;
      }
    }
  }

  return longestNamePlayer ? longestNamePlayer.name : null;
}

//longest name, most steals
function doesLongNameStealATon() {
  const longestName = playerWithLongestName();
  const player = playerStats(longestName);
  const topStealer = mostPointsScored();

  return player && player.steals > topStealer.steals;
}