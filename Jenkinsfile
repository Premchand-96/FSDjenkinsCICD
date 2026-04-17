pipeline {
    agent any

    stages {

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                # Backend
                cd backend
                pm2 delete backend || true
                pm2 start server.js --name backend

                # Frontend
                cd ../frontend
                pm2 delete frontend || true
                pm2 start "http-server -p 8081" --name frontend
                '''
            }
        }
    }
}
