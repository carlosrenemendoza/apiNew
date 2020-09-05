#API asdeporte autor Carlos Rene Mendoza Perez

#CREATE
    POST 
        /create/product/
#UPDATE
    PUT param {Number} id Identificador de producto
        /:id
#DELETE
    DELETE param {Number} id Identificador de producto
        /:id
#SEARCH
    GET 
        /search/
#SEARCH ID
    GET param {Number} id Identificador de producto
        /search/:id
#UPLOAD
    POST
        /upload/image/
            