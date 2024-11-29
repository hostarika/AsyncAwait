const person = document.getElementById("person")
const randomBtn=document.getElementById("random-user")


async function randomUserView() {
    const response=await fetch("https://randomuser.me/api/")
    const data = await response.json();
    console.log("Fetched user:",data.results[0]);
    let odam =data.results[0]
    person.innerHTML = `
    <img src="${odam.picture.medium}" alt="Profile Picture">
    <h1>${odam.name.title} ${odam.name.first} ${odam.name.last}</h1>
    <h2>${odam.location.country}</h2>
    <h3>${odam.email}</h3>
    <h3>${new Date(odam.dob.date).toLocaleDateString()}</h3>
    <h1>${odam.phone}</h1>
`;
if (odam.gender === "female") {
    person.style.backgroundColor = "purple";
} else if (odam.gender === "male") {
    person.style.backgroundColor = "blue";
}
}




randomBtn.addEventListener("click",()=>{
    randomUserView()

})
