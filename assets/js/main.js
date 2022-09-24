fetch(`https://api.github.com/users/JasminiSantos/repos`)
    .then(result => result.json()).then((result) => {
        document.getElementById("projectsSum").textContent = Object.keys(result).length + "+";

        result.forEach(projeto => {

            let card = document.createElement('div');
            card.classList.add('card');

            let card_header = document.createElement('div');
            card_header.classList.add('card-header');

            let card_header_image = document.createElement('img');
            card_header_image.setAttribute('src', 'cursosacademy.png');

            let card_body = document.createElement('div');
            card_body.classList.add('card-body');

            let project_name = document.createElement('h2');
            project_name.textContent = projeto["name"].charAt(0).toUpperCase() + projeto["name"].slice(1);

            let project_language = document.createElement('span');
            project_language.classList.add('tag', 'tag-teal');
            project_language.textContent = projeto["language"] ? projeto["language"] : 'Other';

            let project_description = document.createElement('p');
            project_description.textContent = (projeto["description"]) ? projeto["description"] : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

            card_body.appendChild(project_name);
            card_body.appendChild(project_language);
            card_body.appendChild(project_description);

            card_header.appendChild(card_header_image);

            card.appendChild(card_header);
            card.appendChild(card_body);

            document.getElementById('projectList').appendChild(card);


        });

    })