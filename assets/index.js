$(function () {

    $('#contactMe').on('submit', function (event) {
        event.preventDefault()

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: success,
            dataType: dataType
        })
        $.post("contact.html", function (data) {
            $(".result").html(data);
        });
    })
});