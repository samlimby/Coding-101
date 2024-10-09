let noteSection = document.getElementById("textarea");
let note = noteSection.value
let addButton = document.getElementById("textarea-add");
let mainContainer = document.querySelector(".container");

noteSection.value = localStorage.getItem("note")

noteSection.addEventListener("input", function(){
    let note = noteSection.value
    localStorage.setItem("note", note)
});

addButton.addEventListener("click", function(){
    console.log("button pressed!")
    const newNoteSection = document.createElement("textarea");
    // newNoteSection.setAttribute("id", textarea1);
    mainContainer.appendChild(newNoteSection);

})

// function localStorageNotes(note) {
//     localStorage.setItem("note", note)
// }

// console.log(localStorage.getItem("note"))