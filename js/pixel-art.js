var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

$(document).ready(function (){
  
  var clicked = false,
      nuevoColor;
  
  crearPaleta();
  const $paleta = $("#paleta>div");
  const $indicadorColor = $("#indicador-de-color");

  crearGrilla();
  const $pixeles = $("#grilla-pixeles>div");

//CREA LA PALETA
  function crearPaleta (){
    for(i=0; i<nombreColores.length; i++) {
      $("#paleta").append($('<div>').addClass("color-paleta").css("background-color", nombreColores[i]));
    }
  }

//CREA LA GRILLA
  function crearGrilla(){
      for(i=0; i<=1750; i++) {
        $("#grilla-pixeles").append($('<div>')); 
    }
  }

//AVISA CUANDO SE SUELTA EL MOUSE
  $(document).mouseup(function(){
    clicked = false;
  })

// CAMBIAR EL INDICADOR DE COLOR
  $paleta.mouseenter(function(){
    if (clicked){
      nuevoColor = $(this).css("background-color");
      $indicadorColor.css("background-color", nuevoColor);  
    }
  });

  $paleta.mousedown(function(){
      clicked = true;
      nuevoColor = $(this).css("background-color");
      $indicadorColor.css("background-color",nuevoColor);  
  })

// GUARDAR EL COLOR PERSONALIZADO
  $('#color-personalizado').on('change',function(){
    $indicadorColor.css("background-color", $(this).val());    
    nuevoColor = $(this).val();
  });

// PINTAR PIXEL
  $pixeles.mouseenter(function(){
    if (clicked){
      $(this).css("background-color", nuevoColor);  
    }
  });

  $pixeles.mousedown(function(){
      clicked = true;
    $(this).css("background-color", nuevoColor);  
  })

// BORRAR PANTALLA
  $("#borrar").click(function(){
    for (i=0; i<$pixeles.length; i++){
      $($pixeles[i]).animate({"background-color":"white"}, 1500);
    }  
  });

// CARGAR SUPERHEROE
  $("#batman").click(function(){
    cargarSuperheroe(batman);
  });

  $("#wonder").click(function(){
    cargarSuperheroe(wonder);
  });
 
  $("#flash").click(function(){
    cargarSuperheroe(flash);
  });
  
  $("#invisible").click(function(){
    cargarSuperheroe(invisible);
  });

// ABRE UNA VENTANA PARA GUARDAR EL ARCHIVO .PNG
function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

// CARGA A UN SUPERHEROE PREDEFINIDO
function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}

// DESCARGAR LA IMG TERMINADA
  $("#guardar").click(function(){
    guardarPixelArt();
  });

});