$(document).ready(function () {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: urlBase + '/DataBarras',
        error: function () {
            alert("Error en consulta de datos");
        },
        success: function (data) {
            GraficaBarras(data);
        }
    })
});

function GraficaBarras(data) {

    Highcharts.chart('barras', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'World\'s largest cities per 2017'
        },
        subtitle: {
            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: data,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}