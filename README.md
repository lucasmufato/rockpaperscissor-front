# RockpaperscissorFront

Angular front end for Rock Paper Scissor game for Rabbobank

## Run locally

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

When running in development mode it will target the backend at `http://localhost:8080/`

### Production server

Run `ng build` to build the project. 

When using build it will target the backend at `https://rpsb.fly.dev`.

### Run locally with docker

Image will be targeting production

1. Create the image with: `docker build -t rps-front .`
2. Run the image with: `docker run -p 4200:80 rps-front:latest`
