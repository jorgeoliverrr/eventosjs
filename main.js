// variable que busque elementeo se busca entre comillas simples
// variable que busque atributo lo hace con comillas simbre y corchetes
// revisar apuntes clases anteriores

// 1. Pon tu nombre al atributo value del campo first name
// variable que busque atributo de nombre "firstname" y le asiga el valor/texto "Nicolas"
// $('[name=firstname]').val('Nicolas')
// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
// $('[name=fav_day]').val('Monday')
// 3. Cambia la etiqueta de First name a 'Tu nombre'
// $('[name=firstname]').val('Tu nombre')
// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
// a una variable de nombre x le asigo la busqueda del atributo llamando su valor
// var x = $('[name=fav_day]').val()
// 5. Escoge la opción Female de la pregunta de género.
// $('[value=female]').prop('checked', true)
// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
// variable que busque elemento
// $('form').eq(0).attr('name', 'personal_info')
// 7. Encuentra la primera form del documento y pon el atributo (ATTR) name = job_info
// $('form').eq(0).attr('name', 'job_info')
// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
// $('form').eq(0).prepend('<h1>Entrevista Personal</h1>')
// $('form').eq(1).prepend('<h1>Entrevista Trabajo</h1>')
// 9. Agrega un título a la pregunta Male/Female 'Gender'
// insertAfter inserta un valor/texto despues de la busqueda del atributo, posicionandose antes del atributo
// $('<h2>Gender</h2>').insertAfter($('[value=male]').prev())

// 10. Agrega una pregunta Email: con un input de tipo texto después de last name
// $('<br><label name="email_label">Email:</label><br><input type="text" name="email">').insertAfter('[name=lastname]')
// 11. Agrega la clase form a ambas formas
// $('form').eq(0).addClass('form')
// $('form').eq(1).addClass('form')


// this vs $(this)
// this -> elemento trabajando bajo el contexto -> elemento que se le hace el click
// $(this) -> es un elemento de jquery

// $(function(){
//    $('body div').on('click', function(e){
//        console.log('hola')
//    })
// })

// $(function() {
//    $('.section h2').on('click', function(){
//        var h2 = $(this)
//        var isClosed = h2.next().hasClass('close')
//        $('.section').each(function(el) {
//            $(this).children('p').addClass('close')
//        })
//        if (isClosed){
//            h2.next().removeClass('close')
//       }
//    })
//})
