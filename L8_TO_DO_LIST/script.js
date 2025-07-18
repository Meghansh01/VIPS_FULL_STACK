const btn = document.querySelector(".Button")

btn.addEventListener("click", ()=>{
    let parent = btn.parentElement
    console.log(parent);

    parent.style.height="100px"
    parent.style.width="50px"
    parent.style.backgroundColor="green"
});

const list = document.querySelector(".list");
list.addEventListener("click",()=>{
    console.log(list.children);
    console.log(list.firstElementChild);
    console.log(list.firstChild);
    console.log(list.lastChild);
    console.log(list.nextElementSibling);
    console.log(list.previousElementSibling);
    list.removeAttribute("class")
    console.log(list.id);
})