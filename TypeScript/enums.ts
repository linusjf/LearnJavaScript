const enum NinjaActivity { 
  Espionage , 
  Sabotage, 
  Assassination } 
let myFavoriteNinjaActivity = NinjaActivity.Espionage; 
console.log(myFavoriteNinjaActivity); 
console.log(NinjaActivity["Sabotage"]);

enum PirateActivity { 
  Boarding, 
  Drinking, 
  Fencing 
}
let myFavoritePirateActivity = PirateActivity.Boarding; 
console.log(myFavoritePirateActivity); 
console.log(PirateActivity["Drinking"]); 
console.log(PirateActivity[myFavoritePirateActivity]);
enum Day { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };
let bestDay: Day = Day.Saturday; 
console.log(bestDay);
enum TenPlus { Ten = 10, Eleven, Twelve };
console.log(TenPlus);
enum MyOddSet { Three = 3, Five = 5, Seven = 7, Nine = 9 };
console.log(MyOddSet);
