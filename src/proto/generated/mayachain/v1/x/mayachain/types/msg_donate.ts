/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Asset, Tx } from "../../../common/common";

export interface MsgDonate {
  asset?: Asset;
  assetAmount: string;
  cacaoAmount: string;
  tx?: Tx;
  signer: Uint8Array;
}

function createBaseMsgDonate(): MsgDonate {
  return { asset: undefined, assetAmount: "", cacaoAmount: "", tx: undefined, signer: new Uint8Array() };
}

export const MsgDonate = {
  encode(message: MsgDonate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    if (message.assetAmount !== "") {
      writer.uint32(18).string(message.assetAmount);
    }
    if (message.cacaoAmount !== "") {
      writer.uint32(26).string(message.cacaoAmount);
    }
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer.length !== 0) {
      writer.uint32(42).bytes(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDonate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDonate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 2:
          message.assetAmount = reader.string();
          break;
        case 3:
          message.cacaoAmount = reader.string();
          break;
        case 4:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDonate {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      assetAmount: isSet(object.assetAmount) ? String(object.assetAmount) : "",
      cacaoAmount: isSet(object.cacaoAmount) ? String(object.cacaoAmount) : "",
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
    };
  },

  toJSON(message: MsgDonate): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.assetAmount !== undefined && (obj.assetAmount = message.assetAmount);
    message.cacaoAmount !== undefined && (obj.cacaoAmount = message.cacaoAmount);
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.signer !== undefined &&
      (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDonate>, I>>(base?: I): MsgDonate {
    return MsgDonate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDonate>, I>>(object: I): MsgDonate {
    const message = createBaseMsgDonate();
    message.asset = (object.asset !== undefined && object.asset !== null) ? Asset.fromPartial(object.asset) : undefined;
    message.assetAmount = object.assetAmount ?? "";
    message.cacaoAmount = object.cacaoAmount ?? "";
    message.tx = (object.tx !== undefined && object.tx !== null) ? Tx.fromPartial(object.tx) : undefined;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
