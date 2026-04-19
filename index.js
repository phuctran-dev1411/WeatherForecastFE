$(document).ready(function () {
  // const API_KEY = '';

  const cityCoordinates = {
    "ha noi": { lat: 21.0285, lon: 105.8542 },
    "ho chi minh": { lat: 10.7626, lon: 106.6601 },
    "da nang": { lat: 16.0678, lon: 108.2208 },
    "hai phong": { lat: 20.8449, lon: 106.6881 },
    "can tho": { lat: 10.0452, lon: 105.7469 },
    "cao bang": { lat: 22.6667, lon: 106.25 }, // Bạn có thể thêm các tỉnh khác theo format này
  };

  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str.trim().toLowerCase();
  }

  $("#searchBtn").click(function () {
    let city = $("#cityInput").val().trim();
    if (city !== "") {
      getWeather(city);
    }
  });

  $("#cityInput").keypress(function (e) {
    if (e.which == 13) {
      let city = $("#cityInput").val().trim();
      if (city !== "") {
        getWeather(city);
      }
    }
  });

  function getWeather(city) {
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=vi`;
    // let normalizedCity = removeVietnameseTones(cityInput);
    // let apiUrl = "";

    // if (cityCoordinates[normalizedCity]) {
    //   let lat = cityCoordinates[normalizedCity].lat;
    //   let lon = cityCoordinates[normalizedCity].lon;
    //   apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=vi`;
    // } else {
    //   apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric&lang=vi`;
    // }

    $("#errorMsg").hide();

    $("#cityName").text("ho chi minh");
    $("#temp").text(36);
    $("#description").text("nhiet do");
    $("#humidity").text(`5%`);
    $("#windSpeed").text(`3 m/s`);
    $("#pressure").text(`2 hPa`);
    $("#weatherResult").fadeIn(400);
    // $.ajax({
    //   url: apiUrl,
    //   type: "GET",
    //   dataType: "json",
    //   success: function (response) {
    //     // Parse dữ liệu từ JSON trả về
    //     const temp = Math.round(response.main.temp);
    //     const humidity = response.main.humidity;
    //     const windSpeed = response.wind.speed;
    //     const pressure = response.main.pressure;
    //     const desc = response.weather[0].description;
    //     const iconCode = response.weather[0].icon;
    //     const displayName = cityCoordinates[normalizedCity]
    //       ? cityInput.toUpperCase()
    //       : response.name;

    //     $("#cityName").text(displayName);
    //     $("#temp").text(temp);
    //     $("#description").text(desc);
    //     $("#humidity").text(`${humidity}%`);
    //     $("#windSpeed").text(`${windSpeed} m/s`);
    //     $("#pressure").text(`${pressure} hPa`);

    //     $("#wIcon").attr(
    //       "src",
    //       `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
    //     );

    //     $("#weatherResult").fadeIn(400);
    //   },
    //   error: function (xhr) {
    //     $("#weatherResult").hide();
    //     $("#errorMsg").show();
    //   },
    // });
  }
});
