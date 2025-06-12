pipeline {
  /* Requires the Docker Pipeline plugin */
  agent any

  stages {
    stage('Build') {
      steps {
        echo 'hello world from build stage!'
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