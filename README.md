# End-to-End Aeon Essay Recommendation System  

## Frontend  

[App Link](http://3.94.162.4/)

A dockerized React application that uses our backend Api endpoints to serve the users:

- *Recommend Articles by URL*: Suggests articles similar to the one specified by its URL.  
-  *Fetch Articles by User Prompt*: Retrieves articles tailored to a user's input or query.  

---

## Features

- **Recommendations and Search functionality:** User can get recommendations for any essay by pasting its link in the input box or search for essays by typing prompts. 
- **Responsive Design:**  Fully responsive interface, optimized for a wide range of devices including desktops, tablets, and smartphones.
- **Chrome Extension Integration:** Offers a Chrome extension for direct interaction on Aeon essay pages. Users can easily download and install the extension to view recommendations within their browser while reading essays.
- **Conatinerized Deployment**: The application is containerized using Docker and deployed on AWS EC2 instance. 
- **CI/CD Pipline:** The application building and deployemnt process is fully automated using Github Actions.

---

## Tech Stack

- Application: React.js, Tailwind css
- Deployment: Docker, AWS ECR, AWS EC2, Github Actions

---

# End-to-End Aeon Essay Recommendation System  

## Frontend  

[App Link](http://3.94.162.4/)  

A Dockerized React application that uses backend API endpoints to serve users with tailored recommendations and search functionalities for Aeon essays.  

---

## Features  

- **Recommendations by URL**: Suggests articles similar to the one specified by its URL.  
- **Fetch Articles by Prompt**: Retrieves essays based on user-entered queries or keywords.  
- **User-Friendly Search and Recommendation**: Users can paste essay URLs or type prompts to get relevant essay recommendations or search results.  
- **Responsive Design**: Fully responsive interface optimized for desktops, tablets, and smartphones, ensuring a seamless user experience across devices.  
- **Chrome Extension Integration**: A Chrome extension allows users to interact directly on Aeon essay pages. Users can download and install the extension to view recommendations within the browser while reading essays.  
- **Containerized Deployment**: The application is containerized using Docker for easy and consistent deployment, hosted on an AWS EC2 instance.  
- **CI/CD Pipeline**: Automated build and deployment processes using GitHub Actions ensure rapid and reliable updates to the application.  

---

## Tech Stack  

- **Frontend**: React.js, Tailwind CSS  
- **Deployment**: Docker, AWS ECR, AWS EC2  
- **Automation**: GitHub Actions  

---

## Local Development  

Follow these steps to set up and run the application locally for development:  

1. **Prerequisites**:  
   - Install [Node.js](https://nodejs.org/) (version 16 or higher).  
   - Install [Docker](https://www.docker.com/) (optional, for containerized development).  
   - Install [Git](https://git-scm.com/).  

2. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/your-repo/aeon-recommendation-system.git  
   cd aeon-recommendation-system  
   ```  

3. **Install Dependencies**:  
   Navigate to the project directory and install required packages:  
   ```bash  
   npm install  
   ```  

5. **Run the Application**:  
   Start the development server:  
   ```bash  
   npm start  
   ```  
   The application will be available at `http://localhost:8000`.  

6. **Build the Docker Image (Optional)**:  
   To run the application in a containerized environment:  
   ```bash  
   docker build -t aeon-frontend .  
   docker run -p 3000:3000 aeon-frontend  
   ```  

7. **Testing the Chrome Extension (Optional)**:  
   - Follow the [extension setup instructions](http://your-site-link.com/extension-guide) to download and load the Chrome extension for local testing.  

