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


  $("div.arrow_right i").click(
    function(){

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
  )



  $("div.arrow_left i").click(
    function(){
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
  )
})
