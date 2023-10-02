pipeline{
    agent any 
    environment{
        HEROKU_API_KEY = credentials('heroku-api-key')
        APP_NAME = 'jenkins-react-deploy'
    }
    stages{
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                 sh '''
                  heroku container:release web --app=$APP_NAME
                 '''
            }
        }
    }
}