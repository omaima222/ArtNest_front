FROM node:20.10.0

WORKDIR /app

COPY dist/ArtNest_front/* .

EXPOSE 4200

RUN npm install -g http-server

CMD ["http-server", "-p", "4200"]
