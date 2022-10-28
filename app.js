let arrow = document.querySelectorAll("span img"); 
let question = document.querySelectorAll(".question")

arrow.forEach(arr => {
    arr.addEventListener("click", function(e) {
        let number = Number(e.target.getAttribute("data-index")); 
        if (e.target.classList.contains("rotate")) {
            e.target.classList.remove("rotate"); 
            question[number].classList.remove("clicked"); 
            question[number].nextElementSibling.classList.remove("visible"); 
            return; 
        }
        arr.classList.add("rotate"); 
        for (let i = 0; i < arrow.length; i++) {
            let index = Number(arrow[i].getAttribute("data-index")); 
            if (index !== number) {
                arrow[index].classList.remove("rotate"); 
            }
        }
        for (let i = 0; i < question.length; i++) {
            let index2 = Number(question[i].getAttribute("data-index")); 
            if (index2 === number) {
                question[i].classList.add("clicked"); 
                question[i].nextElementSibling.classList.add("visible")
            } else {
                question[i].classList.remove("clicked");
                question[i].nextElementSibling.classList.remove("visible"); 
            }
        }
    })
}); 

question.forEach(quest => {
    quest.addEventListener("click", function(e) {
        let number = Number(e.target.getAttribute("data-index")); 
        if (arrow[number].classList.contains("rotate")) {
            arrow[number].classList.remove("rotate"); 
            e.target.classList.remove("clicked"); 
            e.target.nextElementSibling.classList.remove("visible"); 
            return; 
        }
        arrow[number].classList.add("rotate"); 
        for (let i = 0; i < arrow.length; i++) {
            let index = Number(arrow[i].getAttribute("data-index")); 
            if (index !== number) {
                arrow[index].classList.remove("rotate"); 
            }
        }; 
        for (let i = 0; i < question.length; i++) {
            let index2 = Number(question[i].getAttribute("data-index")); 
            if (index2 === number) {
                question[i].classList.add("clicked"); 
                question[i].nextElementSibling.classList.add("visible")
            } else {
                question[i].classList.remove("clicked");
                question[i].nextElementSibling.classList.remove("visible"); 
            }
        }
    })
}); 