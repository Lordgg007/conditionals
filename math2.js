let user = prompt("would you like to turn the machine on ??")

if(user == 'yes') {let pass = prompt("pls insert your score")
    if (pass < 19) {
        alert ("That was a terrible score — total fail!")
    } else if (pass === 20 || pass <= 39) {
        alert ("You know some things, but it\'s a pretty bad score. Needs improvement")
    } else if (pass === 40 || pass <= 69) {
        alert("You did a passable job, not bad!")
    } else if (pass === 70 || pass <= 89) {
        alert("That\'s a great score, you really know your stuff")
    } else if (pass === 90 || pass <= 100) {
        alert("What an amazing score! Did you cheat? Are you for real?")
    } else if(pass < 0 || pass > 100) {
        alert("pls enter a valid score")
    }
} else if (user == 'no' || 'nope') {
    alert("see you later UwU")
};