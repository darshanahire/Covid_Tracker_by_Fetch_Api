// url from were we get data
let url = "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"

var html ='';

fetch(url).then(response => response.json()).then(data => {
    // console.log(data);
    
    var mydata = Array.from(data)
    
        mydata.forEach(display)
}).catch(error => {
    console.log(error);
})

// adding tables as the data get
function display(element,index) {
    html+=`<div class="col-md-4" id="table">
    <h3 style="text-align: center">${element.country}</h3>
    <table  class="table table-bordered border-dark" style="text-align: center">
    <thead>
        <tr id="head">
            <th class="table-success border-dark"scope="row">Infected</th>
            <th class="table-success border-dark"scope="row">Recoverd</th>
            <th class="table-success border-dark"scope="row">Deceased</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${element.infected}</td>
            <td>${element.recovered}</td>
            <td>${element.deceased}</td>
        </tr>
    </tbody>
</table>
</div>`
let table = document.getElementById("mytable")
table.innerHTML=html
}