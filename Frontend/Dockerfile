FROM python:3.10

WORKDIR /app

COPY Frontend /app

RUN  npm install

COPY . .

RUN npm run build

EXPOSE 3000

imp