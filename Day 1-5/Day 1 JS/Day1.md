### 01 Exercice scope calcul (sans coder)  <a class="anchor" id="section42"></a>

Est ce que le code qui suit vous semble correcte ? Répondre sans exécuter le code. Si ce dernier n'est pas valide modifiez-le afin qu'il puisse s'exécuter correctement.

```js

let a = 1;

function calcul() {
  let a = 2 + a;

  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();

```
```js
let a = 1;

function calcul() {
  let b = 2 + a;

  console.log(b, "calcul");

  function sub_calcul() {
    let c = b + 1;

    console.log(c, "sub_calcul");
  }

  sub_calcul();
}

calcul();
```

### 02 Exercice TDZ (temporal dead zone) (sans coder) <a class="anchor" id="section43"></a>

Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code. NON

```js
function tdz() {
  console.log(tdz_val);

  let tdz_val = "Temporal Dead Zone";
}

tdz();

```
```js
function tdz() {
  let tdz_val = "Temporal Dead Zone";
  console.log(tdz_val);
}

tdz();
```

### 03 Exercice for let (sans coder) <a class="anchor" id="section44"></a>

Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code. # 0 1 2 3 4 5 6 7 8 9 100

```js
let i = 100;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
```

Est ce que le code qui suit vous semble correcte ? Répondez sans exécuter le code.

Si ce code est valide qu'affichera-t-il ? #ReferenceError

```js
for (let j = 0; j < 10; j++) {}
console.log(j);
```

### 04 Exercice const & for <a class="anchor" id="section51"></a>

1. Pouvez-vous utiliser à votre avis le mot réservé const dans la boucle suivante ? Utiliser let

```js
for (const j = 0; j < 10; j = j + 1) {}
```

2. Utilisez la syntaxe de boucle for of et const sur l'itérable STUDENTS et affichez (console.log) ses valeurs :

```js
const STUDENTS = ["Alan", "Bernard", "Jean"];

for (const student of STUDENTS) {
  console.log(student);
}
```

#### 05 Exercice ttc <a class="anchor" id="section711"></a>

1. Créez une fonction qui permet de calculer un prix TTC connaissant un prix HT. Donnez une valeur de 20% par défaut pour la TVA.

2. Vérifiez que le type des variables passées en paramètre ne posent pas de problème. Utilisez **parseFloat** pour la vérification des types. Affichez les résultats avec au plus 2 chiffres après la virgule.

```js

// 1.
ttc(100, 0.2); // 120
ttc(100.50, 0.2); // 144.72

// 2.
// Gestion du type
ttc("hello", 0.2); // Erreur de type
ttc(100.50, "hello"); // Erreur de type
ttc("100", ".3"); // 130
```
```js
function ttc(prixHT, tva = 0.2) {

  prixHT = parseFloat(prixHT);
  tva = parseFloat(tva);

  if (isNaN(prixHT) || isNaN(tva)) {
    return "Erreur de type";
  }

  const prixTTC = prixHT * (1 + tva);

  return prixTTC.toFixed(2);
}

console.log(ttc(100, 0.2)); 
console.log(ttc(100.50, 0.2));

```
#### 06 Exercice fonction ttc spread operator <a class="anchor" id="section721"></a>

Ecrivez une fonction **sumTTC** qui prend 3 nombres arbitraires de prix HT et retourne la somme de ces prix TTC. La TVA est  un paramètre facultatif (20%).
Vérifiez que le type des variables passées en paramètre ne posent pas de problème, utilisez **parseFloat**. Affichez les résultats avec au plus 2 chiffres après la virgule.

Les prix HT seront donnés dans un tableau :

