---
title: Architecture
---

Kestra's architecture is designed to be scalable, flexible and fault-tolerant. Depeding on your needs, you can choose between two different architectures: **JDBC** and **Kafka**.

## Architecture with JDBC backend

The following diagram shows the main components of Kestra using the JDBC backend.

![Kestra JDBC Architecture](/docs/architecture/jdbc.png "Kestra Architecture")

Here are the components and their interactions:

1. **JDBC Backend**: this is the data storage layer used for orchestration metadata.

2. **Server**: this is the central part of the system, composed of:
   - **Webserver**: this components is serving both an API and a User Interface.
   - **Scheduler**: an essential part of the system that schedules workflows and handles all triggers except for the flow triggers (see below).
   - **Executor**: another critical component responsible for the orchestration logic including flow triggers.
   - **Worker**: this might be one or multiple processes that carry out the heavy computation of runnable tasks and polling triggers. For privacy reasons, workers are the only components that interact with the user's infrastructure, including the internal storage and external services.

3. **User**: interacts with the system via UI and API.

4. **User’s Infrastructure**: private infrastructure components that are part of the user’s environment, which Kestra interacts with:
   - **Internal Storage**: can be any cloud storage system within the user's infrastructure (e.g. AWS S3, Google Cloud Storage, or Azure Blob Storage).
   - **External Services**: third-party APIs or services outside of Kestra which Workers might interact with to process data within a given task.

The arrows indicate the direction of communication. The JDBC Backend connects to the Server, which in turn interacts with the User's Infrastructure. The User interacts with the system through the API and UI.

### Scalability with JDBC

The scalable design of the architecture allows you to run multiple instances of the Webserver, Executor, Worker and Schedulor to handle increased load. As your workload increases, more instances of the required components can be added to the system to distribute the load and maintain performance. At the time of writing, Scheduler is the only component that can only be run as a single instance, but this will change in the near future.

The JDBC Backend can be scaled too, either through clustering or sharding, to handle larger volumes of data and a higher number of requests from the Server components. Most cloud providers offer managed database services that can be scaled up and down as needed.

---

## Architecture with Kafka and Elasticsearch backend

The following diagram shows the main components of Kestra using the Kafka and Elasticsearch backend.

![Kestra OSS Architecture](/docs/architecture/kafka.png "Kestra Architecture")

Note that this architecture is only available in the Enterprise Edition of Kestra.

This architecture is designed to provide enhanced scalability, high availability, and fault tolerance, required to meet the needs of large-scale enterprise deployments.

1. **Kafka**: this component serves as the messaging backend, which communicates between different components of the system and allows for robust scalability and fault tolerance.

2. **Microservices**: This layer includes several services:
   - **Webserver**: serves the API and User Interface for interaction with the system.
   - **Scheduler**: schedules workflows and processes all triggers except for the flow triggers.
   - **Executor**: handles the orchestration logic, including flow triggers.
   - **Indexer**: indexes data from Kafka to Elasticsearch for quick retrieval and search.
   - **Worker**: runs tasks and interacts with the user's infrastructure.

3. **User**: engages with the system through the Webserver's API and UI.

4. **Elasticsearch**: acts as a search and UI backend, storing logs, execution history, and enabling fast data retrieval.

5. **User’s Infrastructure**: private infrastructure components that are part of the user’s environment, which Kestra interacts with:
   - **Internal Storage**: Cloud storage services where user's data is stored (e.g. AWS S3, Google Cloud Storage, or Azure Blob Storage).
   - **External Services**: APIs or services that Workers might interact with during task processing.

### Scalability with Kafka and Elasticsearch
Kafka's messaging backend allows handling large volumes of data with the ability to scale out as needed. You can run multiple (_horizontally scaled_) instances of services such as Workers, Schedulers, Webservers and Executors to distribute load and maintain system performance as demand increases. Elasticsearch contributes to scalability by providing a robust, horizontally scalable UI backend that can efficiently search across large amounts of data.

---

## Comparison between JDBC and Kafka architectures

When comparing both diagrams, the main difference between the architecture of the **JDBC** and an **Kafka** architectures is the data layer (_JDBC Database vs. Kafka and Elasticsearch_).

::alert{type="info"}
Note that it's possible to use the [Enterprise Edition](https://kestra.io/pricing) with a JDBC database backend for smaller deployments. In fact, it's often easier to start with a JDBC backend and migrate to Kafka and Elasticsearch when your deployment grows.
::

The **Worker** is the only component communicating with your private data sources to extract and transform data. The Worker also interacts with **Internal Storage** to persist intermediary results and store the final task run outputs.

All components of the **application layer** (including the Worker, Executor, and Scheduler) are decoupled and stateless, communcating with each other through the **Queue** (Kafka/JDBC). You can deploy and scale them independently — the only exception is the Scheduler, you can have only one Scheduler component in a JDBC-based architecture (_in the near future, Scheduler will also be able to scale_). When using Kafka and Elasticsearch, you can scale the replica count for the Scheduler as well, making the component highly available.

The **Webserver** communicates with the (Elasticsearch/JDBC) Repository to serve data for Kestra UI and API.

The **data layer** is decoupled from the application layer and provides a separation between:
- storing your private data processing artifacts — **Internal Storage** is used to store outputs of your executions; you can think of Internal Storage as your own private S3 bucket
- storing execution metadata — (Kafka/JDBC) **Queue** is used as the orchestration backend
- storing logs and user-facing data — the (Elasticsearch/JDBC) **Repository** is used to store data needed to serve Kestra UI and API.

The Indexer, available only in the Enterprise Edition, indexes content from Kafka topics (_such as the flows and executions topics_) to the Elasticsearch repositories. Thanks to the separation between Queue and Repository in the Kafka Architecture, even if your Elasticsearch instance experiences downtime, your executions will continue to work by relying on the Kafka backend.

## Components in detail

The following sections provide more details about the components of the architecture.

::ChildCard
::
