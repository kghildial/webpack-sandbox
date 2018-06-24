import  _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';

function component() {
    var element = document.createElement('div');

    // Dependency: Lodash
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.classList.add('hello');

    // Add the image to our existing div
    var myIcon = new Image();
    myIcon.src = Icon; // icon.jpg is available in the form of Icon
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());