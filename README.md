# Golang microservices


#### Steps to create the mail mircroservice
- First git pull
- Create a folder (mail-service) and add it to workspace
- Within the terminal go to logger-service folder and run : \
      > go mod init mailer-service
- In the mail-service folder, create a new folder cmd/api, and data folder
- In the api folder, create a file main.go
- Copy helpers and routes files to api folder
- Install the package within mail-service 
	> go get github.com/go-chi/chi/v5 \
	> go get github.com/go-chi/chi/middleware \
	> go get github.com/go-chi/cors

- Create mailer.go file
- Install > go get github.com/vanng822/go-premailer/premailer \
  this will allow me to use css and convert it to a format good to mail service
- Install > go get github.com/xhit/go-simple-mail/v2
- After writing the code of mail.go, will create a folder within mail-service called templates
- Inside templates folder will create file mail.html.gohtml, and mail.plain.gohtml
- Then will do the docker file, and then add the mail-service to docker-compose
