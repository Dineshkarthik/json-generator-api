var rules_basic = {
    condition: 'AND',
    rules: [{
        id: 'first_name',
        operator: 'equal',
        value: "user_first_name"
    },{
        id: 'last_name',
        operator: 'equal',
        value: "user_last_name"
    },{
        id: 'ascii_email',
        operator: 'equal',
        value: "email"
    },{
        id: 'phone_number',
        operator: 'equal',
        value: "telephone_number"
    },{
        id: 'address',
        operator: 'equal',
        value: "address"
    },{
        id: 'image_url',
        operator: 'equal',
        value: "image"
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
    },{
        id: 'word',
        label: 'String',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'address',
        label: 'Address',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'ascii_email',
        label: 'Email',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'boolean',
        label: 'Boolean',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'chrome',
        label: 'Chrome User-Agent',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'city',
        label: 'City',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'color_name',
        label: 'Color',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'country',
        label: 'Country',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'country_code',
        label: 'Country Code',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'date',
        label: 'Date',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'iso8601',
        label: 'Datetime',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'file_extension',
        label: 'File Extension',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'file_name',
        label: 'File Name',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'hex_color',
        label: 'Hex Color Code',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'image_url',
        label: 'Image Url',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'ipv4',
        label: 'IP V4',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'mime_type',
        label: 'Mime-Type',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'month_name',
        label: 'Month Name',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'phone_number',
        label: 'Phone Number',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'text',
        label: 'Text',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'timezone',
        label: 'Time Zone',
        type: 'string',
        operators: ['equal']
    }, {
        id: 'tld',
        label: 'Top Level Domain',
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