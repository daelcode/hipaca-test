// VARIABLES GLOBALES
var id_usuario, id_clave;

// FUNCIONES
$(document).ready(function()
{ 
    function acceso_concedido(usuario)
    {
        $(".mensaje").html(
            "<div class='alert alert-success' role='alert'"
            + "<p>Bienvenido " + usuario + "</p>"
            + "<span role='status'>  Cargando Dashboard </span>"
            + "<span class='spinner-border spinner-border-sm' aria-hidden='true'></span>"
            + "</div>"
        );

        // Agregar el timeout de 5 segundos y redirigir a otro HTML
        setTimeout(function() 
        {
            window.location.href = "index2.html";
        }, 5000); // 5000 milisegundos = 5 segundos
    };

    // AL HACER CLICK EN EL BOTON INGRESAR, VERIFICA LOS DATOS DEL USUARIO
    $("#ingreso").submit(function(e) 
    {
        e.preventDefault();
        $(".mensaje").empty();
        id_usuario = $("#usuario").val();
        id_clave = $("#clave").val();

        if (id_usuario === "hipaca" && id_clave === "Hipaca1234") 
        {
            acceso_concedido(id_usuario);
        }
        else if (id_usuario === "")
        {
            $(".mensaje").html("<div class='alert alert-danger' role='alert'><p>Ingresa un Usuario</p></div>");
            return;
        }
        else if (id_clave === "")
        {
            $(".mensaje").html("<div class='alert alert-danger' role='alert'><p>Ingresa una clave</p></div>");
            return;
        } 
        else 
        {
            $(".mensaje").html("<div class='alert alert-danger' role='alert'><p>Usuario y/o clave no validos</p></div>");
            return;
        } 
    });
    

    $("#usuario").focus();
});

function eventosDashboard() {
    $('.cliente').on('click',function(){
        let razon_social = $(this).data('razon-social');
        
        $('#razon_social').val(razon_social);
        $('#tax_id').val($(this).data('tax-id'));
        $('#telefono').val($(this).data('telefono'));
        $('#email').val($(this).data('email'));
        $('#roles').val($(this).data('roles'));
        $('#saldo').val($(this).data('saldo'));
        // let razon_social = $(this).data('razon-social');
        // let razon_social = $(this).data('razon-social');
        // let razon_social = $(this).data('razon-social');
        $('#modal_cliente_label').empty().html('Edición del cliente '+razon_social);
        $('#modal_cliente').modal('show');
    })
}