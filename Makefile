build:
	docker build -t kolibri-js .

install:
	docker run --rm -it -v $$(pwd):/shared --workdir /shared kolibri-js npm install

lint:
	docker run --rm -it -v $$(pwd):/shared --workdir /shared kolibri-js npm run lint

build-sdk:
	docker run --rm -it -v $$(pwd):/shared --workdir /shared kolibri-js npm run build

bash:
	docker run --rm -it -v $$(pwd):/shared --workdir /shared kolibri-js bash

test:
	docker run --rm -it -v $$(pwd):/shared --workdir /shared kolibri-js npm run test

test-debug:
	docker run --rm -it -p 9229:9229 -v $$(pwd):/shared --workdir /shared kolibri-js node --inspect-brk=0.0.0.0 node_modules/.bin/jest --runInBand

build-docs:
	docker run --rm -it -v $$(pwd):/shared --workdir /shared kolibri-js npm run docs

.PHONY: build install lint build-sdk bash test test-debug build-docs