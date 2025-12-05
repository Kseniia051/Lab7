$(document).ready(function() {
  console.log('jQuery готов к работе!');

  // --------------------------
  // Вкладки
  // --------------------------
  $('.tab-btn').click(function() {
    $('.tab-btn, .tab-content').removeClass('active');
    $(this).addClass('active');
    const tabId = $(this).data('tab');
    $('#' + tabId).addClass('active');
  });

  // --------------------------
  // Плавная прокрутка
  // --------------------------
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
  });

  // --------------------------
  // AJAX цитаты
  // --------------------------
  $('#loadQuote').click(() => {
    $.ajax({
      url: 'https://api.quotable.io/random',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        $('#quote p').text(data.content);
        $('#quote cite').text(data.author);
      },
      error: function() {
        $('#quote p').text('Ошибка при загрузке цитаты.');
        $('#quote cite').text('...');
      }
    });
  });

  // --------------------------
  // jQuery UI: drag & drop и datepicker
  // --------------------------
  $('#draggable').draggable();
  $('#datepicker').datepicker();
});
