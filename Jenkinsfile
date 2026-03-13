pipeline {

agent any

stages {

stage('Checkout') {
steps {
git 'https://github.com/YOUR_GITHUB_USERNAME/contact-app.git'
}
}

stage('Install Backend') {
steps {
sh 'cd backend && npm install'
}
}

stage('Deploy Application') {
steps {
sh 'chmod +x deploy.sh'
sh './deploy.sh'
}
}

}

}
