google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Viajeros Internacionales'],
      ['France', 89400000],
      ['Spain', 82773000],
      ['United States', 79618000],
      ['China', 62900000],
      ['Italy', 62146000],
      ['Turkey', 45768000],
      ['Mexico', 41447000],
      ['Germany', 38881000],
      ['Thailand', 38277000],
      ['United Kingdom', 36316000],
      ['Japan', 31192000],
      ['Austria', 30816000],
      ['Greece', 30123000],
      ['Russia', 24551000],
      ['Portugal', 22800000],
      ['Canada', 21134000],
      ['Poland', 19623000],
      ['Netherland', 19014000],
      ['India', 17427000],
      ['Hungary', 17152000],
      ['Croatia', 16645000],
      ['Emir. Árabes Unidos', 15920000]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }