/*
 * @name: VSCO X Premium Unlock
 * @author: LatestTechnical (latesttechnical)
 * @homepage: https://github.com/latesttechnical/nothing
 * @date: 2026-05-09
 */

var objc = JSON.parse($response.body);

objc = {
    "user_subscription": {
        "user_id": "latesttechnical_premium",
        "subscription_code": "VSCO_MEMBERSHIP",
        "expires_on_sec": 32662137600,
        "is_active": true,
        "is_trial_period": false,
        "payment_type": 1,
        "subscription_type": "yearly",
        "granted_by": "apple"
    }
};

$done({ body: JSON.stringify(objc) });
