let myLeads = [];

let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    });
});

function render(param1) {
    let listItems = ""
    for (let i = 0; i < param1.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${param1[i]}'>
                ${param1[i]}
            </a>
        </li>
    `;
    }
    ulEl.innerHTML = listItems  
};


deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads.splice(0, myLeads.length);
    render(myLeads);
});

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    console.log( localStorage.getItem("myLeads") )
    myLeads = JSON.parse("myLeads");
});

