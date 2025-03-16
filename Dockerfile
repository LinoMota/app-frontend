FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

RUN apt update && apt install -y nginx && rm -rf /var/lib/apt/lists/*

EXPOSE 80

CMD ["./docker-entrypoint/env.sh"]
