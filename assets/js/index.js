/* -------------------------------------------------------------------------- */
/*                              Date Range Picker                             */
/* -------------------------------------------------------------------------- */
$(function () {
    $('input[id="datepicker"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

/* -------------------------------------------------------------------------- */
/*                               Search Select 2                              */
/* -------------------------------------------------------------------------- */
$('#destination').select2({
    theme: 'bootstrap-5'
});