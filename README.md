# Eloy-App

## Back-end Repository (Node.js with Express)
### Table of Contents 

1. [Table of Contents](#table-of-contents)
2. [Description](#description)
3. [Setup](#setup)
    - [Scripts](#scripts)
    - [Environment variables](#environment-variables)
4. [File Structure](#file-structure)
5. [Used Technologies](#used-technologies)
6. [API end Points](#api-end-points)
7. [License](#license)
8. [Contact](#contact)

[![Front-end Repository](https://img.shields.io/badge/Front--end-Repository-blue?style=for-the-badge&logo=github)](https://github.com/nachosanson6/Eloy-app-client)


 ## Description
 
Eloy-app is a web application showcasing artistic creations, which include paintings, sculptures, and jewelry. The platform provides visitors with an engaging visual experience to explore and appreciate the various works of art.

### Key Features

- **Home Page with Carousel:** The homepage features a carousel showcasing highlighted pieces created by my father. This section gives visitors a visual preview of some of the most notable artworks.

- **Specialized Galleries:** Eñoy-app offers three specialized galleries, each dedicated to a specific artistic specialty (paintings, sculptures, and jewelry). Each gallery allows users to explore all the works corresponding to that category.

- **Artwork Details:** Users can access specific details for each artwork, including information on the techniques used, materials, dimensions, and any other relevant details.

This application provides art enthusiasts with an interactive platform to discover and enjoy the unique creations.

## Setup

#### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine before getting started.

Follow the steps below to setup the application in your local development environment:

1. Install dependencies

```bash
npm install
```

2. Run the application

```bash
npm run dev
```

The application will open automatically on localhost (port 5005 if it's not in use already).



### Scripts

The following commands can be found in the [`package.json`](./package.json) file in the project root. To execute them, simply use the command the following way:

```
npm run <command>
```

| Command   | Description                                       |
| --------- | --------------------------------------------------|
| `start`   | Starts the Node.js server for production.          |
| `dev`     | Starts the server with nodemon for development.    |


### Environment variables


| Variable            | Description                      |
| ------------------- | -------------------------------- |
| `PORT`              | Port for the API                 |
| `ORIGIN`            | App origin/title                 |
| `MONGODB_URI`       | MongoDB connection URI           |
| `TOKEN_SECRET`      | Secret key for authentication    |
| `CLOUDINARY_NAME`   | Cloudinary account name          |
| `CLOUDINARY_KEY`    | Cloudinary API key               |
| `CLOUDINARY_SECRET` | Cloudinary API secret            |

## File Structure

The file structure in the Jamlink front-end is organized as follows:

```plaintext
.
|-- .github/
|-- config/  
|-- controllers/  
|-- db/  
|-- error-handling/
|-- middleware/  
|-- models/ 
|-- routes/     
|-- .gitignore
|-- README.md
|-- app.js
|-- package-lock.json
|-- package.json
|-- server.js

```

## Used Technologies

- **Back-end:**
  - [Express](https://expressjs.com/) - Web framework for Node.js used on the server.
  - [Node.js](https://nodejs.org/) - Runtime environment for JavaScript on the server side.
  - [MongoDB](https://www.mongodb.com/) - NoSQL database used for data storage.
  - [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.

- **Tools and Utilities:**
  - [GitHub Actions](https://github.com/features/actions) - For continuous integration and automatic deployment.

## API end Points

| Pictures routes            |
| ---------------------- |
| Base URL : /pictures       |

| HTTP Method            | URI path           | Description                 |
| ---------------------- | -------------------| --------------------------- |
| GET                    | /getAllPictures    | All pictures list           |
| POST                   | /newPicture        | Add new picture             |
| GET                    | /getOnePicture/:id | Matching ID picture details |
| GET                    | /filteredPictures  | Filtered pictures           |
| POST                   | /deletePicture/:id | Matching ID picture deletion|

| Sculptures routes          |
| ---------------------- |
| Base URL : /sculptures     |

| HTTP Method            | URI path           | Description                     |
| ---------------------- | -------------------| --------------------------------|
| GET                    | /getAllSculptures    | All sculptures list           |
| POST                   | /newSculpture        | Add new sculpture             |
| GET                    | /getOneSculpture/:id | Matching ID sculpture details |
| GET                    | /filteredSculptures  | Filtered sculptures           |
| POST                   | /deleteSculpture/:id | Matching ID sculpture deletion|

| Jewelry routes          |
| ---------------------- |
| Base URL : /jewelry     |

| HTTP Method            | URI path           | Description                     |
| ---------------------- | -------------------| --------------------------------|
| GET                    | /getAllJewelry     | All jewelry list                |
| POST                   | /newJewelry        | Add new jewelry                 |
| GET                    | /getOneJewelry/:id | Matching ID jewelry details     |
| GET                    | /filteredJewelry   | Filtered jewelry                |
| POST                   | /deleteJewelry/:id | Matching ID jewelry deletion    |

| Auth routes            |
| ---------------------- |
| Base URL : /auth       |

| HTTP Method            | URI path     | Description                 |
| ---------------------- | ------------ | --------------------------- |
| POST                   | /signup      | Signup user                 |
| POST                   | /login       | Login user                  |
| GET                    | /verify      | Verify Auth token           |

## License

This project uses various technologies and resources, each with its respective licenses. Below is the license information for the main technologies and tools used in the front-end:

### Back-end

- **Express**: [MIT License](https://opensource.org/licenses/MIT)
- **Node.js**: [MIT License](https://opensource.org/licenses/MIT)
- **MongoDB**: [Server Side Public License (SSPL)](https://www.mongodb.com/licensing/server-side-public-license)
- **Axios**: [MIT License](https://opensource.org/licenses/MIT)

### Tools and Utilities

- **GitHub Actions**: [GitHub Terms of Service](https://docs.github.com/en/github/site-policy/github-terms-of-service)


## Contact

Created by [Nacho Sansón](https://github.com/nachosanson6). 

