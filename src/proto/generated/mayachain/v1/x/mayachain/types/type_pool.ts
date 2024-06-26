/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Asset } from "../../../common/common";

/**
 * |    State    | Swap | Add   | Withdraw  | Refunding |
 * | ----------- | ---- | ----- | --------- | --------- |
 * | `staged`    | no   | yes   | yes       | Refund Invalid Add/Remove Liquidity && all Swaps |
 * | `available` | yes  | yes   | yes       | Refund Invalid Tx |
 * | `suspended` | no   | no    | no        | Refund all |
 */
export enum PoolStatus {
  UnknownPoolStatus = 0,
  Available = 1,
  Staged = 2,
  Suspended = 4,
  UNRECOGNIZED = -1,
}

export function poolStatusFromJSON(object: any): PoolStatus {
  switch (object) {
    case 0:
    case "UnknownPoolStatus":
      return PoolStatus.UnknownPoolStatus;
    case 1:
    case "Available":
      return PoolStatus.Available;
    case 2:
    case "Staged":
      return PoolStatus.Staged;
    case 4:
    case "Suspended":
      return PoolStatus.Suspended;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolStatus.UNRECOGNIZED;
  }
}

export function poolStatusToJSON(object: PoolStatus): string {
  switch (object) {
    case PoolStatus.UnknownPoolStatus:
      return "UnknownPoolStatus";
    case PoolStatus.Available:
      return "Available";
    case PoolStatus.Staged:
      return "Staged";
    case PoolStatus.Suspended:
      return "Suspended";
    case PoolStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Pool {
  balanceCacao: string;
  balanceAsset: string;
  asset?: Asset;
  LPUnits: string;
  status: PoolStatus;
  statusSince: Long;
  decimals: Long;
  synthUnits: string;
  pendingInboundCacao: string;
  pendingInboundAsset: string;
}

function createBasePool(): Pool {
  return {
    balanceCacao: "",
    balanceAsset: "",
    asset: undefined,
    LPUnits: "",
    status: 0,
    statusSince: Long.ZERO,
    decimals: Long.ZERO,
    synthUnits: "",
    pendingInboundCacao: "",
    pendingInboundAsset: "",
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balanceCacao !== "") {
      writer.uint32(10).string(message.balanceCacao);
    }
    if (message.balanceAsset !== "") {
      writer.uint32(18).string(message.balanceAsset);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.LPUnits !== "") {
      writer.uint32(34).string(message.LPUnits);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (!message.statusSince.isZero()) {
      writer.uint32(80).int64(message.statusSince);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(48).int64(message.decimals);
    }
    if (message.synthUnits !== "") {
      writer.uint32(58).string(message.synthUnits);
    }
    if (message.pendingInboundCacao !== "") {
      writer.uint32(66).string(message.pendingInboundCacao);
    }
    if (message.pendingInboundAsset !== "") {
      writer.uint32(74).string(message.pendingInboundAsset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balanceCacao = reader.string();
          break;
        case 2:
          message.balanceAsset = reader.string();
          break;
        case 3:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 4:
          message.LPUnits = reader.string();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 10:
          message.statusSince = reader.int64() as Long;
          break;
        case 6:
          message.decimals = reader.int64() as Long;
          break;
        case 7:
          message.synthUnits = reader.string();
          break;
        case 8:
          message.pendingInboundCacao = reader.string();
          break;
        case 9:
          message.pendingInboundAsset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      balanceCacao: isSet(object.balanceCacao) ? String(object.balanceCacao) : "",
      balanceAsset: isSet(object.balanceAsset) ? String(object.balanceAsset) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      LPUnits: isSet(object.LPUnits) ? String(object.LPUnits) : "",
      status: isSet(object.status) ? poolStatusFromJSON(object.status) : 0,
      statusSince: isSet(object.statusSince) ? Long.fromValue(object.statusSince) : Long.ZERO,
      decimals: isSet(object.decimals) ? Long.fromValue(object.decimals) : Long.ZERO,
      synthUnits: isSet(object.synthUnits) ? String(object.synthUnits) : "",
      pendingInboundCacao: isSet(object.pendingInboundCacao) ? String(object.pendingInboundCacao) : "",
      pendingInboundAsset: isSet(object.pendingInboundAsset) ? String(object.pendingInboundAsset) : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.balanceCacao !== undefined && (obj.balanceCacao = message.balanceCacao);
    message.balanceAsset !== undefined && (obj.balanceAsset = message.balanceAsset);
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.LPUnits !== undefined && (obj.LPUnits = message.LPUnits);
    message.status !== undefined && (obj.status = poolStatusToJSON(message.status));
    message.statusSince !== undefined && (obj.statusSince = (message.statusSince || Long.ZERO).toString());
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    message.synthUnits !== undefined && (obj.synthUnits = message.synthUnits);
    message.pendingInboundCacao !== undefined && (obj.pendingInboundCacao = message.pendingInboundCacao);
    message.pendingInboundAsset !== undefined && (obj.pendingInboundAsset = message.pendingInboundAsset);
    return obj;
  },

  create<I extends Exact<DeepPartial<Pool>, I>>(base?: I): Pool {
    return Pool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.balanceCacao = object.balanceCacao ?? "";
    message.balanceAsset = object.balanceAsset ?? "";
    message.asset = (object.asset !== undefined && object.asset !== null) ? Asset.fromPartial(object.asset) : undefined;
    message.LPUnits = object.LPUnits ?? "";
    message.status = object.status ?? 0;
    message.statusSince = (object.statusSince !== undefined && object.statusSince !== null)
      ? Long.fromValue(object.statusSince)
      : Long.ZERO;
    message.decimals = (object.decimals !== undefined && object.decimals !== null)
      ? Long.fromValue(object.decimals)
      : Long.ZERO;
    message.synthUnits = object.synthUnits ?? "";
    message.pendingInboundCacao = object.pendingInboundCacao ?? "";
    message.pendingInboundAsset = object.pendingInboundAsset ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
