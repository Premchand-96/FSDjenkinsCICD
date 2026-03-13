pipeline {
    agent any

    tools {
        nodejs 'node25' // Must match the name you gave in Step 2
    }

    stages {
        stage('Cleanup') {
            steps {
                echo 'Cleaning workspace...'
                cleanWs()
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    echo 'Installing Backend npm packages...'
                    sh 'npm install'
                }
            }
        }

        stage('Backend Security Audit') {
            steps {
                dir('backend') {
                    sh 'npm audit fix --force || true' 
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                dir('backend') {
                    echo 'Starting Backend Server...'
                    // Using PM2 is recommended for background processes in Jenkins
                    sh 'npm install -g pm2'
                    sh 'pm2 stop all || true'
                    sh 'pm2 start server.js --name "my-backend"'
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                echo 'Deploying Frontend...'
                // For a simple HTML frontend, you can move it to a web server directory
                // Example: sh 'cp frontend/index.html /var/www/html/'
                dir('frontend') {
                    archiveArtifacts artifacts: 'index.html', fingerprint: true
                }
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline Completed Successfully!'
        }
        failure {
            echo 'Pipeline Failed. Check logs.'
        }
    }
}
