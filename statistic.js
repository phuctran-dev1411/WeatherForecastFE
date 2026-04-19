$(document).ready(function () {  
  const currentTemp = 18; 
  const currentRain = 5; 
  const currentHumidity = 82; 
  const cloudCover = "Nhiều mây"; 

  $("#cardTemp").text(currentTemp + "°C");
  $("#cardRain").text(currentRain + " mm");
  $("#cardHumidity").text(currentHumidity + "%");
  $("#cardSkyText").text(cloudCover);

  const skyIcon = $("#cardSkyIcon");
  if (cloudCover.includes("mưa")) {
    skyIcon.attr("class", "fas fa-cloud-showers-heavy fa-2x text-primary mb-2");
  } else if (cloudCover.includes("Nhiều mây")) {
    skyIcon.attr("class", "fas fa-cloud fa-2x text-secondary mb-2");
  } else if (cloudCover.includes("Ít mây")) {
    skyIcon.attr("class", "fas fa-cloud-sun fa-2x text-warning mb-2");
  } else {
    skyIcon.attr("class", "fas fa-sun fa-2x text-warning mb-2");
  }

   const labels = [
    "01/01",
    "02/01",
    "03/01",
    "04/01",
    "05/01",
    "06/01",
    "07/01",
    "08/01",
    "09/01",
    "10/01",
    "11/01",
    "12/01",
    "13/01",
    "14/01",
    "15/01",
    "16/01",
    "17/01",
    "18/01",
    "19/01",
    "20/01",
    "21/01",
    "22/01",
    "23/01",
    "24/01",
    "25/01",
    "26/01",
    "27/01",
    "28/01",
    "29/01",
    "30/01",
  ];

  const tempData = [
    14, 15, 15, 16, 18, 19, 21, 20, 17, 15, 14, 13, 12, 14, 15, 17, 18, 19, 21,
    22, 20, 18, 16, 15, 14, 13, 15, 16, 17, 18,
  ];

  const rainData = [
    0, 0, 0, 2, 15, 5, 0, 0, 0, 0, 0, 0, 8, 12, 0, 0, 0, 0, 0, 0, 25, 10, 0, 0,
    0, 0, 0, 0, 5, 0,
  ];

  const tempCtx = document.getElementById("tempChart").getContext("2d");
  new Chart(tempCtx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Nhiệt độ trung bình (°C)",
          data: tempData,
          borderColor: "#e74c3c",
          backgroundColor: "rgba(231, 76, 60, 0.1)",
          borderWidth: 3,
          pointBackgroundColor: "#c0392b",
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.4, // Tạo độ cong mềm mại cho đường biểu đồ
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.parsed.y + " °C";
            },
          },
        },
      },
      scales: {
        y: {
          suggestedMin: 10, // Cố định mốc dưới để biểu đồ không bị sát đáy
          suggestedMax: 25,
        },
      },
    },
  });

  const rainCtx = document.getElementById("rainChart").getContext("2d");
  new Chart(rainCtx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Lượng mưa (mm)",
          data: rainData,
          backgroundColor: "#3498db",
          hoverBackgroundColor: "#2980b9",
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.parsed.y + " mm";
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 30,
        },
      },
    },
  });
}
);
