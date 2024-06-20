# Golang microservices


#### Steps to create the logger mircroservice
- Create a folder (logger-service) and add it to workspace
- Within the terminal go to logger-service folder and run : \
      > go mod init logger-service
- In the logger-service folder, create a new folder cmd/api, and data folder
- Then in terminal while being in logger-service folder, add the following packages \
      > go get go.mongodb.org/mongo-driver/mongo \
      > go get go.mongodb.org/mongo-driver/mongo/options
- In the api folder, create a file main.go 
- Create a file within the data folder called models.go
- And we create the routes file within api folder, and we install the package within logger-service \
	> go get github.com/go-chi/chi/v5 \
	> go get github.com/go-chi/chi/middleware \
	> go get github.com/go-chi/cors
\

- Will create a helpers file, same as usual \
and will create handlers.go file