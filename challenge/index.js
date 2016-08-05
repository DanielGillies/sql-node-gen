// VARS
var fnames = [
"Mike",
"Joe",
"Beth",
"Meghan",
"Dan",
"John",
"Jacob",
"Alex",
"Jen",
"Jackie",
"Jeff",
"Ryan",
"Jeff",
"Erica",
"Eric",
"Jess",
"Matt",
"Chris",
"Robert",
"Miguel",
"DJ",
"Liz",
"Sarah",
"Dengo",
"Johnny",
"Mason",
"William",
"Jayden",
"Noah",
"Ethan",
"Aiden",
"Elijah",
"Joshua",
"Andrew",
"Liam",
"David",
"Jackson",
"Caleb",
"Emma",
"Sophia",
"Isabella",
"Olivia",
"Ava",
"Emily",
"Abigail",
"Aubrey",
"Brooklyn",
"Lillian",
"Victoria"
]
var lnames = [
"Johnson",
"Aaron",
"Arthur",
"Gillies",
"Calderon",
"Brondolo",
"Cruz",
"Prager",
"Auriemma",
"Castilla",
"Chapman",
"Maher",
"Pratt",
"Senter",
"Kempton",
"Calvillo",
"Naify",
"Sadler",
"Mizzi",
"Romano",
"Cosack",
"Roberts",
"Foreman",
"Friedman",
"Smith",
"Williams",
"Jones",
"Brown",
"Davis",
"Miller",
"Wilson",
"Moore",
"Taylor",
"Anderson",
"Thomas",
"Jackson",
"White",
"Harris",
"Martin",
"Thompson",
"Garcia",
"Martinez",
"Clark",
"Lewis",
"Lee",
"Hall",
"Allen"

]

var count = 0;

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.sqlite');
var johns = [];
var fn;

db.serialize(function() {

db.run("CREATE TABLE if not exists user_info (full_name TEXT, email TEXT, city TEXT)");


db.exec("BEGIN");
 for (var i = 0; i < 10000000; i++) {
 var stmt = db.prepare("INSERT INTO user_info VALUES($name, $email, $city)", {
    $name:generateName(),
    $email: 'FF',
    $city: "WEFWEF"
})
  stmt.finalize();
  }

 db.exec("COMMIT")

  // db.each("SELECT rowid AS id, full_name FROM user_info", function(err, row) {
  //     console.log(row.id + ": " + row.full_name);
  // });
console.log("DONE");
db.each("SELECT rowid AS id, full_name FROM user_info WHERE full_name LIKE '%John%'", function(err, row) {
    // console.log(row.id + ": " + row.full_name);
    count++;
});
});
db.close();

function generateName() {
     fn = fnames[Math.floor(Math.random()*fnames.length)];
return fn + " " + lnames[Math.floor(Math.random()*lnames.length)]
}
