const navBarElements = document.querySelector('.nav-bar').childNodes;

function showMenu(e) {
  e.target.classList.add('visible');
}

function hideMenu(e) {
  e.target.classList.remove('visible');
}

navBarElements.forEach((element) => {
  element.addEventListener('mouseover', (e) => {
    showMenu(e);
  });
});

navBarElements.forEach((element) => {
  element.addEventListener('mouseout', (e) => {
    hideMenu(e);
  });
});

/* 
1) Html Structure: 
<ul class='nav-bar'>
  <li> Nav-Bar Title
    <div>Dropdown-Menu Content</div>
  </li>
</ul>

CSS Setup:
.nav-bar li div {
  display: none;
}

.nav-bar li.visible div {
  display: block;
}
*/
