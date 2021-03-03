build:
	docker build -t tai-sdk .

install:
	docker run --rm -it -v $$(pwd):/shared tai-sdk bash -c 'cd /shared/ && npm install'

lint:
	docker run --rm -it -v $$(pwd):/shared tai-sdk bash -c 'cd /shared/ && npm run lint'

build-sdk:
	docker run --rm -it -v $$(pwd):/shared tai-sdk bash -c 'cd /shared/ && npm run build'

run-bash:
	docker run --rm -it -v $$(pwd):/shared tai-sdk bash -c 'cd /shared/ && bash'

run-tests:
	docker run --rm -it -v $$(pwd):/shared tai-sdk bash -c 'cd /shared/ && npm run test'

run-tests-with-debug:
	docker run --rm -it -p 9229:9229 -v $$(pwd):/shared tai-sdk bash -c 'cd /shared/ && node --inspect-brk=0.0.0.0 node_modules/.bin/jest --runInBand'

build-docs:
	docker run --rm -it -v $$(pwd):/shared tai-sdk bash -c 'cd /shared/ && npm run docs'
