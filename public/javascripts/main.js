const VERSION = '0.0.4'

'use strict';

class main {
    constructor() {
        console.log(`running version ${VERSION}`);
        this.setDateFields();
    }

    setDateFields() {
        document.getElementsByClassName('date');
    }
}

window.onload = () => {
    new main();
    $(document).foundation();
};
