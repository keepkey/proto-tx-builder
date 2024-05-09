/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Asset } from "../../../common/common";

export interface LiquidityProvider {
  asset?: Asset;
  cacaoAddress: string;
  assetAddress: string;
  lastAddHeight: Long;
  lastWithdrawHeight: Long;
  units: string;
  pendingCacao: string;
  pendingAsset: string;
  pendingTxId: string;
  cacaoDepositValue: string;
  assetDepositValue: string;
  /** @deprecated */
  nodeBondAddress: Uint8Array;
  withdrawCounter: string;
  lastWithdrawCounterHeight: Long;
  bondedNodes: LPBondedNode[];
}

export interface LPBondedNode {
  nodeAddress: Uint8Array;
  units: string;
}

function createBaseLiquidityProvider(): LiquidityProvider {
  return {
    asset: undefined,
    cacaoAddress: "",
    assetAddress: "",
    lastAddHeight: Long.ZERO,
    lastWithdrawHeight: Long.ZERO,
    units: "",
    pendingCacao: "",
    pendingAsset: "",
    pendingTxId: "",
    cacaoDepositValue: "",
    assetDepositValue: "",
    nodeBondAddress: new Uint8Array(),
    withdrawCounter: "",
    lastWithdrawCounterHeight: Long.ZERO,
    bondedNodes: [],
  };
}

