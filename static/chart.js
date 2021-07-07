function linedata(data)

function init() {
    var dropdown = d3.select("#line") //referencing back to html  and appending dropdown
    ////dropdown.html("");
    d3.json("/api/wages/postgres").then(function (data) {
        data.State.forEach((state) => {
            dropdown.append("option")
                .text(state)
                .property("value", state)
        });

        var trace1 = {
            x: data.Year,
            y: data.EffectiveMinimumWage,
            type: 'scatter'
        };
    
        var trace2 = {
            x: data.Year,
            y: data.FederalMinimumWage,
            type: 'scatter'
        };
    
        var data = [trace1, trace2];
    
        Plotly.newPlot('line', data);
    });
};

init();