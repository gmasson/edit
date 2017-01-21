/*
function atalho(key){
  // if(key==1){ addcode('screen',codebtn_base); /* CTRL+Shift+A * / }
  // if(key==2){ addcode('screen',codebtn_base); /* CTRL+Shift+B * / }
  // if(key==3){ addcode('screen',codebtn_base); /* CTRL+Shift+C * / }
  // if(key==4){ addcode('screen',codebtn_base); /* CTRL+Shift+D * / }
  // alert(key);
}
*/

function addtext(idElement, text) {
  var area = document.getElementById(idElement);
  var cursorPosition = area.selectionStart;
  cursorposition(area, cursorPosition, text);
  updatecursorposition(cursorPosition, text, area);
}

function cursorposition(area, cursorPosition, text) {
  var front = (area.value).substring(0, cursorPosition);
  var back = (area.value).substring(cursorPosition, area.value.length);
  area.value = front + text + back;
}

function updatecursorposition(cursorPosition, text, area) {
  cursorPosition = cursorPosition + text.length;
  area.selectionStart = cursorPosition;
  area.selectionEnd = cursorPosition;
  area.focus();    
}

function savetext(idElement, nameElement) {
  var textscreen = document.getElementById(idElement).value;
  window.localStorage.setItem(nameElement, textscreen);
}

function recovertext(idElement, nameElement) {
  var text = window.localStorage.getItem(nameElement);
  if (text == null) { var text = ''; }
  addtext(idElement, text);
  text.download = "teste.html";
}

/*
---------------------------
-- Códigos
---------------------------
*/

/* HTML */
var codebtn_base = '<!DOCTYPE HTML>\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta charset="utf-8">\n    <meta name="Resource-type" content="document">\n    <meta name="Robots" content="all">\n    <meta name="Rating" content="general">\n    <title>SITE</title>\n    <meta name="description" content="SITE">\n    <meta name="author" content="SITE">\n    <meta name="keywords" content="SITE, SITE">\n    <meta property="og:image" content="img/social.png">\n    <link href="img/favicon.png" rel="shortcut icon" type="image/x-icon">\n    <link href="css/style.css" rel="stylesheet" type="text/css">\n    <script src="js/script.js"></script>\n  </head>\n  <body>\n \n    <header>\n      header...\n    </header>\n \n    <section>\n      section...\n    </section>\n \n    <footer>\n      footer...\n    </footer>\n \n  </body>\n</html>\n';
var codebtn_strong = '<strong></strong>';
var codebtn_p = '<p></p>';
var codebtn_div = '<div class="classe"></div>';
var codebtn_a = '<a href="#" class="btn" target="_blank">Link</a>';
var codebtn_strong = '<strong></strong>';
var codebtn_script = '<script src="script.js" type="text/javascript"></script>';
var codebtn_style = '<style type="text/css"></style>';
var codebtn_link = '<link href="style.css" rel="stylesheet" type="text/css">';
var codebtn_hr = '<br><hr><br>';
var codebtn_php = '<?php\n  include "pg.php";\n  echo "test";\n?>';

/* Estrutura */
var codebtn_row = '<div class="row"></div>';
var codebtn_col12 = '<div class="col-sm-12"></div>';
var codebtn_col11 = '<div class="col-sm-11"></div>';
var codebtn_col10 = '<div class="col-sm-10"></div>';
var codebtn_col9 = '<div class="col-sm-9"></div>';
var codebtn_col8 = '<div class="col-sm-8"></div>';
var codebtn_col7 = '<div class="col-sm-7"></div>';
var codebtn_col6 = '<div class="col-sm-6"></div>';
var codebtn_col5 = '<div class="col-sm-5"></div>';
var codebtn_col4 = '<div class="col-sm-4"></div>';
var codebtn_col3 = '<div class="col-sm-3"></div>';
var codebtn_col2 = '<div class="col-sm-2"></div>';
var codebtn_col1 = '<div class="col-sm-1"></div>';

/* Elementos */
var codebtn_icon = '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>';