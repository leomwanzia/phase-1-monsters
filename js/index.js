    const URL = "http://localhost:3000/monsters";
    let cur_page = 1;

        document.addEventListener("DOMContentLoaded", getData(cur_page));
        document.addEventListener("DOMContentLoaded", nextPage);
        document.addEventListener("DOMContentLoaded", prevPage);
        document.addEventListener("DOMContentLoaded", createForm);

        function getData(page) {
            newURL = URL + "/?_limit=50&_page=" + page;
            fetch(newURL)
                .then((resp) => resp.json())
                .then((json) =>
                    json.forEach((element) => {
                        renderMonster(element);
                    })
                );
        }
