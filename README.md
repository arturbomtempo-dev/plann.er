<div  align="center" id="about">
	<h1 align="center">
        plann.er
    </h1>
    <p align="center">
        The project is a complete travel itinerary platform with front-end and back-end components. Its primary goal is to simulate a system for scheduling and managing trips, offering features such as activity tracking and participant management. This project was developed during the NLW Journey, a Rocketseat event, as a way to enhance knowledge of web development using Node.js and TypeScript.
    </p>
	<img 
        src="./resources/banner/nlw-journey.png"
        alt="Main project image"
    />
</div>
<br>
<div align="center">
    <a href="https://github.com/nodejs" target="_blank"><img src="https://img.shields.io/badge/made_with-Node.js-green" alt="Made with Node.js"></a>
    <a href="https://github.com/SpaceForDevelopment/Convert2Base-Package" target="_blank"><img src="https://img.shields.io/badge/npm-v10.9.2-blue" alt="NPM version"></a>
    <a href="https://convert2base.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/status-local_development_complete-yellow" alt="Status: Local Development Complete"></a>
    <a href="https://github.com/SpaceForDevelopment/Convert2Base-Package/blob/main/LICENSE.md" target="_blank"><img src="https://img.shields.io/badge/license-MIT-red" alt="MIT License"></a>
</div>

## 📋 Table of Contents

<a id="table-of-contents"></a>

-   [About](#about)
-   [Table of Contents](#table-of-contents)
-   [Features](#features)
-   [Application Demonstration](#application-demonstration)
-   [Setup and Run the Application](#setup-and-run-the-application)
-   [Technologies](#technologies)
-   [Author](#author)

## 📝 Features

<a id="features"></a>

All API routes for the listed features have been fully developed and are functional. However, as this project is for educational purposes, some features were not implemented in the front-end during the course and currently have no timeline for implementation. Below is a detailed list of the features, indicating which ones have been implemented and which ones remain unavailable on the front-end.

-   [x] Travel registration
-   [x] Travel activity registration
-   [x] Creation of travel invitations
-   [x] Travel confirmation
-   [x] Participant confirmation
-   [x] Travel details listing
-   [x] Participants listing
-   [ ] Travel data update
-   [ ] Manage registered guests
-   [ ] Registration of important travel links
-   [ ] Listing of important travel links

## 📲 Application Demonstration

<a id="application-demonstration"></a>

Below, you will find example images of the application’s front-end, showcasing its main screens and highlighting its interface and core functionalities. Additionally, you can access the API documentation for detailed information about the available routes. To view the documentation, [click here](https://nlw-journey.apidocumentation.com/reference).

-   Trip Creation

![Trip Creation](./resources/screenshots/trip-creation.png)

-   Confirm Trip Creation

![Confirm Trip Creation](./resources/screenshots/confirm-trip-creation.png)

-   Trip Details

![Trip Details](./resources/screenshots/trip-details.png)

-   Register Trip Activity

![Register Trip Activity](./resources/screenshots//register-activity.png)

## 📁 Setup and Run the Application

<a id="setup-and-run-the-application"></a>

### ⚙️ Prerequisites

Before starting, you need to have the following tools installed on your machine: [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en).

It’s also recommended to use a code editor like [VSCode](https://code.visualstudio.com/).

### 🚀 How to Run the Application

#### Front-End Setup

```bash
# Clone this repository
$ git clone https://github.com/ArturColen/plann.er.git

# Navigate to the client folder
$ cd client

# Install dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The front-end will start on port 5173 - access <http://localhost:5173>
```

#### Back-End Setup

```bash
# Open a new terminal and navigate to the server folder
$ cd server

# Install dependencies
$ npm install

# Create the database file
$ npx prisma db push

# Copy the contents of the .env.example file to a new .env file
$ cp .env.example .env

# Run the server in development mode
$ npm run dev

# The server will start on port 3333 - it should log `Server is running on port 3333`
```

## 💻 Technologies

<a id="technologies"></a>

The following tools were used in the development of this project:

-   [Node.js](https://nodejs.org/docs/latest/api/)
-   [TypeScript](https://www.typescriptlang.org/docs/)
-   [React.js](https://react.dev/learn)
-   [Axios](https://axios-http.com/docs/intro)
-   [Tailwind CSS](https://v2.tailwindcss.com/docs)
-   [Fastify](https://fastify.dev/docs/latest/)
-   [Prisma](https://www.prisma.io/docs)
-   [Nodemailer](https://www.nodemailer.com/)
-   [Day.js](https://day.js.org/docs/en/display/format)
-   [Zod](https://zod.dev/)

## 👨🏻‍💻 Author

<a id="author"></a>

---

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/96635074?v=4" width=115><br><sub>Artur Bomtempo</sub>](https://github.com/ArturColen) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------: |

Developed by Artur Bomtempo 👋🏽. Get in touch:

[![Gmail Badge](https://img.shields.io/badge/-arturbcolen@gmail.com-D14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:arturbcolen@gmail.com)](mailto:arturbcolen@gmail.com)
[![LinkedIn Badge](https://img.shields.io/badge/-Artur%20Bomtempo-0A66C2?style=flat-square&logo=LinkedIn&logoColor=white&link=https://www.linkedin.com/in/artur-bomtempo/)](https://www.linkedin.com/in/artur-bomtempo/)
[![Instagram Badge](https://img.shields.io/badge/-@arturbomtempo.dev-E4405F?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/arturbomtempo.dev/)](https://www.instagram.com/arturbomtempo.dev/)
