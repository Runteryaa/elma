// Fetch the JSON and populate the links
fetch('links.json')
    .then(response => response.json())
    .then(data => {
        const linksContainer = document.getElementById('links-container');
        data.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.className = 'link-button';
            anchor.target = '_blank';
            anchor.textContent = link.title;
            linksContainer.appendChild(anchor);
        });
    })
    .catch(error => console.error('Error fetching the links:', error));