export const LiquidityProvider = {
  encode(message: LiquidityProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    if (message.cacaoAddress !== "") {
      writer.uint32(18).string(message.cacaoAddress);
    }
    if (message.assetAddress !== "") {
      writer.uint32(26).string(message.assetAddress);
    }
    if (!message.lastAddHeight.isZero()) {
      writer.uint32(32).int64(message.lastAddHeight);
    }
    if (!message.lastWithdrawHeight.isZero()) {
      writer.uint32(40).int64(message.lastWithdrawHeight);
    }
    if (message.units !== "") {
      writer.uint32(50).string(message.units);
    }
    if (message.pendingCacao !== "") {
      writer.uint32(58).string(message.pendingCacao);
    }
    if (message.pendingAsset !== "") {
      writer.uint32(66).string(message.pendingAsset);
    }
    if (message.pendingTxId !== "") {
      writer.uint32(74).string(message.pendingTxId);
    }
    if (message.cacaoDepositValue !== "") {
      writer.uint32(82).string(message.cacaoDepositValue);
    }
    if (message.assetDepositValue !== "") {
      writer.uint32(90).string(message.assetDepositValue);
    }
    if (message.nodeBondAddress.length !== 0) {
      writer.uint32(98).bytes(message.nodeBondAddress);
    }
    if (message.withdrawCounter !== "") {
      writer.uint32(106).string(message.withdrawCounter);
    }
    if (!message.lastWithdrawCounterHeight.isZero()) {
      writer.uint32(112).int64(message.lastWithdrawCounterHeight);
    }
    for (const v of message.bondedNodes) {
      LPBondedNode.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 2:
          message.cacaoAddress = reader.string();
          break;
        case 3:
          message.assetAddress = reader.string();
          break;
        case 4:
          message.lastAddHeight = reader.int64() as Long;
          break;
        case 5:
          message.lastWithdrawHeight = reader.int64() as Long;
          break;
        case 6:
          message.units = reader.string();
          break;
        case 7:
          message.pendingCacao = reader.string();
          break;
        case 8:
          message.pendingAsset = reader.string();
          break;
        case 9:
          message.pendingTxId = reader.string();
          break;
        case 10:
          message.cacaoDepositValue = reader.string();
          break;
        case 11:
          message.assetDepositValue = reader.string();
          break;
        case 12:
          message.nodeBondAddress = reader.bytes();
          break;
        case 13:
          message.withdrawCounter = reader.string();
          break;
        case 14:
          message.lastWithdrawCounterHeight = reader.int64() as Long;
          break;
        case 15:
          message.bondedNodes.push(LPBondedNode.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProvider {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      cacaoAddress: isSet(object.cacaoAddress) ? String(object.cacaoAddress) : "",
      assetAddress: isSet(object.assetAddress) ? String(object.assetAddress) : "",
      lastAddHeight: isSet(object.lastAddHeight) ? Long.fromValue(object.lastAddHeight) : Long.ZERO,
      lastWithdrawHeight: isSet(object.lastWithdrawHeight) ? Long.fromValue(object.lastWithdrawHeight) : Long.ZERO,
      units: isSet(object.units) ? String(object.units) : "",
      pendingCacao: isSet(object.pendingCacao) ? String(object.pendingCacao) : "",
      pendingAsset: isSet(object.pendingAsset) ? String(object.pendingAsset) : "",
      pendingTxId: isSet(object.pendingTxId) ? String(object.pendingTxId) : "",
      cacaoDepositValue: isSet(object.cacaoDepositValue) ? String(object.cacaoDepositValue) : "",
      assetDepositValue: isSet(object.assetDepositValue) ? String(object.assetDepositValue) : "",
      nodeBondAddress: isSet(object.nodeBondAddress) ? bytesFromBase64(object.nodeBondAddress) : new Uint8Array(),
      withdrawCounter: isSet(object.withdrawCounter) ? String(object.withdrawCounter) : "",
      lastWithdrawCounterHeight: isSet(object.lastWithdrawCounterHeight)
        ? Long.fromValue(object.lastWithdrawCounterHeight)
        : Long.ZERO,
      bondedNodes: Array.isArray(object?.bondedNodes)
        ? object.bondedNodes.map((e: any) => LPBondedNode.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LiquidityProvider): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.cacaoAddress !== undefined && (obj.cacaoAddress = message.cacaoAddress);
    message.assetAddress !== undefined && (obj.assetAddress = message.assetAddress);
    message.lastAddHeight !== undefined && (obj.lastAddHeight = (message.lastAddHeight || Long.ZERO).toString());
    message.lastWithdrawHeight !== undefined &&
      (obj.lastWithdrawHeight = (message.lastWithdrawHeight || Long.ZERO).toString());
    message.units !== undefined && (obj.units = message.units);
    message.pendingCacao !== undefined && (obj.pendingCacao = message.pendingCacao);
    message.pendingAsset !== undefined && (obj.pendingAsset = message.pendingAsset);
    message.pendingTxId !== undefined && (obj.pendingTxId = message.pendingTxId);
    message.cacaoDepositValue !== undefined && (obj.cacaoDepositValue = message.cacaoDepositValue);
    message.assetDepositValue !== undefined && (obj.assetDepositValue = message.assetDepositValue);
    message.nodeBondAddress !== undefined &&
      (obj.nodeBondAddress = base64FromBytes(
        message.nodeBondAddress !== undefined ? message.nodeBondAddress : new Uint8Array(),
      ));
    message.withdrawCounter !== undefined && (obj.withdrawCounter = message.withdrawCounter);
    message.lastWithdrawCounterHeight !== undefined &&
      (obj.lastWithdrawCounterHeight = (message.lastWithdrawCounterHeight || Long.ZERO).toString());
    if (message.bondedNodes) {
      obj.bondedNodes = message.bondedNodes.map((e) => e ? LPBondedNode.toJSON(e) : undefined);
    } else {
      obj.bondedNodes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LiquidityProvider>, I>>(base?: I): LiquidityProvider {
    return LiquidityProvider.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityProvider>, I>>(object: I): LiquidityProvider {
    const message = createBaseLiquidityProvider();
    message.asset = (object.asset !== undefined && object.asset !== null) ? Asset.fromPartial(object.asset) : undefined;
    message.cacaoAddress = object.cacaoAddress ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.lastAddHeight = (object.lastAddHeight !== undefined && object.lastAddHeight !== null)
      ? Long.fromValue(object.lastAddHeight)
      : Long.ZERO;
    message.lastWithdrawHeight = (object.lastWithdrawHeight !== undefined && object.lastWithdrawHeight !== null)
      ? Long.fromValue(object.lastWithdrawHeight)
      : Long.ZERO;
    message.units = object.units ?? "";
    message.pendingCacao = object.pendingCacao ?? "";
    message.pendingAsset = object.pendingAsset ?? "";
    message.pendingTxId = object.pendingTxId ?? "";
    message.cacaoDepositValue = object.cacaoDepositValue ?? "";
    message.assetDepositValue = object.assetDepositValue ?? "";
    message.nodeBondAddress = object.nodeBondAddress ?? new Uint8Array();
    message.withdrawCounter = object.withdrawCounter ?? "";
    message.lastWithdrawCounterHeight =
      (object.lastWithdrawCounterHeight !== undefined && object.lastWithdrawCounterHeight !== null)
        ? Long.fromValue(object.lastWithdrawCounterHeight)
        : Long.ZERO;
    message.bondedNodes = object.bondedNodes?.map((e) => LPBondedNode.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLPBondedNode(): LPBondedNode {
  return { nodeAddress: new Uint8Array(), units: "" };
}

export const LPBondedNode = {
  encode(message: LPBondedNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeAddress.length !== 0) {
      writer.uint32(10).bytes(message.nodeAddress);
    }
    if (message.units !== "") {
      writer.uint32(18).string(message.units);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LPBondedNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLPBondedNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeAddress = reader.bytes();
          break;
        case 2:
          message.units = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LPBondedNode {
    return {
      nodeAddress: isSet(object.nodeAddress) ? bytesFromBase64(object.nodeAddress) : new Uint8Array(),
      units: isSet(object.units) ? String(object.units) : "",
    };
  },

  toJSON(message: LPBondedNode): unknown {
    const obj: any = {};
    message.nodeAddress !== undefined &&
      (obj.nodeAddress = base64FromBytes(message.nodeAddress !== undefined ? message.nodeAddress : new Uint8Array()));
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },

  create<I extends Exact<DeepPartial<LPBondedNode>, I>>(base?: I): LPBondedNode {
    return LPBondedNode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LPBondedNode>, I>>(object: I): LPBondedNode {
    const message = createBaseLPBondedNode();
    message.nodeAddress = object.nodeAddress ?? new Uint8Array();
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
