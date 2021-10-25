# PetStoreApiUsage
## Exercise 1 explanation
1. In Javascript, execute GET, POST en DELETE pet.
1. GET and POST should validate and return a response code 200 each time.
1. Persist in using the same PetId in both the post body as the requests. This can be done by means of variables.
1. Use petstore3.swagger.io/
    1. More specifically, https://petstore3.swagger.io/api/v3/pet

## API usage
1. GET /pet/{id} - find pet by id
1. POST /pet/{id} - update pet with form data
1. POST /pet - add new pet
1. DELETE /pet/{id} - delete a pet by id

## Additional, not used
1. PUT /pet - update existing pet
1. POST /pet/{id}/uploadImage - upload image to pet by id
1. GET /pet/findByStatus - find pet by status
1. GET /pet/findByTags - find pet by tags

## Data structure
```json
{
    "id": 10,
    "category": {
        "id": 1,
        "name": "Dogs"
    },
    "name": "Gizmo",
    "photoUrls": [
        "https://static.wikia.nocookie.net/p__/images/6/62/Gizmo_%28Gremlins%29.png/revision/latest/scale-to-width-down/300?cb=20130512002219&path-prefix=protagonist"
    ],
    "tags": [
        {
            "id": 10,
            "name": "Cute"
        }
    ],
    "status": "available"
}
```