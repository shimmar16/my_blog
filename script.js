// Function to handle comments for a specific post
function setupComments(postId) {
    const form = document.getElementById(`comment-form-${postId}`);
    const container = document.getElementById(`comments-container-${postId}`);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input
        const username = document.getElementById(`username-${postId}`).value;
        const comment = document.getElementById(`comment-${postId}`).value;

        // Create new comment element
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `
            <strong>${username}:</strong>
            <p>${comment}</p>
            <hr>
        `;

        // Append to the comments container
        container.appendChild(commentDiv);

        // Clear the form
        form.reset();
    });
}

// Initialize comments functionality for post1
setupComments("post1");