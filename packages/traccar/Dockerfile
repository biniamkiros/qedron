# ARG PROXY_VERSION

FROM  traccar/traccar:latest

COPY ./packages/traccar/traccar.xml /opt/traccar/conf/traccar.xml
# /etc/nginx/nginx.conf

CMD ["-jar", "tracker-server.jar", "conf/traccar.xml"]