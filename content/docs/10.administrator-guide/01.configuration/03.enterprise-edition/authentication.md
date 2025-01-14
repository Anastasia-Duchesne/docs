---
title: Authentication
---

Kestra provides two authentication methods:

- Basic Auth: enabled by default
- OpenID Connect (OIDC)

First, you need to configure the JWT token security. To do that, generate a secret that is at least 256 bits and add it to your kestra configuration as follows:

```yaml
micronaut:
  security:
    token:
      jwt:
        signatures:
          secret:
            generator:
              secret: "your-256-bits-secret"
```

This secret must be the same on all your webserver instances and will be used to encode the JWT cookie.

::alert{type="info"}
**JWT configuration**

It is possible to change the JWT cookie behavior using [Micronaut Cookie Token Reader](https://micronaut-projects.github.io/micronaut-security/latest/guide/#io.micronaut.security.token.jwt.cookie.JwtCookieConfigurationProperties) configuration. For example, you can define the cookie's maximum lifetime as `micronaut.security.token.jwt.cookie.cookie-max-age: P2D`.
::

## Basic Authentification
The default installation comes with no users defined. To create an administrator account invoke the Kestra `auths` command:

```bash
./kestra-ee auths users create --admin --username=<admin-username> --password=<admin-password> --tenant=<tenant-id>
```

If you don't have [multi-tenancy](./multi-tenancy.md) enabled, you can omit the `--tenant` parameter.

## OpenID Connect (OIDC)

To enable OIDC in the application, make sure to enable OIDC in Micronaut:

```yaml
micronaut:
  security:
    oauth2:
      enabled: true
      clients:
        google:
          client-id: "{{ clientId }}"
          client-secret: "{{ clientSecret }}"
          openid:
            issuer: "{{ issuerUrl }}"
```

More information can be found in the [Micronaut OIDC configuration](https://micronaut-projects.github.io/micronaut-security/latest/guide/#openid-configuration).


## Single Sign-On (SSO) with Google, Microsoft, and others

Check the [Single Sign-On documentation](../../../05.enterprise/sso.md) for more details on how to configure SSO with Google, Microsoft, and others.

