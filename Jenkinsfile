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

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install || true'
                }
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                # Start backend
                cd backend
                pm2 restart backend || pm2 start server.js --name backend

                # Start frontend
                cd ../frontend
                pm2 restart frontend || pm2 start "http-server -p 8081" --name frontend
                '''
            }
        }

    }
}
