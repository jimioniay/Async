// Acsync using call back functions
// AJAX means Asycnhronous Javascriipt with XHR XMLHTTPRequest object

const loadData = function (e) {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/data/data.txt", true);
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(`
                http status: ${this.status}
                http message: ${this.responseText}
            `);
        }
        else {
            console.log(`
                http status: ${this.status}
                http message: ${this.responseText}
            `);
        }
    }

    xhr.send();
    e.preventDefault();
}


const getCustomer = (e) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/data/customer.json", true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(`status:       ${xhr.status}
                         json:         ${xhr.responseText}
                         jsonParse:    ${JSON.parse(xhr.responseText)}`);
            const customer = JSON.parse(xhr.responseText);
            const divCust = document.querySelector("#customer");
            const output = `
                                <ul class = "list-group">
                                <li class = "list-group-item">ID: ${customer.id}</li>
                                <li class = "list-group-item">Name: ${customer.name}</li>
                                <li class = "list-group-item">Age: ${customer.age}</li>
                                <li class = "list-group-item">Company: ${customer.company}</li>
                                <li class = "list-group-item">Mobile Number: ${customer.mobileNumber}</li>
                                </ul>
            `;
            divCust.innerHTML = output;
        }
        else {
            console.log(`status:      ${xhr.status}
                        json:         ${xhr.responseText}
                        jsonParse:    ${JSON.parse(xhr.responseText)}`);
        }
    }

    xhr.send();
    e.preventDefault();
}

const getCustomers = (e) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/data/customers.json", true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(`status: ${xhr.status}
                        json:    ${xhr.responseText}`);
            const customers = JSON.parse(xhr.responseText);
            const divCust = document.querySelector("#customers");
            let output = "";
            customers.forEach(customer => {
                output += `
                <ul class= "list-group">
                <li class = "list-group-item">ID: ${customer.id}</li>
                <li class = "list-group-item">Name: ${customer.name}</li>
                <li class = "list-group-item">Age: ${customer.age}</li>
                <li class = "list-group-item">Company: ${customer.company}</li>
                <li class = "list-group-item">Mobile Number: ${customer.mobileNumber}</li>
                </ul><hr>`;
                console.log(output);
            });
            divCust.innerHTML = output;

        }
        else {
            console.log(`status: ${xhr.status}
                         json:    ${xhr.responseText}`);
        }
    }

    xhr.send();
    e.preventDefault();
}
document.querySelector("#pull-data").addEventListener("click", loadData);

document.querySelector("#btn-customer").addEventListener("click", getCustomer);

document.querySelector("#btn-customers").addEventListener("click", getCustomers);

// Acsync using Promises
// Acsync using Async await