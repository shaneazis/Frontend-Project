// function handleClick(){
//     let divison=document.getElementById("divison")
//     divison.innerHTML="<nav>LUFFY</nav>"
    
//     console.log(divison)
// }
// function handleClick(){
//     let example=document.getElementById("example")
//     console.log(example.TextContent)
// }
// function handleClick(){
//     let division=document.getElementById("example")
//   console.log(division.innerHTML="kark")
//   console.log(division.innerText="karkka")
//     console.log(  division.textContent="KARKA")
// }
function handleClick(){
    let name=document.getElementById("name").value
    let pass=document.getElementById("pass").value
    // console.log(name)
    // console.log(pass)
    let details={
        myname:name,
        mypass:pass
        
    }
    console.log(details)
   document.getElementById('name').value=""
   document.getElementById('pass').value=""

}