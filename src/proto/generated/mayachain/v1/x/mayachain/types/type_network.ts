/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface Network {
  bondRewardRune: string;
  totalBondUnits: string;
  LPIncomeSplit: Long;
  NodeIncomeSplit: Long;
  outboundGasSpentCacao: Long;
  outboundGasWithheldCacao: Long;
}

function createBaseNetwork(): Network {
  return {
    bondRewardRune: "",
    totalBondUnits: "",
    LPIncomeSplit: Long.ZERO,
    NodeIncomeSplit: Long.ZERO,
    outboundGasSpentCacao: Long.UZERO,
    outboundGasWithheldCacao: Long.UZERO,
  };
}

export const Network = {
  encode(message: Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondRewardRune !== "") {
      writer.uint32(10).string(message.bondRewardRune);
    }
    if (message.totalBondUnits !== "") {
      writer.uint32(18).string(message.totalBondUnits);
    }
    if (!message.LPIncomeSplit.isZero()) {
      writer.uint32(24).int64(message.LPIncomeSplit);
    }
    if (!message.NodeIncomeSplit.isZero()) {
      writer.uint32(32).int64(message.NodeIncomeSplit);
    }
    if (!message.outboundGasSpentCacao.isZero()) {
      writer.uint32(40).uint64(message.outboundGasSpentCacao);
    }
    if (!message.outboundGasWithheldCacao.isZero()) {
      writer.uint32(48).uint64(message.outboundGasWithheldCacao);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Network {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetwork();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondRewardRune = reader.string();
          break;
        case 2:
          message.totalBondUnits = reader.string();
          break;
        case 3:
          message.LPIncomeSplit = reader.int64() as Long;
          break;
        case 4:
          message.NodeIncomeSplit = reader.int64() as Long;
          break;
        case 5:
          message.outboundGasSpentCacao = reader.uint64() as Long;
          break;
        case 6:
          message.outboundGasWithheldCacao = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Network {
    return {
      bondRewardRune: isSet(object.bondRewardRune) ? String(object.bondRewardRune) : "",
      totalBondUnits: isSet(object.totalBondUnits) ? String(object.totalBondUnits) : "",
      LPIncomeSplit: isSet(object.LPIncomeSplit) ? Long.fromValue(object.LPIncomeSplit) : Long.ZERO,
      NodeIncomeSplit: isSet(object.NodeIncomeSplit) ? Long.fromValue(object.NodeIncomeSplit) : Long.ZERO,
      outboundGasSpentCacao: isSet(object.outboundGasSpentCacao)
        ? Long.fromValue(object.outboundGasSpentCacao)
        : Long.UZERO,
      outboundGasWithheldCacao: isSet(object.outboundGasWithheldCacao)
        ? Long.fromValue(object.outboundGasWithheldCacao)
        : Long.UZERO,
    };
  },

  toJSON(message: Network): unknown {
    const obj: any = {};
    message.bondRewardRune !== undefined && (obj.bondRewardRune = message.bondRewardRune);
    message.totalBondUnits !== undefined && (obj.totalBondUnits = message.totalBondUnits);
    message.LPIncomeSplit !== undefined && (obj.LPIncomeSplit = (message.LPIncomeSplit || Long.ZERO).toString());
    message.NodeIncomeSplit !== undefined && (obj.NodeIncomeSplit = (message.NodeIncomeSplit || Long.ZERO).toString());
    message.outboundGasSpentCacao !== undefined &&
      (obj.outboundGasSpentCacao = (message.outboundGasSpentCacao || Long.UZERO).toString());
    message.outboundGasWithheldCacao !== undefined &&
      (obj.outboundGasWithheldCacao = (message.outboundGasWithheldCacao || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Network>, I>>(base?: I): Network {
    return Network.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Network>, I>>(object: I): Network {
    const message = createBaseNetwork();
    message.bondRewardRune = object.bondRewardRune ?? "";
    message.totalBondUnits = object.totalBondUnits ?? "";
    message.LPIncomeSplit = (object.LPIncomeSplit !== undefined && object.LPIncomeSplit !== null)
      ? Long.fromValue(object.LPIncomeSplit)
      : Long.ZERO;
    message.NodeIncomeSplit = (object.NodeIncomeSplit !== undefined && object.NodeIncomeSplit !== null)
      ? Long.fromValue(object.NodeIncomeSplit)
      : Long.ZERO;
    message.outboundGasSpentCacao =
      (object.outboundGasSpentCacao !== undefined && object.outboundGasSpentCacao !== null)
        ? Long.fromValue(object.outboundGasSpentCacao)
        : Long.UZERO;
    message.outboundGasWithheldCacao =
      (object.outboundGasWithheldCacao !== undefined && object.outboundGasWithheldCacao !== null)
        ? Long.fromValue(object.outboundGasWithheldCacao)
        : Long.UZERO;
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
