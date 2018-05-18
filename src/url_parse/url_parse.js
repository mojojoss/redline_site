function URLparse(str, a) {
    a = document.createElement('a');
    a.href = str;
    a[origin] = a.protocol + a.host;
    return a;
}
var url = URLparse("http://redlg.ru.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo", url);
console.log(
    url.href + ' href\n' +
    url.protocol + ' protocol\n' +
    url.hostname + ' hostname\n' +
    url.port + ' port\n' +
    url.pathname + ' pathname\n' +
    url.search + ' search\n' +
    url.hash + ' hash\n' +
    url.host + ' host\n' +
    url.origin + ' origin'
);



function buildtable(json) {
    for (var i = 0; i < json.users.length; i++) {
        $('#tbody').append('<tr><td>' + json.users[i].index + '</td><td>' + json.users[i].name + '</td><td>' + json.users[i].surname + '</td><td>' + json.users[i].email + '</td><td>' + json.users[i].phone + '</td></tr>');
    }
}

$.getJSON("http://www.json-generator.com/api/json/get/cerYupRRSG?indent=2")
    .done(function (json) {
        buildtable(json);
        table.onclick = function (e) {

            if (e.target.tagName == 'TH') {

                if (e.target.getAttribute('data-sort') == 'false') {
                    $('th').attr('data-sort', 'false');
                    e.target.setAttribute('data-sort', 'true');
                    switch (e.target.getAttribute("name")) {
                        case "index":
                            for (var i = 0; i < json.users.length - 1; i++)
                                for (var j = 0; j < json.users.length - i - 1; j++)
                                    if (json.users[j].index > json.users[j + 1].index) {
                                        var max = json.users[j];
                                        json.users[j] = json.users[j + 1];
                                        json.users[j + 1] = max;
                                    }
                            $('tbody').empty();
                            buildtable(json);
                            break;
                        case "name":
                            for (var i = 0; i < json.users.length - 1; i++)
                                for (var j = 0; j < json.users.length - i - 1; j++)
                                    if (json.users[j].name > json.users[j + 1].name) {
                                        var max = json.users[j];
                                        json.users[j] = json.users[j + 1];
                                        json.users[j + 1] = max;
                                    }

                            $('tbody').empty();
                            buildtable(json);
                            break;
                        case "surname":
                            for (var i = 0; i < json.users.length - 1; i++)
                                for (var j = 0; j < json.users.length - i - 1; j++)
                                    if (json.users[j].surname > json.users[j + 1].surname) {
                                        var max = json.users[j];
                                        json.users[j] = json.users[j + 1];
                                        json.users[j + 1] = max;
                                    }

                            $('tbody').empty();
                            buildtable(json);
                            break;
                        case "email":
                            for (var i = 0; i < json.users.length - 1; i++)
                                for (var j = 0; j < json.users.length - i - 1; j++)
                                    if (json.users[j].email > json.users[j + 1].email) {
                                        var max = json.users[j];
                                        json.users[j] = json.users[j + 1];
                                        json.users[j + 1] = max;
                                    }

                            $('tbody').empty();
                            buildtable(json);
                            break;
                        case "phone":
                            for (var i = 0; i < json.users.length - 1; i++)
                                for (var j = 0; j < json.users.length - i - 1; j++)
                                    if (json.users[j].phone > json.users[j + 1].phone) {
                                        var max = json.users[j];
                                        json.users[j] = json.users[j + 1];
                                        json.users[j + 1] = max;
                                    }

                            $('tbody').empty();
                            buildtable(json);
                            break;
                    }

                    //                    if()
                } else {
                    $('tbody').empty();
                    json.users.reverse();
                    buildtable(json);
                }
            };
        }

    })
    .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        console.log("Request Failed: " + err);
    });
$("tbody").click(function (event) {
//    console.log(event.target.closest("tr"));
//    for (var childItem in event.target.closest("tr").childNodes)
        console.log(event.target.closest("tr").childNodes[0].innerHTML);
    console.log(event.target.closest("tr").childNodes[1].innerHTML);
    console.log(event.target.closest("tr").childNodes[2].innerHTML);
    console.log(event.target.closest("tr").childNodes[3].innerHTML);
    console.log(event.target.closest("tr").childNodes[4].innerHTML);
    $('#tr-info').append('<span>выбран пользователь ' + event.target.closest("tr").childNodes[1].innerHTML + '</span><br><p>описание: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar tempor metus non placerat. Integer a dui molestie, pulvinar tortor quis, convallis lorem. Vestibulum nunc quam, convallis at mauris id, pharetra lacinia risus. Sed eu pharetra mi. Cras tincidunt orci enim, id consequat libero tincidunt nec. Proin iaculis metus in mauris tincidunt pretium.</p><span>id:<b>' + event.target.closest("tr").childNodes[0].innerHTML + '</b></span><br>' + '<span>имя:<b>' + event.target.closest("tr").childNodes[1].innerHTML + '</b></span><br>' + '<span>фамилия:<b>' + event.target.closest("tr").childNodes[2].innerHTML + '</b></span><br>' + '<span>email:<b>' + event.target.closest("tr").childNodes[3].innerHTML + '</b></span><br>' + '<span>телефон:<b>' + event.target.closest("tr").childNodes[4].innerHTML + '</b></span><br>')
})
