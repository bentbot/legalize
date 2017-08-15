# Legalize

Weed is being legalized in Canada. This website lets users cast a ballot to represent a vote.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
With the use of a NodeJS backend located in `index.js`, this Angular project operates as a self-contained cloud application. 

[Increments](https://www.npmjs.com/package/increments) is an open-source vote machine used to tabulate votes and generaste statistics. 

## Build

Run `node index.js` to build and host the project. The build will appear online at `http://localhost:8080/` and can be routed to a domain name such as [this one](http://isweedlegalyet.ca) with a server such as Nginx.

## Backend

Usiually Angular 2 routes requests to a PHP or Ruby backend using HTTP requests. This project forgoes the need of a seperate program and instead creates a small Express server. Spawning a client `ng build` process to render the application and using Socket.IO to communicate with Angular in the browser makes for a stellar team of serve and delivery.
