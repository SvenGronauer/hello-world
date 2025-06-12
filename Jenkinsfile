pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'hello world'
        sh 'docker-compose build'
      }
    }
    stage('Test') {
      steps {
        echo 'Skip testing for now'
      }
    }
  }
}