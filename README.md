# 24-Hour Story Feature

This project is a simple 24-hour story feature similar to social media platforms like Instagram or Snapchat. Users can upload image-based stories, which are displayed for a limited time and can be viewed with a progress bar indicating the display duration.

## Project Structure

```
project-root/
|-- css/                  # Stylesheets
|-- js/                   # JavaScript files
|   |-- storage.js        # Manages localStorage for saving and retrieving stories
|   |-- story.js          # Handles story creation and display logic
|   |-- view.js           # Story viewing functionality with a progress bar
|-- index.html            # Main HTML file
```

## Features

- Upload and display image-based stories
- Stories are saved in localStorage
- Stories are displayed for a limited time
- Stories show a 3-second progress bar when viewed
- Option to close the story view

## Project Page

[🔗 Project URL](https://mdmoghnishah.github.io/24hr-Story-Feature/)
https://mdmoghnishah.github.io/24hr-Story-Feature/
## How to Use

1. Click the `+` button to upload an image story.
2. Select an image from your device.
3. The story will appear in the story container.
4. Click on a story to view it with a 3-second progress bar.
5. Close the story view with the "Close" button.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## Setup Instructions

1. Clone the repository:

```bash
   git clone https://github.com/yourusername/24hr-Story-Feature.git
```

2. Navigate to the project directory:

```bash
   cd 24hr-Story-Feature
```

3. Open `index.html` in your browser.

## Future Improvements

- Add story expiration after 24 hours
- Support for video stories
- User authentication for personalized stories

## License

This project is open-source and available under the [MIT License](LICENSE).
