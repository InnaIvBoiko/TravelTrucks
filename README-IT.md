# TravelTrucks - Applicazione web per il noleggio di camper

## Informazioni generali

Questo progetto è la parte frontend di un'applicazione web per l'azienda
"TravelTrucks", che si occupa del noleggio di camper. L'applicazione web
contiene diverse pagine, tra cui:

- Pagina principale
- Pagina del catalogo
- Pagina di descrizione dettagliata di un singolo camper con recensioni e un
  modulo di prenotazione.

## Obiettivo del progetto

Creare una piattaforma intuitiva e funzionale per gli utenti che cercano camper
da noleggiare.

## Requisiti del progetto

### Framework e librerie

- **React + Vite**: per creare un'interfaccia a componenti.
- **Redux Toolkit**: per la gestione dello stato.
- **React Router**: per la navigazione.
- **Axios**: per gestire le richieste HTTP.

### Pagine principali

- **Pagina principale**: contiene un banner con la principale call to action.
- **Catalogo**: mostra tutti i camper disponibili con possibilità di filtraggio.
- **Pagina di un singolo camper**: contiene descrizione dettagliata, galleria
  fotografica, recensioni, un modulo per la prenotazione.

### Routing

- `/`: Pagina principale
- `/catalog`: Pagina del catalogo
- `/catalog/:id`: Pagina di un singolo camper

### Stato dell'applicazione

Utilizzo di Redux per la gestione dello stato, incluso l'elenco dei veicoli, lo
stato dei filtri e l'elenco dei preferiti.

### Requisiti funzionali

- Passaggio alla pagina del catalogo dalla pagina principale.
- Filtraggio dei veicoli.
- Aggiunta ai preferiti che viene salvata durante il riavvio della pagina.
- Passaggio alla pagina dei dettagli dal catalogo.
- Caricamento di ulteriori schede nella pagina del catalogo.
- Visualizzazione delle recensioni sulla pagina di un singolo camper.
- Modulo di prenotazione con notifica di avvenuta prenotazione.

### Design

Layout per la versione desktop secondo il modello
[Figma](<https://www.figma.com/design/CKZFWA5GndLlVMwKcQjum3/Campers-(Copy)?node-id=0-1&t=rUpBYaciLRKP9XJ6-1>).

### Sviluppo

Rispetto del principio DRY (Don't Repeat Yourself), codice pulito e leggibile.

## Come avviare il progetto

### Requisiti preliminari

Prima di avviare il progetto, assicurati di avere installato sul tuo computer:

- [Node.js](https://nodejs.org/) (versione 14 o superiore)
- npm o yarn

### Clonazione del repository

Inizia clonando il repository sul computer locale.

```bash
git clone https://github.com/InnaIvBoiko/TravelTrucks.git
cd traveltrucks
```

### Installazione delle dipendenze

Installa i pacchetti necessari utilizzando npm o yarn.

```bash
npm install # oppure yarn install
```

### Avvio del progetto

Avvia il server locale per lo sviluppo.

```bash
npm run dev # oppure yarn dev
```

### Apertura del browser

Apri [localhost:5173](http://localhost:5173) nel tuo browser per visualizzare il
progetto.

## Progetto deployato

Il progetto è stato distribuito su
[Vercel](https://travel-trucks-liart.vercel.app/).
