class Validator{
    isEmail(str){
        return(/@gmail.com$|org.ru$|@mail.ru$/.test(str))
    }
    isDomain(str){
        return(/\.[a-z]+$/.test(str))
    }
    isDate(str){
        let arrdate=str.split('.');
        return(/\d.\d.\d/.test(str) && arrdate[0]<=31 && arrdate[0]>=1 && arrdate[1]>=1 && arrdate[1]<=12 && arrdate[2].length==4);
    }
    isPhone(str){
        return(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(str))
    }
}
let validator=new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+7(123)456-78-90'));