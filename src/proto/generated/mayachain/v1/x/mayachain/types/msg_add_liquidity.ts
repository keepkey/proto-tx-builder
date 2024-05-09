/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Asset, Tx } from "../../../common/common";

export interface MsgAddLiquidity {
  tx?: Tx;
  asset?: Asset;
  assetAmount: string;
  cacaoAmount: string;
  cacaoAddress: string;
  assetAddress: string;
  affiliateAddress: string;
  affiliateBasisPoints: string;
  signer: Uint8Array;
  liquidityAuctionTier: Long;
}

function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    tx: undefined,
    asset: undefined,
    assetAmount: "",
    cacaoAmount: "",
    cacaoAddress: "",
    assetAddress: "",
    affiliateAddress: "",
    affiliateBasisPoints: "",
    signer: new Uint8Array(),
    liquidityAuctionTier: Long.ZERO,
  };
}

export const MsgAddLiquidity = {
  encode(message: MsgAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    if (message.assetAmount !== "") {
      writer.uint32(26).string(message.assetAmount);
    }
    if (message.cacaoAmount !== "") {
      writer.uint32(34).string(message.cacaoAmount);
    }
    if (message.cacaoAddress !== "") {
      writer.uint32(42).string(message.cacaoAddress);
    }
    if (message.assetAddress !== "") {
      writer.uint32(50).string(message.assetAddress);
    }
    if (message.affiliateAddress !== "") {
      writer.uint32(58).string(message.affiliateAddress);
    }
    if (message.affiliateBasisPoints !== "") {
      writer.uint32(66).string(message.affiliateBasisPoints);
    }
    if (message.signer.length !== 0) {
      writer.uint32(74).bytes(message.signer);
    }
    if (!message.liquidityAuctionTier.isZero()) {
      writer.uint32(80).int64(message.liquidityAuctionTier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 3:
          message.assetAmount = reader.string();
          break;
        case 4:
          message.cacaoAmount = reader.string();
          break;
        case 5:
          message.cacaoAddress = reader.string();
          break;
        case 6:
          message.assetAddress = reader.string();
          break;
        case 7:
          message.affiliateAddress = reader.string();
          break;
        case 8:
          message.affiliateBasisPoints = reader.string();
          break;
        case 9:
          message.signer = reader.bytes();
          break;
        case 10:
          message.liquidityAuctionTier = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      assetAmount: isSet(object.assetAmount) ? String(object.assetAmount) : "",
      cacaoAmount: isSet(object.cacaoAmount) ? String(object.cacaoAmount) : "",
      cacaoAddress: isSet(object.cacaoAddress) ? String(object.cacaoAddress) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : "",
      affiliateAddress: isSet(object.affiliateAddress) ? String(object.affiliateAddress) : "",
      affiliateBasisPoints: isSet(object.affiliateBasisPoints) ? String(object.affiliateBasisPoints) : "",
      signer: isSet(object.signer) ? bytesFromBase64(object.signer) : new Uint8Array(),
      liquidityAuctionTier: isSet(object.liquidityAuctionTier)
        ? Long.fromValue(object.liquidityAuctionTier)
        : Long.ZERO,
    };
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.assetAmount !== undefined && (obj.assetAmount = message.assetAmount);
    message.cacaoAmount !== undefined && (obj.cacaoAmount = message.cacaoAmount);
    message.cacaoAddress !== undefined && (obj.cacaoAddress = message.cacaoAddress);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    message.affiliateAddress !== undefined && (obj.affiliateAddress = message.affiliateAddress);
    message.affiliateBasisPoints !== undefined && (obj.affiliateBasisPoints = message.affiliateBasisPoints);
    message.signer !== undefined &&
      (obj.signer = base64FromBytes(message.signer !== undefined ? message.signer : new Uint8Array()));
    message.liquidityAuctionTier !== undefined &&
      (obj.liquidityAuctionTier = (message.liquidityAuctionTier || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddLiquidity>, I>>(base?: I): MsgAddLiquidity {
    return MsgAddLiquidity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddLiquidity>, I>>(object: I): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.tx = (object.tx !== undefined && object.tx !== null) ? Tx.fromPartial(object.tx) : undefined;
    message.asset = (object.asset !== undefined && object.asset !== null) ? Asset.fromPartial(object.asset) : undefined;
    message.assetAmount = object.assetAmount ?? "";
    message.cacaoAmount = object.cacaoAmount ?? "";
    message.cacaoAddress = object.cacaoAddress ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.affiliateAddress = object.affiliateAddress ?? "";
    message.affiliateBasisPoints = object.affiliateBasisPoints ?? "";
    message.signer = object.signer ?? new Uint8Array();
    message.liquidityAuctionTier = (object.liquidityAuctionTier !== undefined && object.liquidityAuctionTier !== null)
      ? Long.fromValue(object.liquidityAuctionTier)
      : Long.ZERO;
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
