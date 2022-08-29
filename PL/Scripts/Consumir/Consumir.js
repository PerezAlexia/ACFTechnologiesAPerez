
$(document).ready(function () {
    GetAll();
    
});


function GetAll() {
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos',
        success: function (result) {//200 OK
           
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < result.length; j++) {
                    var objeto = result[i, j];

                    var filas =
                        '<tr>'

                        + "<td class='hidden'>" + objeto.albumId + "</td>"
                        + "<td class='hidden'>" + objeto.id + "</td>"
                        + "<td class='text-center'>" + objeto.title + "</td>"
                        + "<td class='text-center'>" + objeto.url + "</ td>"
                        + "<td class='text-center'>" + "<img src= " + objeto.thumbnailUrl + ">" + "</td>"

                        + "</tr>";

                    $("#tblConsumir tbody").append(filas);

                    $('#tblConsumir').DataTable();

                }
            }

        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);

        }
    });
}

//function GetAll() {
//    $.ajax({
//        type: 'GET',
//        url: 'https://randomuser.me/api/',
//        success: function (result) {//200 OK 
//            $('#tblUsuario tbody');

//            var filas =
//                '<tr>'
//                + "<td class='text-center'>" + result.results[0].gender + "</td>"
//                + "<td class='text-center'>" + result.results[0].name.title + " " + result.results[0].name.first + " " + result.results[0].name.last + "</td>"
//                + "<td class='text-center'>" + result.results[0].location.street.number + result.results[0].location.street.name + "</td>"
//                + "<td class='text-center'>" + result.results[0].email + "</td>"
//                + "<td>" + "<img src= " + result.results[0].picture.large + ">" + "</td>"
//                + "</tr>";
//            $("#tblUsuario tbody").append(filas);

//        },
//        error: function (result) {
//            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
//        }
//    });
//}