const $ = (element) => document.getElementById(element)

window.onload = function(){
    console.log('moviesAddValidator success!!');
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//  

    let form = document.querySelector('form')
    let errores = document.querySelector('.errores')
    let inputTitle = document.getElementById('title')
    let inputRating = document.getElementById('rating')
    let inputAwards = document.getElementById('awards')
    let inputReleaseDate = document.getElementById('release_date')
    let inputLength = document.getElementById('length')
    let selectGenre = document.getElementById('genre_id')

    inputTitle.focus() // se posiciona en el input

    let erroresArr = []

    inputTitle.addEventListener('blur', function() {
        if(!this.value){ // también se puede usar this.value
            $('errorTitle').innerHTML = ('El campo título no puede estar vacío')
            this.classList.add('is-invalid')
        }else{
            $('errorTitle').innerHTML = null
        }
    })

    inputRating.addEventListener('blur', function () {
        
        switch (true) {
            case !this.value:
                $('errorRating').innerHTML = ('El campo length no puede estar vacío')
                this.classList.add('is-invalid')
                break;
            case this.value < 0 || this.value > 10:
                $('errorRating').innerHTML = ('El rating debe ser entre 0 y 10 puntos')
                break;
            default:
                $('errorRating').innerHTML = null
                this.classList.remove('is-invalid')
                break;
        }
        
    })

    inputAwards.addEventListener('blur', function () {
        
        switch (true) {
            case !this.value:
                $('errorAwards').innerHTML = ('El campo length no puede estar vacío')
                this.classList.add('is-invalid')
                break;
            case this.value < 0 || this.value > 10:
                $('errorAwards').innerHTML = ('Los premios deben ser entre 0 y 10 puntos')
                this.classList.add('is-invalid')
                break;
            default:
                $('errorAwards').innerHTML = null
                this.classList.remove('is-invalid')
                break;
        }
    })

    inputReleaseDate.addEventListener('blur', function () {
        if(!this.value){ // también se puede usar this.value
            $('errorRelease_date').innerHTML = ('El campo release date no puede estar vacío')
            this.classList.add('is-invalid')
        }else{
            $('errorRelease_date').innerHTML = null
            this.classList.remove('is-invalid')
        }
    })

    inputLength.addEventListener('blur', function () {

        switch (true) {
            case !this.value:
                $('errorLength').innerHTML = ('El campo length no puede estar vacío')
                this.classList.add('is-invalid')
                break;
            case this.value < 60 || this.value > 360:
                $('errorLength').innerHTML = ('La duración debe ser entre 60 y 360 min')
                this.classList.add('is-invalid')
                break;
            default:
                $('errorLength').innerHTML = null
                this.classList.remove('is-invalid')
                break;
        }
    })

    selectGenre.addEventListener('blur', function () {
        if(!this.value){ // también se puede usar this.value
            $('errorGenre').innerHTML = ('El campo genre no puede estar vacío')
        }else{
            $('errorGenre').innerHTML = null
        }
    })


    form.addEventListener('submit', (e) =>{
        e.preventDefault()

        let elements = form.elements
        let error = false

        for (let i = 0; i < elements.length -1 ; i++) {
            if(elements[i].classList.contains('is-invalid') || !elements[i].value){
                error = true
            }
        }

        if(!error){
            e.target.submit() // target hace referencia a la etiqueta form
        }else{
            errores.innerHTML = `<li class="alert-warning">Tiene errores pendientes!! </li>`
        }
    })
}