# Note-Taker

## Description
Note Taker is a web application that allows users to write, save, and delete notes. The application is built with an Express.js backend, a JSON file for data storage, and a clean, responsive front end. It helps users organize their thoughts and manage tasks efficiently.

---

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)


---

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Note-Taker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Note-Taker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `db/db.json` file with an empty array:
   ```json
   []
   ```

5. Start the server:
   ```bash
   node server.js
   ```

6. Open your browser and visit:
   ```bash
   http://localhost:3001
   ```

---

## Usage

1. Navigate to the application home page.
2. Click **Get Started** to open the notes page.
3. Use the text fields to create a new note:
   - Add a title in the "Note Title" field.
   - Write the note in the "Note Text" field.
4. Click the **Save** button to store the note.
5. View your saved notes in the left-hand column.
6. Click on a note to view it, or click the **New Note** button to create another note.
7. Use the **Delete** icon next to a note to remove it.

---

## Features

- Write and save notes.
- View saved notes.
- Delete notes.
- Responsive design for desktop and mobile.
- Persist notes using a JSON file as a database.

---

## Technologies Used

- **Front End:**
  - HTML
  - CSS (Bootstrap)
  - JavaScript

- **Back End:**
  - Node.js
  - Express.js
  - UUID for unique IDs

- **Data Storage:**
  - JSON file

## Website Images
![json and success terminal ](https://github.com/user-attachments/assets/28d92db7-8c74-4761-b6a1-7e06beb9b0ba)

![Note taker screen ](https://github.com/user-attachments/assets/7e9c2037-5c3b-409c-8a35-6c935bbbbcc9)


---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

Thank you for using Note Taker!

