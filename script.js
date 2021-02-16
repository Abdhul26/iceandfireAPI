const booksearch = document.getElementById("searchbar");
booksearch.addEventListener("click", link())
    (function () {
        link();
        console.log("b");
    }())
    
    
    function link() {
        fetch('https://www.anapioficeandfire.com/api/books')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log("a",data);
            const html = data.map(i => {
                return `<h3>${i.name}</h3>`;
            })
              .join("");
                console.log(html);
        });

    }