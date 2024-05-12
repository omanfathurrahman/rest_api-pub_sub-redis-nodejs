# Cara run aplikasi
## Run aplikasi Client (React.js)
		cd ./client
		npm install
		npm run build
		npm run preview
buka aplikasi pada [localhost:3000](lhttp://localhost:3000)
## Run aplikasi Server(Express.js)
Pastikan service redis sudah berjalan
Cara [menginstall redis di windows dengan docker ](https://medium.com/redis-with-raphael-de-lio/how-to-run-redis-locally-in-a-docker-container-and-manage-it-with-redis-insight-and-redis-cli-14b0af54e1d2)

		cd ./server-publisher
		npm install
		npm run build
		npm run start
buka aplikasi pada [localhost:8080](lhttp://localhost:3000)
## Run aplikasi Subscriber
Pastikan service redis sudah berjalan

		cd ./server-publisher
		npm install
		npm run build
		npm run start
