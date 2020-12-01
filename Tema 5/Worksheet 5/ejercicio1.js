google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Elecciones Generales'],
            ['PSOE', 120],
            ['PP', 89],
            ['VOX', 52],
            ['UP', 35],
            ['ERC', 13],
            ['Cs', 10],
            ['Junts', 8],
            ['PNV', 6],
            ['Bildu', 5],
            ['Más País', 3],
            ['CUP', 2],
            ['CC', 2],
            ['NA+', 2],
            ['BNG', 1],
            ['PRC', 1],
            ['Teruel Existe', 1]
        ]);

        var options = {
          title: 'Elecciones Generales 2019',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('eleccionesGenerales'));
        chart.draw(data, options);
      }