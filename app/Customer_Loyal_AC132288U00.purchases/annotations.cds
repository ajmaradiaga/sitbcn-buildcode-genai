using customer_Loyal_AC132288U00Srv as service from '../../srv/service';
using from '../annotations';

annotate service.Purchases with @(
    UI.FieldGroup #Main : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : purchaseValue,
            },
            {
                $Type : 'UI.DataField',
                Value : selectedProduct,
                Label : 'Product',
            },
            {
                $Type : 'UI.DataField',
                Label : 'Customer',
                Value : customer_ID,
            },
        ],
    }
);

annotate service.Purchases with {
    selectedProduct @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'A_ProductBasicText',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : selectedProduct,
                    ValueListProperty : 'Product',
                },
            ],
            Label : 'Product',
        },
        Common.ValueListWithFixedValues : true
)};

