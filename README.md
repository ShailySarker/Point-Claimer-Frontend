# Project: Point Claimer(Frontend)

## Website Link: https://point-claimer-frontend.vercel.app

## Overview
A React + TypeScript SPA for adding users, assigning random points, and viewing real-time leaderboards and history. Designed with slick user cards and pagination.

## Tech Stack
- React + TypeScript
- Redux Toolkit & RTK Query
- Tailwind CSS
- Swiper.js (optional coverflow)
- SweetAlert2 for notifications

## Features
- Add Users via modal form
- Claim Points always available on user cards
- Circular avatars displaying initials
- Real-time Leaderboard and paginated user view
- Claim History Log
- Responsive design powered by Tailwind CSS
  
## Description
Claimer Pointer is a website where we can add users, and instantly assign them random point values (1–10) via a "Claim Points" button. The backend—built with Node.js, Express, MongoDB, and Mongoose—handles user storage, point updates, and a detailed claim history. The frontend uses React, TypeScript, Redux Toolkit, RTK Query, and Tailwind CSS to display interactive cards, real-time rankings, and paginated user views. Every claim is logged and displayed in a history section, ensuring transparency and engaging competition.

## Install
```bash
git clone https://github.com/ShailySarker/Point-Claimer-Frontend

cd Point-Claimer-Frontend

npm install

npm run dev

```
## Create a .env file:
```bash

MONGODB_URL=https://point-claimer-backend-side.vercel.app
```
