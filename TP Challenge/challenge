

######CONSIGNE######
# A - Creer un fichier nom_prenom.js (ou une archive .zip .7z .rar)

ou

# B - Un depot GIT (depuis un terminal)
  1 - git init
  2 - git status
  3 - git add .
  4 - git commit -m "votre message de commit"
  5 - git push ssh ou url du depôt Github

  # Le challenge doit etre envoyer au formateur avant 17 h 00 sur le chat zoom (ou discord de la promo)



# Sujet 01 Population intérêts et analyse de données

En utilisant les données ci-dessous dans la constante populations.

1. Comptez tous les docteurs. => 5 POINTS

```js
const numberOfDoctors = populations.filter(person =>
  person.jobs && person.jobs.includes('doctor')
).length;

console.log(`Nombre de docteurs: ${numberOfDoctors}`);
```

2. Récupérez les noms des développeurs fullstack. => 5 POINTS

```js
let fullstackDevelopers = populations.reduce((acc, person) => {
  if (person.jobs && person.jobs.includes('dev fullstack')) {
    acc.push(person.name);
  }
  return acc;
}, []);

console.log("Développeurs Fullstack:", fullstackDevelopers.join(", "));
```

3. Récupérez les noms des personnes qui n'ont jamais travaillés. => 5 POINTS

```js
let peopleWithoutJobs = populations
  .filter(person => !person.jobs || person.jobs.length === 0)
  .map(person => person.name);

console.log("Personnes sans travail:", peopleWithoutJobs.join(", "));
```

4. (Facultatif)Etudiez les mots de passe de chaque personne, comptez leurs occurences pour chaque lettre distincte.

```js
let letterCounts = {};

populations.forEach(person => {
  if (person.password) {
    let password = person.password;
    for (let char of password) {
      if (!letterCounts[char]) {
        letterCounts[char] = 0;
      }
      letterCounts[char]++;
    }
  }
});

console.log(letterCounts);
```

```js
const populations = [
  { id: 0, name: "Alan", jobs : ['dev junior', 'dev fullstack'], password : "tyeedsa00" },
  { id: 1, name: "Albert", jobs : [ 'doctor'], password : "tyeidii00" },
  { id: 2, name: "Jhon" , jobs : ['mathematician', 'doctor'], password : "xyuuuoi00"},
  { id: 3, name: "Brice", jobs : ['dev fullstack'] , password : "xytoiab00"},
  { id: 4, name: "Alexendra", jobs : ['dentist'],  password : "aaaoiab33" },
  { id: 5, name: "Brad" },
  { id: 6, name: "Carl" , jobs : ['lead dev', 'dev fullstack']},
  { id: 7, name: "Dallas" , jobs : [ 'dev fullstack']},
  { id: 8, name: "Dennis", jobs : ['integrator', 'dev fullstack'] },
  { id: 9, name: "Edgar", jobs : ['mathematician'] },
  { id: 10, name: "Erika", jobs : ['computer scientist', 'mathematician'] },
  { id: 11, name: "Isaac", jobs : ['doctor'], password : "Axgkj22Kl" },
  { id: 12, name: "Ian", password : "Axgkj00Kl" },
];
```

# Sujet 02 : Utiliser une API REST existante avec des promesses et la methode fetch

1. Utilisez la methode fetch() pour récupérer les images depuis API : => 2.5 POINTS
https://jsonplaceholder.typicode.com/photos

2. Afficher id, title, les images miniatures avec document.write(images miniatures)
ou dans un fichier index.html  => 2.5 POINTS

3. (Facultatif) Afficher les 5 premières images miniatures avec document.write(images miniatures)
//Exemple : decouper le tableau avec slice() et boucler sur votre nouveau tableau avec forEach()

```js
document.addEventListener('DOMContentLoaded', function () {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
      const firstFivePhotos = photos.slice(0, 5);

      firstFivePhotos.forEach(photo => {
        document.write(`
          <div>
            <p>ID: ${photo.id}</p>
            <p>Title: ${photo.title}</p>
            <img src="${photo.thumbnailUrl}" alt="${photo.title}">
          </div>
        `);
      });
    })
    .catch(error => console.error('Error:', error));
});
```

```js
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(????)
    .catch(????)
```
