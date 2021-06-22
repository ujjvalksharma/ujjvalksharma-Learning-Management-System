function AdminPortalClientService(){

    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001092993/users';
    var self = this;
// add person 
   this.addPerson= function(user) {
        return fetch(self.url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'     
          }, 
          body: JSON.stringify(user) 
        }).then(function (response) {
          return response.json()
        })
      }

// find all person 
    this.findAllPersons=  function() {
        return fetch(self.url)
          .then(function (response) {
            return response.json()
        })
      }
// delete a person
     this.deletePerson= function(personId) {
        return fetch(`${self.url}/${personId}`,
          {method: 'DELETE'})
      }
// update a person details
      this.updatePerson=function (personId, person) {
        return fetch(`${self.url}/${personId}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(person)
        })
        .then(function(response){
          return  response.json()
        });
      
    }
}