const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const user = document.querySelector('#search').value;

    if (user === "") {
        console.log("Please Enter GIT User Name");
    } else {
        const XHR = new XMLHttpRequest();
        const requestURL = `https://api.github.com/users/${user}`;
        XHR.open('GET', requestURL, true);

        XHR.onreadystatechange = () => {
            if (XHR.readyState === 4 && XHR.status === 200) { // Request completed and successful
                const data = JSON.parse(XHR.responseText);
                const img = document.querySelector('img');
                const follower = document.querySelector('span');

                img.src = data.avatar_url;
                follower.innerHTML = `<span>${data.followers}</span>`;
            } else if (XHR.readyState === 4) { // Request completed but not successful
                console.log("Failed to fetch user data.");
            }
        };
        XHR.send();
    }
});
