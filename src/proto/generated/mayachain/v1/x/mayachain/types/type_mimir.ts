/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface NodeMimir {
  key: string;
  value: Long;
  signer: Uint8Array;
}

export interface NodeMimirs {
  mimirs: NodeMimir[];
}

function createBaseNodeMimir(): NodeMimir {
  return { key: "", value: Long.ZERO, signer: new Uint8Array() };
}

export const NodeMimir = {
  encode(message: NodeMimir, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }
    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeMimir {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeMimir();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int64() as Long;
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

  fromJSON(object: any): NodeMimir {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
    };
  },

  toJSON(message: NodeMimir): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    message.signer !== undefined &&
      (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeMimir>, I>>(base?: I): NodeMimir {
    return NodeMimir.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeMimir>, I>>(object: I): NodeMimir {
    const message = createBaseNodeMimir();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
    message.signer = object.signer ?? new Uint8Array();
    return message;
  },
};

function createBaseNodeMimirs(): NodeMimirs {
  return { mimirs: [] };
}

export const NodeMimirs = {
  encode(message: NodeMimirs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mimirs) {
      NodeMimir.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeMimirs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeMimirs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mimirs.push(NodeMimir.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeMimirs {
    return { mimirs: Array.isArray(object?.mimirs) ? object.mimirs.map((e: any) => NodeMimir.fromJSON(e)) : [] };
  },

  toJSON(message: NodeMimirs): unknown {
    const obj: any = {};
    if (message.mimirs) {
      obj.mimirs = message.mimirs.map((e) => e ? NodeMimir.toJSON(e) : undefined);
    } else {
      obj.mimirs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeMimirs>, I>>(base?: I): NodeMimirs {
    return NodeMimirs.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeMimirs>, I>>(object: I): NodeMimirs {
    const message = createBaseNodeMimirs();
    message.mimirs = object.mimirs?.map((e) => NodeMimir.fromPartial(e)) || [];
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
