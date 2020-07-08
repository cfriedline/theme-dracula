import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for cfriedline/theme-dracula
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@cfriedline/theme-dracula:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@cfriedline/theme-dracula/index.css';

    manager.register({
      name: 'theme-dracula',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
