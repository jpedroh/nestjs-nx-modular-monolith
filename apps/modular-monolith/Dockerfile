FROM node:lts-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/modular-monolith

COPY . .
RUN pnpm install
RUN pnpm build

ENTRYPOINT [ "node", "dist/apps/modular-monolith/main.js" ]

EXPOSE 3000
