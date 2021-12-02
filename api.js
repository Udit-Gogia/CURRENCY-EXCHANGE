let content = document.getElementById('content');
let number =  document.getElementById('numberop');
let cntry = document.getElementById('countries');
let element =[];
let input = document.getElementById('numberop').addEventListener('click' , AddingElements );



function GetData()
{
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=de42034d34bd2c297623111a6d3fb3c9", {
        "method": "GET",

    }).then((response) => {
        return response.json();
    }).then((data)=>{

         // The whole object
         console.log(data.rates);


         let arrDataValues = Object.values(data.rates);
        // Country's Currency value w.r.t EUR
         console.log(arrDataValues);


        element = Object.keys(data.rates);

        document.getElementById('input-cntry');
        // Country names
        console.log(element);

        // cntry.innerHTML = Object.keys(data.rates);

        document.getElementById('content').innerHTML = data.base;

    })
}

GetData()

function AddingElements(){
    for (let i = 0; i<168; i++){
        let options = element[i];
        let create = document.createElement("option");
        create.textContent = options;
        create.value = options;
        cntry.appendChild(create);
    }
}







