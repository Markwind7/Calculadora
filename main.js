const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");
let tema = "1";
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        if(boton.id === "tema"){
            if(tema === "1"){
                document.getElementById('cal').style.backgroundColor = "black";
                tema = "2";
            }else if(tema === "2"){
                document.getElementById('cal').style.backgroundColor = "#ad0b0b";
                tema = "3";
            }
            else{
                document.getElementById('cal').style.backgroundColor = "#152a94";
                tema = "1";
            }
            return;
        }
       
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1){
                pantalla.textContent = "0";
            }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error!";
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }


        

      

    })
})