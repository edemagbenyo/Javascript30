// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

let inv_1500 = inventors.filter(i => i.year >= 1500 && i.year < 1600);
console.table(inv_1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let first_last = inventors.map(i => `${i.first} - ${i.last}`);
console.table(first_last);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let sort_birth = inventors.sort((first, last) => last.year - first.year);
console.table(sort_birth);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let year_lived = inventors.reduce((acc, nxt) => {
  return acc + (nxt.passed - nxt.year);
}, 0);
console.log(year_lived);
// 5. Sort the inventors by years lived
let year_lived_sort = inventors.sort((first, last) => {
  return first.passed - first.year - (last.passed - last.year);
});

console.table(year_lived_sort);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// let boulevards_de = boulevards.map(i => i);

// 7. sort Exercise
// Sort the people alphabetically by last name
let last_name_alpha = people.map(i => i.split(", ")[1]).sort();
console.table(last_name_alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

let sumed = data.reduce((acc,nxt)=>{
     (acc[nxt])?acc[nxt]++ : acc[nxt] = 1;
     return acc;
},{})
console.table(sumed);