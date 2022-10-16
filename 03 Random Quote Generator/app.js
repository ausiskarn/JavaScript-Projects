const text = document.querySelector("#quote");
const author = document.querySelector(".author")
const nextbtn = document.querySelector(".nextbtn");
const twitter = document.getElementById("tweet");


async function getNewQuote(){

    // api for quotes
    let URL = "https://type.fit/api/quotes"; 

    //fetch the data from api
    const response = await fetch(URL)

    // console.log( response)
    
    // convert response to json and store it in quotes array
    const allQuotes = await response.json();
    console.log(allQuotes)

    //Generate a random number between  0 and the length of the quotes
    const index = Math.floor(Math.random()*allQuotes.length)
    console.log(index)
    
    
    //store the quote present at the randomly generated index
    const quote = allQuotes[index].text;

    // store the nanme of the author
    const authorx = allQuotes[index].author;
    
    //anonymous author
    if(authorx==null){
        author == "Anonymous"
    }


    //function dynamically display the quote and the outhor
    text.textContent = quote;
    author.textContent = authorx
    
    //tweet the quote
    twitter.href = "https://twitter.com/intent/tweet?text="+quote+" ~ "+authorx;

}
nextbtn.addEventListener("click", getNewQuote)
// getNewQuote()




