import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';

import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';

import {
    createJobTemplateLaunchAction
} from './actions'

export const kawxModule = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'kawx',
  register({ registerInit }) {
    registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
      },
      async init({ scaffolder, config }) {

        scaffolder.addActions(
            createJobTemplateLaunchAction(config)
        );
      },
    });
  },
});