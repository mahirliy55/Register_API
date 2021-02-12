let url = "http://127.0.0.1:8000/api/v1/show-users/"
let postUrl = "http://127.0.0.1:8000/api/v1/register/"
let card = document.getElementById("card")
let btn = document.getElementById("btn")



sendRequest = () => {
    fetch(url).then(resp => resp.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${data[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].username}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">First name: <strong>${data[i].first_name}</strong></li>
              <li class="list-group-item">Last name: <strong>${data[i].last_name}</strong></li>
              <li class="list-group-item">Email: <strong>${data[i].email}</strong></li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
            `
        }

    })
}
sendRequest()

// -------------------------------------------------------------------------------------


let user = document.getElementById("user").value
let fname = document.getElementById("fname").value
let lname = document.getElementById("lname").value
let email = document.getElementById("email").value
let file = document.getElementById("file").value
let pass = document.getElementById("pass").value
let pass2 = document.getElementById("pass2").value
let sub = document.getElementById("sub")


posted = (username, first_name, last_name, email, image, password, password2) => {
    sub.addEventListener("submit", () => {
        let iii = {
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "image": image,
            "password": password,
            "password2": password2,
        }
        fetch(postUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(iii)
        }).then(resp => resp.json()).then(data => {
            console.log(data);
        })
    })
}

sub.addEventListener("submit", () => {

})
posted(user, fname, lname, email, file, pass, pass2)