FROM docker.arvancloud.ir/node:20.10.0-alpine AS builder

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN apk add --no-cache jq 

ENV NODE_ENV production
ENV IGNORE_BUILD_ERRORS true
ENV NEXT_TELEMETRY_DISABLED 1

COPY package.json .

RUN jq 'del(.devDependencies)' package.json > temp.json && mv temp.json package.json

COPY yarn.lock .

RUN yarn 

COPY . .

RUN yarn build

FROM docker.arvancloud.ir/node:20.10.0-alpine

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public


USER 1001

EXPOSE 80

ENV PORT 80
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]
