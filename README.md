# RC Chat (Real-time chat web application)

RC Chat is the web application that allow people to talk and connect together in real-time.

![Real-time-chat](https://github.com/Celesca/Celesca/blob/main/Project%20Picture/real-time-chat-login.PNG)

## Installation via Docker

`git clone https://github.com/Celesca/Real-time-chat.git`

`cd real-time-chat`

`docker-compose up --build`

## Guidelines

After start the docker-compose file you will have 2 container including frontend container and backend container.

* The backend server will start at port 3000. You can monitoring via your terminal.

* The frontend server will start at port 5173. So you can enter the website at `localhost:5173` on your browser

  - At Login page you will need to enter the username to enter the Chat page.
 
  - At Chat page you can sending the message to others.

  - Trying real-time chat by open 2 tabs on your browser then start to talk to yourself and see what happens.

## Tech Stack

Frontend - React + TypeScript + TailwindCSS

Backend - Express + Socket.io
