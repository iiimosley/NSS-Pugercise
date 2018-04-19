
let anchor = document.getElementsByTagName('a');

for(let i = 0;i<anchor.length;i++){
    anchor[i].addEventListener('click', ()=>{
        console.log(this);
        // this.classList.remove('boom');
        // this.classList.add('boom');
    });
}