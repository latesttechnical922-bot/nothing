/*
 * @name: Xmind Premium Unlock
 * @desc: Unlock Xmind mind-map subscription until year 2030
 * @author: LatestTechnical (latesttechnical)
 * @homepage: https://github.com/latesttechnical/nothing
 * @date: 2026-05-09
 */

const obj = JSON.parse($response.body);
obj.license = obj.license || {};
obj.license.status = "sub";
obj.license.expireTime = 1893456000000; // 2030-01-01 ms

$done({ body: JSON.stringify(obj) });
