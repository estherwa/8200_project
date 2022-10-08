FROM python:3.10

WORKDIR /app

COPY . /app

RUN  pip install -r requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir matplotlib pandas

EXPOSE 5000

COPY . .
CMD python3 app.py