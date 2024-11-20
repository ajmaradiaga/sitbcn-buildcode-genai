using { S4HANA_Joule_Product } from '../srv/external/S4HANA_Joule_Product.cds'; 
namespace Customer_Loyal_AC132288U00;
using { cuid } from '@sap/cds/common';

@assert.unique: { customerNumber: [customerNumber] }
entity Customers : cuid {
  name: String(100);
  email: String(100);
  customerNumber: Integer @mandatory;
  totalPurchaseValue: Integer;
  totalRewardPoints: Integer;
  totalRedeemedRewardPoints: Integer;
  purchases: Association to many Purchases on purchases.customer = $self;
  redemptions: Association to many Redemptions on redemptions.customer = $self;
}

entity Purchases : cuid {
  purchaseValue: Integer;
  rewardPoints: Integer;
  selectedProduct: String(100);
  customer: Association to Customers;
}

entity Redemptions : cuid {
  redeemedAmount: Integer;
  customer: Association to Customers;
}

