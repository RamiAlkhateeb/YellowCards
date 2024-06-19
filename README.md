# Golang microservices


#### Steps to create the logger mircroservice
- Create a folder (logger-service) and add it to workspace
- Within the terminal go to logger-service folder and run : \
      > go mod init logger-service
- In the logger-service folder, create a new folder cmd/api, and data folder
- Then in terminal while being in logger-service folder, add the following packages \
      > go get go.mongodb.org/mongo-driver/mongo \
      > go get go.mongodb.org/mongo-driver/mongo/options
- In the api folder, create a file main.go and write the following in it:
  ```
  package main

  const (
        webPort = "80"
        rbcPort = "5001"
        mongoURL = "mongodb://mongo:27017"
        gRpcPort = "50001"
  )

  ver client *mongo.Client

  type Config struct {
        
  }
  
  func main(){
        // connect to mongo
        mongoClient, err := connectToMongo()
        if err != nil {
            log.Panic(err)
        }
        client = mongoClient
  }

  func connectToMongo() (*mongo.Client, error){
      //create connection options
      clientOptions := options.Client().ApplyURI(mongoURL)
      clientOptions.setAuth(options.Credential{
        Username: "admin",
        Password: "password",
  })

      //connect
      c, err := mongo.Connect(context.TODO(), clientOptions)
      if err != nil {
        log.Println("Error connecting:" , err)
        return nil, err
  } 
  }
  ```
