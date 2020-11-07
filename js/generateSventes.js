function generateSventes(data) {
    console.log(data);
    let HTML = '';
    const dateObject = new Date();
    console.log(dateObject);
    const year = dateObject.getFullYear();

    for (let i = 0; i < data.length; i++) {
        const svente = data[i]

        let diena = svente.date.day;
        let menuo = svente.date.month;

        if (diena < 10) {
            diena = '0' + diena
        }

        if (menuo < 10) {
            menuo = '0' + menuo
        }

        HTML += `<li>
          <p class="name">${svente.name}</p>
          <p class="date"> ${year}-${menuo}-${diena}</p>
        <span class="status">Praejo/Siandien/Dar laukiam/Nezinau...</span>
            </li> `

    }

    const DOM = document.querySelector('ol');
    DOM.innerHTML = HTML
}

export { generateSventes }