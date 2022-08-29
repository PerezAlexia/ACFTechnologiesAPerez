
$(document).ready(function () {
    GetAll();
    $.noConflict();
    $('#tblConsumir').DataTable();



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
                        + "<td class='text-center'>" + '<img src= ' + objeto.thumbnailUrl + '>' + "</td>"

                        

                        + "</tr>";

                    $("#tblConsumir tbody").append(filas);

                    /*$('#tblConsumir').DataTable();*/

                }
            }

        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);

        }
    });
}





$(document).ready(function () {
    $('#tblConsumir').dataTable({
        "processing": true, // control the processing indicator.
        "serverSide": true, // recommended to use serverSide when data is more than 10000 rows for performance reasons
        "info": true,   // control table information display field
        "stateSave": true,  //restore table state on page reload,
        "lengthMenu": [[10, 20, 50, -1], [10, 20, 50, "All"]],    // use the first inner array as the page length values and the second inner array as the displayed options
        "ajax": {
            "url": "@string.Format("{0}"://{1}{2}", Request.Url.Scheme, Request.Url.Authority, Url.Content("~"))/Home/AjaxGetJsonData",
        "type": "GET"
                },
    "columns": [
    { "data": "idAlbum", "orderable": true },
    { "data": "id", "orderable": false },
    { "data": "title", "orderable": true },
    {
        "render": function (data, type, JsonResultRow, meta) {
            return '<img src="Content/' + JsonResultRow.ImageAddress + '">';
        }
    }
],
    "order": [[0, "asc"]]
            });
        });