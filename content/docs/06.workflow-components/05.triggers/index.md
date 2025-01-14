---
title: Triggers & schedule
icon: /docs/icons/components.svg
---

Trigger is a mechanism that automates the execution of a flow. Triggers can be scheduled, event-based or webhook-based.

## Trigger types
Kestra supports both **scheduled** and **external** events.

Kestra core provides three types of triggers:

* [Schedule trigger](./schedule-trigger.md) allows you to execute your flow on a regular cadence e.g. using a CRON expression and custom scheduling conditions
* [Flow trigger](./flow-trigger.md) allows you to execute your flow when another flow finishes its execution (based on a configurable list of states)
* [Webhook trigger](./webhook-trigger.md) allows you to execute your flow based on an HTTP request emitted by a webhook.

Many other triggers are available from the plugins, such as triggers based on file detection events, e.g. the [S3 trigger](https://kestra.io/plugins/plugin-aws/triggers/s3/io.kestra.plugin.aws.s3.trigger), or a new message arrival in a message queue, such as the [SQS](https://kestra.io/plugins/plugin-aws/triggers/sqs/io.kestra.plugin.aws.sqs.trigger) or [Kafka trigger](https://kestra.io/plugins/plugin-kafka/triggers/io.kestra.plugin.kafka.trigger).

### Trigger common properties

Following trigger properties can be set.

| Field | Description                                                         |
| ----- |---------------------------------------------------------------------|
|`id`| The flow identifier, must be unique inside a flow.                  |
|`type`| The Java FQDN of the trigger.                                       |
|`description`| The description of the trigger.                                     |
|`disabled`| Set it to `true` to disable execution of the trigger.               |
|`workerGroup.key`| To execute this trigger on a specific Worker Group (EE) |

---

## Trigger variables

Triggers allow you to access trigger metadata through expressions e.g. `{{ trigger.date }}` to access the current date of the [Schedule trigger](https://kestra.io/plugins/core/triggers/io.kestra.core.models.triggers.types.schedule), `{{ trigger.uri }}` to access the file or message from any file detection or message arrival event, as well as `{{ trigger.rows }}` for all Query triggers e.g. the [PostgreSQL Query](https://kestra.io/plugins/plugin-jdbc-postgres/triggers/io.kestra.plugin.jdbc.postgresql.trigger) trigger.

::alert{type="warning"}
Note that the above-mentioned **templated variables** are only available when the execution is created **automatically** by the trigger. You'll get an error if you try to run a flow containing such variables **manually**.

Also, note that **you don't need an extra task to consume** the file or message from the event. Kestra downloads those automatically to the **internal storage** and makes those available in your flow using `{{ trigger.uri }}` variable. Therefore, you don't need any additional task to e.g. consume a message from the SQS queue or to download a file from S3 when using those event triggers. The trigger already consumes and downloads those, making them directly available for further processing. Check the documentation of a specific trigger and [Blueprints](https://kestra.io/blueprints) with the **Trigger** tag for more details and examples.
::

Triggers restrict parallel execution for a given trigger ID to one active run. For instance, if an Execution from a flow with a `Schedule` trigger with ID `hourly` is still in a `Running` state, another one will not be started. However, you can still trigger the same flow manually (from the UI or API), and the scheduled Executions will not be affected.

```yaml
id: hourlyFlow
namespace: dev
tasks:
  - id: important-task
    type: io.kestra.core.tasks.log.Log
    message: If this runs for longer than 1h, next Executions will be queued rather than being started immediately
triggers:
  - id: hourly
    type: io.kestra.core.models.triggers.types.Schedule
    cron: "@hourly"
```

## Core triggers

The following triggers are included in Kestra core:

* [Schedule](./schedule-trigger.md): to trigger a flow based on a schedule.
* [Flow](./flow-trigger.md): to trigger a flow after another one.
* [Webhook](./webhook-trigger.md): to trigger a flow from an HTTP request.

## Polling triggers

Polling triggers are a type of triggers that are provided by our plugins. They allow polling an external system for the presence of data. In case data are ready to be processed, a flow execution is started.

Kestra provides polling triggers for a wide variety of external systems: databases, message brokers, ftp, ...

Polling triggers will poll the external system at a fixed interval defined by the `interval` property, the triggered flow will have the outputs of the polling trigger available on the `trigger` variable.

For example, the following flow will be triggered when rows are available on the `my_table` PostgreSQL table, and when triggered, it will delete the rows (to avoid processing them again on the next poll) and log them.

```yaml
id: jdbc-trigger
namespace: io.kestra.tests

tasks:
- id: update
  type: io.kestra.plugin.jdbc.postgresql.Query
  sql: DELETE * FROM my_table
- id: log
  type: io.kestra.core.tasks.log.Log
  message: {{trigger.rows}}

triggers:
  - id: watch
    type: io.kestra.plugin.jdbc.postgresql.Trigger
    interval: "PT5M"
    sql: "SELECT * FROM my_table"
```

Polling triggers can be evaluated on a specific Worker Group (EE), thanks to the `workerGroup.key` property.
