# Emoji Mood Tracker API

Welcome to the Emoji Mood Tracker API! This API empowers users to record daily emotions using emojis and provides features for an enriched experience and profound insights into emotional well-being.

## Features

- **Log Mood Entries:** Easily log daily moods with emojis along with short notes.
- **Retrieve Monthly Summaries:** Get a summary of moods for a specific month, including emojis and notes.
- **Update and Delete Moods:** Modify or delete previously logged mood entries.
- **User Authentication:** Secure user data with JSON Web Tokens (JWT).
- **Emoji Statistics:** Gain insights into emoji usage over time.
- **Sorting and Filtering:** Retrieve mood entries based on chronological order or date range.
- **Sharing and Collaboration:** Share mood history through a unique link, with an option to disable sharing.
- **Data Insights:** Visualize mood trends for better understanding.
- **Emoji Suggestions:** Receive emoji suggestions based on mood notes.

## Getting Started

To get started with the Emoji Mood Tracker API:

1. Clone this repository to your local environment.
2. Install dependencies using `npm install`.
3. Configure database settings in `index.js` file of models folder where sequelize is used as ORM.
4. Set up user authentication by customizing the authentication process in `user.js`.
5. Start the API server with `npm start`.

Now you're ready to record, explore, and share your daily moods with emojis!

## Documentation

For detailed information on API endpoints, refer to the API documentation included in this repository.
https://www.notion.so/Emoji-Mood-Tracker-API-Documentation-6ca45b058b074402842b309ad999b688?pvs=4


## Feedback and Support

We welcome feedback, suggestions, and questions. If you have any issues or ideas for improvement, please reach out to us 
Let's start tracking those moods and gaining insights into your well-being. Happy mood tracking! 😊

## Dependencies

- [Sequelize](https://sequelize.org/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Nodemon](https://nodemon.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [UUID](https://www.npmjs.com/package/uuid)
