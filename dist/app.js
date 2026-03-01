document.addEventListener("DOMContentLoaded", ()=>{

    const shift = document.querySelector(".card .shift")
    const more  = document.querySelector(".card .more")
    let state   = false
    

    // Fonction pour afficher ou cacher les details

    const displayMore = function(){
        
        // Codes basiques

        if(state){
            more.classList.add("none")
            shift.textContent = "Afficher plus"
            state = false
        }else{
            more.classList.remove("none")
            shift.textContent = "Afficher moins"
            state = true
        }
    }


    // Evenement click sur le bouton shift

    shift.addEventListener('click', (e)=>{
        e.preventDefault()

        displayMore()
        
    })
    
    
})