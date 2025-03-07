using { S4HANA_Joule_Product } from './external/S4HANA_Joule_Product.cds';

using { Customer_Loyal_AC132288U00 as my } from '../db/schema.cds';

@path : '/service/customer_Loyal_AC132288U00'
service customer_Loyal_AC132288U00Srv
{
    entity Customers as
        projection on my.Customers;

    entity Purchases as
        projection on my.Purchases;

    entity Redemptions as
        projection on my.Redemptions;

    entity A_ProductBasicText as
        projection on S4HANA_Joule_Product.A_ProductBasicText;
}

annotate customer_Loyal_AC132288U00Srv with @requires :
[
    'authenticated-user'
];
