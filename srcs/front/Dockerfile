FROM node:18-alpine

WORKDIR /app

COPY ./test/package.json /app/
COPY ./test/package-lock.json /app/
RUN npm install
RUN npm install axios
COPY ./test/ /app/
COPY ./script.sh /

ENTRYPOINT ["/script.sh"]