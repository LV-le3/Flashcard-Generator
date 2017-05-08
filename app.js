
// Referencing folders that contain constructors
var basic = require("./BasicCard.js");

var cloze = require("./ClozeCard.js") 


// Basic flashcards and starting the constructors that are references from the basic variable
var book = new basic("Who is Harry Potter's red headed best friend?","Ron Weasley");
var signs = new basic("What is Severus Snape's zodiac sign?","Capricorn");
var food = new basic("What is a knickerbocker glory?", "Sundae");
var hair = new basic("What is the color of Draco Malfoy's hair?","Platinum blonde");

// Close flashcards and starting the constructors that are references from the basic variable
var dessert = new cloze("Treacle Tart", "is Harry Potter's dessert");
var height = new cloze("Short", "is a distinguishing height feature feature of Cho Chang ");
var candy = new cloze("Lemmon Drops", " is Dumbledore's password to his office");

// Calling the basic flashcards
book.printStats();
signs.printStats();
food.printStats();
hair.printStats();

// Calling the close flashcards
dessert.printStats();
height.printStats();
candy.printStats();