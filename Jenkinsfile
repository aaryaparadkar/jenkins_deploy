pipeline{
    agent any 
    environment{
        HEROKU_API_KEY = credentials('heroku-api-key')
        APP_NAME = 'jenkins-react-deploy'
    }
    stages{
        stage('Build'){
            steps{
                bat 'npm init'
                bat 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying the app'
            }
        }
    }
}
