 type="text/javascript">
        function imgSlider(anything){
            document.querySelector('.starbucks').src = anything;
        }
        function changeCircleColor(Color){
         const circle = document.querySelector('.circle');
        circle.style.background = color; 
        }

        //animated searchbar2

        const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
 
    searchButton.addEventListener('click', () =>{
        // We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
 }
 toggleSearch('search-bar', 'search-button')

 //drop down button

 let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});
