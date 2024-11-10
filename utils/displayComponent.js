import { MyComponent } from '../components/MyComponent.js';

function displayComponent(container, data) {
    container.innerHTML = ''; 
    const component = document.createElement('my-component');
    component.data = data;
    container.appendChild(component);
}

export { displayComponent };
