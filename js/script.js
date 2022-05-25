//Get an array of all users
let all = document.getElementsByClassName(`contact-item cf`);
console.log(all);



//from HTMLCollection above, extract the outerHTML of each items and push into a new String array for easy processing later 
let allHTML = [];
for (i=0;i<all.length;i++){
    allHTML.push(all[i].outerHTML);
}
console.log(allHTML);



//Identify the total number of contacts --> Calculate the total number of pages needed
let numOfContacts = all.length;
let numOfPages = Math.ceil(numOfContacts/10);
let oddPage;
if (all.length%10 ==0) oddPage = 10; else oddPage = all.length%10;
console.log(numOfContacts);
console.log(numOfPages);
console.log(oddPage);
console.log(all[0]);


//set up the initial first 10 contacts to load and also get the contact-list class reference
let contactList = document.querySelector(`.contact-list`);
console.log(contactList);
let linkInnerHtml ="";
//validation if contactList < 10 contacts
if (allHTML.length<11){
    for (i=0;i<allHTML.length;i++){
        linkInnerHtml = linkInnerHtml + allHTML[i];
    }
} else {
    for (i=0;i<10;i++){
        linkInnerHtml = linkInnerHtml + allHTML[i];
    }
}

console.log(linkInnerHtml);
contactList.innerHTML = linkInnerHtml;


//create a div container for all the page number buttons and append this new div
let buttonContainer = document.createElement("div");
buttonContainer.id = "buttonsDiv";
let parent = document.getElementsByClassName("page");
parent[0].appendChild(buttonContainer);
//console.log(parent[0].innerHTML);


//from the Num of pages needed calcualted above create the html string to create the pagenumber buttons
let buttonsHtml ="<br><br>";
for (i=1;i<=numOfPages;i++){
    buttonsHtml += `<button class="btnDisplay" onclick=display(${i})>${i}</button>&nbsp`;
}


//adding the concanated string to the innerHTML of the div
buttonContainer.innerHTML = buttonsHtml;
buttonContainer.style.textAlign = "center";



//Envent handler when page numbers buttons are clicked
function display(i){
    //clear all contacts data first
    contactList.innerHTML = "";
    linkInnerHtml ="";
    if (i == numOfPages){
        console.log("LastPage")
        for (z=0;z<oddPage;z++){
            linkInnerHtml = linkInnerHtml + allHTML[((i-1)*10+z)];
            contactList.innerHTML = linkInnerHtml;
        }
    } else if(i == 1) {
        console.log("firstPage");
        for (z=0;z<10;z++){
            linkInnerHtml = linkInnerHtml + allHTML[z];
            contactList.innerHTML = linkInnerHtml;
        }
    } else {
        console.log(i);
        for (z=0;z<10;z++){
            linkInnerHtml = linkInnerHtml + allHTML[((i-1)*10+z)];
            contactList.innerHTML = linkInnerHtml;
        }
    }

}
