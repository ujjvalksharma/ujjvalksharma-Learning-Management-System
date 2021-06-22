var $createUserBtn; 
var $updateUserBtn;
var rowTemplate;
var thTemplate;
var adminPortalClientService=new AdminPortalClientService();

var $frmUsernameFeild;
var $frmFirstNameFeild;
var $frmLastNameFeild;
var $frmPasswordFeild;
var $frmRoleFeild;
var personRow;
const personRowIdPrefix='person-row-';
var personRowIdSuffix=null;
var persons = []; 
function init() { 
    rowTemplate=jQuery('.webdev-person-row');
    thTemplate=jQuery('.webdev-person-row-parent');
    $createUserBtn=jQuery('.webdev-add-person-btn');
    $updateUserBtn=jQuery('.webdev-update-person-btn');   
    $frmUsernameFeild=jQuery('.webdev-username-txtbx');
    $frmFirstNameFeild=jQuery('.webdev-first-name-txtbx');
    $frmLastNameFeild=jQuery('.webdev-last-name-txtbx');
    $frmPasswordFeild=jQuery('.webdev-password-txtbx');
    $frmRoleFeild=jQuery('#webdev-role-selbx');    

    adminPortalClientService.findAllPersons().then( function(response){ 

      persons=response;
       renderPersonTable();
    });

    $createUserBtn.click(() => {

      var person={
        'username':$frmUsernameFeild.val(),
        'firstName':$frmFirstNameFeild.val(),
        'lastName':$frmLastNameFeild.val(),
        'password':$frmPasswordFeild.val(),
        'role':$frmRoleFeild.val()
      
      };

adminPortalClientService.addPerson(person)
    .then(function (person) {
      persons.push(person);
     renderPersonTable();

    });
    emptyPersonFormFeild();

     });

     $updateUserBtn.click(()=>{
       if(personArrIndex===null){
         return;
       }

       persons[personArrIndex].firstName=$frmFirstNameFeild.val();
       persons[personArrIndex].lastName=$frmLastNameFeild.val();
       persons[personArrIndex].username=$frmUsernameFeild.val(); 
       persons[personArrIndex].password=$frmPasswordFeild.val(); 
       persons[personArrIndex].role=$frmRoleFeild.val();    
       adminPortalClientService.updatePerson(persons[personArrIndex]._id, persons[personArrIndex])
       .then(function (status) {
       emptyPersonFormFeild(); 
       renderPersonTable();

       })
   });

  }

  function emptyPersonFormFeild(){
    $frmUsernameFeild.val("");
    $frmFirstNameFeild.val("");
    $frmLastNameFeild.val("");
    $frmPasswordFeild.val("");
    $frmRoleFeild.val("");
    personArrIndex=null;
  }

  function deletePerson(){

  var personIndex=this.id;
  var personId=persons[personIndex]._id;
adminPortalClientService.deletePerson(personId)
                              .then(function (status) {  
                                persons.splice(personIndex,1);  
                           renderPersonTable()
                             });

  }

  
function passFeildToUpdate(){

	$frmUsernameFeild.val(persons[this.id].username);
  $frmPasswordFeild.val(persons[this.id].password)   
	$frmFirstNameFeild.val(persons[this.id].firstName);
  $frmLastNameFeild.val(persons[this.id].lastName);
  $frmRoleFeild.val(persons[this.id].role);
  personArrIndex=this.id;
}

  function renderPersonTable(){

    thTemplate.empty();
	for(index in persons){
		const person=persons[index];
		const rowTemplateClone=rowTemplate.clone();
		rowTemplateClone.removeClass('display-off');
		rowTemplateClone.attr('id',personRowIdPrefix+person._id);

		rowTemplateClone.find('.webdev-person-username').html(person.username);
		rowTemplateClone.find('.webdev-person-first-name').html(person.firstName);
		rowTemplateClone.find('.webdev-person-last-name').html(person.lastName);
		rowTemplateClone.find('.webdev-person-role').html(person.role);
		rowTemplateClone.find('.webdev-person-delete-btn').click(deletePerson); // each button for each user has to be linked deleteuser function
		rowTemplateClone.find('.webdev-person-update-btn').click(passFeildToUpdate);  
		rowTemplateClone.find('.webdev-person-delete-btn').attr('id',index)
		rowTemplateClone.find('.webdev-person-update-btn').attr('id',index)
		thTemplate.append(rowTemplateClone);
		}
}


  jQuery(init)