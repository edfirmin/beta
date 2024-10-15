include ./srcs/.env
export

all:
	@mkdir -p /home/edfirmin/Documents/database
	@cd srcs && sudo docker compose build && sudo docker compose up

clean:
	@cd srcs && sudo docker compose down

fclean:
	@make clean
	@echo "Removing all the containers, images and volumes"
	@docker system prune -a -f --volumes
	@docker network prune -f
	@rm -rf /home/edfirmin/Documents/database
re:
	make fclean
	make all