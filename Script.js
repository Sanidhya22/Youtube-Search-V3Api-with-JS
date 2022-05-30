const Button1 = document.getElementById('btn')
const cont1 =document.getElementById("searchresult")
Button1.addEventListener("click", () => {
    let input = document.getElementById('search').value
    let noofresults = 8;
    console.log(input,noofresults)
    searchData(input)
})

async function searchData(query,maxResuts){
    try {
        const response = await fetch ("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKP1qV9BJ00fyXWjNmkO2uH_InlZjkDOc&type=video&part=snippet&maxResults=15&q="+query+"")
        let data = await response.json()
        console.log(data)
        addvideos(data)
    } catch (error) {
        console.log("error occured")
    }
}

function addvideos (videos){
    // title with link on youtube, preview, description, author, published date, count of views
    videos.items.forEach(val => {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let a = document.createElement('a');
        let im = new Image(340,180);
        let date = val.snippet.publishedAt
        div2.id = "div2ID";
        div.id = "divID";
        a.target = '_blank';
        a.href = `https://www.youtube.com/watch?v=${val.id.videoId}`;
        im.src = `${val.snippet.thumbnails.medium.url}`
        a.appendChild(im)
        div.innerHTML =

             `
            <h1>${val.snippet.title}</h1>
            <p1>${val.snippet.channelTitle}</p1>
            <p1>Pusblished at : ${date.slice(0, 10)}</p1>
            <p>${val.snippet.description}</p>
            `

            
        div2.appendChild(a)
        div2.appendChild(div)
        cont1.appendChild(div2)

    });
}


