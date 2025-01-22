function add() {
   const input = document.getElementById('input');
   if (input.value == '') {
       alert("Enter task");
   } else {
       const newtask = document.createElement('li');
       const tasklist = document.getElementById('tasklist');
       newtask.textContent = input.value;
       input.value = '';
       tasklist.appendChild(newtask);
       addButtons(newtask);
   }
}

function addButtons(newtask) {
   const deletebtn = document.createElement('button');
   deletebtn.textContent = 'Delete';
   deletebtn.classList.add('delete');
   
   const tickbtn = document.createElement('button');
   tickbtn.textContent = '✔️';
   tickbtn.classList.add('tick', 'unchecked');
   
   newtask.appendChild(deletebtn);
   newtask.appendChild(tickbtn);

   deletebtn.onclick = function() {
       newtask.remove();
   }

   tickbtn.onclick = function() {
       newtask.classList.toggle('completed');
       if (newtask.classList.contains('completed')) {
           tickbtn.textContent = '❌';
           tickbtn.classList.remove('unchecked');
           tickbtn.classList.add('checked');
       } else {
           tickbtn.textContent = '✔️';
           tickbtn.classList.remove('checked');
           tickbtn.classList.add('unchecked');
       }
   }
}

function clearalldata() {
   const tasklist = document.getElementById('tasklist');
   tasklist.innerHTML = '';
}
