/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export interface ForgiveSlashVoter {
  nodeAddress: Uint8Array;
  blockHeight: Long;
  proposedBlockHeight: Long;
  signers: string[];
}

function createBaseForgiveSlashVoter(): ForgiveSlashVoter {
  return { nodeAddress: new Uint8Array(), blockHeight: Long.ZERO, proposedBlockHeight: Long.ZERO, signers: [] };
}

export const ForgiveSlashVoter = {
  encode(message: ForgiveSlashVoter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress.length !== 0) {
      writer.uint32(10).bytes(message.nodeAddress);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).int64(message.blockHeight);
    }
    if (!message.proposedBlockHeight.isZero()) {
      writer.uint32(24).int64(message.proposedBlockHeight);
    }
    for (const v of message.signers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForgiveSlashVoter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForgiveSlashVoter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeAddress = reader.bytes();
          break;
        case 2:
          message.blockHeight = reader.int64() as Long;
          break;
        case 3:
          message.proposedBlockHeight = reader.int64() as Long;
          break;
        case 4:
          message.signers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForgiveSlashVoter {
    return {
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      proposedBlockHeight: isSet(object.proposedBlockHeight) ? Long.fromValue(object.proposedBlockHeight) : Long.ZERO,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ForgiveSlashVoter): unknown {
    const obj: any = {};
    message.nodeAddress !== undefined &&
      (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.proposedBlockHeight !== undefined &&
      (obj.proposedBlockHeight = (message.proposedBlockHeight || Long.ZERO).toString());
    if (message.signers) {
      obj.signers = message.signers.map((e) => e);
    } else {
      obj.signers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ForgiveSlashVoter>, I>>(base?: I): ForgiveSlashVoter {
    return ForgiveSlashVoter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ForgiveSlashVoter>, I>>(object: I): ForgiveSlashVoter {
    const message = createBaseForgiveSlashVoter();
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
    message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
      ? Long.fromValue(object.blockHeight)
      : Long.ZERO;
    message.proposedBlockHeight = (object.proposedBlockHeight !== undefined && object.proposedBlockHeight !== null)
      ? Long.fromValue(object.proposedBlockHeight)
      : Long.ZERO;
    message.signers = object.signers?.map((e) => e) || [];
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
