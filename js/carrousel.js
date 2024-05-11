addEventListener('DOMContentLoaded',() => {
    const imagenes = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg','img/img6.jpg','img/img7.jpg','img/img8.jpg','img/img9.jpg','img/img10.jpg']
    let i = 1;
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
	
    const progressBar = document.querySelector('#progress-bar')
    const divIndicadores = document.querySelector('#indicadores')
    let porcentaje_base = 100/imagenes.length
	
   /* let porcentaje_actual = porcentaje_base*/
    
    for (let index = 0; index < imagenes.length; index++) {
        const div = document.createElement('div')
        div.classList.add('circles')
        div.id = index
        divIndicadores.appendChild(div)
    }

    progressBar.style.width = '${porcentaje_base}%'
    img1.src = imagenes[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classList.add('resaltado')

    const slideshow = () => {
        img2.src = imagenes[i]
        const circulo_actual = Array.from(circulos).find(el => el.id == i)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
        circulo_actual.classList.add('resaltado')
        
        img2.classList.add('active')
        i++
        porcentaje_actual += porcentaje_base
        progressBar.style.width = '${porcentaje_actual}%'

        
        if(i == imagenes.length){
            i = 0
            porcentaje_actual = porcentaje_base - porcentaje_base
        }
        

        setTimeout(() => {
            img1.src = img2.src
            img2.classList.remove('active')
        }, 1000)
    }
    setInterval(slideshow, 4000)

})
