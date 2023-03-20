document.addEventListener('DOMContentLoaded', function() {

    let historicVersions = Object.keys(RELEASE_NOTES).sort(VERSION_COMPARITOR).reverse();
    historicVersions.shift();
    historicVersions.shift();
    let div = document.createElement('div');
    historicVersions.forEach(version => {

        let versionNotes = RELEASE_NOTES[version];
        let ul = document.createElement('ul');
        ul.classList.add("updateList");
        versionNotes.forEach(note => {
            let li = document.createElement('li');
            li.innerHTML=note;
            ul.appendChild(li);
        });

        div.innerHTML += "<a href='" + version.split("-")[0] + "/index.html" + "'><h4>" + version + "</h4></a>"
        div.innerHTML += ul.outerHTML;
        
    })
    document.body.appendChild(div);
});
