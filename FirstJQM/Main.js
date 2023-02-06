document.getElementById("btn").addEventListener("click",menu );
function menu() {
    let p = document.createElement("p");
    p.innerHTML ="";
    let t = document.createTextNode("Bring a large pot of lightly salted water to a boil. Cook udon in boiling water, stirring occasionally, until noodles are tender yet firm to the bite, 10 to 12 minutes. Drain. Meanwhile, combine chicken broth, soy sauce, peanut butter, ginger, honey, garlic, and chili paste in a medium saucepan. Cook and stir over medium heat until peanut butter melts and sauce is heated through. Add drained noodles to peanut butter sauce; toss to coat. Garnish with green onions and peanuts.");
  p.appendChild(t);
    let we =document.getElementById("page1");
    we.innerHTML ="";
  we.appendChild(p);
}

 PersonArray = []; 

function formSubmitEvent() {
    let Person = {
        name:  document.getElementById("custname").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        email: document.getElementById("email").value,
    }

    document.getElementById("custname").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";

    PersonArray.push(Person);

}
document.getElementById("show").addEventListener("click", function () {
    
        let message = "Name  PhoneNumber  Email"+"\n";
        for (i = 0; i < PersonArray.length; i++) {
            message = message + PersonArray[i].name + "  "+PersonArray[i].phoneNumber+" "+PersonArray[i].email;
        }
        document.getElementById("output").value = message;
    });
