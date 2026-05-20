/*
 * @name: Emby Premiere Unlock
 * @author: LatestTechnical (latesttechnical)
 * @homepage: https://github.com/latesttechnical/nothing
 * @date: 2026-05-09
 */

var objc = JSON.parse($response.body);

objc = {
    "cacheExpirationDays": 999,
    "message": "Device is valid",
    "resultCode": "GOOD"
};

$done({ body: JSON.stringify(objc) });
