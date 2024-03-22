Backend Assignment

Folder Structure:
- controllers: Contains controller logic for handling API requests.                         [Task A]
- middleware: Contains middleware functions, such as error handling.                        [Task A]
- models: Contains MongoDB schema definitions.                                              [Task A + Task B]
- routes: Contains API route definitions.                                                   [Task A]
- config.js: Configuration file containing MongoDB connection URI for database access.      [Task A + Task B]
- db.js: Database connection setup file.                                                    [Task A + Task B]
- index.js: Main entry point of the application.                                            [Task A]
- insertData.js: Script to insert sample data into the database.                            [Task B]

Running the Application:
1. Install dependencies using `npm install`.
2. Configure MongoDB Atlas credentials in `config.js`.
3. Run the application using `node index.js`.

Overview of Task B:
- Set up a MongoDB Atlas Cluster.
- Created a schema for inserting the data into the MongoDB Atlas Cluster.
- Used insertData.js to insert the data into the cluster.

Overview of Task A:
- Developed a RESTful API with endpoints for fetching price and volume data from the database.
- Implemented controller logic for handling API requests.
- Created middleware functions for error handling.
- Defined MongoDB schema definitions for the application's data model.
- Established API route definitions to handle incoming requests.
- Configured MongoDB connection settings in config.js.
- Set up database connection in db.js.
- Defined the main entry point of the application in index.js

