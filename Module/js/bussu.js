/*
 * @name: Busuu Premium Unlock
 * @author: LatestTechnical (latesttechnical)
 * @homepage: https://github.com/latesttechnical/nothing
 * @date: 2026-05-09
 */

var objc = JSON.parse($response.body);

objc = {
    "user": {
        "id": "latesttechnical_premium",
        "email": "premium@latesttechnical.com",
        "premium": true,
        "premium_until": "9999-01-09T02:00:00Z",
        "subscription_type": "premium_plus",
        "is_trial": false,
        "features": {
            "offline_mode": true,
            "grammar_review": true,
            "vocabulary_trainer": true,
            "travel_courses": true,
            "business_courses": true,
            "certificates": true
        }
    }
};

$done({ body: JSON.stringify(objc) });
