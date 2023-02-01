import { Plugin, PluginType, SegmentEvent } from 'analytics-react-native';

export class Logger extends Plugin {
  type = PluginType.before;

  execute(event: SegmentEvent) {
    if (__DEV__) {
      console.log(event);
    }
    return event;
  }
}
