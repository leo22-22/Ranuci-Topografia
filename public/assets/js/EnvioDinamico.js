$(document).ready(function () {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

  $('#Forms').submit(function (e) {
    e.preventDefault();

    var telefone = $('#phone').val();

    $('#resposta').html('<p> </p>');

    if (!telefone || telefone.length < 14) {
      $('#resposta').html('<p style="color: red; position: relative; font-weight: bold;">Telefone inválido!</p>');
      return alert('A');
    }

    var dados = $(this).serialize();

    console.log(dados)

    $.ajax({
      type: 'POST',
      url: '/contact',
      data: dados,
      success: function (response) {
        $('#resposta').html('<p style="position: relative; color:white; font-weight: bold;">Dados enviados com sucesso!</p>');
        $('#Forms')[0].reset();
      },
      error: function (xhr) {
        let msg = 'Erro ao enviar. Tente novamente.';
        if (xhr.status === 400 || xhr.status === 429) {
          const res = xhr.responseJSON;
          if (res && res.message) {
            msg = res.message;
          }
        }
        $('#resposta').html('<p style="position: relative; color:red; font-weight: bold;">' + msg + '</p>');
      }
    });
  });
});
