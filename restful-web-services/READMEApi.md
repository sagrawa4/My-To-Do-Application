# ResponseEntity
- helps in building specific response with specific status.
- ResponseEntity.noContent() -> returns a head with no body
- ResponseEntity.noFound()return not found status if user is not found

# Used API Talend Tester chrome Plugin
- To delete a todo from http://localhost:8080/users/shruti/todos, add origin to you tester.
- it should generate a 204 Sucess response.
- This deletes your todo from the app for particular id.
- But any change in the Backend will result in a refresh and on loading fronend UI, the todo will be back.