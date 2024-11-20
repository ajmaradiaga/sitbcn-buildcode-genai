sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'CustomerLoyalAC132288U00/redemptions/test/integration/FirstJourney',
		'CustomerLoyalAC132288U00/redemptions/test/integration/pages/RedemptionsList',
		'CustomerLoyalAC132288U00/redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('CustomerLoyalAC132288U00/redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);