# Docker Compose Setup with Ollama and Code-Server

A complete development environment with Ollama (local LLM) and code-server (web-based VS Code) running in Docker containers.

## Features

- **Ollama**: Run local LLMs with API access on port 11434
- **Code-Server**: Full VS Code experience accessible via web browser on port 8080
- **Persistent Storage**: Models and configuration persist across container restarts
- **Network Connectivity**: Containers can communicate with each other

## Prerequisites

- Docker installed on your system
- Docker Compose installed

## Quick Start

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd docker-opencode-ollama
   ```

2. **Start the services**
   ```bash
   docker-compose up -d
   ```

3. **Access the services**

   - **Code-Server (VS Code Web)**
     - URL: http://localhost:8080
     - Password: `admin123`

   - **Ollama API**
     - URL: http://localhost:11434
     - API Documentation: http://localhost:11434/api

## Usage

### Managing Services

- **Start services**: `docker-compose up -d`
- **Stop services**: `docker-compose down`
- **View logs**: `docker-compose logs -f`
- **Rebuild and restart**: `docker-compose up -d --build`

### Working with Ollama

After starting the services, you can interact with Ollama:

1. **Pull a model**:
   ```bash
   curl -X POST http://localhost:11434/api/pull -d '{
     "name": "llama2"
   }'
   ```

2. **Run a model**:
   ```bash
   curl -X POST http://localhost:11434/api/generate -d '{
     "model": "llama2",
     "prompt": "Why is the sky blue?",
     "stream": false
   }'
   ```

### Using Code-Server

1. Open http://localhost:8080 in your browser
2. Enter password: `admin123`
3. Your workspace is mounted at `/home/coder/project`
4. All files you create will be saved to the `workspace` directory on your host machine

## File Structure

```
.
├── docker-compose.yml     # Docker composition configuration
├── README.md             # This file
└── workspace/            # Your project files (created automatically)
```

## Configuration

### Ollama Configuration

- Models are stored in the `ollama_models` Docker volume
- API accessible at http://localhost:11434
- Environment variables can be modified in `docker-compose.yml`

### Code-Server Configuration

- Default password: `admin123` (change in docker-compose.yml)
- Workspace mounted from host `./workspace` directory
- Configuration stored in `code-server-config` Docker volume

## Security Notes

- Change the default password in production environments
- Consider using HTTPS for remote access
- The setup exposes ports 8080 and 11434 on localhost

## Troubleshooting

### Port Conflicts
If ports 8080 or 11434 are already in use, modify the port mappings in `docker-compose.yml`.

### Permission Issues
If you encounter permission issues with mounted volumes, ensure the Docker user has appropriate permissions.

### Model Downloads
Ollama models can take time to download. Check the logs with `docker-compose logs ollama` to monitor progress.

## Extending the Setup

You can add additional services to the `docker-compose.yml` file, such as:
- Database services (PostgreSQL, MySQL)
- Web servers (nginx, Apache)
- Other development tools

All services will be able to communicate through the `code-network`.
