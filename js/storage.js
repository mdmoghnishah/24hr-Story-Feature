document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");

    if (!fileInput) {
        console.error("🚨 File input not found!");
        return;
    }

    fileInput.addEventListener("change", function (event) {
        console.log("📂 File input changed!");

        const file = event.target.files[0];

        if (!file) {
            console.error("🚨 No file selected!");
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            console.log("🖼 Converted to Base64:", reader.result);
            addNewStory(reader.result); // Call addNewStory with the Base64 image data
        };

        reader.onerror = function (error) {
            console.error("🚨 File Read Error:", error);
        };
    });
});

function addNewStory(imageData) {
    console.log("📸 addNewStory() Called!");

    if (!imageData) {
        console.error("🚨 Image data is empty! Cannot save.");
        return;
    }

    const stories = getStoredStories();
    console.log("📦 Stories before adding:", stories);

    const timestamp = Date.now();
    const newStory = { image: imageData, timestamp };

    stories.push(newStory);
    console.log("✅ Saving Updated Stories:", stories);

    saveStories(stories);
}
/**
 * Retrieve stored stories from local storage.
 * @returns {Array} List of stories
 */
function getStoredStories() {
    const storedStories = localStorage.getItem("stories");
    console.log("📦 Fetching from Local Storage:", storedStories); // Debugging
    return storedStories ? JSON.parse(storedStories) : [];
}

/**
 * Save stories to local storage.
 * @param {Array} stories - List of stories to store
 */
function saveStories(stories) {
    console.log("💾 Saving to localStorage:", stories);
    localStorage.setItem("stories", JSON.stringify(stories));

    // Verify storage
    console.log("🔍 Checking Storage:", localStorage.getItem("stories"));
}

/**
 * Add a new story to local storage.
 * @param {string} imageData - Base64 encoded image
 */
function addNewStory(imageData) {
    console.log("📸 addNewStory() Called!");

    if (!imageData) {
        console.error("🚨 Image data is empty! Cannot save.");
        return;
    }

    const stories = getStoredStories();
    console.log("📦 Stories before adding:", stories);

    const timestamp = Date.now();
    const newStory = { image: imageData, timestamp };

    stories.push(newStory);
    console.log("✅ Saving Updated Stories:", stories);

    saveStories(stories);
}

/**
 * Remove expired stories (older than 24 hours).
 */
function cleanExpiredStories() {
    const stories = getStoredStories();
    const now = Date.now();
    const validStories = stories.filter(story => now - story.timestamp < 24 * 60 * 60 * 1000);

    if (validStories.length !== stories.length) {
        console.log("🗑 Removing expired stories...");
        saveStories(validStories);
    }
}

/**
 * Clear all stories from local storage.
 */
function clearAllStories() {
    localStorage.removeItem("stories");
    console.log("🗑 All stories cleared!");
}

// Run this function when the script loads
cleanExpiredStories();


function saveStories(stories) {
    console.log("💾 Saving to localStorage:", stories);

    localStorage.setItem("stories", JSON.stringify(stories));
    
    // Immediately check if it's stored
    console.log("🔍 Checking Storage:", localStorage.getItem("stories"));
}
