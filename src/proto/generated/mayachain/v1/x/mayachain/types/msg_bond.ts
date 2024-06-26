/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Asset, Tx } from "../../../common/common";

export interface MsgBond {
  txIn?: Tx;
  nodeAddress: Uint8Array;
  amount: string;
  bondAddress: string;
  signer: Uint8Array;
  bondProviderAddress: Uint8Array;
  operatorFee: Long;
  asset?: Asset;
  units: string;
}

function createBaseMsgBond(): MsgBond {
  return {
    txIn: undefined,
    nodeAddress: new Uint8Array(),
    amount: "",
    bondAddress: "",
    signer: new Uint8Array(),
    bondProviderAddress: new Uint8Array(),
    operatorFee: Long.ZERO,
    asset: undefined,
    units: "",
  };
}

export const MsgBond = {
  encode(message: MsgBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txIn !== undefined) {
      Tx.encode(message.txIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeAddress.length !== 0) {
      writer.uint32(18).bytes(message.nodeAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.bondAddress !== "") {
      writer.uint32(34).string(message.bondAddress);
    }
    if (message.signer.length !== 0) {
      writer.uint32(42).bytes(message.signer);
    }
    if (message.bondProviderAddress.length !== 0) {
      writer.uint32(50).bytes(message.bondProviderAddress);
    }
    if (!message.operatorFee.isZero()) {
      writer.uint32(56).int64(message.operatorFee);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(66).fork()).ldelim();
    }
    if (message.units !== "") {
      writer.uint32(74).string(message.units);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txIn = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.nodeAddress = reader.bytes();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.bondAddress = reader.string();
          break;
        case 5:
          message.signer = reader.bytes();
          break;
        case 6:
          message.bondProviderAddress = reader.bytes();
          break;
        case 7:
          message.operatorFee = reader.int64() as Long;
          break;
        case 8:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 9:
          message.units = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBond {
    return {
      txIn: isSet(object.txIn) ? Tx.fromJSON(object.txIn) : undefined,
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      amount: isSet(object.amount) ? String(object.amount) : "",
      bondAddress: isSet(object.bondAddress) ? String(object.bondAddress) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
      bondProviderAddress: isSet(object.bondProviderAddress)
        ? bytesFromBase64(object.bondProviderAddress)
        : new Uint8Array(),
      operatorFee: isSet(object.operatorFee) ? Long.fromValue(object.operatorFee) : Long.ZERO,
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      units: isSet(object.units) ? String(object.units) : "",
    };
  },

  toJSON(message: MsgBond): unknown {
    const obj: any = {};
    message.txIn !== undefined && (obj.txIn = message.txIn ? Tx.toJSON(message.txIn) : undefined);
    message.nodeAddress !== undefined &&
      (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.amount !== undefined && (obj.amount = message.amount);
    message.bondAddress !== undefined && (obj.bondAddress = message.bondAddress);
    message.signer !== undefined &&
      (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    message.bondProviderAddress !== undefined &&
      (obj.bondProviderAddress = base64FromBytes(
        message.bondProviderAddress !== undefined ? message.bondProviderAddress : new Uint8Array(),
      ));
    message.operatorFee !== undefined && (obj.operatorFee = (message.operatorFee || Long.ZERO).toString());
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBond>, I>>(base?: I): MsgBond {
    return MsgBond.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBond>, I>>(object: I): MsgBond {
    const message = createBaseMsgBond();
    message.txIn = (object.txIn !== undefined && object.txIn !== null) ? Tx.fromPartial(object.txIn) : undefined;
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
    message.amount = object.amount ?? "";
    message.bondAddress = object.bondAddress ?? "";
    message.signer = object.signer ?? new Uint8Array();
    message.bondProviderAddress = object.bondProviderAddress ?? new Uint8Array();
    message.operatorFee = (object.operatorFee !== undefined && object.operatorFee !== null)
      ? Long.fromValue(object.operatorFee)
      : Long.ZERO;
    message.asset = (object.asset !== undefined && object.asset !== null) ? Asset.fromPartial(object.asset) : undefined;
    message.units = object.units ?? "";
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
