/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface MsgForgiveSlash {
  blocks: string;
  nodeAddress: Uint8Array;
  signer: Uint8Array;
}

function createBaseMsgForgiveSlash(): MsgForgiveSlash {
  return { blocks: "", nodeAddress: new Uint8Array(), signer: new Uint8Array() };
}

export const MsgForgiveSlash = {
  encode(message: MsgForgiveSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blocks !== "") {
      writer.uint32(18).string(message.blocks);
    }
    if (message.nodeAddress.length !== 0) {
      writer.uint32(26).bytes(message.nodeAddress);
    }
    if (message.signer.length !== 0) {
      writer.uint32(34).bytes(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgForgiveSlash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForgiveSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.blocks = reader.string();
          break;
        case 3:
          message.nodeAddress = reader.bytes();
          break;
        case 4:
          message.signer = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgForgiveSlash {
    return {
      blocks: isSet(object.blocks) ? String(object.blocks) : "",
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
    };
  },

  toJSON(message: MsgForgiveSlash): unknown {
    const obj: any = {};
    message.blocks !== undefined && (obj.blocks = message.blocks);
    message.nodeAddress !== undefined &&
      (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.signer !== undefined &&
      (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgForgiveSlash>, I>>(base?: I): MsgForgiveSlash {
    return MsgForgiveSlash.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgForgiveSlash>, I>>(object: I): MsgForgiveSlash {
    const message = createBaseMsgForgiveSlash();
    message.blocks = object.blocks ?? "";
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
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
