let noteSection = document.getElementById("textarea");
let note = noteSection.value
let addButton = document.getElementById("textarea-add");

noteSection.value = localStorage.getItem("note")

noteSection.addEventListener("input", function(){
    let note = noteSection.value
    localStorage.setItem("note", note)
});

// function localStorageNotes(note) {
//     localStorage.setItem("note", note)
// }

// console.log(localStorage.getItem("note"))