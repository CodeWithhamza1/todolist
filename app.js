let form = document.querySelector('form');
let ls = localStorage.getItem('todo');
let todo = ls ? JSON.parse(ls) : [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inpDate = form[0].value;
    todo.push(inpDate);
    localStorage.setItem('todo', JSON.stringify(todo))
    window.location.reload()
})
todo.map((data, index) => {
    document.querySelector('tbody').innerHTML += `
    
    <tr>
     <td>${data}</td>
     <td onclick="del(${index})">Delete</td>   
    </tr>

    `
    console.log(`"${data}" has been entered`)
    document.querySelector('thead').innerHTML = `
    
    <tr>
        <th>List</th>
        <th>Delete</th>
    </tr>

    `
})
function del(e) {
    let deleted = todo.filter((data, index) => {
        return index !== e
    })
    localStorage.setItem('todo', JSON.stringify(deleted))
    window.location.reload()
}