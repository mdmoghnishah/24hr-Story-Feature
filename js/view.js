function viewStory(imageSrc) {
    const storyViewer = document.getElementById('storyViewer');
    const viewedStory = document.getElementById('viewedStory');
    const progressBar = document.getElementById('progressBar');

    if (!storyViewer || !viewedStory || !progressBar) {
        console.error('Viewer elements not found');
        return;
    }

    viewedStory.src = imageSrc;
    storyViewer.style.display = 'block';

    // Reset progress bar
    progressBar.style.width = '0%';

    // Animate progress bar over 3 seconds
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            closeStory();
        }
    }, 30); // 100% in 3000ms (3 seconds)
}

function closeStory() {
    const storyViewer = document.getElementById('storyViewer');
    const viewedStory = document.getElementById('viewedStory');
    const progressBar = document.getElementById('progressBar');

    if (storyViewer) storyViewer.style.display = 'none';
    if (viewedStory) viewedStory.src = '';
    if (progressBar) progressBar.style.width = '0%';
}
