# Backstage Kawx

Scaffolder for Ansible/AWX

## Install

```diff
const backend = createBackend();

backend.add(import('@backstage/plugin-scaffolder-backend/alpha'));

...

+backend.add(import('@kiwigdc/backstage-plugin-scaffolder-backend-module-kawx'))
...

backend.start();

```

## Actions

| Actions | Desc | In | Out |
|---|---|---|---|
| ``ansible:jobTemplate:launch`` | Run an Ansible job and wait for it to complete | ``jobTemplateId`` : The ID of the job template to run | ``job``
