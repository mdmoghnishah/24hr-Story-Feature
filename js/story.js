document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");

    if (fileInput) {
        console.log("✅ File input found");
        fileInput.addEventListener("change", handleFileUpload);
    } else {
        console.error(" File input not found");
    }

    loadStories();
});

/**
 * Handles file selection and converts it to Base64.
 */
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) {
        console.error(" No file selected");
        return;
    }

    console.log("📂 File selected:", file);

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64Image = e.target.result;
        console.log("📸 File read as Base64:", base64Image);
        saveNewStory(base64Image);

        // Reset the input so the same file can be uploaded again
        event.target.value = "";
    };
    reader.readAsDataURL(file);
}


/**
 * Saves a new story in local storage.
 */
function saveNewStory(imageData) {
    const stories = getStoredStories();
    const timestamp = Date.now();
    stories.push({ image: imageData, timestamp });

    console.log("💾 Saving stories:", stories);
    
    saveStories(stories);
    
    loadStories();
    
}


/**
 * Loads stories from local storage and displays them.
 */
function loadStories() {
    cleanExpiredStories();
    
    const storyContainer = document.getElementById("storyContainer");

    if (!storyContainer) {
        console.error("Story container not found");
        return;
    }

    // Clear only the story elements, but leave the add button and input
    const existingStories = storyContainer.querySelectorAll('.story');
    existingStories.forEach(story => story.remove());

    const stories = getStoredStories();
    stories.forEach((story, index) => {
        const storyDiv = document.createElement("div");
        storyDiv.classList.add("story");
        storyDiv.innerHTML = `<img src="${story.image}" alt="Story ${index}">`;
        storyDiv.onclick = () => viewStory(story.image);
        storyContainer.appendChild(storyDiv);
    });
}


