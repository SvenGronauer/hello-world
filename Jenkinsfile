pipeline {
  /* Requires the Docker Pipeline plugin */
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'Start building...'
        sh 'docker-compose --version'
        sh 'ls -l'
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
        sh 'docker-compose --version'
      }
    }
  }
}