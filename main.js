/* different ways of reading data*/
// promise chaining
function realFilePromise() {
    fetch('customers.json')
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

//render HTML
function generateHTML(customers){ 
 let html = '';
 for (let customer of customers){
    html += ` 
    <h3>${customer.first_name} ${customer.last_name}</h3>
    <p>${customer.first_name} works at  ${customer.company_name}</p>
    `;
  }
    html += '<hr>'
    let customerDiv = document.createElement('div')
    customerDiv.innerHTML = html
    document.querySelector('body').append(customerDiv)
 }
 realFilePromise();
 
