import Long from 'long'
import protobuf from 'protobufjs/minimal'

protobuf.util.Long = Long
protobuf.configure()

export * from '../../osmosis-frontend/src/proto/generated/codecimpl'

export * as thorchain_common from './generated/thorchain/v1/common/common'
export * as thorchain from './generated/thorchain/v1/x/thorchain/genesis'
export * as thorchain_types from './generated/thorchain/v1/x/thorchain/types'

export * as arkeo from './generated/arkeo'

export * as mayachain_common from './generated/mayachain/v1/common/common'
export * as mayachain from './generated/mayachain/v1/x/mayachain/genesis'
export * as mayachain_types from './generated/mayachain/v1/x/mayachain/types'