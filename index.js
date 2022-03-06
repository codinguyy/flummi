var pad = function(tar) {}

     

      var gauge3 = Gauge(
        document.getElementById("gauge3"),
		    {
          max: 100,
          value: 50
        }
      );

     

      (function loop() {
        var 
            value3 = Math.random() * 100;

        gauge3.setValueAnimated(value3, 1.5);

        window.setTimeout(loop, 4000);
      })();