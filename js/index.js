import employees from "/js/employees.js"

const mainContent = employees.map(({image, name, title, bio, social}) => {
    return `
        <div class="employee-block">
            <img src="images/photos/${image}" alt="headshot of ${name}" class="emp-img" />
            <h2>${name}</h2>
            <h3>${title}</h3>
            <div class="bio">${bio}</div>
            <div class="socials">                
                <a href="${social.linkedin}" target="_blank" class="link"><img src="images/icons/linkedIn.png" alt="" class="social-icon" /></a>
                <a href=${social.twitter} target="_blank" class="link"><img src="images/icons/twitter.png" alt="" class="social-icon" /></a> 
            </div>       
        </div>
    `
}).join('');

let mainEl = document.createElement("section")
mainEl.setAttribute("class", "main")
mainEl.innerHTML = mainContent
document.body.appendChild(mainEl)

const filterMenu = document.getElementById("filter-menu");

filterMenu.addEventListener("change", function (event) {
        if (event.target.value === "everyone") {
            mainEl.innerHTML = mainContent;
        } else {
        mainEl.innerHTML = ""        
        employees.filter(employee => {
            if (employee.team === event.target.value)
                return employee
        }).map(({image, name, title, bio, social}) => {
                mainEl.innerHTML +=
                    `
                        <div class="employee-block">
                            <img src="images/photos/${image}" alt="headshot of ${name}" class="emp-img" />
                            <h2>${name}</h2>
                            <h3>${title}</h3>
                            <div class="bio">${bio}</div>
                            <div class="socials">                
                                <a href="${social.linkedin}" target="_blank" class="link"><img src="images/icons/linkedIn.png" alt="" class="social-icon" /></a>
                                <a href=${social.twitter} target="_blank" class="link"><img src="images/icons/twitter.png" alt="" class="social-icon" /></a> 
                            </div>       
                        </div>
                    `
            })
        return mainEl;
        }
})
