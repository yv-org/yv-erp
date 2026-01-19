# Youth Vision ERP

## Overview

Youth Vision ERP is an Enterprise Resource Planning (ERP) system designed to streamline business operations for Youth Vision. This application provides a comprehensive platform for managing various aspects of the organization, including user management, and other business processes.

The system is built using a modern microservices architecture powered by JHipster, ensuring scalability, maintainability, and ease of development. It leverages Spring Boot for backend services, Angular for the frontend, and integrates with tools like Consul for service discovery and Keycloak for secure authentication.

## Architecture

The application follows a microservices architecture with the following key components:

- **Gateway**: Serves as the main entry point and API gateway. It includes:
  - Angular-based web frontend for user interaction
  - Spring Boot backend for handling requests and routing to microservices
  - User authentication and session management

- **User Service**: A dedicated microservice for handling user-related operations such as:
  - User profiles and management
  - Authentication integration
  - User data persistence

The services communicate through REST APIs and are registered with Consul for service discovery. Security is implemented using OAuth 2.0 / OpenID Connect protocol with Keycloak as the identity provider.

## Prerequisites

Before you begin, ensure your development environment has the following software installed:

- **Java 17 or later**: Required for running Spring Boot applications
- **Node.js 18 or later**: Needed for Angular development and build tools
- **Docker and Docker Compose**: For running supporting services like databases and authentication
- **Git**: For version control and cloning the repository

## Getting Started

Follow these steps to set up and run the Youth Vision ERP system on your local machine.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd yv-erp
```

Replace `<repository-url>` with the actual repository URL.

### 2. Start Infrastructure Services

The application depends on several external services. Start them using Docker Compose:

```bash
# Start Consul for service discovery (runs in background)
docker compose -f gateway/src/main/docker/consul.yml up -d

# Start Keycloak for user authentication (runs in foreground)
docker compose -f gateway/src/main/docker/keycloak.yml up
```

Keep Keycloak running. In a new terminal, start other supporting services:

```bash
# Start additional services like databases
docker compose -f gateway/src/main/docker/services.yml up -d
```

### 3. Run the User Service

Open a new terminal and start the user service:

```bash
cd user-service
./gradlew
```

This will start the user service on its configured port (typically 8081).

### 4. Run the Gateway

In another new terminal, start the gateway service:

```bash
cd gateway

# Build the backend (excluding frontend)
./gradlew -x webapp
```

Keep this running, then in a new terminal:

```bash
cd gateway

# Install frontend dependencies and start development server
./npmw install
./npmw start
```

The gateway will start on http://localhost:8080 with hot-reload enabled for development.

### 5. Access the Application

Open your web browser and navigate to: **http://localhost:8080**

You can log in using the default Keycloak users:
- **Administrator**: username `admin`, password `admin`
- **Regular User**: username `user`, password `user`

## Usage

Once logged in, you can:

- Navigate through the web interface to access different modules
- Manage user accounts and profiles (depending on your permissions)
- View dashboards and reports
- Perform business operations as configured in the system

The interface is intuitive and guides you through various workflows. For specific features, refer to the user documentation or explore the menus.

## Development

For development work:

- Each service can be run independently as described above
- Make sure all dependent services (Consul, Keycloak, databases) are running
- Frontend changes will auto-reload with the `./npmw start` command
- Backend changes require restarting the respective service

### Running Tests

To run tests for each service:

```bash
# Gateway tests
cd gateway
./gradlew test

# User Service tests
cd user-service
./gradlew test
```

### Building for Production

To build production-ready JAR files:

```bash
# Gateway
cd gateway
./gradlew -Pprod clean bootJar

# User Service
cd user-service
./gradlew -Pprod clean bootJar
```

## Troubleshooting

### Common Issues

1. **Gateway fails to start**: Check if Consul is running on `http://localhost:8500`
2. **Authentication problems**: Ensure Keycloak is accessible at `http://localhost:9080`
3. **Service communication errors**: Verify all services are registered with Consul
4. **Port conflicts**: Make sure no other applications are using ports 8080, 8081, etc.

### Logs

Check the terminal output for error messages. For more detailed logs, look in the `logs/` directory of each service or check Docker container logs:

```bash
docker compose -f gateway/src/main/docker/consul.yml logs
```

### Getting Help

If you encounter issues not covered here:
- Check the individual service README files in `gateway/` and `user-service/`
- Refer to JHipster documentation: https://www.jhipster.tech
- Search for similar issues in the project repository

## Contributing

We welcome contributions to improve Youth Vision ERP! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

Follow the existing code style and ensure all tests pass before submitting.

## License

This project is licensed under [Specify License - e.g., MIT License]. See the LICENSE file for details.

---

For more detailed technical documentation, refer to the README files in individual service directories.