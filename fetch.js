let url = "https://newsapi.org/v2/everything?q=health&from=2023-02-04&sortBy=relevancy&apiKey=b9e590fa9a6846bc99c46c7f7799409e";
let dataShow = document.getElementById('card');

fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        for (var i = 0; i < data.articles.length; i++) {

            dataShow.innerHTML += `
            <br>
            <div class="container">
            <h1 style="font-size:30px; margin-left:25px"> ${data.articles[i].title}</h1><br>
            <h5 style="margin-left:25px">${data.articles[i].publishedAt}</h5>
            <p style="margin-left:25px">${data.articles[i].description}</p>
            <a href=${data.articles[i].url} class="btn btn-danger" role="button" style="display:flex;justify-content:center;">Read Here</a><hr>
            </div>
            `;

        }
    });