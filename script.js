const cardDetail = [{
    heading: "Free",
    value: "$0",
    time: " / mo",
    users: "10 users included",
    data: "2 GB of storage",
    email: "Email support",
    help: "Help center access",
    buttonvalue: "Sign up for free"
},{
    heading: "Pro",
    value: "$15",
    time: " / mo",
    users: "20 users included",
    data: "10 GB of storage",
    email: "Priority email support",
    help: "Help center access",
    buttonvalue: "Get Started"
},{
    heading: "Enterprise",
    value: "$29",
    time: " / mo",
    users: "30 users included",
    data: "15 GB of storage",
    email: "Phone and email support",
    help: "Help center access",
    buttonvalue: "Contact us"
}]

const card = document.getElementById('cardlist');

cardDetail.forEach((result,index)=>{
    const btns = index > 0 ? 'btnvisit':'';
    const content = `
    <div class="cards" id="cards">
            <div class="card">
                <div class="cardheader">
                    <h4>${result.heading}</h4>
                </div>
                <div class="cardbody">
                    <h1>${result.value}<small>${result.time}</small></h1>
                    <ul>
                        <li>${result.users}</li>
                        <li>${result.data}</li>
                        <li>${result.email}</li>
                        <li>${result.help}</li>
                    </ul>
                    <button class="${btns}" onclick="viewform()">${result.buttonvalue}</button>
                </div>
            </div>
        </div>
    `;
    card.innerHTML += content;
});

const form = document.getElementById('form');
function viewform(){
    form.style.display='block';
    form.classList.add('overlay');
}

const closebtn = document.getElementById('close');
closebtn.addEventListener('click', function(){
    form.style.display='none';
})

//Store data in localstorage

function createItem(){
    const userName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const formdata = {
        Username: userName,
        Email: email,
        OrderComments: comments
    };    
    saveFormData(formdata);
}
function saveFormData(formdata){
    const checkValue = Object.values(formdata).some((value)=> !value);
    if(!checkValue){
        const storedFormData = JSON.parse(localStorage.getItem('formdata'))|| [];
        storedFormData.push(formdata);
        localStorage.setItem('formdata', JSON.stringify(storedFormData));
        reset();
    }
}
function reset(){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comments').value = '';
}

// Card highlight

const cards = document.querySelectorAll('.cards');
const sliderValue = document.getElementById('myrange');
sliderValue.addEventListener("input", highlight);
function highlight(){
    const user = sliderValue.value;
    const value = document.getElementById('value');
    value.innerHTML = user;
    cards.forEach((card, index)=>{
        const minUser = index * 10;
        const maxUser = (index + 1) * 10;
        if(user >= minUser && user < maxUser){
            card.classList.add('highlighted');
        }else{
            card.classList.remove('highlighted');
        }
    });
}
highlight();