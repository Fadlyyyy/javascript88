// function to play the game
function playGame() {
    // prompt player to choose "gunting," "kertas," or "batu"
    var playerChoice = prompt("pilih: gunting, kertas, batu").toLowerCase();
    // generate random choice for computer
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "gunting";
    } else if (computerChoice >= 0.34 && computerChoice < 0.67) {
        computerChoice = "kertas";
    } else {
        computerChoice = "batu";
    }
    // compare player and computer choices to determine winner
    switch (playerChoice) {
        case "gunting":
            if (computerChoice === "gunting") {
                alert("SERI! Kamu memilih gunting dan komputer memilih gunting.");
            } else if (computerChoice === "kertas") {
                alert("MENANG! Kamu memilih gunting dan komputer memilih kertas.");
            } else {
                alert("KALAH! Kamu memilih gunting dan komputer memilih batu.");
            }
            break;
        case "kertas":
            if (computerChoice === "gunting") {
                alert("KALAH! Kamu memilih kertas dan komputer memilih gunting.");
            } else if (computerChoice === "kertas") {
                alert("SERI! Kamu memilih kertas dan komputer memilih kertas.");
            } else {
                alert("MENANG! Kamu memilih kertas dan komputer memilih batu.");
            }
            break;
        case "batu":
            if (computerChoice === "gunting") {
                alert("MENANG! Kamu memilih batu dan komputer memilih gunting.");
            } else if (computerChoice === "kertas") {
                alert("KALAH! Kamu memilih batu dan komputer memilih kertas.");
            } else {
                alert("SERI! Kamu memilih batu dan komputer memilih batu.");
            }
            break;
        default:
            alert("memasukkan pilihan yang salah!");
    }
    // ask player if they want to play again
    var playAgain = confirm("lagi?");
    if (playAgain) {
        playGame();
    } else {
        alert("terima kasih sudah bermain.");
    }
}

// start the game
playGame();
