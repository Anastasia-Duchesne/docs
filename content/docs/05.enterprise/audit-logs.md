---
title: Audit logs
icon: /docs/icons/admin.svg
---

Explore how you can use Audit Logs to govern activities in your Kestra instance.

::alert{type="info"}
This feature requires a [commercial license](https://kestra.io/pricing).
::

## What are audit logs

Audit logs record all activities performed in your Kestra instance by users and service accounts. By reviewing audit logs, system administrators can track user activity, and security teams can investigate incidents and ensure compliance with regulatory requirements.

## How to access audit logs

You can access audit logs from the Administration section in the UI. That UI page provides a detailed table of recorded events, capturing the actions taken within the system:

![audit_logs](/docs/concepts/audit_logs.png)

Each row in the table represents a distinct event with several columns providing specific details:

- **Resource Type** column categorizes the resource that the event is associated with, such as editing a flow (FLOW) or executing it (EXECUTION).
- **Type** indicates the nature of the action taken, for example, whether a resource was created, updated, or deleted.
- **User** identifies the user who performed the action. The user can be a human or a service account.
- **Details** section offers an in-depth description of the event, including identifiers such as namespace, flow ID, execution ID, and the revision number.
- **Date** represents the timestamp of when the event occurred.

## Why are audit logs important

The audit log table in Kestra serves as a historical record that developers and system administrators can use to track changes, monitor system usage, and verify system activity. It's a transparency tool that helps in understanding the sequence of activities, ensuring accountability for actions taken, and providing data for troubleshooting and analysis. Given that audit logs are immutable, they can also be used to detect and investigate security incidents. If you leverage Kestra edition with Elasticsearch backend, you can also use Kibana to search and visualize your logs.