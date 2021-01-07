docker-compose down

docker rmi vvs-server
docker build -t vvs-server .

docker-compose up -d
