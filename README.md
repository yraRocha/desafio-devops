# Desafio Devops

README – Migração do Docker Compose para Kubernetes

1. O que existia no Docker Compose
- MySQL com usuário, senha e database.
- Aplicação Node.js rodando na porta 3000.
- Tudo dentro de um único arquivo docker-compose.yml.

2. O que mudou no Kubernetes
- Secrets para senhas.
- ConfigMap para configs sem senha.
- Deployments para criar containers.
- Services para comunicação.
- PersistentVolume + PVC para dados do MySQL.
- Ingress / LoadBalancer para acesso externo.

3. Problemas corrigidos
- Ingress usando IP.
- NodePort sem acesso externo.
- Credenciais erradas no MySQL.

4. Arquitetura final
Ingress/LoadBalancer -> Node.js Service -> Node.js Deployment -> MySQL Service -> MySQL Deployment + PV/PVC.

5. Arquivos criados
mysql-secret.yaml
mysql-config.yaml
mysql-deployment.yaml
mysql-service.yaml
node-deployment.yaml
node-service.yaml
ingress.yaml

6. Como subir
kubectl apply -f .

7. Como verificar
kubectl get pods
kubectl get svc
kubectl get ingress

8. Como acessar
Use o EXTERNAL-IP do service LoadBalancer: http://EXTERNAL-IP

 
  