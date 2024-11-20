/**
 * 
 * @On(event = { "CREATE" }, entity = "customer_Loyal_AC132288U00Srv.Purchases")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
    const { Purchases, Customers } = cds.entities;

    // Extract the purchase data from the request
    const purchaseData = request.data;

    // Calculate reward points
    const rewardPoints = Math.floor(purchaseData.purchaseValue / 10);
    purchaseData.rewardPoints = rewardPoints;

    // Insert the purchase data into the Purchases entity
    await INSERT.into(Purchases).entries(purchaseData);

    // Fetch the related customer
    const customer = await SELECT.one.from(Customers).where({ ID: purchaseData.customer_ID });

    // Check if the customer exists
    if (customer) {
        // Update the customer's total purchase value and total reward points
        const updatedCustomer = {
            totalPurchaseValue: customer.totalPurchaseValue + purchaseData.purchaseValue,
            totalRewardPoints: customer.totalRewardPoints + rewardPoints
        };

        await UPDATE(Customers).set(updatedCustomer).where({ ID: purchaseData.customer_ID });
    }
};