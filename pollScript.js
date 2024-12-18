let pollData = [];

function createPoll() {
    const title = document.getElementById("pollTitle").value;
    const options = document.getElementById("pollOptions").value.split(",");
    
    if (title && options.length > 1) {
        const poll = { title, options: options.map(option => ({ name: option.trim(), votes: 0 })) };
        pollData.push(poll);
        displayPoll(poll);
    }
}

function displayPoll(poll) {
    const pollDisplay = document.getElementById("poll-display");
    pollDisplay.innerHTML = `
        <h2>${poll.title}</h2>
        ${poll.options.map((option, index) => `
            <button onclick="votePoll(${index})">${option.name}</button>
        `).join('')}
    `;
}

function votePoll(index) {
    if (confirm("Are you sure you want to vote?")) {
        pollData[0].options[index].votes++;
        alert("Vote recorded!");
        displayPoll(pollData[0]);
    }
}
