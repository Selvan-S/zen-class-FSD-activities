async function getData(url = "https://restcountries.com/v3.1/all", data = {}) {
  const response = fetch(url, {
    method: "GET",
  });
  const data = response.json();
  console.log(data);
}
