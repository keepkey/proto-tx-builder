/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Asset } from "../../../common/common";

export interface MAYANameAlias {
  chain: string;
  address: string;
}

export interface MAYAName {
  name: string;
  expireBlockHeight: Long;
  owner: Uint8Array;
  preferredAsset?: Asset;
  aliases: MAYANameAlias[];
}

function createBaseMAYANameAlias(): MAYANameAlias {
  return { chain: "", address: "" };
}

export const MAYANameAlias = {
  encode(message: MAYANameAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MAYANameAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMAYANameAlias();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MAYANameAlias {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MAYANameAlias): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<MAYANameAlias>, I>>(base?: I): MAYANameAlias {
    return MAYANameAlias.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MAYANameAlias>, I>>(object: I): MAYANameAlias {
    const message = createBaseMAYANameAlias();
    message.chain = object.chain ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMAYAName(): MAYAName {
  return { name: "", expireBlockHeight: Long.ZERO, owner: new Uint8Array(), preferredAsset: undefined, aliases: [] };
}

export const MAYAName = {
  encode(message: MAYAName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.expireBlockHeight.isZero()) {
      writer.uint32(16).int64(message.expireBlockHeight);
    }
    if (message.owner.length !== 0) {
      writer.uint32(26).bytes(message.owner);
    }
    if (message.preferredAsset !== undefined) {
      Asset.encode(message.preferredAsset, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.aliases) {
      MAYANameAlias.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MAYAName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMAYAName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.expireBlockHeight = reader.int64() as Long;
          break;
        case 3:
          message.owner = reader.bytes();
          break;
        case 4:
          message.preferredAsset = Asset.decode(reader, reader.uint32());
          break;
        case 5:
          message.aliases.push(MAYANameAlias.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MAYAName {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      expireBlockHeight: isSet(object.expireBlockHeight) ? Long.fromValue(object.expireBlockHeight) : Long.ZERO,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      preferredAsset: isSet(object.preferredAsset) ? Asset.fromJSON(object.preferredAsset) : undefined,
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => MAYANameAlias.fromJSON(e)) : [],
    };
  },

  toJSON(message: MAYAName): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.expireBlockHeight !== undefined &&
      (obj.expireBlockHeight = (message.expireBlockHeight || Long.ZERO).toString());
    message.owner !== undefined &&
      (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array()));
    message.preferredAsset !== undefined &&
      (obj.preferredAsset = message.preferredAsset ? Asset.toJSON(message.preferredAsset) : undefined);
    if (message.aliases) {
      obj.aliases = message.aliases.map((e) => e ? MAYANameAlias.toJSON(e) : undefined);
    } else {
      obj.aliases = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MAYAName>, I>>(base?: I): MAYAName {
    return MAYAName.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MAYAName>, I>>(object: I): MAYAName {
    const message = createBaseMAYAName();
    message.name = object.name ?? "";
    message.expireBlockHeight = (object.expireBlockHeight !== undefined && object.expireBlockHeight !== null)
      ? Long.fromValue(object.expireBlockHeight)
      : Long.ZERO;
    message.owner = object.owner ?? new Uint8Array();
    message.preferredAsset = (object.preferredAsset !== undefined && object.preferredAsset !== null)
      ? Asset.fromPartial(object.preferredAsset)
      : undefined;
    message.aliases = object.aliases?.map((e) => MAYANameAlias.fromPartial(e)) || [];
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
