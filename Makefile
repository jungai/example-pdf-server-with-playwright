.PHONY: install build build-docker

install:
	pnpm i -r

build:
	pnpm -r exec  -- pnpm build

build-docker:
	docker build -t local-pdf-server .
