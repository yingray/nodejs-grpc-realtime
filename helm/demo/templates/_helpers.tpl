{{- define "virtualService.corsPolicy" -}}
allowOrigin:
  - "*"
allowMethods:
  - POST
  - GET
  - OPTIONS
  - PUT
  - DELETE
allowHeaders:
  - grpc-timeout
  - content-type
  - keep-alive
  - user-agent
  - cache-control
  - content-type
  - content-transfer-encoding
  - custom-header-1
  - x-accept-content-transfer-encoding
  - x-accept-response-streaming
  - x-user-agent
  - x-grpc-web
maxAge: 1728s
exposeHeaders:
  - custom-header-1
  - grpc-status
  - grpc-message
allowCredentials: true
{{- end -}}