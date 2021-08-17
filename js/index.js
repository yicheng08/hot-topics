// GET THE REFERENCES
const container = document.getElementById('dynamic-content');
const links = document.getElementsByClassName('nav-item');
let url = "./partials/home.html";

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL

/**
 * loadContent is a function that request the content of clicked
 * navigation link then it will load the response html to the
 * main content 
 */
function loadContent (url){
       // RUN THE fetch(urlFeed).then().then().catch()
    fetch(url).then( response => {
        return response.text();
    }).then( htmlContent => {
        container.innerHTML = htmlContent;
    }).catch(error => {
        container.innerHTML = "<p> Something wrong in the request </p>";
    });

}

// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.

function selectContent(e){
    e.preventDefault();
    let url = this.href; 

    loadContent(url);
}

//Pre-load home page
window.onload =  function(){
    loadContent(url);
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", selectContent, false);
}
