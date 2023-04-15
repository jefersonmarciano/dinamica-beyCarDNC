function direita() {
    const elements = document.getElementsByClassName("retangulo")

  for( const i in elements) {
    const element = elements[i]
    if( element.style){      
      element.style.display = (element.style.display == "none" ) ? "flex" : "none"
    }
  }
}
// setado a cada 5 segundo trocar de imagem
setInterval(direita, 5000)
