var count =0;
var permute = function(s,firstLetterIndex) {
    firstLetterIndex = firstLetterIndex || 0;
    
    if (firstLetterIndex == s.length) {
        count = count +1;
        console.log(s);
        return;
    }
    
    for(var i = firstLetterIndex; i < s.length ; i++) {
        var ch1 = s[i], ch2 = s[firstLetterIndex], s1;
        if (i > firstLetterIndex) {
            s1 = s.substring(0, firstLetterIndex) + ch1 + s.substring(firstLetterIndex + 1, i) + ch2 + s.substring(i + 1);
        } else {
            s1 = s;
        }
        //log('f: ', firstLetterIndex, 'i: ', i, 's1: ', s1);
        permute(s1, firstLetterIndex + 1);
    }
}

permute('apple');
console.log(count);