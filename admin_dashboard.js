
fetch('/admin/get-users', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    const userList = document.getElementById('user-list');
    
    
    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;
        userList.appendChild(row);
    });
})
.catch(error => {
    console.error('Error fetching user data:', error);
});
