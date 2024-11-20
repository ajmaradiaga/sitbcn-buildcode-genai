sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomerLoyalAC132288U00/purchases/test/integration/FirstJourney',
		'CustomerLoyalAC132288U00/purchases/test/integration/pages/PurchasesList',
		'CustomerLoyalAC132288U00/purchases/test/integration/pages/PurchasesObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchasesList, PurchasesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomerLoyalAC132288U00/purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchasesList: PurchasesList,
					onThePurchasesObjectPage: PurchasesObjectPage
                }
            },
            opaJourney.run
        );
    }
);