var pad = function (tar) { }

var testGauge = Gauge(
  document.getElementById("testGauge"),
  {
    max: 100,
    value: 50
  }
);

(function loop()
{
  var testValue = Math.random() * 100;

  testGauge.setValueAnimated(testValue, 1.5);

  window.setTimeout(loop, 4000);
})();