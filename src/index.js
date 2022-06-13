document.addEventListener("DOMContentLoaded", () => {

  // your code here
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    // console.log(e.target['new-task-description'].value)
    p = document.createElement('p');
    p.textContent = `${e.target['new-task-description'].value} `
    button = document.createElement('button')
    button.textContent = 'Delete'
    console.log(p)
    form.appendChild(p)
    p.appendChild(button)

    button.addEventListener('click', function(){
      this.parentNode.remove()
    })
   
  })
  
  
  

});
