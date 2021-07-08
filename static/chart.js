function updatePlotly() { 
    var dropdownMenu = d3.select("#selState");
    var dataset = dropdownMenu.property("value");
    console.log(dataset)
}

function init() {


    d3.selectAll("#selState").on("change", updatePlotly);
    
    var dropdown = d3.select("#selState") //referencing back to html  and appending dropdown
    

    
    d3.json("/api/states").then(function (data) {console.log(data)
        data.forEach((place) => {console.log(place)
            dropdown.append("option")
                .text(place)
                .property("value", place)

       
    d3.json('/api/wages/<statename>').then(function (data) {
        data.forEach(state) 
    } )
        function linedata(state) {
            var year = state.Year
            var EffectiveWage = state.EffectiveMinimumWage
            var FederalWage = state.FederalMinimumWage
            }
                var trace1 = {
                    x: year,
                    y: EffectiveWage,
                    mode: 'lines+markers'
                };
            
                var trace2 = {
                   x: year,
                   y: FederalWage,
                   mode: 'lines+markers'
                };
                
                var data = [trace1, trace2];
                 
                    
        
            });

            

                Plotly.newPlot('lines+markers', data);  
        
    
       
    });
};

init();