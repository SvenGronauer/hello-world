pipeline {
  /* Requires the Docker Pipeline plugin */
  agent { docker { image 'node:20-alpine3.21' } }

  stages {
    stage('Build') {
      steps {
        echo 'hello world'
        sh 'node --version'
      }
    }
    stage('Test') {
      steps {
        echo 'Skip testing for now'
      }
    }
  }
}