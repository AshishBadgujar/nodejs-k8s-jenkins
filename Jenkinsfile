pipeline {
    agent any
    stages {
        stage('Build and Deploy') {
            steps {
                dir('app') {
                    sh 'docker build -t app-img .'
                    sh 'docker tag app-img app-img:latest'
                }
                script {
                    def kubeconfig = readFile('.kubeconfig')
                    sh "echo '$kubeconfig' > ~/.kube/config"
                    sh 'kubectl apply -f k8s-manifest/app.yaml'
                }
            }
        }
    }
}
