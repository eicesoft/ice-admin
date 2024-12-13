import mitt from 'mitt'
import { head, toArray } from 'lodash'

export function SetupApp(app: any) {
  const _emitter = mitt()

  const utils = {
    $pub: (...args: any[]) => {
      _emitter.emit(head(args), args[1])
    },
    $sub: function () {
      // eslint-disable-next-line prefer-rest-params
      Reflect.apply(_emitter.on, _emitter, toArray(arguments))
    },
    $unsub: function () {
      // eslint-disable-next-line prefer-rest-params
      Reflect.apply(_emitter.off, _emitter, toArray(arguments))
    },
  }

  Object.keys(utils).forEach((key) => {
    app.provide(key, utils[key as keyof typeof utils])

    app.config.globalProperties[key] = utils[key as keyof typeof utils]
  })
}
