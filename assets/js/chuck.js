class UI {
    message;
    joke;
    staus;
    constructor() { }
    displayMessage(message = this.message, status = this.status) {
        const prompt = document.querySelector("#prompt");
        if (status == "success") {
            prompt.classList.remove("d-none");
            prompt.classList.remove("border-danger", "text-danger");
            prompt.classList.add("border-success", "text-success");
            prompt.textContent = message;
        }
        else {
            prompt.classList.remove("d-none");
            prompt.classList.remove("border-success", "text-success");
            prompt.classList.add("border-danger", "text-danger");
            prompt.textContent = message;
        }
        setTimeout(() => {
            prompt.classList.add("d-none");
        }, 5000);
    }

    renderJoke(jokes) {
        let output = "";
        console.log("type:     " + typeof jokes);
        jokes.forEach((joke, index) => {
            console.log("joke: " + jokes)
            output += `
                                <div class="card p-3 text-left">
                                <blockquote class="blockquote mb-0">
                                <h5 class="card-title">${joke.id}</h5>
                                  <p>${joke.joke}</p>
                                  <footer class="blockquote-footer">
                                    <small class="text-muted author">
                                      ${(joke.categories.length === 0) ? "Misc" : joke.categories[0]} joke by <cite title="Source Title">Chuck Norris</cite>
                                    </small>
                                  </footer>
                                </blockquote>
                              </div>
                    `;
        });


        const UIjokes = document.querySelector("#jokes");
        UIjokes.innerHTML = output;
    }
}

const getJokes = (e) => {
    const endpoint = "https://api.icndb.com/jokes/random/";
    let noOfJokes = document.querySelector("#numberOfJokes").value
    let response;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint + parseInt(noOfJokes), true);
    xhr.onload = () => {
        console.log("xhr.status: " + xhr.status);
        if (xhr.status === 200) {
            response = JSON.parse(xhr.responseText);
            if (response.type === "success") {
                const ui = new UI();
                ui.renderJoke(response.value);
                let message = "API invoked successfully.";
                let status = "success";
                ui.displayMessage(message, status);
            }
            else {
                let message = "Failed to Invoke API successfully. Check the logs for more details";
                let status = "failed";
                const ui = new UI();
                ui.displayMessage(message, status);
            }
        }
        else {
            response = {};
        }
    };
    xhr.send();
    e.preventDefault();
}



document.querySelector("#get-jokes").addEventListener("click", getJokes);