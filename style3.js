const notesOur = document.querySelector(".notes-our");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");


function shownotes()
{
    notesOur.innerHTML =localStorage.getItem("notes");
}
shownotes();

function updateStorage()
{
    localStorage.setItem("notes", notesOur.innerHTML);
}
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="delete.png";
    notesOur.appendChild(inputBox).appendChild(img)
});

notesOur.addEventListener("click", function (e) {
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p")
    notes = document.querySelectorAll(".input-box");
notes.forEach(nt =>{
    nt.onkeyup = function()
    {
        updateStorage();
    }
})
});



document.addEventListener("keydown" ,event=>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
