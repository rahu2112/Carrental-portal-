document.getElementById("search").addEventListener("click", searchmovie);

function searchmovie(){

    var input = document.getElementById("input").value;

    // message is checked user is not entered any movie name or not
    if(input === ""){

    var msg = document.getElementById("box");

    msg.innerText = "⚠ Please enter a movie name to search";

    msg.style.display = "block";

    setTimeout(function(){
        msg.style.display = "none";
    },3000);

    return;
}

    // loading spinner while fetching data from API
    document.getElementById("output").innerHTML = `
        <div class="loader-container">
            <div class="loader"></div>
        </div>
    `;

    var api = [`https://www.omdbapi.com/?s=${input}&apikey=thewdb`];

    var output = "";

    // duplicate remve
    var movieset = new Set();

    api.forEach(function(api){

        fetch(api)
        .then(function(response){
            return response.json();
        })
        .then(function(data){

            if(!data.Search){
                document.getElementById("output").innerHTML = "Movie not found";
                return;
            }

            var movies = data.Search;

            movies.forEach(function(movie){

                if(movieset.has(movie.imdbID)){
                    return;
                }

                movieset.add(movie.imdbID);

                fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=thewdb`)
                .then(function(res){
                    return res.json();
                })
                .then(function(details){

                    var poster = details.Poster !== "N/A"
                    ? details.Poster
                    : "https://via.placeholder.com/400x600?text=No+Image";

                    output += `<div class="col-md-4">

                        <div class="movie-card">

                            <a href="https://www.justwatch.com/in/search?q=${details.Title}" target="_blank">
                                <img src="${poster}" class="w-100">
                            </a>

                            <div class="card-body p-3">

                                <h5>${details.Title}</h5>

                                <p>Year: ${details.Year}</p>

                                <p>Type: ${details.Type}</p>

                                <p>Runtime: ${details.Runtime}</p>

                                <p><b>Cast:</b> ${details.Actors}</p>

                                <span class="rating">
                                    IMDb ${details.imdbRating} ⭐
                                </span>

                            </div>

                        </div>

                    </div>`;

                    document.getElementById("output").innerHTML = output;

                });

            });

        })
        .catch(function(error){
            console.log(error);
        });

    });

}