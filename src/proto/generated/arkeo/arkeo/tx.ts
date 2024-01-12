/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import {
  ContractAuthorization,
  contractAuthorizationFromJSON,
  contractAuthorizationToJSON,
  ContractType,
  contractTypeFromJSON,
  contractTypeToJSON,
  ProviderStatus,
  providerStatusFromJSON,
  providerStatusToJSON,
} from "./keeper";

export interface MsgBondProvider {
  creator: Uint8Array;
  provider: Uint8Array;
  service: string;
  bond: string;
}

export interface MsgBondProviderResponse {
}

export interface MsgModProvider {
  creator: Uint8Array;
  provider: Uint8Array;
  service: string;
  metadataUri: string;
  metadataNonce: Long;
  status: ProviderStatus;
  minContractDuration: Long;
  maxContractDuration: Long;
  subscriptionRate: Coin[];
  payAsYouGoRate: Coin[];
  settlementDuration: Long;
}

export interface MsgModProviderResponse {
}

export interface MsgOpenContract {
  creator: Uint8Array;
  provider: Uint8Array;
  service: string;
  client: Uint8Array;
  delegate: Uint8Array;
  contractType: ContractType;
  duration: Long;
  rate?: Coin;
  deposit: string;
  settlementDuration: Long;
  authorization: ContractAuthorization;
  queriesPerMinute: Long;
}

export interface MsgOpenContractResponse {
}

export interface MsgCloseContract {
  creator: Uint8Array;
  contractId: Long;
}

export interface MsgCloseContractResponse {
}

export interface MsgClaimContractIncome {
  creator: Uint8Array;
  contractId: Long;
  signature: Uint8Array;
  nonce: Long;
}

export interface MsgClaimContractIncomeResponse {
}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSetVersion {
  creator: Uint8Array;
  version: Long;
}

export interface MsgSetVersionResponse {
}

function createBaseMsgBondProvider(): MsgBondProvider {
  return { creator: new Uint8Array(), provider: new Uint8Array(), service: "", bond: "" };
}

