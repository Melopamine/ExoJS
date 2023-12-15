Introduction aux structures de données
Les tableaux

Vous pouvez définir un tableau, qui n'est rien d'autre qu'un objet JS, simplement à l'aide de crochets :

let fruits =  ['Apple', 'Orange'];

### 01 Exercice reference array <a class="anchor" id="section42"></a>

Reprenez la variable fruits ci-dessus. Que vaut le console.log dans l'exemple suivant? Affichez le contenu des deux tableaux :

```js
let fruits =  ['Apple', 'Orange'];

let newFruits = fruits;

newFruits.push('Banana')

console.log(newFruits === fruits)
```
Ecrivez un script pour créer un nouveau tableau newFruits qui n'a pas la même référence que le tableau fruits. Puis vérifiez que ce n'est plus la même référence :

```js
let newFruitz = [...fruits];
// ou newFruits = fruits.slice()
newFruits.push('Banana');
console.log(newFruits === fruits);
```

Fonction map

La méthode map permet de parcourir un tableau et d'exécuter une fonction pour chaqu'un de ses éléments. Elle retournera un nouveau tableau.

```js
const sheeps = ['🐑', '🐑', '🐑'];

const newSheeps = sheeps.map( sheep => sheep + sheep );
 // ["🐑🐑", "🐑🐑", "🐑🐑"]
```

### 02 Exercice power 3 <a class="anchor" id="section42"></a>

Soit numbers une liste de nombres entiers, élevez uniquement à la puissance 3 les nombres pairs.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0)
const powerNumbers = evenNumbers.map(number => number ** 3)
console.loge(powerNumbers)
```

Indications : pour calculer une puissance utilisez l'opérateur suivant

// opérateur puissance
2**3 // 8

  filter, il permet de filtrer des données dans un tableau en fonction d'un critère.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter(number => number > 4);
// [5, 6, 7, 8, 9, 10]
```

  reduce, applique une fonction qui est un accumulateur et qui traite chaque valeur d'une liste de la gauche vers la droite afin de la réduire en une seule valeur. Vous pouvez passer en deuxième paramètre une valeur facultative.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// première paramètre fonction fléchée, deuxième paramètre val init de acc
const total = numbers.reduce((acc, curr) => curr + acc, 0);
console.log(total); // affiche 55

numbers.reduce((acc, curr) => curr + acc, 100);
// 155
```

### 03 Exercice populations <a class="anchor" id="section42"></a>

Parcourez le tableau populations et ajoutez un champ count qui compte le nombre d'occurence(s) de a et de l dans les noms. Utilisez un for of.

```js
const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];

for (const person of populations) {
  const name = person.name.toLowerCase();
  const countA = name.split('a').length - 1;
  const countL =name.split('l').length - 1;
  person.count = countA + countL;
}

function compareNumbers(a, b) {
  return a - b;
}

populations.sort((a, b) => a.count - b.count);
```

Ordonnez maintenant le tableau par ordre croissant de nombre de a et l dans les noms.

### 04 Exercice max (challenge) <a class="anchor" id="section42"></a>

Soit le tableau d'entiers suivant :

```js
const numbers = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];
const total = numbers.reduce((acc, curr) => curr + acc, 0);
console.log(total);
```
Utilisez la méthode reduce pour calculer le max.

### 05 Exercice reduce sum impair (challenge) <a class="anchor" id="section42"></a>

Faites la somme des nombres impairs en utilisant la fonction reduce des valeurs suivantes :

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddsNumbers = numbers.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    return acc + curr;
  }
  return acc;
}, 0);
console.log(oddsNumbers);
```

### 06 Exercice fonction map sur un littéral <a class="anchor" id="section42"></a>

Utilisez la fonction map pour calculer le prix TTC des téléphones. Utilisez une fonction fléchée.

```js
const phones = [
  { name: "iphone XX", priceHT: 900 },
  { name: "iphone X", priceHT: 700 },
  { name: "iphone B", priceHT: 200 },
];

const CalcTTC = (phone) => {
  const taxRate = 0.20;
  const prixTTC = phone.priceHT * (1 + taxRate);
  return { ...phone, prixTTC };
};

const NewPrixTTC = phones.map(CalcTTC);

console.log(NewPrixTTC);
```
```js
const phones = [
  { name: "iphone XX", priceHT: 900 },
  { name: "iphone X", priceHT: 700 },
  { name: "iphone B", priceHT: 200 },
];

const phonesWithPriceTTC = phones.map(phone => ({
  ...phone,
  priceTTC: phone.priceHT * 1.20
}));

console.log(phonesWithPriceTTC);
```

### 07 Exercice square numbers <a class="anchor" id="section42"></a>

Soit le point A suivant, calculez la distance de ce point à l'ensemble de chaques points de la liste positions. Vous donnerez les résultats dans un nouveau tableau distances.

