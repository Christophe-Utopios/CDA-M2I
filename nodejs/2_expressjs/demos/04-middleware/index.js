
async function getData() {
    try {
        const response = await fetch('http://127.0.0.1:4000');
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
};

getData();