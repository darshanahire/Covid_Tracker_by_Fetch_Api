let contener = document.getElementById("contener")

let url = "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
var html ='';
fetch(url).then(response => response.json()).then(data => {
    // console.log(data);
    
    var mydata = Array.from(data)
    mydata.sort(function(a,b){
      return b.infected- a.infected ;
    });
    // console.log(mydata);
    
    mydata.forEach(display)
  }).catch(error => {
    console.log(error);
  })
  
  function display(element,index) {
    html+=`
    <div class="accordion" id="accordionExample" ">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index+1}"
                aria-expanded="true" aria-controls="collapseOne" style="align-item: center;">${index+1}. ${element.country}
              </button>
            </h2>
            <div id="collapse${index+1}" class="accordion-collapse collapse" aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <b>Country Name:</b> ${element.country}<br>
              <b>Total Infected Persons:</b> ${element.infected}<br>
              <b>Total Recoverd Persons:</b> ${element.recovered}<br>
              <b>Total Deceased Persons:</b> ${element.deceased}<br>
              <b>Total Tested Persons:</b> ${element.tested}<br>
              <b>Last Data Update Date:</b> ${element.lastUpdatedApify}<br>
              <a href=${element.sourceUrl} target="_blank">more info</a>
              </div>
            </div>
          </div>
        </div>`
    
    
        let table = document.getElementById("finaltable")
        table.innerHTML=html
      }