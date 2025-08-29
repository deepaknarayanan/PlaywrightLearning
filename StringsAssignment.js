// ==========================================
// code 1
function lengthOfLastWord(s) {
 let gth =0;


for(let i=0; i<s.length-1 ;i++)
{
    if(s[i]!=' ')
    {
        gth++;
    }
    else if (gth>0)
    {
    break;
    }
}
return gth; 
}
const s = "Hello World";
console.log(lengthOfLastWord(s));
// ==========================================
// code1

const s1 = "Hello World";
const lengtha =s1.trim();
console.log(lengtha)    
const word=s1.trim().split(" ");
const lastword=word[word.length-1];

 console.log(lastword.length)

 // ==========================================
//Code2

let sa = " fly me to the moon "
const a=sa.trim().split(' ');

let lastworda=a[a.length-1];
console.log(lastworda.length)

// ==========================================
//Code3

function isAnagram(str1, str2) {
  

  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

 
  return sortedStr1 === sortedStr2;
}


console.log(isAnagram('listen', 'silent')); 
console.log(isAnagram('hello', 'world'));   

// ==========================================