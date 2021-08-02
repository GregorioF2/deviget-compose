# Deviget ui

Ui solution for the devigets transparent cache problem

## Configuration variables
To configure the server that the application should connect to.
```
(optional) SERVER_URL=localhost:3000
```

## Project setup

### Docker setup:
```bash
 sudo docker build . -t deviget_ui
 sudo docker run --network host -it deviget_ui
```

### Local setup: 
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run dev
```

