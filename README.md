# docker-child-proc
A child process ping test showing log issues

### Overview
Here we create a simple nodejs script that will spawn a child process that simply runs `ping google.com`. It should get `stdout`
every second with the updated response via `ping`. 

##### When run locally we see expected `stdout` logged to console about every second:
`node test.js`

##### When we run this within the container we see `stdout`from child pid about once a minute or so:
```
docker build -t ping-test .
docker run -itd --name ping-test ping-test
docker logs -f ping-test
```

Thoughts?
- Am I missing something with the priority of child pid `stdout`?
- If I `exec` into running container and run `ping google.com` it runs as expected.
