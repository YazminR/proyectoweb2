      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Consumo', 'Porciento'],
          ['Whatsapp',     70],
          ['Facebook',     20],
          ['Retrica',  10]
        ]);
         var options = {
          title: 'Mi consumo de datos: Whatsapp, Facebook, Retrica',
          is3D: true,};
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
