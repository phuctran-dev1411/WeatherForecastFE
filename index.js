// const apiKey = "YOUR_API_KEY_HERE"; // Thay bằng API Key của bạn
// const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

// function checkWeather(city) {
//     // Sử dụng AJAX ($.get) của jQuery
//     $.get(`${apiUrl}${city}&appid=${apiKey}`)
//         .done(function(data) {
//             // Dữ liệu 'data' đã được tự động chuyển thành JSON
            
//             // 1. CẬP NHẬT THỜI TIẾT HIỆN TẠI
//             const currentWeather = data.list[0];
            
//             // Dùng .text(), .attr() thay cho .innerHTML và .src
//             $(".city").text(data.city.name);
//             $(".temp").text(Math.round(currentWeather.main.temp) + "°C");
//             $(".humidity").text(currentWeather.main.humidity + "%");
//             $(".wind").text(currentWeather.wind.speed + " km/h");
//             $(".weather-icon").attr("src", `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`);

//             // 2. XỬ LÝ DỮ LIỆU DỰ BÁO NHIỀU NGÀY
//             const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));
            
//             // Làm sạch danh sách cũ bằng .empty()
//             const $forecastList = $(".forecast-list");
//             $forecastList.empty(); 

//             // Duyệt dữ liệu và thêm mới
//             dailyForecast.forEach(day => {
//                 const date = new Date(day.dt_txt);
//                 const dayName = date.toLocaleDateString('vi-VN', { weekday: 'short' });
//                 const iconCode = day.weather[0].icon;
//                 const temp = Math.round(day.main.temp);

//                 // Nối chuỗi HTML và đẩy thẳng vào danh sách bằng .append()
//                 const listItem = `
//                     <li class="forecast-item">
//                         <span class="day">${dayName}</span>
//                         <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="icon">
//                         <span class="f-temp">${temp}°C</span>
//                     </li>
//                 `;
//                 $forecastList.append(listItem);
//             });
//         })
//         .fail(function(jqXHR) {
//             // Xử lý lỗi (ví dụ: gõ sai tên thành phố)
//             if (jqXHR.status == 404) {
//                 alert("Không tìm thấy thành phố!");
//             } else {
//                 alert("Đã có lỗi xảy ra khi tải dữ liệu.");
//             }
//         });
// }

// // Bắt sự kiện click nút tìm kiếm
// $(".search button").click(function() {
//     const city = $(".search input").val().trim();
//     if (city !== "") {
//         checkWeather(city);
//     }
// });

// // Hỗ trợ nhấn Enter trong ô input
// $(".search input").keypress(function(event) {
//     if (event.key === "Enter") {
//         const city = $(this).val().trim();
//         if (city !== "") {
//             checkWeather(city);
//         }
//     }
// });

$(document).ready(function(){
	$(".search-button").click(function(){
		$(".city").text($(".search-input").val())
	})
})