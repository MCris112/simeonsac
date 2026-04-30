function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 500);
  }
  
  onReady(function() {
    document.getElementById("navigation-cri").classList.add("down_animation");
  
    //Animations
    setTimeout(() => {
      document.getElementById("cri-title-top").classList.add("fadeUp_animation");

      setTimeout(() => {
        document.getElementById("cri-desc-top").classList.add("fadeUp_animation");

        setTimeout(() => {
          document.getElementById("cri-button-top").classList.add("fadeIn_animation");
        }, 300);
      }, 300);
    }, 300);
  
  });

  isOpen = false;

function menuOpen(){

  menu_change = document.getElementById('navigation-cri');

  if(!isOpen){
    menu_change.classList.add('cri-scroll-change');
    isOpen = true;
  }else{
    menu_change.classList.remove('cri-scroll-change');
    isOpen = false;
  }
}

  function changeCss () {
    home_section = document.getElementById('home');
    menu_change = document.getElementById('navigation-cri');

    title_portafolio = document.getElementById('title_portafolio');
    title_nosotros = document.getElementById('title_nosotros');
    title_valores = document.getElementById('title_valores');
    title_confiar = document.getElementById('title_confiar');
    title_servicios = document.getElementById('title_servicios');
    title_contacto = document.getElementById('title_contacto');
    confiar_content = document.getElementById('confiar_content');

    portafolio_card = document.getElementById('portafolio_card');

    valores_content = document.getElementById('valores_content');
    servicios_content = document.getElementById('servicios_content');

    card_mision = document.getElementById('card_mision');
    card_vision = document.getElementById('card_vision');
    card_equipo = document.getElementById('card_equipo');
    card_objetivo = document.getElementById('card_objetivo');

    contact_now = document.getElementById('contact_now');

    cri_win = window.pageYOffset;
    if(cri_win > home_section.offsetTop){
        menu_change.classList.add('cri-scroll-change');
    }else{
        menu_change.classList.remove('cri-scroll-change');
    }

    //Title portafolio
    if(cri_win > title_portafolio.offsetTop - 730){
      title_portafolio.classList.remove('fadeOut_animation');
      title_portafolio.classList.add('fadeUp_animation');
    }else{
      title_portafolio.classList.add('fadeOut_animation');
      title_portafolio.classList.remove('fadeUp_animation');
    }

    if(cri_win > title_portafolio.offsetTop -300){
      portafolio_card.classList.remove('fadeOut_animation');
      portafolio_card.classList.add('fadeUp_animation');
    }else{
      portafolio_card.classList.add('fadeOut_animation');
      portafolio_card.classList.remove('fadeUp_animation');
    }

    //Title Nosotros
    if(cri_win > title_nosotros.offsetTop - 430){
      title_nosotros.classList.remove('fadeOut_animation');
      title_nosotros.classList.add('fadeUp_animation');
    }else{
      title_nosotros.classList.add('fadeOut_animation');
      title_nosotros.classList.remove('fadeUp_animation');
    }

    if(cri_win > title_nosotros.offsetTop - 230){
      card_mision.classList.remove('fadeOut_animation');
      card_mision.classList.add('left_animation');

      if(cri_win > title_nosotros.offsetTop - 100){
        card_vision.classList.remove('fadeOut_animation');
        card_vision.classList.add('left_animation');

        if(cri_win > title_nosotros.offsetTop){
          card_equipo.classList.remove('fadeOut_animation');
          card_equipo.classList.add('left_animation');
        }

        card_objetivo.classList.remove('fadeOut_animation');
        card_objetivo.classList.add('right_animation');
      }

    }else{
      card_mision.classList.add('fadeOut_animation');
      card_mision.classList.remove('left_animation');

      card_vision.classList.add('fadeOut_animation');
      card_vision.classList.remove('left_animation');

      card_equipo.classList.add('fadeOut_animation');
      card_equipo.classList.remove('left_animation');

      card_objetivo.classList.add('fadeOut_animation');
      card_objetivo.classList.remove('right_animation');
    }

    //Title Valores
    if(cri_win > title_valores.offsetTop - 430){
      title_valores.classList.remove('fadeOut_animation');
      title_valores.classList.add('fadeUp_animation');
    }else{
      title_valores.classList.add('fadeOut_animation');
      title_valores.classList.remove('fadeUp_animation');
    }

    if(cri_win > title_valores.offsetTop - 230){
      valores_content.classList.remove('fadeOut_animation');
      valores_content.classList.add('fadeUp_animation');
    }else{
      valores_content.classList.add('fadeOut_animation');
      valores_content.classList.remove('fadeUp_animation');
    }

    //Title Confiar
    if(cri_win > valores_content.offsetTop + 360){
      title_confiar.classList.remove('fadeOut_animation');
      title_confiar.classList.add('fadeUp_animation');
    }else{
      title_confiar.classList.add('fadeOut_animation');
      title_confiar.classList.remove('fadeUp_animation');
    }

    if(cri_win > valores_content.offsetTop + 630){
      confiar_content.classList.remove('fadeOut_animation');
      confiar_content.classList.add('fadeUp_animation');
    }else{
      confiar_content.classList.add('fadeOut_animation');
      confiar_content.classList.remove('fadeUp_animation');
    }

    //Title Servicios
    if(cri_win > title_servicios.offsetTop - 430){
      title_servicios.classList.remove('fadeOut_animation');
      title_servicios.classList.add('fadeUp_animation');
    }else{
      title_servicios.classList.add('fadeOut_animation');
      title_servicios.classList.remove('fadeUp_animation');
    }

    if(cri_win > title_servicios.offsetTop - 230){
      servicios_content.classList.remove('fadeOut_animation');
      servicios_content.classList.add('fadeUp_animation');
    }else{
      servicios_content.classList.add('fadeOut_animation');
      servicios_content.classList.remove('fadeUp_animation');
    }

    //Title Contacto
    if(cri_win > title_contacto.offsetTop - 630){
      title_contacto.classList.remove('fadeOut_animation');
      title_contacto.classList.add('fadeUp_animation');
    }

    if(cri_win > contact_now.offsetTop - 630){
      contact_now.classList.remove('zoomOut_animation');
      contact_now.classList.add('zoomIn_animation');
    }
  }

window.addEventListener("scroll", changeCss , false);