```js
const priceHT = [100.50, 200.8, 55.7];

console.log(sumTTC(...priceHT));
console.log(sumTTC(...priceHT, .3));

// vérifiez le type des variables
const badPriceHT = [100.50, "hello", 55.7];
console.log(sumTTC(...badPriceHT, .3));
```
```js
function sumTTC(...prices) {
  let tva = 0.2; // TVA par défaut

  const lastValue = prices[prices.length - 1];
  if (typeof lastValue === "number") {
    tva = parseFloat(lastValue);
    prices.pop(); // Supprimer la dernière valeur si c'est la TVA
  }

  prices = prices.map((price) => parseFloat(price));

  if (prices.some(isNaN) || isNaN(tva)) {
    return "Erreur de type";
  }

  const sumTTC = prices.reduce((acc, priceHT) => acc + priceHT * (1 + tva), 0);

  return sumTTC.toFixed(2);
}

const priceHT = [100.50, 200.8, 55.7];
console.log(sumTTC(...priceHT)); 
console.log(sumTTC(...priceHT, 0.3)); 
```

#### 07 Exercice function & expression <a class="anchor" id="section751"></a>

*Sans exécuter le code.*

Nommez les types de fonction ci-dessous :

```js
const myFunc = function(){

  function bar(){
    // ...
  }
}
```
  myFunc est une expression de fonction
  bar est une fonction déclarée
Les fonctions déclarées sont définies dès le début du script ou de la fonction qui la contient.

Les expressions de fonction sont définies après leur évaluation.

#### 08 Exercice déclaration d'une fonction <a class="anchor" id="section752"></a>

*Sans exécuter le code.*

1. Le code suivant est-il valide ? OUI

```js
bar();

function bar(){
  console.log("bar");
}
```

2. Le code suivant est-il valide ? NON TypeError appeler la fonction myFunc avant de l'avoir définie

```js
myFunc();

const myFunc = function(){
    console.log("Expression");
}
```

### 09 Créez une fonction zip

La fonction zip prend en paramètre deux tableaux de même dimension et crée des couples de 2 éléments terme à terme, et retourne un tableau des couples.

```js
zip([1,2], [3, 4]);

//[[1,3], [2, 4]]

```
```js
function zip(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Les tableaux n'ont pas la même dimension.");
  }

  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
}

const array1 = [1, 2];
const array2 = [3, 4];

const zippedArray = zip(array1, array2);
console.log(zippedArray); // Affiche [[1, 3], [2, 4]]
```

### 10 Objet add

Créez un objet Add qui additionne soit deux entiers soit une liste de nombre(s), voyez un exemple d'utilisation ci-dessus :

```js
Add.a = 10;
Add.b = 20;

Add.sum(); // 30

Add.numbers = [1, 2, 4];

Add.sum(); // 37

Add.reset()

Add.numbers = [1, 2, 4];

Add.sum(); // 7

```
```js
const Add = {
  a: 0,
  b: 0,
  numbers: [],

  sum: function () {
    if (this.numbers.length > 0) {
      return this.numbers.reduce((acc, current) => acc + current, 0);
    } else {
      return this.a + this.b;
    }
  },

  reset: function () {
    this.a = 0;
    this.b = 0;
    this.numbers = [];
  },
};

Add.a = 10;
Add.b = 20;
console.log(Add.sum()); 

Add.numbers = [1, 2, 4];
console.log(Add.sum()); 

Add.reset();

Add.numbers = [1, 2, 4];
console.log(Add.sum()); 
```


### 11 Exercice de synthèse corrigé un effet de bord <a class="anchor" id="section79"></a>

Comment éviter l'effet de bord sur la propriété this (undefined) dans le code suivant? Proposez une solution.

```js
const log = {
    count : 100,
    save: function () {
        'use strict';
        console.log(this.count);
    }
}
setTimeout(log.save, 500);
```
effet de bord, le probleme est la méthode "save" est appelée a partir de "setTimeout", ce qui modifie la valeur de "this" a l'intérieur de la méthode, et "this" devient "undefined".
utiliser une arrow function pour définir la methode "save" cad conservent le contexte "this" du parent

```js

const log = {
    count: 100,
    save: () => {
        'use strict';
        console.log(this.count);
    }
}
setTimeout(log.save, 500);
```
