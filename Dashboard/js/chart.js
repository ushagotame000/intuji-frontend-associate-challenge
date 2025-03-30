var options = {
  series: [
    {
      name: "",
      data: [13, 10, 14, 11, 6, 8, 8],
    },
    {
      name: "",
      data: [5, 6, 9, 5, 6, 7, 5],
    },
  ],
  chart: {
    height: 200,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#F9BA33", "#9457eb"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  yaxis: {
    min: 0,
    max: 20,
    tickAmount: 4,
    labels: {
      formatter: function (value) {
        return value + "k";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
