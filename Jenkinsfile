pipeline {
  /* Requires the Docker Pipeline plugin */
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Start building with docker:'
        sh 'docker-compose --version'
        sh 'docker-compose build'
      }
    }
    stage('Test') {
      steps {
        echo 'Skip testing for now'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Compose up and starts services in background'
        sh 'docker-compose up -d'
      }
    }
  }
}