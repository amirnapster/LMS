# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
#RUN   sed -i 's|"@rasmio/old": "^0.1.0"|"@rasmio/old": "/app/packages/old"|g' /app/packages/current/package.json
#RUN yarn 
#RUN yarn build


RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app
RUN yarn 
RUN yarn build

USER nextjs

EXPOSE 3002

ENV PORT 3002

CMD ["yarn", "start"]
