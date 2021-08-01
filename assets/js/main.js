
window.onload = () => {
    var htmlquote = document.getElementById("quote");
    var htmlauthor = document.getElementById("author");
    var htmlphoto = document.getElementById("photo");
    var htmlphoto1 = document.getElementById("photo1");





    fetch('https://thatsthespir.it/api')
        .then(reponse => reponse.json())//response type
        .then(donnee => {
            console.log(donnee)
            let author = donnee.author;
            let quote = donnee.quote;
            let photo = donnee.photo;
            htmlquote.innerHTML = quote;
            htmlauthor.innerHTML = author;
            console.log(photo)
            if (photo !== "") {
                htmlphoto.src = photo;
                htmlphoto1.src = photo;
                
            }
            else {
                htmlphoto.src = "assets/img/1.png";
                htmlphoto1.src = "assets/img/1.png";
                //log the data;
            }
        })
        .catch(error => {
            alert("error")
            console.log(error);
        })
}
