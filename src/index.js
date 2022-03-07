// https://github.com/naikus/svg-gauge
// https://www.cssscript.com/demo/animated-svg-gauge/



var gaugeCpuUtilization = Gauge(document.getElementById("gaugeCpuUtilization"),
{
  max: 100,
  value: 0,
  color: function (value)
  {
    if (value < (0.7 * this.max))
    {
       return "#5ee432"; // green
    } 
    if (value < (0.8 * this.max))
    {
      return "#fffa50"; // yellow
    }
    if (value < (0.9 * this.max))
    {
      return "#f7aa38"; // orange
    }

    return "#ef4655"; // red
  },
  label: function (value)
  {
    return Math.round(value) + " %";
  }
});

var gaugeCpuWattage = Gauge(document.getElementById("gaugeCpuWattage"),
{
  max: 105,
  value: 0,
  color: function (value)
  {
    if (value < (0.7 * this.max))
    {
       return "#5ee432"; // green
    } 
    if (value < (0.8 * this.max))
    {
      return "#fffa50"; // yellow
    }
    if (value < (0.9 * this.max))
    {
      return "#f7aa38"; // orange
    }

    return "#ef4655"; // red
  },
  label: function (value)
  {
    return Math.round(value) + " W";
  }
});

var gaugeCpuTemperature = Gauge(document.getElementById("gaugeCpuTemperature"),
{
  max: 105,
  value: 0,
  color: function (value)
  {
    if (value < (0.7 * this.max))
    {
       return "#5ee432"; // green
    } 
    if (value < (0.8 * this.max))
    {
      return "#fffa50"; // yellow
    }
    if (value < (0.9 * this.max))
    {
      return "#f7aa38"; // orange
    }

    return "#ef4655"; // red
  },
  label: function (value)
  {
    return Math.round(value) + " °C";
  }
});

var gaugeCpuMemory = Gauge(document.getElementById("gaugeCpuMemory"),
{
  max: 32768,
  value: 0,
  color: function (value)
  {
    if (value < (0.7 * this.max))
    {
       return "#5ee432"; // green
    } 
    if (value < (0.8 * this.max))
    {
      return "#fffa50"; // yellow
    }
    if (value < (0.9 * this.max))
    {
      return "#f7aa38"; // orange
    }

    return "#ef4655"; // red
  },
  label: function (value)
  {
    return (Math.round(((value/1024) + Number.EPSILON) * 10) / 10) + " GiB";
  }
});





var gaugeGpuUtilization = Gauge(document.getElementById("gaugeGpuUtilization"),
{
  max: 100,
  value: 0,
  color: function (value)
  {
    if (value < (0.7 * this.max))
    {
       return "#5ee432"; // green
    } 
    if (value < (0.8 * this.max))
    {
      return "#fffa50"; // yellow
    }
    if (value < (0.9 * this.max))
    {
      return "#f7aa38"; // orange
    }

    return "#ef4655"; // red
  },
  label: function (value)
  {
    return Math.round(value) + " %";
  }
});

var gaugeGpuWattage = Gauge(document.getElementById("gaugeGpuWattage"),
{
  max: 230,
  value: 0,
  color: function (value)
  {
    if (value < (0.7 * this.max))
    {
       return "#5ee432"; // green
    } 
    if (value < (0.8 * this.max))
    {
      return "#fffa50"; // yellow
    }
    if (value < (0.9 * this.max))
    {
      return "#f7aa38"; // orange
    }

    return "#ef4655"; // red
  },
  label: function (value)
  {
    return Math.round(value) + " W";
  }
});

var gaugeGpuTemperature = Gauge(document.getElementById("gaugeGpuTemperature"),
{
  max: 105,
  value: 0,
  color: function (value)
  {
    if (value < (0.7 * this.max))
    {
       return "#5ee432"; // green
    } 
    if (value < (0.8 * this.max))
    {
      return "#fffa50"; // yellow
    }
    if (value < (0.9 * this.max))
    {
      return "#f7aa38"; // orange
    }

    return "#ef4655"; // red
  },
  label: function (value)
  {
    return Math.round(value) + " °C";
  }
});

var gaugeGpuMemory = Gauge(document.getElementById("gaugeGpuMemory"),
{
  max: 8192,
  value: 0,
  color: function (value)
  {
    if (value < (0.7 * this.max))
    {
       return "#5ee432"; // green
    } 
    if (value < (0.8 * this.max))
    {
      return "#fffa50"; // yellow
    }
    if (value < (0.9 * this.max))
    {
      return "#f7aa38"; // orange
    }

    return "#ef4655"; // red
  },
  label: function (value)
  {
    return (Math.round(((value/1024) + Number.EPSILON) * 10) / 10) + " GiB";
  }
});



(function loop()
{
  gaugeCpuUtilization.setValueAnimated(Math.random() * 100, 1.5);
  gaugeCpuWattage.setValueAnimated(Math.random() * 105, 1.5);
  gaugeCpuTemperature.setValueAnimated(Math.random() * 105, 1.5);
  gaugeCpuMemory.setValueAnimated(Math.random() * 32768, 1.5);


  gaugeGpuUtilization.setValueAnimated(Math.random() * 100, 1.5);
  gaugeGpuWattage.setValueAnimated(Math.random() * 105, 1.5);
  gaugeGpuTemperature.setValueAnimated(Math.random() * 105, 1.5);
  gaugeGpuMemory.setValueAnimated(Math.random() * 8192, 1.5);


  window.setTimeout(loop, 4000);
})();