function showContent(section) {
    const content = document.getElementById("main-content");

    if (section === "why") {
        content.innerHTML = `
            <h2>Why We Need Teachers Day</h2>
            <p>This section is blank for now.</p>
        `;
    } else if (section === "how") {
        content.innerHTML = `
            <h2>How We Celebrate Teachers Day</h2>
            <div class="content">
                <p class="para">content</p>
                <img src="ved-image.png">
            </div>
            <div class="content">
                <p class="para">content</p>
                <img src="ved-image.png">
            </div>
            <div class="content">
                <p class="para">content</p>
                <img src="ved-image.png">
            </div>
        `;
    } else if (section === "members") {
        content.innerHTML = `
            <h2>Contributing Members</h2>
            <p>This section is blank for now.</p>
        `;
    }
}
