pipeline {
    agent any 
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
