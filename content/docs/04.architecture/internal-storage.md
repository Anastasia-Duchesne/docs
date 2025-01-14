---
title: Internal Storage
icon: /docs/icons/architecture.svg
---

Internal Storage is a dedicated storage area to store your private data passed as inputs to a flow or generated as a result of a flow execution.

## The purpose of Internal Storage
Kestra uses an **Internal Storage** to handle incoming and outgoing filesin a scalable way. It stores files generated during a flow execution and used to pass data between tasks.

By default, only the local storage is available. It uses a directory inside the host filesystem, so it is not scalable and not designed for production usage.

More implementations are available as plugins.

You can replace the local storage with one of the following storage implementations:
- [Storage Minio](https://github.com/kestra-io/storage-minio) for [Minio](https://min.io/), which is compatible with [AWS S3](https://aws.amazon.com/s3/) and all other *S3 Like* storage.
- [Storage GCS](https://github.com/kestra-io/storage-gcs) for [Google Cloud Storage](https://cloud.google.com/storage).
- [Storage Azure](https://github.com/kestra-io/storage-azure) for [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/).

Kesta's internal storage allows storing arbitrary-sized files inside a dedicated storage area.

If an output attribute is stored inside the internal storage, it will be retrievable from a variable named `{{ outputs.task_id.output_attribute }}`. Kestra will automatically fetch the file when the variable is used.

Inputs of type `FILE` will be automatically stored inside the internal storage.

On the **Outputs** tab of an execution, if an output attribute is from the internal storage, there will be a link to download it.
