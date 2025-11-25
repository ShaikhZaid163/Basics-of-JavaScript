const marvel_heros = ["THOR", "IRONMAN", "HULK"]   
const dc_heros = ["SUPERMAN", "BATMAN", "FLASH", ]

const all_heros = marvel_heros.concat(dc_heros) // used to merge the two arrays
//console.log(all_heros);

const new_all_heros = [...marvel_heros, ...dc_heros]
console.log(new_all_heros);


console.log(Array.isArray("Zaid"));
console.log(Array.from("Zaid"));

console.log(Array.from({name: "Zaid"})); // interview question
