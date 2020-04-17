class MyString{
    reverse(str){
        return(str.split('').reverse().join(''));
    }
    ucFirst(str){
        return(str.slice(0,1).toUpperCase()+str.slice(1));
    }
    ucWords(str){
        let words=str.split(' ');
        for(let i=0;i<words.length;i++){
            words[i]=words[i].slice(0,1).toUpperCase()+words[i].slice(1);
        }
        return(words.join(' '));
    }
}
let str=new MyString();
console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));