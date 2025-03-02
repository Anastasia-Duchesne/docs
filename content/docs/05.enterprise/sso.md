---
title: Single Sign-On (SSO)
icon: /docs/icons/admin.svg
---

Learn how you can enable SSO in your Kestra Enterprise instance.

::alert{type="info"}
This feature requires a [commercial license](https://kestra.io/pricing).
::

Single Sign-On (SSO) is an authentication process that allows users to access multiple applications with one set of login credentials. Kestra supports SSO using the OpenID Connect (OIDC) protocol, which is a simple identity layer built on top of the OAuth 2.0 protocol.

## Configuring Single Sign-On with OpenID Connect (OIDC)

To implement OIDC SSO, you'll need to configure the Micronaut framework that Kestra uses under the hood. Start by enabling OIDC in your `yaml` configuration file as follows:

```yaml
micronaut:
  security:
    oauth2:
      enabled: true
      clients:
        oidc-provider:
          client-id: "{{ clientId }}"
          client-secret: "{{ clientSecret }}"
          openid:
            issuer: "{{ issuerUrl }}"
```

Replace `oidc-provider` with your chosen provider's name, `{{ clientId }}` with your client ID, `{{ clientSecret }}` with your client secret, and `{{ issuerUrl }}` with your issuer URL.

For more configuration details, refer to the [Micronaut OIDC configuration guide](https://micronaut-projects.github.io/micronaut-security/latest/guide/#openid-configuration).

## Using Google as an OIDC SSO Provider

For Google authentication, configure your `yaml` file in the following way:

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
            issuer: 'https://accounts.google.com'
```

## Using Microsoft as an OIDC SSO Provider

To use Microsoft authentication, follow these steps:

```yaml
micronaut:
  security:
    oauth2:
      enabled: true
      clients:
        microsoft:
          client-id: "{{ clientId }}"
          client-secret: "{{ clientSecret }}"
          openid:
            issuer: 'https://login.microsoftonline.com/common/v2.0/'
```

## Using Microsoft Entra ID as an OIDC SSO Provider

### Create an Enterprise Application

1. Visit the [Azure portal](https://portal.azure.com/).
2. Select `Microsoft Entra ID`.
3. Navigate to `App registrations`.
4. Click on `New registration` and provide the necessary details:
- Enter a name for your application.
- Set "Supported account types" (e.g., "Default Directory only - Single tenant").
- Under "Redirect URI", select "Web" and enter `https://{{ url }}/oauth/callback/microsoft` (make sure to use `https` and the actual URL of your webserver).

### Generate Client Secret

1. Go to `Certificates & secrets`.
2. Under `Client secrets`, click on `New client secret`.
3. Copy the generated secret so you can use it in the `{{ clientSecret }}` field in your configuration.

### Kestra Configuration

- Copy the "Application (client) ID" from the `Overview` section into `{{ clientId }}` in your configuration.
- In the `Endpoints` section, find the "OpenID Connect metadata document" URL, remove the `.well-known/openid-configuration` part, and use this as `{{ issuerUrl }}`.

The final URL should look like `https://login.microsoftonline.com/{{ directory }}/v2.0/`.

Here's an example Microsoft OIDC configuration:

```yaml
micronaut:
  security:
    oauth2:
      enabled: true
      clients:
        microsoft:
          client-id: "{{ clientId }}"
          client-secret: "{{ clientSecret }}"
          openid:
            issuer: '{{ issuerUrl }}'
```

With these settings, Kestra is now configured to use OIDC for SSO with your chosen providers. Ensure that all placeholders are replaced with actual values obtained from the provider's configuration process.
