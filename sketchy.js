$(function() {
  $('.target').click(function(e) {

    e.preventDefault();

    var currentId = '#' + $('.on').attr('id');
    var targetId = $(this).attr('href');
    var targetClass = $(targetId).attr('class');

    if (targetClass == 'right') {

      $(currentId).removeClass('on').addClass('left');
      $(targetId).removeClass('right').addClass('on');

    } else if (targetClass == 'left') {

      $(currentId).removeClass('on').addClass('right');
      $(targetId).removeClass('left').addClass('on');

    } else if (targetClass == 'top') {

      $(currentId).removeClass('on').addClass('bottom');
      $(targetId).removeClass('top').addClass('on');

    } else if (targetClass == 'bottom') {

      $(currentId).removeClass('on').addClass('top');
      $(targetId).removeClass('bottom').addClass('on');

    }

  });

  $('.rotate').click(function(e) {

    var rotationPosition = $(this).find('span').attr('class');

    if (rotationPosition == 'icon-redo') {
      $(this).find('span').removeClass('icon-redo').addClass('icon-undo');
      $('.device').addClass('landscape');
    } else {
      $(this).find('span').removeClass('icon-undo').addClass('icon-redo');
      $('.device').removeClass('landscape');
    }

  });
});