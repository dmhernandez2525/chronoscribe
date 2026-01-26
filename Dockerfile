# Chronoscribe - Document Transcription Service
# Build: docker build -t chronoscribe .
# Run:   docker-compose up -d

FROM python:3.11-slim

LABEL maintainer="Daniel Hernandez"
LABEL description="Transform handwritten legacy documents into searchable digital archives"

# Install system dependencies for OpenCV and image processing
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    libgomp1 \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy requirements first for layer caching
COPY pyproject.toml .
COPY src/ ./src/

# Install Python dependencies
RUN pip install --no-cache-dir -e .

# Create directories for data persistence
RUN mkdir -p /app/data/watch /app/data/processed /app/data/output

# Copy configuration files
COPY config/ ./config/

# Create non-root user
RUN useradd -m chronoscribe && chown -R chronoscribe:chronoscribe /app
USER chronoscribe

# Expose API port
EXPOSE 8001

# Environment variables
ENV PYTHONUNBUFFERED=1
ENV CHRONOSCRIBE_WATCH_DIR=/app/data/watch
ENV CHRONOSCRIBE_OUTPUT_DIR=/app/data/output

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8001/health || exit 1

# Start the CLI in watch mode
CMD ["python", "-m", "chronoscribe", "watch", "--port", "8001"]
