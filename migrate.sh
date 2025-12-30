#!/usr/bin/env bash
# Usage: ./migrate.sh up|down migration_file.sql database.sqlite

ACTION=$1
FILE=$2
DB=$3

if [[ ! -f "$FILE" ]]; then
    echo "Migration file not found: $FILE"
    exit 1
fi

if [[ "$ACTION" == "up" ]]; then
    grep -A 1000 "^-- up" "$FILE" | grep -B 1000 "^-- down" | sqlite3 "$DB"
elif [[ "$ACTION" == "down" ]]; then
    grep -A 1000 "^-- down" "$FILE" | tail -n +2 | sqlite3 "$DB"
else
    echo "Usage: $0 up|down migration_file.sql database.sqlite"
    exit 1
fi
