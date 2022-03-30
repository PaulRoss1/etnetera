// Graph Settings

const labels = [
  "8:00",
  "",
  "9:00",
  "",
  "10:00",
  "",
  "11:00",
  "",
  "12:00",
  "",
  "13:00",
  "",
  "14:00",
  "",
  "15:00",
  "",
  "16:00",
  "",
  "17:00",
  "",
  "18:00",
  "",
  "19:00",
  "",
  "20:00",
  "",
  "21:00",
  "",
  "22:00",
];
const data = [
  2, 5, 4, 3, 1, 2, 3, 10, 9, 8, 5, 4, 3, 1, 2, 4, 3, 8, 6, 7, 8, 8, 4, 4, 3, 7,
  4, 3, 2,
];

const backgroundColors = [];

function addColor(num) {
  if (num < 4) {
    backgroundColors.push("#e5b18b");
  }
  if (num <= 7 && num >= 4) {
    backgroundColors.push("#df7e61");
  }
  if (num > 7) {
    backgroundColors.push("#cf461e");
  }
}

for (i = 0; i < data.length; i++) {
  addColor(data[i]);
}

new Chart(document.getElementById("myChart"), {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: ["Visitors"],
        data: data,
        backgroundColor: backgroundColors,
        borderRadius: 20,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
    },
    plugins: { legend: { display: false } },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
});

// Mail Form

let mail = document.getElementById("mail");

mail.addEventListener("click", function (event) {
  document.getElementById("mail-form").style.display = "block";
});

let closeMail = document.getElementById("close-mail");

closeMail.addEventListener("click", function (event) {
  document.getElementById("mail-form").style.display = "none";
});
