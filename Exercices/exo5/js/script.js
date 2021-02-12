function sumAll() {
    var index;
    var sum = 0;
    for (index = 0; index < arguments.length; ++index) {
        sum += arguments[index];
    }

    return sum;
}

var a = 12;
var b = 34;
var c = 56;
var d = 78;
var e = 90;

document.writeln("Variables définies:");
document.writeln("-------------------");
document.writeln("a = "+a);
document.writeln("b = "+b);
document.writeln("c = "+c);
document.writeln("d = "+d);
document.writeln("e = "+e);
document.writeln("")

document.writeln("Additions:");
document.writeln("----------");

document.writeln("Somme de a ("+a+"), b ("+b+") et c ("+c+") : sumAll(a, b, c) => "+sumAll(a, b, c));
document.writeln("Somme de b ("+b+") et d ("+d+")                         : sumAll(b, d)          => "+sumAll(b, d));
document.writeln("Somme de a ("+a+"), b ("+b+"), c ("+c+"), d ("+d+") et e ("+e+") : sumAll(a, b, c, d, e) => "+sumAll(a, b, c, d, e));
document.writeln("Somme d'aucun élément                             : sumAll()              => "+sumAll());