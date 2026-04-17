pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/Premchand-96/contact-app.git'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                sh '''
                cd backend
                pm2 delete backend || true
                pm2 start server.js --name backend
                '''
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                cd frontend
                pm2 delete frontend || true
                pm2 start "http-server -p 8081 --cors" --name frontend
                '''
            }
        }
    }
}
