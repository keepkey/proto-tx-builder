/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface ProtocolOwnedLiquidity {
  cacaoDeposited: string;
  cacaoWithdrawn: string;
}

function createBaseProtocolOwnedLiquidity(): ProtocolOwnedLiquidity {
  return { cacaoDeposited: "", cacaoWithdrawn: "" };
}

export const ProtocolOwnedLiquidity = {
  encode(message: ProtocolOwnedLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cacaoDeposited !== "") {
      writer.uint32(10).string(message.cacaoDeposited);
    }
    if (message.cacaoWithdrawn !== "") {
      writer.uint32(18).string(message.cacaoWithdrawn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolOwnedLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolOwnedLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cacaoDeposited = reader.string();
          break;
        case 2:
          message.cacaoWithdrawn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProtocolOwnedLiquidity {
    return {
      cacaoDeposited: isSet(object.cacaoDeposited) ? String(object.cacaoDeposited) : "",
      cacaoWithdrawn: isSet(object.cacaoWithdrawn) ? String(object.cacaoWithdrawn) : "",
    };
  },

  toJSON(message: ProtocolOwnedLiquidity): unknown {
    const obj: any = {};
    message.cacaoDeposited !== undefined && (obj.cacaoDeposited = message.cacaoDeposited);
    message.cacaoWithdrawn !== undefined && (obj.cacaoWithdrawn = message.cacaoWithdrawn);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtocolOwnedLiquidity>, I>>(base?: I): ProtocolOwnedLiquidity {
    return ProtocolOwnedLiquidity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProtocolOwnedLiquidity>, I>>(object: I): ProtocolOwnedLiquidity {
    const message = createBaseProtocolOwnedLiquidity();
    message.cacaoDeposited = object.cacaoDeposited ?? "";
    message.cacaoWithdrawn = object.cacaoWithdrawn ?? "";
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
