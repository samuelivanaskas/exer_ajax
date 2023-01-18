document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-ver-github').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const github = getElementById('btn-ver-github').value;
        const endpoint = `https://github.com/ws/${github}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();

    })
})