FROM mcr.microsoft.com/playwright:focal
# FROM mcr.microsoft.com/playwright:next-focal

WORKDIR /home/jungai/pdf-server

RUN apt-get update \
  && npm install -g pnpm

# DEPS
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
COPY ./pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY ./app/package.json ./app/package.json

RUN pnpm install -r --frozen-lockfile -P

COPY ./app/lib ./app/lib

WORKDIR /home/jungai/pdf-server/app

CMD ["pnpm", "task"]
