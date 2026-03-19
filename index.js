let homePoints = 0
let guestPoints = 0
let periods = 0
let fouls = 0

function add1PointHome() {
    homePoints += 1
    document.getElementById("homeScore").textContent = homePoints
}

function add2PointsHome() {
    homePoints += 2
    document.getElementById("homeScore").textContent = homePoints
}

function add3PointsHome() {
    homePoints += 3
    document.getElementById("homeScore").textContent = homePoints
}

function add1PointAway() {
    awayPoints += 1
    document.getElementById("awayScore").textContent = awayPoints
}

function add2PointsAway() {
    awayPoints += 2
    document.getElementById("awayScore").textContent = awayPoints
}

function add3PointsAway() {
    awayPoints += 3
    document.getElementById("awayScore").textContent = awayPoints
}

function scoreReset() {
    awayPoints = 0
    document.getElementById("awayScore").textContent = awayPoints
    homePoints = 0
    document.getElementById("homeScore").textContent = homePoints
}

function minus1Period() {
    periods -= 1
    document.getElementById("periodCounter").textContent = periods
}

function plus1Period() {
    periods += 1
    document.getElementById("periodCounter").textContent = periods
}

function minus1Foul() {
    fouls -= 1
    document.getElementById("foulCounter").textContent = fouls
}

function plus1Foul() {
    fouls += 1
    document.getElementById("foulCounter").textContent = fouls
}