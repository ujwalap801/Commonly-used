// const notesOur = document.querySelector(".notes-our");
// const createBtn = document.querySelector(".btn");

// let notes = document.querySelectorAll(".input-box");


// // function showNotes()
// // {
// //     notesOur.innerHTML =localStorage.getItem("notes");
// // }
// // showNotes();

// // Function to retrieve notes from localStorage and display them
// function showNotes() {
//     const notes = localStorage.getItem("notes");
//     if (notes) {
//         notesOur.innerHTML = notes;
//     }
// }
// showNotes();

// function updateStorage()
// {
//     localStorage.setItem("notes",notesOur.innerHTML);
// }

// createBtn.addEventListener("click",()=>{
//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src="delete.png";
//     notesOur.appendChild(inputBox).appendChild(img)
// });

// notesOur.addEventListener("click", function (e) {
//     if(e.target.tagName === "IMG")
//     {
//         e.target.parentElement.remove();
//         updateStorage();
//     }
    
//     else if(e.target.tagName === "p")
//     notes = document.querySelectorAll(".input-box");
//    notes.forEach(nt =>{
//     nt.onkeyup = function()
//     {
//         updateStorage();
//     }
// })
// });



// document.addEventListener("keydown" ,event=>{
//     if(event.key === "Enter")
//     {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }


// })


const notesOur = document.querySelector(".notes-our");
const createBtn = document.querySelector(".btn");

// Function to retrieve notes from localStorage and display them
function showNotes() {
    const notes = localStorage.getItem("notes");
    if (notes) {
        notesOur.innerHTML = notes;
    }
}
showNotes();

// Function to update localStorage with the current notes
function updateStorage() {
    localStorage.setItem("notes", notesOur.innerHTML);
}

// Event listener for creating new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesOur.appendChild(inputBox).appendChild(img);
    updateStorage(); // Update storage when a new note is created
});

// Event listener for deleting a note or editing existing notes
notesOur.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // Update storage after deleting a note
    } else if (e.target.tagName === "P") {
        // If editing an existing note, update storage when the note content changes
        e.target.addEventListener("input", function () {
            updateStorage();
        });
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
