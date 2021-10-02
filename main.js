var firstNameId = 'first-name';
// = это оператор присваивания ... то есть то что слева 
//(переменная), ей присваивается значение справа.
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
var addressId = 'address';
var addressEl = document.getElementById(addressId);
var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);
var avaterWrapperId = 'avatar-wrapper';
var avatarWrapperEl = document.getElementById(avaterWrapperId);
var avatarId = 'avatar';
var avatarEl = document.getElementById(avatarId);

debugger;
function alertValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(addressEl.value);
}

firstNameEl.value = 'Andrey';

alertValue();

lastNameEl.className = 'last-name-input defalt-input error-input';

alertValue();

lastNameEl.title = 'Wrong last name'

alertValue();

avatarEl.src = 'https://wikiway.com/upload/resize_cache/hl-photo/98a/49b/720_400_1/poznan_44.jpg';

alertValue();

avatarEl.title = 'I am in Poznan';

alertValue();

citiesEl.value = "Minsk";

alertValue();

hobbiesEl.value = "I have not interests";

alertValue();

avatarWrapperEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li></ul>';
var listId = 'list';
var numberList = document.getElementById(listId);
console.log(numberList.innerHTML);