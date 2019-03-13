a = require("ascii-art")
r = require("readline")
rl = r.createInterface({
	input: process.stdin,
	output: process.stdout
})
var big = function(t, f) {
a.font(t.split(" ").join("   "), "Doom", function(rendered) {
	console.log(rendered)
	if (f) f()
})
}
big("Welcome to JSVenture!")
function cyc() {
console.log("-----------------------------------------------------------------------------------------------------------------------------")
console.log("|          ___                 |                              |                              |                              |")
console.log("|         |   |                |                              |                              |                              |")
console.log("|         |___|                |                              |                              |                              |")
console.log("|            \\ \\               |                              |                              |                              |")
console.log("|             \\ \\              |                              |                              |                              |")
console.log("|              \\ \\             |                              |                              |                              |")
console.log("|               \\_\\            |                              |                              |                              |")
console.log("|                              |                              |                              |                              |")
console.log("|                              |                              |                              |                              |")
console.log("|                              |                              |                              |                              |")
console.log("|                              |                              |                              |                              |")
console.log("|------------------------------+------------------------------+------------------------------+------------------------------|")
console.log("|         Necromancer          |                              |                              |                              |")
console.log("|             16HP             |                              |                              |                              |")
console.log("|       Can Spawn Zombies      |                              |                              |                              |")
console.log("|                              |                              |                              |                              |")
console.log("-----------------------------------------------------------------------------------------------------------------------------")
rl.question("\n* ", function(a) {
	eval(a.toLowerCase() + "()")
})
}
function necromancer() {
	console.log("oo tasty")
}
big("Choose Your Character!", cyc)
