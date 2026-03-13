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
                sh 'echo Deploying Application'
            }
        }

    }
}
