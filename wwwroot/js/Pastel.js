$(document).ready(function () {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: urlBase + '/DataPastel',
        error: function () {
            alert("Error en consulta de datos");
        },
        success: function (data) {
            GraficaPastel(data);
        }
    })
});

function GraficaPastel(data) {

    Highcharts.chart('pastel', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Most used Frameworks by 2020'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Frameworks',
            colorByPoint: true,
            data: data
        }]
    });
}