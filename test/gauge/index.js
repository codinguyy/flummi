var pad = function (tar) { }

var testGauge = Gauge(
  document.getElementById("testGauge"),
  {
    max: 100,
    value: 50,
    color: function (value) {
      if (value < 60) {
        return "#5ee432"; // green
      } else if (value < 70) {
        return "#fffa50"; // yellow
      } else if (value < 90) {
        return "#f7aa38"; // orange
      } else {
        return "#ef4655"; // red
      }
    },
    label: function (value) {
      return Math.round(value) + " °C";
    }
  }
);

(function loop() {
  var testValue = Math.random() * 100;

  testGauge.setValueAnimated(testValue, 1.5);

  window.setTimeout(loop, 4000);
})();