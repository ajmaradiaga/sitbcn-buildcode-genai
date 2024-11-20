sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomerLoyalAC132288U00/customers/test/integration/FirstJourney',
		'CustomerLoyalAC132288U00/customers/test/integration/pages/CustomersList',
		'CustomerLoyalAC132288U00/customers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomerLoyalAC132288U00/customers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);