Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Gravity80 
01-PP
/
09_Arrays_02
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
09_Arrays_02/arr_01.js /
@przygoda
przygoda update
Latest commit af8b5d6 2 hours ago
 History
 1 contributor
101 lines (84 sloc)  2.26 KB

/*********   Theorie **********/

// push() / pop()
// push --> Daten rein ... (+)
// let arr = [];
// output(arr);
// arr.push("Ich");
// output(arr);
// arr.push("bin");
// output(arr);
// arr.push("Max");
// output(arr);

// output(arr[arr.length-1]);

// pop() --> Daten raus ... (-)

// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls  = ["<", "</", ">"];
const tags = [  "html","head","head","body",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","li","li","ul",
                "p","p",
                "body","html"
            ];

let stack = [];

// Modul: HTML-Synthese | Test
output(getHTML());
function getHTML() {

    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        if (isOpenElement(tags[i])) 
        // if(false)
        { 
            htmlStr += getElement(tags[i],"open");
        } else {
            htmlStr += getElement(tags[i],"close");
        }
    }

    return htmlStr;
}

function isOpenElement(tag) {
    
    // tag liegt nicht oben! --> neu, open
    let cond = (tag != stack[stack.length-1]); 
    
    if (cond) {  // open
        stack.push(tag);
        output(stack);
        return true;
    } else {  // close
        stack.pop();
        output(stack);
        return false;
    }
     
}

// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(tags[1],"open"));
// output(getElement(tags[1],"close"));
// output(getElement(tags[1]));
function getElement(tag,op) {
    switch (op) {
        case "open": 
            return controls[0] + tag + controls[2];
            // return cobj.open_o + tag + cobj.close;
        case "close":
            return controls[1] + tag + controls[2];
            // return cobj.close_o + tag + cobj.close;
        default:
          return "#!?";
    }
}

// Modul: Ausgabe | Test
//output("hi");
function output(inputData) {
    console.log(inputData);
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
