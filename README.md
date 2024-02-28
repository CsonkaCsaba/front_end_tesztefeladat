# front_end_tesztfeladat
Specifikáció
Készítse el a designban szereplő user kezelő aloldalt!
A tesztfeladathoz tartozó design filokat az alábbi linken elérheti .fig, .png és .pdf formátumokban: https://drive.google.com/drive/folders/13cjlPVBmfBeArh_MxXtV4EOg2d6o3FQg?usp=drive_link 
A userek listája a design fájlok mellett .json / .txt fájlokban megtalálható.
User lista sorba rendezése “id” alapján legyen.
User ikonok preview alapján jelenjenek meg:
Színpaletta: '#31F1AC', '#1C40A3', '#DE40A3'.
Nevek: Monogram alapján jelenjenek meg ahogy a design-on is szerepel.
A user lista minden eleméhez tartozik egy “edit” és “delete” gomb, amelyek akkor jelennek meg, amikor egérrel az adott sor felett vagyunk.
Minden lista elemhez tartozik egy jelölőnégyzet. A jelölőnégyzetek bepipálását követően megjelenik az oldal tetején egy számláló, amely mutatja, hány elem van kijelölve.
A lista tetején található jelölőnégyzettel minden elem kijelölhető, vagy a meglévő kijelölés megszüntethető.
Az “+ Add New User” gombbal új elemet tudunk az oldalhoz hozzáadni. 
Amíg a “name” és “email” mezők üresek, addig az “Add” gomb disabled legyen. 
A “Cancel” gombra kattintva az új user hozzáadása rész mentés nélkül bezáródik.
A user permission nem szerkeszthető, disabled legyen.
Amikor hozzáadunk egy új user-t, akkor az a lista aljára kerüljön be, miután megtörtént a mentés.
Az edit ikonra kattintva a user neve és email címe szerkeszthetővé válik. 
Ha a név vagy email cím mezők valamelyike üres, akkor nem menthető.
A user permission nem szerkeszthető, disabled legyen
Amíg egy user-t szerkesztünk, addig az  “+ Add New User” gomb disabled.
A user-eket törölni is tudjuk.
A törlés ikonra kattintva a user törölhető. 
A jelölőnégyzetek kijelölésével megjelenik egy “delete selected users” gomb az oldal tetején. A kijelölésekkel és ezzel a gombbal több user is törölhető egy lépésben
Törlésnél jöjjön fel egy popup:
Ha egy user-t szeretnék törölni akkor a popup-ba íródjon ki a neve
Ha több user-t szeretnék törölni akkor az íródjon ki a popup-ba "(count) Selected Users"
Plusz Feladat
Az oldal legyen reszponzív.
SCSS használata.
A menü/sidebar lekódolása.
A lista lapozás (pagination) elkészítése. Oldalanként 6 elem jelenjen meg. 
A “Users” és “Permission” oszlopokat lehesen növekvő és csökkenő sorba rendezni ABC sorrendben.



This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
