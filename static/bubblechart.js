var BarChart

function BuildBarPlot() {
    var dropdownMenu = d3.select("#selYear");
    var dataset = dropdownMenu.property("value");
    console.log(dataset);

    // Fetch data and console log 
    d3.json(`/api/wages/${dataset}`, function (selectedyear) {

        var yeardata = selectedyear;
        console.log(yeardata)


        // Define variables
        var states = yeardata.map(d => d.State)
        var year = yeardata.map(d => d.Year)
        var minimumWage = yeardata.map(d => d.EffectiveMinimumWage)


        // Initiate chart.js    
        var ctx = document.getElementById('myBarChart').getContext('2d');
        var change = document.getElementById("change_year");
        // Get selected value from the dropdown
        var selected = change.options[change.selectedIndex].value;
        BarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: states,
                datasets: [{
                    label: 'Minimum Wage',
                    data: minimumWage,
                    backgroundColor: barColors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        })
    })
};

    function changeYear() {


        d3.selectAll("#selYear").on("change", BuildBarPlot);

        var yeardropdown = d3.select("#selYear") //referencing back to html  and appending dropdown

        d3.json("/api/years", function (data) {

            data.forEach((year) => {

                dropdown.append("option")
                    .text(year)
                    .property("value", year)

            });
        });

    }


