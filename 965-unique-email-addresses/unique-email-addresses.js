/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let sett = new Set()
    for(let email of emails){
        let s = email.split("@")
        let local = s[0].split("+")[0].replaceAll(".","")
        let domain = s[1]
        sett.add(local+"@"+domain)
    }
    return sett.size
};