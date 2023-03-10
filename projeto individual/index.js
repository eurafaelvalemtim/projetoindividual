const promp = require('prompt-synk')()
const css = []
let resp = 'CSS'
while(css!='SAIR'){
resp = prompt ('Digite uma Propriedade CSS:').toUpperCase()
if (resp!= 'SAIR'){
css.push(resp)}
}
console.log('Propriedade CSS: ${n}')


