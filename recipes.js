const tests = [
  { date: "2026-09-20", wpm: 32, accuracy: 91 },
  { date: "2026-09-21", wpm: 36, accuracy: 94 },
  { date: "2026-09-22", wpm: 29, accuracy: 88 },
  { date: "2026-09-23", wpm: 40, accuracy: 95 },
];

console.log(tests.filter(t => t.accuracy < 92).map(t => t.date));

//output [ 2023-9-20, false, 2026-9-22, false];



console.log(tests.reduce((sum, t) => sum + t.accuracy ,0));



const fastTests = (tests)=> tests.filter (t => t.wpm>35);