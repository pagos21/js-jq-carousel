// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :slightly_smiling_face:
// Lo slider prevederà due frecce (icone) che permettono di mostrare le immagini, arrivati all’ultima o prima immagine dobbiamo ripartire dal lato opposto. :wink:
// In oltre per scorrere le immagini utilizziamo anche le frecce sinistra e destra della tastiera.
// controllate il codice che vi esce con event.which e event.keyCode

function next(){

      if ($("img.active").hasClass("last")) {
        $("img.first").removeClass("hide").addClass("active");
        $("img.last").removeClass("active").addClass("hide");
        $("i.first").addClass("ontarget");
        $("i.last").removeClass("ontarget");
      }
      else {
        $("img.active").next().removeClass("hide").addClass("active");
        $("img.active").prev().removeClass("active").addClass("hide");
        $("i.ontarget").next().addClass("ontarget");
        $("i.ontarget").prev().removeClass("ontarget");

      }
    }

function prev(){

        if ($("img.active").hasClass("first")) {
          $("img.last").removeClass("hide").addClass("active");
          $("img.first").removeClass("active").addClass("hide");
          $("i.last").addClass("ontarget");
          $("i.first").removeClass("ontarget");
        }
        else {
          $("img.active").prev().removeClass("hide").addClass("active");
          $("img.active").next().removeClass("active").addClass("hide");
          $("i.ontarget").prev().addClass("ontarget");
          $("i.ontarget").next().removeClass("ontarget");
        }
    }

$(document).ready(function(){

$(document).keydown(function() {
  var key = event.which;
  if(key == 39 || key == 100) {
    next();
  }
  else if (key == 37 || key == 97) {
    prev();
  }
})

$(".pointer i.img1").click(
  function(){
    $("img.active").removeClass("active").addClass("hide");
    $("img.im1").removeClass("hide").addClass("active");
    $("i.ontarget").removeClass("ontarget");
    $("i.img1").addClass("ontarget");

  })

$(".pointer i.img2").click(
  function(){
    $("img.active").removeClass("active").addClass("hide");
    $("img.im2").removeClass("hide").addClass("active");
    $("i.ontarget").removeClass("ontarget");
    $("i.img2").addClass("ontarget");
  }

)
$(".pointer i.img3").click(
  function() {
    $("img.active").removeClass("active").addClass("hide");
    $("img.im3").removeClass("hide").addClass("active");
    $("i.ontarget").removeClass("ontarget");
    $("i.img3").addClass("ontarget");
  }

)
$(".pointer i.img4").click(
  function(){
    $("img.active").removeClass("active").addClass("hide");
    $("img.im4").removeClass("hide").addClass("active");
    $("i.ontarget").removeClass("ontarget");
    $("i.img4").addClass("ontarget");
  }

)

  $("div.arrow_right i").click(next)
  $("div.arrow_left i").click(prev)
})
