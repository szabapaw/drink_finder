const search= document.querySelector('.search');
const li= document.querySelectorAll('li');


const searchEngine = e =>{
    const text=e.target.value.toLowerCase();
   
   
    li.forEach(el => {
        const task =el.textContent
       if(task.toLowerCase().indexOf(text) !==-1){
           el.style.display='block'
        }else {
            el.style.display='none'
        }
    })
}
//e.target jest naszym inputem w tym wypadku


search.addEventListener('keyup',searchEngine)

//keyup za każdym razem jak wpiszemy coś do inputa to wtedy zareaguje addeventlistener

