---
title: String Filters
icon: /docs/icons/expression.svg
---

String filters are used to manipulate strings i.e. textual data.

Each section below represents a built-in filter.

- [abbreviate](#abbreviate)
- [base64decode](#base64decode)
- [base64encode](#base64encode)
- [capitalize](#capitalize)
- [default](#default)
- [lower](#lower)
- [replace](#replace)
- [sha256](#sha256)
- [slugify](#slugify)
- [substringAfter](#substringafter)
- [substringAfterLast](#substringafterlast)
- [substringBefore](#substringbefore)
- [substringBeforeLast](#substringbeforelast)
- [title](#title)
- [trim](#trim)
- [upper](#upper)
- [urldecode](#urldecode)
- [urlencode](#urlencode)

---

## abbreviate

The `abbreviate` filter will abbreviate a string using an ellipsis. It takes one argument which is the max
width of the desired output including the length of the ellipsis.

```twig
{{ "this is a long sentence." | abbreviate(7) }}
```

The above example will output the following:

```twig
this...
```

**Arguments**
- length

---

## base64decode

The `base64decode` filter takes the given input, base64-decodes it, and returns the byte array converted to UTF-8 string.

Applying the filter on an incorrect base64-encoded string will throw an exception.

```twig
{{ "dGVzdA==" | base64decode }}
```

The above example will output the following:

```
test
```

---

## base64encode

The `base64encode` filter takes the given input, converts it to an UTF-8 String (`.toString()`) and Base64-encodes it.

```twig
{{ "test" | base64encode }}
```

The above example will output the following:
```
dGVzdA==
```

---

## capitalize

The `capitalize` filter will capitalize the first letter _of the string_.
```twig
{{ "article title" | capitalize }}
```

The above example will output the following:

```twig
Article title
```

---

## title

The `title` filter will capitalize the first letter _of each word_.

```twig
{{ "article title" | title }}
```

The above example will output the following:
```twig
Article Title
```

---

## default

The `default` filter will render a default value if and only if the object being filtered is empty.
A variable is empty if it is null, an empty string, an empty collection, or an empty map.

```twig
{{ user.phoneNumber | default("No phone number") }}
```

In the following example, if `foo`, `bar`, or `baz` are null the output will become an empty string which is a perfect use case for the default filter:
```twig
{{ foo.bar.baz | default("No baz") }}
```

Note that the default filter will suppress any `AttributeNotFoundException` exceptions that will usually be thrown.

**Arguments**
- default

---

## lower

The `lower` filter makes an entire string lower case.

```twig
{{ "THIS IS A LOUD SENTENCE" | lower }}
```

The above example will output the following:
```twig
this is a loud sentence
```

---

## replace

The `replace` filter formats a given string by replacing the placeholders (placeholders are free-form) or using regular expression:
```twig
{{ "I like %this% and %that%." | replace({'%this%': foo, '%that%': "bar"}) }}
```

```twig
{{ 'aa1bb2cc3dd4ee5' | replace({'(\d)': '-$1-'}, regexp=true) }}
```

**Arguments**
- `replace_pairs`: an object with key the search string and value the replace string
- `regexp`: use regexp for search and replace pattern (default is `false`)

---

## sha256

The `sha256` filter returns the SHA-256 hash of the given UTF-8 String.

```twig
{{ "test" | sha256 }}
```

The above example will output the following:
```
9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
```

---

## slugify

The `slugify` filter removes non-word characters (alphanumerics and underscores) and converts spaces to hyphen. Also strips leading and trailing whitespace.

```twig
{{ "Joel is a slug" | slugify }}
{# will output 'joel-is-a-slug' #}
```

---

## substringAfter

The `substringAfter` filter returns the  substring before the first occurrence of a separator. The separator is not returned.

```twig
{{ 'a.b.c' | substringAfter('.') }}
{# results in: 'b.c' #}
```

**Arguments**
- `separator`: the string to search for

---

## substringAfterLast

The `substringAfterLast` filter returns the substring after the last occurrence of a separator. The separator is not returned.

```twig
{{ 'a.b.c' | substringAfterLast('.') }}
{# results in: 'c' #}
```

**Arguments**
- `separator`: the string to search for

---

## substringBefore

The `substringBefore` filter returns the  substring before the first occurrence of a separator. The separator is not returned.
```twig
{{ 'a.b.c' | substringBefore('.') }}
{# results in: 'a' #}
```

**Arguments**
- `separator`: the string to search for

---

## substringBeforeLast

The `substringBeforeLast` filter returns the substring before the last occurrence of a separator. The separator is not returned.

```twig
{{ 'a.b.c' | substringBeforeLast('.') }}
{# results in: 'a.b' #}
```

**Arguments**
- `separator`: the string to search for


---

## trim

The `trim` filter is used to trim whitespace off the beginning and end of a string.
```twig
{{ "    This text has too much whitespace.    " | trim }}
```
The above example will output the following:
```twig
This text has too much whitespace.
```

---

## upper

The `upper` filter makes an entire string upper case.

```twig
{{ "this is a quiet sentence." | upper }}
```
The above example will output the following:
```twig
THIS IS A QUIET SENTENCE.
```

---

## urldecode

The `urlencode` translates a string into `application/x-www-form-urlencoded` format using the "UTF-8" encoding scheme.

```twig
{{ "The+string+%C3%BC%40foo-bar" | urldecode }}
```

The above example will output the following:
```twig
The string ü@foo-bar
```

---

## urlencode

The `urlencode` translates a string into `application/x-www-form-urlencoded` format using the "UTF-8" encoding scheme.

```twig
{{ "The string ü@foo-bar" | urlencode }}
```

The above example will output the following:
```twig
The+string+%C3%BC%40foo-bar
```