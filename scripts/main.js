let each = 0
const observerLeft = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('leftShow');
            
        }else{
            
            entry.target.classList.remove('leftShow');

        }

    })

})

const observerRight = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('rightShow');
            
        }else{
            
            entry.target.classList.remove('rightShow');

        }

    })

})

const observerDown = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('downShow');
            

        }

    })

})

const observerUp = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('upShow');
            

        }else{
            
            entry.target.classList.remove('upShow');

        }

    })

})


const entryMain = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('mainShow');
            
        }else{
            
            entry.target.classList.remove('mainshow');

        }

    })

})

const head = document.querySelectorAll(".main")
const left = document.querySelectorAll(".hiddenLeft")
const right = document.querySelectorAll(".hiddenRight")
const down = document.querySelectorAll(".hiddenDown")
const up = document.querySelectorAll(".hiddenUp")

head.forEach(ele=> entryMain.observe(ele))
left.forEach(ele=> observerLeft.observe(ele))
right.forEach(ele=> observerRight.observe(ele))
down.forEach(ele=> observerDown.observe(ele))
up.forEach(ele=> observerUp.observe(ele))