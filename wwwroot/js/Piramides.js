$(document).ready(function () {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: urlBase + '/DataPiramide',
        error: function () {
            alert("Error en consulta de datos");
        },
        success: function (data) {
            GraficaPiramide(data);
        }
    })
});

function GraficaPiramide(data) {

    Highcharts.chart('piramide', {
        chart: {
            type: 'pyramid'
        },
        title: {
            text: 'Satisfaction index',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    softConnector: true
                },
                center: ['40%', '50%'],
                width: '80%'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: data
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    plotOptions: {
                        series: {
                            dataLabels: {
                                inside: true
                            },
                            center: ['50%', '50%'],
                            width: '100%'
                        }
                    }
                }
            }]
        }
    });
}