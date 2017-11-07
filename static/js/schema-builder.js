var rules_basic = {
    rules: [{
        id: 'name',
        operator: 'equal',
        value: "user_name"
    }]
};

$('#schema-builder').queryBuilder({
    plugins: ['bt-tooltip-errors'],

    filters: [{
        id: 'name',
        label: 'Full Name',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'first_name',
        label: 'First Name',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'last_name',
        label: 'Last Name',
        type: 'string',
        operators: ['equal']
    }],

    rules: rules_basic
});

$('#btn-reset').on('click', function() {
    $('#schema-builder').queryBuilder('reset');
});

$('#btn-submit').on('click', function() {
    var result = $('#schema-builder').queryBuilder('getRules');

    if (!$.isEmptyObject(result)) {
        schema_obj = {};
        form = new FormData();
        result.rules.forEach(function(item) {
            schema_obj[item.value] = item.id
        });
        $.ajax({
            url: window.location.href,
            data: "schema=" + JSON.stringify(schema_obj),
            type: "POST",
            success: function(resultData) {
                location.href = location.href + "success/" + resultData
            }
        });
    }
});