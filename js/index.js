import employees from "/js/employees.js"

const mainContent = employees.map((employee) => {
    return `
        <div class="employee-block">
            <img src="images/photos/${employee.image}" alt="headshot of ${employee.name}" class="emp-img" />
            <h2>${employee.name}</h2>
            <h3>${employee.title}</h3>
            <div class="bio">${employee.bio}</div>
            <div class="socials">                
                <a href="${employee.social.linkedin}" target="_blank" class="link"><img src="images/icons/linkedIn.png" alt="" class="social-icon" /></a>
                <a href=${employee.social.twitter} target="_blank" class="link"><img src="images/icons/twitter.png" alt="" class="social-icon" /></a> 
            </div>       
        </div>
    `
}).join('');

document.body.innerHTML += `
    <main class="main">
        ${mainContent}
    </main>
`