export const MsgBondProvider = {
  encode(message: MsgBondProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator.length !== 0) {
      writer.uint32(10).bytes(message.creator);
    }
    if (message.provider.length !== 0) {
      writer.uint32(18).bytes(message.provider);
    }
    if (message.service !== "") {
      writer.uint32(26).string(message.service);
    }
    if (message.bond !== "") {
      writer.uint32(34).string(message.bond);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBondProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.bytes();
          break;
        case 2:
          message.provider = reader.bytes();
          break;
        case 3:
          message.service = reader.string();
          break;
        case 4:
          message.bond = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBondProvider {
    return {
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      provider: isSet(object.provider) ? bytesFromBase64(object.provider) : new Uint8Array(),
      service: isSet(object.service) ? String(object.service) : "",
      bond: isSet(object.bond) ? String(object.bond) : "",
    };
  },

  toJSON(message: MsgBondProvider): unknown {
    const obj: any = {};
    message.creator !== undefined &&
      (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.provider !== undefined &&
      (obj.provider = base64FromBytes(message.provider !== undefined ? message.provider : new Uint8Array()));
    message.service !== undefined && (obj.service = message.service);
    message.bond !== undefined && (obj.bond = message.bond);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBondProvider>, I>>(base?: I): MsgBondProvider {
    return MsgBondProvider.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBondProvider>, I>>(object: I): MsgBondProvider {
    const message = createBaseMsgBondProvider();
    message.creator = object.creator ?? new Uint8Array();
    message.provider = object.provider ?? new Uint8Array();
    message.service = object.service ?? "";
    message.bond = object.bond ?? "";
    return message;
  },
};

function createBaseMsgBondProviderResponse(): MsgBondProviderResponse {
  return {};
}

export const MsgBondProviderResponse = {
  encode(_: MsgBondProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBondProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBondProviderResponse {
    return {};
  },

  toJSON(_: MsgBondProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBondProviderResponse>, I>>(base?: I): MsgBondProviderResponse {
    return MsgBondProviderResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBondProviderResponse>, I>>(_: I): MsgBondProviderResponse {
    const message = createBaseMsgBondProviderResponse();
    return message;
  },
};

function createBaseMsgModProvider(): MsgModProvider {
  return {
    creator: new Uint8Array(),
    provider: new Uint8Array(),
    service: "",
    metadataUri: "",
    metadataNonce: Long.UZERO,
    status: 0,
    minContractDuration: Long.ZERO,
    maxContractDuration: Long.ZERO,
    subscriptionRate: [],
    payAsYouGoRate: [],
    settlementDuration: Long.ZERO,
  };
}

export const MsgModProvider = {
  encode(message: MsgModProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator.length !== 0) {
      writer.uint32(10).bytes(message.creator);
    }
    if (message.provider.length !== 0) {
      writer.uint32(18).bytes(message.provider);
    }
    if (message.service !== "") {
      writer.uint32(26).string(message.service);
    }
    if (message.metadataUri !== "") {
      writer.uint32(34).string(message.metadataUri);
    }
    if (!message.metadataNonce.isZero()) {
      writer.uint32(40).uint64(message.metadataNonce);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (!message.minContractDuration.isZero()) {
      writer.uint32(56).int64(message.minContractDuration);
    }
    if (!message.maxContractDuration.isZero()) {
      writer.uint32(64).int64(message.maxContractDuration);
    }
    for (const v of message.subscriptionRate) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.payAsYouGoRate) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (!message.settlementDuration.isZero()) {
      writer.uint32(88).int64(message.settlementDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.bytes();
          break;
        case 2:
          message.provider = reader.bytes();
          break;
        case 3:
          message.service = reader.string();
          break;
        case 4:
          message.metadataUri = reader.string();
          break;
        case 5:
          message.metadataNonce = reader.uint64() as Long;
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.minContractDuration = reader.int64() as Long;
          break;
        case 8:
          message.maxContractDuration = reader.int64() as Long;
          break;
        case 9:
          message.subscriptionRate.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          message.payAsYouGoRate.push(Coin.decode(reader, reader.uint32()));
          break;
        case 11:
          message.settlementDuration = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgModProvider {
    return {
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      provider: isSet(object.provider) ? bytesFromBase64(object.provider) : new Uint8Array(),
      service: isSet(object.service) ? String(object.service) : "",
      metadataUri: isSet(object.metadataUri) ? String(object.metadataUri) : "",
      metadataNonce: isSet(object.metadataNonce) ? Long.fromValue(object.metadataNonce) : Long.UZERO,
      status: isSet(object.status) ? providerStatusFromJSON(object.status) : 0,
      minContractDuration: isSet(object.minContractDuration) ? Long.fromValue(object.minContractDuration) : Long.ZERO,
      maxContractDuration: isSet(object.maxContractDuration) ? Long.fromValue(object.maxContractDuration) : Long.ZERO,
      subscriptionRate: Array.isArray(object?.subscriptionRate)
        ? object.subscriptionRate.map((e: any) => Coin.fromJSON(e))
        : [],
      payAsYouGoRate: Array.isArray(object?.payAsYouGoRate)
        ? object.payAsYouGoRate.map((e: any) => Coin.fromJSON(e))
        : [],
      settlementDuration: isSet(object.settlementDuration) ? Long.fromValue(object.settlementDuration) : Long.ZERO,
    };
  },

  toJSON(message: MsgModProvider): unknown {
    const obj: any = {};
    message.creator !== undefined &&
      (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.provider !== undefined &&
      (obj.provider = base64FromBytes(message.provider !== undefined ? message.provider : new Uint8Array()));
    message.service !== undefined && (obj.service = message.service);
    message.metadataUri !== undefined && (obj.metadataUri = message.metadataUri);
    message.metadataNonce !== undefined && (obj.metadataNonce = (message.metadataNonce || Long.UZERO).toString());
    message.status !== undefined && (obj.status = providerStatusToJSON(message.status));
    message.minContractDuration !== undefined &&
      (obj.minContractDuration = (message.minContractDuration || Long.ZERO).toString());
    message.maxContractDuration !== undefined &&
      (obj.maxContractDuration = (message.maxContractDuration || Long.ZERO).toString());
    if (message.subscriptionRate) {
      obj.subscriptionRate = message.subscriptionRate.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.subscriptionRate = [];
    }
    if (message.payAsYouGoRate) {
      obj.payAsYouGoRate = message.payAsYouGoRate.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.payAsYouGoRate = [];
    }
    message.settlementDuration !== undefined &&
      (obj.settlementDuration = (message.settlementDuration || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgModProvider>, I>>(base?: I): MsgModProvider {
    return MsgModProvider.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgModProvider>, I>>(object: I): MsgModProvider {
    const message = createBaseMsgModProvider();
    message.creator = object.creator ?? new Uint8Array();
    message.provider = object.provider ?? new Uint8Array();
    message.service = object.service ?? "";
    message.metadataUri = object.metadataUri ?? "";
    message.metadataNonce = (object.metadataNonce !== undefined && object.metadataNonce !== null)
      ? Long.fromValue(object.metadataNonce)
      : Long.UZERO;
    message.status = object.status ?? 0;
    message.minContractDuration = (object.minContractDuration !== undefined && object.minContractDuration !== null)
      ? Long.fromValue(object.minContractDuration)
      : Long.ZERO;
    message.maxContractDuration = (object.maxContractDuration !== undefined && object.maxContractDuration !== null)
      ? Long.fromValue(object.maxContractDuration)
      : Long.ZERO;
    message.subscriptionRate = object.subscriptionRate?.map((e) => Coin.fromPartial(e)) || [];
    message.payAsYouGoRate = object.payAsYouGoRate?.map((e) => Coin.fromPartial(e)) || [];
    message.settlementDuration = (object.settlementDuration !== undefined && object.settlementDuration !== null)
      ? Long.fromValue(object.settlementDuration)
      : Long.ZERO;
    return message;
  },
};

function createBaseMsgModProviderResponse(): MsgModProviderResponse {
  return {};
}

export const MsgModProviderResponse = {
  encode(_: MsgModProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgModProviderResponse {
    return {};
  },

  toJSON(_: MsgModProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgModProviderResponse>, I>>(base?: I): MsgModProviderResponse {
    return MsgModProviderResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgModProviderResponse>, I>>(_: I): MsgModProviderResponse {
    const message = createBaseMsgModProviderResponse();
    return message;
  },
};

function createBaseMsgOpenContract(): MsgOpenContract {
  return {
    creator: new Uint8Array(),
    provider: new Uint8Array(),
    service: "",
    client: new Uint8Array(),
    delegate: new Uint8Array(),
    contractType: 0,
    duration: Long.ZERO,
    rate: undefined,
    deposit: "",
    settlementDuration: Long.ZERO,
    authorization: 0,
    queriesPerMinute: Long.ZERO,
  };
}

export const MsgOpenContract = {
  encode(message: MsgOpenContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator.length !== 0) {
      writer.uint32(10).bytes(message.creator);
    }
    if (message.provider.length !== 0) {
      writer.uint32(18).bytes(message.provider);
    }
    if (message.service !== "") {
      writer.uint32(26).string(message.service);
    }
    if (message.client.length !== 0) {
      writer.uint32(34).bytes(message.client);
    }
    if (message.delegate.length !== 0) {
      writer.uint32(42).bytes(message.delegate);
    }
    if (message.contractType !== 0) {
      writer.uint32(48).int32(message.contractType);
    }
    if (!message.duration.isZero()) {
      writer.uint32(56).int64(message.duration);
    }
    if (message.rate !== undefined) {
      Coin.encode(message.rate, writer.uint32(66).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(74).string(message.deposit);
    }
    if (!message.settlementDuration.isZero()) {
      writer.uint32(80).int64(message.settlementDuration);
    }
    if (message.authorization !== 0) {
      writer.uint32(88).int32(message.authorization);
    }
    if (!message.queriesPerMinute.isZero()) {
      writer.uint32(96).int64(message.queriesPerMinute);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.bytes();
          break;
        case 2:
          message.provider = reader.bytes();
          break;
        case 3:
          message.service = reader.string();
          break;
        case 4:
          message.client = reader.bytes();
          break;
        case 5:
          message.delegate = reader.bytes();
          break;
        case 6:
          message.contractType = reader.int32() as any;
          break;
        case 7:
          message.duration = reader.int64() as Long;
          break;
        case 8:
          message.rate = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.deposit = reader.string();
          break;
        case 10:
          message.settlementDuration = reader.int64() as Long;
          break;
        case 11:
          message.authorization = reader.int32() as any;
          break;
        case 12:
          message.queriesPerMinute = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOpenContract {
    return {
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      provider: isSet(object.provider) ? bytesFromBase64(object.provider) : new Uint8Array(),
      service: isSet(object.service) ? String(object.service) : "",
      client: isSet(object.client) ? bytesFromBase64(object.client) : new Uint8Array(),
      delegate: isSet(object.delegate) ? bytesFromBase64(object.delegate) : new Uint8Array(),
      contractType: isSet(object.contractType) ? contractTypeFromJSON(object.contractType) : 0,
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.ZERO,
      rate: isSet(object.rate) ? Coin.fromJSON(object.rate) : undefined,
      deposit: isSet(object.deposit) ? String(object.deposit) : "",
      settlementDuration: isSet(object.settlementDuration) ? Long.fromValue(object.settlementDuration) : Long.ZERO,
      authorization: isSet(object.authorization) ? contractAuthorizationFromJSON(object.authorization) : 0,
      queriesPerMinute: isSet(object.queriesPerMinute) ? Long.fromValue(object.queriesPerMinute) : Long.ZERO,
    };
  },

  toJSON(message: MsgOpenContract): unknown {
    const obj: any = {};
    message.creator !== undefined &&
      (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.provider !== undefined &&
      (obj.provider = base64FromBytes(message.provider !== undefined ? message.provider : new Uint8Array()));
    message.service !== undefined && (obj.service = message.service);
    message.client !== undefined &&
      (obj.client = base64FromBytes(message.client !== undefined ? message.client : new Uint8Array()));
    message.delegate !== undefined &&
      (obj.delegate = base64FromBytes(message.delegate !== undefined ? message.delegate : new Uint8Array()));
    message.contractType !== undefined && (obj.contractType = contractTypeToJSON(message.contractType));
    message.duration !== undefined && (obj.duration = (message.duration || Long.ZERO).toString());
    message.rate !== undefined && (obj.rate = message.rate ? Coin.toJSON(message.rate) : undefined);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    message.settlementDuration !== undefined &&
      (obj.settlementDuration = (message.settlementDuration || Long.ZERO).toString());
    message.authorization !== undefined && (obj.authorization = contractAuthorizationToJSON(message.authorization));
    message.queriesPerMinute !== undefined &&
      (obj.queriesPerMinute = (message.queriesPerMinute || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgOpenContract>, I>>(base?: I): MsgOpenContract {
    return MsgOpenContract.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenContract>, I>>(object: I): MsgOpenContract {
    const message = createBaseMsgOpenContract();
    message.creator = object.creator ?? new Uint8Array();
    message.provider = object.provider ?? new Uint8Array();
    message.service = object.service ?? "";
    message.client = object.client ?? new Uint8Array();
    message.delegate = object.delegate ?? new Uint8Array();
    message.contractType = object.contractType ?? 0;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Long.fromValue(object.duration)
      : Long.ZERO;
    message.rate = (object.rate !== undefined && object.rate !== null) ? Coin.fromPartial(object.rate) : undefined;
    message.deposit = object.deposit ?? "";
    message.settlementDuration = (object.settlementDuration !== undefined && object.settlementDuration !== null)
      ? Long.fromValue(object.settlementDuration)
      : Long.ZERO;
    message.authorization = object.authorization ?? 0;
    message.queriesPerMinute = (object.queriesPerMinute !== undefined && object.queriesPerMinute !== null)
      ? Long.fromValue(object.queriesPerMinute)
      : Long.ZERO;
    return message;
  },
};

function createBaseMsgOpenContractResponse(): MsgOpenContractResponse {
  return {};
}

export const MsgOpenContractResponse = {
  encode(_: MsgOpenContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOpenContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgOpenContractResponse {
    return {};
  },

  toJSON(_: MsgOpenContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgOpenContractResponse>, I>>(base?: I): MsgOpenContractResponse {
    return MsgOpenContractResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgOpenContractResponse>, I>>(_: I): MsgOpenContractResponse {
    const message = createBaseMsgOpenContractResponse();
    return message;
  },
};

function createBaseMsgCloseContract(): MsgCloseContract {
  return { creator: new Uint8Array(), contractId: Long.UZERO };
}

export const MsgCloseContract = {
  encode(message: MsgCloseContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator.length !== 0) {
      writer.uint32(10).bytes(message.creator);
    }
    if (!message.contractId.isZero()) {
      writer.uint32(16).uint64(message.contractId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.bytes();
          break;
        case 2:
          message.contractId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseContract {
    return {
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      contractId: isSet(object.contractId) ? Long.fromValue(object.contractId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCloseContract): unknown {
    const obj: any = {};
    message.creator !== undefined &&
      (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.contractId !== undefined && (obj.contractId = (message.contractId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCloseContract>, I>>(base?: I): MsgCloseContract {
    return MsgCloseContract.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseContract>, I>>(object: I): MsgCloseContract {
    const message = createBaseMsgCloseContract();
    message.creator = object.creator ?? new Uint8Array();
    message.contractId = (object.contractId !== undefined && object.contractId !== null)
      ? Long.fromValue(object.contractId)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgCloseContractResponse(): MsgCloseContractResponse {
  return {};
}

export const MsgCloseContractResponse = {
  encode(_: MsgCloseContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCloseContractResponse {
    return {};
  },

  toJSON(_: MsgCloseContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCloseContractResponse>, I>>(base?: I): MsgCloseContractResponse {
    return MsgCloseContractResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseContractResponse>, I>>(_: I): MsgCloseContractResponse {
    const message = createBaseMsgCloseContractResponse();
    return message;
  },
};

function createBaseMsgClaimContractIncome(): MsgClaimContractIncome {
  return { creator: new Uint8Array(), contractId: Long.UZERO, signature: new Uint8Array(), nonce: Long.ZERO };
}

export const MsgClaimContractIncome = {
  encode(message: MsgClaimContractIncome, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator.length !== 0) {
      writer.uint32(10).bytes(message.creator);
    }
    if (!message.contractId.isZero()) {
      writer.uint32(16).uint64(message.contractId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(40).int64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimContractIncome {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimContractIncome();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.bytes();
          break;
        case 2:
          message.contractId = reader.uint64() as Long;
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        case 5:
          message.nonce = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimContractIncome {
    return {
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      contractId: isSet(object.contractId) ? Long.fromValue(object.contractId) : Long.UZERO,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.ZERO,
    };
  },

  toJSON(message: MsgClaimContractIncome): unknown {
    const obj: any = {};
    message.creator !== undefined &&
      (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.contractId !== undefined && (obj.contractId = (message.contractId || Long.UZERO).toString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimContractIncome>, I>>(base?: I): MsgClaimContractIncome {
    return MsgClaimContractIncome.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimContractIncome>, I>>(object: I): MsgClaimContractIncome {
    const message = createBaseMsgClaimContractIncome();
    message.creator = object.creator ?? new Uint8Array();
    message.contractId = (object.contractId !== undefined && object.contractId !== null)
      ? Long.fromValue(object.contractId)
      : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.ZERO;
    return message;
  },
};

function createBaseMsgClaimContractIncomeResponse(): MsgClaimContractIncomeResponse {
  return {};
}

export const MsgClaimContractIncomeResponse = {
  encode(_: MsgClaimContractIncomeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimContractIncomeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimContractIncomeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgClaimContractIncomeResponse {
    return {};
  },

  toJSON(_: MsgClaimContractIncomeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaimContractIncomeResponse>, I>>(base?: I): MsgClaimContractIncomeResponse {
    return MsgClaimContractIncomeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimContractIncomeResponse>, I>>(_: I): MsgClaimContractIncomeResponse {
    const message = createBaseMsgClaimContractIncomeResponse();
    return message;
  },
};

function createBaseMsgSetVersion(): MsgSetVersion {
  return { creator: new Uint8Array(), version: Long.ZERO };
}

export const MsgSetVersion = {
  encode(message: MsgSetVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator.length !== 0) {
      writer.uint32(10).bytes(message.creator);
    }
    if (!message.version.isZero()) {
      writer.uint32(16).int64(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.bytes();
          break;
        case 2:
          message.version = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetVersion {
    return {
      creator: isSet(object.creator) ? bytesFromBase64(object.creator) : new Uint8Array(),
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
    };
  },

  toJSON(message: MsgSetVersion): unknown {
    const obj: any = {};
    message.creator !== undefined &&
      (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
    message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetVersion>, I>>(base?: I): MsgSetVersion {
    return MsgSetVersion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetVersion>, I>>(object: I): MsgSetVersion {
    const message = createBaseMsgSetVersion();
    message.creator = object.creator ?? new Uint8Array();
    message.version = (object.version !== undefined && object.version !== null)
      ? Long.fromValue(object.version)
      : Long.ZERO;
    return message;
  },
};

function createBaseMsgSetVersionResponse(): MsgSetVersionResponse {
  return {};
}

export const MsgSetVersionResponse = {
  encode(_: MsgSetVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetVersionResponse {
    return {};
  },

  toJSON(_: MsgSetVersionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetVersionResponse>, I>>(base?: I): MsgSetVersionResponse {
    return MsgSetVersionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetVersionResponse>, I>>(_: I): MsgSetVersionResponse {
    const message = createBaseMsgSetVersionResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BondProvider(request: MsgBondProvider): Promise<MsgBondProviderResponse>;
  ModProvider(request: MsgModProvider): Promise<MsgModProviderResponse>;
  OpenContract(request: MsgOpenContract): Promise<MsgOpenContractResponse>;
  CloseContract(request: MsgCloseContract): Promise<MsgCloseContractResponse>;
  ClaimContractIncome(request: MsgClaimContractIncome): Promise<MsgClaimContractIncomeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetVersion(request: MsgSetVersion): Promise<MsgSetVersionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "arkeo.arkeo.Msg";
    this.rpc = rpc;
    this.BondProvider = this.BondProvider.bind(this);
    this.ModProvider = this.ModProvider.bind(this);
    this.OpenContract = this.OpenContract.bind(this);
    this.CloseContract = this.CloseContract.bind(this);
    this.ClaimContractIncome = this.ClaimContractIncome.bind(this);
    this.SetVersion = this.SetVersion.bind(this);
  }
  BondProvider(request: MsgBondProvider): Promise<MsgBondProviderResponse> {
    const data = MsgBondProvider.encode(request).finish();
    const promise = this.rpc.request(this.service, "BondProvider", data);
    return promise.then((data) => MsgBondProviderResponse.decode(new _m0.Reader(data)));
  }

  ModProvider(request: MsgModProvider): Promise<MsgModProviderResponse> {
    const data = MsgModProvider.encode(request).finish();
    const promise = this.rpc.request(this.service, "ModProvider", data);
    return promise.then((data) => MsgModProviderResponse.decode(new _m0.Reader(data)));
  }

  OpenContract(request: MsgOpenContract): Promise<MsgOpenContractResponse> {
    const data = MsgOpenContract.encode(request).finish();
    const promise = this.rpc.request(this.service, "OpenContract", data);
    return promise.then((data) => MsgOpenContractResponse.decode(new _m0.Reader(data)));
  }

  CloseContract(request: MsgCloseContract): Promise<MsgCloseContractResponse> {
    const data = MsgCloseContract.encode(request).finish();
    const promise = this.rpc.request(this.service, "CloseContract", data);
    return promise.then((data) => MsgCloseContractResponse.decode(new _m0.Reader(data)));
  }

  ClaimContractIncome(request: MsgClaimContractIncome): Promise<MsgClaimContractIncomeResponse> {
    const data = MsgClaimContractIncome.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClaimContractIncome", data);
    return promise.then((data) => MsgClaimContractIncomeResponse.decode(new _m0.Reader(data)));
  }

  SetVersion(request: MsgSetVersion): Promise<MsgSetVersionResponse> {
    const data = MsgSetVersion.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetVersion", data);
    return promise.then((data) => MsgSetVersionResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
