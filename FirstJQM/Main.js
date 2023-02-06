const body = document.getElementsByTagName('body')[0];

body.append(page);

let choices = ["Recipe"];
choices.forEach((choice) => {
  const menu = document.createElement('input');
  menu.type = "radio";
  let label = document.createElement('label');
  menu.name = 'interest';
  menu.id = choice;
  label.innerText = choice;
  label.for = choice;
  let option =document.createElement('div');
  option.className='option';
  option.append(label);
  option.append(menu);
  output1.append(option);
})
page1.append(output1);

let btn = document.createElement('button');
btn.addEventListener("click", level);
btn.id ='btn';
btn.textContent ="click here to find the menu";
page1.append(btn);

function level(event) {
   
let menu = document.querySelector('input[name="interest"]:checked');

let result =document.createElement('div');
result.id='result';
  menu =menu.id;
  if(document.getElementById('result')){
  document.getElementById('result').remove();
  }

  let page1 =document.getElementById('page1');
   body.append(result);
  
 if(menu ==='Recipe' ) {
result.textContent ='Udon Noddles';
     let message1 =['Bring a large pot of lightly salted water to a boil. Cook udon in boiling water, stirring occasionally, until noodles are tender yet firm to the bite, 10 to 12 minutes. Drain. Meanwhile, combine chicken broth, soy sauce, peanut butter, ginger, honey, garlic, and chili paste in a medium saucepan. Cook and stir over medium heat until peanut butter melts and sauce is heated through. Add drained noodles to peanut butter sauce; toss to coat. Garnish with green onions and peanuts.'];
body.append(message1);
 }
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
