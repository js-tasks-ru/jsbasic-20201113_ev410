/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

function checkSpam(str) {
	
	let spamValues = ['1xBet','XXX'],
		spamCnt = 0;

	str = str.toUpperCase();
	
	for (let i = 0; i < spamValues.length; i++)
		spamCnt += (str.includes(spamValues[i].toUpperCase()) ? 1 : 0)

  	if (spamCnt > 0)
  		return true
  	else
  		return false;
}
