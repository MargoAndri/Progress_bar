
const getTemplate = () => {
    return `
    <div class="bar">
        <div class="percent_progress"></div>
        <span class="percent_number"></span>
    </div>`.trim()
};

const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstChild;
};

const getProgressBar = (container, percent) => {
    container.innerHTML = ``;
    let newBar = createElement(getTemplate());
    container.appendChild(newBar);
    const percentProgress = newBar.querySelector(`.percent_progress`);
    const percentNumber = newBar.querySelector(`.percent_number`);
    percentProgress.style.width = `${percent}%`;
    percentNumber.textContent = `${percent}%`;
};

