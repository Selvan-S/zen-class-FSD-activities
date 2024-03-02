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

  // Display all the country flags, names, regions, sub-region and populations in the HTML table

  function tableCreate() {
    const body = document.body,
      tbl = document.createElement("table");
    tbl.style.width = "auto";
    tbl.style.border = "1px solid black";
    tbl.style.textAlign = "center";
    tbl.style.margin = "1rem auto";
    let header = tbl.createTHead();
    let row = header.insertRow(0);
    for (let i = 0; i <= 5; i++) {
      let cell = row.insertCell(i);
      if (i == 0) {
        cell.innerHTML = "<center><b>No.</b></center>";
      } else if (i == 1) {
        cell.innerHTML = "<center><b>Country</b></center>";
      } else if (i == 2) {
        cell.innerHTML = "<center><b>Region</b></center>";
      } else if (i == 3) {
        cell.innerHTML = "<center><b>Sub Region</b></center>";
      } else if (i == 4) {
        cell.innerHTML = "<center><b>Population</b></center>";
      } else {
        cell.innerHTML = "<center><b>Flag</b></center>";
      }
      cell.style.border = "1px solid black";
    }
    for (let i = 0; i < data.length; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j <= 5; j++) {
        if (i === data.length && j === 4) {
          break;
        } else {
          const td = tr.insertCell();
          if (j === 0) {
            td.appendChild(document.createTextNode(`${i + 1}`));
          } else if (j === 1) {
            td.appendChild(document.createTextNode(`${data[i].name.official}`));
          } else if (j === 2) {
            td.appendChild(document.createTextNode(`${data[i].region}`));
          } else if (j === 3) {
            td.appendChild(document.createTextNode(`${data[i].subregion}`));
          } else if (j === 4) {
            td.appendChild(document.createTextNode(`${data[i].population}`));
          } else {
            td.appendChild(document.createTextNode(`${data[i].flag}`));
          }
          td.style.border = "1px solid black";
        }
      }
    }
    body.appendChild(tbl);
  }

  tableCreate();
};
