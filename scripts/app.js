const success = 200;
const url = 'https://petstore3.swagger.io/api/v3/pet';

$(document).ready(function() {
    console.log('Loaded');
});

function getPetById() {
    let request = new XMLHttpRequest();
    request.open("GET", url + '/10');
    request.send();
    request.onload = () => {
        if (request.status === success) {
            console.log('GET request success (code 200)');
            console.log('=========================');
            let data = JSON.parse(request.response);
            console.log(data);
            console.log('=========================');
        }
        else if (request.status === 404) {
            console.log('Try PUT first, the pet might be deleted');
        }
    }
}

function deletePetById() {
    let request = new XMLHttpRequest();
    request.open("DELETE", url + '/10');
    request.send();
    request.onload = () => {
        if (request.status === success) {
            console.log('DELETE request success (code 200)');
            console.log('=========================');
        }
    }
}

function postNewPet() {
    let jsonInput = JSON.stringify(generatePostData());
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(jsonInput);
    request.onload = () => {
        if (request.status === success) {
            console.log('POST request success (code 200)');
            console.log('=========================');

        }
    }
}

function generatePostData() {
    return new Pet(
        10,
        'Gizmo'
    );
}