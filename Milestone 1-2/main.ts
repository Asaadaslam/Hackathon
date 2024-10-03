let skillButton = document.getElementById(`toggle_skills`) as HTMLButtonElement
let skills = document.getElementById(`skills`) as HTMLElement

skillButton.addEventListener(`click`, ()=> {

if (skills.style.display === `none`)
{   skills.style.display = `block`

}
else { skills.style.display = `none`}
}
);
