.PHONY: install build build-docker

install:
	pnpm i -r

build:
	pnpm run --filter app build

build-docker:
	docker build -t local-pdf-server .
