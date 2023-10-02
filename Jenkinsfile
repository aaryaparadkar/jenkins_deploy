pipeline {
    agent any 
    environment {
        HEROKU_API_KEY = credentials('heroku-api-key')
        APP_NAME = 'jenkins-react-deploy'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                 bat 'npm install bootstrap'  
                bat 'npm install'  
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build' 
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the app'
            }
        }
    }
}
