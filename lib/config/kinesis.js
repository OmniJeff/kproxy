'use strict'

const config = {
  local: {
    prettyPrint: true,
    region: process.env.KINESIS_REGION || 'us-east-1',
    streamName: process.env.KINESIS_STREAM || 'sparrow-ci'
  },
  ci: {
    prettyPrint: false,
    region: process.env.KINESIS_REGION || 'us-east-1',
    streamName: process.env.KINESIS_STREAM || 'sparrow-ci'
  },
  staging: {
    prettyPrint: false,
    region: process.env.KINESIS_REGION || 'us-east-1',
    streamName: process.env.KINESIS_STREAM || 'sparrow-stg'
  },
  prod: {
    prettyPrint: false,
    region: process.env.KINESIS_REGION || 'us-east-1',
    streamName: process.env.KINESIS_STREAM || 'sparrow-prod'
  }
}

module.exports = function resolveConfig (mode) {
  return config[mode || process.env.NODE_ENV || 'local']
}
