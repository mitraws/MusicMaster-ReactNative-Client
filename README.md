# :notes:Music Master:musical_note: - a game to show off your musical skills!
This minimalistic mobile game is based on a cardgame, to be played on your own:bust_in_silhouette: or in a group:family: . Read out the lyric from a popular song and have your teammates say:speech_balloon: or sing:microphone: the next line of the song! Earn extra points by guessing the artist and song titles :star:. 

![](gif of homepage)

## Table of contents:
- **[Game demo](##game-demo)**
- **[Project Goals](#goals-for-this-project)**
- **[Workflow](#workflow)**
- **[User Stories and Wireframe](#user-stories-and-wireframe)**
- **[Technologies used](#technologies-used)**
- **[Future features](#future-features)**
- **[Setup and Scripts](#setup-and-scripts)**
- **[Server Repo](#server-repo)**
- **[Contributions](#contributions)**

## Game demo 
![](gif of app)

## Goals for this project 
This project was built to showcase my capabilites in:
- coding in JavaScript, using different technologies and libraries  
- writing clean and organized code with structured files and folders
- organizational skills; bring attention to planning, the readme and documentation
- disciplined use of version control with commits, branches & PR's

My focus was to build something I could use myself, to learn technology I can advance on in future hobby projects, and to broaden my current skillset.

## Workflow 
To ensure high productivitity, I used Githubs project board to effectively document and communicate the sequence and processes from initiation to completion. I started with entering the user stories and [wireframes](https://github.com/mitraws/MusicMaster-ReactNative-Client/blob/development/Documentation/MusicMaster%wireframe.pdf) in the project board, breaking down the user stories into smaller tasks and link them to pull requests. 

#### :sparkles:Check out my [workflow]((https://github.com/mitraws/MusicMaster-ReactNative-Client/projects/2)).:sparkles:

#### :sparkles:Check out a [Pull Request sample](https://github.com/mitraws/MusicMaster-ReactNative-Client/pull/5).:sparkles:

## User Stories and Wireframe
- As a player, I would like to see a line or two of lyrics from one random song, including the name of the song and who the artist is, preferably by tapping on the screen
- As a player, I would like to be able to swipe left to see a lyric line of another random song, and swipe right to return to the previous lyric card 
- As a player, I would like to be able to add player names and keep scores
- As a player, I would like to be able to end the game by showing a scoreboard on swipe up, and reset scores

#### :sparkles:Check out the [Database model](https://github.com/mitraws/MusicMaster-ReactNative-Client/blob/development/Documentation/Database%20ER%20diagram%20(crow's%20foot).png).:sparkles:

#### :sparkles:Check out the [Wireframes](https://github.com/mitraws/MusicMaster-ReactNative-Client/blob/development/Documentation/MusicMaster%wireframe.pdf).:sparkles:

## Technologies used
- Music Master is built with React-Native and compiled using Expo 
- State management is handled by Redux
- Server is set up with express and a Sequelize database

## Future features
- choosing a category based on:
  - current toplist  
  - customized playlist
  - different genres
- having different difficulty levels
- get hints by tapping:
  - next line of lyrics (1p)
  - multiple choices (0.5p)
  - hangman answers (0.5p)
  - song name (1p)
  - artist name (1p)
  - play a snippet of the song (0.5p)
- be able to login/name registration with scoreboard
  - player ranks
  - multiplayer

## Setup and Scripts
- Clone the repository
- Go to the project folder
- Install npm modules
- Launch the project

In the project directory, you can run:

    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"

 ## Server-repo 
#### :sparkles:Check out the [backend](https://github.com/mitraws/MusicMaster-ReactNative-Server).:sparkles:

 ## Contributions
This project is currently an MVP; feel free to file an issue for ideas, suggestions or feedback.

:blush:contributions and pull requests are more than welcome!:blush:
