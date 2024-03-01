// Comparing two JSON
let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let flag = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (key in obj1) {
    if (obj1[key] == obj2[key]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
} else {
  flag = false;
}
console.log("Are the two JSON objects identical? " + flag);

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);

  // display all the country flags in the console
  for (let i = 0; i < data.length; i++) {
    const countryFlag = data[i].flag;
    console.log(countryFlag);
  }

  //   Use the same rest countries and print all countries names, regions, sub-region and populations
  for (let i = 0; i < data.length; i++) {
    const countryName = data[i].name.official;
    const region = data[i].region;
    const subRegion = data[i].subregion;
    const population = data[i].population;
    console.log(`
            Country Name : ${countryName} | Region : ${region} | subRegion : ${subRegion} | population : ${population}
          `);
  }
};
