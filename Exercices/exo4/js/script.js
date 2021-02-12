var a = '1';
var b = '2';
var c = a+b;

document.writeln('type et valeur des variables');
document.writeln('----------------------------');
document.writeln('  a: ('+typeof(a)+') - value: ' + a);
document.writeln('  b: ('+typeof(b)+') - value: ' + b);
document.writeln('  c: ('+typeof(c)+') - value: ' + c);

document.writeln("");

a = parseInt(a);
b = parseInt(b);
c = a+b;

document.writeln('----------------------------');

document.writeln('  a: ('+typeof(a)+') - value: ' + a);
document.writeln('  b: ('+typeof(b)+') - value: ' + b);
document.writeln('  c: ('+typeof(c)+') - value: ' + c);