```js
const A = [8.3, 7.5];
const positions = [[1,1], [2, 2], [3, 4.5], [0, 9]];
const distances = [];

function calculateDistance(point1, point2) {
  return Math.floor(Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2) * 100) / 100;
}

for (const position of positions) {
  const distance = calculateDistance(A, position);
  distances.push(distance);
}

const maxDistance = Math.max(...distances);
const indexOfMaxDistance = distances.indexOf(maxDistance);
const farthestPoint = positions[indexOfMaxDistance];

console.log("Distances:", distances);
console.log("Point le plus éloigné:", farthestPoint);
```
Rappelons comment on effectue le calcul de la distance avec une précision de deux chiffres après la virgule :

```js
const X = [1,2];
const B = [4,1.5];

const d = Math.floor( Math.square( (X[0] - B[0] )**2 + (X[1] - B[1] )**2 ) * 100) / 100 ;
```
Trouvez le point le plus éloigné du point A.

### 08 Exercice string <a class="anchor" id="section42"></a>

Inversez la chaîne de caractères sentence ci-après.

Comptez le nombre de caractères de chaque mot.

Faites un script qui prend en argument une phrase et qui retourne dans un tableau le nombre de caractères de chaque mot. Vous ne compterez pas les espaces comme un caractère.

Indication : utilisez la méthode split pour transformer la chaîne de caractères en tableau.

```js
const sentence = "Bonjour tout le monde, vous aimez JS ?";

const reverseSentence = sentence.split('').reverse().join('');
console.log(reverseSentence);

const words = sentence.split(' ');
const wordLengths = words.map(word => word.length);
console.log(wordLengths);

function countCharactersInWords(phrase) {
  const words = phrase.split(' ');
  const wordLengths = words.map(word => word.length);
  return wordLengths;
}
const inputPhrase = "Bonjour tout le monde, vous aimez JS ?";
const result = countCharactersInWords(inputPhrase);
console.log(result);

```
Structure de données Map

Un objet Map est une collection de paires clé/valeur qui peut utiliser n'importe quel type de valeur pour sa clé.

```js
const jedi = new Map()
```
Ajout de valeurs dans un Map

Vous utiliserez la méthode set de l'objet Map pour ajouter des valeurs.

```js
jedi.set('firstName', 'Luke')
jedi.set('lastName', 'Skywalker')
jedi.set('job', 'Jedi Master')
```
Vous pouvez également ajouter des valeurs dans un map à l'aide d'un tableau de tableaux :

```js
const jedi = new Map([
  ['firstName', 'Luke'],
  ['lastName', 'Skywalker'],
  ['job', 'Jedi Master'],
])
```
Exemple de quelques fonctions utiles :

```js
// rechercher une clé
jedi.has('shark') // false

// accéder à une valeur à partir de sa clé
jedi.get('firstName')

// taille du Map
jedi.size

// supprimer un élément
jedi.delete('firstName');

// tout supprimer
jedi.clear()

// les keys et values
jedi.keys()
jedi.values()
// les deux
jedi.entries()
```
Itération sur un Map

  à l'aide d'un for of

```js
for (const [key, value] of jedi) {
  console.log(`${key}: ${value}`)
}
```
  à l'aide d'un foreEach
```js
jedi.forEach(( v, k ) =>  console.log(v, k));
```
Set

L'objet Set, qui se traduit par ensemble en français, permet de stocker des valeurs uniques de n'importe quel type : primitif ou objet.

Voici en résumé les différentes méthodes d'un Set.

```js
const ensemble = new Set();

ensemble.add(1);
ensemble.add(5);
ensemble.add("100");

ensemble.has(1); // true
ensemble.has(3); // false
ensemble.size; // 3

ensemble.delete(5); // retire 5 du set
ensemble.has(5);    // false, 5 a été retiré de l'ensemble

ensemble.size; // 2, on a retiré une valeur de l'ensemble
console.log(ensemble); // Set [ 1, "du texte" ]
```

### 09 Exercice count letters <a class="anchor" id="section42"></a>

Comptez chacune des lettres dans "Mississipi". Affichez le résultat dans une structure de données lisible.

Généralisez et créez maintenant une fonction qui prend en paramètre une chaîne de caractères et qui retourne le nombre d'occurences de chacune de ses lettres.

```js
const inputString = "Mississippi";
const letterCount = {};

for (const letter of inputString) {
  if (letterCount[letter]) {
    letterCount[letter]++;
  } else {
    letterCount[letter] = 1;
  }
}
console.log(letterCount);
```
### 10 Exercice count digit <a class="anchor" id="section42"></a>

Soit la chaîne de caractères suivante, récupérez tous les numériques de cette chaîne dans un tableau :

```js
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
const numbers = phrase.match(/\d+/g);

console.log(numbers);
```

D'autres structures de données existent en JS comme les WeakSet, WeakMap par exemple. Nous vous invitons, pour approfondir vos connaissances, à les découvrir sur la documentation devlopper.mozilla.org.
