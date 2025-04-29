# React + Vite

## Run the application
To run this web app

>npm install

>npm run dev

## 🔥 Available Options

| Method | Url |
|:------|:---------|
| List All Movies | `/` |
| Add Movie | `/add` |
| Edit Movie | `/edit/:id` |
---
_Delete_ operation is inside `List All Movies` so it has not a rounting mapping.

## Axion Configuration

The `api url` is hardcoded in the file _MoviesUI/src/api/axios.js_. This should point to the `API` deployed _url_.

```
  import axios from "axios";
  
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });
  
  export default api;
```
