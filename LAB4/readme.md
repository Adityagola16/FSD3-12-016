# NPM Project
1. goto project folder (by cd)
2. type ``` npm iniy -y ```
3. open package.json
update ```type:module ```
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```
script{
        "start": "node app.js"
    "dev": "nodemon prg7.js"
    }
    ```
    7. add node_modules to .gitignore
    8. to run use `npm run dev`

    ## REST API
    - any backend server return only data not html file
    - REST API uses (get,post,pit,patch,delete) method to communicate
    with client
    - any brower can check only get method
    - for other method type we use third party API Tester lke postman,thunder client ,
#Request type:-
git all ,git by id
get:/api/product -> all product
get: /api/products/101 -> get by id

#post
post (add product)
post: /api/products