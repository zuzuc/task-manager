# Task Manager App

## Setup

Clone the repository and install the dependencies with `npm install`.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Packages and versions 
- Node v21.7.1
- npm 10.5.0
- React Router v6

## Deployment
It builds and runs on Netlify: https://taskfocus.netlify.app


## How to use it
A simple yet functional task management application built with React. This app allows users to:

- Add Tasks: Create new tasks with customizable priorities (low, medium, high).
- Mark as Complete: Toggle tasks as complete/incomplete.
- Edit Tasks: Inline editing of task titles directly in the list.
- Filter Tasks: View all tasks, only active tasks, or completed tasks using filter buttons.
- Delete Tasks: Remove individual tasks, all tasks, or only completed tasks.
- Dynamic Priority Styling: Visual distinction of task priorities via color-coded labels.

The app is state-managed and persists data using localStorage. It's lightweight, interactive, and great for personal productivity!

## How to initialize the database
The database can be initialized by running the following command: `rm database.db ; touch database.db && node create.db.mjs && node seeding.db.mjs && node read.db.mjs`