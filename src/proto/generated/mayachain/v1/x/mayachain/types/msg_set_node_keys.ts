/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PubKeySet } from "../../../common/common";

export interface MsgSetNodeKeys {
  pubKeySetSet?: PubKeySet;
  validatorConsPubKey: string;
  signer: Uint8Array;
}

function createBaseMsgSetNodeKeys(): MsgSetNodeKeys {
  return { pubKeySetSet: undefined, validatorConsPubKey: "", signer: new Uint8Array() };
}

export const MsgSetNodeKeys = {
  encode(message: MsgSetNodeKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKeySetSet !== undefined) {
      PubKeySet.encode(message.pubKeySetSet, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorConsPubKey !== "") {
      writer.uint32(18).string(message.validatorConsPubKey);
    }
    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNodeKeys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNodeKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeySetSet = PubKeySet.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorConsPubKey = reader.string();
          break;
        case 3:
          message.signer = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetNodeKeys {
    return {
      pubKeySetSet: isSet(object.pubKeySetSet) ? PubKeySet.fromJSON(object.pubKeySetSet) : undefined,
      validatorConsPubKey: isSet(object.validatorConsPubKey) ? String(object.validatorConsPubKey) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
    };
  },

  toJSON(message: MsgSetNodeKeys): unknown {
    const obj: any = {};
    message.pubKeySetSet !== undefined &&
      (obj.pubKeySetSet = message.pubKeySetSet ? PubKeySet.toJSON(message.pubKeySetSet) : undefined);
    message.validatorConsPubKey !== undefined && (obj.validatorConsPubKey = message.validatorConsPubKey);
    message.signer !== undefined &&
      (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetNodeKeys>, I>>(base?: I): MsgSetNodeKeys {
    return MsgSetNodeKeys.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetNodeKeys>, I>>(object: I): MsgSetNodeKeys {
    const message = createBaseMsgSetNodeKeys();
    message.pubKeySetSet = (object.pubKeySetSet !== undefined && object.pubKeySetSet !== null)
      ? PubKeySet.fromPartial(object.pubKeySetSet)
      : undefined;
    message.validatorConsPubKey = object.validatorConsPubKey ?? "";
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
