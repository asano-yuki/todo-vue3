FROM python:3.7
RUN apt-get update -qq && apt-get install -y build-essential nodejs mariadb-client vim
RUN pip install fastapi uvicorn
CMD uvicorn app.main:app --host 0.0.0.0 --port 3001