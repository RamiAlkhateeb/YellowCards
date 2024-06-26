# Golang microservices


#### Steps to create the mail mircroservice
- First git pull
- Remember to fix the docker file within mailer service where you should copy templates too \
  > copy templates /templates

- Then to build a listener service, you create a folder listener-service and add it to workspace
- Run the command > go mod init listener
- Get the rabbitmq driver by command > go get github.com/rabbitmq/amqp091-go
- Create main.go in the folder (without the cmd and api folders)
- Add rabbitmq to docker-compose 
