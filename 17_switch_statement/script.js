// Switch Case Statement
let day = 'sunday';

switch(day) {
    case 'monday':
        console.log("Office Week Start!");
        console.log("Start Office Work.");
        break;
    case 'tuesday':
        console.log("Passing Lonly Time!");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write Code Examples!");
        break;
    case 'friday':
        console.log("Office Week End!");
        break;
    case 'satarday':
    case 'sunday':
        console.log("Off Day!");
        break;
    default:
        console.log("Not a Valid Day.");
}