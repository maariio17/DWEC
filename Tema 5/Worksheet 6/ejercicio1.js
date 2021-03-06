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


//Grafica de barras

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Votos', 'Votos',],
        ['PSOE', 6752983],
        ['PP', 5019869],
        ['VOX', 3640063],
        ['UP', 3097185],
        ['ERC', 869934],
        ['Cs', 1637540],
        ['Junts', 527375],
        ['PNV', 377423],
        ['Bildu', 276519],
        ['Más País', 577055],
        ['CUP', 244754],
        ['CC', 123891],
        ['NA+', 98448],
        ['BNG', 119597],
        ['PRC', 68580],
        ['Teruel Existe', 19696]
      ]);

      var options = {
        title: 'Votos Elecciones Generales 2019',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Votos',
          minValue: 0
        },
        vAxis: {
          title: 'Elecciones Generales 2019'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }