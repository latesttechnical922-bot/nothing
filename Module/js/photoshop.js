/*
 * @name: Photoshop Express Premium Unlock
 * @author: LatestTechnical (latesttechnical)
 * @homepage: https://github.com/latesttechnical/nothing
 * @date: 2026-05-09
 */

var objc = JSON.parse($response.body);

objc = {
    "mobileProfile": {
        "profileStatus": "PROFILE_AVAILABLE",
        "relationshipProfile": {
            "commerce": {
                "subscriptions": [
                    {
                        "productArrangement": "INDIVIDUAL",
                        "productName": "PHOTOSHOP_EXPRESS_PREMIUM",
                        "status": "ACTIVE",
                        "store": "APPLE_APPSTORE",
                        "contractId": "latesttechnical_premium_2024"
                    }
                ]
            }
        }
    }
};

$done({ body: JSON.stringify(objc) });
