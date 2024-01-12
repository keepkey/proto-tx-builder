/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface LiquidityAuctionTier {
  address: string;
  tier: Long;
}

function createBaseLiquidityAuctionTier(): LiquidityAuctionTier {
  return { address: "", tier: Long.ZERO };
}

export const LiquidityAuctionTier = {
  encode(message: LiquidityAuctionTier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.tier.isZero()) {
      writer.uint32(16).int64(message.tier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityAuctionTier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityAuctionTier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tier = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityAuctionTier {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tier: isSet(object.tier) ? Long.fromValue(object.tier) : Long.ZERO,
    };
  },

  toJSON(message: LiquidityAuctionTier): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.tier !== undefined && (obj.tier = (message.tier || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<LiquidityAuctionTier>, I>>(base?: I): LiquidityAuctionTier {
    return LiquidityAuctionTier.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityAuctionTier>, I>>(object: I): LiquidityAuctionTier {
    const message = createBaseLiquidityAuctionTier();
    message.address = object.address ?? "";
    message.tier = (object.tier !== undefined && object.tier !== null) ? Long.fromValue(object.tier) : Long.ZERO;
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
