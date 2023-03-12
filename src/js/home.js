let closebtn = document.getElementById("closebtn"),
  opennav = document.getElementById("opennav"),
  closeBtnCategory = document.getElementById("closebtncategory"),
  openCategory = document.getElementById("opencategory"),
  closeBtnmenu = document.getElementById("closebtnmenu"),
  openMenu = document.getElementById("openmenu");

opennav.onclick = function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
};

/* Set the width of the side navigation to 0 */
closebtn.onclick = function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};

openCategory.onclick = function openNav() {
  document.getElementById("mySidecategory").style.width = "350px";
};

/* Set the width of the side navigation to 0 */
closeBtnCategory.onclick = function closeNav() {
  document.getElementById("mySidecategory").style.width = "0";
};

openMenu.onclick = function openNav() {
  document.getElementById("mySidemenu").style.width = "100%";
};

/* Set the width of the side navigation to 0 */
closeBtnmenu.onclick = function closeNav() {
  document.getElementById("mySidemenu").style.width = "0";
};
