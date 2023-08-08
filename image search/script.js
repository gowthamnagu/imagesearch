const searchForm=document.getElementById("search");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const moreBtn=document.getElementById("extra-btn");
const accesskey="W7y0nEGg7iWmYC8uLBPoQUH6Qxt2t4j0sjc8peWoZq0";
let keyword="";
let page=1;

async function searchImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=
    ${keyword}&client_id=${accesskey}&per_page=12`;
    const response=await fetch(url);
    const data= await response.json();
    const result=data.results;
    result.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink); 
    })
    moreBtn.style.displacy="block";
}
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})
moreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})