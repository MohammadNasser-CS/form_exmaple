var uname=document.getElementById("name");
var email=document.getElementById("email");
var password=document.getElementById("password");
var addBtn=document.getElementById("addBtn");

var stds=[];
addBtn.onclick=function(){
    event.preventDefault();
    addStd();
    print();
}
function addStd(){
var student={
    firstname:uname.value,
    email:email.value,
    password:password.value
}
stds.push(student);

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Student Has Been inserted Sucessfuly.',
  showConfirmButton: false,
  timer: 1500
})

}
function print(){
    for(var i=0;i<stds.length;i++)
    {
        console.log(stds[i]);
    }
}