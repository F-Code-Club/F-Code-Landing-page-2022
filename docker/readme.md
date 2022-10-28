<h2>Preparing before we start</h2>

Install these things first:
- [docker](https://www.docker.com/)
- [mysql Community version](https://dev.mysql.com/downloads/installer/)

<h2>First Step code</h2>
Run these Command:

```
> cd docker
> docker-compose up -d
```

<h2>Checkout your docker</h2>
Run this command:

``` 
> docker container ls  
```

The result would be like this:

```
    CONTAINER ID   IMAGE                 COMMAND                  CREATED       STATUS       PORTS                               NAMES
    fc439c20ef3e   mysql                 "docker-entrypoint.s…"   2 hours ago   Up 2 hours   33060/tcp, 0.0.0.0:3308->3306/tcp   database
    695e78184d01   tomcat:8              "catalina.sh run"        2 hours ago   Up 2 hours   0.0.0.0:8082->8080/tcp              docker-tomcat-1
```

<h2>Calling API</h2>

Using `localhost:8082/management-1` to call api, endpoints are still the same as document. 

<h2>Note</h2>
The database has no data yet. If you want to add some data, Install mysql workbench and connect to ip 127.0.0.1 port 3308. 

The username and password are:

```
    user: root
    password: 123
```