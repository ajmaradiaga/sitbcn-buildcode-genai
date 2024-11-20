/**
 * 
 * @On(event = { "CREATE" }, entity = "customer_Loyal_AC132288U00Srv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
    const { Redemptions, Customers } = cds.entities;

    // Extract the redemption details from the request data
    const { customer_ID, redeemedAmount } = request.data;

    // Ensure the customer_ID and redeemedAmount are defined
    if (!customer_ID || redeemedAmount === undefined) {
        return request.error(400, 'Customer ID and redeemed amount must be provided.');
    }

    // Fetch the related customer
    const customer = await SELECT.one.from(Customers).where({ ID: customer_ID });

    // Ensure the customer exists
    if (!customer) {
        return request.error(404, 'Customer not found.');
    }

    // Update the customer's reward points
    const updatedCustomer = {
        totalRewardPoints: customer.totalRewardPoints - redeemedAmount,
        totalRedeemedRewardPoints: customer.totalRedeemedRewardPoints + redeemedAmount
    };

    // Ensure the totalRewardPoints does not go negative
    if (updatedCustomer.totalRewardPoints < 0) {
        return request.error(400, 'Insufficient reward points.');
    }

    // Update the customer record
    await UPDATE(Customers).set(updatedCustomer).where({ ID: customer_ID });
};