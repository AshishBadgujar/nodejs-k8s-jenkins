pipeline {
    agent any
    stages {
        stage('Build image') {
            steps {
                dir('app') {
                    script{
                    sh 'docker build -t app-img .'
                    sh 'docker tag app-img app-img:latest'
                    }
                }
               
            }
        }
        stage('Deploy to k8s'){
            steps{
                script {
                    def kubeconfig = readFile('.kubeconfig')
                    sh "echo '$kubeconfig' > ~/.kube/config"
                    sh 'kubectl apply -f k8s-manifest/app.yaml'
                }
            }
        }
    }
}
