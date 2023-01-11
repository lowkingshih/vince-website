// table 的 columns:
const columns = [
    // {
    //     type: 'select',
    // },
    {
        type: 'index',
        label: '項次',
        meta: {
            lgProps: {
                width: '100px',
            },
        },
    },
    {
        prop: 'airportName',
        label: '機場名稱',
    },
    {
        prop: 'airportAdress',
        label: '地址',
    },
    {
        type: 'icon',
        prop: 'position',
        label: '座標',
        meta: [
            {
                type: 'location',
            },
        ],
    },
    // select 形狀
    // {
    //     type: 'radio',
    //     prop: 'radioGroup', // prop 就是 group
    //     label: 'label1',
    //     value: 'radioValue1',
    // },
    // {
    //     type: 'radio',
    //     prop: 'radioGroup',
    //     label: 'label2',
    //     value: 'radioValue2',
    // },
    // {
    //     type: 'radio',
    //     prop: 'radioGroup',
    //     label: 'label3',
    //     value: 'radioValue3',
    // },
    {
        type: 'button',
        meta: {
            buttons: [
                {
                    type: 'edit',
                },
                {
                    type: 'delete',
                },
            ],
        },
    },
];

export { columns };
