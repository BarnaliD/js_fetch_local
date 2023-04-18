/* different ways of reading data*/
// promise chaining
function realFilePromise() {
    fetch('customer.json')
    .then(response =>{
        if(!response.ok){
            throw new Error('Fetch error:' + response.status);
        }
        return response.json();
    })
    .then(customers => {
        generateHTML(customers);
    })
    .catch(error => {
        console.log('Error:' + error);
    })
    
}
//Async Function
async function readFileAsync(){

    let data = await fetch ('customers.json');
    let customers = await data.json();
    generateHTML(customers);

}
// Async function with error handeling
async function readFileAsync2(){
    try{
        let data = await fetch ('customers.json');
        let customers = await data.json();
        generateHTML(customers);
    }catch{
        console.log('Error,could not read from json file');
    }
}

//render HTML
function generateHTML(customers){ 
 let html = '';
 for (let customer of customers){
    html += ` 
    <h3>${customer.first_name} ${customer.last_name}</h3>
    <p>${customer.first_name} works at  ${customer.company_name}</p>
    <p>${customer.first_name} is a ${customer.gender} and Email ID is ${customer.email}</p>
    `;
  }
    html += '<hr>'
    let customerDiv = document.createElement('div')
    customerDiv.innerHTML = html
    document.querySelector('body').append(customerDiv)
 }
 realFilePromise();
 readFileAsync();
 readFileAsync2();
 
