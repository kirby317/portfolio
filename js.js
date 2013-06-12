$(document).ready(function (e) {
    pulse();
    function pulse() {
        $('#ie').animate({
            height: '15px',
        }, 400, function () {
            // First animate complete
            $('#ie').animate({
                height: '20px',
            }, 400, function () {
                // Second animate complete
                pulse();
            });
        });
    }
});