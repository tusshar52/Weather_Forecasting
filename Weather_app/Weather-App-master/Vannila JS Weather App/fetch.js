class Fetch {
  async getCurrent(input) {
    const myKey = "da1edc5d1396921ef6b987f546290cb2";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
