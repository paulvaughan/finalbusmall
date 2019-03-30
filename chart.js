//get canvas elementbyID
let elChart = document.getElementById('busChart').getContext('2d');
//let imported = document.createELement('script')
//imported.src = './main.js';
//
//definee a function that populates chart by looping through Image array

//document.head.appendChild(imported)
function populateChart(property){
   //assign characterPropsArray as an  empty which will be filled later on
   let propertyArray = [];
   for(let i = 0; i < pictureArray.length; i++){
       propertyArray.push(pictureArray[i][property]);
      console.log(propertyArray);
   }
   //return the
   return propertyArray;
};


// declares displayChart variable and assigns
function displayChart() {
   elChart.innerHTML = '';
   let myChart = new Chart(elChart, {
       //assigns the  type property to become a bar chart's
       type: 'bar',
       //assign the data property to contain objects such as subproperties, arrays and functions required to present data on graph and to HTML
       data: {
           labels: populateChart('name'),
           datasets: [
               {
                   //click properties associated with the populate first graph that will show the click count for the specific imageObject
                   label:'Click Count',
                   data: populateChart('clicked'),
                   backgroundColor:'blue',
               },
               {
                   label:'Display Count',
                   data: populateChart('shown'),
                   backgroundColor: 'red',
               }
           ],
           options: {
               scales: {
                   yAxes: [{
                       ticks: {
                           beginAtZero:true
                       }
                   }]
               }
           }
       }
   });
};
//</script>