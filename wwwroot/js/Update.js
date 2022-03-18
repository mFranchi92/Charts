$(document).ready(function () {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: urlBase + '/DataUpdate',
        error: function () {
            alert("Error en consulta de datos");
        },
        success: function (data) {
            GraficaUpdate(data);
        }
    })
});

function GraficaUpdate(data) {

    const chart = Highcharts.chart('update', {
        title: {
            text: 'Year Index'
        },
        subtitle: {
            text: 'Plain'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            showInLegend: false
        }]
    });

    document.getElementById('plain').addEventListener('click', () => {
        chart.update({
            chart: {
                inverted: false,
                polar: false
            },
            subtitle: {
                text: 'Plain'
            }
        });
    });

    document.getElementById('inverted').addEventListener('click', () => {
        chart.update({
            chart: {
                inverted: true,
                polar: false
            },
            subtitle: {
                text: 'Inverted'
            }
        });
    });

    document.getElementById('polar').addEventListener('click', () => {
        chart.update({
            chart: {
                inverted: false,
                polar: true
            },
            subtitle: {
                text: 'Polar'
            }
        });
    });
}
