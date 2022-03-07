window.onload = function ()
{
  var opts =
  {
    angle: -0.3,
    lineWidth: 0.15,
    radiusScale: 1.0,
    pointer: {
      length: 0.0,
      strokeWidth: 0.00,
      color: '#FFFFFF'
    },
    limitMax: true,
    limitMin: true,
    colorStart: '#ff0000',
    colorStop: '#ff0000',
    strokeColor: '#4b4b4b',
    generateGradient: true,
    highDpiSupport: true,
  };

  Array.from(document.getElementsByClassName('gaugeHolder')).forEach((canvas) =>
  {
    var gauge = new Gauge(canvas).setOptions(opts);

    gauge.maxValue = 100;
    gauge.setMinValue(0);
    gauge.animationSpeed = 128;
    gauge.set(76);
  });
}