# Book-Search-Engine

## Overview
Book Search and Save is a MERN stack application that allows users to search for books via the Google Books API and save them to a personal library. Users can view their saved books and have the option to remove them from their library. The application is built with a React front end, MongoDB database, and Node.js/Express.js server and API.

The site can be accessed [here](https://book-search-engine101323-84d0cd34743b.herokuapp.com/).

![Book Search Engine](./client/public/Website-Screenshot.png) 

## Features
- **User Authentication:** Users can sign up and log in to access their personal book library.
- **Book Search:** Users can search for books by title, author, or keywords.
- **Save Books:** Users can save interesting books to their personal library with a single click.
- **View Saved Books:** Users can view their saved books anytime in their personal library.
- **Remove Books:** Users can remove books from their personal library.

## Technologies Used
- **Front End:** React, Apollo Client
- **Back End:** Node.js, Express.js, GraphQL, Apollo Server
- **Database:** MongoDB
- **Authentication:** JSON Web Token
- **Other Libraries:** Bootstrap for front-end styling

## Installation and Setup
1. Clone the repository:
    ```shell
    git clone https://github.com/yourusername/book-search-and-save.git
    cd book-search-and-save
    ```

2. Install the dependencies:
    ```shell
    npm install
    ```

3. Start the development server:
    ```shell
    npm start
    ```

The application will open in your default web browser, and it will reload automatically as you save changes to the source code.

## Environment Variables
You need to set up environment variables for the application to work correctly. Create a `.env` file in the root of your project and add the following (replace the placeholders with actual values):

    ```shell
    MONGODB_URI=<Your MongoDB URI>
    SECRET_KEY=<Your JWT Secret Key>
    ```

## Deployment
The application is ready for deployment to a production environment. You can deploy it to platforms like Heroku, Vercel, or any other that supports Node.js applications. Ensure to set up the environment variables in the production environment as well.