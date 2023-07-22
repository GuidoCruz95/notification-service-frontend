# Notification Service, frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project works with [django service](https://github.com/GuidoCruz95/notification-service-backend) but could be replaced by any another REST API service.

## Technologies used
* [React js](https://react.dev/): The library for web and native user interfaces


## Installation
* If you wish to run your own build, first ensure you have nodejs installed in your computer. If not, you can get nodejs [here](https://nodejs.org/en").
* Then, Git clone this repo to your PC using SSH or HTTP protocol.
    ```bash
        # Using SSH protocol(recommended)
        $ git clone git@github.com:GuidoCruz95/notification-service-frontend.git
        # Using HTTP protocol
        $ git clone https://github.com/GuidoCruz95/notification-service-frontend.git
    ```

* #### Dependencies
    1. Go into your cloned repo as such:
        ```bash
            $ cd notification-service-frontend
        ```
    2. Install the dependencies needed to run the app:
        ```bash
            $ npm install
        ```

* #### Run It
    Fire up the server using this one simple command:
    ```bash
        $ npm start
    ```
    You can now access the file api service on your browser by using
    ```
        http://localhost:3000/
    ```
## Note
In the project, there is a variable that helps us to connect with the backend to make requests, this is located in `src/services/baseService.js` the variable is called `API_BASE_URL` to ensure that the [backend project](https://github.com/GuidoCruz95/notification-service-backend) is running in the specified host, if you want to test the application without connection to the service, you can use mock data, which are located in `src/mock-files/*-mock-data.js` each of them has a list of items, categories and some log-history values, BUT to register a new message, this is going to try to try to make the POST request, so you will not be able to see the sent message notifications, to see all the workflow sending notifications, setup both services.