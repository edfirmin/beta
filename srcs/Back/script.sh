#!/bin/ash

echo "START"


function postgres_is_ready {
    PGPASSWORD="${POSTGRES_PASSWORD}" psql -h "${POSTGRES_HOST}" -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" -p "${POSTGRES_PORT}" -c '\q' > /dev/null 2>&1
}

echo "Waiting for postgres..."
until postgres_is_ready; do
    echo "PostgreSQL not ready..."
    sleep 5
done
#sleep 5
#echo "${POSTGRES_PASSWORD}"

echo "PostgreSQL is ready"

python3 /usr/src/app/back/manage.py makemigrations
python3 /usr/src/app/back/manage.py migrate
python3 /usr/src/app/back/manage.py runserver 0.0.0.0:8008

echo "END"
