// text slider base by https://codepen.io/brianjhanson/pen/Dtjvw

var factList = [
  "are delicious.",
  "will always be personalized.",
  "are eco-friendly.",
  "will be carried to your event.",
];

var perRow = factList.length;
console.log("perRow = " + perRow)
var radius = perRow * 6;
var angle = 360 / perRow;
console.log("Angle = " + angle);
var n = 1;

var height = $('h1').css('height');

function create_row(){
  for (i = 0; i < perRow; i++){
    $('.factlist').append('<li class="fact-'+i+'">'+factList[i]+'</li>');
    $('.fact-'+i+'').css({
      '-webkit-transform' : 'rotate(' + -angle * i + 'deg)',
      '-moz-transform' : 'rotate(' + -angle * i + 'deg)'
    });
  }
};

create_row();


setInterval(function(){
  $('.factlist').css({
    '-webkit-transform':'rotate(' + angle * n + 'deg)',
    '-moz-transform': 'rotate(' + angle * n + 'deg)'
  });
  n++;
}, 2000);
