function toggleMode () {
  const html = document.documentElement //Aqui a gente pegou o HTML
  html.classList.toggle("light") //Troca das clases
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add("light")
  // }

  //Pegar a tag image
  const image = document.querySelector("#profile img") //Pesquisa pelo seletor, e "image" ficou com o #profile img

  //substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute('src', './assets/assets/avatar-light.png')     //Para substituir ou add imagem, setatrribute, serve para modificar um atributo em valor string('')
  } else {
    // se tiver sem light mode, manter a imagem normal
    image.setAttribute('src', './assets/assets/avatar.png')
  }
}

