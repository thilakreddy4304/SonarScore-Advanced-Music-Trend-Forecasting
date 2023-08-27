function showDancepairsChart() {
    let data = new google.visualization.DataTable();
    data.addColumn('number', 'popularity');
     data.addColumn('number', 'danceability');
     data.addRows(dance_pairs);

    let options = {
        height: 500,
        chart: {
            title: 'Scatterplot of Dancebaility and Popularity'
        },
        hAxis: {title: 'Popularity'},
        vAxis: {title: 'Dancebaility'},
    };

    let chart = new google.charts.Scatter(document.getElementById('chart1'));
    chart.draw(data, google.charts.Scatter.convertOptions(options));
}

function showEnergypairsChart() {
    let data = new google.visualization.DataTable();
    data.addColumn('number', 'popularity');
     data.addColumn('number', 'energy');
     data.addRows(energy_pairs);

    let options = {
        height: 500,
        chart: {
            title: 'Scatterplot of Energy and Popularity'
        },
        hAxis: {title: 'Popularity'},
        vAxis: {title: 'Energy'},
    };

    let chart = new google.charts.Scatter(document.getElementById('chart2'));
    chart.draw(data, google.charts.Scatter.convertOptions(options));
}

function showLoudnesspairsChart() {
    let data = new google.visualization.DataTable();
    data.addColumn('number', 'popularity');
     data.addColumn('number', 'loudness');
     data.addRows(loudness_pairs);

    let options = {
        height: 500,
        chart: {
            title: 'Scatterplot of Loudness and Popularity'
        },
        hAxis: {title: 'Popularity'},
        vAxis: {title: 'Loudness'},
    };

    let chart = new google.charts.Scatter(document.getElementById('chart3'));
    chart.draw(data, google.charts.Scatter.convertOptions(options));
}

function showLivenesspairsChart() {
    let data = new google.visualization.DataTable();
    data.addColumn('number', 'popularity');
     data.addColumn('number', 'liveness');
     data.addRows(liveness_pairs);

    let options = {
        height: 500,
        chart: {
            title: 'Scatterplot of Liveness and Popularity'
        },
        hAxis: {title: 'Popularity'},
        vAxis: {title: 'Liveness'},
    };

    let chart = new google.charts.Scatter(document.getElementById('chart4'));
    chart.draw(data, google.charts.Scatter.convertOptions(options));
}


function showSpeechinesspairsChart() {
    let data = new google.visualization.DataTable();
    data.addColumn('number', 'popularity');
     data.addColumn('number', 'spechiness');
     data.addRows(speechiness_pairs);

    let options = {
        height: 500,
        chart: {
            title: 'Scatterplot of Speechiness and Popularity'
        },
        hAxis: {title: 'Popularity'},
        vAxis: {title: 'Speechiness'},
    };

    let chart = new google.charts.Scatter(document.getElementById('chart5'));
    chart.draw(data, google.charts.Scatter.convertOptions(options));
}


function showInstrumentalnesspairsChart() {
    let data = new google.visualization.DataTable();
    data.addColumn('number', 'popularity');
     data.addColumn('number', 'intrumentalness');
     data.addRows(instrumentalness_pairs);

    let options = {
        height: 500,
        chart: {
            title: 'Scatterplot of Instrumentalness and Popularity'
        },
        hAxis: {title: 'Popularity'},
        vAxis: {title: 'Instrumentalness'},
    };

    let chart = new google.charts.Scatter(document.getElementById('chart6'));
    chart.draw(data, google.charts.Scatter.convertOptions(options));
}


function showTableChart() {
     let data = new google.visualization.DataTable();
     data.addColumn('number', 'Valence');
     data.addColumn('number', 'Tempo');
     data.addColumn('number', 'Duration(ms)');
     data.addColumn('number', 'Popularity');
     data.addColumn('number', 'Danceability');
     data.addColumn('number', 'Acousticness');
     data.addColumn('number', 'Energy');
     data.addColumn('number', 'Loudness');
     data.addColumn('number', 'Speechiness');
     data.addRows(table_data);

    let options = {
        height: 500,
        chart: {
            title: 'Scatterplot of Instrumentalness and Popularity'
        },
        hAxis: {title: 'Popularity'},
        vAxis: {title: 'Instrumentalness'},
    };

    let table = new google.visualization.Table(document.getElementById('tablechart'));
    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}
