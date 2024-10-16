# Vars
ENV ?= dev
COMPOSE_FILE = docker-compose.$(ENV).yaml

# Environment check
check-env:
ifeq ($(ENV),)
	$(error ENV is not set. Use 'make ENV=dev [target]' or 'make ENV=prod [target]')
endif
ifneq ($(ENV),dev)
ifneq ($(ENV),prod)
	$(error Invalid environment. ENV must be 'dev' or 'prod')
endif
endif

# check if file exist
check-file:
	@if [ ! -f $(COMPOSE_FILE) ]; then \
		echo "Error: $(COMPOSE_FILE) does not exist."; \
		exit 1; \
	fi

# stop and down container
down: check-env check-file
	@echo "Stopping and removing containers and volumes..."
	docker compose -f $(COMPOSE_FILE) down --volumes

# build image
build: check-env check-file
	@echo "Building Docker images..."
	docker compose -f $(COMPOSE_FILE) build

# start container
up: check-env check-file
	@echo "Starting Docker containers..."
	docker compose -f $(COMPOSE_FILE) up

# stop container
stop: check-env check-file
	@echo "Stopping Docker containers..."
	docker compose -f $(COMPOSE_FILE) stop

# Pull image from Docker Hub
pull: check-env check-file
	@echo "Pulling Docker images from Docker Hub..."
	docker compose -f $(COMPOSE_FILE) pull
