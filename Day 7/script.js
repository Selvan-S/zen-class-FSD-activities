let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);

  // Get all the countries from Asia continent 'region using Filter function
  const asia_countries = data
    .map((val, index) => {
      return [val.continents, val.name.official, index];
    })
    .filter((val) => val[0] == "Asia")
    .map((val) => val[1]);
  console.log(
    "------------- All the countries from Asia continent -------------"
  );
  asia_countries.forEach((element) => {
    console.log(element);
  });

  // Get all the countries with a population of less than 2 lakhs using Filter function
  const countries_population_less_than_twoLakhs = data
    .map((val, index) => {
      return [val.population, val.name.official, index];
    })
    .filter((val) => val[0] < 200000)
    .map((val) => val[1]);
  console.log();
  console.log(
    "-------- All the countries with a population of less than 2 lakhs ----------"
  );
  countries_population_less_than_twoLakhs.forEach((element) => {
    console.log(element);
  });
  console.log();

  // Print the following details name, capital, flag. using forEach function
  console.log(
    "--------- All the countries of following details: name, capital ----------"
  );
  data.forEach((element) => {
    console.log(`
    Name: ${element.name.common}
    Capital: ${element.capital}
    Flag: ${element.flag}`);
  });
  console.log();

  // Print the total population of countries using reduce function
  const total_population_of_countries = data
    .map((val, index) => {
      return [val.population, index];
    })
    .reduce((acc, val) => {
      acc += val[0];
      return acc;
    }, 0);
  console.log("-------- The total population of countries ----------");
  console.log("Total population of countries: ", total_population_of_countries);
  console.log();

  // Print the country that uses US dollars as currency.
  const country_uses_US_dollars = data
    .map((val, index) => {
      return [val.currencies, val.name.official, index];
    })
    .filter((val, index) => {
      for (const key in val[0]) {
        for (const name in data[index]["currencies"][key]) {
          if (name == "name") {
            return (
              data[index]["currencies"][key][name] == "United States dollar"
            );
          }
        }
      }
    });
  console.log("--------- Country that uses US dollars as currency -----------");
  country_uses_US_dollars.forEach((element) => {
    console.log(element[1]);
  });
};
