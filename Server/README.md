To run the server, first you have to enter the command:
```shell
npm install
```
After installing all node_modules, you can either run:
```shell
npm start
```
or
```shell
node index.js
```
### .env file
In order to make the server run, you also have to create a .env file with the following variables:
```.env
PORT = Your_Port

POSTGRESQL_USER = "Your_PostgresSQL_User"
POSTGRESQL_PASSWORD = "Your_PostgresSQL_Password"
POSTGRESQL_HOST = "Your_PostgresSQL_Host"
POSTGRESQL_PORT = Your_PostgresSQL_Port
```