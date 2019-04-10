//Select canvas element by ID to commence chart generation
let elChart = document.getElementById('busChart').getContext('2d');


//declare a function to populate chart
function populateChart(property){
  let propertyArrary = [];
  for(let i = 0; i < selectionArray.length; i++){
    propertyArrary.push(selectionArray[i][property]);
  }
  return propertyArrary;
}

//declare a function to display chart
function displayChart(){
  elChart.innerHTML = '';
  let busChart = new Chart(elChart, {
    type: 'bar',
    data: {
      labels: populateChart('name'),
      datasets: [{
        label: '# of selections',
        data: populateChart('selected'),
        
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: '# of times displayed',
        data: populateChart('shown'),

        backgroundColor: 'red',
        borderColor: 'grey',
        borderWidth: 1,
      }
    ]
    },
    options: {
      scales: {
        yAxis: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
};

