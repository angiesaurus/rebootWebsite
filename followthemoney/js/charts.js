google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
  var fergusonPieData = google.visualization.arrayToDataTable([
          ['Race', 'Population'],
          ['White', 6206],
          ['Other', 14997]
        ]);
  var sanJosePieData =
  google.visualization.arrayToDataTable([
          ['Race', 'Population'],
          ['White', 404863],
          ['Other', 541078]
        ]);

  buildPie(fergusonPieData, 'chart1_3');
  buildPie(sanJosePieData, 'chart2_3');

  function buildPie(data, id){
    var options = {
          title: 'Population by Race',
          colors: ['#674730', '#19BC9C']
        };
        var chart = new google.visualization.PieChart(document.getElementById(id));

        chart.draw(data, options);
  }
  var dataSanJose = google.visualization.arrayToDataTable([
        ['City', 'Total Revenue'],
        ['San Jose, CA', 396929806]
      ]);
  
  var dataSanJoseFFF = google.visualization.arrayToDataTable([
        ['City', 'Fines, Forfeitures, Fees'],
        ['San Jose, CA', 6411171]
      ]);
  
      var dataFerguson = google.visualization.arrayToDataTable([
            ['City', 'Total Revenue'],
            ['Ferguson, MO', 12700000]
          ]);
  
     var dataFergusonFFF = google.visualization.arrayToDataTable([
            ['City', 'Fines, Forfeitures, Fees'],
            ['Ferguson, MO', 2500000]
          ]);

      buildBarChart(dataFerguson, 'chart1', 500000000, 'Total Revenue');
      buildBarChart(dataSanJose, 'chart2', 500000000, 'Total Revenue')
      buildBarChart(dataFergusonFFF, 'chart1_2', 25000000, 'Revenue from Court Fees, Fines, and Forfeitures')
      buildBarChart(dataSanJoseFFF, 'chart2_2', 25000000, 'Revenue from Court Fees, Fines, and Forfeitures')
    }

function buildBarChart(data, id, max, title){
  var options = {
        chartArea: {width: '100%'},
        hAxis: {
          viewWindow: {
              min: 0,
              max: max
          },
          title: title,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          titleTextStyle: {
            bold: true,
            fontSize: 18,
            color: '#4d4d4d'
          }
        },
        vAxis: {
          title: 'City',
          textStyle: {
            fontSize: 14,
            bold: true,
            color: '#848484'
          },
          titleTextStyle: {
            fontSize: 14,
            bold: true,
            color: '#200200'
          }
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById(id));
      chart.draw(data, options);
}