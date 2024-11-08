function  sayGoodbye()
{
    console.log("Good Bye!");
}
function greet(name,sayGood)//sayGood is a function passed as a parameter
{
    console.log(`hai,${name}`);
    sayGood();//call back
}
greet('kavi',sayGoodbye)     //sayGoodbye is a function