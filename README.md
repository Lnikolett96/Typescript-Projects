# 🧩 TypeScript Projects

This repository contains a collection of small **TypeScript pet projects** that I built while practicing and learning TypeScript.  
Each project is located in its own folder and can be run independently.

---

## 📌 Projects

### 1. Google Maps App

A simple application that integrates **Google Maps**.  
It displays a randomly generated **User** and **Company** on the world map using the [`faker`](https://github.com/faker-js/faker) library.

**Main classes:**
- `User`  
- `Company`  
- `CustomMap`

**Example code:**
```ts
/// <reference types="@types/google.maps" />
import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const map = new CustomMap('map');
const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
```

**How to run:**
1. Navigate to the project folder:
   ```bash
   cd google-maps-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the project (depending on your setup, for example with Parcel or Webpack):
   ```bash
   npm start
   ```
4. Open your browser to see the map with the user and company markers.

---

### 2. Sort

This project demonstrates how to build a flexible **sorting algorithm** that works with different data types:  
- Strings (`CharactersCollection`)  
- Numbers (`NumberCollection`)  
- Linked Lists (`LinkedList`)  

The idea is to create a reusable `Sorter` class that can sort any collection implementing a shared interface.

**Example code:**
```ts
import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumberCollection([-3, -5, 10, 223, -232, 25, 999, 76, 32]);
numbers.sort();

const characters = new CharactersCollection('pqxzyrwteafdsa');
characters.sort();

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(322);
linkedList.add(2112);
linkedList.sort();

console.log(numbers.data);
console.log(characters.data);
linkedList.print();
```

**How to run:**
1. Navigate to the project folder:
   ```bash
   cd sort
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the code:
   ```bash
   tsc
   ```
4. Run the compiled code with Node.js:
   ```bash
   node build/index.js
   ```

---

### 3. Stats | 🏆 Football Stats Analyzer

A simple TypeScript project that demonstrates **real composition** and **object-oriented design patterns** in action.  
It reads football match data from a CSV file, analyzes it, and generates reports — either in the console or as an HTML file.

This project was created to illustrate how **composition** (not inheritance) can be used effectively in TypeScript —  
a concept often misunderstood in the JavaScript community.

---

## ⚙️ Features

- 📂 Reads match data from `football.csv`
- 📊 Calculates the number of wins for a selected team
- 🧩 Demonstrates composition and interface-based architecture
- 🖥️ Generates reports to the **console** or to an **HTML file**
- ⚡ Uses `concurrently` and `nodemon` for a smooth development workflow

---

## ⚡ Requirements

- [Node.js](https://nodejs.org/) installed  
- TypeScript installed globally or locally (`npm install -g typescript`)  

---

## 🧠 Project Structure

```
src/
├── analyzers/
│   └── WinsAnalysis.ts
├── reportTargets/
│   ├── ConsoleReport.ts
│   └── HtmlReports.ts
├── utils.ts 
├── CsvFileReader.ts
├── MatchReader.ts
├── MatchData.ts
├── MatchResult.ts
├── Summary.ts
└── index.ts
```

---

## 🧱 Technologies Used

- TypeScript
- Node.js
- Nodemon
- Concurrently

---

# 🧱 Web Framework - Web folder

This project is part of the **[TypeScript: The Complete Developer’s Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide/)** by Stephen Grider.  
It demonstrates how to **build a lightweight web framework from scratch** using **TypeScript**, focusing on **object-oriented design**, **composition**, and **event-driven architecture**.

---

## 🚀 Overview

The goal of this project was to recreate some of the core concepts behind early JavaScript frameworks such as **Backbone.js** and **Marionette.js** — but implemented fully in **TypeScript**.

It provides a minimal but functional structure for:
- Managing models and data persistence  
- Handling custom events  
- Rendering views and nested components dynamically  

By completing this project, I gained hands-on experience in **framework design**, **TypeScript classes and generics**, and the **trade-offs between inheritance and composition**.

---

## 🧩 Main Features

- **Model Layer** – includes `get`, `set`, `fetch`, `save` methods for data management  
- **Eventing System** – custom `on` and `trigger` methods for event handling  
- **View Layer** – re-renders UI automatically on model changes  
- **Region Management** – supports nested (child) views  
- **Reusable Components** – fully written in TypeScript, strongly typed, and extendable  

---

## 🛠️ Tech Stack

- **Language:** TypeScript  
- **Bundler:** Parcel  
- **Environment:** Node.js  
- **Libraries Inspired By:** Backbone.js & Marionette.js  

---

## ⚙️ Installation & Setup

You can clone and run the project locally in just a few steps:

### 1. Clone the repository
### 2. run `npm install`
### 3. run `npm start`


---

## 🧭 Key Learning Points

- Understanding and applying **composition over inheritance**
- Working with **generics** and **interfaces** in TypeScript
- Reading and parsing **CSV data**
- Building flexible reporting systems

---
4. Server | TypeScript with Next.js

A small backend-oriented project built on Next.js with custom TypeScript decorators.
The concept was inspired by the ts-express-decorators package, and the goal was to deepen my understanding of decorator patterns, metadata handling, and structured backend architecture.

⚙️ Features

Next.js server environment with custom routing logic

Custom-built TypeScript decorators (use, post, controller, bodyValidator)

Metadata handling using the reflect-metadata package

Clear separation of concerns between controllers, middleware, and handlers

⚡ Requirements

Node.js

TypeScript (installed globally or locally)

npm or yarn package manager

🧱 Technologies Used

TypeScript

Next.js

Reflect Metadata

JavaScript

Parcel (for bundling where necessary)



# 🚀 Getting Started (Repository)

Clone the repository and navigate into any project folder you want to try:

```bash
git clone https://github.com/Lnikolett96/typescript-projects.git
cd typescript-projects
```

Then follow the instructions in each project section above.

---

## 📖 Notes

These projects are made **for learning purposes** only.  
They cover TypeScript fundamentals such as:
- Classes and interfaces
- Generics
- Working with external libraries
- Basic data structures and algorithms
- Interacting with APIs (Google Maps)
