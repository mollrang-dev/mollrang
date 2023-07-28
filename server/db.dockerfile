FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mollrang

ENV TZ=Asia/Seoul
ENV LANG=C.UTF-8

COPY ./init.sql /docker-entrypoint-initdb.d/init.sql
