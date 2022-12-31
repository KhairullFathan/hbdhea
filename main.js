const messageNotOpen = $('.message-not-open');
const messageOpen1 = $('.message-open');
const messageOpen2 = $('.message-open-2');
const audioSrc = './audio.mp3';
$(function(){
  window.scrollTo(0,0)
  $('body').css('overflow-y','hidden');
});


messageNotOpen.on('click', function(){
  $(this).removeClass('active');
  $(this).css('display','none');
  $('body').css('overflow-y','auto');
  messageOpen1.css('display','flex');
  messageOpen2.css('display','flex');
  $(function() {
    AOS.init();
  });
  $('body').append(`<audio class="audio" src="${audioSrc}" autoplay type="audio" loop=""></audio>`)
})

$('.pop').on('click',function(e){
  party.confetti(this, {
    count: party.variation.range(20,50),
  });
})


setInterval(()=>{
  $('.pop').click();
},1000)