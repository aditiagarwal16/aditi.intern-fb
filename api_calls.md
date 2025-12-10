
## Why is it useful to create a reusable Axios instance?
A reusable Axios instance keeps all API configuration in one place, such as the base URL, default headers, timeouts, and interceptors. This avoids repeating the same setup across multiple files and helps maintain consistency. When updates are needed, they can be made in one location rather than updating each individual request.

## How does intercepting requests help with authentication?
Request interceptors allow the application to automatically attach an authentication token to every outgoing API request. This avoids manually adding the token each time and reduces the risk of errors or missed authentication. It also centralises logic so access control stays secure and consistent.

## What happens if an API request times out, and how can you handle it?
When an API request times out, Axios throws an error instead of waiting indefinitely. This prevents the UI from getting stuck. Timeouts can be handled by displaying a user-friendly error message, retrying the request, or canceling the call using AbortController. Adding timeouts improves reliability and prevents poor user experience during slow network conditions.
