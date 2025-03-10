import {
  require_node_https
} from "./chunk-NZBS7PEL.js";
import {
  require_crypto,
  require_module,
  require_tty
} from "./chunk-D2JNHHRZ.js";
import {
  require_url
} from "./chunk-B4SZPV2X.js";
import {
  require_assert
} from "./chunk-AZ2C43EV.js";
import {
  require_events,
  require_node_os,
  require_stream
} from "./chunk-KMV6YPAS.js";
import {
  require_os,
  require_util
} from "./chunk-T6KVENVM.js";
import {
  require_fs
} from "./chunk-DSSBNF36.js";
import {
  require_native,
  require_node_fs,
  require_node_path,
  require_node_perf_hooks,
  require_node_process,
  require_promises
} from "./chunk-SOJ4NE2K.js";
import {
  require_path
} from "./chunk-J62RM5ZT.js";
import {
  require_node_http
} from "./chunk-LDD3FHUZ.js";
import {
  __commonJS,
  __publicField,
  __require,
  __toESM
} from "./chunk-2TUXWMP5.js";

// browser-external:node:module
var require_node_module = __commonJS({
  "browser-external:node:module"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:module" has been externalized for browser compatibility. Cannot access "node:module.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:url
var require_node_url = __commonJS({
  "browser-external:node:url"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:url" has been externalized for browser compatibility. Cannot access "node:url.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:util
var require_node_util = __commonJS({
  "browser-external:node:util"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:util" has been externalized for browser compatibility. Cannot access "node:util.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:crypto
var require_node_crypto = __commonJS({
  "browser-external:node:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:crypto" has been externalized for browser compatibility. Cannot access "node:crypto.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:child_process
var require_child_process = __commonJS({
  "browser-external:child_process"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "child_process" has been externalized for browser compatibility. Cannot access "child_process.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:worker_threads
var require_worker_threads = __commonJS({
  "browser-external:worker_threads"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "worker_threads" has been externalized for browser compatibility. Cannot access "worker_threads.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/esbuild/lib/main.js
var require_main = __commonJS({
  "node_modules/esbuild/lib/main.js"(exports, module) {
    "use strict";
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var node_exports = {};
    __export(node_exports, {
      analyzeMetafile: () => analyzeMetafile,
      analyzeMetafileSync: () => analyzeMetafileSync,
      build: () => build,
      buildSync: () => buildSync,
      context: () => context,
      default: () => node_default,
      formatMessages: () => formatMessages2,
      formatMessagesSync: () => formatMessagesSync,
      initialize: () => initialize,
      stop: () => stop,
      transform: () => transform2,
      transformSync: () => transformSync,
      version: () => version3
    });
    module.exports = __toCommonJS(node_exports);
    function encodePacket(packet) {
      let visit = (value2) => {
        if (value2 === null) {
          bb.write8(0);
        } else if (typeof value2 === "boolean") {
          bb.write8(1);
          bb.write8(+value2);
        } else if (typeof value2 === "number") {
          bb.write8(2);
          bb.write32(value2 | 0);
        } else if (typeof value2 === "string") {
          bb.write8(3);
          bb.write(encodeUTF8(value2));
        } else if (value2 instanceof Uint8Array) {
          bb.write8(4);
          bb.write(value2);
        } else if (value2 instanceof Array) {
          bb.write8(5);
          bb.write32(value2.length);
          for (let item of value2) {
            visit(item);
          }
        } else {
          let keys = Object.keys(value2);
          bb.write8(6);
          bb.write32(keys.length);
          for (let key of keys) {
            bb.write(encodeUTF8(key));
            visit(value2[key]);
          }
        }
      };
      let bb = new ByteBuffer();
      bb.write32(0);
      bb.write32(packet.id << 1 | +!packet.isRequest);
      visit(packet.value);
      writeUInt32LE(bb.buf, bb.len - 4, 0);
      return bb.buf.subarray(0, bb.len);
    }
    function decodePacket(bytes) {
      let visit = () => {
        switch (bb.read8()) {
          case 0:
            return null;
          case 1:
            return !!bb.read8();
          case 2:
            return bb.read32();
          case 3:
            return decodeUTF8(bb.read());
          case 4:
            return bb.read();
          case 5: {
            let count = bb.read32();
            let value22 = [];
            for (let i = 0; i < count; i++) {
              value22.push(visit());
            }
            return value22;
          }
          case 6: {
            let count = bb.read32();
            let value22 = {};
            for (let i = 0; i < count; i++) {
              value22[decodeUTF8(bb.read())] = visit();
            }
            return value22;
          }
          default:
            throw new Error("Invalid packet");
        }
      };
      let bb = new ByteBuffer(bytes);
      let id = bb.read32();
      let isRequest = (id & 1) === 0;
      id >>>= 1;
      let value2 = visit();
      if (bb.ptr !== bytes.length) {
        throw new Error("Invalid packet");
      }
      return { id, isRequest, value: value2 };
    }
    var ByteBuffer = class {
      constructor(buf = new Uint8Array(1024)) {
        this.buf = buf;
        this.len = 0;
        this.ptr = 0;
      }
      _write(delta) {
        if (this.len + delta > this.buf.length) {
          let clone = new Uint8Array((this.len + delta) * 2);
          clone.set(this.buf);
          this.buf = clone;
        }
        this.len += delta;
        return this.len - delta;
      }
      write8(value2) {
        let offset = this._write(1);
        this.buf[offset] = value2;
      }
      write32(value2) {
        let offset = this._write(4);
        writeUInt32LE(this.buf, value2, offset);
      }
      write(bytes) {
        let offset = this._write(4 + bytes.length);
        writeUInt32LE(this.buf, bytes.length, offset);
        this.buf.set(bytes, offset + 4);
      }
      _read(delta) {
        if (this.ptr + delta > this.buf.length) {
          throw new Error("Invalid packet");
        }
        this.ptr += delta;
        return this.ptr - delta;
      }
      read8() {
        return this.buf[this._read(1)];
      }
      read32() {
        return readUInt32LE(this.buf, this._read(4));
      }
      read() {
        let length = this.read32();
        let bytes = new Uint8Array(length);
        let ptr = this._read(bytes.length);
        bytes.set(this.buf.subarray(ptr, ptr + length));
        return bytes;
      }
    };
    var encodeUTF8;
    var decodeUTF8;
    var encodeInvariant;
    if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
      let encoder = new TextEncoder();
      let decoder2 = new TextDecoder();
      encodeUTF8 = (text) => encoder.encode(text);
      decodeUTF8 = (bytes) => decoder2.decode(bytes);
      encodeInvariant = 'new TextEncoder().encode("")';
    } else if (typeof Buffer !== "undefined") {
      encodeUTF8 = (text) => Buffer.from(text);
      decodeUTF8 = (bytes) => {
        let { buffer, byteOffset, byteLength } = bytes;
        return Buffer.from(buffer, byteOffset, byteLength).toString();
      };
      encodeInvariant = 'Buffer.from("")';
    } else {
      throw new Error("No UTF-8 codec found");
    }
    if (!(encodeUTF8("") instanceof Uint8Array))
      throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
    function readUInt32LE(buffer, offset) {
      return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
    }
    function writeUInt32LE(buffer, value2, offset) {
      buffer[offset++] = value2;
      buffer[offset++] = value2 >> 8;
      buffer[offset++] = value2 >> 16;
      buffer[offset++] = value2 >> 24;
    }
    var quote3 = JSON.stringify;
    var buildLogLevelDefault = "warning";
    var transformLogLevelDefault = "silent";
    function validateTarget(target) {
      validateStringValue(target, "target");
      if (target.indexOf(",") >= 0) throw new Error(`Invalid target: ${target}`);
      return target;
    }
    var canBeAnything = () => null;
    var mustBeBoolean = (value2) => typeof value2 === "boolean" ? null : "a boolean";
    var mustBeString = (value2) => typeof value2 === "string" ? null : "a string";
    var mustBeRegExp = (value2) => value2 instanceof RegExp ? null : "a RegExp object";
    var mustBeInteger = (value2) => typeof value2 === "number" && value2 === (value2 | 0) ? null : "an integer";
    var mustBeValidPortNumber = (value2) => typeof value2 === "number" && value2 === (value2 | 0) && value2 >= 0 && value2 <= 65535 ? null : "a valid port number";
    var mustBeFunction = (value2) => typeof value2 === "function" ? null : "a function";
    var mustBeArray = (value2) => Array.isArray(value2) ? null : "an array";
    var mustBeObject = (value2) => typeof value2 === "object" && value2 !== null && !Array.isArray(value2) ? null : "an object";
    var mustBeEntryPoints = (value2) => typeof value2 === "object" && value2 !== null ? null : "an array or an object";
    var mustBeWebAssemblyModule = (value2) => value2 instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
    var mustBeObjectOrNull = (value2) => typeof value2 === "object" && !Array.isArray(value2) ? null : "an object or null";
    var mustBeStringOrBoolean = (value2) => typeof value2 === "string" || typeof value2 === "boolean" ? null : "a string or a boolean";
    var mustBeStringOrObject = (value2) => typeof value2 === "string" || typeof value2 === "object" && value2 !== null && !Array.isArray(value2) ? null : "a string or an object";
    var mustBeStringOrArray = (value2) => typeof value2 === "string" || Array.isArray(value2) ? null : "a string or an array";
    var mustBeStringOrUint8Array = (value2) => typeof value2 === "string" || value2 instanceof Uint8Array ? null : "a string or a Uint8Array";
    var mustBeStringOrURL = (value2) => typeof value2 === "string" || value2 instanceof URL ? null : "a string or a URL";
    function getFlag(object, keys, key, mustBeFn) {
      let value2 = object[key];
      keys[key + ""] = true;
      if (value2 === void 0) return void 0;
      let mustBe = mustBeFn(value2);
      if (mustBe !== null) throw new Error(`${quote3(key)} must be ${mustBe}`);
      return value2;
    }
    function checkForInvalidFlags(object, keys, where) {
      for (let key in object) {
        if (!(key in keys)) {
          throw new Error(`Invalid option ${where}: ${quote3(key)}`);
        }
      }
    }
    function validateInitializeOptions(options2) {
      let keys = /* @__PURE__ */ Object.create(null);
      let wasmURL = getFlag(options2, keys, "wasmURL", mustBeStringOrURL);
      let wasmModule = getFlag(options2, keys, "wasmModule", mustBeWebAssemblyModule);
      let worker = getFlag(options2, keys, "worker", mustBeBoolean);
      checkForInvalidFlags(options2, keys, "in initialize() call");
      return {
        wasmURL,
        wasmModule,
        worker
      };
    }
    function validateMangleCache(mangleCache) {
      let validated;
      if (mangleCache !== void 0) {
        validated = /* @__PURE__ */ Object.create(null);
        for (let key in mangleCache) {
          let value2 = mangleCache[key];
          if (typeof value2 === "string" || value2 === false) {
            validated[key] = value2;
          } else {
            throw new Error(`Expected ${quote3(key)} in mangle cache to map to either a string or false`);
          }
        }
      }
      return validated;
    }
    function pushLogFlags(flags, options2, keys, isTTY2, logLevelDefault) {
      let color = getFlag(options2, keys, "color", mustBeBoolean);
      let logLevel = getFlag(options2, keys, "logLevel", mustBeString);
      let logLimit = getFlag(options2, keys, "logLimit", mustBeInteger);
      if (color !== void 0) flags.push(`--color=${color}`);
      else if (isTTY2) flags.push(`--color=true`);
      flags.push(`--log-level=${logLevel || logLevelDefault}`);
      flags.push(`--log-limit=${logLimit || 0}`);
    }
    function validateStringValue(value2, what, key) {
      if (typeof value2 !== "string") {
        throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote3(key) : ""} to be a string, got ${typeof value2} instead`);
      }
      return value2;
    }
    function pushCommonFlags(flags, options2, keys) {
      let legalComments = getFlag(options2, keys, "legalComments", mustBeString);
      let sourceRoot = getFlag(options2, keys, "sourceRoot", mustBeString);
      let sourcesContent = getFlag(options2, keys, "sourcesContent", mustBeBoolean);
      let target = getFlag(options2, keys, "target", mustBeStringOrArray);
      let format2 = getFlag(options2, keys, "format", mustBeString);
      let globalName = getFlag(options2, keys, "globalName", mustBeString);
      let mangleProps = getFlag(options2, keys, "mangleProps", mustBeRegExp);
      let reserveProps = getFlag(options2, keys, "reserveProps", mustBeRegExp);
      let mangleQuoted = getFlag(options2, keys, "mangleQuoted", mustBeBoolean);
      let minify = getFlag(options2, keys, "minify", mustBeBoolean);
      let minifySyntax = getFlag(options2, keys, "minifySyntax", mustBeBoolean);
      let minifyWhitespace = getFlag(options2, keys, "minifyWhitespace", mustBeBoolean);
      let minifyIdentifiers = getFlag(options2, keys, "minifyIdentifiers", mustBeBoolean);
      let lineLimit = getFlag(options2, keys, "lineLimit", mustBeInteger);
      let drop = getFlag(options2, keys, "drop", mustBeArray);
      let dropLabels = getFlag(options2, keys, "dropLabels", mustBeArray);
      let charset = getFlag(options2, keys, "charset", mustBeString);
      let treeShaking = getFlag(options2, keys, "treeShaking", mustBeBoolean);
      let ignoreAnnotations = getFlag(options2, keys, "ignoreAnnotations", mustBeBoolean);
      let jsx = getFlag(options2, keys, "jsx", mustBeString);
      let jsxFactory = getFlag(options2, keys, "jsxFactory", mustBeString);
      let jsxFragment = getFlag(options2, keys, "jsxFragment", mustBeString);
      let jsxImportSource = getFlag(options2, keys, "jsxImportSource", mustBeString);
      let jsxDev = getFlag(options2, keys, "jsxDev", mustBeBoolean);
      let jsxSideEffects = getFlag(options2, keys, "jsxSideEffects", mustBeBoolean);
      let define = getFlag(options2, keys, "define", mustBeObject);
      let logOverride = getFlag(options2, keys, "logOverride", mustBeObject);
      let supported = getFlag(options2, keys, "supported", mustBeObject);
      let pure = getFlag(options2, keys, "pure", mustBeArray);
      let keepNames = getFlag(options2, keys, "keepNames", mustBeBoolean);
      let platform2 = getFlag(options2, keys, "platform", mustBeString);
      let tsconfigRaw = getFlag(options2, keys, "tsconfigRaw", mustBeStringOrObject);
      if (legalComments) flags.push(`--legal-comments=${legalComments}`);
      if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
      if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
      if (target) {
        if (Array.isArray(target)) flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
        else flags.push(`--target=${validateTarget(target)}`);
      }
      if (format2) flags.push(`--format=${format2}`);
      if (globalName) flags.push(`--global-name=${globalName}`);
      if (platform2) flags.push(`--platform=${platform2}`);
      if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
      if (minify) flags.push("--minify");
      if (minifySyntax) flags.push("--minify-syntax");
      if (minifyWhitespace) flags.push("--minify-whitespace");
      if (minifyIdentifiers) flags.push("--minify-identifiers");
      if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
      if (charset) flags.push(`--charset=${charset}`);
      if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
      if (ignoreAnnotations) flags.push(`--ignore-annotations`);
      if (drop) for (let what of drop) flags.push(`--drop:${validateStringValue(what, "drop")}`);
      if (dropLabels) flags.push(`--drop-labels=${Array.from(dropLabels).map((what) => validateStringValue(what, "dropLabels")).join(",")}`);
      if (mangleProps) flags.push(`--mangle-props=${mangleProps.source}`);
      if (reserveProps) flags.push(`--reserve-props=${reserveProps.source}`);
      if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
      if (jsx) flags.push(`--jsx=${jsx}`);
      if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
      if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
      if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
      if (jsxDev) flags.push(`--jsx-dev`);
      if (jsxSideEffects) flags.push(`--jsx-side-effects`);
      if (define) {
        for (let key in define) {
          if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
          flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
        }
      }
      if (logOverride) {
        for (let key in logOverride) {
          if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
          flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
        }
      }
      if (supported) {
        for (let key in supported) {
          if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
          const value2 = supported[key];
          if (typeof value2 !== "boolean") throw new Error(`Expected value for supported ${quote3(key)} to be a boolean, got ${typeof value2} instead`);
          flags.push(`--supported:${key}=${value2}`);
        }
      }
      if (pure) for (let fn of pure) flags.push(`--pure:${validateStringValue(fn, "pure")}`);
      if (keepNames) flags.push(`--keep-names`);
    }
    function flagsForBuildOptions(callName, options2, isTTY2, logLevelDefault, writeDefault) {
      var _a22;
      let flags = [];
      let entries = [];
      let keys = /* @__PURE__ */ Object.create(null);
      let stdinContents = null;
      let stdinResolveDir = null;
      pushLogFlags(flags, options2, keys, isTTY2, logLevelDefault);
      pushCommonFlags(flags, options2, keys);
      let sourcemap = getFlag(options2, keys, "sourcemap", mustBeStringOrBoolean);
      let bundle = getFlag(options2, keys, "bundle", mustBeBoolean);
      let splitting = getFlag(options2, keys, "splitting", mustBeBoolean);
      let preserveSymlinks = getFlag(options2, keys, "preserveSymlinks", mustBeBoolean);
      let metafile = getFlag(options2, keys, "metafile", mustBeBoolean);
      let outfile = getFlag(options2, keys, "outfile", mustBeString);
      let outdir = getFlag(options2, keys, "outdir", mustBeString);
      let outbase = getFlag(options2, keys, "outbase", mustBeString);
      let tsconfig = getFlag(options2, keys, "tsconfig", mustBeString);
      let resolveExtensions = getFlag(options2, keys, "resolveExtensions", mustBeArray);
      let nodePathsInput = getFlag(options2, keys, "nodePaths", mustBeArray);
      let mainFields = getFlag(options2, keys, "mainFields", mustBeArray);
      let conditions = getFlag(options2, keys, "conditions", mustBeArray);
      let external = getFlag(options2, keys, "external", mustBeArray);
      let packages = getFlag(options2, keys, "packages", mustBeString);
      let alias = getFlag(options2, keys, "alias", mustBeObject);
      let loader2 = getFlag(options2, keys, "loader", mustBeObject);
      let outExtension = getFlag(options2, keys, "outExtension", mustBeObject);
      let publicPath = getFlag(options2, keys, "publicPath", mustBeString);
      let entryNames = getFlag(options2, keys, "entryNames", mustBeString);
      let chunkNames = getFlag(options2, keys, "chunkNames", mustBeString);
      let assetNames = getFlag(options2, keys, "assetNames", mustBeString);
      let inject = getFlag(options2, keys, "inject", mustBeArray);
      let banner = getFlag(options2, keys, "banner", mustBeObject);
      let footer = getFlag(options2, keys, "footer", mustBeObject);
      let entryPoints = getFlag(options2, keys, "entryPoints", mustBeEntryPoints);
      let absWorkingDir = getFlag(options2, keys, "absWorkingDir", mustBeString);
      let stdin = getFlag(options2, keys, "stdin", mustBeObject);
      let write = (_a22 = getFlag(options2, keys, "write", mustBeBoolean)) != null ? _a22 : writeDefault;
      let allowOverwrite = getFlag(options2, keys, "allowOverwrite", mustBeBoolean);
      let mangleCache = getFlag(options2, keys, "mangleCache", mustBeObject);
      keys.plugins = true;
      checkForInvalidFlags(options2, keys, `in ${callName}() call`);
      if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
      if (bundle) flags.push("--bundle");
      if (allowOverwrite) flags.push("--allow-overwrite");
      if (splitting) flags.push("--splitting");
      if (preserveSymlinks) flags.push("--preserve-symlinks");
      if (metafile) flags.push(`--metafile`);
      if (outfile) flags.push(`--outfile=${outfile}`);
      if (outdir) flags.push(`--outdir=${outdir}`);
      if (outbase) flags.push(`--outbase=${outbase}`);
      if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
      if (packages) flags.push(`--packages=${packages}`);
      if (resolveExtensions) {
        let values = [];
        for (let value2 of resolveExtensions) {
          validateStringValue(value2, "resolve extension");
          if (value2.indexOf(",") >= 0) throw new Error(`Invalid resolve extension: ${value2}`);
          values.push(value2);
        }
        flags.push(`--resolve-extensions=${values.join(",")}`);
      }
      if (publicPath) flags.push(`--public-path=${publicPath}`);
      if (entryNames) flags.push(`--entry-names=${entryNames}`);
      if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
      if (assetNames) flags.push(`--asset-names=${assetNames}`);
      if (mainFields) {
        let values = [];
        for (let value2 of mainFields) {
          validateStringValue(value2, "main field");
          if (value2.indexOf(",") >= 0) throw new Error(`Invalid main field: ${value2}`);
          values.push(value2);
        }
        flags.push(`--main-fields=${values.join(",")}`);
      }
      if (conditions) {
        let values = [];
        for (let value2 of conditions) {
          validateStringValue(value2, "condition");
          if (value2.indexOf(",") >= 0) throw new Error(`Invalid condition: ${value2}`);
          values.push(value2);
        }
        flags.push(`--conditions=${values.join(",")}`);
      }
      if (external) for (let name of external) flags.push(`--external:${validateStringValue(name, "external")}`);
      if (alias) {
        for (let old in alias) {
          if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
          flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
        }
      }
      if (banner) {
        for (let type in banner) {
          if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
          flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
        }
      }
      if (footer) {
        for (let type in footer) {
          if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
          flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
        }
      }
      if (inject) for (let path32 of inject) flags.push(`--inject:${validateStringValue(path32, "inject")}`);
      if (loader2) {
        for (let ext in loader2) {
          if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
          flags.push(`--loader:${ext}=${validateStringValue(loader2[ext], "loader", ext)}`);
        }
      }
      if (outExtension) {
        for (let ext in outExtension) {
          if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
          flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
        }
      }
      if (entryPoints) {
        if (Array.isArray(entryPoints)) {
          for (let i = 0, n = entryPoints.length; i < n; i++) {
            let entryPoint = entryPoints[i];
            if (typeof entryPoint === "object" && entryPoint !== null) {
              let entryPointKeys = /* @__PURE__ */ Object.create(null);
              let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
              let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
              checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
              if (input === void 0) throw new Error('Missing property "in" for entry point at index ' + i);
              if (output === void 0) throw new Error('Missing property "out" for entry point at index ' + i);
              entries.push([output, input]);
            } else {
              entries.push(["", validateStringValue(entryPoint, "entry point at index " + i)]);
            }
          }
        } else {
          for (let key in entryPoints) {
            entries.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
          }
        }
      }
      if (stdin) {
        let stdinKeys = /* @__PURE__ */ Object.create(null);
        let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
        let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
        let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
        let loader22 = getFlag(stdin, stdinKeys, "loader", mustBeString);
        checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
        if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
        if (loader22) flags.push(`--loader=${loader22}`);
        if (resolveDir) stdinResolveDir = resolveDir;
        if (typeof contents === "string") stdinContents = encodeUTF8(contents);
        else if (contents instanceof Uint8Array) stdinContents = contents;
      }
      let nodePaths = [];
      if (nodePathsInput) {
        for (let value2 of nodePathsInput) {
          value2 += "";
          nodePaths.push(value2);
        }
      }
      return {
        entries,
        flags,
        write,
        stdinContents,
        stdinResolveDir,
        absWorkingDir,
        nodePaths,
        mangleCache: validateMangleCache(mangleCache)
      };
    }
    function flagsForTransformOptions(callName, options2, isTTY2, logLevelDefault) {
      let flags = [];
      let keys = /* @__PURE__ */ Object.create(null);
      pushLogFlags(flags, options2, keys, isTTY2, logLevelDefault);
      pushCommonFlags(flags, options2, keys);
      let sourcemap = getFlag(options2, keys, "sourcemap", mustBeStringOrBoolean);
      let sourcefile = getFlag(options2, keys, "sourcefile", mustBeString);
      let loader2 = getFlag(options2, keys, "loader", mustBeString);
      let banner = getFlag(options2, keys, "banner", mustBeString);
      let footer = getFlag(options2, keys, "footer", mustBeString);
      let mangleCache = getFlag(options2, keys, "mangleCache", mustBeObject);
      checkForInvalidFlags(options2, keys, `in ${callName}() call`);
      if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
      if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
      if (loader2) flags.push(`--loader=${loader2}`);
      if (banner) flags.push(`--banner=${banner}`);
      if (footer) flags.push(`--footer=${footer}`);
      return {
        flags,
        mangleCache: validateMangleCache(mangleCache)
      };
    }
    function createChannel(streamIn) {
      const requestCallbacksByKey = {};
      const closeData = { didClose: false, reason: "" };
      let responseCallbacks = {};
      let nextRequestID = 0;
      let nextBuildKey = 0;
      let stdout = new Uint8Array(16 * 1024);
      let stdoutUsed = 0;
      let readFromStdout = (chunk) => {
        let limit = stdoutUsed + chunk.length;
        if (limit > stdout.length) {
          let swap = new Uint8Array(limit * 2);
          swap.set(stdout);
          stdout = swap;
        }
        stdout.set(chunk, stdoutUsed);
        stdoutUsed += chunk.length;
        let offset = 0;
        while (offset + 4 <= stdoutUsed) {
          let length = readUInt32LE(stdout, offset);
          if (offset + 4 + length > stdoutUsed) {
            break;
          }
          offset += 4;
          handleIncomingPacket(stdout.subarray(offset, offset + length));
          offset += length;
        }
        if (offset > 0) {
          stdout.copyWithin(0, offset, stdoutUsed);
          stdoutUsed -= offset;
        }
      };
      let afterClose = (error) => {
        closeData.didClose = true;
        if (error) closeData.reason = ": " + (error.message || error);
        const text = "The service was stopped" + closeData.reason;
        for (let id in responseCallbacks) {
          responseCallbacks[id](text, null);
        }
        responseCallbacks = {};
      };
      let sendRequest = (refs, value2, callback2) => {
        if (closeData.didClose) return callback2("The service is no longer running" + closeData.reason, null);
        let id = nextRequestID++;
        responseCallbacks[id] = (error, response) => {
          try {
            callback2(error, response);
          } finally {
            if (refs) refs.unref();
          }
        };
        if (refs) refs.ref();
        streamIn.writeToStdin(encodePacket({ id, isRequest: true, value: value2 }));
      };
      let sendResponse = (id, value2) => {
        if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
        streamIn.writeToStdin(encodePacket({ id, isRequest: false, value: value2 }));
      };
      let handleRequest = async (id, request) => {
        try {
          if (request.command === "ping") {
            sendResponse(id, {});
            return;
          }
          if (typeof request.key === "number") {
            const requestCallbacks = requestCallbacksByKey[request.key];
            if (!requestCallbacks) {
              return;
            }
            const callback2 = requestCallbacks[request.command];
            if (callback2) {
              await callback2(id, request);
              return;
            }
          }
          throw new Error(`Invalid command: ` + request.command);
        } catch (e) {
          const errors = [extractErrorMessageV8(e, streamIn, null, void 0, "")];
          try {
            sendResponse(id, { errors });
          } catch {
          }
        }
      };
      let isFirstPacket = true;
      let handleIncomingPacket = (bytes) => {
        if (isFirstPacket) {
          isFirstPacket = false;
          let binaryVersion = String.fromCharCode(...bytes);
          if (binaryVersion !== "0.25.0") {
            throw new Error(`Cannot start service: Host version "${"0.25.0"}" does not match binary version ${quote3(binaryVersion)}`);
          }
          return;
        }
        let packet = decodePacket(bytes);
        if (packet.isRequest) {
          handleRequest(packet.id, packet.value);
        } else {
          let callback2 = responseCallbacks[packet.id];
          delete responseCallbacks[packet.id];
          if (packet.value.error) callback2(packet.value.error, {});
          else callback2(null, packet.value);
        }
      };
      let buildOrContext = ({ callName, refs, options: options2, isTTY: isTTY2, defaultWD: defaultWD2, callback: callback2 }) => {
        let refCount = 0;
        const buildKey = nextBuildKey++;
        const requestCallbacks = {};
        const buildRefs = {
          ref() {
            if (++refCount === 1) {
              if (refs) refs.ref();
            }
          },
          unref() {
            if (--refCount === 0) {
              delete requestCallbacksByKey[buildKey];
              if (refs) refs.unref();
            }
          }
        };
        requestCallbacksByKey[buildKey] = requestCallbacks;
        buildRefs.ref();
        buildOrContextImpl(
          callName,
          buildKey,
          sendRequest,
          sendResponse,
          buildRefs,
          streamIn,
          requestCallbacks,
          options2,
          isTTY2,
          defaultWD2,
          (err, res) => {
            try {
              callback2(err, res);
            } finally {
              buildRefs.unref();
            }
          }
        );
      };
      let transform22 = ({ callName, refs, input, options: options2, isTTY: isTTY2, fs: fs3, callback: callback2 }) => {
        const details = createObjectStash();
        let start = (inputPath) => {
          try {
            if (typeof input !== "string" && !(input instanceof Uint8Array))
              throw new Error('The input to "transform" must be a string or a Uint8Array');
            let {
              flags,
              mangleCache
            } = flagsForTransformOptions(callName, options2, isTTY2, transformLogLevelDefault);
            let request = {
              command: "transform",
              flags,
              inputFS: inputPath !== null,
              input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
            };
            if (mangleCache) request.mangleCache = mangleCache;
            sendRequest(refs, request, (error, response) => {
              if (error) return callback2(new Error(error), null);
              let errors = replaceDetailsInMessages(response.errors, details);
              let warnings = replaceDetailsInMessages(response.warnings, details);
              let outstanding = 1;
              let next = () => {
                if (--outstanding === 0) {
                  let result = {
                    warnings,
                    code: response.code,
                    map: response.map,
                    mangleCache: void 0,
                    legalComments: void 0
                  };
                  if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
                  if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
                  callback2(null, result);
                }
              };
              if (errors.length > 0) return callback2(failureErrorWithLog("Transform failed", errors, warnings), null);
              if (response.codeFS) {
                outstanding++;
                fs3.readFile(response.code, (err, contents) => {
                  if (err !== null) {
                    callback2(err, null);
                  } else {
                    response.code = contents;
                    next();
                  }
                });
              }
              if (response.mapFS) {
                outstanding++;
                fs3.readFile(response.map, (err, contents) => {
                  if (err !== null) {
                    callback2(err, null);
                  } else {
                    response.map = contents;
                    next();
                  }
                });
              }
              next();
            });
          } catch (e) {
            let flags = [];
            try {
              pushLogFlags(flags, options2, {}, isTTY2, transformLogLevelDefault);
            } catch {
            }
            const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
            sendRequest(refs, { command: "error", flags, error }, () => {
              error.detail = details.load(error.detail);
              callback2(failureErrorWithLog("Transform failed", [error], []), null);
            });
          }
        };
        if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
          let next = start;
          start = () => fs3.writeFile(input, next);
        }
        start(null);
      };
      let formatMessages22 = ({ callName, refs, messages: messages2, options: options2, callback: callback2 }) => {
        if (!options2) throw new Error(`Missing second argument in ${callName}() call`);
        let keys = {};
        let kind = getFlag(options2, keys, "kind", mustBeString);
        let color = getFlag(options2, keys, "color", mustBeBoolean);
        let terminalWidth = getFlag(options2, keys, "terminalWidth", mustBeInteger);
        checkForInvalidFlags(options2, keys, `in ${callName}() call`);
        if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
        if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
        let request = {
          command: "format-msgs",
          messages: sanitizeMessages(messages2, "messages", null, "", terminalWidth),
          isWarning: kind === "warning"
        };
        if (color !== void 0) request.color = color;
        if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
        sendRequest(refs, request, (error, response) => {
          if (error) return callback2(new Error(error), null);
          callback2(null, response.messages);
        });
      };
      let analyzeMetafile2 = ({ callName, refs, metafile, options: options2, callback: callback2 }) => {
        if (options2 === void 0) options2 = {};
        let keys = {};
        let color = getFlag(options2, keys, "color", mustBeBoolean);
        let verbose = getFlag(options2, keys, "verbose", mustBeBoolean);
        checkForInvalidFlags(options2, keys, `in ${callName}() call`);
        let request = {
          command: "analyze-metafile",
          metafile
        };
        if (color !== void 0) request.color = color;
        if (verbose !== void 0) request.verbose = verbose;
        sendRequest(refs, request, (error, response) => {
          if (error) return callback2(new Error(error), null);
          callback2(null, response.result);
        });
      };
      return {
        readFromStdout,
        afterClose,
        service: {
          buildOrContext,
          transform: transform22,
          formatMessages: formatMessages22,
          analyzeMetafile: analyzeMetafile2
        }
      };
    }
    function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options2, isTTY2, defaultWD2, callback2) {
      const details = createObjectStash();
      const isContext = callName === "context";
      const handleError = (e, pluginName) => {
        const flags = [];
        try {
          pushLogFlags(flags, options2, {}, isTTY2, buildLogLevelDefault);
        } catch {
        }
        const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
        sendRequest(refs, { command: "error", flags, error: message }, () => {
          message.detail = details.load(message.detail);
          callback2(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [message], []), null);
        });
      };
      let plugins2;
      if (typeof options2 === "object") {
        const value2 = options2.plugins;
        if (value2 !== void 0) {
          if (!Array.isArray(value2)) return handleError(new Error(`"plugins" must be an array`), "");
          plugins2 = value2;
        }
      }
      if (plugins2 && plugins2.length > 0) {
        if (streamIn.isSync) return handleError(new Error("Cannot use plugins in synchronous API calls"), "");
        handlePlugins(
          buildKey,
          sendRequest,
          sendResponse,
          refs,
          streamIn,
          requestCallbacks,
          options2,
          plugins2,
          details
        ).then(
          (result) => {
            if (!result.ok) return handleError(result.error, result.pluginName);
            try {
              buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
            } catch (e) {
              handleError(e, "");
            }
          },
          (e) => handleError(e, "")
        );
        return;
      }
      try {
        buildOrContextContinue(null, (result, done) => done([], []), () => {
        });
      } catch (e) {
        handleError(e, "");
      }
      function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
        const writeDefault = streamIn.hasFS;
        const {
          entries,
          flags,
          write,
          stdinContents,
          stdinResolveDir,
          absWorkingDir,
          nodePaths,
          mangleCache
        } = flagsForBuildOptions(callName, options2, isTTY2, buildLogLevelDefault, writeDefault);
        if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
        const request = {
          command: "build",
          key: buildKey,
          entries,
          flags,
          write,
          stdinContents,
          stdinResolveDir,
          absWorkingDir: absWorkingDir || defaultWD2,
          nodePaths,
          context: isContext
        };
        if (requestPlugins) request.plugins = requestPlugins;
        if (mangleCache) request.mangleCache = mangleCache;
        const buildResponseToResult = (response, callback22) => {
          const result = {
            errors: replaceDetailsInMessages(response.errors, details),
            warnings: replaceDetailsInMessages(response.warnings, details),
            outputFiles: void 0,
            metafile: void 0,
            mangleCache: void 0
          };
          const originalErrors = result.errors.slice();
          const originalWarnings = result.warnings.slice();
          if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
          if (response.metafile) result.metafile = JSON.parse(response.metafile);
          if (response.mangleCache) result.mangleCache = response.mangleCache;
          if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
          runOnEndCallbacks(result, (onEndErrors, onEndWarnings) => {
            if (originalErrors.length > 0 || onEndErrors.length > 0) {
              const error = failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings));
              return callback22(error, null, onEndErrors, onEndWarnings);
            }
            callback22(null, result, onEndErrors, onEndWarnings);
          });
        };
        let latestResultPromise;
        let provideLatestResult;
        if (isContext)
          requestCallbacks["on-end"] = (id, request2) => new Promise((resolve3) => {
            buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings) => {
              const response = {
                errors: onEndErrors,
                warnings: onEndWarnings
              };
              if (provideLatestResult) provideLatestResult(err, result);
              latestResultPromise = void 0;
              provideLatestResult = void 0;
              sendResponse(id, response);
              resolve3();
            });
          });
        sendRequest(refs, request, (error, response) => {
          if (error) return callback2(new Error(error), null);
          if (!isContext) {
            return buildResponseToResult(response, (err, res) => {
              scheduleOnDisposeCallbacks();
              return callback2(err, res);
            });
          }
          if (response.errors.length > 0) {
            return callback2(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
          }
          let didDispose = false;
          const result = {
            rebuild: () => {
              if (!latestResultPromise) latestResultPromise = new Promise((resolve3, reject) => {
                let settlePromise;
                provideLatestResult = (err, result2) => {
                  if (!settlePromise) settlePromise = () => err ? reject(err) : resolve3(result2);
                };
                const triggerAnotherBuild = () => {
                  const request2 = {
                    command: "rebuild",
                    key: buildKey
                  };
                  sendRequest(refs, request2, (error2, response2) => {
                    if (error2) {
                      reject(new Error(error2));
                    } else if (settlePromise) {
                      settlePromise();
                    } else {
                      triggerAnotherBuild();
                    }
                  });
                };
                triggerAnotherBuild();
              });
              return latestResultPromise;
            },
            watch: (options22 = {}) => new Promise((resolve3, reject) => {
              if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
              const keys = {};
              checkForInvalidFlags(options22, keys, `in watch() call`);
              const request2 = {
                command: "watch",
                key: buildKey
              };
              sendRequest(refs, request2, (error2) => {
                if (error2) reject(new Error(error2));
                else resolve3(void 0);
              });
            }),
            serve: (options22 = {}) => new Promise((resolve3, reject) => {
              if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
              const keys = {};
              const port = getFlag(options22, keys, "port", mustBeValidPortNumber);
              const host = getFlag(options22, keys, "host", mustBeString);
              const servedir = getFlag(options22, keys, "servedir", mustBeString);
              const keyfile = getFlag(options22, keys, "keyfile", mustBeString);
              const certfile = getFlag(options22, keys, "certfile", mustBeString);
              const fallback = getFlag(options22, keys, "fallback", mustBeString);
              const onRequest = getFlag(options22, keys, "onRequest", mustBeFunction);
              checkForInvalidFlags(options22, keys, `in serve() call`);
              const request2 = {
                command: "serve",
                key: buildKey,
                onRequest: !!onRequest
              };
              if (port !== void 0) request2.port = port;
              if (host !== void 0) request2.host = host;
              if (servedir !== void 0) request2.servedir = servedir;
              if (keyfile !== void 0) request2.keyfile = keyfile;
              if (certfile !== void 0) request2.certfile = certfile;
              if (fallback !== void 0) request2.fallback = fallback;
              sendRequest(refs, request2, (error2, response2) => {
                if (error2) return reject(new Error(error2));
                if (onRequest) {
                  requestCallbacks["serve-request"] = (id, request3) => {
                    onRequest(request3.args);
                    sendResponse(id, {});
                  };
                }
                resolve3(response2);
              });
            }),
            cancel: () => new Promise((resolve3) => {
              if (didDispose) return resolve3();
              const request2 = {
                command: "cancel",
                key: buildKey
              };
              sendRequest(refs, request2, () => {
                resolve3();
              });
            }),
            dispose: () => new Promise((resolve3) => {
              if (didDispose) return resolve3();
              didDispose = true;
              const request2 = {
                command: "dispose",
                key: buildKey
              };
              sendRequest(refs, request2, () => {
                resolve3();
                scheduleOnDisposeCallbacks();
                refs.unref();
              });
            })
          };
          refs.ref();
          callback2(null, result);
        });
      }
    }
    var handlePlugins = async (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins2, details) => {
      let onStartCallbacks = [];
      let onEndCallbacks = [];
      let onResolveCallbacks = {};
      let onLoadCallbacks = {};
      let onDisposeCallbacks = [];
      let nextCallbackID = 0;
      let i = 0;
      let requestPlugins = [];
      let isSetupDone = false;
      plugins2 = [...plugins2];
      for (let item of plugins2) {
        let keys = {};
        if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
        const name = getFlag(item, keys, "name", mustBeString);
        if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
        try {
          let setup = getFlag(item, keys, "setup", mustBeFunction);
          if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
          checkForInvalidFlags(item, keys, `on plugin ${quote3(name)}`);
          let plugin = {
            name,
            onStart: false,
            onEnd: false,
            onResolve: [],
            onLoad: []
          };
          i++;
          let resolve3 = (path32, options2 = {}) => {
            if (!isSetupDone) throw new Error('Cannot call "resolve" before plugin setup has completed');
            if (typeof path32 !== "string") throw new Error(`The path to resolve must be a string`);
            let keys2 = /* @__PURE__ */ Object.create(null);
            let pluginName = getFlag(options2, keys2, "pluginName", mustBeString);
            let importer = getFlag(options2, keys2, "importer", mustBeString);
            let namespace = getFlag(options2, keys2, "namespace", mustBeString);
            let resolveDir = getFlag(options2, keys2, "resolveDir", mustBeString);
            let kind = getFlag(options2, keys2, "kind", mustBeString);
            let pluginData = getFlag(options2, keys2, "pluginData", canBeAnything);
            let importAttributes = getFlag(options2, keys2, "with", mustBeObject);
            checkForInvalidFlags(options2, keys2, "in resolve() call");
            return new Promise((resolve22, reject) => {
              const request = {
                command: "resolve",
                path: path32,
                key: buildKey,
                pluginName: name
              };
              if (pluginName != null) request.pluginName = pluginName;
              if (importer != null) request.importer = importer;
              if (namespace != null) request.namespace = namespace;
              if (resolveDir != null) request.resolveDir = resolveDir;
              if (kind != null) request.kind = kind;
              else throw new Error(`Must specify "kind" when calling "resolve"`);
              if (pluginData != null) request.pluginData = details.store(pluginData);
              if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
              sendRequest(refs, request, (error, response) => {
                if (error !== null) reject(new Error(error));
                else resolve22({
                  errors: replaceDetailsInMessages(response.errors, details),
                  warnings: replaceDetailsInMessages(response.warnings, details),
                  path: response.path,
                  external: response.external,
                  sideEffects: response.sideEffects,
                  namespace: response.namespace,
                  suffix: response.suffix,
                  pluginData: details.load(response.pluginData)
                });
              });
            });
          };
          let promise2 = setup({
            initialOptions,
            resolve: resolve3,
            onStart(callback2) {
              let registeredText = `This error came from the "onStart" callback registered here:`;
              let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
              onStartCallbacks.push({ name, callback: callback2, note: registeredNote });
              plugin.onStart = true;
            },
            onEnd(callback2) {
              let registeredText = `This error came from the "onEnd" callback registered here:`;
              let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
              onEndCallbacks.push({ name, callback: callback2, note: registeredNote });
              plugin.onEnd = true;
            },
            onResolve(options2, callback2) {
              let registeredText = `This error came from the "onResolve" callback registered here:`;
              let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
              let keys2 = {};
              let filter2 = getFlag(options2, keys2, "filter", mustBeRegExp);
              let namespace = getFlag(options2, keys2, "namespace", mustBeString);
              checkForInvalidFlags(options2, keys2, `in onResolve() call for plugin ${quote3(name)}`);
              if (filter2 == null) throw new Error(`onResolve() call is missing a filter`);
              let id = nextCallbackID++;
              onResolveCallbacks[id] = { name, callback: callback2, note: registeredNote };
              plugin.onResolve.push({ id, filter: filter2.source, namespace: namespace || "" });
            },
            onLoad(options2, callback2) {
              let registeredText = `This error came from the "onLoad" callback registered here:`;
              let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
              let keys2 = {};
              let filter2 = getFlag(options2, keys2, "filter", mustBeRegExp);
              let namespace = getFlag(options2, keys2, "namespace", mustBeString);
              checkForInvalidFlags(options2, keys2, `in onLoad() call for plugin ${quote3(name)}`);
              if (filter2 == null) throw new Error(`onLoad() call is missing a filter`);
              let id = nextCallbackID++;
              onLoadCallbacks[id] = { name, callback: callback2, note: registeredNote };
              plugin.onLoad.push({ id, filter: filter2.source, namespace: namespace || "" });
            },
            onDispose(callback2) {
              onDisposeCallbacks.push(callback2);
            },
            esbuild: streamIn.esbuild
          });
          if (promise2) await promise2;
          requestPlugins.push(plugin);
        } catch (e) {
          return { ok: false, error: e, pluginName: name };
        }
      }
      requestCallbacks["on-start"] = async (id, request) => {
        details.clear();
        let response = { errors: [], warnings: [] };
        await Promise.all(onStartCallbacks.map(async ({ name, callback: callback2, note }) => {
          try {
            let result = await callback2();
            if (result != null) {
              if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote3(name)} to return an object`);
              let keys = {};
              let errors = getFlag(result, keys, "errors", mustBeArray);
              let warnings = getFlag(result, keys, "warnings", mustBeArray);
              checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote3(name)}`);
              if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
              if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
            }
          } catch (e) {
            response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
          }
        }));
        sendResponse(id, response);
      };
      requestCallbacks["on-resolve"] = async (id, request) => {
        let response = {}, name = "", callback2, note;
        for (let id2 of request.ids) {
          try {
            ({ name, callback: callback2, note } = onResolveCallbacks[id2]);
            let result = await callback2({
              path: request.path,
              importer: request.importer,
              namespace: request.namespace,
              resolveDir: request.resolveDir,
              kind: request.kind,
              pluginData: details.load(request.pluginData),
              with: request.with
            });
            if (result != null) {
              if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote3(name)} to return an object`);
              let keys = {};
              let pluginName = getFlag(result, keys, "pluginName", mustBeString);
              let path32 = getFlag(result, keys, "path", mustBeString);
              let namespace = getFlag(result, keys, "namespace", mustBeString);
              let suffix = getFlag(result, keys, "suffix", mustBeString);
              let external = getFlag(result, keys, "external", mustBeBoolean);
              let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
              let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
              let errors = getFlag(result, keys, "errors", mustBeArray);
              let warnings = getFlag(result, keys, "warnings", mustBeArray);
              let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
              let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
              checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote3(name)}`);
              response.id = id2;
              if (pluginName != null) response.pluginName = pluginName;
              if (path32 != null) response.path = path32;
              if (namespace != null) response.namespace = namespace;
              if (suffix != null) response.suffix = suffix;
              if (external != null) response.external = external;
              if (sideEffects != null) response.sideEffects = sideEffects;
              if (pluginData != null) response.pluginData = details.store(pluginData);
              if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
              if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
              if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
              if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
              break;
            }
          } catch (e) {
            response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
            break;
          }
        }
        sendResponse(id, response);
      };
      requestCallbacks["on-load"] = async (id, request) => {
        let response = {}, name = "", callback2, note;
        for (let id2 of request.ids) {
          try {
            ({ name, callback: callback2, note } = onLoadCallbacks[id2]);
            let result = await callback2({
              path: request.path,
              namespace: request.namespace,
              suffix: request.suffix,
              pluginData: details.load(request.pluginData),
              with: request.with
            });
            if (result != null) {
              if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote3(name)} to return an object`);
              let keys = {};
              let pluginName = getFlag(result, keys, "pluginName", mustBeString);
              let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
              let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
              let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
              let loader2 = getFlag(result, keys, "loader", mustBeString);
              let errors = getFlag(result, keys, "errors", mustBeArray);
              let warnings = getFlag(result, keys, "warnings", mustBeArray);
              let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
              let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
              checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote3(name)}`);
              response.id = id2;
              if (pluginName != null) response.pluginName = pluginName;
              if (contents instanceof Uint8Array) response.contents = contents;
              else if (contents != null) response.contents = encodeUTF8(contents);
              if (resolveDir != null) response.resolveDir = resolveDir;
              if (pluginData != null) response.pluginData = details.store(pluginData);
              if (loader2 != null) response.loader = loader2;
              if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
              if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
              if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
              if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
              break;
            }
          } catch (e) {
            response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
            break;
          }
        }
        sendResponse(id, response);
      };
      let runOnEndCallbacks = (result, done) => done([], []);
      if (onEndCallbacks.length > 0) {
        runOnEndCallbacks = (result, done) => {
          (async () => {
            const onEndErrors = [];
            const onEndWarnings = [];
            for (const { name, callback: callback2, note } of onEndCallbacks) {
              let newErrors;
              let newWarnings;
              try {
                const value2 = await callback2(result);
                if (value2 != null) {
                  if (typeof value2 !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote3(name)} to return an object`);
                  let keys = {};
                  let errors = getFlag(value2, keys, "errors", mustBeArray);
                  let warnings = getFlag(value2, keys, "warnings", mustBeArray);
                  checkForInvalidFlags(value2, keys, `from onEnd() callback in plugin ${quote3(name)}`);
                  if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
                  if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                }
              } catch (e) {
                newErrors = [extractErrorMessageV8(e, streamIn, details, note && note(), name)];
              }
              if (newErrors) {
                onEndErrors.push(...newErrors);
                try {
                  result.errors.push(...newErrors);
                } catch {
                }
              }
              if (newWarnings) {
                onEndWarnings.push(...newWarnings);
                try {
                  result.warnings.push(...newWarnings);
                } catch {
                }
              }
            }
            done(onEndErrors, onEndWarnings);
          })();
        };
      }
      let scheduleOnDisposeCallbacks = () => {
        for (const cb of onDisposeCallbacks) {
          setTimeout(() => cb(), 0);
        }
      };
      isSetupDone = true;
      return {
        ok: true,
        requestPlugins,
        runOnEndCallbacks,
        scheduleOnDisposeCallbacks
      };
    };
    function createObjectStash() {
      const map = /* @__PURE__ */ new Map();
      let nextID = 0;
      return {
        clear() {
          map.clear();
        },
        load(id) {
          return map.get(id);
        },
        store(value2) {
          if (value2 === void 0) return -1;
          const id = nextID++;
          map.set(id, value2);
          return id;
        }
      };
    }
    function extractCallerV8(e, streamIn, ident) {
      let note;
      let tried = false;
      return () => {
        if (tried) return note;
        tried = true;
        try {
          let lines = (e.stack + "").split("\n");
          lines.splice(1, 1);
          let location2 = parseStackLinesV8(streamIn, lines, ident);
          if (location2) {
            note = { text: e.message, location: location2 };
            return note;
          }
        } catch {
        }
      };
    }
    function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
      let text = "Internal error";
      let location2 = null;
      try {
        text = (e && e.message || e) + "";
      } catch {
      }
      try {
        location2 = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
      } catch {
      }
      return { id: "", pluginName, text, location: location2, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1 };
    }
    function parseStackLinesV8(streamIn, lines, ident) {
      let at = "    at ";
      if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
        for (let i = 1; i < lines.length; i++) {
          let line = lines[i];
          if (!line.startsWith(at)) continue;
          line = line.slice(at.length);
          while (true) {
            let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
            if (match) {
              line = match[1];
              continue;
            }
            match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
            if (match) {
              line = match[1];
              continue;
            }
            match = /^(\S+):(\d+):(\d+)$/.exec(line);
            if (match) {
              let contents;
              try {
                contents = streamIn.readFileSync(match[1], "utf8");
              } catch {
                break;
              }
              let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
              let column = +match[3] - 1;
              let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
              return {
                file: match[1],
                namespace: "file",
                line: +match[2],
                column: encodeUTF8(lineText.slice(0, column)).length,
                length: encodeUTF8(lineText.slice(column, column + length)).length,
                lineText: lineText + "\n" + lines.slice(1).join("\n"),
                suggestion: ""
              };
            }
            break;
          }
        }
      }
      return null;
    }
    function failureErrorWithLog(text, errors, warnings) {
      let limit = 5;
      text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
        if (i === limit) return "\n...";
        if (!e.location) return `
error: ${e.text}`;
        let { file, line, column } = e.location;
        let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
        return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
      }).join("");
      let error = new Error(text);
      for (const [key, value2] of [["errors", errors], ["warnings", warnings]]) {
        Object.defineProperty(error, key, {
          configurable: true,
          enumerable: true,
          get: () => value2,
          set: (value22) => Object.defineProperty(error, key, {
            configurable: true,
            enumerable: true,
            value: value22
          })
        });
      }
      return error;
    }
    function replaceDetailsInMessages(messages2, stash) {
      for (const message of messages2) {
        message.detail = stash.load(message.detail);
      }
      return messages2;
    }
    function sanitizeLocation(location2, where, terminalWidth) {
      if (location2 == null) return null;
      let keys = {};
      let file = getFlag(location2, keys, "file", mustBeString);
      let namespace = getFlag(location2, keys, "namespace", mustBeString);
      let line = getFlag(location2, keys, "line", mustBeInteger);
      let column = getFlag(location2, keys, "column", mustBeInteger);
      let length = getFlag(location2, keys, "length", mustBeInteger);
      let lineText = getFlag(location2, keys, "lineText", mustBeString);
      let suggestion = getFlag(location2, keys, "suggestion", mustBeString);
      checkForInvalidFlags(location2, keys, where);
      if (lineText) {
        const relevantASCII = lineText.slice(
          0,
          (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80)
        );
        if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) {
          lineText = relevantASCII;
        }
      }
      return {
        file: file || "",
        namespace: namespace || "",
        line: line || 0,
        column: column || 0,
        length: length || 0,
        lineText: lineText || "",
        suggestion: suggestion || ""
      };
    }
    function sanitizeMessages(messages2, property, stash, fallbackPluginName, terminalWidth) {
      let messagesClone = [];
      let index = 0;
      for (const message of messages2) {
        let keys = {};
        let id = getFlag(message, keys, "id", mustBeString);
        let pluginName = getFlag(message, keys, "pluginName", mustBeString);
        let text = getFlag(message, keys, "text", mustBeString);
        let location2 = getFlag(message, keys, "location", mustBeObjectOrNull);
        let notes = getFlag(message, keys, "notes", mustBeArray);
        let detail = getFlag(message, keys, "detail", canBeAnything);
        let where = `in element ${index} of "${property}"`;
        checkForInvalidFlags(message, keys, where);
        let notesClone = [];
        if (notes) {
          for (const note of notes) {
            let noteKeys = {};
            let noteText = getFlag(note, noteKeys, "text", mustBeString);
            let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
            checkForInvalidFlags(note, noteKeys, where);
            notesClone.push({
              text: noteText || "",
              location: sanitizeLocation(noteLocation, where, terminalWidth)
            });
          }
        }
        messagesClone.push({
          id: id || "",
          pluginName: pluginName || fallbackPluginName,
          text: text || "",
          location: sanitizeLocation(location2, where, terminalWidth),
          notes: notesClone,
          detail: stash ? stash.store(detail) : -1
        });
        index++;
      }
      return messagesClone;
    }
    function sanitizeStringArray(values, property) {
      const result = [];
      for (const value2 of values) {
        if (typeof value2 !== "string") throw new Error(`${quote3(property)} must be an array of strings`);
        result.push(value2);
      }
      return result;
    }
    function sanitizeStringMap(map, property) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const key in map) {
        const value2 = map[key];
        if (typeof value2 !== "string") throw new Error(`key ${quote3(key)} in object ${quote3(property)} must be a string`);
        result[key] = value2;
      }
      return result;
    }
    function convertOutputFiles({ path: path32, contents, hash: hash2 }) {
      let text = null;
      return {
        path: path32,
        contents,
        hash: hash2,
        get text() {
          const binary = this.contents;
          if (text === null || binary !== contents) {
            contents = binary;
            text = decodeUTF8(binary);
          }
          return text;
        }
      };
    }
    var fs2 = require_fs();
    var os2 = require_os();
    var path3 = require_path();
    var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;
    var isValidBinaryPath = (x) => !!x && x !== "/usr/bin/esbuild";
    var packageDarwin_arm64 = "@esbuild/darwin-arm64";
    var packageDarwin_x64 = "@esbuild/darwin-x64";
    var knownWindowsPackages = {
      "win32 arm64 LE": "@esbuild/win32-arm64",
      "win32 ia32 LE": "@esbuild/win32-ia32",
      "win32 x64 LE": "@esbuild/win32-x64"
    };
    var knownUnixlikePackages = {
      "aix ppc64 BE": "@esbuild/aix-ppc64",
      "android arm64 LE": "@esbuild/android-arm64",
      "darwin arm64 LE": "@esbuild/darwin-arm64",
      "darwin x64 LE": "@esbuild/darwin-x64",
      "freebsd arm64 LE": "@esbuild/freebsd-arm64",
      "freebsd x64 LE": "@esbuild/freebsd-x64",
      "linux arm LE": "@esbuild/linux-arm",
      "linux arm64 LE": "@esbuild/linux-arm64",
      "linux ia32 LE": "@esbuild/linux-ia32",
      "linux mips64el LE": "@esbuild/linux-mips64el",
      "linux ppc64 LE": "@esbuild/linux-ppc64",
      "linux riscv64 LE": "@esbuild/linux-riscv64",
      "linux s390x BE": "@esbuild/linux-s390x",
      "linux x64 LE": "@esbuild/linux-x64",
      "linux loong64 LE": "@esbuild/linux-loong64",
      "netbsd arm64 LE": "@esbuild/netbsd-arm64",
      "netbsd x64 LE": "@esbuild/netbsd-x64",
      "openbsd arm64 LE": "@esbuild/openbsd-arm64",
      "openbsd x64 LE": "@esbuild/openbsd-x64",
      "sunos x64 LE": "@esbuild/sunos-x64"
    };
    var knownWebAssemblyFallbackPackages = {
      "android arm LE": "@esbuild/android-arm",
      "android x64 LE": "@esbuild/android-x64"
    };
    function pkgAndSubpathForCurrentPlatform() {
      let pkg;
      let subpath;
      let isWASM = false;
      let platformKey = `${process.platform} ${os2.arch()} ${os2.endianness()}`;
      if (platformKey in knownWindowsPackages) {
        pkg = knownWindowsPackages[platformKey];
        subpath = "esbuild.exe";
      } else if (platformKey in knownUnixlikePackages) {
        pkg = knownUnixlikePackages[platformKey];
        subpath = "bin/esbuild";
      } else if (platformKey in knownWebAssemblyFallbackPackages) {
        pkg = knownWebAssemblyFallbackPackages[platformKey];
        subpath = "bin/esbuild";
        isWASM = true;
      } else {
        throw new Error(`Unsupported platform: ${platformKey}`);
      }
      return { pkg, subpath, isWASM };
    }
    function pkgForSomeOtherPlatform() {
      const libMainJS = __require.resolve("esbuild");
      const nodeModulesDirectory = path3.dirname(path3.dirname(path3.dirname(libMainJS)));
      if (path3.basename(nodeModulesDirectory) === "node_modules") {
        for (const unixKey in knownUnixlikePackages) {
          try {
            const pkg = knownUnixlikePackages[unixKey];
            if (fs2.existsSync(path3.join(nodeModulesDirectory, pkg))) return pkg;
          } catch {
          }
        }
        for (const windowsKey in knownWindowsPackages) {
          try {
            const pkg = knownWindowsPackages[windowsKey];
            if (fs2.existsSync(path3.join(nodeModulesDirectory, pkg))) return pkg;
          } catch {
          }
        }
      }
      return null;
    }
    function downloadedBinPath(pkg, subpath) {
      const esbuildLibDir = path3.dirname(__require.resolve("esbuild"));
      return path3.join(esbuildLibDir, `downloaded-${pkg.replace("/", "-")}-${path3.basename(subpath)}`);
    }
    function generateBinPath() {
      if (isValidBinaryPath(ESBUILD_BINARY_PATH)) {
        if (!fs2.existsSync(ESBUILD_BINARY_PATH)) {
          console.warn(`[esbuild] Ignoring bad configuration: ESBUILD_BINARY_PATH=${ESBUILD_BINARY_PATH}`);
        } else {
          return { binPath: ESBUILD_BINARY_PATH, isWASM: false };
        }
      }
      const { pkg, subpath, isWASM } = pkgAndSubpathForCurrentPlatform();
      let binPath;
      try {
        binPath = __require.resolve(`${pkg}/${subpath}`);
      } catch (e) {
        binPath = downloadedBinPath(pkg, subpath);
        if (!fs2.existsSync(binPath)) {
          try {
            __require.resolve(pkg);
          } catch {
            const otherPkg = pkgForSomeOtherPlatform();
            if (otherPkg) {
              let suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild on Windows or macOS and copying "node_modules"
into a Docker image that runs Linux, or by copying "node_modules" between
Windows and WSL environments.

If you are installing with npm, you can try not copying the "node_modules"
directory when you copy the files over, and running "npm ci" or "npm install"
on the destination platform after the copy. Or you could consider using yarn
instead of npm which has built-in support for installing a package on multiple
platforms simultaneously.

If you are installing with yarn, you can try listing both this platform and the
other platform in your ".yarnrc.yml" file using the "supportedArchitectures"
feature: https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
              if (pkg === packageDarwin_x64 && otherPkg === packageDarwin_arm64 || pkg === packageDarwin_arm64 && otherPkg === packageDarwin_x64) {
                suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild with npm running inside of Rosetta 2 and then
trying to use it with node running outside of Rosetta 2, or vice versa (Rosetta
2 is Apple's on-the-fly x86_64-to-arm64 translation service).

If you are installing with npm, you can try ensuring that both npm and node are
not running under Rosetta 2 and then reinstalling esbuild. This likely involves
changing how you installed npm and/or node. For example, installing node with
the universal installer here should work: https://nodejs.org/en/download/. Or
you could consider using yarn instead of npm which has built-in support for
installing a package on multiple platforms simultaneously.

If you are installing with yarn, you can try listing both "arm64" and "x64"
in your ".yarnrc.yml" file using the "supportedArchitectures" feature:
https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
              }
              throw new Error(`
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
${suggestions}
Another alternative is to use the "esbuild-wasm" package instead, which works
the same way on all platforms. But it comes with a heavy performance cost and
can sometimes be 10x slower than the "esbuild" package, so you may also not
want to do that.
`);
            }
            throw new Error(`The package "${pkg}" could not be found, and is needed by esbuild.

If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" or "--omit=optional" flags. The "optionalDependencies" feature
of "package.json" is used by esbuild to install the correct binary executable
for your current platform.`);
          }
          throw e;
        }
      }
      if (/\.zip\//.test(binPath)) {
        let pnpapi;
        try {
          pnpapi = __require("pnpapi");
        } catch (e) {
        }
        if (pnpapi) {
          const root = pnpapi.getPackageInformation(pnpapi.topLevel).packageLocation;
          const binTargetPath = path3.join(
            root,
            "node_modules",
            ".cache",
            "esbuild",
            `pnpapi-${pkg.replace("/", "-")}-${"0.25.0"}-${path3.basename(subpath)}`
          );
          if (!fs2.existsSync(binTargetPath)) {
            fs2.mkdirSync(path3.dirname(binTargetPath), { recursive: true });
            fs2.copyFileSync(binPath, binTargetPath);
            fs2.chmodSync(binTargetPath, 493);
          }
          return { binPath: binTargetPath, isWASM };
        }
      }
      return { binPath, isWASM };
    }
    var child_process = require_child_process();
    var crypto2 = require_crypto();
    var path22 = require_path();
    var fs22 = require_fs();
    var os22 = require_os();
    var tty = require_tty();
    var worker_threads;
    if (process.env.ESBUILD_WORKER_THREADS !== "0") {
      try {
        worker_threads = require_worker_threads();
      } catch {
      }
      let [major, minor] = process.versions.node.split(".");
      if (
        // <v12.17.0 does not work
        +major < 12 || +major === 12 && +minor < 17 || +major === 13 && +minor < 13
      ) {
        worker_threads = void 0;
      }
    }
    var _a2;
    var isInternalWorkerThread = ((_a2 = worker_threads == null ? void 0 : worker_threads.workerData) == null ? void 0 : _a2.esbuildVersion) === "0.25.0";
    var esbuildCommandAndArgs = () => {
      if ((!ESBUILD_BINARY_PATH || false) && (path22.basename(__filename) !== "main.js" || path22.basename(__dirname) !== "lib")) {
        throw new Error(
          `The esbuild JavaScript API cannot be bundled. Please mark the "esbuild" package as external so it's not included in the bundle.

More information: The file containing the code for esbuild's JavaScript API (${__filename}) does not appear to be inside the esbuild package on the file system, which usually means that the esbuild package was bundled into another file. This is problematic because the API needs to run a binary executable inside the esbuild package which is located using a relative path from the API code to the executable. If the esbuild package is bundled, the relative path will be incorrect and the executable won't be found.`
        );
      }
      if (false) {
        return ["node", [path22.join(__dirname, "..", "bin", "esbuild")]];
      } else {
        const { binPath, isWASM } = generateBinPath();
        if (isWASM) {
          return ["node", [binPath]];
        } else {
          return [binPath, []];
        }
      }
    };
    var isTTY = () => tty.isatty(2);
    var fsSync = {
      readFile(tempFile, callback2) {
        try {
          let contents = fs22.readFileSync(tempFile, "utf8");
          try {
            fs22.unlinkSync(tempFile);
          } catch {
          }
          callback2(null, contents);
        } catch (err) {
          callback2(err, null);
        }
      },
      writeFile(contents, callback2) {
        try {
          let tempFile = randomFileName();
          fs22.writeFileSync(tempFile, contents);
          callback2(tempFile);
        } catch {
          callback2(null);
        }
      }
    };
    var fsAsync = {
      readFile(tempFile, callback2) {
        try {
          fs22.readFile(tempFile, "utf8", (err, contents) => {
            try {
              fs22.unlink(tempFile, () => callback2(err, contents));
            } catch {
              callback2(err, contents);
            }
          });
        } catch (err) {
          callback2(err, null);
        }
      },
      writeFile(contents, callback2) {
        try {
          let tempFile = randomFileName();
          fs22.writeFile(tempFile, contents, (err) => err !== null ? callback2(null) : callback2(tempFile));
        } catch {
          callback2(null);
        }
      }
    };
    var version3 = "0.25.0";
    var build = (options2) => ensureServiceIsRunning().build(options2);
    var context = (buildOptions) => ensureServiceIsRunning().context(buildOptions);
    var transform2 = (input, options2) => ensureServiceIsRunning().transform(input, options2);
    var formatMessages2 = (messages2, options2) => ensureServiceIsRunning().formatMessages(messages2, options2);
    var analyzeMetafile = (messages2, options2) => ensureServiceIsRunning().analyzeMetafile(messages2, options2);
    var buildSync = (options2) => {
      if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.buildSync(options2);
      }
      let result;
      runServiceSync((service) => service.buildOrContext({
        callName: "buildSync",
        refs: null,
        options: options2,
        isTTY: isTTY(),
        defaultWD,
        callback: (err, res) => {
          if (err) throw err;
          result = res;
        }
      }));
      return result;
    };
    var transformSync = (input, options2) => {
      if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.transformSync(input, options2);
      }
      let result;
      runServiceSync((service) => service.transform({
        callName: "transformSync",
        refs: null,
        input,
        options: options2 || {},
        isTTY: isTTY(),
        fs: fsSync,
        callback: (err, res) => {
          if (err) throw err;
          result = res;
        }
      }));
      return result;
    };
    var formatMessagesSync = (messages2, options2) => {
      if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.formatMessagesSync(messages2, options2);
      }
      let result;
      runServiceSync((service) => service.formatMessages({
        callName: "formatMessagesSync",
        refs: null,
        messages: messages2,
        options: options2,
        callback: (err, res) => {
          if (err) throw err;
          result = res;
        }
      }));
      return result;
    };
    var analyzeMetafileSync = (metafile, options2) => {
      if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.analyzeMetafileSync(metafile, options2);
      }
      let result;
      runServiceSync((service) => service.analyzeMetafile({
        callName: "analyzeMetafileSync",
        refs: null,
        metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
        options: options2,
        callback: (err, res) => {
          if (err) throw err;
          result = res;
        }
      }));
      return result;
    };
    var stop = () => {
      if (stopService) stopService();
      if (workerThreadService) workerThreadService.stop();
      return Promise.resolve();
    };
    var initializeWasCalled = false;
    var initialize = (options2) => {
      options2 = validateInitializeOptions(options2 || {});
      if (options2.wasmURL) throw new Error(`The "wasmURL" option only works in the browser`);
      if (options2.wasmModule) throw new Error(`The "wasmModule" option only works in the browser`);
      if (options2.worker) throw new Error(`The "worker" option only works in the browser`);
      if (initializeWasCalled) throw new Error('Cannot call "initialize" more than once');
      ensureServiceIsRunning();
      initializeWasCalled = true;
      return Promise.resolve();
    };
    var defaultWD = process.cwd();
    var longLivedService;
    var stopService;
    var ensureServiceIsRunning = () => {
      if (longLivedService) return longLivedService;
      let [command, args] = esbuildCommandAndArgs();
      let child = child_process.spawn(command, args.concat(`--service=${"0.25.0"}`, "--ping"), {
        windowsHide: true,
        stdio: ["pipe", "pipe", "inherit"],
        cwd: defaultWD
      });
      let { readFromStdout, afterClose, service } = createChannel({
        writeToStdin(bytes) {
          child.stdin.write(bytes, (err) => {
            if (err) afterClose(err);
          });
        },
        readFileSync: fs22.readFileSync,
        isSync: false,
        hasFS: true,
        esbuild: node_exports
      });
      child.stdin.on("error", afterClose);
      child.on("error", afterClose);
      const stdin = child.stdin;
      const stdout = child.stdout;
      stdout.on("data", readFromStdout);
      stdout.on("end", afterClose);
      stopService = () => {
        stdin.destroy();
        stdout.destroy();
        child.kill();
        initializeWasCalled = false;
        longLivedService = void 0;
        stopService = void 0;
      };
      let refCount = 0;
      child.unref();
      if (stdin.unref) {
        stdin.unref();
      }
      if (stdout.unref) {
        stdout.unref();
      }
      const refs = {
        ref() {
          if (++refCount === 1) child.ref();
        },
        unref() {
          if (--refCount === 0) child.unref();
        }
      };
      longLivedService = {
        build: (options2) => new Promise((resolve3, reject) => {
          service.buildOrContext({
            callName: "build",
            refs,
            options: options2,
            isTTY: isTTY(),
            defaultWD,
            callback: (err, res) => err ? reject(err) : resolve3(res)
          });
        }),
        context: (options2) => new Promise((resolve3, reject) => service.buildOrContext({
          callName: "context",
          refs,
          options: options2,
          isTTY: isTTY(),
          defaultWD,
          callback: (err, res) => err ? reject(err) : resolve3(res)
        })),
        transform: (input, options2) => new Promise((resolve3, reject) => service.transform({
          callName: "transform",
          refs,
          input,
          options: options2 || {},
          isTTY: isTTY(),
          fs: fsAsync,
          callback: (err, res) => err ? reject(err) : resolve3(res)
        })),
        formatMessages: (messages2, options2) => new Promise((resolve3, reject) => service.formatMessages({
          callName: "formatMessages",
          refs,
          messages: messages2,
          options: options2,
          callback: (err, res) => err ? reject(err) : resolve3(res)
        })),
        analyzeMetafile: (metafile, options2) => new Promise((resolve3, reject) => service.analyzeMetafile({
          callName: "analyzeMetafile",
          refs,
          metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
          options: options2,
          callback: (err, res) => err ? reject(err) : resolve3(res)
        }))
      };
      return longLivedService;
    };
    var runServiceSync = (callback2) => {
      let [command, args] = esbuildCommandAndArgs();
      let stdin = new Uint8Array();
      let { readFromStdout, afterClose, service } = createChannel({
        writeToStdin(bytes) {
          if (stdin.length !== 0) throw new Error("Must run at most one command");
          stdin = bytes;
        },
        isSync: true,
        hasFS: true,
        esbuild: node_exports
      });
      callback2(service);
      let stdout = child_process.execFileSync(command, args.concat(`--service=${"0.25.0"}`), {
        cwd: defaultWD,
        windowsHide: true,
        input: stdin,
        // We don't know how large the output could be. If it's too large, the
        // command will fail with ENOBUFS. Reserve 16mb for now since that feels
        // like it should be enough. Also allow overriding this with an environment
        // variable.
        maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16 * 1024 * 1024
      });
      readFromStdout(stdout);
      afterClose(null);
    };
    var randomFileName = () => {
      return path22.join(os22.tmpdir(), `esbuild-${crypto2.randomBytes(32).toString("hex")}`);
    };
    var workerThreadService = null;
    var startWorkerThreadService = (worker_threads2) => {
      let { port1: mainPort, port2: workerPort } = new worker_threads2.MessageChannel();
      let worker = new worker_threads2.Worker(__filename, {
        workerData: { workerPort, defaultWD, esbuildVersion: "0.25.0" },
        transferList: [workerPort],
        // From node's documentation: https://nodejs.org/api/worker_threads.html
        //
        //   Take care when launching worker threads from preload scripts (scripts loaded
        //   and run using the `-r` command line flag). Unless the `execArgv` option is
        //   explicitly set, new Worker threads automatically inherit the command line flags
        //   from the running process and will preload the same preload scripts as the main
        //   thread. If the preload script unconditionally launches a worker thread, every
        //   thread spawned will spawn another until the application crashes.
        //
        execArgv: []
      });
      let nextID = 0;
      let fakeBuildError = (text) => {
        let error = new Error(`Build failed with 1 error:
error: ${text}`);
        let errors = [{ id: "", pluginName: "", text, location: null, notes: [], detail: void 0 }];
        error.errors = errors;
        error.warnings = [];
        return error;
      };
      let validateBuildSyncOptions = (options2) => {
        if (!options2) return;
        let plugins2 = options2.plugins;
        if (plugins2 && plugins2.length > 0) throw fakeBuildError(`Cannot use plugins in synchronous API calls`);
      };
      let applyProperties = (object, properties) => {
        for (let key in properties) {
          object[key] = properties[key];
        }
      };
      let runCallSync = (command, args) => {
        let id = nextID++;
        let sharedBuffer = new SharedArrayBuffer(8);
        let sharedBufferView = new Int32Array(sharedBuffer);
        let msg = { sharedBuffer, id, command, args };
        worker.postMessage(msg);
        let status2 = Atomics.wait(sharedBufferView, 0, 0);
        if (status2 !== "ok" && status2 !== "not-equal") throw new Error("Internal error: Atomics.wait() failed: " + status2);
        let { message: { id: id2, resolve: resolve3, reject, properties } } = worker_threads2.receiveMessageOnPort(mainPort);
        if (id !== id2) throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
        if (reject) {
          applyProperties(reject, properties);
          throw reject;
        }
        return resolve3;
      };
      worker.unref();
      return {
        buildSync(options2) {
          validateBuildSyncOptions(options2);
          return runCallSync("build", [options2]);
        },
        transformSync(input, options2) {
          return runCallSync("transform", [input, options2]);
        },
        formatMessagesSync(messages2, options2) {
          return runCallSync("formatMessages", [messages2, options2]);
        },
        analyzeMetafileSync(metafile, options2) {
          return runCallSync("analyzeMetafile", [metafile, options2]);
        },
        stop() {
          worker.terminate();
          workerThreadService = null;
        }
      };
    };
    var startSyncServiceWorker = () => {
      let workerPort = worker_threads.workerData.workerPort;
      let parentPort = worker_threads.parentPort;
      let extractProperties = (object) => {
        let properties = {};
        if (object && typeof object === "object") {
          for (let key in object) {
            properties[key] = object[key];
          }
        }
        return properties;
      };
      try {
        let service = ensureServiceIsRunning();
        defaultWD = worker_threads.workerData.defaultWD;
        parentPort.on("message", (msg) => {
          (async () => {
            let { sharedBuffer, id, command, args } = msg;
            let sharedBufferView = new Int32Array(sharedBuffer);
            try {
              switch (command) {
                case "build":
                  workerPort.postMessage({ id, resolve: await service.build(args[0]) });
                  break;
                case "transform":
                  workerPort.postMessage({ id, resolve: await service.transform(args[0], args[1]) });
                  break;
                case "formatMessages":
                  workerPort.postMessage({ id, resolve: await service.formatMessages(args[0], args[1]) });
                  break;
                case "analyzeMetafile":
                  workerPort.postMessage({ id, resolve: await service.analyzeMetafile(args[0], args[1]) });
                  break;
                default:
                  throw new Error(`Invalid command: ${command}`);
              }
            } catch (reject) {
              workerPort.postMessage({ id, reject, properties: extractProperties(reject) });
            }
            Atomics.add(sharedBufferView, 0, 1);
            Atomics.notify(sharedBufferView, 0, Infinity);
          })();
        });
      } catch (reject) {
        parentPort.on("message", (msg) => {
          let { sharedBuffer, id } = msg;
          let sharedBufferView = new Int32Array(sharedBuffer);
          workerPort.postMessage({ id, reject, properties: extractProperties(reject) });
          Atomics.add(sharedBufferView, 0, 1);
          Atomics.notify(sharedBufferView, 0, Infinity);
        });
      }
    };
    if (isInternalWorkerThread) {
      startSyncServiceWorker();
    }
    var node_default = node_exports;
  }
});

// browser-external:node:child_process
var require_node_child_process = __commonJS({
  "browser-external:node:child_process"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:child_process" has been externalized for browser compatibility. Cannot access "node:child_process.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:net
var require_net = __commonJS({
  "browser-external:net"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "net" has been externalized for browser compatibility. Cannot access "net.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:http
var require_http = __commonJS({
  "browser-external:http"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "http" has been externalized for browser compatibility. Cannot access "http.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:net
var require_node_net = __commonJS({
  "browser-external:node:net"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:net" has been externalized for browser compatibility. Cannot access "node:net.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:dns
var require_node_dns = __commonJS({
  "browser-external:node:dns"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:dns" has been externalized for browser compatibility. Cannot access "node:dns.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:buffer
var require_node_buffer = __commonJS({
  "browser-external:node:buffer"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:buffer" has been externalized for browser compatibility. Cannot access "node:buffer.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:readline
var require_node_readline = __commonJS({
  "browser-external:node:readline"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:readline" has been externalized for browser compatibility. Cannot access "node:readline.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:events
var require_node_events = __commonJS({
  "browser-external:node:events"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:events" has been externalized for browser compatibility. Cannot access "node:events.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:assert
var require_node_assert = __commonJS({
  "browser-external:node:assert"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:assert" has been externalized for browser compatibility. Cannot access "node:assert.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:v8
var require_node_v8 = __commonJS({
  "browser-external:node:v8"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:v8" has been externalized for browser compatibility. Cannot access "node:v8.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:worker_threads
var require_node_worker_threads = __commonJS({
  "browser-external:node:worker_threads"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:worker_threads" has been externalized for browser compatibility. Cannot access "node:worker_threads.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:https
var require_https = __commonJS({
  "browser-external:https"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "https" has been externalized for browser compatibility. Cannot access "https.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:tls
var require_tls = __commonJS({
  "browser-external:tls"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "tls" has been externalized for browser compatibility. Cannot access "tls.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:zlib
var require_zlib = __commonJS({
  "browser-external:zlib"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "zlib" has been externalized for browser compatibility. Cannot access "zlib.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// ../../node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "../../node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// ../../node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "../../node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value2, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value2 < 0 || value2 === 0 && 1 / value2 < 0 ? 1 : 0;
      value2 = Math.abs(value2);
      if (isNaN(value2) || value2 === Infinity) {
        m = isNaN(value2) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value2) / Math.LN2);
        if (value2 * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value2 += rt / c;
        } else {
          value2 += rt * Math.pow(2, 1 - eBias);
        }
        if (value2 * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value2 * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value2 * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// ../../node_modules/buffer/index.js
var require_buffer = __commonJS({
  "../../node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto2 = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto2, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto2);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value2, encodingOrOffset, length) {
      if (typeof value2 === "string") {
        return fromString(value2, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value2)) {
        return fromArrayView(value2);
      }
      if (value2 == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value2
        );
      }
      if (isInstance(value2, ArrayBuffer) || value2 && isInstance(value2.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value2, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value2, SharedArrayBuffer) || value2 && isInstance(value2.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value2, encodingOrOffset, length);
      }
      if (typeof value2 === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      var valueOf = value2.valueOf && value2.valueOf();
      if (valueOf != null && valueOf !== value2) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value2);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value2[Symbol.toPrimitive] === "function") {
        return Buffer2.from(
          value2[Symbol.toPrimitive]("string"),
          encodingOrOffset,
          length
        );
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value2
      );
    }
    Buffer2.from = function(value2, encodingOrOffset, length) {
      return from(value2, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill2, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill2 !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill2, encoding) : createBuffer(size).fill(fill2);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill2, encoding) {
      return alloc(size, fill2, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length = byteLength(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer2(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare2(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b) return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat2(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            Buffer2.from(buf).copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      var len = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString2() {
      var length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect2() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      var out = "";
      for (var i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      var newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value2, offset, ext, max, min2) {
      if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value2 > max || value2 < min2) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value2, offset, byteLength2, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value2, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value2 & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value2 / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value2, offset, byteLength2, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value2, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value2 & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value2 / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 1, 255, 0);
      this[offset] = value2 & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 2, 65535, 0);
      this[offset] = value2 & 255;
      this[offset + 1] = value2 >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 2, 65535, 0);
      this[offset] = value2 >>> 8;
      this[offset + 1] = value2 & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 4, 4294967295, 0);
      this[offset + 3] = value2 >>> 24;
      this[offset + 2] = value2 >>> 16;
      this[offset + 1] = value2 >>> 8;
      this[offset] = value2 & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 4, 4294967295, 0);
      this[offset] = value2 >>> 24;
      this[offset + 1] = value2 >>> 16;
      this[offset + 2] = value2 >>> 8;
      this[offset + 3] = value2 & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value2, offset, byteLength2, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value2, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value2 & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value2 < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value2 / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value2, offset, byteLength2, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value2, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value2 & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value2 < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value2 / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 1, 127, -128);
      if (value2 < 0) value2 = 255 + value2 + 1;
      this[offset] = value2 & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 2, 32767, -32768);
      this[offset] = value2 & 255;
      this[offset + 1] = value2 >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 2, 32767, -32768);
      this[offset] = value2 >>> 8;
      this[offset + 1] = value2 & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 4, 2147483647, -2147483648);
      this[offset] = value2 & 255;
      this[offset + 1] = value2 >>> 8;
      this[offset + 2] = value2 >>> 16;
      this[offset + 3] = value2 >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value2, offset, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value2, offset, 4, 2147483647, -2147483648);
      if (value2 < 0) value2 = 4294967295 + value2 + 1;
      this[offset] = value2 >>> 24;
      this[offset + 1] = value2 >>> 16;
      this[offset + 2] = value2 >>> 8;
      this[offset + 3] = value2 & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value2, offset, ext, max, min2) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value2, offset, littleEndian, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value2, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value2, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value2, offset, noAssert) {
      return writeFloat(this, value2, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value2, offset, noAssert) {
      return writeFloat(this, value2, offset, false, noAssert);
    };
    function writeDouble(buf, value2, offset, littleEndian, noAssert) {
      value2 = +value2;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value2, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value2, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value2, offset, noAssert) {
      return writeDouble(this, value2, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value2, offset, noAssert) {
      return writeDouble(this, value2, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill2(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        var len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src2, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src2.length) break;
        dst[i + offset] = src2[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      var alphabet = "0123456789abcdef";
      var table = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var i16 = i * 16;
        for (var j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
  }
});

// browser-external:node:querystring
var require_node_querystring = __commonJS({
  "browser-external:node:querystring"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:querystring" has been externalized for browser compatibility. Cannot access "node:querystring.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:node:zlib
var require_node_zlib = __commonJS({
  "browser-external:node:zlib"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "node:zlib" has been externalized for browser compatibility. Cannot access "node:zlib.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/supports-color/browser.js
var require_browser = __commonJS({
  "node_modules/supports-color/browser.js"(exports, module) {
    "use strict";
    module.exports = {
      stdout: false,
      stderr: false
    };
  }
});

// node_modules/vite/dist/node/chunks/dep-glQox-ep.js
var fs$8 = __toESM(require_node_fs(), 1);
var import_node_fs2 = __toESM(require_node_fs(), 1);
var import_node_path3 = __toESM(require_node_path(), 1);
var import_promises = __toESM(require_promises(), 1);
var import_node_url2 = __toESM(require_node_url(), 1);
var import_node_util = __toESM(require_node_util(), 1);
var import_node_perf_hooks = __toESM(require_node_perf_hooks(), 1);
var import_node_module = __toESM(require_node_module(), 1);
var import_node_crypto = __toESM(require_node_crypto(), 1);
var import_esbuild = __toESM(require_main(), 1);

// node_modules/vite/dist/node/constants.js
var import_node_path = __toESM(require_node_path(), 1);
var import_node_url = __toESM(require_node_url(), 1);
var import_node_fs = __toESM(require_node_fs(), 1);
var { version } = JSON.parse(
  (0, import_node_fs.readFileSync)(new URL("../../package.json", import.meta.url)).toString()
);
var DEFAULT_MAIN_FIELDS = [
  "browser",
  "module",
  "jsnext:main",
  // moment still uses this...
  "jsnext"
];
var DEFAULT_CLIENT_MAIN_FIELDS = Object.freeze(DEFAULT_MAIN_FIELDS);
var DEFAULT_SERVER_MAIN_FIELDS = Object.freeze(
  DEFAULT_MAIN_FIELDS.filter((f) => f !== "browser")
);
var DEV_PROD_CONDITION = `development|production`;
var DEFAULT_CONDITIONS = ["module", "browser", "node", DEV_PROD_CONDITION];
var DEFAULT_CLIENT_CONDITIONS = Object.freeze(
  DEFAULT_CONDITIONS.filter((c) => c !== "node")
);
var DEFAULT_SERVER_CONDITIONS = Object.freeze(
  DEFAULT_CONDITIONS.filter((c) => c !== "browser")
);
var CSS_LANGS_RE = /\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/;
var FS_PREFIX = `/@fs/`;
var CLIENT_PUBLIC_PATH = `/@vite/client`;
var ENV_PUBLIC_PATH = `/@vite/env`;
var VITE_PACKAGE_DIR = (0, import_node_path.resolve)(
  // import.meta.url is `dist/node/constants.js` after bundle
  (0, import_node_url.fileURLToPath)(import.meta.url),
  "../../.."
);
var CLIENT_ENTRY = (0, import_node_path.resolve)(VITE_PACKAGE_DIR, "dist/client/client.mjs");
var ENV_ENTRY = (0, import_node_path.resolve)(VITE_PACKAGE_DIR, "dist/client/env.mjs");
var CLIENT_DIR = import_node_path.default.dirname(CLIENT_ENTRY);
var KNOWN_ASSET_TYPES = [
  // images
  "apng",
  "bmp",
  "png",
  "jpe?g",
  "jfif",
  "pjpeg",
  "pjp",
  "gif",
  "svg",
  "ico",
  "webp",
  "avif",
  "cur",
  "jxl",
  // media
  "mp4",
  "webm",
  "ogg",
  "mp3",
  "wav",
  "flac",
  "aac",
  "opus",
  "mov",
  "m4a",
  "vtt",
  // fonts
  "woff2?",
  "eot",
  "ttf",
  "otf",
  // other
  "webmanifest",
  "pdf",
  "txt"
];
var DEFAULT_ASSETS_RE = new RegExp(
  `\\.(` + KNOWN_ASSET_TYPES.join("|") + `)(\\?.*)?$`
);
var DEFAULT_DEV_PORT = 5173;
var DEFAULT_PREVIEW_PORT = 4173;
var DEFAULT_ASSETS_INLINE_LIMIT = 4096;
var defaultAllowedOrigins = /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/;

// node_modules/vite/dist/node/chunks/dep-glQox-ep.js
var import_path = __toESM(require_path(), 1);
var import_fs = __toESM(require_fs(), 1);
var import_node_child_process = __toESM(require_node_child_process(), 1);
var import_node_http = __toESM(require_node_http(), 1);
var import_node_https = __toESM(require_node_https(), 1);
var import_tty = __toESM(require_tty(), 1);
var import_util = __toESM(require_util(), 1);
var import_net = __toESM(require_net(), 1);
var import_events = __toESM(require_events(), 1);
var import_url = __toESM(require_url(), 1);
var import_http = __toESM(require_http(), 1);
var import_stream = __toESM(require_stream(), 1);
var import_os = __toESM(require_os(), 1);
var import_child_process = __toESM(require_child_process(), 1);
var import_node_os = __toESM(require_node_os(), 1);
var import_node_net = __toESM(require_node_net(), 1);
var import_node_dns = __toESM(require_node_dns(), 1);

// node_modules/vite/dist/node/module-runner.js
var SOURCEMAPPING_URL = "sourceMa";
SOURCEMAPPING_URL += "ppingURL";
var isWindows = typeof process < "u" && process.platform === "win32";
var AsyncFunction = (async function() {
}).constructor;
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = new Uint8Array(64);
var charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
  const c = chars.charCodeAt(i);
  intToChar[i] = c, charToInt[c] = i;
}
var MODULE_RUNNER_SOURCEMAPPING_REGEXP = new RegExp(
  `//# ${SOURCEMAPPING_URL}=data:application/json;base64,(.+)`
);
var retrieveFileHandlers = /* @__PURE__ */ new Set();
var retrieveSourceMapHandlers = /* @__PURE__ */ new Set();
var createExecHandlers = (handlers) => (...args) => {
  for (const handler of handlers) {
    const result = handler(...args);
    if (result) return result;
  }
  return null;
};
var retrieveFileFromHandlers = createExecHandlers(retrieveFileHandlers);
var retrieveSourceMapFromHandlers = createExecHandlers(
  retrieveSourceMapHandlers
);
var originalPrepare = Error.prepareStackTrace;

// node_modules/rollup/dist/es/parseAst.js
var import_native = __toESM(require_native());
var import_node_path2 = __toESM(require_node_path());

// node_modules/vite/dist/node/chunks/dep-glQox-ep.js
var import_node_buffer = __toESM(require_node_buffer(), 1);
var import_module = __toESM(require_module(), 1);
var import_node_readline = __toESM(require_node_readline(), 1);
var import_node_process = __toESM(require_node_process(), 1);
var import_node_events = __toESM(require_node_events(), 1);
var import_crypto = __toESM(require_crypto(), 1);
var import_node_assert = __toESM(require_node_assert(), 1);
var import_node_v8 = __toESM(require_node_v8(), 1);
var import_node_worker_threads = __toESM(require_node_worker_threads(), 1);
var import_https = __toESM(require_https(), 1);
var import_tls = __toESM(require_tls(), 1);
var import_zlib = __toESM(require_zlib(), 1);
var import_buffer = __toESM(require_buffer(), 1);
var import_assert = __toESM(require_assert(), 1);
var qs = __toESM(require_node_querystring(), 1);
var import_node_zlib = __toESM(require_node_zlib(), 1);
var import_node_module2 = __toESM(require_node_module(), 1);
var __require2 = (0, import_node_module2.createRequire)(import.meta.url);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var picocolors = { exports: {} };
var p = process || {};
var argv = p.argv || [];
var env$1 = p.env || {};
var isColorSupported = !(!!env$1.NO_COLOR || argv.includes("--no-color")) && (!!env$1.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env$1.TERM !== "dumb" || !!env$1.CI);
var formatter = (open, close2, replace = open) => (input) => {
  let string = "" + input, index = string.indexOf(close2, open.length);
  return ~index ? open + replaceClose(string, close2, replace, index) + close2 : open + string + close2;
};
var replaceClose = (string, close2, replace, index) => {
  let result = "", cursor = 0;
  do {
    result += string.substring(cursor, index) + replace;
    cursor = index + close2.length;
    index = string.indexOf(close2, cursor);
  } while (~index);
  return result + string.substring(cursor);
};
var createColors = (enabled = isColorSupported) => {
  let f = enabled ? formatter : () => String;
  return {
    isColorSupported: enabled,
    reset: f("\x1B[0m", "\x1B[0m"),
    bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
    dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
    italic: f("\x1B[3m", "\x1B[23m"),
    underline: f("\x1B[4m", "\x1B[24m"),
    inverse: f("\x1B[7m", "\x1B[27m"),
    hidden: f("\x1B[8m", "\x1B[28m"),
    strikethrough: f("\x1B[9m", "\x1B[29m"),
    black: f("\x1B[30m", "\x1B[39m"),
    red: f("\x1B[31m", "\x1B[39m"),
    green: f("\x1B[32m", "\x1B[39m"),
    yellow: f("\x1B[33m", "\x1B[39m"),
    blue: f("\x1B[34m", "\x1B[39m"),
    magenta: f("\x1B[35m", "\x1B[39m"),
    cyan: f("\x1B[36m", "\x1B[39m"),
    white: f("\x1B[37m", "\x1B[39m"),
    gray: f("\x1B[90m", "\x1B[39m"),
    bgBlack: f("\x1B[40m", "\x1B[49m"),
    bgRed: f("\x1B[41m", "\x1B[49m"),
    bgGreen: f("\x1B[42m", "\x1B[49m"),
    bgYellow: f("\x1B[43m", "\x1B[49m"),
    bgBlue: f("\x1B[44m", "\x1B[49m"),
    bgMagenta: f("\x1B[45m", "\x1B[49m"),
    bgCyan: f("\x1B[46m", "\x1B[49m"),
    bgWhite: f("\x1B[47m", "\x1B[49m"),
    blackBright: f("\x1B[90m", "\x1B[39m"),
    redBright: f("\x1B[91m", "\x1B[39m"),
    greenBright: f("\x1B[92m", "\x1B[39m"),
    yellowBright: f("\x1B[93m", "\x1B[39m"),
    blueBright: f("\x1B[94m", "\x1B[39m"),
    magentaBright: f("\x1B[95m", "\x1B[39m"),
    cyanBright: f("\x1B[96m", "\x1B[39m"),
    whiteBright: f("\x1B[97m", "\x1B[39m"),
    bgBlackBright: f("\x1B[100m", "\x1B[49m"),
    bgRedBright: f("\x1B[101m", "\x1B[49m"),
    bgGreenBright: f("\x1B[102m", "\x1B[49m"),
    bgYellowBright: f("\x1B[103m", "\x1B[49m"),
    bgBlueBright: f("\x1B[104m", "\x1B[49m"),
    bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
    bgCyanBright: f("\x1B[106m", "\x1B[49m"),
    bgWhiteBright: f("\x1B[107m", "\x1B[49m")
  };
};
picocolors.exports = createColors();
picocolors.exports.createColors = createColors;
var picocolorsExports = picocolors.exports;
var colors$1 = getDefaultExportFromCjs(picocolorsExports);
var utils$d = {};
var WIN_SLASH$1 = "\\\\/";
var WIN_NO_SLASH$1 = `[^${WIN_SLASH$1}]`;
var DOT_LITERAL$1 = "\\.";
var PLUS_LITERAL$1 = "\\+";
var QMARK_LITERAL$1 = "\\?";
var SLASH_LITERAL$1 = "\\/";
var ONE_CHAR$1 = "(?=.)";
var QMARK$1 = "[^/]";
var END_ANCHOR$1 = `(?:${SLASH_LITERAL$1}|$)`;
var START_ANCHOR$1 = `(?:^|${SLASH_LITERAL$1})`;
var DOTS_SLASH$1 = `${DOT_LITERAL$1}{1,2}${END_ANCHOR$1}`;
var NO_DOT$1 = `(?!${DOT_LITERAL$1})`;
var NO_DOTS$1 = `(?!${START_ANCHOR$1}${DOTS_SLASH$1})`;
var NO_DOT_SLASH$1 = `(?!${DOT_LITERAL$1}{0,1}${END_ANCHOR$1})`;
var NO_DOTS_SLASH$1 = `(?!${DOTS_SLASH$1})`;
var QMARK_NO_DOT$1 = `[^.${SLASH_LITERAL$1}]`;
var STAR$2 = `${QMARK$1}*?`;
var SEP = "/";
var POSIX_CHARS$1 = {
  DOT_LITERAL: DOT_LITERAL$1,
  PLUS_LITERAL: PLUS_LITERAL$1,
  QMARK_LITERAL: QMARK_LITERAL$1,
  SLASH_LITERAL: SLASH_LITERAL$1,
  ONE_CHAR: ONE_CHAR$1,
  QMARK: QMARK$1,
  END_ANCHOR: END_ANCHOR$1,
  DOTS_SLASH: DOTS_SLASH$1,
  NO_DOT: NO_DOT$1,
  NO_DOTS: NO_DOTS$1,
  NO_DOT_SLASH: NO_DOT_SLASH$1,
  NO_DOTS_SLASH: NO_DOTS_SLASH$1,
  QMARK_NO_DOT: QMARK_NO_DOT$1,
  STAR: STAR$2,
  START_ANCHOR: START_ANCHOR$1,
  SEP
};
var WINDOWS_CHARS$1 = {
  ...POSIX_CHARS$1,
  SLASH_LITERAL: `[${WIN_SLASH$1}]`,
  QMARK: WIN_NO_SLASH$1,
  STAR: `${WIN_NO_SLASH$1}*?`,
  DOTS_SLASH: `${DOT_LITERAL$1}{1,2}(?:[${WIN_SLASH$1}]|$)`,
  NO_DOT: `(?!${DOT_LITERAL$1})`,
  NO_DOTS: `(?!(?:^|[${WIN_SLASH$1}])${DOT_LITERAL$1}{1,2}(?:[${WIN_SLASH$1}]|$))`,
  NO_DOT_SLASH: `(?!${DOT_LITERAL$1}{0,1}(?:[${WIN_SLASH$1}]|$))`,
  NO_DOTS_SLASH: `(?!${DOT_LITERAL$1}{1,2}(?:[${WIN_SLASH$1}]|$))`,
  QMARK_NO_DOT: `[^.${WIN_SLASH$1}]`,
  START_ANCHOR: `(?:^|[${WIN_SLASH$1}])`,
  END_ANCHOR: `(?:[${WIN_SLASH$1}]|$)`,
  SEP: "\\"
};
var POSIX_REGEX_SOURCE$3 = {
  alnum: "a-zA-Z0-9",
  alpha: "a-zA-Z",
  ascii: "\\x00-\\x7F",
  blank: " \\t",
  cntrl: "\\x00-\\x1F\\x7F",
  digit: "0-9",
  graph: "\\x21-\\x7E",
  lower: "a-z",
  print: "\\x20-\\x7E ",
  punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
  space: " \\t\\r\\n\\v\\f",
  upper: "A-Z",
  word: "A-Za-z0-9_",
  xdigit: "A-Fa-f0-9"
};
var constants$8 = {
  MAX_LENGTH: 1024 * 64,
  POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$3,
  // regular expressions
  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
  // Replace globs with equivalent patterns to reduce parsing time.
  REPLACEMENTS: {
    "***": "*",
    "**/**": "**",
    "**/**/**": "**"
  },
  // Digits
  CHAR_0: 48,
  /* 0 */
  CHAR_9: 57,
  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: 65,
  /* A */
  CHAR_LOWERCASE_A: 97,
  /* a */
  CHAR_UPPERCASE_Z: 90,
  /* Z */
  CHAR_LOWERCASE_Z: 122,
  /* z */
  CHAR_LEFT_PARENTHESES: 40,
  /* ( */
  CHAR_RIGHT_PARENTHESES: 41,
  /* ) */
  CHAR_ASTERISK: 42,
  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: 38,
  /* & */
  CHAR_AT: 64,
  /* @ */
  CHAR_BACKWARD_SLASH: 92,
  /* \ */
  CHAR_CARRIAGE_RETURN: 13,
  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: 94,
  /* ^ */
  CHAR_COLON: 58,
  /* : */
  CHAR_COMMA: 44,
  /* , */
  CHAR_DOT: 46,
  /* . */
  CHAR_DOUBLE_QUOTE: 34,
  /* " */
  CHAR_EQUAL: 61,
  /* = */
  CHAR_EXCLAMATION_MARK: 33,
  /* ! */
  CHAR_FORM_FEED: 12,
  /* \f */
  CHAR_FORWARD_SLASH: 47,
  /* / */
  CHAR_GRAVE_ACCENT: 96,
  /* ` */
  CHAR_HASH: 35,
  /* # */
  CHAR_HYPHEN_MINUS: 45,
  /* - */
  CHAR_LEFT_ANGLE_BRACKET: 60,
  /* < */
  CHAR_LEFT_CURLY_BRACE: 123,
  /* { */
  CHAR_LEFT_SQUARE_BRACKET: 91,
  /* [ */
  CHAR_LINE_FEED: 10,
  /* \n */
  CHAR_NO_BREAK_SPACE: 160,
  /* \u00A0 */
  CHAR_PERCENT: 37,
  /* % */
  CHAR_PLUS: 43,
  /* + */
  CHAR_QUESTION_MARK: 63,
  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: 62,
  /* > */
  CHAR_RIGHT_CURLY_BRACE: 125,
  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: 93,
  /* ] */
  CHAR_SEMICOLON: 59,
  /* ; */
  CHAR_SINGLE_QUOTE: 39,
  /* ' */
  CHAR_SPACE: 32,
  /*   */
  CHAR_TAB: 9,
  /* \t */
  CHAR_UNDERSCORE: 95,
  /* _ */
  CHAR_VERTICAL_LINE: 124,
  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
  /* \uFEFF */
  /**
   * Create EXTGLOB_CHARS
   */
  extglobChars(chars3) {
    return {
      "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars3.STAR})` },
      "?": { type: "qmark", open: "(?:", close: ")?" },
      "+": { type: "plus", open: "(?:", close: ")+" },
      "*": { type: "star", open: "(?:", close: ")*" },
      "@": { type: "at", open: "(?:", close: ")" }
    };
  },
  /**
   * Create GLOB_CHARS
   */
  globChars(win322) {
    return win322 === true ? WINDOWS_CHARS$1 : POSIX_CHARS$1;
  }
};
(function(exports) {
  const {
    REGEX_BACKSLASH,
    REGEX_REMOVE_BACKSLASH,
    REGEX_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_GLOBAL
  } = constants$8;
  exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
  exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
  exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
  exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
  exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
  exports.isWindows = () => {
    if (typeof navigator !== "undefined" && navigator.platform) {
      const platform2 = navigator.platform.toLowerCase();
      return platform2 === "win32" || platform2 === "windows";
    }
    if (typeof process !== "undefined" && process.platform) {
      return process.platform === "win32";
    }
    return false;
  };
  exports.removeBackslashes = (str) => {
    return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
      return match === "\\" ? "" : match;
    });
  };
  exports.escapeLast = (input, char, lastIdx) => {
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1) return input;
    if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
  };
  exports.removePrefix = (input, state = {}) => {
    let output = input;
    if (output.startsWith("./")) {
      output = output.slice(2);
      state.prefix = "./";
    }
    return output;
  };
  exports.wrapOutput = (input, state = {}, options2 = {}) => {
    const prepend = options2.contains ? "" : "^";
    const append2 = options2.contains ? "" : "$";
    let output = `${prepend}(?:${input})${append2}`;
    if (state.negated === true) {
      output = `(?:^(?!${output}).*$)`;
    }
    return output;
  };
  exports.basename = (path3, { windows: windows2 } = {}) => {
    const segs = path3.split(windows2 ? /[\\/]/ : "/");
    const last = segs[segs.length - 1];
    if (last === "") {
      return segs[segs.length - 2];
    }
    return last;
  };
})(utils$d);
var utils$c = utils$d;
var {
  CHAR_ASTERISK: CHAR_ASTERISK$1,
  /* * */
  CHAR_AT: CHAR_AT$1,
  /* @ */
  CHAR_BACKWARD_SLASH: CHAR_BACKWARD_SLASH$1,
  /* \ */
  CHAR_COMMA: CHAR_COMMA$2,
  /* , */
  CHAR_DOT: CHAR_DOT$2,
  /* . */
  CHAR_EXCLAMATION_MARK: CHAR_EXCLAMATION_MARK$1,
  /* ! */
  CHAR_FORWARD_SLASH: CHAR_FORWARD_SLASH$1,
  /* / */
  CHAR_LEFT_CURLY_BRACE: CHAR_LEFT_CURLY_BRACE$2,
  /* { */
  CHAR_LEFT_PARENTHESES: CHAR_LEFT_PARENTHESES$2,
  /* ( */
  CHAR_LEFT_SQUARE_BRACKET: CHAR_LEFT_SQUARE_BRACKET$2,
  /* [ */
  CHAR_PLUS: CHAR_PLUS$1,
  /* + */
  CHAR_QUESTION_MARK: CHAR_QUESTION_MARK$1,
  /* ? */
  CHAR_RIGHT_CURLY_BRACE: CHAR_RIGHT_CURLY_BRACE$2,
  /* } */
  CHAR_RIGHT_PARENTHESES: CHAR_RIGHT_PARENTHESES$2,
  /* ) */
  CHAR_RIGHT_SQUARE_BRACKET: CHAR_RIGHT_SQUARE_BRACKET$2
  /* ] */
} = constants$8;
var isPathSeparator$1 = (code) => {
  return code === CHAR_FORWARD_SLASH$1 || code === CHAR_BACKWARD_SLASH$1;
};
var depth$1 = (token) => {
  if (token.isPrefix !== true) {
    token.depth = token.isGlobstar ? Infinity : 1;
  }
};
var scan$3 = (input, options2) => {
  const opts = options2 || {};
  const length = input.length - 1;
  const scanToEnd = opts.parts === true || opts.scanToEnd === true;
  const slashes = [];
  const tokens = [];
  const parts = [];
  let str = input;
  let index = -1;
  let start = 0;
  let lastIndex = 0;
  let isBrace = false;
  let isBracket = false;
  let isGlob3 = false;
  let isExtglob3 = false;
  let isGlobstar = false;
  let braceEscaped = false;
  let backslashes = false;
  let negated = false;
  let negatedExtglob = false;
  let finished = false;
  let braces2 = 0;
  let prev;
  let code;
  let token = { value: "", depth: 0, isGlob: false };
  const eos = () => index >= length;
  const peek = () => str.charCodeAt(index + 1);
  const advance = () => {
    prev = code;
    return str.charCodeAt(++index);
  };
  while (index < length) {
    code = advance();
    let next;
    if (code === CHAR_BACKWARD_SLASH$1) {
      backslashes = token.backslashes = true;
      code = advance();
      if (code === CHAR_LEFT_CURLY_BRACE$2) {
        braceEscaped = true;
      }
      continue;
    }
    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE$2) {
      braces2++;
      while (eos() !== true && (code = advance())) {
        if (code === CHAR_BACKWARD_SLASH$1) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }
        if (code === CHAR_LEFT_CURLY_BRACE$2) {
          braces2++;
          continue;
        }
        if (braceEscaped !== true && code === CHAR_DOT$2 && (code = advance()) === CHAR_DOT$2) {
          isBrace = token.isBrace = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (braceEscaped !== true && code === CHAR_COMMA$2) {
          isBrace = token.isBrace = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_RIGHT_CURLY_BRACE$2) {
          braces2--;
          if (braces2 === 0) {
            braceEscaped = false;
            isBrace = token.isBrace = true;
            finished = true;
            break;
          }
        }
      }
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_FORWARD_SLASH$1) {
      slashes.push(index);
      tokens.push(token);
      token = { value: "", depth: 0, isGlob: false };
      if (finished === true) continue;
      if (prev === CHAR_DOT$2 && index === start + 1) {
        start += 2;
        continue;
      }
      lastIndex = index + 1;
      continue;
    }
    if (opts.noext !== true) {
      const isExtglobChar = code === CHAR_PLUS$1 || code === CHAR_AT$1 || code === CHAR_ASTERISK$1 || code === CHAR_QUESTION_MARK$1 || code === CHAR_EXCLAMATION_MARK$1;
      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES$2) {
        isGlob3 = token.isGlob = true;
        isExtglob3 = token.isExtglob = true;
        finished = true;
        if (code === CHAR_EXCLAMATION_MARK$1 && index === start) {
          negatedExtglob = true;
        }
        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH$1) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }
            if (code === CHAR_RIGHT_PARENTHESES$2) {
              isGlob3 = token.isGlob = true;
              finished = true;
              break;
            }
          }
          continue;
        }
        break;
      }
    }
    if (code === CHAR_ASTERISK$1) {
      if (prev === CHAR_ASTERISK$1) isGlobstar = token.isGlobstar = true;
      isGlob3 = token.isGlob = true;
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_QUESTION_MARK$1) {
      isGlob3 = token.isGlob = true;
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_LEFT_SQUARE_BRACKET$2) {
      while (eos() !== true && (next = advance())) {
        if (next === CHAR_BACKWARD_SLASH$1) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }
        if (next === CHAR_RIGHT_SQUARE_BRACKET$2) {
          isBracket = token.isBracket = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          break;
        }
      }
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK$1 && index === start) {
      negated = token.negated = true;
      start++;
      continue;
    }
    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES$2) {
      isGlob3 = token.isGlob = true;
      if (scanToEnd === true) {
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_LEFT_PARENTHESES$2) {
            backslashes = token.backslashes = true;
            code = advance();
            continue;
          }
          if (code === CHAR_RIGHT_PARENTHESES$2) {
            finished = true;
            break;
          }
        }
        continue;
      }
      break;
    }
    if (isGlob3 === true) {
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
  }
  if (opts.noext === true) {
    isExtglob3 = false;
    isGlob3 = false;
  }
  let base = str;
  let prefix = "";
  let glob = "";
  if (start > 0) {
    prefix = str.slice(0, start);
    str = str.slice(start);
    lastIndex -= start;
  }
  if (base && isGlob3 === true && lastIndex > 0) {
    base = str.slice(0, lastIndex);
    glob = str.slice(lastIndex);
  } else if (isGlob3 === true) {
    base = "";
    glob = str;
  } else {
    base = str;
  }
  if (base && base !== "" && base !== "/" && base !== str) {
    if (isPathSeparator$1(base.charCodeAt(base.length - 1))) {
      base = base.slice(0, -1);
    }
  }
  if (opts.unescape === true) {
    if (glob) glob = utils$c.removeBackslashes(glob);
    if (base && backslashes === true) {
      base = utils$c.removeBackslashes(base);
    }
  }
  const state = {
    prefix,
    input,
    start,
    base,
    glob,
    isBrace,
    isBracket,
    isGlob: isGlob3,
    isExtglob: isExtglob3,
    isGlobstar,
    negated,
    negatedExtglob
  };
  if (opts.tokens === true) {
    state.maxDepth = 0;
    if (!isPathSeparator$1(code)) {
      tokens.push(token);
    }
    state.tokens = tokens;
  }
  if (opts.parts === true || opts.tokens === true) {
    let prevIndex;
    for (let idx = 0; idx < slashes.length; idx++) {
      const n = prevIndex ? prevIndex + 1 : start;
      const i = slashes[idx];
      const value2 = input.slice(n, i);
      if (opts.tokens) {
        if (idx === 0 && start !== 0) {
          tokens[idx].isPrefix = true;
          tokens[idx].value = prefix;
        } else {
          tokens[idx].value = value2;
        }
        depth$1(tokens[idx]);
        state.maxDepth += tokens[idx].depth;
      }
      if (idx !== 0 || value2 !== "") {
        parts.push(value2);
      }
      prevIndex = i;
    }
    if (prevIndex && prevIndex + 1 < input.length) {
      const value2 = input.slice(prevIndex + 1);
      parts.push(value2);
      if (opts.tokens) {
        tokens[tokens.length - 1].value = value2;
        depth$1(tokens[tokens.length - 1]);
        state.maxDepth += tokens[tokens.length - 1].depth;
      }
    }
    state.slashes = slashes;
    state.parts = parts;
  }
  return state;
};
var scan_1$1 = scan$3;
var constants$7 = constants$8;
var utils$b = utils$d;
var {
  MAX_LENGTH: MAX_LENGTH$2,
  POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$2,
  REGEX_NON_SPECIAL_CHARS: REGEX_NON_SPECIAL_CHARS$1,
  REGEX_SPECIAL_CHARS_BACKREF: REGEX_SPECIAL_CHARS_BACKREF$1,
  REPLACEMENTS: REPLACEMENTS$1
} = constants$7;
var expandRange$1 = (args, options2) => {
  if (typeof options2.expandRange === "function") {
    return options2.expandRange(...args, options2);
  }
  args.sort();
  const value2 = `[${args.join("-")}]`;
  return value2;
};
var syntaxError$1 = (type, char) => {
  return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};
var parse$h = (input, options2) => {
  if (typeof input !== "string") {
    throw new TypeError("Expected a string");
  }
  input = REPLACEMENTS$1[input] || input;
  const opts = { ...options2 };
  const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH$2, opts.maxLength) : MAX_LENGTH$2;
  let len = input.length;
  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }
  const bos = { type: "bos", value: "", output: opts.prepend || "" };
  const tokens = [bos];
  const capture = opts.capture ? "" : "?:";
  const PLATFORM_CHARS = constants$7.globChars(opts.windows);
  const EXTGLOB_CHARS = constants$7.extglobChars(PLATFORM_CHARS);
  const {
    DOT_LITERAL: DOT_LITERAL2,
    PLUS_LITERAL: PLUS_LITERAL2,
    SLASH_LITERAL: SLASH_LITERAL2,
    ONE_CHAR: ONE_CHAR2,
    DOTS_SLASH: DOTS_SLASH2,
    NO_DOT: NO_DOT2,
    NO_DOT_SLASH: NO_DOT_SLASH2,
    NO_DOTS_SLASH: NO_DOTS_SLASH2,
    QMARK: QMARK2,
    QMARK_NO_DOT: QMARK_NO_DOT2,
    STAR: STAR2,
    START_ANCHOR: START_ANCHOR2
  } = PLATFORM_CHARS;
  const globstar = (opts2) => {
    return `(${capture}(?:(?!${START_ANCHOR2}${opts2.dot ? DOTS_SLASH2 : DOT_LITERAL2}).)*?)`;
  };
  const nodot = opts.dot ? "" : NO_DOT2;
  const qmarkNoDot = opts.dot ? QMARK2 : QMARK_NO_DOT2;
  let star = opts.bash === true ? globstar(opts) : STAR2;
  if (opts.capture) {
    star = `(${star})`;
  }
  if (typeof opts.noext === "boolean") {
    opts.noextglob = opts.noext;
  }
  const state = {
    input,
    index: -1,
    start: 0,
    dot: opts.dot === true,
    consumed: "",
    output: "",
    prefix: "",
    backtrack: false,
    negated: false,
    brackets: 0,
    braces: 0,
    parens: 0,
    quotes: 0,
    globstar: false,
    tokens
  };
  input = utils$b.removePrefix(input, state);
  len = input.length;
  const extglobs = [];
  const braces2 = [];
  const stack = [];
  let prev = bos;
  let value2;
  const eos = () => state.index === len - 1;
  const peek = state.peek = (n = 1) => input[state.index + n];
  const advance = state.advance = () => input[++state.index] || "";
  const remaining = () => input.slice(state.index + 1);
  const consume = (value3 = "", num = 0) => {
    state.consumed += value3;
    state.index += num;
  };
  const append2 = (token) => {
    state.output += token.output != null ? token.output : token.value;
    consume(token.value);
  };
  const negate = () => {
    let count = 1;
    while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
      advance();
      state.start++;
      count++;
    }
    if (count % 2 === 0) {
      return false;
    }
    state.negated = true;
    state.start++;
    return true;
  };
  const increment = (type) => {
    state[type]++;
    stack.push(type);
  };
  const decrement = (type) => {
    state[type]--;
    stack.pop();
  };
  const push2 = (tok) => {
    if (prev.type === "globstar") {
      const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
      const isExtglob3 = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
      if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob3) {
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = "star";
        prev.value = "*";
        prev.output = star;
        state.output += prev.output;
      }
    }
    if (extglobs.length && tok.type !== "paren") {
      extglobs[extglobs.length - 1].inner += tok.value;
    }
    if (tok.value || tok.output) append2(tok);
    if (prev && prev.type === "text" && tok.type === "text") {
      prev.output = (prev.output || prev.value) + tok.value;
      prev.value += tok.value;
      return;
    }
    tok.prev = prev;
    tokens.push(tok);
    prev = tok;
  };
  const extglobOpen = (type, value3) => {
    const token = { ...EXTGLOB_CHARS[value3], conditions: 1, inner: "" };
    token.prev = prev;
    token.parens = state.parens;
    token.output = state.output;
    const output = (opts.capture ? "(" : "") + token.open;
    increment("parens");
    push2({ type, value: value3, output: state.output ? "" : ONE_CHAR2 });
    push2({ type: "paren", extglob: true, value: advance(), output });
    extglobs.push(token);
  };
  const extglobClose = (token) => {
    let output = token.close + (opts.capture ? ")" : "");
    let rest;
    if (token.type === "negate") {
      let extglobStar = star;
      if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
        extglobStar = globstar(opts);
      }
      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
        output = token.close = `)$))${extglobStar}`;
      }
      if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
        const expression = parse$h(rest, { ...options2, fastpaths: false }).output;
        output = token.close = `)${expression})${extglobStar})`;
      }
      if (token.prev.type === "bos") {
        state.negatedExtglob = true;
      }
    }
    push2({ type: "paren", extglob: true, value: value2, output });
    decrement("parens");
  };
  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
    let backslashes = false;
    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF$1, (m, esc, chars3, first2, rest, index) => {
      if (first2 === "\\") {
        backslashes = true;
        return m;
      }
      if (first2 === "?") {
        if (esc) {
          return esc + first2 + (rest ? QMARK2.repeat(rest.length) : "");
        }
        if (index === 0) {
          return qmarkNoDot + (rest ? QMARK2.repeat(rest.length) : "");
        }
        return QMARK2.repeat(chars3.length);
      }
      if (first2 === ".") {
        return DOT_LITERAL2.repeat(chars3.length);
      }
      if (first2 === "*") {
        if (esc) {
          return esc + first2 + (rest ? star : "");
        }
        return star;
      }
      return esc ? m : `\\${m}`;
    });
    if (backslashes === true) {
      if (opts.unescape === true) {
        output = output.replace(/\\/g, "");
      } else {
        output = output.replace(/\\+/g, (m) => {
          return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
        });
      }
    }
    if (output === input && opts.contains === true) {
      state.output = input;
      return state;
    }
    state.output = utils$b.wrapOutput(output, state, options2);
    return state;
  }
  while (!eos()) {
    value2 = advance();
    if (value2 === "\0") {
      continue;
    }
    if (value2 === "\\") {
      const next = peek();
      if (next === "/" && opts.bash !== true) {
        continue;
      }
      if (next === "." || next === ";") {
        continue;
      }
      if (!next) {
        value2 += "\\";
        push2({ type: "text", value: value2 });
        continue;
      }
      const match = /^\\+/.exec(remaining());
      let slashes = 0;
      if (match && match[0].length > 2) {
        slashes = match[0].length;
        state.index += slashes;
        if (slashes % 2 !== 0) {
          value2 += "\\";
        }
      }
      if (opts.unescape === true) {
        value2 = advance();
      } else {
        value2 += advance();
      }
      if (state.brackets === 0) {
        push2({ type: "text", value: value2 });
        continue;
      }
    }
    if (state.brackets > 0 && (value2 !== "]" || prev.value === "[" || prev.value === "[^")) {
      if (opts.posix !== false && value2 === ":") {
        const inner = prev.value.slice(1);
        if (inner.includes("[")) {
          prev.posix = true;
          if (inner.includes(":")) {
            const idx = prev.value.lastIndexOf("[");
            const pre = prev.value.slice(0, idx);
            const rest2 = prev.value.slice(idx + 2);
            const posix2 = POSIX_REGEX_SOURCE$2[rest2];
            if (posix2) {
              prev.value = pre + posix2;
              state.backtrack = true;
              advance();
              if (!bos.output && tokens.indexOf(prev) === 1) {
                bos.output = ONE_CHAR2;
              }
              continue;
            }
          }
        }
      }
      if (value2 === "[" && peek() !== ":" || value2 === "-" && peek() === "]") {
        value2 = `\\${value2}`;
      }
      if (value2 === "]" && (prev.value === "[" || prev.value === "[^")) {
        value2 = `\\${value2}`;
      }
      if (opts.posix === true && value2 === "!" && prev.value === "[") {
        value2 = "^";
      }
      prev.value += value2;
      append2({ value: value2 });
      continue;
    }
    if (state.quotes === 1 && value2 !== '"') {
      value2 = utils$b.escapeRegex(value2);
      prev.value += value2;
      append2({ value: value2 });
      continue;
    }
    if (value2 === '"') {
      state.quotes = state.quotes === 1 ? 0 : 1;
      if (opts.keepQuotes === true) {
        push2({ type: "text", value: value2 });
      }
      continue;
    }
    if (value2 === "(") {
      increment("parens");
      push2({ type: "paren", value: value2 });
      continue;
    }
    if (value2 === ")") {
      if (state.parens === 0 && opts.strictBrackets === true) {
        throw new SyntaxError(syntaxError$1("opening", "("));
      }
      const extglob = extglobs[extglobs.length - 1];
      if (extglob && state.parens === extglob.parens + 1) {
        extglobClose(extglobs.pop());
        continue;
      }
      push2({ type: "paren", value: value2, output: state.parens ? ")" : "\\)" });
      decrement("parens");
      continue;
    }
    if (value2 === "[") {
      if (opts.nobracket === true || !remaining().includes("]")) {
        if (opts.nobracket !== true && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError$1("closing", "]"));
        }
        value2 = `\\${value2}`;
      } else {
        increment("brackets");
      }
      push2({ type: "bracket", value: value2 });
      continue;
    }
    if (value2 === "]") {
      if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
        push2({ type: "text", value: value2, output: `\\${value2}` });
        continue;
      }
      if (state.brackets === 0) {
        if (opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError$1("opening", "["));
        }
        push2({ type: "text", value: value2, output: `\\${value2}` });
        continue;
      }
      decrement("brackets");
      const prevValue = prev.value.slice(1);
      if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
        value2 = `/${value2}`;
      }
      prev.value += value2;
      append2({ value: value2 });
      if (opts.literalBrackets === false || utils$b.hasRegexChars(prevValue)) {
        continue;
      }
      const escaped2 = utils$b.escapeRegex(prev.value);
      state.output = state.output.slice(0, -prev.value.length);
      if (opts.literalBrackets === true) {
        state.output += escaped2;
        prev.value = escaped2;
        continue;
      }
      prev.value = `(${capture}${escaped2}|${prev.value})`;
      state.output += prev.value;
      continue;
    }
    if (value2 === "{" && opts.nobrace !== true) {
      increment("braces");
      const open = {
        type: "brace",
        value: value2,
        output: "(",
        outputIndex: state.output.length,
        tokensIndex: state.tokens.length
      };
      braces2.push(open);
      push2(open);
      continue;
    }
    if (value2 === "}") {
      const brace = braces2[braces2.length - 1];
      if (opts.nobrace === true || !brace) {
        push2({ type: "text", value: value2, output: value2 });
        continue;
      }
      let output = ")";
      if (brace.dots === true) {
        const arr = tokens.slice();
        const range = [];
        for (let i = arr.length - 1; i >= 0; i--) {
          tokens.pop();
          if (arr[i].type === "brace") {
            break;
          }
          if (arr[i].type !== "dots") {
            range.unshift(arr[i].value);
          }
        }
        output = expandRange$1(range, opts);
        state.backtrack = true;
      }
      if (brace.comma !== true && brace.dots !== true) {
        const out = state.output.slice(0, brace.outputIndex);
        const toks = state.tokens.slice(brace.tokensIndex);
        brace.value = brace.output = "\\{";
        value2 = output = "\\}";
        state.output = out;
        for (const t of toks) {
          state.output += t.output || t.value;
        }
      }
      push2({ type: "brace", value: value2, output });
      decrement("braces");
      braces2.pop();
      continue;
    }
    if (value2 === "|") {
      if (extglobs.length > 0) {
        extglobs[extglobs.length - 1].conditions++;
      }
      push2({ type: "text", value: value2 });
      continue;
    }
    if (value2 === ",") {
      let output = value2;
      const brace = braces2[braces2.length - 1];
      if (brace && stack[stack.length - 1] === "braces") {
        brace.comma = true;
        output = "|";
      }
      push2({ type: "comma", value: value2, output });
      continue;
    }
    if (value2 === "/") {
      if (prev.type === "dot" && state.index === state.start + 1) {
        state.start = state.index + 1;
        state.consumed = "";
        state.output = "";
        tokens.pop();
        prev = bos;
        continue;
      }
      push2({ type: "slash", value: value2, output: SLASH_LITERAL2 });
      continue;
    }
    if (value2 === ".") {
      if (state.braces > 0 && prev.type === "dot") {
        if (prev.value === ".") prev.output = DOT_LITERAL2;
        const brace = braces2[braces2.length - 1];
        prev.type = "dots";
        prev.output += value2;
        prev.value += value2;
        brace.dots = true;
        continue;
      }
      if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
        push2({ type: "text", value: value2, output: DOT_LITERAL2 });
        continue;
      }
      push2({ type: "dot", value: value2, output: DOT_LITERAL2 });
      continue;
    }
    if (value2 === "?") {
      const isGroup = prev && prev.value === "(";
      if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        extglobOpen("qmark", value2);
        continue;
      }
      if (prev && prev.type === "paren") {
        const next = peek();
        let output = value2;
        if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
          output = `\\${value2}`;
        }
        push2({ type: "text", value: value2, output });
        continue;
      }
      if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
        push2({ type: "qmark", value: value2, output: QMARK_NO_DOT2 });
        continue;
      }
      push2({ type: "qmark", value: value2, output: QMARK2 });
      continue;
    }
    if (value2 === "!") {
      if (opts.noextglob !== true && peek() === "(") {
        if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
          extglobOpen("negate", value2);
          continue;
        }
      }
      if (opts.nonegate !== true && state.index === 0) {
        negate();
        continue;
      }
    }
    if (value2 === "+") {
      if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        extglobOpen("plus", value2);
        continue;
      }
      if (prev && prev.value === "(" || opts.regex === false) {
        push2({ type: "plus", value: value2, output: PLUS_LITERAL2 });
        continue;
      }
      if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
        push2({ type: "plus", value: value2 });
        continue;
      }
      push2({ type: "plus", value: PLUS_LITERAL2 });
      continue;
    }
    if (value2 === "@") {
      if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        push2({ type: "at", extglob: true, value: value2, output: "" });
        continue;
      }
      push2({ type: "text", value: value2 });
      continue;
    }
    if (value2 !== "*") {
      if (value2 === "$" || value2 === "^") {
        value2 = `\\${value2}`;
      }
      const match = REGEX_NON_SPECIAL_CHARS$1.exec(remaining());
      if (match) {
        value2 += match[0];
        state.index += match[0].length;
      }
      push2({ type: "text", value: value2 });
      continue;
    }
    if (prev && (prev.type === "globstar" || prev.star === true)) {
      prev.type = "star";
      prev.star = true;
      prev.value += value2;
      prev.output = star;
      state.backtrack = true;
      state.globstar = true;
      consume(value2);
      continue;
    }
    let rest = remaining();
    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
      extglobOpen("star", value2);
      continue;
    }
    if (prev.type === "star") {
      if (opts.noglobstar === true) {
        consume(value2);
        continue;
      }
      const prior = prev.prev;
      const before = prior.prev;
      const isStart = prior.type === "slash" || prior.type === "bos";
      const afterStar = before && (before.type === "star" || before.type === "globstar");
      if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
        push2({ type: "star", value: value2, output: "" });
        continue;
      }
      const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
      const isExtglob3 = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
      if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob3) {
        push2({ type: "star", value: value2, output: "" });
        continue;
      }
      while (rest.slice(0, 3) === "/**") {
        const after = input[state.index + 4];
        if (after && after !== "/") {
          break;
        }
        rest = rest.slice(3);
        consume("/**", 3);
      }
      if (prior.type === "bos" && eos()) {
        prev.type = "globstar";
        prev.value += value2;
        prev.output = globstar(opts);
        state.output = prev.output;
        state.globstar = true;
        consume(value2);
        continue;
      }
      if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;
        prev.type = "globstar";
        prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
        prev.value += value2;
        state.globstar = true;
        state.output += prior.output + prev.output;
        consume(value2);
        continue;
      }
      if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
        const end = rest[1] !== void 0 ? "|$" : "";
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;
        prev.type = "globstar";
        prev.output = `${globstar(opts)}${SLASH_LITERAL2}|${SLASH_LITERAL2}${end})`;
        prev.value += value2;
        state.output += prior.output + prev.output;
        state.globstar = true;
        consume(value2 + advance());
        push2({ type: "slash", value: "/", output: "" });
        continue;
      }
      if (prior.type === "bos" && rest[0] === "/") {
        prev.type = "globstar";
        prev.value += value2;
        prev.output = `(?:^|${SLASH_LITERAL2}|${globstar(opts)}${SLASH_LITERAL2})`;
        state.output = prev.output;
        state.globstar = true;
        consume(value2 + advance());
        push2({ type: "slash", value: "/", output: "" });
        continue;
      }
      state.output = state.output.slice(0, -prev.output.length);
      prev.type = "globstar";
      prev.output = globstar(opts);
      prev.value += value2;
      state.output += prev.output;
      state.globstar = true;
      consume(value2);
      continue;
    }
    const token = { type: "star", value: value2, output: star };
    if (opts.bash === true) {
      token.output = ".*?";
      if (prev.type === "bos" || prev.type === "slash") {
        token.output = nodot + token.output;
      }
      push2(token);
      continue;
    }
    if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
      token.output = value2;
      push2(token);
      continue;
    }
    if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
      if (prev.type === "dot") {
        state.output += NO_DOT_SLASH2;
        prev.output += NO_DOT_SLASH2;
      } else if (opts.dot === true) {
        state.output += NO_DOTS_SLASH2;
        prev.output += NO_DOTS_SLASH2;
      } else {
        state.output += nodot;
        prev.output += nodot;
      }
      if (peek() !== "*") {
        state.output += ONE_CHAR2;
        prev.output += ONE_CHAR2;
      }
    }
    push2(token);
  }
  while (state.brackets > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError$1("closing", "]"));
    state.output = utils$b.escapeLast(state.output, "[");
    decrement("brackets");
  }
  while (state.parens > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError$1("closing", ")"));
    state.output = utils$b.escapeLast(state.output, "(");
    decrement("parens");
  }
  while (state.braces > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError$1("closing", "}"));
    state.output = utils$b.escapeLast(state.output, "{");
    decrement("braces");
  }
  if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
    push2({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL2}?` });
  }
  if (state.backtrack === true) {
    state.output = "";
    for (const token of state.tokens) {
      state.output += token.output != null ? token.output : token.value;
      if (token.suffix) {
        state.output += token.suffix;
      }
    }
  }
  return state;
};
parse$h.fastpaths = (input, options2) => {
  const opts = { ...options2 };
  const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH$2, opts.maxLength) : MAX_LENGTH$2;
  const len = input.length;
  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }
  input = REPLACEMENTS$1[input] || input;
  const {
    DOT_LITERAL: DOT_LITERAL2,
    SLASH_LITERAL: SLASH_LITERAL2,
    ONE_CHAR: ONE_CHAR2,
    DOTS_SLASH: DOTS_SLASH2,
    NO_DOT: NO_DOT2,
    NO_DOTS: NO_DOTS2,
    NO_DOTS_SLASH: NO_DOTS_SLASH2,
    STAR: STAR2,
    START_ANCHOR: START_ANCHOR2
  } = constants$7.globChars(opts.windows);
  const nodot = opts.dot ? NO_DOTS2 : NO_DOT2;
  const slashDot = opts.dot ? NO_DOTS_SLASH2 : NO_DOT2;
  const capture = opts.capture ? "" : "?:";
  const state = { negated: false, prefix: "" };
  let star = opts.bash === true ? ".*?" : STAR2;
  if (opts.capture) {
    star = `(${star})`;
  }
  const globstar = (opts2) => {
    if (opts2.noglobstar === true) return star;
    return `(${capture}(?:(?!${START_ANCHOR2}${opts2.dot ? DOTS_SLASH2 : DOT_LITERAL2}).)*?)`;
  };
  const create = (str) => {
    switch (str) {
      case "*":
        return `${nodot}${ONE_CHAR2}${star}`;
      case ".*":
        return `${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "*.*":
        return `${nodot}${star}${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "*/*":
        return `${nodot}${star}${SLASH_LITERAL2}${ONE_CHAR2}${slashDot}${star}`;
      case "**":
        return nodot + globstar(opts);
      case "**/*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${slashDot}${ONE_CHAR2}${star}`;
      case "**/*.*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${slashDot}${star}${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "**/.*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      default: {
        const match = /^(.*?)\.(\w+)$/.exec(str);
        if (!match) return;
        const source2 = create(match[1]);
        if (!source2) return;
        return source2 + DOT_LITERAL2 + match[2];
      }
    }
  };
  const output = utils$b.removePrefix(input, state);
  let source = create(output);
  if (source && opts.strictSlashes !== true) {
    source += `${SLASH_LITERAL2}?`;
  }
  return source;
};
var parse_1$4 = parse$h;
var scan$2 = scan_1$1;
var parse$g = parse_1$4;
var utils$a = utils$d;
var constants$6 = constants$8;
var isObject$4 = (val) => val && typeof val === "object" && !Array.isArray(val);
var picomatch$6 = (glob, options2, returnState = false) => {
  if (Array.isArray(glob)) {
    const fns = glob.map((input) => picomatch$6(input, options2, returnState));
    const arrayMatcher = (str) => {
      for (const isMatch of fns) {
        const state2 = isMatch(str);
        if (state2) return state2;
      }
      return false;
    };
    return arrayMatcher;
  }
  const isState = isObject$4(glob) && glob.tokens && glob.input;
  if (glob === "" || typeof glob !== "string" && !isState) {
    throw new TypeError("Expected pattern to be a non-empty string");
  }
  const opts = options2 || {};
  const posix2 = opts.windows;
  const regex = isState ? picomatch$6.compileRe(glob, options2) : picomatch$6.makeRe(glob, options2, false, true);
  const state = regex.state;
  delete regex.state;
  let isIgnored = () => false;
  if (opts.ignore) {
    const ignoreOpts = { ...options2, ignore: null, onMatch: null, onResult: null };
    isIgnored = picomatch$6(opts.ignore, ignoreOpts, returnState);
  }
  const matcher = (input, returnObject = false) => {
    const { isMatch, match, output } = picomatch$6.test(input, regex, options2, { glob, posix: posix2 });
    const result = { glob, state, regex, posix: posix2, input, output, match, isMatch };
    if (typeof opts.onResult === "function") {
      opts.onResult(result);
    }
    if (isMatch === false) {
      result.isMatch = false;
      return returnObject ? result : false;
    }
    if (isIgnored(input)) {
      if (typeof opts.onIgnore === "function") {
        opts.onIgnore(result);
      }
      result.isMatch = false;
      return returnObject ? result : false;
    }
    if (typeof opts.onMatch === "function") {
      opts.onMatch(result);
    }
    return returnObject ? result : true;
  };
  if (returnState) {
    matcher.state = state;
  }
  return matcher;
};
picomatch$6.test = (input, regex, options2, { glob, posix: posix2 } = {}) => {
  if (typeof input !== "string") {
    throw new TypeError("Expected input to be a string");
  }
  if (input === "") {
    return { isMatch: false, output: "" };
  }
  const opts = options2 || {};
  const format2 = opts.format || (posix2 ? utils$a.toPosixSlashes : null);
  let match = input === glob;
  let output = match && format2 ? format2(input) : input;
  if (match === false) {
    output = format2 ? format2(input) : input;
    match = output === glob;
  }
  if (match === false || opts.capture === true) {
    if (opts.matchBase === true || opts.basename === true) {
      match = picomatch$6.matchBase(input, regex, options2, posix2);
    } else {
      match = regex.exec(output);
    }
  }
  return { isMatch: Boolean(match), match, output };
};
picomatch$6.matchBase = (input, glob, options2) => {
  const regex = glob instanceof RegExp ? glob : picomatch$6.makeRe(glob, options2);
  return regex.test(utils$a.basename(input));
};
picomatch$6.isMatch = (str, patterns, options2) => picomatch$6(patterns, options2)(str);
picomatch$6.parse = (pattern, options2) => {
  if (Array.isArray(pattern)) return pattern.map((p2) => picomatch$6.parse(p2, options2));
  return parse$g(pattern, { ...options2, fastpaths: false });
};
picomatch$6.scan = (input, options2) => scan$2(input, options2);
picomatch$6.compileRe = (state, options2, returnOutput = false, returnState = false) => {
  if (returnOutput === true) {
    return state.output;
  }
  const opts = options2 || {};
  const prepend = opts.contains ? "" : "^";
  const append2 = opts.contains ? "" : "$";
  let source = `${prepend}(?:${state.output})${append2}`;
  if (state && state.negated === true) {
    source = `^(?!${source}).*$`;
  }
  const regex = picomatch$6.toRegex(source, options2);
  if (returnState === true) {
    regex.state = state;
  }
  return regex;
};
picomatch$6.makeRe = (input, options2 = {}, returnOutput = false, returnState = false) => {
  if (!input || typeof input !== "string") {
    throw new TypeError("Expected a non-empty string");
  }
  let parsed = { negated: false, fastpaths: true };
  if (options2.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
    parsed.output = parse$g.fastpaths(input, options2);
  }
  if (!parsed.output) {
    parsed = parse$g(input, options2);
  }
  return picomatch$6.compileRe(parsed, options2, returnOutput, returnState);
};
picomatch$6.toRegex = (source, options2) => {
  try {
    const opts = options2 || {};
    return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
  } catch (err) {
    if (options2 && options2.debug === true) throw err;
    return /$^/;
  }
};
picomatch$6.constants = constants$6;
var picomatch_1$2 = picomatch$6;
var pico = picomatch_1$2;
var utils$9 = utils$d;
function picomatch$4(glob, options2, returnState = false) {
  if (options2 && (options2.windows === null || options2.windows === void 0)) {
    options2 = { ...options2, windows: utils$9.isWindows() };
  }
  return pico(glob, options2, returnState);
}
Object.assign(picomatch$4, pico);
var picomatch_1$1 = picomatch$4;
var picomatch$5 = getDefaultExportFromCjs(picomatch_1$1);
var VALID_ID_PREFIX = `/@id/`;
var SOURCEMAPPING_URL2 = "sourceMa";
SOURCEMAPPING_URL2 += "ppingURL";
var isWindows$3 = typeof process !== "undefined" && process.platform === "win32";
var windowsSlashRE = /\\/g;
function slash$1(p2) {
  return p2.replace(windowsSlashRE, "/");
}
var postfixRE = /[?#].*$/;
function cleanUrl(url2) {
  return url2.replace(postfixRE, "");
}
function isArray(arg) {
  return Array.isArray(arg);
}
function ensureArray(thing) {
  if (isArray(thing))
    return thing;
  if (thing == null)
    return [];
  return [thing];
}
var normalizePathRegExp = new RegExp(`\\${import_path.win32.sep}`, "g");
var normalizePath$6 = function normalizePath(filename) {
  return filename.replace(normalizePathRegExp, import_path.posix.sep);
};
function getMatcherString(id, resolutionBase) {
  if (resolutionBase === false || (0, import_path.isAbsolute)(id) || id.startsWith("**")) {
    return normalizePath$6(id);
  }
  const basePath = normalizePath$6((0, import_path.resolve)(resolutionBase || "")).replace(/[-^$*+?.()|[\]{}]/g, "\\$&");
  return import_path.posix.join(basePath, normalizePath$6(id));
}
var createFilter$1 = function createFilter(include, exclude, options2) {
  const resolutionBase = options2 && options2.resolve;
  const getMatcher = (id) => id instanceof RegExp ? id : {
    test: (what) => {
      const pattern = getMatcherString(id, resolutionBase);
      const fn = picomatch$5(pattern, { dot: true });
      const result = fn(what);
      return result;
    }
  };
  const includeMatchers = ensureArray(include).map(getMatcher);
  const excludeMatchers = ensureArray(exclude).map(getMatcher);
  if (!includeMatchers.length && !excludeMatchers.length)
    return (id) => typeof id === "string" && !id.includes("\0");
  return function result(id) {
    if (typeof id !== "string")
      return false;
    if (id.includes("\0"))
      return false;
    const pathId = normalizePath$6(id);
    for (let i = 0; i < excludeMatchers.length; ++i) {
      const matcher = excludeMatchers[i];
      if (matcher instanceof RegExp) {
        matcher.lastIndex = 0;
      }
      if (matcher.test(pathId))
        return false;
    }
    for (let i = 0; i < includeMatchers.length; ++i) {
      const matcher = includeMatchers[i];
      if (matcher instanceof RegExp) {
        matcher.lastIndex = 0;
      }
      if (matcher.test(pathId))
        return true;
    }
    return !includeMatchers.length;
  };
};
var reservedWords = "break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public";
var builtins = "arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl";
var forbiddenIdentifiers = new Set(`${reservedWords} ${builtins}`.split(" "));
forbiddenIdentifiers.add("");
var hasStringIsWellFormed = "isWellFormed" in String.prototype;
var path$c = import_path.default;
var commondir = function(basedir, relfiles) {
  if (relfiles) {
    var files = relfiles.map(function(r) {
      return path$c.resolve(basedir, r);
    });
  } else {
    var files = basedir;
  }
  var res = files.slice(1).reduce(function(ps, file) {
    if (!file.match(/^([A-Za-z]:)?\/|\\/)) {
      throw new Error("relative path without a basedir");
    }
    var xs = file.split(/\/+|\\+/);
    for (var i = 0; ps[i] === xs[i] && i < Math.min(ps.length, xs.length); i++) ;
    return ps.slice(0, i);
  }, files[0].split(/\/+|\\+/));
  return res.length > 1 ? res.join("/") : "/";
};
var getCommonDir = getDefaultExportFromCjs(commondir);
var dist = {};
var builder = {};
var apiBuilder = {};
var async = {};
var walker = {};
var utils$8 = {};
Object.defineProperty(utils$8, "__esModule", { value: true });
utils$8.normalizePath = utils$8.convertSlashes = utils$8.cleanPath = void 0;
var path_1$4 = import_path.default;
function cleanPath(path3) {
  let normalized = (0, path_1$4.normalize)(path3);
  if (normalized.length > 1 && normalized[normalized.length - 1] === path_1$4.sep)
    normalized = normalized.substring(0, normalized.length - 1);
  return normalized;
}
utils$8.cleanPath = cleanPath;
var SLASHES_REGEX = /[\\/]/g;
function convertSlashes(path3, separator) {
  return path3.replace(SLASHES_REGEX, separator);
}
utils$8.convertSlashes = convertSlashes;
function normalizePath$5(path3, options2) {
  const { resolvePaths, normalizePath: normalizePath3, pathSeparator } = options2;
  const pathNeedsCleaning = process.platform === "win32" && path3.includes("/") || path3.startsWith(".");
  if (resolvePaths)
    path3 = (0, path_1$4.resolve)(path3);
  if (normalizePath3 || pathNeedsCleaning)
    path3 = cleanPath(path3);
  if (path3 === ".")
    return "";
  const needsSeperator = path3[path3.length - 1] !== pathSeparator;
  return convertSlashes(needsSeperator ? path3 + pathSeparator : path3, pathSeparator);
}
utils$8.normalizePath = normalizePath$5;
var joinPath$2 = {};
Object.defineProperty(joinPath$2, "__esModule", { value: true });
joinPath$2.build = joinPath$2.joinDirectoryPath = joinPath$2.joinPathWithBasePath = void 0;
var path_1$3 = import_path.default;
var utils_1$1 = utils$8;
function joinPathWithBasePath(filename, directoryPath) {
  return directoryPath + filename;
}
joinPath$2.joinPathWithBasePath = joinPathWithBasePath;
function joinPathWithRelativePath(root, options2) {
  return function(filename, directoryPath) {
    const sameRoot = directoryPath.startsWith(root);
    if (sameRoot)
      return directoryPath.replace(root, "") + filename;
    else
      return (0, utils_1$1.convertSlashes)((0, path_1$3.relative)(root, directoryPath), options2.pathSeparator) + options2.pathSeparator + filename;
  };
}
function joinPath$1(filename) {
  return filename;
}
function joinDirectoryPath(filename, directoryPath, separator) {
  return directoryPath + filename + separator;
}
joinPath$2.joinDirectoryPath = joinDirectoryPath;
function build$a(root, options2) {
  const { relativePaths, includeBasePath } = options2;
  return relativePaths && root ? joinPathWithRelativePath(root, options2) : includeBasePath ? joinPathWithBasePath : joinPath$1;
}
joinPath$2.build = build$a;
var pushDirectory$2 = {};
Object.defineProperty(pushDirectory$2, "__esModule", { value: true });
pushDirectory$2.build = void 0;
function pushDirectoryWithRelativePath(root) {
  return function(directoryPath, paths) {
    paths.push(directoryPath.substring(root.length) || ".");
  };
}
function pushDirectoryFilterWithRelativePath(root) {
  return function(directoryPath, paths, filters) {
    const relativePath = directoryPath.substring(root.length) || ".";
    if (filters.every((filter2) => filter2(relativePath, true))) {
      paths.push(relativePath);
    }
  };
}
var pushDirectory$1 = (directoryPath, paths) => {
  paths.push(directoryPath || ".");
};
var pushDirectoryFilter = (directoryPath, paths, filters) => {
  const path3 = directoryPath || ".";
  if (filters.every((filter2) => filter2(path3, true))) {
    paths.push(path3);
  }
};
var empty$2 = () => {
};
function build$9(root, options2) {
  const { includeDirs, filters, relativePaths } = options2;
  if (!includeDirs)
    return empty$2;
  if (relativePaths)
    return filters && filters.length ? pushDirectoryFilterWithRelativePath(root) : pushDirectoryWithRelativePath(root);
  return filters && filters.length ? pushDirectoryFilter : pushDirectory$1;
}
pushDirectory$2.build = build$9;
var pushFile$2 = {};
Object.defineProperty(pushFile$2, "__esModule", { value: true });
pushFile$2.build = void 0;
var pushFileFilterAndCount = (filename, _paths, counts, filters) => {
  if (filters.every((filter2) => filter2(filename, false)))
    counts.files++;
};
var pushFileFilter = (filename, paths, _counts, filters) => {
  if (filters.every((filter2) => filter2(filename, false)))
    paths.push(filename);
};
var pushFileCount = (_filename, _paths, counts, _filters) => {
  counts.files++;
};
var pushFile$1 = (filename, paths) => {
  paths.push(filename);
};
var empty$1 = () => {
};
function build$8(options2) {
  const { excludeFiles, filters, onlyCounts } = options2;
  if (excludeFiles)
    return empty$1;
  if (filters && filters.length) {
    return onlyCounts ? pushFileFilterAndCount : pushFileFilter;
  } else if (onlyCounts) {
    return pushFileCount;
  } else {
    return pushFile$1;
  }
}
pushFile$2.build = build$8;
var getArray$2 = {};
Object.defineProperty(getArray$2, "__esModule", { value: true });
getArray$2.build = void 0;
var getArray$1 = (paths) => {
  return paths;
};
var getArrayGroup = () => {
  return [""].slice(0, 0);
};
function build$7(options2) {
  return options2.group ? getArrayGroup : getArray$1;
}
getArray$2.build = build$7;
var groupFiles$2 = {};
Object.defineProperty(groupFiles$2, "__esModule", { value: true });
groupFiles$2.build = void 0;
var groupFiles$1 = (groups2, directory, files) => {
  groups2.push({ directory, files, dir: directory });
};
var empty = () => {
};
function build$6(options2) {
  return options2.group ? groupFiles$1 : empty;
}
groupFiles$2.build = build$6;
var resolveSymlink$1 = {};
var __importDefault$1 = resolveSymlink$1 && resolveSymlink$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(resolveSymlink$1, "__esModule", { value: true });
resolveSymlink$1.build = void 0;
var fs_1$1 = __importDefault$1(import_fs.default);
var path_1$2 = import_path.default;
var resolveSymlinksAsync = function(path3, state, callback2) {
  const { queue: queue2, options: { suppressErrors } } = state;
  queue2.enqueue();
  fs_1$1.default.realpath(path3, (error, resolvedPath) => {
    if (error)
      return queue2.dequeue(suppressErrors ? null : error, state);
    fs_1$1.default.stat(resolvedPath, (error2, stat2) => {
      if (error2)
        return queue2.dequeue(suppressErrors ? null : error2, state);
      if (stat2.isDirectory() && isRecursive(path3, resolvedPath, state))
        return queue2.dequeue(null, state);
      callback2(stat2, resolvedPath);
      queue2.dequeue(null, state);
    });
  });
};
var resolveSymlinks = function(path3, state, callback2) {
  const { queue: queue2, options: { suppressErrors } } = state;
  queue2.enqueue();
  try {
    const resolvedPath = fs_1$1.default.realpathSync(path3);
    const stat2 = fs_1$1.default.statSync(resolvedPath);
    if (stat2.isDirectory() && isRecursive(path3, resolvedPath, state))
      return;
    callback2(stat2, resolvedPath);
  } catch (e) {
    if (!suppressErrors)
      throw e;
  }
};
function build$5(options2, isSynchronous) {
  if (!options2.resolveSymlinks || options2.excludeSymlinks)
    return null;
  return isSynchronous ? resolveSymlinks : resolveSymlinksAsync;
}
resolveSymlink$1.build = build$5;
function isRecursive(path3, resolved, state) {
  if (state.options.useRealPaths)
    return isRecursiveUsingRealPaths(resolved, state);
  let parent = (0, path_1$2.dirname)(path3);
  let depth2 = 1;
  while (parent !== state.root && depth2 < 2) {
    const resolvedPath = state.symlinks.get(parent);
    const isSameRoot = !!resolvedPath && (resolvedPath === resolved || resolvedPath.startsWith(resolved) || resolved.startsWith(resolvedPath));
    if (isSameRoot)
      depth2++;
    else
      parent = (0, path_1$2.dirname)(parent);
  }
  state.symlinks.set(path3, resolved);
  return depth2 > 1;
}
function isRecursiveUsingRealPaths(resolved, state) {
  return state.visited.includes(resolved + state.options.pathSeparator);
}
var invokeCallback$1 = {};
Object.defineProperty(invokeCallback$1, "__esModule", { value: true });
invokeCallback$1.build = void 0;
var onlyCountsSync = (state) => {
  return state.counts;
};
var groupsSync = (state) => {
  return state.groups;
};
var defaultSync = (state) => {
  return state.paths;
};
var limitFilesSync = (state) => {
  return state.paths.slice(0, state.options.maxFiles);
};
var onlyCountsAsync = (state, error, callback2) => {
  report(error, callback2, state.counts, state.options.suppressErrors);
  return null;
};
var defaultAsync = (state, error, callback2) => {
  report(error, callback2, state.paths, state.options.suppressErrors);
  return null;
};
var limitFilesAsync = (state, error, callback2) => {
  report(error, callback2, state.paths.slice(0, state.options.maxFiles), state.options.suppressErrors);
  return null;
};
var groupsAsync = (state, error, callback2) => {
  report(error, callback2, state.groups, state.options.suppressErrors);
  return null;
};
function report(error, callback2, output, suppressErrors) {
  if (error && !suppressErrors)
    callback2(error, output);
  else
    callback2(null, output);
}
function build$4(options2, isSynchronous) {
  const { onlyCounts, group, maxFiles } = options2;
  if (onlyCounts)
    return isSynchronous ? onlyCountsSync : onlyCountsAsync;
  else if (group)
    return isSynchronous ? groupsSync : groupsAsync;
  else if (maxFiles)
    return isSynchronous ? limitFilesSync : limitFilesAsync;
  else
    return isSynchronous ? defaultSync : defaultAsync;
}
invokeCallback$1.build = build$4;
var walkDirectory$1 = {};
var __importDefault = walkDirectory$1 && walkDirectory$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(walkDirectory$1, "__esModule", { value: true });
walkDirectory$1.build = void 0;
var fs_1 = __importDefault(import_fs.default);
var readdirOpts = { withFileTypes: true };
var walkAsync = (state, crawlPath, directoryPath, currentDepth, callback2) => {
  if (currentDepth < 0)
    return state.queue.dequeue(null, state);
  state.visited.push(crawlPath);
  state.counts.directories++;
  state.queue.enqueue();
  fs_1.default.readdir(crawlPath || ".", readdirOpts, (error, entries = []) => {
    callback2(entries, directoryPath, currentDepth);
    state.queue.dequeue(state.options.suppressErrors ? null : error, state);
  });
};
var walkSync = (state, crawlPath, directoryPath, currentDepth, callback2) => {
  if (currentDepth < 0)
    return;
  state.visited.push(crawlPath);
  state.counts.directories++;
  let entries = [];
  try {
    entries = fs_1.default.readdirSync(crawlPath || ".", readdirOpts);
  } catch (e) {
    if (!state.options.suppressErrors)
      throw e;
  }
  callback2(entries, directoryPath, currentDepth);
};
function build$3(isSynchronous) {
  return isSynchronous ? walkSync : walkAsync;
}
walkDirectory$1.build = build$3;
var queue = {};
Object.defineProperty(queue, "__esModule", { value: true });
queue.Queue = void 0;
var Queue = class {
  constructor(onQueueEmpty) {
    __publicField(this, "onQueueEmpty");
    __publicField(this, "count", 0);
    this.onQueueEmpty = onQueueEmpty;
  }
  enqueue() {
    this.count++;
  }
  dequeue(error, output) {
    if (--this.count <= 0 || error)
      this.onQueueEmpty(error, output);
  }
};
queue.Queue = Queue;
var counter = {};
Object.defineProperty(counter, "__esModule", { value: true });
counter.Counter = void 0;
var Counter = class {
  constructor() {
    __publicField(this, "_files", 0);
    __publicField(this, "_directories", 0);
  }
  set files(num) {
    this._files = num;
  }
  get files() {
    return this._files;
  }
  set directories(num) {
    this._directories = num;
  }
  get directories() {
    return this._directories;
  }
  /**
   * @deprecated use `directories` instead
   */
  /* c8 ignore next 3 */
  get dirs() {
    return this._directories;
  }
};
counter.Counter = Counter;
var __createBinding = walker && walker.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = walker && walker.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = walker && walker.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(walker, "__esModule", { value: true });
walker.Walker = void 0;
var path_1$1 = import_path.default;
var utils_1 = utils$8;
var joinPath = __importStar(joinPath$2);
var pushDirectory = __importStar(pushDirectory$2);
var pushFile = __importStar(pushFile$2);
var getArray = __importStar(getArray$2);
var groupFiles = __importStar(groupFiles$2);
var resolveSymlink = __importStar(resolveSymlink$1);
var invokeCallback = __importStar(invokeCallback$1);
var walkDirectory = __importStar(walkDirectory$1);
var queue_1 = queue;
var counter_1 = counter;
var Walker = class {
  constructor(root, options2, callback2) {
    __publicField(this, "root");
    __publicField(this, "isSynchronous");
    __publicField(this, "state");
    __publicField(this, "joinPath");
    __publicField(this, "pushDirectory");
    __publicField(this, "pushFile");
    __publicField(this, "getArray");
    __publicField(this, "groupFiles");
    __publicField(this, "resolveSymlink");
    __publicField(this, "walkDirectory");
    __publicField(this, "callbackInvoker");
    __publicField(this, "walk", (entries, directoryPath, depth2) => {
      const { paths, options: { filters, resolveSymlinks: resolveSymlinks2, excludeSymlinks, exclude, maxFiles, signal, useRealPaths, pathSeparator } } = this.state;
      if (signal && signal.aborted || maxFiles && paths.length > maxFiles)
        return;
      this.pushDirectory(directoryPath, paths, filters);
      const files = this.getArray(this.state.paths);
      for (let i = 0; i < entries.length; ++i) {
        const entry = entries[i];
        if (entry.isFile() || entry.isSymbolicLink() && !resolveSymlinks2 && !excludeSymlinks) {
          const filename = this.joinPath(entry.name, directoryPath);
          this.pushFile(filename, files, this.state.counts, filters);
        } else if (entry.isDirectory()) {
          let path3 = joinPath.joinDirectoryPath(entry.name, directoryPath, this.state.options.pathSeparator);
          if (exclude && exclude(entry.name, path3))
            continue;
          this.walkDirectory(this.state, path3, path3, depth2 - 1, this.walk);
        } else if (entry.isSymbolicLink() && this.resolveSymlink) {
          let path3 = joinPath.joinPathWithBasePath(entry.name, directoryPath);
          this.resolveSymlink(path3, this.state, (stat2, resolvedPath) => {
            if (stat2.isDirectory()) {
              resolvedPath = (0, utils_1.normalizePath)(resolvedPath, this.state.options);
              if (exclude && exclude(entry.name, useRealPaths ? resolvedPath : path3 + pathSeparator))
                return;
              this.walkDirectory(this.state, resolvedPath, useRealPaths ? resolvedPath : path3 + pathSeparator, depth2 - 1, this.walk);
            } else {
              resolvedPath = useRealPaths ? resolvedPath : path3;
              const filename = (0, path_1$1.basename)(resolvedPath);
              const directoryPath2 = (0, utils_1.normalizePath)((0, path_1$1.dirname)(resolvedPath), this.state.options);
              resolvedPath = this.joinPath(filename, directoryPath2);
              this.pushFile(resolvedPath, files, this.state.counts, filters);
            }
          });
        }
      }
      this.groupFiles(this.state.groups, directoryPath, files);
    });
    this.isSynchronous = !callback2;
    this.callbackInvoker = invokeCallback.build(options2, this.isSynchronous);
    this.root = (0, utils_1.normalizePath)(root, options2);
    this.state = {
      root: this.root.slice(0, -1),
      // Perf: we explicitly tell the compiler to optimize for String arrays
      paths: [""].slice(0, 0),
      groups: [],
      counts: new counter_1.Counter(),
      options: options2,
      queue: new queue_1.Queue((error, state) => this.callbackInvoker(state, error, callback2)),
      symlinks: /* @__PURE__ */ new Map(),
      visited: [""].slice(0, 0)
    };
    this.joinPath = joinPath.build(this.root, options2);
    this.pushDirectory = pushDirectory.build(this.root, options2);
    this.pushFile = pushFile.build(options2);
    this.getArray = getArray.build(options2);
    this.groupFiles = groupFiles.build(options2);
    this.resolveSymlink = resolveSymlink.build(options2, this.isSynchronous);
    this.walkDirectory = walkDirectory.build(this.isSynchronous);
  }
  start() {
    this.walkDirectory(this.state, this.root, this.root, this.state.options.maxDepth, this.walk);
    return this.isSynchronous ? this.callbackInvoker(this.state, null) : null;
  }
};
walker.Walker = Walker;
Object.defineProperty(async, "__esModule", { value: true });
async.callback = async.promise = void 0;
var walker_1$1 = walker;
function promise(root, options2) {
  return new Promise((resolve3, reject) => {
    callback(root, options2, (err, output) => {
      if (err)
        return reject(err);
      resolve3(output);
    });
  });
}
async.promise = promise;
function callback(root, options2, callback2) {
  let walker2 = new walker_1$1.Walker(root, options2, callback2);
  walker2.start();
}
async.callback = callback;
var sync$2 = {};
Object.defineProperty(sync$2, "__esModule", { value: true });
sync$2.sync = void 0;
var walker_1 = walker;
function sync$1(root, options2) {
  const walker2 = new walker_1.Walker(root, options2);
  return walker2.start();
}
sync$2.sync = sync$1;
Object.defineProperty(apiBuilder, "__esModule", { value: true });
apiBuilder.APIBuilder = void 0;
var async_1 = async;
var sync_1 = sync$2;
var APIBuilder = class {
  constructor(root, options2) {
    __publicField(this, "root");
    __publicField(this, "options");
    this.root = root;
    this.options = options2;
  }
  withPromise() {
    return (0, async_1.promise)(this.root, this.options);
  }
  withCallback(cb) {
    (0, async_1.callback)(this.root, this.options, cb);
  }
  sync() {
    return (0, sync_1.sync)(this.root, this.options);
  }
};
apiBuilder.APIBuilder = APIBuilder;
Object.defineProperty(builder, "__esModule", { value: true });
builder.Builder = void 0;
var path_1 = import_path.default;
var api_builder_1 = apiBuilder;
var pm = null;
try {
  __require.resolve("picomatch");
  pm = picomatch_1$1;
} catch (_e) {
}
var Builder = class {
  constructor(options2) {
    __publicField(this, "globCache", {});
    __publicField(this, "options", {
      maxDepth: Infinity,
      suppressErrors: true,
      pathSeparator: path_1.sep,
      filters: []
    });
    __publicField(this, "globFunction");
    this.options = { ...this.options, ...options2 };
    this.globFunction = this.options.globFunction;
  }
  group() {
    this.options.group = true;
    return this;
  }
  withPathSeparator(separator) {
    this.options.pathSeparator = separator;
    return this;
  }
  withBasePath() {
    this.options.includeBasePath = true;
    return this;
  }
  withRelativePaths() {
    this.options.relativePaths = true;
    return this;
  }
  withDirs() {
    this.options.includeDirs = true;
    return this;
  }
  withMaxDepth(depth2) {
    this.options.maxDepth = depth2;
    return this;
  }
  withMaxFiles(limit) {
    this.options.maxFiles = limit;
    return this;
  }
  withFullPaths() {
    this.options.resolvePaths = true;
    this.options.includeBasePath = true;
    return this;
  }
  withErrors() {
    this.options.suppressErrors = false;
    return this;
  }
  withSymlinks({ resolvePaths = true } = {}) {
    this.options.resolveSymlinks = true;
    this.options.useRealPaths = resolvePaths;
    return this.withFullPaths();
  }
  withAbortSignal(signal) {
    this.options.signal = signal;
    return this;
  }
  normalize() {
    this.options.normalizePath = true;
    return this;
  }
  filter(predicate) {
    this.options.filters.push(predicate);
    return this;
  }
  onlyDirs() {
    this.options.excludeFiles = true;
    this.options.includeDirs = true;
    return this;
  }
  exclude(predicate) {
    this.options.exclude = predicate;
    return this;
  }
  onlyCounts() {
    this.options.onlyCounts = true;
    return this;
  }
  crawl(root) {
    return new api_builder_1.APIBuilder(root || ".", this.options);
  }
  withGlobFunction(fn) {
    this.globFunction = fn;
    return this;
  }
  /**
   * @deprecated Pass options using the constructor instead:
   * ```ts
   * new fdir(options).crawl("/path/to/root");
   * ```
   * This method will be removed in v7.0
   */
  /* c8 ignore next 4 */
  crawlWithOptions(root, options2) {
    this.options = { ...this.options, ...options2 };
    return new api_builder_1.APIBuilder(root || ".", this.options);
  }
  glob(...patterns) {
    if (this.globFunction) {
      return this.globWithOptions(patterns);
    }
    return this.globWithOptions(patterns, ...[{ dot: true }]);
  }
  globWithOptions(patterns, ...options2) {
    const globFn = this.globFunction || pm;
    if (!globFn) {
      throw new Error("Please specify a glob function to use glob matching.");
    }
    var isMatch = this.globCache[patterns.join("\0")];
    if (!isMatch) {
      isMatch = globFn(patterns, ...options2);
      this.globCache[patterns.join("\0")] = isMatch;
    }
    this.options.filters.push((path3) => isMatch(path3));
    return this;
  }
};
builder.Builder = Builder;
var types = {};
Object.defineProperty(types, "__esModule", { value: true });
(function(exports) {
  var __createBinding2 = dist && dist.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = dist && dist.__exportStar || function(m, exports2) {
    for (var p2 in m) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding2(exports2, m, p2);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.fdir = void 0;
  const builder_1 = builder;
  Object.defineProperty(exports, "fdir", { enumerable: true, get: function() {
    return builder_1.Builder;
  } });
  __exportStar(types, exports);
})(dist);
var comma = ",".charCodeAt(0);
var semicolon = ";".charCodeAt(0);
var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar2 = new Uint8Array(64);
var charToInt2 = new Uint8Array(128);
for (let i = 0; i < chars$1.length; i++) {
  const c = chars$1.charCodeAt(i);
  intToChar2[i] = c;
  charToInt2[c] = i;
}
var bufLength = 1024 * 16;
var td = typeof TextDecoder !== "undefined" ? new TextDecoder() : typeof Buffer !== "undefined" ? {
  decode(buf) {
    const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
    return out.toString();
  }
} : {
  decode(buf) {
    let out = "";
    for (let i = 0; i < buf.length; i++) {
      out += String.fromCharCode(buf[i]);
    }
    return out;
  }
};
function getBtoa() {
  if (typeof globalThis !== "undefined" && typeof globalThis.btoa === "function") {
    return (str) => globalThis.btoa(unescape(encodeURIComponent(str)));
  } else if (typeof Buffer === "function") {
    return (str) => Buffer.from(str, "utf-8").toString("base64");
  } else {
    return () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
  }
}
var btoa$1 = getBtoa();
var SOURCELESS_MAPPING = SegmentObject("", -1, -1, "", null, false);
function SegmentObject(source, line, column, name, content, ignore) {
  return { source, line, column, name, content, ignore };
}
var src$3 = { exports: {} };
var browser$1 = { exports: {} };
var ms$1;
var hasRequiredMs$1;
function requireMs$1() {
  if (hasRequiredMs$1) return ms$1;
  hasRequiredMs$1 = 1;
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  ms$1 = function(val, options2) {
    options2 = options2 || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse3(val);
    } else if (type === "number" && isFinite(val)) {
      return options2.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse3(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms2 / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms2 / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms2 / s) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return plural(ms2, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms2, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms2, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms2, msAbs, s, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms2 / n) + " " + name + (isPlural ? "s" : "");
  }
  return ms$1;
}
var common$4;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common$4;
  hasRequiredCommon = 1;
  function setup(env2) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = requireMs$1();
    createDebug.destroy = destroy2;
    Object.keys(env2).forEach((key) => {
      createDebug[key] = env2[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
      let hash2 = 0;
      for (let i = 0; i < namespace.length; i++) {
        hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
        hash2 |= 0;
      }
      return createDebug.colors[Math.abs(hash2) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug2(...args) {
        if (!debug2.enabled) {
          return;
        }
        const self2 = debug2;
        const curr = Number(/* @__PURE__ */ new Date());
        const ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format2) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter2 = createDebug.formatters[format2];
          if (typeof formatter2 === "function") {
            const val = args[index];
            match = formatter2.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug.formatArgs.call(self2, args);
        const logFn = self2.log || createDebug.log;
        logFn.apply(self2, args);
      }
      debug2.namespace = namespace;
      debug2.useColors = createDebug.useColors();
      debug2.color = createDebug.selectColor(namespace);
      debug2.extend = extend;
      debug2.destroy = createDebug.destroy;
      Object.defineProperty(debug2, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v) => {
          enableOverride = v;
        }
      });
      if (typeof createDebug.init === "function") {
        createDebug.init(debug2);
      }
      return debug2;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug.skips.push(ns.slice(1));
        } else {
          createDebug.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (templateIndex < template.length && template[templateIndex] === "*") {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug.names,
        ...createDebug.skips.map((namespace) => "-" + namespace)
      ].join(",");
      createDebug.enable("");
      return namespaces;
    }
    function enabled(name) {
      for (const skip of createDebug.skips) {
        if (matchesTemplate(name, skip)) {
          return false;
        }
      }
      for (const ns of createDebug.names) {
        if (matchesTemplate(name, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy2() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  common$4 = setup;
  return common$4;
}
var hasRequiredBrowser$1;
function requireBrowser$1() {
  if (hasRequiredBrowser$1) return browser$1.exports;
  hasRequiredBrowser$1 = 1;
  (function(module, exports) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load2() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = requireCommon()(exports);
    const { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  })(browser$1, browser$1.exports);
  return browser$1.exports;
}
var node$1 = { exports: {} };
var hasRequiredNode$1;
function requireNode$1() {
  if (hasRequiredNode$1) return node$1.exports;
  hasRequiredNode$1 = 1;
  (function(module, exports) {
    const tty = import_tty.default;
    const util2 = import_util.default;
    exports.init = init2;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.destroy = util2.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_browser();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util2.formatWithOptions(exports.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load2() {
      return process.env.DEBUG;
    }
    function init2(debug2) {
      debug2.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug2.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module.exports = requireCommon()(exports);
    const { formatters } = module.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts);
    };
  })(node$1, node$1.exports);
  return node$1.exports;
}
if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
  src$3.exports = requireBrowser$1();
} else {
  src$3.exports = requireNode$1();
}
var srcExports$1 = src$3.exports;
var debug$j = getDefaultExportFromCjs(srcExports$1);
var pnp;
if (process.versions.pnp) {
  try {
    pnp = (0, import_node_module.createRequire)(import.meta.url)("pnpapi");
  } catch {
  }
}
function resolvePackageData(pkgName, basedir, preserveSymlinks = false, packageCache) {
  if (pnp) {
    const cacheKey = getRpdCacheKey(pkgName, basedir, preserveSymlinks);
    if (packageCache == null ? void 0 : packageCache.has(cacheKey)) return packageCache.get(cacheKey);
    try {
      const pkg = pnp.resolveToUnqualified(pkgName, basedir, {
        considerBuiltins: false
      });
      if (!pkg) return null;
      const pkgData = loadPackageData(import_node_path3.default.join(pkg, "package.json"));
      packageCache == null ? void 0 : packageCache.set(cacheKey, pkgData);
      return pkgData;
    } catch {
      return null;
    }
  }
  const originalBasedir = basedir;
  while (basedir) {
    if (packageCache) {
      const cached = getRpdCache(
        packageCache,
        pkgName,
        basedir,
        originalBasedir,
        preserveSymlinks
      );
      if (cached) return cached;
    }
    const pkg = import_node_path3.default.join(basedir, "node_modules", pkgName, "package.json");
    try {
      if (import_node_fs2.default.existsSync(pkg)) {
        const pkgPath = preserveSymlinks ? pkg : safeRealpathSync(pkg);
        const pkgData = loadPackageData(pkgPath);
        if (packageCache) {
          setRpdCache(
            packageCache,
            pkgData,
            pkgName,
            basedir,
            originalBasedir,
            preserveSymlinks
          );
        }
        return pkgData;
      }
    } catch {
    }
    const nextBasedir = import_node_path3.default.dirname(basedir);
    if (nextBasedir === basedir) break;
    basedir = nextBasedir;
  }
  return null;
}
function loadPackageData(pkgPath) {
  const data = JSON.parse(stripBomTag(import_node_fs2.default.readFileSync(pkgPath, "utf-8")));
  const pkgDir = normalizePath$3(import_node_path3.default.dirname(pkgPath));
  const { sideEffects } = data;
  let hasSideEffects;
  if (typeof sideEffects === "boolean") {
    hasSideEffects = () => sideEffects;
  } else if (Array.isArray(sideEffects)) {
    if (sideEffects.length <= 0) {
      hasSideEffects = () => false;
    } else {
      const finalPackageSideEffects = sideEffects.map((sideEffect) => {
        if (sideEffect.includes("/")) {
          return sideEffect;
        }
        return `**/${sideEffect}`;
      });
      hasSideEffects = createFilter2(finalPackageSideEffects, null, {
        resolve: pkgDir
      });
    }
  } else {
    hasSideEffects = () => null;
  }
  const resolvedCache = {};
  const pkg = {
    dir: pkgDir,
    data,
    hasSideEffects,
    setResolvedCache(key, entry, options2) {
      resolvedCache[getResolveCacheKey(key, options2)] = entry;
    },
    getResolvedCache(key, options2) {
      return resolvedCache[getResolveCacheKey(key, options2)];
    }
  };
  return pkg;
}
function getResolveCacheKey(key, options2) {
  return [
    key,
    options2.isRequire ? "1" : "0",
    options2.conditions.join("_"),
    options2.extensions.join("_"),
    options2.mainFields.join("_")
  ].join("|");
}
function getRpdCache(packageCache, pkgName, basedir, originalBasedir, preserveSymlinks) {
  const cacheKey = getRpdCacheKey(pkgName, basedir, preserveSymlinks);
  const pkgData = packageCache.get(cacheKey);
  if (pkgData) {
    traverseBetweenDirs(originalBasedir, basedir, (dir) => {
      packageCache.set(getRpdCacheKey(pkgName, dir, preserveSymlinks), pkgData);
    });
    return pkgData;
  }
}
function setRpdCache(packageCache, pkgData, pkgName, basedir, originalBasedir, preserveSymlinks) {
  packageCache.set(getRpdCacheKey(pkgName, basedir, preserveSymlinks), pkgData);
  traverseBetweenDirs(originalBasedir, basedir, (dir) => {
    packageCache.set(getRpdCacheKey(pkgName, dir, preserveSymlinks), pkgData);
  });
}
function getRpdCacheKey(pkgName, basedir, preserveSymlinks) {
  return `rpd_${pkgName}_${basedir}_${preserveSymlinks}`;
}
function traverseBetweenDirs(longerDir, shorterDir, cb) {
  while (longerDir !== shorterDir) {
    cb(longerDir);
    longerDir = import_node_path3.default.dirname(longerDir);
  }
}
var createFilter2 = createFilter$1;
var NODE_BUILTIN_NAMESPACE = "node:";
var NPM_BUILTIN_NAMESPACE = "npm:";
var BUN_BUILTIN_NAMESPACE = "bun:";
var nodeBuiltins = import_node_module.builtinModules.filter((id) => !id.includes(":"));
var nodeLikeBuiltins = [
  ...nodeBuiltins,
  new RegExp(`^${NODE_BUILTIN_NAMESPACE}`),
  new RegExp(`^${NPM_BUILTIN_NAMESPACE}`),
  new RegExp(`^${BUN_BUILTIN_NAMESPACE}`)
];
var _require$1 = (0, import_node_module.createRequire)(import.meta.url);
var _dirname = import_node_path3.default.dirname((0, import_node_url2.fileURLToPath)(import.meta.url));
var _a;
var rollupVersion = ((_a = resolvePackageData("rollup", _dirname, true)) == null ? void 0 : _a.data.version) ?? "";
var filter = process.env.VITE_DEBUG_FILTER;
var DEBUG = process.env.DEBUG;
function createDebugger(namespace, options2 = {}) {
  const log = debug$j(namespace);
  const { onlyWhenFocused, depth: depth2 } = options2;
  if (depth2 && log.inspectOpts && log.inspectOpts.depth == null) {
    log.inspectOpts.depth = options2.depth;
  }
  let enabled = log.enabled;
  if (enabled && onlyWhenFocused) {
    const ns = typeof onlyWhenFocused === "string" ? onlyWhenFocused : namespace;
    enabled = !!(DEBUG == null ? void 0 : DEBUG.includes(ns));
  }
  if (enabled) {
    return (...args) => {
      if (!filter || args.some((a) => {
        var _a2;
        return (_a2 = a == null ? void 0 : a.includes) == null ? void 0 : _a2.call(a, filter);
      })) {
        log(...args);
      }
    };
  }
}
function testCaseInsensitiveFS() {
  if (!CLIENT_ENTRY.endsWith("client.mjs")) {
    throw new Error(
      `cannot test case insensitive FS, CLIENT_ENTRY const doesn't contain client.mjs`
    );
  }
  if (!import_node_fs2.default.existsSync(CLIENT_ENTRY)) {
    throw new Error(
      "cannot test case insensitive FS, CLIENT_ENTRY does not point to an existing file: " + CLIENT_ENTRY
    );
  }
  return import_node_fs2.default.existsSync(CLIENT_ENTRY.replace("client.mjs", "cLiEnT.mjs"));
}
var urlCanParse = (
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  import_node_url2.URL.canParse ?? // URL.canParse is supported from Node.js 18.17.0+, 20.0.0+
  ((path22, base) => {
    try {
      new import_node_url2.URL(path22, base);
      return true;
    } catch {
      return false;
    }
  })
);
var isCaseInsensitiveFS = testCaseInsensitiveFS();
function normalizePath$3(id) {
  return import_node_path3.default.posix.normalize(isWindows$3 ? slash$1(id) : id);
}
var externalRE = /^([a-z]+:)?\/\//;
var isExternalUrl = (url2) => externalRE.test(url2);
var dataUrlRE = /^\s*data:/i;
var isDataUrl = (url2) => dataUrlRE.test(url2);
var internalPrefixes = [
  FS_PREFIX,
  VALID_ID_PREFIX,
  CLIENT_PUBLIC_PATH,
  ENV_PUBLIC_PATH
];
var InternalPrefixRE = new RegExp(`^(?:${internalPrefixes.join("|")})`);
async function asyncReplace(input, re, replacer) {
  let match;
  let remaining = input;
  let rewritten = "";
  while (match = re.exec(remaining)) {
    rewritten += remaining.slice(0, match.index);
    rewritten += await replacer(match);
    remaining = remaining.slice(match.index + match[0].length);
  }
  rewritten += remaining;
  return rewritten;
}
var safeRealpathSync = isWindows$3 ? windowsSafeRealPathSync : import_node_fs2.default.realpathSync.native;
var windowsNetworkMap = /* @__PURE__ */ new Map();
function windowsMappedRealpathSync(path22) {
  const realPath = import_node_fs2.default.realpathSync.native(path22);
  if (realPath.startsWith("\\\\")) {
    for (const [network, volume] of windowsNetworkMap) {
      if (realPath.startsWith(network)) return realPath.replace(network, volume);
    }
  }
  return realPath;
}
var parseNetUseRE = /^\w* +(\w:) +([^ ]+)\s/;
var firstSafeRealPathSyncRun = false;
function windowsSafeRealPathSync(path22) {
  if (!firstSafeRealPathSyncRun) {
    optimizeSafeRealPathSync();
    firstSafeRealPathSyncRun = true;
  }
  return import_node_fs2.default.realpathSync(path22);
}
function optimizeSafeRealPathSync() {
  const nodeVersion = process.versions.node.split(".").map(Number);
  if (nodeVersion[0] < 18 || nodeVersion[0] === 18 && nodeVersion[1] < 10) {
    safeRealpathSync = import_node_fs2.default.realpathSync;
    return;
  }
  try {
    import_node_fs2.default.realpathSync.native(import_node_path3.default.resolve("./"));
  } catch (error) {
    if (error.message.includes("EISDIR: illegal operation on a directory")) {
      safeRealpathSync = import_node_fs2.default.realpathSync;
      return;
    }
  }
  (0, import_node_child_process.exec)("net use", (error, stdout) => {
    if (error) return;
    const lines = stdout.split("\n");
    for (const line of lines) {
      const m = parseNetUseRE.exec(line);
      if (m) windowsNetworkMap.set(m[2], m[1]);
    }
    if (windowsNetworkMap.size === 0) {
      safeRealpathSync = import_node_fs2.default.realpathSync.native;
    } else {
      safeRealpathSync = windowsMappedRealpathSync;
    }
  });
}
function joinSrcset(ret) {
  return ret.map(({ url: url2, descriptor }) => url2 + (descriptor ? ` ${descriptor}` : "")).join(", ");
}
var imageCandidateRegex = /(?:^|\s)(?<url>[\w-]+\([^)]*\)|"[^"]*"|'[^']*'|[^,]\S*[^,])\s*(?:\s(?<descriptor>\w[^,]+))?(?:,|$)/g;
var escapedSpaceCharacters = /(?: |\\t|\\n|\\f|\\r)+/g;
function parseSrcset(string) {
  const matches = string.trim().replace(escapedSpaceCharacters, " ").replace(/\r?\n/, "").replace(/,\s+/, ", ").replaceAll(/\s+/g, " ").matchAll(imageCandidateRegex);
  return Array.from(matches, ({ groups: groups2 }) => {
    var _a2, _b;
    return {
      url: ((_a2 = groups2 == null ? void 0 : groups2.url) == null ? void 0 : _a2.trim()) ?? "",
      descriptor: ((_b = groups2 == null ? void 0 : groups2.descriptor) == null ? void 0 : _b.trim()) ?? ""
    };
  }).filter(({ url: url2 }) => !!url2);
}
function processSrcSet(srcs, replacer) {
  return Promise.all(
    parseSrcset(srcs).map(async ({ url: url2, descriptor }) => ({
      url: await replacer({ url: url2, descriptor }),
      descriptor
    }))
  ).then(joinSrcset);
}
var hash$1 = (
  // eslint-disable-next-line n/no-unsupported-features/node-builtins -- crypto.hash is supported in Node 21.7.0+, 20.12.0+
  import_node_crypto.default.hash ?? ((algorithm, data, outputEncoding) => import_node_crypto.default.createHash(algorithm).update(data).digest(outputEncoding))
);
function stripBomTag(content) {
  if (content.charCodeAt(0) === 65279) {
    return content.slice(1);
  }
  return content;
}
function partialEncodeURIPath(uri) {
  if (uri.startsWith("data:")) return uri;
  const filePath = cleanUrl(uri);
  const postfix = filePath !== uri ? uri.slice(filePath.length) : "";
  return filePath.replaceAll("%", "%25") + postfix;
}
var groups = [
  { name: "Assets", color: colors$1.green },
  { name: "CSS", color: colors$1.magenta },
  { name: "JS", color: colors$1.cyan }
];
var POSIX_SEP_RE = new RegExp("\\" + import_node_path3.default.posix.sep, "g");
var NATIVE_SEP_RE = new RegExp("\\" + import_node_path3.default.sep, "g");
var TS_EXTENSIONS = [".ts", ".tsx", ".mts", ".cts"];
var JS_EXTENSIONS = [".js", ".jsx", ".mjs", ".cjs"];
var TSJS_EXTENSIONS = TS_EXTENSIONS.concat(JS_EXTENSIONS);
var TS_EXTENSIONS_RE_GROUP = `\\.(?:${TS_EXTENSIONS.map((ext) => ext.substring(1)).join("|")})`;
var TSJS_EXTENSIONS_RE_GROUP = `\\.(?:${TSJS_EXTENSIONS.map((ext) => ext.substring(1)).join(
  "|"
)})`;
var IS_POSIX = import_node_path3.default.posix.sep === import_node_path3.default.sep;
var singleComment = Symbol("singleComment");
var multiComment = Symbol("multiComment");
var debug$i = createDebugger("vite:esbuild");
var AsyncFunction2 = (async function() {
}).constructor;
var GIT_LFS_PREFIX = import_node_buffer.Buffer.from("version https://git-lfs.github.com");
var ImportType;
!function(A2) {
  A2[A2.Static = 1] = "Static", A2[A2.Dynamic = 2] = "Dynamic", A2[A2.ImportMeta = 3] = "ImportMeta", A2[A2.StaticSourcePhase = 4] = "StaticSourcePhase", A2[A2.DynamicSourcePhase = 5] = "DynamicSourcePhase";
}(ImportType || (ImportType = {}));
var A = 1 === new Uint8Array(new Uint16Array([1]).buffer)[0];
var C;
var E = () => {
  return A2 = "AGFzbQEAAAABKwhgAX8Bf2AEf39/fwBgAAF/YAAAYAF/AGADf39/AX9gAn9/AX9gA39/fwADMTAAAQECAgICAgICAgICAgICAgICAgIAAwMDBAQAAAUAAAAAAAMDAwAGAAAABwAGAgUEBQFwAQEBBQMBAAEGDwJ/AUHA8gALfwBBwPIACwd6FQZtZW1vcnkCAAJzYQAAAWUAAwJpcwAEAmllAAUCc3MABgJzZQAHAml0AAgCYWkACQJpZAAKAmlwAAsCZXMADAJlZQANA2VscwAOA2VsZQAPAnJpABACcmUAEQFmABICbXMAEwVwYXJzZQAUC19faGVhcF9iYXNlAwEKm0EwaAEBf0EAIAA2AoAKQQAoAtwJIgEgAEEBdGoiAEEAOwEAQQAgAEECaiIANgKECkEAIAA2AogKQQBBADYC4AlBAEEANgLwCUEAQQA2AugJQQBBADYC5AlBAEEANgL4CUEAQQA2AuwJIAEL0wEBA39BACgC8AkhBEEAQQAoAogKIgU2AvAJQQAgBDYC9AlBACAFQSRqNgKICiAEQSBqQeAJIAQbIAU2AgBBACgC1AkhBEEAKALQCSEGIAUgATYCACAFIAA2AgggBSACIAJBAmpBACAGIANGIgAbIAQgA0YiBBs2AgwgBSADNgIUIAVBADYCECAFIAI2AgQgBUEANgIgIAVBA0EBQQIgABsgBBs2AhwgBUEAKALQCSADRiICOgAYAkACQCACDQBBACgC1AkgA0cNAQtBAEEBOgCMCgsLXgEBf0EAKAL4CSIEQRBqQeQJIAQbQQAoAogKIgQ2AgBBACAENgL4CUEAIARBFGo2AogKQQBBAToAjAogBEEANgIQIAQgAzYCDCAEIAI2AgggBCABNgIEIAQgADYCAAsIAEEAKAKQCgsVAEEAKALoCSgCAEEAKALcCWtBAXULHgEBf0EAKALoCSgCBCIAQQAoAtwJa0EBdUF/IAAbCxUAQQAoAugJKAIIQQAoAtwJa0EBdQseAQF/QQAoAugJKAIMIgBBACgC3AlrQQF1QX8gABsLCwBBACgC6AkoAhwLHgEBf0EAKALoCSgCECIAQQAoAtwJa0EBdUF/IAAbCzsBAX8CQEEAKALoCSgCFCIAQQAoAtAJRw0AQX8PCwJAIABBACgC1AlHDQBBfg8LIABBACgC3AlrQQF1CwsAQQAoAugJLQAYCxUAQQAoAuwJKAIAQQAoAtwJa0EBdQsVAEEAKALsCSgCBEEAKALcCWtBAXULHgEBf0EAKALsCSgCCCIAQQAoAtwJa0EBdUF/IAAbCx4BAX9BACgC7AkoAgwiAEEAKALcCWtBAXVBfyAAGwslAQF/QQBBACgC6AkiAEEgakHgCSAAGygCACIANgLoCSAAQQBHCyUBAX9BAEEAKALsCSIAQRBqQeQJIAAbKAIAIgA2AuwJIABBAEcLCABBAC0AlAoLCABBAC0AjAoL3Q0BBX8jAEGA0ABrIgAkAEEAQQE6AJQKQQBBACgC2Ak2ApwKQQBBACgC3AlBfmoiATYCsApBACABQQAoAoAKQQF0aiICNgK0CkEAQQA6AIwKQQBBADsBlgpBAEEAOwGYCkEAQQA6AKAKQQBBADYCkApBAEEAOgD8CUEAIABBgBBqNgKkCkEAIAA2AqgKQQBBADoArAoCQAJAAkACQANAQQAgAUECaiIDNgKwCiABIAJPDQECQCADLwEAIgJBd2pBBUkNAAJAAkACQAJAAkAgAkGbf2oOBQEICAgCAAsgAkEgRg0EIAJBL0YNAyACQTtGDQIMBwtBAC8BmAoNASADEBVFDQEgAUEEakGCCEEKEC8NARAWQQAtAJQKDQFBAEEAKAKwCiIBNgKcCgwHCyADEBVFDQAgAUEEakGMCEEKEC8NABAXC0EAQQAoArAKNgKcCgwBCwJAIAEvAQQiA0EqRg0AIANBL0cNBBAYDAELQQEQGQtBACgCtAohAkEAKAKwCiEBDAALC0EAIQIgAyEBQQAtAPwJDQIMAQtBACABNgKwCkEAQQA6AJQKCwNAQQAgAUECaiIDNgKwCgJAAkACQAJAAkACQAJAIAFBACgCtApPDQAgAy8BACICQXdqQQVJDQYCQAJAAkACQAJAAkACQAJAAkACQCACQWBqDgoQDwYPDw8PBQECAAsCQAJAAkACQCACQaB/ag4KCxISAxIBEhISAgALIAJBhX9qDgMFEQYJC0EALwGYCg0QIAMQFUUNECABQQRqQYIIQQoQLw0QEBYMEAsgAxAVRQ0PIAFBBGpBjAhBChAvDQ8QFwwPCyADEBVFDQ4gASkABELsgISDsI7AOVINDiABLwEMIgNBd2oiAUEXSw0MQQEgAXRBn4CABHFFDQwMDQtBAEEALwGYCiIBQQFqOwGYCkEAKAKkCiABQQN0aiIBQQE2AgAgAUEAKAKcCjYCBAwNC0EALwGYCiIDRQ0JQQAgA0F/aiIDOwGYCkEALwGWCiICRQ0MQQAoAqQKIANB//8DcUEDdGooAgBBBUcNDAJAIAJBAnRBACgCqApqQXxqKAIAIgMoAgQNACADQQAoApwKQQJqNgIEC0EAIAJBf2o7AZYKIAMgAUEEajYCDAwMCwJAQQAoApwKIgEvAQBBKUcNAEEAKALwCSIDRQ0AIAMoAgQgAUcNAEEAQQAoAvQJIgM2AvAJAkAgA0UNACADQQA2AiAMAQtBAEEANgLgCQtBAEEALwGYCiIDQQFqOwGYCkEAKAKkCiADQQN0aiIDQQZBAkEALQCsChs2AgAgAyABNgIEQQBBADoArAoMCwtBAC8BmAoiAUUNB0EAIAFBf2oiATsBmApBACgCpAogAUH//wNxQQN0aigCAEEERg0EDAoLQScQGgwJC0EiEBoMCAsgAkEvRw0HAkACQCABLwEEIgFBKkYNACABQS9HDQEQGAwKC0EBEBkMCQsCQAJAAkACQEEAKAKcCiIBLwEAIgMQG0UNAAJAAkAgA0FVag4EAAkBAwkLIAFBfmovAQBBK0YNAwwICyABQX5qLwEAQS1GDQIMBwsgA0EpRw0BQQAoAqQKQQAvAZgKIgJBA3RqKAIEEBxFDQIMBgsgAUF+ai8BAEFQakH//wNxQQpPDQULQQAvAZgKIQILAkACQCACQf//A3EiAkUNACADQeYARw0AQQAoAqQKIAJBf2pBA3RqIgQoAgBBAUcNACABQX5qLwEAQe8ARw0BIAQoAgRBlghBAxAdRQ0BDAULIANB/QBHDQBBACgCpAogAkEDdGoiAigCBBAeDQQgAigCAEEGRg0ECyABEB8NAyADRQ0DIANBL0ZBAC0AoApBAEdxDQMCQEEAKAL4CSICRQ0AIAEgAigCAEkNACABIAIoAgRNDQQLIAFBfmohAUEAKALcCSECAkADQCABQQJqIgQgAk0NAUEAIAE2ApwKIAEvAQAhAyABQX5qIgQhASADECBFDQALIARBAmohBAsCQCADQf//A3EQIUUNACAEQX5qIQECQANAIAFBAmoiAyACTQ0BQQAgATYCnAogAS8BACEDIAFBfmoiBCEBIAMQIQ0ACyAEQQJqIQMLIAMQIg0EC0EAQQE6AKAKDAcLQQAoAqQKQQAvAZgKIgFBA3QiA2pBACgCnAo2AgRBACABQQFqOwGYCkEAKAKkCiADakEDNgIACxAjDAULQQAtAPwJQQAvAZYKQQAvAZgKcnJFIQIMBwsQJEEAQQA6AKAKDAMLECVBACECDAULIANBoAFHDQELQQBBAToArAoLQQBBACgCsAo2ApwKC0EAKAKwCiEBDAALCyAAQYDQAGokACACCxoAAkBBACgC3AkgAEcNAEEBDwsgAEF+ahAmC/4KAQZ/QQBBACgCsAoiAEEMaiIBNgKwCkEAKAL4CSECQQEQKSEDAkACQAJAAkACQAJAAkACQAJAQQAoArAKIgQgAUcNACADEChFDQELAkACQAJAAkACQAJAAkAgA0EqRg0AIANB+wBHDQFBACAEQQJqNgKwCkEBECkhA0EAKAKwCiEEA0ACQAJAIANB//8DcSIDQSJGDQAgA0EnRg0AIAMQLBpBACgCsAohAwwBCyADEBpBAEEAKAKwCkECaiIDNgKwCgtBARApGgJAIAQgAxAtIgNBLEcNAEEAQQAoArAKQQJqNgKwCkEBECkhAwsgA0H9AEYNA0EAKAKwCiIFIARGDQ8gBSEEIAVBACgCtApNDQAMDwsLQQAgBEECajYCsApBARApGkEAKAKwCiIDIAMQLRoMAgtBAEEAOgCUCgJAAkACQAJAAkACQCADQZ9/ag4MAgsEAQsDCwsLCwsFAAsgA0H2AEYNBAwKC0EAIARBDmoiAzYCsAoCQAJAAkBBARApQZ9/ag4GABICEhIBEgtBACgCsAoiBSkAAkLzgOSD4I3AMVINESAFLwEKECFFDRFBACAFQQpqNgKwCkEAECkaC0EAKAKwCiIFQQJqQbIIQQ4QLw0QIAUvARAiAkF3aiIBQRdLDQ1BASABdEGfgIAEcUUNDQwOC0EAKAKwCiIFKQACQuyAhIOwjsA5Ug0PIAUvAQoiAkF3aiIBQRdNDQYMCgtBACAEQQpqNgKwCkEAECkaQQAoArAKIQQLQQAgBEEQajYCsAoCQEEBECkiBEEqRw0AQQBBACgCsApBAmo2ArAKQQEQKSEEC0EAKAKwCiEDIAQQLBogA0EAKAKwCiIEIAMgBBACQQBBACgCsApBfmo2ArAKDwsCQCAEKQACQuyAhIOwjsA5Ug0AIAQvAQoQIEUNAEEAIARBCmo2ArAKQQEQKSEEQQAoArAKIQMgBBAsGiADQQAoArAKIgQgAyAEEAJBAEEAKAKwCkF+ajYCsAoPC0EAIARBBGoiBDYCsAoLQQAgBEEGajYCsApBAEEAOgCUCkEBECkhBEEAKAKwCiEDIAQQLCEEQQAoArAKIQIgBEHf/wNxIgFB2wBHDQNBACACQQJqNgKwCkEBECkhBUEAKAKwCiEDQQAhBAwEC0EAQQE6AIwKQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0AQQAgA0EIajYCsAogAEEBEClBABArIAJBEGpB5AkgAhshAwNAIAMoAgAiA0UNBSADQgA3AgggA0EQaiEDDAALC0EAIANBfmo2ArAKDAMLQQEgAXRBn4CABHFFDQMMBAtBASEECwNAAkACQCAEDgIAAQELIAVB//8DcRAsGkEBIQQMAQsCQAJAQQAoArAKIgQgA0YNACADIAQgAyAEEAJBARApIQQCQCABQdsARw0AIARBIHJB/QBGDQQLQQAoArAKIQMCQCAEQSxHDQBBACADQQJqNgKwCkEBECkhBUEAKAKwCiEDIAVBIHJB+wBHDQILQQAgA0F+ajYCsAoLIAFB2wBHDQJBACACQX5qNgKwCg8LQQAhBAwACwsPCyACQaABRg0AIAJB+wBHDQQLQQAgBUEKajYCsApBARApIgVB+wBGDQMMAgsCQCACQVhqDgMBAwEACyACQaABRw0CC0EAIAVBEGo2ArAKAkBBARApIgVBKkcNAEEAQQAoArAKQQJqNgKwCkEBECkhBQsgBUEoRg0BC0EAKAKwCiEBIAUQLBpBACgCsAoiBSABTQ0AIAQgAyABIAUQAkEAQQAoArAKQX5qNgKwCg8LIAQgA0EAQQAQAkEAIARBDGo2ArAKDwsQJQvcCAEGf0EAIQBBAEEAKAKwCiIBQQxqIgI2ArAKQQEQKSEDQQAoArAKIQQCQAJAAkACQAJAAkACQAJAIANBLkcNAEEAIARBAmo2ArAKAkBBARApIgNB8wBGDQAgA0HtAEcNB0EAKAKwCiIDQQJqQZwIQQYQLw0HAkBBACgCnAoiBBAqDQAgBC8BAEEuRg0ICyABIAEgA0EIakEAKALUCRABDwtBACgCsAoiA0ECakGiCEEKEC8NBgJAQQAoApwKIgQQKg0AIAQvAQBBLkYNBwsgA0EMaiEDDAELIANB8wBHDQEgBCACTQ0BQQYhAEEAIQIgBEECakGiCEEKEC8NAiAEQQxqIQMCQCAELwEMIgVBd2oiBEEXSw0AQQEgBHRBn4CABHENAQsgBUGgAUcNAgtBACADNgKwCkEBIQBBARApIQMLAkACQAJAAkAgA0H7AEYNACADQShHDQFBACgCpApBAC8BmAoiA0EDdGoiBEEAKAKwCjYCBEEAIANBAWo7AZgKIARBBTYCAEEAKAKcCi8BAEEuRg0HQQBBACgCsAoiBEECajYCsApBARApIQMgAUEAKAKwCkEAIAQQAQJAAkAgAA0AQQAoAvAJIQQMAQtBACgC8AkiBEEFNgIcC0EAQQAvAZYKIgBBAWo7AZYKQQAoAqgKIABBAnRqIAQ2AgACQCADQSJGDQAgA0EnRg0AQQBBACgCsApBfmo2ArAKDwsgAxAaQQBBACgCsApBAmoiAzYCsAoCQAJAAkBBARApQVdqDgQBAgIAAgtBAEEAKAKwCkECajYCsApBARApGkEAKALwCSIEIAM2AgQgBEEBOgAYIARBACgCsAoiAzYCEEEAIANBfmo2ArAKDwtBACgC8AkiBCADNgIEIARBAToAGEEAQQAvAZgKQX9qOwGYCiAEQQAoArAKQQJqNgIMQQBBAC8BlgpBf2o7AZYKDwtBAEEAKAKwCkF+ajYCsAoPCyAADQJBACgCsAohA0EALwGYCg0BA0ACQAJAAkAgA0EAKAK0Ck8NAEEBECkiA0EiRg0BIANBJ0YNASADQf0ARw0CQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0JC0EAIANBCGo2ArAKAkBBARApIgNBIkYNACADQSdHDQkLIAEgA0EAECsPCyADEBoLQQBBACgCsApBAmoiAzYCsAoMAAsLIAANAUEGIQBBACECAkAgA0FZag4EBAMDBAALIANBIkYNAwwCC0EAIANBfmo2ArAKDwtBDCEAQQEhAgtBACgCsAoiAyABIABBAXRqRw0AQQAgA0F+ajYCsAoPC0EALwGYCg0CQQAoArAKIQNBACgCtAohAANAIAMgAE8NAQJAAkAgAy8BACIEQSdGDQAgBEEiRw0BCyABIAQgAhArDwtBACADQQJqIgM2ArAKDAALCxAlCw8LQQBBACgCsApBfmo2ArAKC0cBA39BACgCsApBAmohAEEAKAK0CiEBAkADQCAAIgJBfmogAU8NASACQQJqIQAgAi8BAEF2ag4EAQAAAQALC0EAIAI2ArAKC5gBAQN/QQBBACgCsAoiAUECajYCsAogAUEGaiEBQQAoArQKIQIDQAJAAkACQCABQXxqIAJPDQAgAUF+ai8BACEDAkACQCAADQAgA0EqRg0BIANBdmoOBAIEBAIECyADQSpHDQMLIAEvAQBBL0cNAkEAIAFBfmo2ArAKDAELIAFBfmohAQtBACABNgKwCg8LIAFBAmohAQwACwuIAQEEf0EAKAKwCiEBQQAoArQKIQICQAJAA0AgASIDQQJqIQEgAyACTw0BIAEvAQAiBCAARg0CAkAgBEHcAEYNACAEQXZqDgQCAQECAQsgA0EEaiEBIAMvAQRBDUcNACADQQZqIAEgAy8BBkEKRhshAQwACwtBACABNgKwChAlDwtBACABNgKwCgtsAQF/AkACQCAAQV9qIgFBBUsNAEEBIAF0QTFxDQELIABBRmpB//8DcUEGSQ0AIABBKUcgAEFYakH//wNxQQdJcQ0AAkAgAEGlf2oOBAEAAAEACyAAQf0ARyAAQYV/akH//wNxQQRJcQ8LQQELLgEBf0EBIQECQCAAQaYJQQUQHQ0AIABBlghBAxAdDQAgAEGwCUECEB0hAQsgAQtGAQN/QQAhAwJAIAAgAkEBdCICayIEQQJqIgBBACgC3AkiBUkNACAAIAEgAhAvDQACQCAAIAVHDQBBAQ8LIAQQJiEDCyADC4MBAQJ/QQEhAQJAAkACQAJAAkACQCAALwEAIgJBRWoOBAUEBAEACwJAIAJBm39qDgQDBAQCAAsgAkEpRg0EIAJB+QBHDQMgAEF+akG8CUEGEB0PCyAAQX5qLwEAQT1GDwsgAEF+akG0CUEEEB0PCyAAQX5qQcgJQQMQHQ8LQQAhAQsgAQu0AwECf0EAIQECQAJAAkACQAJAAkACQAJAAkACQCAALwEAQZx/ag4UAAECCQkJCQMJCQQFCQkGCQcJCQgJCwJAAkAgAEF+ai8BAEGXf2oOBAAKCgEKCyAAQXxqQcoIQQIQHQ8LIABBfGpBzghBAxAdDwsCQAJAAkAgAEF+ai8BAEGNf2oOAwABAgoLAkAgAEF8ai8BACICQeEARg0AIAJB7ABHDQogAEF6akHlABAnDwsgAEF6akHjABAnDwsgAEF8akHUCEEEEB0PCyAAQXxqQdwIQQYQHQ8LIABBfmovAQBB7wBHDQYgAEF8ai8BAEHlAEcNBgJAIABBemovAQAiAkHwAEYNACACQeMARw0HIABBeGpB6AhBBhAdDwsgAEF4akH0CEECEB0PCyAAQX5qQfgIQQQQHQ8LQQEhASAAQX5qIgBB6QAQJw0EIABBgAlBBRAdDwsgAEF+akHkABAnDwsgAEF+akGKCUEHEB0PCyAAQX5qQZgJQQQQHQ8LAkAgAEF+ai8BACICQe8ARg0AIAJB5QBHDQEgAEF8akHuABAnDwsgAEF8akGgCUEDEB0hAQsgAQs0AQF/QQEhAQJAIABBd2pB//8DcUEFSQ0AIABBgAFyQaABRg0AIABBLkcgABAocSEBCyABCzABAX8CQAJAIABBd2oiAUEXSw0AQQEgAXRBjYCABHENAQsgAEGgAUYNAEEADwtBAQtOAQJ/QQAhAQJAAkAgAC8BACICQeUARg0AIAJB6wBHDQEgAEF+akH4CEEEEB0PCyAAQX5qLwEAQfUARw0AIABBfGpB3AhBBhAdIQELIAEL3gEBBH9BACgCsAohAEEAKAK0CiEBAkACQAJAA0AgACICQQJqIQAgAiABTw0BAkACQAJAIAAvAQAiA0Gkf2oOBQIDAwMBAAsgA0EkRw0CIAIvAQRB+wBHDQJBACACQQRqIgA2ArAKQQBBAC8BmAoiAkEBajsBmApBACgCpAogAkEDdGoiAkEENgIAIAIgADYCBA8LQQAgADYCsApBAEEALwGYCkF/aiIAOwGYCkEAKAKkCiAAQf//A3FBA3RqKAIAQQNHDQMMBAsgAkEEaiEADAALC0EAIAA2ArAKCxAlCwtwAQJ/AkACQANAQQBBACgCsAoiAEECaiIBNgKwCiAAQQAoArQKTw0BAkACQAJAIAEvAQAiAUGlf2oOAgECAAsCQCABQXZqDgQEAwMEAAsgAUEvRw0CDAQLEC4aDAELQQAgAEEEajYCsAoMAAsLECULCzUBAX9BAEEBOgD8CUEAKAKwCiEAQQBBACgCtApBAmo2ArAKQQAgAEEAKALcCWtBAXU2ApAKC0MBAn9BASEBAkAgAC8BACICQXdqQf//A3FBBUkNACACQYABckGgAUYNAEEAIQEgAhAoRQ0AIAJBLkcgABAqcg8LIAELPQECf0EAIQICQEEAKALcCSIDIABLDQAgAC8BACABRw0AAkAgAyAARw0AQQEPCyAAQX5qLwEAECAhAgsgAgtoAQJ/QQEhAQJAAkAgAEFfaiICQQVLDQBBASACdEExcQ0BCyAAQfj/A3FBKEYNACAAQUZqQf//A3FBBkkNAAJAIABBpX9qIgJBA0sNACACQQFHDQELIABBhX9qQf//A3FBBEkhAQsgAQucAQEDf0EAKAKwCiEBAkADQAJAAkAgAS8BACICQS9HDQACQCABLwECIgFBKkYNACABQS9HDQQQGAwCCyAAEBkMAQsCQAJAIABFDQAgAkF3aiIBQRdLDQFBASABdEGfgIAEcUUNAQwCCyACECFFDQMMAQsgAkGgAUcNAgtBAEEAKAKwCiIDQQJqIgE2ArAKIANBACgCtApJDQALCyACCzEBAX9BACEBAkAgAC8BAEEuRw0AIABBfmovAQBBLkcNACAAQXxqLwEAQS5GIQELIAELnAQBAX8CQCABQSJGDQAgAUEnRg0AECUPC0EAKAKwCiEDIAEQGiAAIANBAmpBACgCsApBACgC0AkQAQJAIAJFDQBBACgC8AlBBDYCHAtBAEEAKAKwCkECajYCsAoCQAJAAkACQEEAECkiAUHhAEYNACABQfcARg0BQQAoArAKIQEMAgtBACgCsAoiAUECakHACEEKEC8NAUEGIQAMAgtBACgCsAoiAS8BAkHpAEcNACABLwEEQfQARw0AQQQhACABLwEGQegARg0BC0EAIAFBfmo2ArAKDwtBACABIABBAXRqNgKwCgJAQQEQKUH7AEYNAEEAIAE2ArAKDwtBACgCsAoiAiEAA0BBACAAQQJqNgKwCgJAAkACQEEBECkiAEEiRg0AIABBJ0cNAUEnEBpBAEEAKAKwCkECajYCsApBARApIQAMAgtBIhAaQQBBACgCsApBAmo2ArAKQQEQKSEADAELIAAQLCEACwJAIABBOkYNAEEAIAE2ArAKDwtBAEEAKAKwCkECajYCsAoCQEEBECkiAEEiRg0AIABBJ0YNAEEAIAE2ArAKDwsgABAaQQBBACgCsApBAmo2ArAKAkACQEEBECkiAEEsRg0AIABB/QBGDQFBACABNgKwCg8LQQBBACgCsApBAmo2ArAKQQEQKUH9AEYNAEEAKAKwCiEADAELC0EAKALwCSIBIAI2AhAgAUEAKAKwCkECajYCDAttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARAoDQJBACECQQBBACgCsAoiAEECajYCsAogAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC6sBAQR/AkACQEEAKAKwCiICLwEAIgNB4QBGDQAgASEEIAAhBQwBC0EAIAJBBGo2ArAKQQEQKSECQQAoArAKIQUCQAJAIAJBIkYNACACQSdGDQAgAhAsGkEAKAKwCiEEDAELIAIQGkEAQQAoArAKQQJqIgQ2ArAKC0EBECkhA0EAKAKwCiECCwJAIAIgBUYNACAFIARBACAAIAAgAUYiAhtBACABIAIbEAILIAMLcgEEf0EAKAKwCiEAQQAoArQKIQECQAJAA0AgAEECaiECIAAgAU8NAQJAAkAgAi8BACIDQaR/ag4CAQQACyACIQAgA0F2ag4EAgEBAgELIABBBGohAAwACwtBACACNgKwChAlQQAPC0EAIAI2ArAKQd0AC0kBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILCyAEIAVrIQMLIAMLC+wBAgBBgAgLzgEAAHgAcABvAHIAdABtAHAAbwByAHQAZgBvAHIAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AcwBzAGUAcgB0AHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABB0AkLEAEAAAACAAAAAAQAAEA5AAA=", "undefined" != typeof Buffer ? Buffer.from(A2, "base64") : Uint8Array.from(atob(A2), (A3) => A3.charCodeAt(0));
  var A2;
};
var init = WebAssembly.compile(E()).then(WebAssembly.instantiate).then(({ exports: A2 }) => {
  C = A2;
});
var convertSourceMap$1 = {};
(function(exports) {
  Object.defineProperty(exports, "commentRegex", {
    get: function getCommentRegex() {
      return /^\s*?\/[\/\*][@#]\s+?sourceMappingURL=data:(((?:application|text)\/json)(?:;charset=([^;,]+?)?)?)?(?:;(base64))?,(.*?)$/mg;
    }
  });
  Object.defineProperty(exports, "mapFileCommentRegex", {
    get: function getMapFileCommentRegex() {
      return /(?:\/\/[@#][ \t]+?sourceMappingURL=([^\s'"`]+?)[ \t]*?$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*?(?:\*\/){1}[ \t]*?$)/mg;
    }
  });
  var decodeBase64;
  if (typeof Buffer !== "undefined") {
    if (typeof Buffer.from === "function") {
      decodeBase64 = decodeBase64WithBufferFrom;
    } else {
      decodeBase64 = decodeBase64WithNewBuffer;
    }
  } else {
    decodeBase64 = decodeBase64WithAtob;
  }
  function decodeBase64WithBufferFrom(base64) {
    return Buffer.from(base64, "base64").toString();
  }
  function decodeBase64WithNewBuffer(base64) {
    if (typeof value === "number") {
      throw new TypeError("The value to decode must not be of type number.");
    }
    return new Buffer(base64, "base64").toString();
  }
  function decodeBase64WithAtob(base64) {
    return decodeURIComponent(escape(atob(base64)));
  }
  function stripComment(sm) {
    return sm.split(",").pop();
  }
  function readFromFileMap(sm, read) {
    var r = exports.mapFileCommentRegex.exec(sm);
    var filename = r[1] || r[2];
    try {
      var sm = read(filename);
      if (sm != null && typeof sm.catch === "function") {
        return sm.catch(throwError);
      } else {
        return sm;
      }
    } catch (e) {
      throwError(e);
    }
    function throwError(e) {
      throw new Error("An error occurred while trying to read the map file at " + filename + "\n" + e.stack);
    }
  }
  function Converter(sm, opts) {
    opts = opts || {};
    if (opts.hasComment) {
      sm = stripComment(sm);
    }
    if (opts.encoding === "base64") {
      sm = decodeBase64(sm);
    } else if (opts.encoding === "uri") {
      sm = decodeURIComponent(sm);
    }
    if (opts.isJSON || opts.encoding) {
      sm = JSON.parse(sm);
    }
    this.sourcemap = sm;
  }
  Converter.prototype.toJSON = function(space) {
    return JSON.stringify(this.sourcemap, null, space);
  };
  if (typeof Buffer !== "undefined") {
    if (typeof Buffer.from === "function") {
      Converter.prototype.toBase64 = encodeBase64WithBufferFrom;
    } else {
      Converter.prototype.toBase64 = encodeBase64WithNewBuffer;
    }
  } else {
    Converter.prototype.toBase64 = encodeBase64WithBtoa;
  }
  function encodeBase64WithBufferFrom() {
    var json = this.toJSON();
    return Buffer.from(json, "utf8").toString("base64");
  }
  function encodeBase64WithNewBuffer() {
    var json = this.toJSON();
    if (typeof json === "number") {
      throw new TypeError("The json to encode must not be of type number.");
    }
    return new Buffer(json, "utf8").toString("base64");
  }
  function encodeBase64WithBtoa() {
    var json = this.toJSON();
    return btoa(unescape(encodeURIComponent(json)));
  }
  Converter.prototype.toURI = function() {
    var json = this.toJSON();
    return encodeURIComponent(json);
  };
  Converter.prototype.toComment = function(options2) {
    var encoding, content, data;
    if (options2 != null && options2.encoding === "uri") {
      encoding = "";
      content = this.toURI();
    } else {
      encoding = ";base64";
      content = this.toBase64();
    }
    data = "sourceMappingURL=data:application/json;charset=utf-8" + encoding + "," + content;
    return options2 != null && options2.multiline ? "/*# " + data + " */" : "//# " + data;
  };
  Converter.prototype.toObject = function() {
    return JSON.parse(this.toJSON());
  };
  Converter.prototype.addProperty = function(key, value2) {
    if (this.sourcemap.hasOwnProperty(key)) throw new Error('property "' + key + '" already exists on the sourcemap, use set property instead');
    return this.setProperty(key, value2);
  };
  Converter.prototype.setProperty = function(key, value2) {
    this.sourcemap[key] = value2;
    return this;
  };
  Converter.prototype.getProperty = function(key) {
    return this.sourcemap[key];
  };
  exports.fromObject = function(obj) {
    return new Converter(obj);
  };
  exports.fromJSON = function(json) {
    return new Converter(json, { isJSON: true });
  };
  exports.fromURI = function(uri) {
    return new Converter(uri, { encoding: "uri" });
  };
  exports.fromBase64 = function(base64) {
    return new Converter(base64, { encoding: "base64" });
  };
  exports.fromComment = function(comment) {
    var m, encoding;
    comment = comment.replace(/^\/\*/g, "//").replace(/\*\/$/g, "");
    m = exports.commentRegex.exec(comment);
    encoding = m && m[4] || "uri";
    return new Converter(comment, { encoding, hasComment: true });
  };
  function makeConverter(sm) {
    return new Converter(sm, { isJSON: true });
  }
  exports.fromMapFileComment = function(comment, read) {
    if (typeof read === "string") {
      throw new Error(
        "String directory paths are no longer supported with `fromMapFileComment`\nPlease review the Upgrading documentation at https://github.com/thlorenz/convert-source-map#upgrading"
      );
    }
    var sm = readFromFileMap(comment, read);
    if (sm != null && typeof sm.then === "function") {
      return sm.then(makeConverter);
    } else {
      return makeConverter(sm);
    }
  };
  exports.fromSource = function(content) {
    var m = content.match(exports.commentRegex);
    return m ? exports.fromComment(m.pop()) : null;
  };
  exports.fromMapFileSource = function(content, read) {
    if (typeof read === "string") {
      throw new Error(
        "String directory paths are no longer supported with `fromMapFileSource`\nPlease review the Upgrading documentation at https://github.com/thlorenz/convert-source-map#upgrading"
      );
    }
    var m = content.match(exports.mapFileCommentRegex);
    return m ? exports.fromMapFileComment(m.pop(), read) : null;
  };
  exports.removeComments = function(src2) {
    return src2.replace(exports.commentRegex, "");
  };
  exports.removeMapFileComments = function(src2) {
    return src2.replace(exports.mapFileCommentRegex, "");
  };
  exports.generateMapFileComment = function(file, options2) {
    var data = "sourceMappingURL=" + file;
    return options2 && options2.multiline ? "/*# " + data + " */" : "//# " + data;
  };
})(convertSourceMap$1);
var convertSourceMap = getDefaultExportFromCjs(convertSourceMap$1);
var debug$h = createDebugger("vite:sourcemap", {
  onlyWhenFocused: true
});
var src$2 = {};
var path$b = import_path.default;
var fs$7 = import_fs.default;
var os$2 = import_os.default;
var url$4 = import_url.default;
var fsReadFileAsync = fs$7.promises.readFile;
function getDefaultSearchPlaces(name, sync2) {
  return [
    "package.json",
    `.${name}rc.json`,
    `.${name}rc.js`,
    `.${name}rc.cjs`,
    ...sync2 ? [] : [`.${name}rc.mjs`],
    `.config/${name}rc`,
    `.config/${name}rc.json`,
    `.config/${name}rc.js`,
    `.config/${name}rc.cjs`,
    ...sync2 ? [] : [`.config/${name}rc.mjs`],
    `${name}.config.js`,
    `${name}.config.cjs`,
    ...sync2 ? [] : [`${name}.config.mjs`]
  ];
}
function parentDir(p2) {
  return path$b.dirname(p2) || path$b.sep;
}
var jsonLoader = (_, content) => JSON.parse(content);
var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require2;
var defaultLoadersSync = Object.freeze({
  ".js": requireFunc,
  ".json": requireFunc,
  ".cjs": requireFunc,
  noExt: jsonLoader
});
src$2.defaultLoadersSync = defaultLoadersSync;
var dynamicImport = async (id) => {
  try {
    const fileUrl = url$4.pathToFileURL(id).href;
    const mod = await import(
      /* webpackIgnore: true */
      fileUrl
    );
    return mod.default;
  } catch (e) {
    try {
      return requireFunc(id);
    } catch (requireE) {
      if (requireE.code === "ERR_REQUIRE_ESM" || requireE instanceof SyntaxError && requireE.toString().includes("Cannot use import statement outside a module")) {
        throw e;
      }
      throw requireE;
    }
  }
};
var defaultLoaders = Object.freeze({
  ".js": dynamicImport,
  ".mjs": dynamicImport,
  ".cjs": dynamicImport,
  ".json": jsonLoader,
  noExt: jsonLoader
});
src$2.defaultLoaders = defaultLoaders;
function getOptions(name, options2, sync2) {
  const conf = {
    stopDir: os$2.homedir(),
    searchPlaces: getDefaultSearchPlaces(name, sync2),
    ignoreEmptySearchPlaces: true,
    cache: true,
    transform: (x) => x,
    packageProp: [name],
    ...options2,
    loaders: {
      ...sync2 ? defaultLoadersSync : defaultLoaders,
      ...options2.loaders
    }
  };
  conf.searchPlaces.forEach((place) => {
    const key = path$b.extname(place) || "noExt";
    const loader2 = conf.loaders[key];
    if (!loader2) {
      throw new Error(`Missing loader for extension "${place}"`);
    }
    if (typeof loader2 !== "function") {
      throw new Error(
        `Loader for extension "${place}" is not a function: Received ${typeof loader2}.`
      );
    }
  });
  return conf;
}
function getPackageProp(props, obj) {
  if (typeof props === "string" && props in obj) return obj[props];
  return (Array.isArray(props) ? props : props.split(".")).reduce(
    (acc, prop) => acc === void 0 ? acc : acc[prop],
    obj
  ) || null;
}
function validateFilePath(filepath) {
  if (!filepath) throw new Error("load must pass a non-empty string");
}
function validateLoader(loader2, ext) {
  if (!loader2) throw new Error(`No loader specified for extension "${ext}"`);
  if (typeof loader2 !== "function") throw new Error("loader is not a function");
}
var makeEmplace = (enableCache) => (c, filepath, res) => {
  if (enableCache) c.set(filepath, res);
  return res;
};
src$2.lilconfig = function lilconfig(name, options2) {
  const {
    ignoreEmptySearchPlaces,
    loaders,
    packageProp,
    searchPlaces,
    stopDir,
    transform: transform2,
    cache
  } = getOptions(name, options2 ?? {}, false);
  const searchCache = /* @__PURE__ */ new Map();
  const loadCache = /* @__PURE__ */ new Map();
  const emplace = makeEmplace(cache);
  return {
    async search(searchFrom = process.cwd()) {
      const result = {
        config: null,
        filepath: ""
      };
      const visited = /* @__PURE__ */ new Set();
      let dir = searchFrom;
      dirLoop: while (true) {
        if (cache) {
          const r = searchCache.get(dir);
          if (r !== void 0) {
            for (const p2 of visited) searchCache.set(p2, r);
            return r;
          }
          visited.add(dir);
        }
        for (const searchPlace of searchPlaces) {
          const filepath = path$b.join(dir, searchPlace);
          try {
            await fs$7.promises.access(filepath);
          } catch {
            continue;
          }
          const content = String(await fsReadFileAsync(filepath));
          const loaderKey = path$b.extname(searchPlace) || "noExt";
          const loader2 = loaders[loaderKey];
          if (searchPlace === "package.json") {
            const pkg = await loader2(filepath, content);
            const maybeConfig = getPackageProp(packageProp, pkg);
            if (maybeConfig != null) {
              result.config = maybeConfig;
              result.filepath = filepath;
              break dirLoop;
            }
            continue;
          }
          const isEmpty = content.trim() === "";
          if (isEmpty && ignoreEmptySearchPlaces) continue;
          if (isEmpty) {
            result.isEmpty = true;
            result.config = void 0;
          } else {
            validateLoader(loader2, loaderKey);
            result.config = await loader2(filepath, content);
          }
          result.filepath = filepath;
          break dirLoop;
        }
        if (dir === stopDir || dir === parentDir(dir)) break dirLoop;
        dir = parentDir(dir);
      }
      const transformed = (
        // not found
        result.filepath === "" && result.config === null ? transform2(null) : transform2(result)
      );
      if (cache) {
        for (const p2 of visited) searchCache.set(p2, transformed);
      }
      return transformed;
    },
    async load(filepath) {
      validateFilePath(filepath);
      const absPath = path$b.resolve(process.cwd(), filepath);
      if (cache && loadCache.has(absPath)) {
        return loadCache.get(absPath);
      }
      const { base, ext } = path$b.parse(absPath);
      const loaderKey = ext || "noExt";
      const loader2 = loaders[loaderKey];
      validateLoader(loader2, loaderKey);
      const content = String(await fsReadFileAsync(absPath));
      if (base === "package.json") {
        const pkg = await loader2(absPath, content);
        return emplace(
          loadCache,
          absPath,
          transform2({
            config: getPackageProp(packageProp, pkg),
            filepath: absPath
          })
        );
      }
      const result = {
        config: null,
        filepath: absPath
      };
      const isEmpty = content.trim() === "";
      if (isEmpty && ignoreEmptySearchPlaces)
        return emplace(
          loadCache,
          absPath,
          transform2({
            config: void 0,
            filepath: absPath,
            isEmpty: true
          })
        );
      result.config = isEmpty ? void 0 : await loader2(absPath, content);
      return emplace(
        loadCache,
        absPath,
        transform2(isEmpty ? { ...result, isEmpty, config: void 0 } : result)
      );
    },
    clearLoadCache() {
      if (cache) loadCache.clear();
    },
    clearSearchCache() {
      if (cache) searchCache.clear();
    },
    clearCaches() {
      if (cache) {
        loadCache.clear();
        searchCache.clear();
      }
    }
  };
};
src$2.lilconfigSync = function lilconfigSync(name, options2) {
  const {
    ignoreEmptySearchPlaces,
    loaders,
    packageProp,
    searchPlaces,
    stopDir,
    transform: transform2,
    cache
  } = getOptions(name, options2 ?? {}, true);
  const searchCache = /* @__PURE__ */ new Map();
  const loadCache = /* @__PURE__ */ new Map();
  const emplace = makeEmplace(cache);
  return {
    search(searchFrom = process.cwd()) {
      const result = {
        config: null,
        filepath: ""
      };
      const visited = /* @__PURE__ */ new Set();
      let dir = searchFrom;
      dirLoop: while (true) {
        if (cache) {
          const r = searchCache.get(dir);
          if (r !== void 0) {
            for (const p2 of visited) searchCache.set(p2, r);
            return r;
          }
          visited.add(dir);
        }
        for (const searchPlace of searchPlaces) {
          const filepath = path$b.join(dir, searchPlace);
          try {
            fs$7.accessSync(filepath);
          } catch {
            continue;
          }
          const loaderKey = path$b.extname(searchPlace) || "noExt";
          const loader2 = loaders[loaderKey];
          const content = String(fs$7.readFileSync(filepath));
          if (searchPlace === "package.json") {
            const pkg = loader2(filepath, content);
            const maybeConfig = getPackageProp(packageProp, pkg);
            if (maybeConfig != null) {
              result.config = maybeConfig;
              result.filepath = filepath;
              break dirLoop;
            }
            continue;
          }
          const isEmpty = content.trim() === "";
          if (isEmpty && ignoreEmptySearchPlaces) continue;
          if (isEmpty) {
            result.isEmpty = true;
            result.config = void 0;
          } else {
            validateLoader(loader2, loaderKey);
            result.config = loader2(filepath, content);
          }
          result.filepath = filepath;
          break dirLoop;
        }
        if (dir === stopDir || dir === parentDir(dir)) break dirLoop;
        dir = parentDir(dir);
      }
      const transformed = (
        // not found
        result.filepath === "" && result.config === null ? transform2(null) : transform2(result)
      );
      if (cache) {
        for (const p2 of visited) searchCache.set(p2, transformed);
      }
      return transformed;
    },
    load(filepath) {
      validateFilePath(filepath);
      const absPath = path$b.resolve(process.cwd(), filepath);
      if (cache && loadCache.has(absPath)) {
        return loadCache.get(absPath);
      }
      const { base, ext } = path$b.parse(absPath);
      const loaderKey = ext || "noExt";
      const loader2 = loaders[loaderKey];
      validateLoader(loader2, loaderKey);
      const content = String(fs$7.readFileSync(absPath));
      if (base === "package.json") {
        const pkg = loader2(absPath, content);
        return transform2({
          config: getPackageProp(packageProp, pkg),
          filepath: absPath
        });
      }
      const result = {
        config: null,
        filepath: absPath
      };
      const isEmpty = content.trim() === "";
      if (isEmpty && ignoreEmptySearchPlaces)
        return emplace(
          loadCache,
          absPath,
          transform2({
            filepath: absPath,
            config: void 0,
            isEmpty: true
          })
        );
      result.config = isEmpty ? void 0 : loader2(absPath, content);
      return emplace(
        loadCache,
        absPath,
        transform2(isEmpty ? { ...result, isEmpty, config: void 0 } : result)
      );
    },
    clearLoadCache() {
      if (cache) loadCache.clear();
    },
    clearSearchCache() {
      if (cache) searchCache.clear();
    },
    clearCaches() {
      if (cache) {
        loadCache.clear();
        searchCache.clear();
      }
    }
  };
};
var { createRequire } = import_node_module.default;
var { fileURLToPath: fileURLToPath2, pathToFileURL } = import_node_url2.default;
var TS_EXT_RE = /\.[mc]?ts$/;
var tsx;
var jiti;
var importError = [];
async function req$3(name, rootFile = fileURLToPath2(import.meta.url)) {
  let url2 = createRequire(rootFile).resolve(name);
  try {
    return (await import(`${pathToFileURL(url2)}?t=${Date.now()}`)).default;
  } catch (err) {
    if (!TS_EXT_RE.test(url2)) {
      throw err;
    }
  }
  if (tsx === void 0) {
    try {
      tsx = await import("./api_vite-HTLCSN42.js");
    } catch (error) {
      importError.push(error);
    }
  }
  if (tsx) {
    let loaded = tsx.require(name, rootFile);
    return loaded && "__esModule" in loaded ? loaded.default : loaded;
  }
  if (jiti === void 0) {
    try {
      jiti = (await import("./lib-WXNTPVEP.js")).default;
    } catch (error) {
      importError.push(error);
    }
  }
  if (jiti) {
    return jiti(rootFile, { interopDefault: true })(name);
  }
  throw new Error(
    `'tsx' or 'jiti' is required for the TypeScript configuration files. Make sure it is installed
Error: ${importError.map((error) => error.message).join("\n")}`
  );
}
var req_1 = req$3;
var req$2 = req_1;
async function options(config2, file) {
  if (config2.parser && typeof config2.parser === "string") {
    try {
      config2.parser = await req$2(config2.parser, file);
    } catch (err) {
      throw new Error(
        `Loading PostCSS Parser failed: ${err.message}

(@${file})`
      );
    }
  }
  if (config2.syntax && typeof config2.syntax === "string") {
    try {
      config2.syntax = await req$2(config2.syntax, file);
    } catch (err) {
      throw new Error(
        `Loading PostCSS Syntax failed: ${err.message}

(@${file})`
      );
    }
  }
  if (config2.stringifier && typeof config2.stringifier === "string") {
    try {
      config2.stringifier = await req$2(config2.stringifier, file);
    } catch (err) {
      throw new Error(
        `Loading PostCSS Stringifier failed: ${err.message}

(@${file})`
      );
    }
  }
  return config2;
}
var options_1 = options;
var req$1 = req_1;
async function load(plugin, options2, file) {
  try {
    if (options2 === null || options2 === void 0 || Object.keys(options2).length === 0) {
      return await req$1(plugin, file);
    } else {
      return (await req$1(plugin, file))(options2);
    }
  } catch (err) {
    throw new Error(
      `Loading PostCSS Plugin failed: ${err.message}

(@${file})`
    );
  }
}
async function plugins(config2, file) {
  let list = [];
  if (Array.isArray(config2.plugins)) {
    list = config2.plugins.filter(Boolean);
  } else {
    list = Object.entries(config2.plugins).filter(([, options2]) => {
      return options2 !== false;
    }).map(([plugin, options2]) => {
      return load(plugin, options2, file);
    });
    list = await Promise.all(list);
  }
  if (list.length && list.length > 0) {
    list.forEach((plugin, i) => {
      if (plugin.default) {
        plugin = plugin.default;
      }
      if (plugin.postcss === true) {
        plugin = plugin();
      } else if (plugin.postcss) {
        plugin = plugin.postcss;
      }
      if (!(typeof plugin === "object" && Array.isArray(plugin.plugins) || typeof plugin === "object" && plugin.postcssPlugin || typeof plugin === "function")) {
        throw new TypeError(
          `Invalid PostCSS Plugin found at: plugins[${i}]

(@${file})`
        );
      }
    });
  }
  return list;
}
var plugins_1 = plugins;
var { resolve: resolve2 } = import_node_path3.default;
var config$1 = src$2;
var loadOptions = options_1;
var loadPlugins = plugins_1;
var req = req_1;
var interopRequireDefault = (obj) => obj && obj.__esModule ? obj : { default: obj };
async function processResult(ctx, result) {
  let file = result.filepath || "";
  let projectConfig = interopRequireDefault(result.config).default || {};
  if (typeof projectConfig === "function") {
    projectConfig = projectConfig(ctx);
  } else {
    projectConfig = Object.assign({}, projectConfig, ctx);
  }
  if (!projectConfig.plugins) {
    projectConfig.plugins = [];
  }
  let res = {
    file,
    options: await loadOptions(projectConfig, file),
    plugins: await loadPlugins(projectConfig, file)
  };
  delete projectConfig.plugins;
  return res;
}
function createContext(ctx) {
  ctx = Object.assign(
    {
      cwd: process.cwd(),
      env: "development"
    },
    ctx
  );
  if (!ctx.env) {
    process.env.NODE_ENV = "development";
  }
  return ctx;
}
async function loader(filepath) {
  return req(filepath);
}
var yaml;
async function yamlLoader(_, content) {
  if (!yaml) {
    try {
      yaml = await import("./browser-HIJPQLL3.js");
    } catch (e) {
      throw new Error(
        `'yaml' is required for the YAML configuration files. Make sure it is installed
Error: ${e.message}`
      );
    }
  }
  return yaml.parse(content);
}
var withLoaders = (options2 = {}) => {
  let moduleName = "postcss";
  return {
    ...options2,
    loaders: {
      ...options2.loaders,
      ".cjs": loader,
      ".cts": loader,
      ".js": loader,
      ".mjs": loader,
      ".mts": loader,
      ".ts": loader,
      ".yaml": yamlLoader,
      ".yml": yamlLoader
    },
    searchPlaces: [
      ...options2.searchPlaces || [],
      "package.json",
      `.${moduleName}rc`,
      `.${moduleName}rc.json`,
      `.${moduleName}rc.yaml`,
      `.${moduleName}rc.yml`,
      `.${moduleName}rc.ts`,
      `.${moduleName}rc.cts`,
      `.${moduleName}rc.mts`,
      `.${moduleName}rc.js`,
      `.${moduleName}rc.cjs`,
      `.${moduleName}rc.mjs`,
      `${moduleName}.config.ts`,
      `${moduleName}.config.cts`,
      `${moduleName}.config.mts`,
      `${moduleName}.config.js`,
      `${moduleName}.config.cjs`,
      `${moduleName}.config.mjs`
    ]
  };
};
function rc(ctx, path3, options2) {
  ctx = createContext(ctx);
  path3 = path3 ? resolve2(path3) : process.cwd();
  return config$1.lilconfig("postcss", withLoaders(options2)).search(path3).then((result) => {
    if (!result) {
      throw new Error(`No PostCSS Config found in: ${path3}`);
    }
    return processResult(ctx, result);
  });
}
var src$1 = rc;
var postcssrc = getDefaultExportFromCjs(src$1);
var isWin$2 = process.platform === "win32";
var POSIX_UNESCAPED_GLOB_SYMBOLS = new RegExp("(?<!\\\\)([()[\\]{}*?|]|^!|[!+@](?=\\()|\\\\(?![()[\\]{}!*+?@|]))", "g");
var WIN32_UNESCAPED_GLOB_SYMBOLS = new RegExp("(?<!\\\\)([()[\\]{}]|^!|[!+@](?=\\())", "g");
var jsonLangs = `\\.(?:json|json5)(?:$|\\?)`;
var jsonLangRE = new RegExp(jsonLangs);
new Set(import_node_module.builtinModules);
var own$1 = {}.hasOwnProperty;
var classRegExp = /^([A-Z][a-z\d]*)+$/;
var kTypes = /* @__PURE__ */ new Set([
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
]);
function formatList(array, type = "and") {
  return array.length < 3 ? array.join(` ${type} `) : `${array.slice(0, -1).join(", ")}, ${type} ${array[array.length - 1]}`;
}
var messages = /* @__PURE__ */ new Map();
var nodeInternalPrefix = "__node_internal_";
var userStackTraceLimit;
createError(
  "ERR_INVALID_ARG_TYPE",
  /**
   * @param {string} name
   * @param {Array<string> | string} expected
   * @param {unknown} actual
   */
  (name, expected, actual) => {
    (0, import_node_assert.default)(typeof name === "string", "'name' must be a string");
    if (!Array.isArray(expected)) {
      expected = [expected];
    }
    let message = "The ";
    if (name.endsWith(" argument")) {
      message += `${name} `;
    } else {
      const type = name.includes(".") ? "property" : "argument";
      message += `"${name}" ${type} `;
    }
    message += "must be ";
    const types2 = [];
    const instances = [];
    const other = [];
    for (const value2 of expected) {
      (0, import_node_assert.default)(
        typeof value2 === "string",
        "All expected entries have to be of type string"
      );
      if (kTypes.has(value2)) {
        types2.push(value2.toLowerCase());
      } else if (classRegExp.exec(value2) === null) {
        (0, import_node_assert.default)(
          value2 !== "object",
          'The value "object" should be written as "Object"'
        );
        other.push(value2);
      } else {
        instances.push(value2);
      }
    }
    if (instances.length > 0) {
      const pos = types2.indexOf("object");
      if (pos !== -1) {
        types2.slice(pos, 1);
        instances.push("Object");
      }
    }
    if (types2.length > 0) {
      message += `${types2.length > 1 ? "one of type" : "of type"} ${formatList(
        types2,
        "or"
      )}`;
      if (instances.length > 0 || other.length > 0) message += " or ";
    }
    if (instances.length > 0) {
      message += `an instance of ${formatList(instances, "or")}`;
      if (other.length > 0) message += " or ";
    }
    if (other.length > 0) {
      if (other.length > 1) {
        message += `one of ${formatList(other, "or")}`;
      } else {
        if (other[0].toLowerCase() !== other[0]) message += "an ";
        message += `${other[0]}`;
      }
    }
    message += `. Received ${determineSpecificType(actual)}`;
    return message;
  },
  TypeError
);
createError(
  "ERR_INVALID_MODULE_SPECIFIER",
  /**
   * @param {string} request
   * @param {string} reason
   * @param {string} [base]
   */
  (request, reason, base = void 0) => {
    return `Invalid module "${request}" ${reason}${base ? ` imported from ${base}` : ""}`;
  },
  TypeError
);
createError(
  "ERR_INVALID_PACKAGE_CONFIG",
  /**
   * @param {string} path
   * @param {string} [base]
   * @param {string} [message]
   */
  (path3, base, message) => {
    return `Invalid package config ${path3}${base ? ` while importing ${base}` : ""}${message ? `. ${message}` : ""}`;
  },
  Error
);
createError(
  "ERR_INVALID_PACKAGE_TARGET",
  /**
   * @param {string} packagePath
   * @param {string} key
   * @param {unknown} target
   * @param {boolean} [isImport=false]
   * @param {string} [base]
   */
  (packagePath, key, target, isImport = false, base = void 0) => {
    const relatedError = typeof target === "string" && !isImport && target.length > 0 && !target.startsWith("./");
    if (key === ".") {
      (0, import_node_assert.default)(isImport === false);
      return `Invalid "exports" main target ${JSON.stringify(target)} defined in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? '; targets must start with "./"' : ""}`;
    }
    return `Invalid "${isImport ? "imports" : "exports"}" target ${JSON.stringify(
      target
    )} defined for '${key}' in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? '; targets must start with "./"' : ""}`;
  },
  Error
);
createError(
  "ERR_MODULE_NOT_FOUND",
  /**
   * @param {string} path
   * @param {string} base
   * @param {boolean} [exactUrl]
   */
  (path3, base, exactUrl = false) => {
    return `Cannot find ${exactUrl ? "module" : "package"} '${path3}' imported from ${base}`;
  },
  Error
);
createError(
  "ERR_NETWORK_IMPORT_DISALLOWED",
  "import of '%s' by %s is not supported: %s",
  Error
);
createError(
  "ERR_PACKAGE_IMPORT_NOT_DEFINED",
  /**
   * @param {string} specifier
   * @param {string} packagePath
   * @param {string} base
   */
  (specifier, packagePath, base) => {
    return `Package import specifier "${specifier}" is not defined${packagePath ? ` in package ${packagePath}package.json` : ""} imported from ${base}`;
  },
  TypeError
);
createError(
  "ERR_PACKAGE_PATH_NOT_EXPORTED",
  /**
   * @param {string} packagePath
   * @param {string} subpath
   * @param {string} [base]
   */
  (packagePath, subpath, base = void 0) => {
    if (subpath === ".")
      return `No "exports" main defined in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`;
    return `Package subpath '${subpath}' is not defined by "exports" in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`;
  },
  Error
);
createError(
  "ERR_UNSUPPORTED_DIR_IMPORT",
  "Directory import '%s' is not supported resolving ES modules imported from %s",
  Error
);
createError(
  "ERR_UNSUPPORTED_RESOLVE_REQUEST",
  'Failed to resolve module specifier "%s" from "%s": Invalid relative URL or base scheme is not hierarchical.',
  TypeError
);
createError(
  "ERR_UNKNOWN_FILE_EXTENSION",
  /**
   * @param {string} extension
   * @param {string} path
   */
  (extension2, path3) => {
    return `Unknown file extension "${extension2}" for ${path3}`;
  },
  TypeError
);
createError(
  "ERR_INVALID_ARG_VALUE",
  /**
   * @param {string} name
   * @param {unknown} value
   * @param {string} [reason='is invalid']
   */
  (name, value2, reason = "is invalid") => {
    let inspected = (0, import_node_util.inspect)(value2);
    if (inspected.length > 128) {
      inspected = `${inspected.slice(0, 128)}...`;
    }
    const type = name.includes(".") ? "property" : "argument";
    return `The ${type} '${name}' ${reason}. Received ${inspected}`;
  },
  TypeError
  // Note: extra classes have been shaken out.
  // , RangeError
);
function createError(sym, value2, constructor) {
  messages.set(sym, value2);
  return makeNodeErrorWithCode(constructor, sym);
}
function makeNodeErrorWithCode(Base, key) {
  return NodeError;
  function NodeError(...parameters) {
    const limit = Error.stackTraceLimit;
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = 0;
    const error = new Base();
    if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = limit;
    const message = getMessage(key, parameters, error);
    Object.defineProperties(error, {
      // Note: no need to implement `kIsNodeError` symbol, would be hard,
      // probably.
      message: {
        value: message,
        enumerable: false,
        writable: true,
        configurable: true
      },
      toString: {
        /** @this {Error} */
        value() {
          return `${this.name} [${key}]: ${this.message}`;
        },
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    captureLargerStackTrace(error);
    error.code = key;
    return error;
  }
}
function isErrorStackTraceLimitWritable() {
  try {
    if (import_node_v8.default.startupSnapshot.isBuildingSnapshot()) {
      return false;
    }
  } catch {
  }
  const desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
  if (desc === void 0) {
    return Object.isExtensible(Error);
  }
  return own$1.call(desc, "writable") && desc.writable !== void 0 ? desc.writable : desc.set !== void 0;
}
function hideStackFrames(wrappedFunction) {
  const hidden = nodeInternalPrefix + wrappedFunction.name;
  Object.defineProperty(wrappedFunction, "name", { value: hidden });
  return wrappedFunction;
}
var captureLargerStackTrace = hideStackFrames(
  /**
   * @param {Error} error
   * @returns {Error}
   */
  // @ts-expect-error: fine
  function(error) {
    const stackTraceLimitIsWritable = isErrorStackTraceLimitWritable();
    if (stackTraceLimitIsWritable) {
      userStackTraceLimit = Error.stackTraceLimit;
      Error.stackTraceLimit = Number.POSITIVE_INFINITY;
    }
    Error.captureStackTrace(error);
    if (stackTraceLimitIsWritable) Error.stackTraceLimit = userStackTraceLimit;
    return error;
  }
);
function getMessage(key, parameters, self2) {
  const message = messages.get(key);
  (0, import_node_assert.default)(message !== void 0, "expected `message` to be found");
  if (typeof message === "function") {
    (0, import_node_assert.default)(
      message.length <= parameters.length,
      // Default options do not count.
      `Code: ${key}; The provided arguments length (${parameters.length}) does not match the required ones (${message.length}).`
    );
    return Reflect.apply(message, self2, parameters);
  }
  const regex = /%[dfijoOs]/g;
  let expectedLength = 0;
  while (regex.exec(message) !== null) expectedLength++;
  (0, import_node_assert.default)(
    expectedLength === parameters.length,
    `Code: ${key}; The provided arguments length (${parameters.length}) does not match the required ones (${expectedLength}).`
  );
  if (parameters.length === 0) return message;
  parameters.unshift(message);
  return Reflect.apply(import_node_util.format, null, parameters);
}
function determineSpecificType(value2) {
  if (value2 === null || value2 === void 0) {
    return String(value2);
  }
  if (typeof value2 === "function" && value2.name) {
    return `function ${value2.name}`;
  }
  if (typeof value2 === "object") {
    if (value2.constructor && value2.constructor.name) {
      return `an instance of ${value2.constructor.name}`;
    }
    return `${(0, import_node_util.inspect)(value2, { depth: -1 })}`;
  }
  let inspected = (0, import_node_util.inspect)(value2, { colors: false });
  if (inspected.length > 28) {
    inspected = `${inspected.slice(0, 25)}...`;
  }
  return `type ${typeof value2} (${inspected})`;
}
var ESM_STATIC_IMPORT_RE = new RegExp(`(?<=\\s|^|;|\\})import\\s*([\\s"']*(?<imports>[\\p{L}\\p{M}\\w\\t\\n\\r $*,/{}@.]+)from\\s*)?["']\\s*(?<specifier>(?<="\\s*)[^"]*[^\\s"](?=\\s*")|(?<='\\s*)[^']*[^\\s'](?=\\s*'))\\s*["'][\\s;]*`, "gmu");
var externalTypes = [
  "css",
  // supported pre-processor types
  "less",
  "sass",
  "scss",
  "styl",
  "stylus",
  "pcss",
  "postcss",
  // wasm
  "wasm",
  // known SFC types
  "vue",
  "svelte",
  "marko",
  "astro",
  "imba",
  // JSX/TSX may be configured to be compiled differently from how esbuild
  // handles it by default, so exclude them as well
  "jsx",
  "tsx",
  ...KNOWN_ASSET_TYPES
];
var environmentColors = [
  colors$1.blue,
  colors$1.magenta,
  colors$1.green,
  colors$1.gray
];
var HashbangComment;
var Identifier;
var JSXIdentifier;
var JSXPunctuator;
var JSXString;
var JSXText;
var KeywordsWithExpressionAfter;
var KeywordsWithNoLineTerminatorAfter;
var LineTerminatorSequence;
var MultiLineComment;
var Newline;
var NumericLiteral;
var Punctuator;
var RegularExpressionLiteral;
var SingleLineComment;
var StringLiteral;
var Template;
var TokensNotPrecedingObjectLiteral;
var TokensPrecedingExpression;
var WhiteSpace;
RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]?|[^\/[\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
StringLiteral = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
Template = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
MultiLineComment = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
SingleLineComment = /\/\/.*/y;
HashbangComment = /^#!.*/;
JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
JSXString = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
JSXText = /[^<>{}]+/y;
TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
Newline = RegExp(LineTerminatorSequence.source);
var jsTokens_1 = function* (input, { jsx = false } = {}) {
  var braces2, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode2, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
  ({ length } = input);
  lastIndex = 0;
  lastSignificantToken = "";
  stack = [
    { tag: "JS" }
  ];
  braces2 = [];
  parenNesting = 0;
  postfixIncDec = false;
  if (match = HashbangComment.exec(input)) {
    yield {
      type: "HashbangComment",
      value: match[0]
    };
    lastIndex = match[0].length;
  }
  while (lastIndex < length) {
    mode2 = stack[stack.length - 1];
    switch (mode2.tag) {
      case "JS":
      case "JSNonExpressionParen":
      case "InterpolationInTemplate":
      case "InterpolationInJSX":
        if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
          RegularExpressionLiteral.lastIndex = lastIndex;
          if (match = RegularExpressionLiteral.exec(input)) {
            lastIndex = RegularExpressionLiteral.lastIndex;
            lastSignificantToken = match[0];
            postfixIncDec = true;
            yield {
              type: "RegularExpressionLiteral",
              value: match[0],
              closed: match[1] !== void 0 && match[1] !== "\\"
            };
            continue;
          }
        }
        Punctuator.lastIndex = lastIndex;
        if (match = Punctuator.exec(input)) {
          punctuator = match[0];
          nextLastIndex = Punctuator.lastIndex;
          nextLastSignificantToken = punctuator;
          switch (punctuator) {
            case "(":
              if (lastSignificantToken === "?NonExpressionParenKeyword") {
                stack.push({
                  tag: "JSNonExpressionParen",
                  nesting: parenNesting
                });
              }
              parenNesting++;
              postfixIncDec = false;
              break;
            case ")":
              parenNesting--;
              postfixIncDec = true;
              if (mode2.tag === "JSNonExpressionParen" && parenNesting === mode2.nesting) {
                stack.pop();
                nextLastSignificantToken = "?NonExpressionParenEnd";
                postfixIncDec = false;
              }
              break;
            case "{":
              Punctuator.lastIndex = 0;
              isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
              braces2.push(isExpression);
              postfixIncDec = false;
              break;
            case "}":
              switch (mode2.tag) {
                case "InterpolationInTemplate":
                  if (braces2.length === mode2.nesting) {
                    Template.lastIndex = lastIndex;
                    match = Template.exec(input);
                    lastIndex = Template.lastIndex;
                    lastSignificantToken = match[0];
                    if (match[1] === "${") {
                      lastSignificantToken = "?InterpolationInTemplate";
                      postfixIncDec = false;
                      yield {
                        type: "TemplateMiddle",
                        value: match[0]
                      };
                    } else {
                      stack.pop();
                      postfixIncDec = true;
                      yield {
                        type: "TemplateTail",
                        value: match[0],
                        closed: match[1] === "`"
                      };
                    }
                    continue;
                  }
                  break;
                case "InterpolationInJSX":
                  if (braces2.length === mode2.nesting) {
                    stack.pop();
                    lastIndex += 1;
                    lastSignificantToken = "}";
                    yield {
                      type: "JSXPunctuator",
                      value: "}"
                    };
                    continue;
                  }
              }
              postfixIncDec = braces2.pop();
              nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
              break;
            case "]":
              postfixIncDec = true;
              break;
            case "++":
            case "--":
              nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
              break;
            case "<":
              if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
                stack.push({ tag: "JSXTag" });
                lastIndex += 1;
                lastSignificantToken = "<";
                yield {
                  type: "JSXPunctuator",
                  value: punctuator
                };
                continue;
              }
              postfixIncDec = false;
              break;
            default:
              postfixIncDec = false;
          }
          lastIndex = nextLastIndex;
          lastSignificantToken = nextLastSignificantToken;
          yield {
            type: "Punctuator",
            value: punctuator
          };
          continue;
        }
        Identifier.lastIndex = lastIndex;
        if (match = Identifier.exec(input)) {
          lastIndex = Identifier.lastIndex;
          nextLastSignificantToken = match[0];
          switch (match[0]) {
            case "for":
            case "if":
            case "while":
            case "with":
              if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
                nextLastSignificantToken = "?NonExpressionParenKeyword";
              }
          }
          lastSignificantToken = nextLastSignificantToken;
          postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
          yield {
            type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
            value: match[0]
          };
          continue;
        }
        StringLiteral.lastIndex = lastIndex;
        if (match = StringLiteral.exec(input)) {
          lastIndex = StringLiteral.lastIndex;
          lastSignificantToken = match[0];
          postfixIncDec = true;
          yield {
            type: "StringLiteral",
            value: match[0],
            closed: match[2] !== void 0
          };
          continue;
        }
        NumericLiteral.lastIndex = lastIndex;
        if (match = NumericLiteral.exec(input)) {
          lastIndex = NumericLiteral.lastIndex;
          lastSignificantToken = match[0];
          postfixIncDec = true;
          yield {
            type: "NumericLiteral",
            value: match[0]
          };
          continue;
        }
        Template.lastIndex = lastIndex;
        if (match = Template.exec(input)) {
          lastIndex = Template.lastIndex;
          lastSignificantToken = match[0];
          if (match[1] === "${") {
            lastSignificantToken = "?InterpolationInTemplate";
            stack.push({
              tag: "InterpolationInTemplate",
              nesting: braces2.length
            });
            postfixIncDec = false;
            yield {
              type: "TemplateHead",
              value: match[0]
            };
          } else {
            postfixIncDec = true;
            yield {
              type: "NoSubstitutionTemplate",
              value: match[0],
              closed: match[1] === "`"
            };
          }
          continue;
        }
        break;
      case "JSXTag":
      case "JSXTagEnd":
        JSXPunctuator.lastIndex = lastIndex;
        if (match = JSXPunctuator.exec(input)) {
          lastIndex = JSXPunctuator.lastIndex;
          nextLastSignificantToken = match[0];
          switch (match[0]) {
            case "<":
              stack.push({ tag: "JSXTag" });
              break;
            case ">":
              stack.pop();
              if (lastSignificantToken === "/" || mode2.tag === "JSXTagEnd") {
                nextLastSignificantToken = "?JSX";
                postfixIncDec = true;
              } else {
                stack.push({ tag: "JSXChildren" });
              }
              break;
            case "{":
              stack.push({
                tag: "InterpolationInJSX",
                nesting: braces2.length
              });
              nextLastSignificantToken = "?InterpolationInJSX";
              postfixIncDec = false;
              break;
            case "/":
              if (lastSignificantToken === "<") {
                stack.pop();
                if (stack[stack.length - 1].tag === "JSXChildren") {
                  stack.pop();
                }
                stack.push({ tag: "JSXTagEnd" });
              }
          }
          lastSignificantToken = nextLastSignificantToken;
          yield {
            type: "JSXPunctuator",
            value: match[0]
          };
          continue;
        }
        JSXIdentifier.lastIndex = lastIndex;
        if (match = JSXIdentifier.exec(input)) {
          lastIndex = JSXIdentifier.lastIndex;
          lastSignificantToken = match[0];
          yield {
            type: "JSXIdentifier",
            value: match[0]
          };
          continue;
        }
        JSXString.lastIndex = lastIndex;
        if (match = JSXString.exec(input)) {
          lastIndex = JSXString.lastIndex;
          lastSignificantToken = match[0];
          yield {
            type: "JSXString",
            value: match[0],
            closed: match[2] !== void 0
          };
          continue;
        }
        break;
      case "JSXChildren":
        JSXText.lastIndex = lastIndex;
        if (match = JSXText.exec(input)) {
          lastIndex = JSXText.lastIndex;
          lastSignificantToken = match[0];
          yield {
            type: "JSXText",
            value: match[0]
          };
          continue;
        }
        switch (input[lastIndex]) {
          case "<":
            stack.push({ tag: "JSXTag" });
            lastIndex++;
            lastSignificantToken = "<";
            yield {
              type: "JSXPunctuator",
              value: "<"
            };
            continue;
          case "{":
            stack.push({
              tag: "InterpolationInJSX",
              nesting: braces2.length
            });
            lastIndex++;
            lastSignificantToken = "?InterpolationInJSX";
            postfixIncDec = false;
            yield {
              type: "JSXPunctuator",
              value: "{"
            };
            continue;
        }
    }
    WhiteSpace.lastIndex = lastIndex;
    if (match = WhiteSpace.exec(input)) {
      lastIndex = WhiteSpace.lastIndex;
      yield {
        type: "WhiteSpace",
        value: match[0]
      };
      continue;
    }
    LineTerminatorSequence.lastIndex = lastIndex;
    if (match = LineTerminatorSequence.exec(input)) {
      lastIndex = LineTerminatorSequence.lastIndex;
      postfixIncDec = false;
      if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
        lastSignificantToken = "?NoLineTerminatorHere";
      }
      yield {
        type: "LineTerminatorSequence",
        value: match[0]
      };
      continue;
    }
    MultiLineComment.lastIndex = lastIndex;
    if (match = MultiLineComment.exec(input)) {
      lastIndex = MultiLineComment.lastIndex;
      if (Newline.test(match[0])) {
        postfixIncDec = false;
        if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
          lastSignificantToken = "?NoLineTerminatorHere";
        }
      }
      yield {
        type: "MultiLineComment",
        value: match[0],
        closed: match[1] !== void 0
      };
      continue;
    }
    SingleLineComment.lastIndex = lastIndex;
    if (match = SingleLineComment.exec(input)) {
      lastIndex = SingleLineComment.lastIndex;
      postfixIncDec = false;
      yield {
        type: "SingleLineComment",
        value: match[0]
      };
      continue;
    }
    firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
    lastIndex += firstCodePoint.length;
    lastSignificantToken = firstCodePoint;
    postfixIncDec = false;
    yield {
      type: mode2.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
      value: firstCodePoint
    };
  }
  return void 0;
};
var jsTokens = getDefaultExportFromCjs(jsTokens_1);
var { basename, dirname, relative } = import_node_path3.posix;
var debug$g = createDebugger("vite:deps");
var importsRE = new RegExp(`(?<!\\/\\/.*)(?<=^|;|\\*\\/)\\s*import(?!\\s+type)(?:[\\w*{}\\n\\r\\t, ]+from)?\\s*("[^"]+"|'[^']+')\\s*(?=$|;|\\/\\/|\\/\\*)`, "gm");
var debug$f = createDebugger("vite:deps");
var lockfileFormats = [
  {
    path: "node_modules/.package-lock.json",
    checkPatchesDir: "patches",
    manager: "npm"
  },
  {
    // Yarn non-PnP
    path: "node_modules/.yarn-state.yml",
    checkPatchesDir: false,
    manager: "yarn"
  },
  {
    // Yarn v3+ PnP
    path: ".pnp.cjs",
    checkPatchesDir: ".yarn/patches",
    manager: "yarn"
  },
  {
    // Yarn v2 PnP
    path: ".pnp.js",
    checkPatchesDir: ".yarn/patches",
    manager: "yarn"
  },
  {
    // yarn 1
    path: "node_modules/.yarn-integrity",
    checkPatchesDir: "patches",
    manager: "yarn"
  },
  {
    path: "node_modules/.pnpm/lock.yaml",
    // Included in lockfile
    checkPatchesDir: false,
    manager: "pnpm"
  },
  {
    path: "bun.lock",
    checkPatchesDir: "patches",
    manager: "bun"
  },
  {
    path: "bun.lockb",
    checkPatchesDir: "patches",
    manager: "bun"
  }
].sort((_, { manager }) => {
  var _a2;
  return ((_a2 = process.env.npm_config_user_agent) == null ? void 0 : _a2.startsWith(manager)) ? 1 : -1;
});
var lockfilePaths = lockfileFormats.map((l) => l.path);
var MAX_TEMP_DIR_AGE_MS = 24 * 60 * 60 * 1e3;
var GRACEFUL_RENAME_TIMEOUT = 5e3;
var safeRename = (0, import_node_util.promisify)(function gracefulRename(from, to, cb) {
  const start = Date.now();
  let backoff = 0;
  import_node_fs2.default.rename(from, to, function CB(er) {
    if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < GRACEFUL_RENAME_TIMEOUT) {
      setTimeout(function() {
        import_node_fs2.default.stat(to, function(stater, _st) {
          if (stater && stater.code === "ENOENT") import_node_fs2.default.rename(from, to, CB);
          else CB(er);
        });
      }, backoff);
      if (backoff < 100) backoff += 10;
      return;
    }
    cb(er);
  });
});
var debug$e = createDebugger("vite:external");
var normalizedClientEntry$1 = normalizePath$3(CLIENT_ENTRY);
var normalizedEnvEntry$1 = normalizePath$3(ENV_ENTRY);
var debug$d = createDebugger("vite:resolve-details", {
  onlyWhenFocused: true
});
var debug$c = createDebugger("vite:optimize-deps");
var main = { exports: {} };
var version$1 = "16.4.7";
var require$$4 = {
  version: version$1
};
var fs$6 = import_fs.default;
var path$a = import_path.default;
var os$1 = import_os.default;
var crypto$1 = import_crypto.default;
var packageJson = require$$4;
var version2 = packageJson.version;
var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
function parse$d(src2) {
  const obj = {};
  let lines = src2.toString();
  lines = lines.replace(/\r\n?/mg, "\n");
  let match;
  while ((match = LINE.exec(lines)) != null) {
    const key = match[1];
    let value2 = match[2] || "";
    value2 = value2.trim();
    const maybeQuote = value2[0];
    value2 = value2.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
    if (maybeQuote === '"') {
      value2 = value2.replace(/\\n/g, "\n");
      value2 = value2.replace(/\\r/g, "\r");
    }
    obj[key] = value2;
  }
  return obj;
}
function _parseVault(options2) {
  const vaultPath = _vaultPath(options2);
  const result = DotenvModule.configDotenv({ path: vaultPath });
  if (!result.parsed) {
    const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
    err.code = "MISSING_DATA";
    throw err;
  }
  const keys = _dotenvKey(options2).split(",");
  const length = keys.length;
  let decrypted;
  for (let i = 0; i < length; i++) {
    try {
      const key = keys[i].trim();
      const attrs = _instructions(result, key);
      decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
      break;
    } catch (error) {
      if (i + 1 >= length) {
        throw error;
      }
    }
  }
  return DotenvModule.parse(decrypted);
}
function _log(message) {
  console.log(`[dotenv@${version2}][INFO] ${message}`);
}
function _warn(message) {
  console.log(`[dotenv@${version2}][WARN] ${message}`);
}
function _debug(message) {
  console.log(`[dotenv@${version2}][DEBUG] ${message}`);
}
function _dotenvKey(options2) {
  if (options2 && options2.DOTENV_KEY && options2.DOTENV_KEY.length > 0) {
    return options2.DOTENV_KEY;
  }
  if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
    return process.env.DOTENV_KEY;
  }
  return "";
}
function _instructions(result, dotenvKey) {
  let uri;
  try {
    uri = new URL(dotenvKey);
  } catch (error) {
    if (error.code === "ERR_INVALID_URL") {
      const err = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
      err.code = "INVALID_DOTENV_KEY";
      throw err;
    }
    throw error;
  }
  const key = uri.password;
  if (!key) {
    const err = new Error("INVALID_DOTENV_KEY: Missing key part");
    err.code = "INVALID_DOTENV_KEY";
    throw err;
  }
  const environment = uri.searchParams.get("environment");
  if (!environment) {
    const err = new Error("INVALID_DOTENV_KEY: Missing environment part");
    err.code = "INVALID_DOTENV_KEY";
    throw err;
  }
  const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
  const ciphertext = result.parsed[environmentKey];
  if (!ciphertext) {
    const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
    err.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
    throw err;
  }
  return { ciphertext, key };
}
function _vaultPath(options2) {
  let possibleVaultPath = null;
  if (options2 && options2.path && options2.path.length > 0) {
    if (Array.isArray(options2.path)) {
      for (const filepath of options2.path) {
        if (fs$6.existsSync(filepath)) {
          possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
        }
      }
    } else {
      possibleVaultPath = options2.path.endsWith(".vault") ? options2.path : `${options2.path}.vault`;
    }
  } else {
    possibleVaultPath = path$a.resolve(process.cwd(), ".env.vault");
  }
  if (fs$6.existsSync(possibleVaultPath)) {
    return possibleVaultPath;
  }
  return null;
}
function _resolveHome(envPath) {
  return envPath[0] === "~" ? path$a.join(os$1.homedir(), envPath.slice(1)) : envPath;
}
function _configVault(options2) {
  _log("Loading env from encrypted .env.vault");
  const parsed = DotenvModule._parseVault(options2);
  let processEnv = process.env;
  if (options2 && options2.processEnv != null) {
    processEnv = options2.processEnv;
  }
  DotenvModule.populate(processEnv, parsed, options2);
  return { parsed };
}
function configDotenv(options2) {
  const dotenvPath = path$a.resolve(process.cwd(), ".env");
  let encoding = "utf8";
  const debug2 = Boolean(options2 && options2.debug);
  if (options2 && options2.encoding) {
    encoding = options2.encoding;
  } else {
    if (debug2) {
      _debug("No encoding is specified. UTF-8 is used by default");
    }
  }
  let optionPaths = [dotenvPath];
  if (options2 && options2.path) {
    if (!Array.isArray(options2.path)) {
      optionPaths = [_resolveHome(options2.path)];
    } else {
      optionPaths = [];
      for (const filepath of options2.path) {
        optionPaths.push(_resolveHome(filepath));
      }
    }
  }
  let lastError;
  const parsedAll = {};
  for (const path3 of optionPaths) {
    try {
      const parsed = DotenvModule.parse(fs$6.readFileSync(path3, { encoding }));
      DotenvModule.populate(parsedAll, parsed, options2);
    } catch (e) {
      if (debug2) {
        _debug(`Failed to load ${path3} ${e.message}`);
      }
      lastError = e;
    }
  }
  let processEnv = process.env;
  if (options2 && options2.processEnv != null) {
    processEnv = options2.processEnv;
  }
  DotenvModule.populate(processEnv, parsedAll, options2);
  if (lastError) {
    return { parsed: parsedAll, error: lastError };
  } else {
    return { parsed: parsedAll };
  }
}
function config(options2) {
  if (_dotenvKey(options2).length === 0) {
    return DotenvModule.configDotenv(options2);
  }
  const vaultPath = _vaultPath(options2);
  if (!vaultPath) {
    _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
    return DotenvModule.configDotenv(options2);
  }
  return DotenvModule._configVault(options2);
}
function decrypt(encrypted, keyStr) {
  const key = Buffer.from(keyStr.slice(-64), "hex");
  let ciphertext = Buffer.from(encrypted, "base64");
  const nonce = ciphertext.subarray(0, 12);
  const authTag = ciphertext.subarray(-16);
  ciphertext = ciphertext.subarray(12, -16);
  try {
    const aesgcm = crypto$1.createDecipheriv("aes-256-gcm", key, nonce);
    aesgcm.setAuthTag(authTag);
    return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
  } catch (error) {
    const isRange = error instanceof RangeError;
    const invalidKeyLength = error.message === "Invalid key length";
    const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
    if (isRange || invalidKeyLength) {
      const err = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
      err.code = "INVALID_DOTENV_KEY";
      throw err;
    } else if (decryptionFailed) {
      const err = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
      err.code = "DECRYPTION_FAILED";
      throw err;
    } else {
      throw error;
    }
  }
}
function populate(processEnv, parsed, options2 = {}) {
  const debug2 = Boolean(options2 && options2.debug);
  const override = Boolean(options2 && options2.override);
  if (typeof parsed !== "object") {
    const err = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
    err.code = "OBJECT_REQUIRED";
    throw err;
  }
  for (const key of Object.keys(parsed)) {
    if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
      if (override === true) {
        processEnv[key] = parsed[key];
      }
      if (debug2) {
        if (override === true) {
          _debug(`"${key}" is already defined and WAS overwritten`);
        } else {
          _debug(`"${key}" is already defined and was NOT overwritten`);
        }
      }
    } else {
      processEnv[key] = parsed[key];
    }
  }
}
var DotenvModule = {
  configDotenv,
  _configVault,
  _parseVault,
  config,
  decrypt,
  parse: parse$d,
  populate
};
main.exports.configDotenv = DotenvModule.configDotenv;
main.exports._configVault = DotenvModule._configVault;
main.exports._parseVault = DotenvModule._parseVault;
main.exports.config = DotenvModule.config;
main.exports.decrypt = DotenvModule.decrypt;
var parse_1$3 = main.exports.parse = DotenvModule.parse;
main.exports.populate = DotenvModule.populate;
main.exports = DotenvModule;
var debug$b = createDebugger("vite:env");
var src = { exports: {} };
var browser = { exports: {} };
var debug$a = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs) return ms;
  hasRequiredMs = 1;
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  ms = function(val, options2) {
    options2 = options2 || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse3(val);
    } else if (type === "number" && isNaN(val) === false) {
      return options2.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse3(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    if (ms2 >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (ms2 >= h) {
      return Math.round(ms2 / h) + "h";
    }
    if (ms2 >= m) {
      return Math.round(ms2 / m) + "m";
    }
    if (ms2 >= s) {
      return Math.round(ms2 / s) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    return plural(ms2, d, "day") || plural(ms2, h, "hour") || plural(ms2, m, "minute") || plural(ms2, s, "second") || ms2 + " ms";
  }
  function plural(ms2, n, name) {
    if (ms2 < n) {
      return;
    }
    if (ms2 < n * 1.5) {
      return Math.floor(ms2 / n) + " " + name;
    }
    return Math.ceil(ms2 / n) + " " + name + "s";
  }
  return ms;
}
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug$a.exports;
  hasRequiredDebug = 1;
  (function(module, exports) {
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = requireMs();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash2 = 0, i;
      for (i in namespace) {
        hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
        hash2 |= 0;
      }
      return exports.colors[Math.abs(hash2) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug2() {
        if (!debug2.enabled) return;
        var self2 = debug2;
        var curr = +/* @__PURE__ */ new Date();
        var ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format2) {
          if (match === "%%") return match;
          index++;
          var formatter2 = exports.formatters[format2];
          if ("function" === typeof formatter2) {
            var val = args[index];
            match = formatter2.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self2, args);
        var logFn = debug2.log || exports.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug2.namespace = namespace;
      debug2.enabled = exports.enabled(namespace);
      debug2.useColors = exports.useColors();
      debug2.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug2);
      }
      return debug2;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  })(debug$a, debug$a.exports);
  return debug$a.exports;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser.exports;
  hasRequiredBrowser = 1;
  (function(module, exports) {
    exports = module.exports = requireDebug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load2() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load2());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  })(browser, browser.exports);
  return browser.exports;
}
var node = { exports: {} };
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node.exports;
  hasRequiredNode = 1;
  (function(module, exports) {
    var tty = import_tty.default;
    var util2 = import_util.default;
    exports = module.exports = requireDebug();
    exports.init = init2;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
      else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
      else if (val === "null") val = null;
      else val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util2.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream3 = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream3.write(util2.format.apply(util2, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load2() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream4;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream4 = new tty.WriteStream(fd2);
          stream4._type = "tty";
          if (stream4._handle && stream4._handle.unref) {
            stream4._handle.unref();
          }
          break;
        case "FILE":
          var fs2 = import_fs.default;
          stream4 = new fs2.SyncWriteStream(fd2, { autoClose: false });
          stream4._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net2 = import_net.default;
          stream4 = new net2.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream4.readable = false;
          stream4.read = null;
          stream4._type = "pipe";
          if (stream4._handle && stream4._handle.unref) {
            stream4._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream4.fd = fd2;
      stream4._isStdio = true;
      return stream4;
    }
    function init2(debug2) {
      debug2.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug2.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    exports.enable(load2());
  })(node, node.exports);
  return node.exports;
}
if (typeof process !== "undefined" && process.type === "renderer") {
  src.exports = requireBrowser();
} else {
  src.exports = requireNode();
}
var srcExports = src.exports;
var encodeurl = encodeUrl$1;
var ENCODE_CHARS_REGEXP = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g;
var UNMATCHED_SURROGATE_PAIR_REGEXP = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g;
var UNMATCHED_SURROGATE_PAIR_REPLACE = "$1�$2";
function encodeUrl$1(url2) {
  return String(url2).replace(UNMATCHED_SURROGATE_PAIR_REGEXP, UNMATCHED_SURROGATE_PAIR_REPLACE).replace(ENCODE_CHARS_REGEXP, encodeURI);
}
var matchHtmlRegExp = /["'&<>]/;
var escapeHtml_1 = escapeHtml$1;
function escapeHtml$1(string) {
  var str = "" + string;
  var match = matchHtmlRegExp.exec(str);
  if (!match) {
    return str;
  }
  var escape2;
  var html = "";
  var index = 0;
  var lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escape2 = "&quot;";
        break;
      case 38:
        escape2 = "&amp;";
        break;
      case 39:
        escape2 = "&#39;";
        break;
      case 60:
        escape2 = "&lt;";
        break;
      case 62:
        escape2 = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escape2;
  }
  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
var escapeHtml$2 = getDefaultExportFromCjs(escapeHtml_1);
var onFinished$2 = { exports: {} };
var eeFirst = first$1;
function first$1(stuff, done) {
  if (!Array.isArray(stuff))
    throw new TypeError("arg must be an array of [ee, events...] arrays");
  var cleanups = [];
  for (var i = 0; i < stuff.length; i++) {
    var arr = stuff[i];
    if (!Array.isArray(arr) || arr.length < 2)
      throw new TypeError("each array member must be [ee, events...]");
    var ee = arr[0];
    for (var j = 1; j < arr.length; j++) {
      var event = arr[j];
      var fn = listener(event, callback2);
      ee.on(event, fn);
      cleanups.push({
        ee,
        event,
        fn
      });
    }
  }
  function callback2() {
    cleanup();
    done.apply(null, arguments);
  }
  function cleanup() {
    var x;
    for (var i2 = 0; i2 < cleanups.length; i2++) {
      x = cleanups[i2];
      x.ee.removeListener(x.event, x.fn);
    }
  }
  function thunk(fn2) {
    done = fn2;
  }
  thunk.cancel = cleanup;
  return thunk;
}
function listener(event, done) {
  return function onevent(arg1) {
    var args = new Array(arguments.length);
    var ee = this;
    var err = event === "error" ? arg1 : null;
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    done(err, ee, event, args);
  };
}
onFinished$2.exports = onFinished$1;
onFinished$2.exports.isFinished = isFinished$1;
var first = eeFirst;
var defer$2 = typeof setImmediate === "function" ? setImmediate : function(fn) {
  process.nextTick(fn.bind.apply(fn, arguments));
};
function onFinished$1(msg, listener2) {
  if (isFinished$1(msg) !== false) {
    defer$2(listener2, null, msg);
    return msg;
  }
  attachListener(msg, listener2);
  return msg;
}
function isFinished$1(msg) {
  var socket = msg.socket;
  if (typeof msg.finished === "boolean") {
    return Boolean(msg.finished || socket && !socket.writable);
  }
  if (typeof msg.complete === "boolean") {
    return Boolean(msg.upgrade || !socket || !socket.readable || msg.complete && !msg.readable);
  }
  return void 0;
}
function attachFinishedListener(msg, callback2) {
  var eeMsg;
  var eeSocket;
  var finished = false;
  function onFinish(error) {
    eeMsg.cancel();
    eeSocket.cancel();
    finished = true;
    callback2(error);
  }
  eeMsg = eeSocket = first([[msg, "end", "finish"]], onFinish);
  function onSocket(socket) {
    msg.removeListener("socket", onSocket);
    if (finished) return;
    if (eeMsg !== eeSocket) return;
    eeSocket = first([[socket, "error", "close"]], onFinish);
  }
  if (msg.socket) {
    onSocket(msg.socket);
    return;
  }
  msg.on("socket", onSocket);
  if (msg.socket === void 0) {
    patchAssignSocket(msg, onSocket);
  }
}
function attachListener(msg, listener2) {
  var attached = msg.__onFinished;
  if (!attached || !attached.queue) {
    attached = msg.__onFinished = createListener(msg);
    attachFinishedListener(msg, attached);
  }
  attached.queue.push(listener2);
}
function createListener(msg) {
  function listener2(err) {
    if (msg.__onFinished === listener2) msg.__onFinished = null;
    if (!listener2.queue) return;
    var queue2 = listener2.queue;
    listener2.queue = null;
    for (var i = 0; i < queue2.length; i++) {
      queue2[i](err, msg);
    }
  }
  listener2.queue = [];
  return listener2;
}
function patchAssignSocket(res, callback2) {
  var assignSocket = res.assignSocket;
  if (typeof assignSocket !== "function") return;
  res.assignSocket = function _assignSocket(socket) {
    assignSocket.call(this, socket);
    callback2(socket);
  };
}
var onFinishedExports = onFinished$2.exports;
var parseurl$1 = { exports: {} };
var url$3 = import_url.default;
var parse$c = url$3.parse;
var Url = url$3.Url;
parseurl$1.exports = parseurl;
parseurl$1.exports.original = originalurl;
function parseurl(req2) {
  var url2 = req2.url;
  if (url2 === void 0) {
    return void 0;
  }
  var parsed = req2._parsedUrl;
  if (fresh(url2, parsed)) {
    return parsed;
  }
  parsed = fastparse(url2);
  parsed._raw = url2;
  return req2._parsedUrl = parsed;
}
function originalurl(req2) {
  var url2 = req2.originalUrl;
  if (typeof url2 !== "string") {
    return parseurl(req2);
  }
  var parsed = req2._parsedOriginalUrl;
  if (fresh(url2, parsed)) {
    return parsed;
  }
  parsed = fastparse(url2);
  parsed._raw = url2;
  return req2._parsedOriginalUrl = parsed;
}
function fastparse(str) {
  if (typeof str !== "string" || str.charCodeAt(0) !== 47) {
    return parse$c(str);
  }
  var pathname = str;
  var query = null;
  var search = null;
  for (var i = 1; i < str.length; i++) {
    switch (str.charCodeAt(i)) {
      case 63:
        if (search === null) {
          pathname = str.substring(0, i);
          query = str.substring(i + 1);
          search = str.substring(i);
        }
        break;
      case 9:
      /* \t */
      case 10:
      /* \n */
      case 12:
      /* \f */
      case 13:
      /* \r */
      case 32:
      /*    */
      case 35:
      /* #  */
      case 160:
      case 65279:
        return parse$c(str);
    }
  }
  var url2 = Url !== void 0 ? new Url() : {};
  url2.path = str;
  url2.href = str;
  url2.pathname = pathname;
  if (search !== null) {
    url2.query = query;
    url2.search = search;
  }
  return url2;
}
function fresh(url2, parsedUrl) {
  return typeof parsedUrl === "object" && parsedUrl !== null && (Url === void 0 || parsedUrl instanceof Url) && parsedUrl._raw === url2;
}
var parseurlExports = parseurl$1.exports;
var require$$0$1 = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "103": "Early Hints",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "306": "(Unused)",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
};
var codes = require$$0$1;
var statuses$1 = status;
status.STATUS_CODES = codes;
status.codes = populateStatusesMap(status, codes);
status.redirect = {
  300: true,
  301: true,
  302: true,
  303: true,
  305: true,
  307: true,
  308: true
};
status.empty = {
  204: true,
  205: true,
  304: true
};
status.retry = {
  502: true,
  503: true,
  504: true
};
function populateStatusesMap(statuses2, codes2) {
  var arr = [];
  Object.keys(codes2).forEach(function forEachCode(code) {
    var message = codes2[code];
    var status2 = Number(code);
    statuses2[status2] = message;
    statuses2[message] = status2;
    statuses2[message.toLowerCase()] = status2;
    arr.push(status2);
  });
  return arr;
}
function status(code) {
  if (typeof code === "number") {
    if (!status[code]) throw new Error("invalid status code: " + code);
    return code;
  }
  if (typeof code !== "string") {
    throw new TypeError("code must be a number or string");
  }
  var n = parseInt(code, 10);
  if (!isNaN(n)) {
    if (!status[n]) throw new Error("invalid status code: " + n);
    return n;
  }
  n = status[code.toLowerCase()];
  if (!n) throw new Error('invalid status message: "' + code + '"');
  return n;
}
var unpipe_1 = unpipe$1;
function hasPipeDataListeners(stream3) {
  var listeners = stream3.listeners("data");
  for (var i = 0; i < listeners.length; i++) {
    if (listeners[i].name === "ondata") {
      return true;
    }
  }
  return false;
}
function unpipe$1(stream3) {
  if (!stream3) {
    throw new TypeError("argument stream is required");
  }
  if (typeof stream3.unpipe === "function") {
    stream3.unpipe();
    return;
  }
  if (!hasPipeDataListeners(stream3)) {
    return;
  }
  var listener2;
  var listeners = stream3.listeners("close");
  for (var i = 0; i < listeners.length; i++) {
    listener2 = listeners[i];
    if (listener2.name !== "cleanup" && listener2.name !== "onclose") {
      continue;
    }
    listener2.call(stream3);
  }
}
var debug$9 = srcExports("finalhandler");
var encodeUrl = encodeurl;
var escapeHtml = escapeHtml_1;
var onFinished = onFinishedExports;
var parseUrl$2 = parseurlExports;
var statuses = statuses$1;
var unpipe = unpipe_1;
var DOUBLE_SPACE_REGEXP = /\x20{2}/g;
var NEWLINE_REGEXP = /\n/g;
var defer$1 = typeof setImmediate === "function" ? setImmediate : function(fn) {
  process.nextTick(fn.bind.apply(fn, arguments));
};
var isFinished = onFinished.isFinished;
function createHtmlDocument(message) {
  var body = escapeHtml(message).replace(NEWLINE_REGEXP, "<br>").replace(DOUBLE_SPACE_REGEXP, " &nbsp;");
  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>' + body + "</pre>\n</body>\n</html>\n";
}
var finalhandler_1 = finalhandler$1;
function finalhandler$1(req2, res, options2) {
  var opts = options2 || {};
  var env2 = opts.env || "development";
  var onerror = opts.onerror;
  return function(err) {
    var headers;
    var msg;
    var status2;
    if (!err && headersSent(res)) {
      debug$9("cannot 404 after headers sent");
      return;
    }
    if (err) {
      status2 = getErrorStatusCode(err);
      if (status2 === void 0) {
        status2 = getResponseStatusCode(res);
      } else {
        headers = getErrorHeaders(err);
      }
      msg = getErrorMessage(err, status2, env2);
    } else {
      status2 = 404;
      msg = "Cannot " + req2.method + " " + encodeUrl(getResourceName(req2));
    }
    debug$9("default %s", status2);
    if (err && onerror) {
      defer$1(onerror, err, req2, res);
    }
    if (headersSent(res)) {
      debug$9("cannot %d after headers sent", status2);
      req2.socket.destroy();
      return;
    }
    send$2(req2, res, status2, headers, msg);
  };
}
function getErrorHeaders(err) {
  if (!err.headers || typeof err.headers !== "object") {
    return void 0;
  }
  var headers = /* @__PURE__ */ Object.create(null);
  var keys = Object.keys(err.headers);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    headers[key] = err.headers[key];
  }
  return headers;
}
function getErrorMessage(err, status2, env2) {
  var msg;
  if (env2 !== "production") {
    msg = err.stack;
    if (!msg && typeof err.toString === "function") {
      msg = err.toString();
    }
  }
  return msg || statuses[status2];
}
function getErrorStatusCode(err) {
  if (typeof err.status === "number" && err.status >= 400 && err.status < 600) {
    return err.status;
  }
  if (typeof err.statusCode === "number" && err.statusCode >= 400 && err.statusCode < 600) {
    return err.statusCode;
  }
  return void 0;
}
function getResourceName(req2) {
  try {
    return parseUrl$2.original(req2).pathname;
  } catch (e) {
    return "resource";
  }
}
function getResponseStatusCode(res) {
  var status2 = res.statusCode;
  if (typeof status2 !== "number" || status2 < 400 || status2 > 599) {
    status2 = 500;
  }
  return status2;
}
function headersSent(res) {
  return typeof res.headersSent !== "boolean" ? Boolean(res._header) : res.headersSent;
}
function send$2(req2, res, status2, headers, message) {
  function write() {
    var body = createHtmlDocument(message);
    res.statusCode = status2;
    res.statusMessage = statuses[status2];
    setHeaders(res, headers);
    res.setHeader("Content-Security-Policy", "default-src 'none'");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Content-Length", Buffer.byteLength(body, "utf8"));
    if (req2.method === "HEAD") {
      res.end();
      return;
    }
    res.end(body, "utf8");
  }
  if (isFinished(req2)) {
    write();
    return;
  }
  unpipe(req2);
  onFinished(req2, write);
  req2.resume();
}
function setHeaders(res, headers) {
  if (!headers) {
    return;
  }
  var keys = Object.keys(headers);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    res.setHeader(key, headers[key]);
  }
}
var utilsMerge = { exports: {} };
(function(module, exports) {
  module.exports = function(a, b) {
    if (a && b) {
      for (var key in b) {
        a[key] = b[key];
      }
    }
    return a;
  };
})(utilsMerge);
var utilsMergeExports = utilsMerge.exports;
var debug$8 = srcExports("connect:dispatcher");
var EventEmitter$3 = import_events.default.EventEmitter;
var finalhandler = finalhandler_1;
var http$4 = import_http.default;
var merge = utilsMergeExports;
var parseUrl$1 = parseurlExports;
var connect = createServer$1;
var env = "development";
var proto = {};
var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
  process.nextTick(fn.bind.apply(fn, arguments));
};
function createServer$1() {
  function app(req2, res, next) {
    app.handle(req2, res, next);
  }
  merge(app, proto);
  merge(app, EventEmitter$3.prototype);
  app.route = "/";
  app.stack = [];
  return app;
}
proto.use = function use(route, fn) {
  var handle2 = fn;
  var path3 = route;
  if (typeof route !== "string") {
    handle2 = route;
    path3 = "/";
  }
  if (typeof handle2.handle === "function") {
    var server = handle2;
    server.route = path3;
    handle2 = function(req2, res, next) {
      server.handle(req2, res, next);
    };
  }
  if (handle2 instanceof http$4.Server) {
    handle2 = handle2.listeners("request")[0];
  }
  if (path3[path3.length - 1] === "/") {
    path3 = path3.slice(0, -1);
  }
  debug$8("use %s %s", path3 || "/", handle2.name || "anonymous");
  this.stack.push({ route: path3, handle: handle2 });
  return this;
};
proto.handle = function handle(req2, res, out) {
  var index = 0;
  var protohost = getProtohost(req2.url) || "";
  var removed = "";
  var slashAdded = false;
  var stack = this.stack;
  var done = out || finalhandler(req2, res, {
    env,
    onerror: logerror
  });
  req2.originalUrl = req2.originalUrl || req2.url;
  function next(err) {
    if (slashAdded) {
      req2.url = req2.url.substr(1);
      slashAdded = false;
    }
    if (removed.length !== 0) {
      req2.url = protohost + removed + req2.url.substr(protohost.length);
      removed = "";
    }
    var layer = stack[index++];
    if (!layer) {
      defer(done, err);
      return;
    }
    var path3 = parseUrl$1(req2).pathname || "/";
    var route = layer.route;
    if (path3.toLowerCase().substr(0, route.length) !== route.toLowerCase()) {
      return next(err);
    }
    var c = path3.length > route.length && path3[route.length];
    if (c && c !== "/" && c !== ".") {
      return next(err);
    }
    if (route.length !== 0 && route !== "/") {
      removed = route;
      req2.url = protohost + req2.url.substr(protohost.length + removed.length);
      if (!protohost && req2.url[0] !== "/") {
        req2.url = "/" + req2.url;
        slashAdded = true;
      }
    }
    call(layer.handle, route, err, req2, res, next);
  }
  next();
};
proto.listen = function listen() {
  var server = http$4.createServer(this);
  return server.listen.apply(server, arguments);
};
function call(handle2, route, err, req2, res, next) {
  var arity = handle2.length;
  var error = err;
  var hasError = Boolean(err);
  debug$8("%s %s : %s", handle2.name || "<anonymous>", route, req2.originalUrl);
  try {
    if (hasError && arity === 4) {
      handle2(err, req2, res, next);
      return;
    } else if (!hasError && arity < 4) {
      handle2(req2, res, next);
      return;
    }
  } catch (e) {
    error = e;
  }
  next(error);
}
function logerror(err) {
  if (env !== "test") console.error(err.stack || err.toString());
}
function getProtohost(url2) {
  if (url2.length === 0 || url2[0] === "/") {
    return void 0;
  }
  var fqdnIndex = url2.indexOf("://");
  return fqdnIndex !== -1 && url2.lastIndexOf("?", fqdnIndex) === -1 ? url2.substr(0, url2.indexOf("/", 3 + fqdnIndex)) : void 0;
}
var connect$1 = getDefaultExportFromCjs(connect);
var lib = { exports: {} };
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var vary$1 = { exports: {} };
vary$1.exports = vary;
vary$1.exports.append = append$1;
var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function append$1(header, field) {
  if (typeof header !== "string") {
    throw new TypeError("header argument is required");
  }
  if (!field) {
    throw new TypeError("field argument is required");
  }
  var fields = !Array.isArray(field) ? parse$b(String(field)) : field;
  for (var j = 0; j < fields.length; j++) {
    if (!FIELD_NAME_REGEXP.test(fields[j])) {
      throw new TypeError("field argument contains an invalid header name");
    }
  }
  if (header === "*") {
    return header;
  }
  var val = header;
  var vals = parse$b(header.toLowerCase());
  if (fields.indexOf("*") !== -1 || vals.indexOf("*") !== -1) {
    return "*";
  }
  for (var i = 0; i < fields.length; i++) {
    var fld = fields[i].toLowerCase();
    if (vals.indexOf(fld) === -1) {
      vals.push(fld);
      val = val ? val + ", " + fields[i] : fields[i];
    }
  }
  return val;
}
function parse$b(header) {
  var end = 0;
  var list = [];
  var start = 0;
  for (var i = 0, len = header.length; i < len; i++) {
    switch (header.charCodeAt(i)) {
      case 32:
        if (start === end) {
          start = end = i + 1;
        }
        break;
      case 44:
        list.push(header.substring(start, end));
        start = end = i + 1;
        break;
      default:
        end = i + 1;
        break;
    }
  }
  list.push(header.substring(start, end));
  return list;
}
function vary(res, field) {
  if (!res || !res.getHeader || !res.setHeader) {
    throw new TypeError("res argument is required");
  }
  var val = res.getHeader("Vary") || "";
  var header = Array.isArray(val) ? val.join(", ") : String(val);
  if (val = append$1(header, field)) {
    res.setHeader("Vary", val);
  }
}
var varyExports = vary$1.exports;
(function() {
  var assign = objectAssign;
  var vary2 = varyExports;
  var defaults = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };
  function isString2(s) {
    return typeof s === "string" || s instanceof String;
  }
  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }
      return false;
    } else if (isString2(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }
  function configureOrigin(options2, req2) {
    var requestOrigin = req2.headers.origin, headers = [], isAllowed;
    if (!options2.origin || options2.origin === "*") {
      headers.push([{
        key: "Access-Control-Allow-Origin",
        value: "*"
      }]);
    } else if (isString2(options2.origin)) {
      headers.push([{
        key: "Access-Control-Allow-Origin",
        value: options2.origin
      }]);
      headers.push([{
        key: "Vary",
        value: "Origin"
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options2.origin);
      headers.push([{
        key: "Access-Control-Allow-Origin",
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: "Vary",
        value: "Origin"
      }]);
    }
    return headers;
  }
  function configureMethods(options2) {
    var methods = options2.methods;
    if (methods.join) {
      methods = options2.methods.join(",");
    }
    return {
      key: "Access-Control-Allow-Methods",
      value: methods
    };
  }
  function configureCredentials(options2) {
    if (options2.credentials === true) {
      return {
        key: "Access-Control-Allow-Credentials",
        value: "true"
      };
    }
    return null;
  }
  function configureAllowedHeaders(options2, req2) {
    var allowedHeaders = options2.allowedHeaders || options2.headers;
    var headers = [];
    if (!allowedHeaders) {
      allowedHeaders = req2.headers["access-control-request-headers"];
      headers.push([{
        key: "Vary",
        value: "Access-Control-Request-Headers"
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(",");
    }
    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: "Access-Control-Allow-Headers",
        value: allowedHeaders
      }]);
    }
    return headers;
  }
  function configureExposedHeaders(options2) {
    var headers = options2.exposedHeaders;
    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(",");
    }
    if (headers && headers.length) {
      return {
        key: "Access-Control-Expose-Headers",
        value: headers
      };
    }
    return null;
  }
  function configureMaxAge(options2) {
    var maxAge = (typeof options2.maxAge === "number" || options2.maxAge) && options2.maxAge.toString();
    if (maxAge && maxAge.length) {
      return {
        key: "Access-Control-Max-Age",
        value: maxAge
      };
    }
    return null;
  }
  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];
      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === "Vary" && header.value) {
          vary2(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }
  function cors(options2, req2, res, next) {
    var headers = [], method = req2.method && req2.method.toUpperCase && req2.method.toUpperCase();
    if (method === "OPTIONS") {
      headers.push(configureOrigin(options2, req2));
      headers.push(configureCredentials(options2));
      headers.push(configureMethods(options2));
      headers.push(configureAllowedHeaders(options2, req2));
      headers.push(configureMaxAge(options2));
      headers.push(configureExposedHeaders(options2));
      applyHeaders(headers, res);
      if (options2.preflightContinue) {
        next();
      } else {
        res.statusCode = options2.optionsSuccessStatus;
        res.setHeader("Content-Length", "0");
        res.end();
      }
    } else {
      headers.push(configureOrigin(options2, req2));
      headers.push(configureCredentials(options2));
      headers.push(configureExposedHeaders(options2));
      applyHeaders(headers, res);
      next();
    }
  }
  function middlewareWrapper(o) {
    var optionsCallback = null;
    if (typeof o === "function") {
      optionsCallback = o;
    } else {
      optionsCallback = function(req2, cb) {
        cb(null, o);
      };
    }
    return function corsMiddleware2(req2, res, next) {
      optionsCallback(req2, function(err, options2) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options2);
          var originCallback = null;
          if (corsOptions.origin && typeof corsOptions.origin === "function") {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function(origin, cb) {
              cb(null, corsOptions.origin);
            };
          }
          if (originCallback) {
            originCallback(req2.headers.origin, function(err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req2, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  }
  lib.exports = middlewareWrapper;
})();
var libExports = lib.exports;
var corsMiddleware = getDefaultExportFromCjs(libExports);
var chokidar = {};
var utils$7 = {};
var path$9 = import_path.default;
var WIN_SLASH = "\\\\/";
var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
var DOT_LITERAL = "\\.";
var PLUS_LITERAL = "\\+";
var QMARK_LITERAL = "\\?";
var SLASH_LITERAL = "\\/";
var ONE_CHAR = "(?=.)";
var QMARK = "[^/]";
var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
var NO_DOT = `(?!${DOT_LITERAL})`;
var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
var STAR$1 = `${QMARK}*?`;
var POSIX_CHARS = {
  DOT_LITERAL,
  PLUS_LITERAL,
  QMARK_LITERAL,
  SLASH_LITERAL,
  ONE_CHAR,
  QMARK,
  END_ANCHOR,
  DOTS_SLASH,
  NO_DOT,
  NO_DOTS,
  NO_DOT_SLASH,
  NO_DOTS_SLASH,
  QMARK_NO_DOT,
  STAR: STAR$1,
  START_ANCHOR
};
var WINDOWS_CHARS = {
  ...POSIX_CHARS,
  SLASH_LITERAL: `[${WIN_SLASH}]`,
  QMARK: WIN_NO_SLASH,
  STAR: `${WIN_NO_SLASH}*?`,
  DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
  NO_DOT: `(?!${DOT_LITERAL})`,
  NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
  NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
  START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
  END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
};
var POSIX_REGEX_SOURCE$1 = {
  alnum: "a-zA-Z0-9",
  alpha: "a-zA-Z",
  ascii: "\\x00-\\x7F",
  blank: " \\t",
  cntrl: "\\x00-\\x1F\\x7F",
  digit: "0-9",
  graph: "\\x21-\\x7E",
  lower: "a-z",
  print: "\\x20-\\x7E ",
  punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
  space: " \\t\\r\\n\\v\\f",
  upper: "A-Z",
  word: "A-Za-z0-9_",
  xdigit: "A-Fa-f0-9"
};
var constants$5 = {
  MAX_LENGTH: 1024 * 64,
  POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$1,
  // regular expressions
  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
  // Replace globs with equivalent patterns to reduce parsing time.
  REPLACEMENTS: {
    "***": "*",
    "**/**": "**",
    "**/**/**": "**"
  },
  // Digits
  CHAR_0: 48,
  /* 0 */
  CHAR_9: 57,
  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: 65,
  /* A */
  CHAR_LOWERCASE_A: 97,
  /* a */
  CHAR_UPPERCASE_Z: 90,
  /* Z */
  CHAR_LOWERCASE_Z: 122,
  /* z */
  CHAR_LEFT_PARENTHESES: 40,
  /* ( */
  CHAR_RIGHT_PARENTHESES: 41,
  /* ) */
  CHAR_ASTERISK: 42,
  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: 38,
  /* & */
  CHAR_AT: 64,
  /* @ */
  CHAR_BACKWARD_SLASH: 92,
  /* \ */
  CHAR_CARRIAGE_RETURN: 13,
  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: 94,
  /* ^ */
  CHAR_COLON: 58,
  /* : */
  CHAR_COMMA: 44,
  /* , */
  CHAR_DOT: 46,
  /* . */
  CHAR_DOUBLE_QUOTE: 34,
  /* " */
  CHAR_EQUAL: 61,
  /* = */
  CHAR_EXCLAMATION_MARK: 33,
  /* ! */
  CHAR_FORM_FEED: 12,
  /* \f */
  CHAR_FORWARD_SLASH: 47,
  /* / */
  CHAR_GRAVE_ACCENT: 96,
  /* ` */
  CHAR_HASH: 35,
  /* # */
  CHAR_HYPHEN_MINUS: 45,
  /* - */
  CHAR_LEFT_ANGLE_BRACKET: 60,
  /* < */
  CHAR_LEFT_CURLY_BRACE: 123,
  /* { */
  CHAR_LEFT_SQUARE_BRACKET: 91,
  /* [ */
  CHAR_LINE_FEED: 10,
  /* \n */
  CHAR_NO_BREAK_SPACE: 160,
  /* \u00A0 */
  CHAR_PERCENT: 37,
  /* % */
  CHAR_PLUS: 43,
  /* + */
  CHAR_QUESTION_MARK: 63,
  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: 62,
  /* > */
  CHAR_RIGHT_CURLY_BRACE: 125,
  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: 93,
  /* ] */
  CHAR_SEMICOLON: 59,
  /* ; */
  CHAR_SINGLE_QUOTE: 39,
  /* ' */
  CHAR_SPACE: 32,
  /*   */
  CHAR_TAB: 9,
  /* \t */
  CHAR_UNDERSCORE: 95,
  /* _ */
  CHAR_VERTICAL_LINE: 124,
  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
  /* \uFEFF */
  SEP: path$9.sep,
  /**
   * Create EXTGLOB_CHARS
   */
  extglobChars(chars3) {
    return {
      "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars3.STAR})` },
      "?": { type: "qmark", open: "(?:", close: ")?" },
      "+": { type: "plus", open: "(?:", close: ")+" },
      "*": { type: "star", open: "(?:", close: ")*" },
      "@": { type: "at", open: "(?:", close: ")" }
    };
  },
  /**
   * Create GLOB_CHARS
   */
  globChars(win322) {
    return win322 === true ? WINDOWS_CHARS : POSIX_CHARS;
  }
};
(function(exports) {
  const path3 = import_path.default;
  const win322 = process.platform === "win32";
  const {
    REGEX_BACKSLASH,
    REGEX_REMOVE_BACKSLASH,
    REGEX_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_GLOBAL
  } = constants$5;
  exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
  exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
  exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
  exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
  exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
  exports.removeBackslashes = (str) => {
    return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
      return match === "\\" ? "" : match;
    });
  };
  exports.supportsLookbehinds = () => {
    const segs = process.version.slice(1).split(".").map(Number);
    if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
      return true;
    }
    return false;
  };
  exports.isWindows = (options2) => {
    if (options2 && typeof options2.windows === "boolean") {
      return options2.windows;
    }
    return win322 === true || path3.sep === "\\";
  };
  exports.escapeLast = (input, char, lastIdx) => {
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1) return input;
    if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
  };
  exports.removePrefix = (input, state = {}) => {
    let output = input;
    if (output.startsWith("./")) {
      output = output.slice(2);
      state.prefix = "./";
    }
    return output;
  };
  exports.wrapOutput = (input, state = {}, options2 = {}) => {
    const prepend = options2.contains ? "" : "^";
    const append2 = options2.contains ? "" : "$";
    let output = `${prepend}(?:${input})${append2}`;
    if (state.negated === true) {
      output = `(?:^(?!${output}).*$)`;
    }
    return output;
  };
})(utils$7);
var utils$6 = utils$7;
var {
  CHAR_ASTERISK,
  /* * */
  CHAR_AT,
  /* @ */
  CHAR_BACKWARD_SLASH,
  /* \ */
  CHAR_COMMA: CHAR_COMMA$1,
  /* , */
  CHAR_DOT: CHAR_DOT$1,
  /* . */
  CHAR_EXCLAMATION_MARK,
  /* ! */
  CHAR_FORWARD_SLASH,
  /* / */
  CHAR_LEFT_CURLY_BRACE: CHAR_LEFT_CURLY_BRACE$1,
  /* { */
  CHAR_LEFT_PARENTHESES: CHAR_LEFT_PARENTHESES$1,
  /* ( */
  CHAR_LEFT_SQUARE_BRACKET: CHAR_LEFT_SQUARE_BRACKET$1,
  /* [ */
  CHAR_PLUS,
  /* + */
  CHAR_QUESTION_MARK,
  /* ? */
  CHAR_RIGHT_CURLY_BRACE: CHAR_RIGHT_CURLY_BRACE$1,
  /* } */
  CHAR_RIGHT_PARENTHESES: CHAR_RIGHT_PARENTHESES$1,
  /* ) */
  CHAR_RIGHT_SQUARE_BRACKET: CHAR_RIGHT_SQUARE_BRACKET$1
  /* ] */
} = constants$5;
var isPathSeparator = (code) => {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};
var depth = (token) => {
  if (token.isPrefix !== true) {
    token.depth = token.isGlobstar ? Infinity : 1;
  }
};
var scan$1 = (input, options2) => {
  const opts = options2 || {};
  const length = input.length - 1;
  const scanToEnd = opts.parts === true || opts.scanToEnd === true;
  const slashes = [];
  const tokens = [];
  const parts = [];
  let str = input;
  let index = -1;
  let start = 0;
  let lastIndex = 0;
  let isBrace = false;
  let isBracket = false;
  let isGlob3 = false;
  let isExtglob3 = false;
  let isGlobstar = false;
  let braceEscaped = false;
  let backslashes = false;
  let negated = false;
  let negatedExtglob = false;
  let finished = false;
  let braces2 = 0;
  let prev;
  let code;
  let token = { value: "", depth: 0, isGlob: false };
  const eos = () => index >= length;
  const peek = () => str.charCodeAt(index + 1);
  const advance = () => {
    prev = code;
    return str.charCodeAt(++index);
  };
  while (index < length) {
    code = advance();
    let next;
    if (code === CHAR_BACKWARD_SLASH) {
      backslashes = token.backslashes = true;
      code = advance();
      if (code === CHAR_LEFT_CURLY_BRACE$1) {
        braceEscaped = true;
      }
      continue;
    }
    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE$1) {
      braces2++;
      while (eos() !== true && (code = advance())) {
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }
        if (code === CHAR_LEFT_CURLY_BRACE$1) {
          braces2++;
          continue;
        }
        if (braceEscaped !== true && code === CHAR_DOT$1 && (code = advance()) === CHAR_DOT$1) {
          isBrace = token.isBrace = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (braceEscaped !== true && code === CHAR_COMMA$1) {
          isBrace = token.isBrace = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_RIGHT_CURLY_BRACE$1) {
          braces2--;
          if (braces2 === 0) {
            braceEscaped = false;
            isBrace = token.isBrace = true;
            finished = true;
            break;
          }
        }
      }
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_FORWARD_SLASH) {
      slashes.push(index);
      tokens.push(token);
      token = { value: "", depth: 0, isGlob: false };
      if (finished === true) continue;
      if (prev === CHAR_DOT$1 && index === start + 1) {
        start += 2;
        continue;
      }
      lastIndex = index + 1;
      continue;
    }
    if (opts.noext !== true) {
      const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES$1) {
        isGlob3 = token.isGlob = true;
        isExtglob3 = token.isExtglob = true;
        finished = true;
        if (code === CHAR_EXCLAMATION_MARK && index === start) {
          negatedExtglob = true;
        }
        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }
            if (code === CHAR_RIGHT_PARENTHESES$1) {
              isGlob3 = token.isGlob = true;
              finished = true;
              break;
            }
          }
          continue;
        }
        break;
      }
    }
    if (code === CHAR_ASTERISK) {
      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
      isGlob3 = token.isGlob = true;
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_QUESTION_MARK) {
      isGlob3 = token.isGlob = true;
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_LEFT_SQUARE_BRACKET$1) {
      while (eos() !== true && (next = advance())) {
        if (next === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }
        if (next === CHAR_RIGHT_SQUARE_BRACKET$1) {
          isBracket = token.isBracket = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          break;
        }
      }
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
      negated = token.negated = true;
      start++;
      continue;
    }
    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES$1) {
      isGlob3 = token.isGlob = true;
      if (scanToEnd === true) {
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_LEFT_PARENTHESES$1) {
            backslashes = token.backslashes = true;
            code = advance();
            continue;
          }
          if (code === CHAR_RIGHT_PARENTHESES$1) {
            finished = true;
            break;
          }
        }
        continue;
      }
      break;
    }
    if (isGlob3 === true) {
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
  }
  if (opts.noext === true) {
    isExtglob3 = false;
    isGlob3 = false;
  }
  let base = str;
  let prefix = "";
  let glob = "";
  if (start > 0) {
    prefix = str.slice(0, start);
    str = str.slice(start);
    lastIndex -= start;
  }
  if (base && isGlob3 === true && lastIndex > 0) {
    base = str.slice(0, lastIndex);
    glob = str.slice(lastIndex);
  } else if (isGlob3 === true) {
    base = "";
    glob = str;
  } else {
    base = str;
  }
  if (base && base !== "" && base !== "/" && base !== str) {
    if (isPathSeparator(base.charCodeAt(base.length - 1))) {
      base = base.slice(0, -1);
    }
  }
  if (opts.unescape === true) {
    if (glob) glob = utils$6.removeBackslashes(glob);
    if (base && backslashes === true) {
      base = utils$6.removeBackslashes(base);
    }
  }
  const state = {
    prefix,
    input,
    start,
    base,
    glob,
    isBrace,
    isBracket,
    isGlob: isGlob3,
    isExtglob: isExtglob3,
    isGlobstar,
    negated,
    negatedExtglob
  };
  if (opts.tokens === true) {
    state.maxDepth = 0;
    if (!isPathSeparator(code)) {
      tokens.push(token);
    }
    state.tokens = tokens;
  }
  if (opts.parts === true || opts.tokens === true) {
    let prevIndex;
    for (let idx = 0; idx < slashes.length; idx++) {
      const n = prevIndex ? prevIndex + 1 : start;
      const i = slashes[idx];
      const value2 = input.slice(n, i);
      if (opts.tokens) {
        if (idx === 0 && start !== 0) {
          tokens[idx].isPrefix = true;
          tokens[idx].value = prefix;
        } else {
          tokens[idx].value = value2;
        }
        depth(tokens[idx]);
        state.maxDepth += tokens[idx].depth;
      }
      if (idx !== 0 || value2 !== "") {
        parts.push(value2);
      }
      prevIndex = i;
    }
    if (prevIndex && prevIndex + 1 < input.length) {
      const value2 = input.slice(prevIndex + 1);
      parts.push(value2);
      if (opts.tokens) {
        tokens[tokens.length - 1].value = value2;
        depth(tokens[tokens.length - 1]);
        state.maxDepth += tokens[tokens.length - 1].depth;
      }
    }
    state.slashes = slashes;
    state.parts = parts;
  }
  return state;
};
var scan_1 = scan$1;
var constants$4 = constants$5;
var utils$5 = utils$7;
var {
  MAX_LENGTH: MAX_LENGTH$1,
  POSIX_REGEX_SOURCE,
  REGEX_NON_SPECIAL_CHARS,
  REGEX_SPECIAL_CHARS_BACKREF,
  REPLACEMENTS
} = constants$4;
var expandRange = (args, options2) => {
  if (typeof options2.expandRange === "function") {
    return options2.expandRange(...args, options2);
  }
  args.sort();
  const value2 = `[${args.join("-")}]`;
  return value2;
};
var syntaxError = (type, char) => {
  return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};
var parse$a = (input, options2) => {
  if (typeof input !== "string") {
    throw new TypeError("Expected a string");
  }
  input = REPLACEMENTS[input] || input;
  const opts = { ...options2 };
  const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH$1, opts.maxLength) : MAX_LENGTH$1;
  let len = input.length;
  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }
  const bos = { type: "bos", value: "", output: opts.prepend || "" };
  const tokens = [bos];
  const capture = opts.capture ? "" : "?:";
  const win322 = utils$5.isWindows(options2);
  const PLATFORM_CHARS = constants$4.globChars(win322);
  const EXTGLOB_CHARS = constants$4.extglobChars(PLATFORM_CHARS);
  const {
    DOT_LITERAL: DOT_LITERAL2,
    PLUS_LITERAL: PLUS_LITERAL2,
    SLASH_LITERAL: SLASH_LITERAL2,
    ONE_CHAR: ONE_CHAR2,
    DOTS_SLASH: DOTS_SLASH2,
    NO_DOT: NO_DOT2,
    NO_DOT_SLASH: NO_DOT_SLASH2,
    NO_DOTS_SLASH: NO_DOTS_SLASH2,
    QMARK: QMARK2,
    QMARK_NO_DOT: QMARK_NO_DOT2,
    STAR: STAR2,
    START_ANCHOR: START_ANCHOR2
  } = PLATFORM_CHARS;
  const globstar = (opts2) => {
    return `(${capture}(?:(?!${START_ANCHOR2}${opts2.dot ? DOTS_SLASH2 : DOT_LITERAL2}).)*?)`;
  };
  const nodot = opts.dot ? "" : NO_DOT2;
  const qmarkNoDot = opts.dot ? QMARK2 : QMARK_NO_DOT2;
  let star = opts.bash === true ? globstar(opts) : STAR2;
  if (opts.capture) {
    star = `(${star})`;
  }
  if (typeof opts.noext === "boolean") {
    opts.noextglob = opts.noext;
  }
  const state = {
    input,
    index: -1,
    start: 0,
    dot: opts.dot === true,
    consumed: "",
    output: "",
    prefix: "",
    backtrack: false,
    negated: false,
    brackets: 0,
    braces: 0,
    parens: 0,
    quotes: 0,
    globstar: false,
    tokens
  };
  input = utils$5.removePrefix(input, state);
  len = input.length;
  const extglobs = [];
  const braces2 = [];
  const stack = [];
  let prev = bos;
  let value2;
  const eos = () => state.index === len - 1;
  const peek = state.peek = (n = 1) => input[state.index + n];
  const advance = state.advance = () => input[++state.index] || "";
  const remaining = () => input.slice(state.index + 1);
  const consume = (value3 = "", num = 0) => {
    state.consumed += value3;
    state.index += num;
  };
  const append2 = (token) => {
    state.output += token.output != null ? token.output : token.value;
    consume(token.value);
  };
  const negate = () => {
    let count = 1;
    while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
      advance();
      state.start++;
      count++;
    }
    if (count % 2 === 0) {
      return false;
    }
    state.negated = true;
    state.start++;
    return true;
  };
  const increment = (type) => {
    state[type]++;
    stack.push(type);
  };
  const decrement = (type) => {
    state[type]--;
    stack.pop();
  };
  const push2 = (tok) => {
    if (prev.type === "globstar") {
      const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
      const isExtglob3 = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
      if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob3) {
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = "star";
        prev.value = "*";
        prev.output = star;
        state.output += prev.output;
      }
    }
    if (extglobs.length && tok.type !== "paren") {
      extglobs[extglobs.length - 1].inner += tok.value;
    }
    if (tok.value || tok.output) append2(tok);
    if (prev && prev.type === "text" && tok.type === "text") {
      prev.value += tok.value;
      prev.output = (prev.output || "") + tok.value;
      return;
    }
    tok.prev = prev;
    tokens.push(tok);
    prev = tok;
  };
  const extglobOpen = (type, value3) => {
    const token = { ...EXTGLOB_CHARS[value3], conditions: 1, inner: "" };
    token.prev = prev;
    token.parens = state.parens;
    token.output = state.output;
    const output = (opts.capture ? "(" : "") + token.open;
    increment("parens");
    push2({ type, value: value3, output: state.output ? "" : ONE_CHAR2 });
    push2({ type: "paren", extglob: true, value: advance(), output });
    extglobs.push(token);
  };
  const extglobClose = (token) => {
    let output = token.close + (opts.capture ? ")" : "");
    let rest;
    if (token.type === "negate") {
      let extglobStar = star;
      if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
        extglobStar = globstar(opts);
      }
      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
        output = token.close = `)$))${extglobStar}`;
      }
      if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
        const expression = parse$a(rest, { ...options2, fastpaths: false }).output;
        output = token.close = `)${expression})${extglobStar})`;
      }
      if (token.prev.type === "bos") {
        state.negatedExtglob = true;
      }
    }
    push2({ type: "paren", extglob: true, value: value2, output });
    decrement("parens");
  };
  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
    let backslashes = false;
    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars3, first2, rest, index) => {
      if (first2 === "\\") {
        backslashes = true;
        return m;
      }
      if (first2 === "?") {
        if (esc) {
          return esc + first2 + (rest ? QMARK2.repeat(rest.length) : "");
        }
        if (index === 0) {
          return qmarkNoDot + (rest ? QMARK2.repeat(rest.length) : "");
        }
        return QMARK2.repeat(chars3.length);
      }
      if (first2 === ".") {
        return DOT_LITERAL2.repeat(chars3.length);
      }
      if (first2 === "*") {
        if (esc) {
          return esc + first2 + (rest ? star : "");
        }
        return star;
      }
      return esc ? m : `\\${m}`;
    });
    if (backslashes === true) {
      if (opts.unescape === true) {
        output = output.replace(/\\/g, "");
      } else {
        output = output.replace(/\\+/g, (m) => {
          return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
        });
      }
    }
    if (output === input && opts.contains === true) {
      state.output = input;
      return state;
    }
    state.output = utils$5.wrapOutput(output, state, options2);
    return state;
  }
  while (!eos()) {
    value2 = advance();
    if (value2 === "\0") {
      continue;
    }
    if (value2 === "\\") {
      const next = peek();
      if (next === "/" && opts.bash !== true) {
        continue;
      }
      if (next === "." || next === ";") {
        continue;
      }
      if (!next) {
        value2 += "\\";
        push2({ type: "text", value: value2 });
        continue;
      }
      const match = /^\\+/.exec(remaining());
      let slashes = 0;
      if (match && match[0].length > 2) {
        slashes = match[0].length;
        state.index += slashes;
        if (slashes % 2 !== 0) {
          value2 += "\\";
        }
      }
      if (opts.unescape === true) {
        value2 = advance();
      } else {
        value2 += advance();
      }
      if (state.brackets === 0) {
        push2({ type: "text", value: value2 });
        continue;
      }
    }
    if (state.brackets > 0 && (value2 !== "]" || prev.value === "[" || prev.value === "[^")) {
      if (opts.posix !== false && value2 === ":") {
        const inner = prev.value.slice(1);
        if (inner.includes("[")) {
          prev.posix = true;
          if (inner.includes(":")) {
            const idx = prev.value.lastIndexOf("[");
            const pre = prev.value.slice(0, idx);
            const rest2 = prev.value.slice(idx + 2);
            const posix2 = POSIX_REGEX_SOURCE[rest2];
            if (posix2) {
              prev.value = pre + posix2;
              state.backtrack = true;
              advance();
              if (!bos.output && tokens.indexOf(prev) === 1) {
                bos.output = ONE_CHAR2;
              }
              continue;
            }
          }
        }
      }
      if (value2 === "[" && peek() !== ":" || value2 === "-" && peek() === "]") {
        value2 = `\\${value2}`;
      }
      if (value2 === "]" && (prev.value === "[" || prev.value === "[^")) {
        value2 = `\\${value2}`;
      }
      if (opts.posix === true && value2 === "!" && prev.value === "[") {
        value2 = "^";
      }
      prev.value += value2;
      append2({ value: value2 });
      continue;
    }
    if (state.quotes === 1 && value2 !== '"') {
      value2 = utils$5.escapeRegex(value2);
      prev.value += value2;
      append2({ value: value2 });
      continue;
    }
    if (value2 === '"') {
      state.quotes = state.quotes === 1 ? 0 : 1;
      if (opts.keepQuotes === true) {
        push2({ type: "text", value: value2 });
      }
      continue;
    }
    if (value2 === "(") {
      increment("parens");
      push2({ type: "paren", value: value2 });
      continue;
    }
    if (value2 === ")") {
      if (state.parens === 0 && opts.strictBrackets === true) {
        throw new SyntaxError(syntaxError("opening", "("));
      }
      const extglob = extglobs[extglobs.length - 1];
      if (extglob && state.parens === extglob.parens + 1) {
        extglobClose(extglobs.pop());
        continue;
      }
      push2({ type: "paren", value: value2, output: state.parens ? ")" : "\\)" });
      decrement("parens");
      continue;
    }
    if (value2 === "[") {
      if (opts.nobracket === true || !remaining().includes("]")) {
        if (opts.nobracket !== true && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError("closing", "]"));
        }
        value2 = `\\${value2}`;
      } else {
        increment("brackets");
      }
      push2({ type: "bracket", value: value2 });
      continue;
    }
    if (value2 === "]") {
      if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
        push2({ type: "text", value: value2, output: `\\${value2}` });
        continue;
      }
      if (state.brackets === 0) {
        if (opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError("opening", "["));
        }
        push2({ type: "text", value: value2, output: `\\${value2}` });
        continue;
      }
      decrement("brackets");
      const prevValue = prev.value.slice(1);
      if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
        value2 = `/${value2}`;
      }
      prev.value += value2;
      append2({ value: value2 });
      if (opts.literalBrackets === false || utils$5.hasRegexChars(prevValue)) {
        continue;
      }
      const escaped2 = utils$5.escapeRegex(prev.value);
      state.output = state.output.slice(0, -prev.value.length);
      if (opts.literalBrackets === true) {
        state.output += escaped2;
        prev.value = escaped2;
        continue;
      }
      prev.value = `(${capture}${escaped2}|${prev.value})`;
      state.output += prev.value;
      continue;
    }
    if (value2 === "{" && opts.nobrace !== true) {
      increment("braces");
      const open = {
        type: "brace",
        value: value2,
        output: "(",
        outputIndex: state.output.length,
        tokensIndex: state.tokens.length
      };
      braces2.push(open);
      push2(open);
      continue;
    }
    if (value2 === "}") {
      const brace = braces2[braces2.length - 1];
      if (opts.nobrace === true || !brace) {
        push2({ type: "text", value: value2, output: value2 });
        continue;
      }
      let output = ")";
      if (brace.dots === true) {
        const arr = tokens.slice();
        const range = [];
        for (let i = arr.length - 1; i >= 0; i--) {
          tokens.pop();
          if (arr[i].type === "brace") {
            break;
          }
          if (arr[i].type !== "dots") {
            range.unshift(arr[i].value);
          }
        }
        output = expandRange(range, opts);
        state.backtrack = true;
      }
      if (brace.comma !== true && brace.dots !== true) {
        const out = state.output.slice(0, brace.outputIndex);
        const toks = state.tokens.slice(brace.tokensIndex);
        brace.value = brace.output = "\\{";
        value2 = output = "\\}";
        state.output = out;
        for (const t of toks) {
          state.output += t.output || t.value;
        }
      }
      push2({ type: "brace", value: value2, output });
      decrement("braces");
      braces2.pop();
      continue;
    }
    if (value2 === "|") {
      if (extglobs.length > 0) {
        extglobs[extglobs.length - 1].conditions++;
      }
      push2({ type: "text", value: value2 });
      continue;
    }
    if (value2 === ",") {
      let output = value2;
      const brace = braces2[braces2.length - 1];
      if (brace && stack[stack.length - 1] === "braces") {
        brace.comma = true;
        output = "|";
      }
      push2({ type: "comma", value: value2, output });
      continue;
    }
    if (value2 === "/") {
      if (prev.type === "dot" && state.index === state.start + 1) {
        state.start = state.index + 1;
        state.consumed = "";
        state.output = "";
        tokens.pop();
        prev = bos;
        continue;
      }
      push2({ type: "slash", value: value2, output: SLASH_LITERAL2 });
      continue;
    }
    if (value2 === ".") {
      if (state.braces > 0 && prev.type === "dot") {
        if (prev.value === ".") prev.output = DOT_LITERAL2;
        const brace = braces2[braces2.length - 1];
        prev.type = "dots";
        prev.output += value2;
        prev.value += value2;
        brace.dots = true;
        continue;
      }
      if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
        push2({ type: "text", value: value2, output: DOT_LITERAL2 });
        continue;
      }
      push2({ type: "dot", value: value2, output: DOT_LITERAL2 });
      continue;
    }
    if (value2 === "?") {
      const isGroup = prev && prev.value === "(";
      if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        extglobOpen("qmark", value2);
        continue;
      }
      if (prev && prev.type === "paren") {
        const next = peek();
        let output = value2;
        if (next === "<" && !utils$5.supportsLookbehinds()) {
          throw new Error("Node.js v10 or higher is required for regex lookbehinds");
        }
        if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
          output = `\\${value2}`;
        }
        push2({ type: "text", value: value2, output });
        continue;
      }
      if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
        push2({ type: "qmark", value: value2, output: QMARK_NO_DOT2 });
        continue;
      }
      push2({ type: "qmark", value: value2, output: QMARK2 });
      continue;
    }
    if (value2 === "!") {
      if (opts.noextglob !== true && peek() === "(") {
        if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
          extglobOpen("negate", value2);
          continue;
        }
      }
      if (opts.nonegate !== true && state.index === 0) {
        negate();
        continue;
      }
    }
    if (value2 === "+") {
      if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        extglobOpen("plus", value2);
        continue;
      }
      if (prev && prev.value === "(" || opts.regex === false) {
        push2({ type: "plus", value: value2, output: PLUS_LITERAL2 });
        continue;
      }
      if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
        push2({ type: "plus", value: value2 });
        continue;
      }
      push2({ type: "plus", value: PLUS_LITERAL2 });
      continue;
    }
    if (value2 === "@") {
      if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        push2({ type: "at", extglob: true, value: value2, output: "" });
        continue;
      }
      push2({ type: "text", value: value2 });
      continue;
    }
    if (value2 !== "*") {
      if (value2 === "$" || value2 === "^") {
        value2 = `\\${value2}`;
      }
      const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
      if (match) {
        value2 += match[0];
        state.index += match[0].length;
      }
      push2({ type: "text", value: value2 });
      continue;
    }
    if (prev && (prev.type === "globstar" || prev.star === true)) {
      prev.type = "star";
      prev.star = true;
      prev.value += value2;
      prev.output = star;
      state.backtrack = true;
      state.globstar = true;
      consume(value2);
      continue;
    }
    let rest = remaining();
    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
      extglobOpen("star", value2);
      continue;
    }
    if (prev.type === "star") {
      if (opts.noglobstar === true) {
        consume(value2);
        continue;
      }
      const prior = prev.prev;
      const before = prior.prev;
      const isStart = prior.type === "slash" || prior.type === "bos";
      const afterStar = before && (before.type === "star" || before.type === "globstar");
      if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
        push2({ type: "star", value: value2, output: "" });
        continue;
      }
      const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
      const isExtglob3 = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
      if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob3) {
        push2({ type: "star", value: value2, output: "" });
        continue;
      }
      while (rest.slice(0, 3) === "/**") {
        const after = input[state.index + 4];
        if (after && after !== "/") {
          break;
        }
        rest = rest.slice(3);
        consume("/**", 3);
      }
      if (prior.type === "bos" && eos()) {
        prev.type = "globstar";
        prev.value += value2;
        prev.output = globstar(opts);
        state.output = prev.output;
        state.globstar = true;
        consume(value2);
        continue;
      }
      if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;
        prev.type = "globstar";
        prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
        prev.value += value2;
        state.globstar = true;
        state.output += prior.output + prev.output;
        consume(value2);
        continue;
      }
      if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
        const end = rest[1] !== void 0 ? "|$" : "";
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;
        prev.type = "globstar";
        prev.output = `${globstar(opts)}${SLASH_LITERAL2}|${SLASH_LITERAL2}${end})`;
        prev.value += value2;
        state.output += prior.output + prev.output;
        state.globstar = true;
        consume(value2 + advance());
        push2({ type: "slash", value: "/", output: "" });
        continue;
      }
      if (prior.type === "bos" && rest[0] === "/") {
        prev.type = "globstar";
        prev.value += value2;
        prev.output = `(?:^|${SLASH_LITERAL2}|${globstar(opts)}${SLASH_LITERAL2})`;
        state.output = prev.output;
        state.globstar = true;
        consume(value2 + advance());
        push2({ type: "slash", value: "/", output: "" });
        continue;
      }
      state.output = state.output.slice(0, -prev.output.length);
      prev.type = "globstar";
      prev.output = globstar(opts);
      prev.value += value2;
      state.output += prev.output;
      state.globstar = true;
      consume(value2);
      continue;
    }
    const token = { type: "star", value: value2, output: star };
    if (opts.bash === true) {
      token.output = ".*?";
      if (prev.type === "bos" || prev.type === "slash") {
        token.output = nodot + token.output;
      }
      push2(token);
      continue;
    }
    if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
      token.output = value2;
      push2(token);
      continue;
    }
    if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
      if (prev.type === "dot") {
        state.output += NO_DOT_SLASH2;
        prev.output += NO_DOT_SLASH2;
      } else if (opts.dot === true) {
        state.output += NO_DOTS_SLASH2;
        prev.output += NO_DOTS_SLASH2;
      } else {
        state.output += nodot;
        prev.output += nodot;
      }
      if (peek() !== "*") {
        state.output += ONE_CHAR2;
        prev.output += ONE_CHAR2;
      }
    }
    push2(token);
  }
  while (state.brackets > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
    state.output = utils$5.escapeLast(state.output, "[");
    decrement("brackets");
  }
  while (state.parens > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
    state.output = utils$5.escapeLast(state.output, "(");
    decrement("parens");
  }
  while (state.braces > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
    state.output = utils$5.escapeLast(state.output, "{");
    decrement("braces");
  }
  if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
    push2({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL2}?` });
  }
  if (state.backtrack === true) {
    state.output = "";
    for (const token of state.tokens) {
      state.output += token.output != null ? token.output : token.value;
      if (token.suffix) {
        state.output += token.suffix;
      }
    }
  }
  return state;
};
parse$a.fastpaths = (input, options2) => {
  const opts = { ...options2 };
  const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH$1, opts.maxLength) : MAX_LENGTH$1;
  const len = input.length;
  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }
  input = REPLACEMENTS[input] || input;
  const win322 = utils$5.isWindows(options2);
  const {
    DOT_LITERAL: DOT_LITERAL2,
    SLASH_LITERAL: SLASH_LITERAL2,
    ONE_CHAR: ONE_CHAR2,
    DOTS_SLASH: DOTS_SLASH2,
    NO_DOT: NO_DOT2,
    NO_DOTS: NO_DOTS2,
    NO_DOTS_SLASH: NO_DOTS_SLASH2,
    STAR: STAR2,
    START_ANCHOR: START_ANCHOR2
  } = constants$4.globChars(win322);
  const nodot = opts.dot ? NO_DOTS2 : NO_DOT2;
  const slashDot = opts.dot ? NO_DOTS_SLASH2 : NO_DOT2;
  const capture = opts.capture ? "" : "?:";
  const state = { negated: false, prefix: "" };
  let star = opts.bash === true ? ".*?" : STAR2;
  if (opts.capture) {
    star = `(${star})`;
  }
  const globstar = (opts2) => {
    if (opts2.noglobstar === true) return star;
    return `(${capture}(?:(?!${START_ANCHOR2}${opts2.dot ? DOTS_SLASH2 : DOT_LITERAL2}).)*?)`;
  };
  const create = (str) => {
    switch (str) {
      case "*":
        return `${nodot}${ONE_CHAR2}${star}`;
      case ".*":
        return `${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "*.*":
        return `${nodot}${star}${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "*/*":
        return `${nodot}${star}${SLASH_LITERAL2}${ONE_CHAR2}${slashDot}${star}`;
      case "**":
        return nodot + globstar(opts);
      case "**/*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${slashDot}${ONE_CHAR2}${star}`;
      case "**/*.*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${slashDot}${star}${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "**/.*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      default: {
        const match = /^(.*?)\.(\w+)$/.exec(str);
        if (!match) return;
        const source2 = create(match[1]);
        if (!source2) return;
        return source2 + DOT_LITERAL2 + match[2];
      }
    }
  };
  const output = utils$5.removePrefix(input, state);
  let source = create(output);
  if (source && opts.strictSlashes !== true) {
    source += `${SLASH_LITERAL2}?`;
  }
  return source;
};
var parse_1$2 = parse$a;
var path$8 = import_path.default;
var scan = scan_1;
var parse$9 = parse_1$2;
var utils$4 = utils$7;
var constants$3 = constants$5;
var isObject$1 = (val) => val && typeof val === "object" && !Array.isArray(val);
var picomatch$3 = (glob, options2, returnState = false) => {
  if (Array.isArray(glob)) {
    const fns = glob.map((input) => picomatch$3(input, options2, returnState));
    const arrayMatcher = (str) => {
      for (const isMatch of fns) {
        const state2 = isMatch(str);
        if (state2) return state2;
      }
      return false;
    };
    return arrayMatcher;
  }
  const isState = isObject$1(glob) && glob.tokens && glob.input;
  if (glob === "" || typeof glob !== "string" && !isState) {
    throw new TypeError("Expected pattern to be a non-empty string");
  }
  const opts = options2 || {};
  const posix2 = utils$4.isWindows(options2);
  const regex = isState ? picomatch$3.compileRe(glob, options2) : picomatch$3.makeRe(glob, options2, false, true);
  const state = regex.state;
  delete regex.state;
  let isIgnored = () => false;
  if (opts.ignore) {
    const ignoreOpts = { ...options2, ignore: null, onMatch: null, onResult: null };
    isIgnored = picomatch$3(opts.ignore, ignoreOpts, returnState);
  }
  const matcher = (input, returnObject = false) => {
    const { isMatch, match, output } = picomatch$3.test(input, regex, options2, { glob, posix: posix2 });
    const result = { glob, state, regex, posix: posix2, input, output, match, isMatch };
    if (typeof opts.onResult === "function") {
      opts.onResult(result);
    }
    if (isMatch === false) {
      result.isMatch = false;
      return returnObject ? result : false;
    }
    if (isIgnored(input)) {
      if (typeof opts.onIgnore === "function") {
        opts.onIgnore(result);
      }
      result.isMatch = false;
      return returnObject ? result : false;
    }
    if (typeof opts.onMatch === "function") {
      opts.onMatch(result);
    }
    return returnObject ? result : true;
  };
  if (returnState) {
    matcher.state = state;
  }
  return matcher;
};
picomatch$3.test = (input, regex, options2, { glob, posix: posix2 } = {}) => {
  if (typeof input !== "string") {
    throw new TypeError("Expected input to be a string");
  }
  if (input === "") {
    return { isMatch: false, output: "" };
  }
  const opts = options2 || {};
  const format2 = opts.format || (posix2 ? utils$4.toPosixSlashes : null);
  let match = input === glob;
  let output = match && format2 ? format2(input) : input;
  if (match === false) {
    output = format2 ? format2(input) : input;
    match = output === glob;
  }
  if (match === false || opts.capture === true) {
    if (opts.matchBase === true || opts.basename === true) {
      match = picomatch$3.matchBase(input, regex, options2, posix2);
    } else {
      match = regex.exec(output);
    }
  }
  return { isMatch: Boolean(match), match, output };
};
picomatch$3.matchBase = (input, glob, options2, posix2 = utils$4.isWindows(options2)) => {
  const regex = glob instanceof RegExp ? glob : picomatch$3.makeRe(glob, options2);
  return regex.test(path$8.basename(input));
};
picomatch$3.isMatch = (str, patterns, options2) => picomatch$3(patterns, options2)(str);
picomatch$3.parse = (pattern, options2) => {
  if (Array.isArray(pattern)) return pattern.map((p2) => picomatch$3.parse(p2, options2));
  return parse$9(pattern, { ...options2, fastpaths: false });
};
picomatch$3.scan = (input, options2) => scan(input, options2);
picomatch$3.compileRe = (state, options2, returnOutput = false, returnState = false) => {
  if (returnOutput === true) {
    return state.output;
  }
  const opts = options2 || {};
  const prepend = opts.contains ? "" : "^";
  const append2 = opts.contains ? "" : "$";
  let source = `${prepend}(?:${state.output})${append2}`;
  if (state && state.negated === true) {
    source = `^(?!${source}).*$`;
  }
  const regex = picomatch$3.toRegex(source, options2);
  if (returnState === true) {
    regex.state = state;
  }
  return regex;
};
picomatch$3.makeRe = (input, options2 = {}, returnOutput = false, returnState = false) => {
  if (!input || typeof input !== "string") {
    throw new TypeError("Expected a non-empty string");
  }
  let parsed = { negated: false, fastpaths: true };
  if (options2.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
    parsed.output = parse$9.fastpaths(input, options2);
  }
  if (!parsed.output) {
    parsed = parse$9(input, options2);
  }
  return picomatch$3.compileRe(parsed, options2, returnOutput, returnState);
};
picomatch$3.toRegex = (source, options2) => {
  try {
    const opts = options2 || {};
    return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
  } catch (err) {
    if (options2 && options2.debug === true) throw err;
    return /$^/;
  }
};
picomatch$3.constants = constants$3;
var picomatch_1 = picomatch$3;
var picomatch$2 = picomatch_1;
var fs$5 = import_fs.default;
var { Readable } = import_stream.default;
var sysPath$3 = import_path.default;
var { promisify: promisify$3 } = import_util.default;
var picomatch$1 = picomatch$2;
var readdir$1 = promisify$3(fs$5.readdir);
var stat$3 = promisify$3(fs$5.stat);
var lstat$2 = promisify$3(fs$5.lstat);
var realpath$1 = promisify$3(fs$5.realpath);
var BANG$2 = "!";
var RECURSIVE_ERROR_CODE = "READDIRP_RECURSIVE_ERROR";
var NORMAL_FLOW_ERRORS = /* @__PURE__ */ new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", RECURSIVE_ERROR_CODE]);
var FILE_TYPE = "files";
var DIR_TYPE = "directories";
var FILE_DIR_TYPE = "files_directories";
var EVERYTHING_TYPE = "all";
var ALL_TYPES = [FILE_TYPE, DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE];
var isNormalFlowError = (error) => NORMAL_FLOW_ERRORS.has(error.code);
var [maj, min] = process.versions.node.split(".").slice(0, 2).map((n) => Number.parseInt(n, 10));
var wantBigintFsStats = process.platform === "win32" && (maj > 10 || maj === 10 && min >= 5);
var normalizeFilter = (filter2) => {
  if (filter2 === void 0) return;
  if (typeof filter2 === "function") return filter2;
  if (typeof filter2 === "string") {
    const glob = picomatch$1(filter2.trim());
    return (entry) => glob(entry.basename);
  }
  if (Array.isArray(filter2)) {
    const positive = [];
    const negative = [];
    for (const item of filter2) {
      const trimmed = item.trim();
      if (trimmed.charAt(0) === BANG$2) {
        negative.push(picomatch$1(trimmed.slice(1)));
      } else {
        positive.push(picomatch$1(trimmed));
      }
    }
    if (negative.length > 0) {
      if (positive.length > 0) {
        return (entry) => positive.some((f) => f(entry.basename)) && !negative.some((f) => f(entry.basename));
      }
      return (entry) => !negative.some((f) => f(entry.basename));
    }
    return (entry) => positive.some((f) => f(entry.basename));
  }
};
var ReaddirpStream = class _ReaddirpStream extends Readable {
  static get defaultOptions() {
    return {
      root: ".",
      /* eslint-disable no-unused-vars */
      fileFilter: (path3) => true,
      directoryFilter: (path3) => true,
      /* eslint-enable no-unused-vars */
      type: FILE_TYPE,
      lstat: false,
      depth: 2147483648,
      alwaysStat: false
    };
  }
  constructor(options2 = {}) {
    super({
      objectMode: true,
      autoDestroy: true,
      highWaterMark: options2.highWaterMark || 4096
    });
    const opts = { ..._ReaddirpStream.defaultOptions, ...options2 };
    const { root, type } = opts;
    this._fileFilter = normalizeFilter(opts.fileFilter);
    this._directoryFilter = normalizeFilter(opts.directoryFilter);
    const statMethod = opts.lstat ? lstat$2 : stat$3;
    if (wantBigintFsStats) {
      this._stat = (path3) => statMethod(path3, { bigint: true });
    } else {
      this._stat = statMethod;
    }
    this._maxDepth = opts.depth;
    this._wantsDir = [DIR_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
    this._wantsFile = [FILE_TYPE, FILE_DIR_TYPE, EVERYTHING_TYPE].includes(type);
    this._wantsEverything = type === EVERYTHING_TYPE;
    this._root = sysPath$3.resolve(root);
    this._isDirent = "Dirent" in fs$5 && !opts.alwaysStat;
    this._statsProp = this._isDirent ? "dirent" : "stats";
    this._rdOptions = { encoding: "utf8", withFileTypes: this._isDirent };
    this.parents = [this._exploreDir(root, 1)];
    this.reading = false;
    this.parent = void 0;
  }
  async _read(batch) {
    if (this.reading) return;
    this.reading = true;
    try {
      while (!this.destroyed && batch > 0) {
        const { path: path3, depth: depth2, files = [] } = this.parent || {};
        if (files.length > 0) {
          const slice = files.splice(0, batch).map((dirent) => this._formatEntry(dirent, path3));
          for (const entry of await Promise.all(slice)) {
            if (this.destroyed) return;
            const entryType = await this._getEntryType(entry);
            if (entryType === "directory" && this._directoryFilter(entry)) {
              if (depth2 <= this._maxDepth) {
                this.parents.push(this._exploreDir(entry.fullPath, depth2 + 1));
              }
              if (this._wantsDir) {
                this.push(entry);
                batch--;
              }
            } else if ((entryType === "file" || this._includeAsFile(entry)) && this._fileFilter(entry)) {
              if (this._wantsFile) {
                this.push(entry);
                batch--;
              }
            }
          }
        } else {
          const parent = this.parents.pop();
          if (!parent) {
            this.push(null);
            break;
          }
          this.parent = await parent;
          if (this.destroyed) return;
        }
      }
    } catch (error) {
      this.destroy(error);
    } finally {
      this.reading = false;
    }
  }
  async _exploreDir(path3, depth2) {
    let files;
    try {
      files = await readdir$1(path3, this._rdOptions);
    } catch (error) {
      this._onError(error);
    }
    return { files, depth: depth2, path: path3 };
  }
  async _formatEntry(dirent, path3) {
    let entry;
    try {
      const basename2 = this._isDirent ? dirent.name : dirent;
      const fullPath = sysPath$3.resolve(sysPath$3.join(path3, basename2));
      entry = { path: sysPath$3.relative(this._root, fullPath), fullPath, basename: basename2 };
      entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
    } catch (err) {
      this._onError(err);
    }
    return entry;
  }
  _onError(err) {
    if (isNormalFlowError(err) && !this.destroyed) {
      this.emit("warn", err);
    } else {
      this.destroy(err);
    }
  }
  async _getEntryType(entry) {
    const stats = entry && entry[this._statsProp];
    if (!stats) {
      return;
    }
    if (stats.isFile()) {
      return "file";
    }
    if (stats.isDirectory()) {
      return "directory";
    }
    if (stats && stats.isSymbolicLink()) {
      const full = entry.fullPath;
      try {
        const entryRealPath = await realpath$1(full);
        const entryRealPathStats = await lstat$2(entryRealPath);
        if (entryRealPathStats.isFile()) {
          return "file";
        }
        if (entryRealPathStats.isDirectory()) {
          const len = entryRealPath.length;
          if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath$3.sep) {
            const recursiveError = new Error(
              `Circular symlink detected: "${full}" points to "${entryRealPath}"`
            );
            recursiveError.code = RECURSIVE_ERROR_CODE;
            return this._onError(recursiveError);
          }
          return "directory";
        }
      } catch (error) {
        this._onError(error);
      }
    }
  }
  _includeAsFile(entry) {
    const stats = entry && entry[this._statsProp];
    return stats && this._wantsEverything && !stats.isDirectory();
  }
};
var readdirp$1 = (root, options2 = {}) => {
  let type = options2.entryType || options2.type;
  if (type === "both") type = FILE_DIR_TYPE;
  if (type) options2.type = type;
  if (!root) {
    throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
  } else if (typeof root !== "string") {
    throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
  } else if (type && !ALL_TYPES.includes(type)) {
    throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(", ")}`);
  }
  options2.root = root;
  return new ReaddirpStream(options2);
};
var readdirpPromise = (root, options2 = {}) => {
  return new Promise((resolve3, reject) => {
    const files = [];
    readdirp$1(root, options2).on("data", (entry) => files.push(entry)).on("end", () => resolve3(files)).on("error", (error) => reject(error));
  });
};
readdirp$1.promise = readdirpPromise;
readdirp$1.ReaddirpStream = ReaddirpStream;
readdirp$1.default = readdirp$1;
var readdirp_1 = readdirp$1;
var anymatch$2 = { exports: {} };
var normalizePath$2 = function(path3, stripTrailing) {
  if (typeof path3 !== "string") {
    throw new TypeError("expected path to be a string");
  }
  if (path3 === "\\" || path3 === "/") return "/";
  var len = path3.length;
  if (len <= 1) return path3;
  var prefix = "";
  if (len > 4 && path3[3] === "\\") {
    var ch = path3[2];
    if ((ch === "?" || ch === ".") && path3.slice(0, 2) === "\\\\") {
      path3 = path3.slice(2);
      prefix = "//";
    }
  }
  var segs = path3.split(/[/\\]+/);
  if (stripTrailing !== false && segs[segs.length - 1] === "") {
    segs.pop();
  }
  return prefix + segs.join("/");
};
var anymatch_1 = anymatch$2.exports;
Object.defineProperty(anymatch_1, "__esModule", { value: true });
var picomatch = picomatch$2;
var normalizePath$1 = normalizePath$2;
var BANG$1 = "!";
var DEFAULT_OPTIONS = { returnIndex: false };
var arrify$1 = (item) => Array.isArray(item) ? item : [item];
var createPattern = (matcher, options2) => {
  if (typeof matcher === "function") {
    return matcher;
  }
  if (typeof matcher === "string") {
    const glob = picomatch(matcher, options2);
    return (string) => matcher === string || glob(string);
  }
  if (matcher instanceof RegExp) {
    return (string) => matcher.test(string);
  }
  return (string) => false;
};
var matchPatterns = (patterns, negPatterns, args, returnIndex) => {
  const isList = Array.isArray(args);
  const _path = isList ? args[0] : args;
  if (!isList && typeof _path !== "string") {
    throw new TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(_path));
  }
  const path3 = normalizePath$1(_path, false);
  for (let index = 0; index < negPatterns.length; index++) {
    const nglob = negPatterns[index];
    if (nglob(path3)) {
      return returnIndex ? -1 : false;
    }
  }
  const applied = isList && [path3].concat(args.slice(1));
  for (let index = 0; index < patterns.length; index++) {
    const pattern = patterns[index];
    if (isList ? pattern(...applied) : pattern(path3)) {
      return returnIndex ? index : true;
    }
  }
  return returnIndex ? -1 : false;
};
var anymatch$1 = (matchers, testString, options2 = DEFAULT_OPTIONS) => {
  if (matchers == null) {
    throw new TypeError("anymatch: specify first argument");
  }
  const opts = typeof options2 === "boolean" ? { returnIndex: options2 } : options2;
  const returnIndex = opts.returnIndex || false;
  const mtchers = arrify$1(matchers);
  const negatedGlobs = mtchers.filter((item) => typeof item === "string" && item.charAt(0) === BANG$1).map((item) => item.slice(1)).map((item) => picomatch(item, opts));
  const patterns = mtchers.filter((item) => typeof item !== "string" || typeof item === "string" && item.charAt(0) !== BANG$1).map((matcher) => createPattern(matcher, opts));
  if (testString == null) {
    return (testString2, ri = false) => {
      const returnIndex2 = typeof ri === "boolean" ? ri : false;
      return matchPatterns(patterns, negatedGlobs, testString2, returnIndex2);
    };
  }
  return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
};
anymatch$1.default = anymatch$1;
anymatch$2.exports = anymatch$1;
var anymatchExports = anymatch$2.exports;
var isExtglob$1 = function isExtglob(str) {
  if (typeof str !== "string" || str === "") {
    return false;
  }
  var match;
  while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
    if (match[2]) return true;
    str = str.slice(match.index + match[0].length);
  }
  return false;
};
var isExtglob2 = isExtglob$1;
var chars2 = { "{": "}", "(": ")", "[": "]" };
var strictCheck = function(str) {
  if (str[0] === "!") {
    return true;
  }
  var index = 0;
  var pipeIndex = -2;
  var closeSquareIndex = -2;
  var closeCurlyIndex = -2;
  var closeParenIndex = -2;
  var backSlashIndex = -2;
  while (index < str.length) {
    if (str[index] === "*") {
      return true;
    }
    if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
      return true;
    }
    if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
      if (closeSquareIndex < index) {
        closeSquareIndex = str.indexOf("]", index);
      }
      if (closeSquareIndex > index) {
        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
          return true;
        }
        backSlashIndex = str.indexOf("\\", index);
        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
          return true;
        }
      }
    }
    if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
      closeCurlyIndex = str.indexOf("}", index);
      if (closeCurlyIndex > index) {
        backSlashIndex = str.indexOf("\\", index);
        if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
          return true;
        }
      }
    }
    if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
      closeParenIndex = str.indexOf(")", index);
      if (closeParenIndex > index) {
        backSlashIndex = str.indexOf("\\", index);
        if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
          return true;
        }
      }
    }
    if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
      if (pipeIndex < index) {
        pipeIndex = str.indexOf("|", index);
      }
      if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
        closeParenIndex = str.indexOf(")", pipeIndex);
        if (closeParenIndex > pipeIndex) {
          backSlashIndex = str.indexOf("\\", pipeIndex);
          if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
            return true;
          }
        }
      }
    }
    if (str[index] === "\\") {
      var open = str[index + 1];
      index += 2;
      var close2 = chars2[open];
      if (close2) {
        var n = str.indexOf(close2, index);
        if (n !== -1) {
          index = n + 1;
        }
      }
      if (str[index] === "!") {
        return true;
      }
    } else {
      index++;
    }
  }
  return false;
};
var relaxedCheck = function(str) {
  if (str[0] === "!") {
    return true;
  }
  var index = 0;
  while (index < str.length) {
    if (/[*?{}()[\]]/.test(str[index])) {
      return true;
    }
    if (str[index] === "\\") {
      var open = str[index + 1];
      index += 2;
      var close2 = chars2[open];
      if (close2) {
        var n = str.indexOf(close2, index);
        if (n !== -1) {
          index = n + 1;
        }
      }
      if (str[index] === "!") {
        return true;
      }
    } else {
      index++;
    }
  }
  return false;
};
var isGlob$2 = function isGlob(str, options2) {
  if (typeof str !== "string" || str === "") {
    return false;
  }
  if (isExtglob2(str)) {
    return true;
  }
  var check = strictCheck;
  if (options2 && options2.strict === false) {
    check = relaxedCheck;
  }
  return check(str);
};
var isGlob$1 = isGlob$2;
var pathPosixDirname = import_path.default.posix.dirname;
var isWin32 = import_os.default.platform() === "win32";
var slash = "/";
var backslash = /\\/g;
var enclosure = /[\{\[].*[\}\]]$/;
var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
var globParent$1 = function globParent(str, opts) {
  var options2 = Object.assign({ flipBackslashes: true }, opts);
  if (options2.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
    str = str.replace(backslash, slash);
  }
  if (enclosure.test(str)) {
    str += slash;
  }
  str += "a";
  do {
    str = pathPosixDirname(str);
  } while (isGlob$1(str) || globby.test(str));
  return str.replace(escaped, "$1");
};
var utils$3 = {};
(function(exports) {
  exports.isInteger = (num) => {
    if (typeof num === "number") {
      return Number.isInteger(num);
    }
    if (typeof num === "string" && num.trim() !== "") {
      return Number.isInteger(Number(num));
    }
    return false;
  };
  exports.find = (node2, type) => node2.nodes.find((node3) => node3.type === type);
  exports.exceedsLimit = (min2, max, step = 1, limit) => {
    if (limit === false) return false;
    if (!exports.isInteger(min2) || !exports.isInteger(max)) return false;
    return (Number(max) - Number(min2)) / Number(step) >= limit;
  };
  exports.escapeNode = (block, n = 0, type) => {
    const node2 = block.nodes[n];
    if (!node2) return;
    if (type && node2.type === type || node2.type === "open" || node2.type === "close") {
      if (node2.escaped !== true) {
        node2.value = "\\" + node2.value;
        node2.escaped = true;
      }
    }
  };
  exports.encloseBrace = (node2) => {
    if (node2.type !== "brace") return false;
    if (node2.commas >> 0 + node2.ranges >> 0 === 0) {
      node2.invalid = true;
      return true;
    }
    return false;
  };
  exports.isInvalidBrace = (block) => {
    if (block.type !== "brace") return false;
    if (block.invalid === true || block.dollar) return true;
    if (block.commas >> 0 + block.ranges >> 0 === 0) {
      block.invalid = true;
      return true;
    }
    if (block.open !== true || block.close !== true) {
      block.invalid = true;
      return true;
    }
    return false;
  };
  exports.isOpenOrClose = (node2) => {
    if (node2.type === "open" || node2.type === "close") {
      return true;
    }
    return node2.open === true || node2.close === true;
  };
  exports.reduce = (nodes) => nodes.reduce((acc, node2) => {
    if (node2.type === "text") acc.push(node2.value);
    if (node2.type === "range") node2.type = "text";
    return acc;
  }, []);
  exports.flatten = (...args) => {
    const result = [];
    const flat = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (Array.isArray(ele)) {
          flat(ele);
          continue;
        }
        if (ele !== void 0) {
          result.push(ele);
        }
      }
      return result;
    };
    flat(args);
    return result;
  };
})(utils$3);
var utils$2 = utils$3;
var stringify$4 = (ast, options2 = {}) => {
  const stringify2 = (node2, parent = {}) => {
    const invalidBlock = options2.escapeInvalid && utils$2.isInvalidBrace(parent);
    const invalidNode = node2.invalid === true && options2.escapeInvalid === true;
    let output = "";
    if (node2.value) {
      if ((invalidBlock || invalidNode) && utils$2.isOpenOrClose(node2)) {
        return "\\" + node2.value;
      }
      return node2.value;
    }
    if (node2.value) {
      return node2.value;
    }
    if (node2.nodes) {
      for (const child of node2.nodes) {
        output += stringify2(child);
      }
    }
    return output;
  };
  return stringify2(ast);
};
var isNumber$2 = function(num) {
  if (typeof num === "number") {
    return num - num === 0;
  }
  if (typeof num === "string" && num.trim() !== "") {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};
var isNumber$1 = isNumber$2;
var toRegexRange$1 = (min2, max, options2) => {
  if (isNumber$1(min2) === false) {
    throw new TypeError("toRegexRange: expected the first argument to be a number");
  }
  if (max === void 0 || min2 === max) {
    return String(min2);
  }
  if (isNumber$1(max) === false) {
    throw new TypeError("toRegexRange: expected the second argument to be a number.");
  }
  let opts = { relaxZeros: true, ...options2 };
  if (typeof opts.strictZeros === "boolean") {
    opts.relaxZeros = opts.strictZeros === false;
  }
  let relax = String(opts.relaxZeros);
  let shorthand = String(opts.shorthand);
  let capture = String(opts.capture);
  let wrap2 = String(opts.wrap);
  let cacheKey = min2 + ":" + max + "=" + relax + shorthand + capture + wrap2;
  if (toRegexRange$1.cache.hasOwnProperty(cacheKey)) {
    return toRegexRange$1.cache[cacheKey].result;
  }
  let a = Math.min(min2, max);
  let b = Math.max(min2, max);
  if (Math.abs(a - b) === 1) {
    let result = min2 + "|" + max;
    if (opts.capture) {
      return `(${result})`;
    }
    if (opts.wrap === false) {
      return result;
    }
    return `(?:${result})`;
  }
  let isPadded = hasPadding(min2) || hasPadding(max);
  let state = { min: min2, max, a, b };
  let positives = [];
  let negatives = [];
  if (isPadded) {
    state.isPadded = isPadded;
    state.maxLen = String(state.max).length;
  }
  if (a < 0) {
    let newMin = b < 0 ? Math.abs(b) : 1;
    negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
    a = state.a = 0;
  }
  if (b >= 0) {
    positives = splitToPatterns(a, b, state, opts);
  }
  state.negatives = negatives;
  state.positives = positives;
  state.result = collatePatterns(negatives, positives);
  if (opts.capture === true) {
    state.result = `(${state.result})`;
  } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
    state.result = `(?:${state.result})`;
  }
  toRegexRange$1.cache[cacheKey] = state;
  return state.result;
};
function collatePatterns(neg, pos, options2) {
  let onlyNegative = filterPatterns(neg, pos, "-", false) || [];
  let onlyPositive = filterPatterns(pos, neg, "", false) || [];
  let intersected = filterPatterns(neg, pos, "-?", true) || [];
  let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
  return subpatterns.join("|");
}
function splitToRanges(min2, max) {
  let nines = 1;
  let zeros2 = 1;
  let stop = countNines(min2, nines);
  let stops = /* @__PURE__ */ new Set([max]);
  while (min2 <= stop && stop <= max) {
    stops.add(stop);
    nines += 1;
    stop = countNines(min2, nines);
  }
  stop = countZeros(max + 1, zeros2) - 1;
  while (min2 < stop && stop <= max) {
    stops.add(stop);
    zeros2 += 1;
    stop = countZeros(max + 1, zeros2) - 1;
  }
  stops = [...stops];
  stops.sort(compare);
  return stops;
}
function rangeToPattern(start, stop, options2) {
  if (start === stop) {
    return { pattern: start, count: [], digits: 0 };
  }
  let zipped = zip(start, stop);
  let digits = zipped.length;
  let pattern = "";
  let count = 0;
  for (let i = 0; i < digits; i++) {
    let [startDigit, stopDigit] = zipped[i];
    if (startDigit === stopDigit) {
      pattern += startDigit;
    } else if (startDigit !== "0" || stopDigit !== "9") {
      pattern += toCharacterClass(startDigit, stopDigit);
    } else {
      count++;
    }
  }
  if (count) {
    pattern += options2.shorthand === true ? "\\d" : "[0-9]";
  }
  return { pattern, count: [count], digits };
}
function splitToPatterns(min2, max, tok, options2) {
  let ranges = splitToRanges(min2, max);
  let tokens = [];
  let start = min2;
  let prev;
  for (let i = 0; i < ranges.length; i++) {
    let max2 = ranges[i];
    let obj = rangeToPattern(String(start), String(max2), options2);
    let zeros2 = "";
    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
      if (prev.count.length > 1) {
        prev.count.pop();
      }
      prev.count.push(obj.count[0]);
      prev.string = prev.pattern + toQuantifier(prev.count);
      start = max2 + 1;
      continue;
    }
    if (tok.isPadded) {
      zeros2 = padZeros(max2, tok, options2);
    }
    obj.string = zeros2 + obj.pattern + toQuantifier(obj.count);
    tokens.push(obj);
    start = max2 + 1;
    prev = obj;
  }
  return tokens;
}
function filterPatterns(arr, comparison, prefix, intersection, options2) {
  let result = [];
  for (let ele of arr) {
    let { string } = ele;
    if (!intersection && !contains(comparison, "string", string)) {
      result.push(prefix + string);
    }
    if (intersection && contains(comparison, "string", string)) {
      result.push(prefix + string);
    }
  }
  return result;
}
function zip(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
  return arr;
}
function compare(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}
function contains(arr, key, val) {
  return arr.some((ele) => ele[key] === val);
}
function countNines(min2, len) {
  return Number(String(min2).slice(0, -len) + "9".repeat(len));
}
function countZeros(integer, zeros2) {
  return integer - integer % Math.pow(10, zeros2);
}
function toQuantifier(digits) {
  let [start = 0, stop = ""] = digits;
  if (stop || start > 1) {
    return `{${start + (stop ? "," + stop : "")}}`;
  }
  return "";
}
function toCharacterClass(a, b, options2) {
  return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
}
function hasPadding(str) {
  return /^-?(0+)\d/.test(str);
}
function padZeros(value2, tok, options2) {
  if (!tok.isPadded) {
    return value2;
  }
  let diff = Math.abs(tok.maxLen - String(value2).length);
  let relax = options2.relaxZeros !== false;
  switch (diff) {
    case 0:
      return "";
    case 1:
      return relax ? "0?" : "0";
    case 2:
      return relax ? "0{0,2}" : "00";
    default: {
      return relax ? `0{0,${diff}}` : `0{${diff}}`;
    }
  }
}
toRegexRange$1.cache = {};
toRegexRange$1.clearCache = () => toRegexRange$1.cache = {};
var toRegexRange_1 = toRegexRange$1;
var util = import_util.default;
var toRegexRange = toRegexRange_1;
var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
var transform = (toNumber) => {
  return (value2) => toNumber === true ? Number(value2) : String(value2);
};
var isValidValue = (value2) => {
  return typeof value2 === "number" || typeof value2 === "string" && value2 !== "";
};
var isNumber = (num) => Number.isInteger(+num);
var zeros = (input) => {
  let value2 = `${input}`;
  let index = -1;
  if (value2[0] === "-") value2 = value2.slice(1);
  if (value2 === "0") return false;
  while (value2[++index] === "0") ;
  return index > 0;
};
var stringify$3 = (start, end, options2) => {
  if (typeof start === "string" || typeof end === "string") {
    return true;
  }
  return options2.stringify === true;
};
var pad = (input, maxLength, toNumber) => {
  if (maxLength > 0) {
    let dash = input[0] === "-" ? "-" : "";
    if (dash) input = input.slice(1);
    input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
  }
  if (toNumber === false) {
    return String(input);
  }
  return input;
};
var toMaxLen = (input, maxLength) => {
  let negative = input[0] === "-" ? "-" : "";
  if (negative) {
    input = input.slice(1);
    maxLength--;
  }
  while (input.length < maxLength) input = "0" + input;
  return negative ? "-" + input : input;
};
var toSequence = (parts, options2, maxLen) => {
  parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  let prefix = options2.capture ? "" : "?:";
  let positives = "";
  let negatives = "";
  let result;
  if (parts.positives.length) {
    positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
  }
  if (parts.negatives.length) {
    negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
  }
  if (positives && negatives) {
    result = `${positives}|${negatives}`;
  } else {
    result = positives || negatives;
  }
  if (options2.wrap) {
    return `(${prefix}${result})`;
  }
  return result;
};
var toRange = (a, b, isNumbers, options2) => {
  if (isNumbers) {
    return toRegexRange(a, b, { wrap: false, ...options2 });
  }
  let start = String.fromCharCode(a);
  if (a === b) return start;
  let stop = String.fromCharCode(b);
  return `[${start}-${stop}]`;
};
var toRegex = (start, end, options2) => {
  if (Array.isArray(start)) {
    let wrap2 = options2.wrap === true;
    let prefix = options2.capture ? "" : "?:";
    return wrap2 ? `(${prefix}${start.join("|")})` : start.join("|");
  }
  return toRegexRange(start, end, options2);
};
var rangeError = (...args) => {
  return new RangeError("Invalid range arguments: " + util.inspect(...args));
};
var invalidRange = (start, end, options2) => {
  if (options2.strictRanges === true) throw rangeError([start, end]);
  return [];
};
var invalidStep = (step, options2) => {
  if (options2.strictRanges === true) {
    throw new TypeError(`Expected step "${step}" to be a number`);
  }
  return [];
};
var fillNumbers = (start, end, step = 1, options2 = {}) => {
  let a = Number(start);
  let b = Number(end);
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    if (options2.strictRanges === true) throw rangeError([start, end]);
    return [];
  }
  if (a === 0) a = 0;
  if (b === 0) b = 0;
  let descending = a > b;
  let startString = String(start);
  let endString = String(end);
  let stepString = String(step);
  step = Math.max(Math.abs(step), 1);
  let padded = zeros(startString) || zeros(endString) || zeros(stepString);
  let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
  let toNumber = padded === false && stringify$3(start, end, options2) === false;
  let format2 = options2.transform || transform(toNumber);
  if (options2.toRegex && step === 1) {
    return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options2);
  }
  let parts = { negatives: [], positives: [] };
  let push2 = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
  let range = [];
  let index = 0;
  while (descending ? a >= b : a <= b) {
    if (options2.toRegex === true && step > 1) {
      push2(a);
    } else {
      range.push(pad(format2(a, index), maxLen, toNumber));
    }
    a = descending ? a - step : a + step;
    index++;
  }
  if (options2.toRegex === true) {
    return step > 1 ? toSequence(parts, options2, maxLen) : toRegex(range, null, { wrap: false, ...options2 });
  }
  return range;
};
var fillLetters = (start, end, step = 1, options2 = {}) => {
  if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
    return invalidRange(start, end, options2);
  }
  let format2 = options2.transform || ((val) => String.fromCharCode(val));
  let a = `${start}`.charCodeAt(0);
  let b = `${end}`.charCodeAt(0);
  let descending = a > b;
  let min2 = Math.min(a, b);
  let max = Math.max(a, b);
  if (options2.toRegex && step === 1) {
    return toRange(min2, max, false, options2);
  }
  let range = [];
  let index = 0;
  while (descending ? a >= b : a <= b) {
    range.push(format2(a, index));
    a = descending ? a - step : a + step;
    index++;
  }
  if (options2.toRegex === true) {
    return toRegex(range, null, { wrap: false, options: options2 });
  }
  return range;
};
var fill$2 = (start, end, step, options2 = {}) => {
  if (end == null && isValidValue(start)) {
    return [start];
  }
  if (!isValidValue(start) || !isValidValue(end)) {
    return invalidRange(start, end, options2);
  }
  if (typeof step === "function") {
    return fill$2(start, end, 1, { transform: step });
  }
  if (isObject(step)) {
    return fill$2(start, end, 0, step);
  }
  let opts = { ...options2 };
  if (opts.capture === true) opts.wrap = true;
  step = step || opts.step || 1;
  if (!isNumber(step)) {
    if (step != null && !isObject(step)) return invalidStep(step, opts);
    return fill$2(start, end, 1, step);
  }
  if (isNumber(start) && isNumber(end)) {
    return fillNumbers(start, end, step, opts);
  }
  return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};
var fillRange = fill$2;
var fill$1 = fillRange;
var utils$1 = utils$3;
var compile$1 = (ast, options2 = {}) => {
  const walk = (node2, parent = {}) => {
    const invalidBlock = utils$1.isInvalidBrace(parent);
    const invalidNode = node2.invalid === true && options2.escapeInvalid === true;
    const invalid = invalidBlock === true || invalidNode === true;
    const prefix = options2.escapeInvalid === true ? "\\" : "";
    let output = "";
    if (node2.isOpen === true) {
      return prefix + node2.value;
    }
    if (node2.isClose === true) {
      console.log("node.isClose", prefix, node2.value);
      return prefix + node2.value;
    }
    if (node2.type === "open") {
      return invalid ? prefix + node2.value : "(";
    }
    if (node2.type === "close") {
      return invalid ? prefix + node2.value : ")";
    }
    if (node2.type === "comma") {
      return node2.prev.type === "comma" ? "" : invalid ? node2.value : "|";
    }
    if (node2.value) {
      return node2.value;
    }
    if (node2.nodes && node2.ranges > 0) {
      const args = utils$1.reduce(node2.nodes);
      const range = fill$1(...args, { ...options2, wrap: false, toRegex: true, strictZeros: true });
      if (range.length !== 0) {
        return args.length > 1 && range.length > 1 ? `(${range})` : range;
      }
    }
    if (node2.nodes) {
      for (const child of node2.nodes) {
        output += walk(child, node2);
      }
    }
    return output;
  };
  return walk(ast);
};
var compile_1 = compile$1;
var fill = fillRange;
var stringify$2 = stringify$4;
var utils = utils$3;
var append = (queue2 = "", stash = "", enclose = false) => {
  const result = [];
  queue2 = [].concat(queue2);
  stash = [].concat(stash);
  if (!stash.length) return queue2;
  if (!queue2.length) {
    return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
  }
  for (const item of queue2) {
    if (Array.isArray(item)) {
      for (const value2 of item) {
        result.push(append(value2, stash, enclose));
      }
    } else {
      for (let ele of stash) {
        if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
        result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
      }
    }
  }
  return utils.flatten(result);
};
var expand$1 = (ast, options2 = {}) => {
  const rangeLimit = options2.rangeLimit === void 0 ? 1e3 : options2.rangeLimit;
  const walk = (node2, parent = {}) => {
    node2.queue = [];
    let p2 = parent;
    let q = parent.queue;
    while (p2.type !== "brace" && p2.type !== "root" && p2.parent) {
      p2 = p2.parent;
      q = p2.queue;
    }
    if (node2.invalid || node2.dollar) {
      q.push(append(q.pop(), stringify$2(node2, options2)));
      return;
    }
    if (node2.type === "brace" && node2.invalid !== true && node2.nodes.length === 2) {
      q.push(append(q.pop(), ["{}"]));
      return;
    }
    if (node2.nodes && node2.ranges > 0) {
      const args = utils.reduce(node2.nodes);
      if (utils.exceedsLimit(...args, options2.step, rangeLimit)) {
        throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
      }
      let range = fill(...args, options2);
      if (range.length === 0) {
        range = stringify$2(node2, options2);
      }
      q.push(append(q.pop(), range));
      node2.nodes = [];
      return;
    }
    const enclose = utils.encloseBrace(node2);
    let queue2 = node2.queue;
    let block = node2;
    while (block.type !== "brace" && block.type !== "root" && block.parent) {
      block = block.parent;
      queue2 = block.queue;
    }
    for (let i = 0; i < node2.nodes.length; i++) {
      const child = node2.nodes[i];
      if (child.type === "comma" && node2.type === "brace") {
        if (i === 1) queue2.push("");
        queue2.push("");
        continue;
      }
      if (child.type === "close") {
        q.push(append(q.pop(), queue2, enclose));
        continue;
      }
      if (child.value && child.type !== "open") {
        queue2.push(append(queue2.pop(), child.value));
        continue;
      }
      if (child.nodes) {
        walk(child, node2);
      }
    }
    return queue2;
  };
  return utils.flatten(walk(ast));
};
var expand_1 = expand$1;
var constants$2 = {
  MAX_LENGTH: 1e4,
  CHAR_LEFT_PARENTHESES: "(",
  /* ( */
  CHAR_RIGHT_PARENTHESES: ")",
  /* ) */
  CHAR_BACKSLASH: "\\",
  /* \ */
  CHAR_BACKTICK: "`",
  /* ` */
  CHAR_COMMA: ",",
  /* , */
  CHAR_DOT: ".",
  /* . */
  CHAR_DOUBLE_QUOTE: '"',
  /* " */
  CHAR_LEFT_CURLY_BRACE: "{",
  /* { */
  CHAR_LEFT_SQUARE_BRACKET: "[",
  /* [ */
  CHAR_NO_BREAK_SPACE: " ",
  /* \u00A0 */
  CHAR_RIGHT_CURLY_BRACE: "}",
  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: "]",
  /* ] */
  CHAR_SINGLE_QUOTE: "'",
  /* ' */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
  /* \uFEFF */
};
var stringify$1 = stringify$4;
var {
  MAX_LENGTH,
  CHAR_BACKSLASH,
  /* \ */
  CHAR_BACKTICK,
  /* ` */
  CHAR_COMMA,
  /* , */
  CHAR_DOT,
  /* . */
  CHAR_LEFT_PARENTHESES,
  /* ( */
  CHAR_RIGHT_PARENTHESES,
  /* ) */
  CHAR_LEFT_CURLY_BRACE,
  /* { */
  CHAR_RIGHT_CURLY_BRACE,
  /* } */
  CHAR_LEFT_SQUARE_BRACKET,
  /* [ */
  CHAR_RIGHT_SQUARE_BRACKET,
  /* ] */
  CHAR_DOUBLE_QUOTE,
  /* " */
  CHAR_SINGLE_QUOTE,
  /* ' */
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_NOBREAK_SPACE
} = constants$2;
var parse$8 = (input, options2 = {}) => {
  if (typeof input !== "string") {
    throw new TypeError("Expected a string");
  }
  const opts = options2 || {};
  const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
  if (input.length > max) {
    throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
  }
  const ast = { type: "root", input, nodes: [] };
  const stack = [ast];
  let block = ast;
  let prev = ast;
  let brackets = 0;
  const length = input.length;
  let index = 0;
  let depth2 = 0;
  let value2;
  const advance = () => input[index++];
  const push2 = (node2) => {
    if (node2.type === "text" && prev.type === "dot") {
      prev.type = "text";
    }
    if (prev && prev.type === "text" && node2.type === "text") {
      prev.value += node2.value;
      return;
    }
    block.nodes.push(node2);
    node2.parent = block;
    node2.prev = prev;
    prev = node2;
    return node2;
  };
  push2({ type: "bos" });
  while (index < length) {
    block = stack[stack.length - 1];
    value2 = advance();
    if (value2 === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value2 === CHAR_NO_BREAK_SPACE) {
      continue;
    }
    if (value2 === CHAR_BACKSLASH) {
      push2({ type: "text", value: (options2.keepEscaping ? value2 : "") + advance() });
      continue;
    }
    if (value2 === CHAR_RIGHT_SQUARE_BRACKET) {
      push2({ type: "text", value: "\\" + value2 });
      continue;
    }
    if (value2 === CHAR_LEFT_SQUARE_BRACKET) {
      brackets++;
      let next;
      while (index < length && (next = advance())) {
        value2 += next;
        if (next === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          continue;
        }
        if (next === CHAR_BACKSLASH) {
          value2 += advance();
          continue;
        }
        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
          brackets--;
          if (brackets === 0) {
            break;
          }
        }
      }
      push2({ type: "text", value: value2 });
      continue;
    }
    if (value2 === CHAR_LEFT_PARENTHESES) {
      block = push2({ type: "paren", nodes: [] });
      stack.push(block);
      push2({ type: "text", value: value2 });
      continue;
    }
    if (value2 === CHAR_RIGHT_PARENTHESES) {
      if (block.type !== "paren") {
        push2({ type: "text", value: value2 });
        continue;
      }
      block = stack.pop();
      push2({ type: "text", value: value2 });
      block = stack[stack.length - 1];
      continue;
    }
    if (value2 === CHAR_DOUBLE_QUOTE || value2 === CHAR_SINGLE_QUOTE || value2 === CHAR_BACKTICK) {
      const open = value2;
      let next;
      if (options2.keepQuotes !== true) {
        value2 = "";
      }
      while (index < length && (next = advance())) {
        if (next === CHAR_BACKSLASH) {
          value2 += next + advance();
          continue;
        }
        if (next === open) {
          if (options2.keepQuotes === true) value2 += next;
          break;
        }
        value2 += next;
      }
      push2({ type: "text", value: value2 });
      continue;
    }
    if (value2 === CHAR_LEFT_CURLY_BRACE) {
      depth2++;
      const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
      const brace = {
        type: "brace",
        open: true,
        close: false,
        dollar,
        depth: depth2,
        commas: 0,
        ranges: 0,
        nodes: []
      };
      block = push2(brace);
      stack.push(block);
      push2({ type: "open", value: value2 });
      continue;
    }
    if (value2 === CHAR_RIGHT_CURLY_BRACE) {
      if (block.type !== "brace") {
        push2({ type: "text", value: value2 });
        continue;
      }
      const type = "close";
      block = stack.pop();
      block.close = true;
      push2({ type, value: value2 });
      depth2--;
      block = stack[stack.length - 1];
      continue;
    }
    if (value2 === CHAR_COMMA && depth2 > 0) {
      if (block.ranges > 0) {
        block.ranges = 0;
        const open = block.nodes.shift();
        block.nodes = [open, { type: "text", value: stringify$1(block) }];
      }
      push2({ type: "comma", value: value2 });
      block.commas++;
      continue;
    }
    if (value2 === CHAR_DOT && depth2 > 0 && block.commas === 0) {
      const siblings = block.nodes;
      if (depth2 === 0 || siblings.length === 0) {
        push2({ type: "text", value: value2 });
        continue;
      }
      if (prev.type === "dot") {
        block.range = [];
        prev.value += value2;
        prev.type = "range";
        if (block.nodes.length !== 3 && block.nodes.length !== 5) {
          block.invalid = true;
          block.ranges = 0;
          prev.type = "text";
          continue;
        }
        block.ranges++;
        block.args = [];
        continue;
      }
      if (prev.type === "range") {
        siblings.pop();
        const before = siblings[siblings.length - 1];
        before.value += prev.value + value2;
        prev = before;
        block.ranges--;
        continue;
      }
      push2({ type: "dot", value: value2 });
      continue;
    }
    push2({ type: "text", value: value2 });
  }
  do {
    block = stack.pop();
    if (block.type !== "root") {
      block.nodes.forEach((node2) => {
        if (!node2.nodes) {
          if (node2.type === "open") node2.isOpen = true;
          if (node2.type === "close") node2.isClose = true;
          if (!node2.nodes) node2.type = "text";
          node2.invalid = true;
        }
      });
      const parent = stack[stack.length - 1];
      const index2 = parent.nodes.indexOf(block);
      parent.nodes.splice(index2, 1, ...block.nodes);
    }
  } while (stack.length > 0);
  push2({ type: "eos" });
  return ast;
};
var parse_1$1 = parse$8;
var stringify = stringify$4;
var compile = compile_1;
var expand = expand_1;
var parse$7 = parse_1$1;
var braces$1 = (input, options2 = {}) => {
  let output = [];
  if (Array.isArray(input)) {
    for (const pattern of input) {
      const result = braces$1.create(pattern, options2);
      if (Array.isArray(result)) {
        output.push(...result);
      } else {
        output.push(result);
      }
    }
  } else {
    output = [].concat(braces$1.create(input, options2));
  }
  if (options2 && options2.expand === true && options2.nodupes === true) {
    output = [...new Set(output)];
  }
  return output;
};
braces$1.parse = (input, options2 = {}) => parse$7(input, options2);
braces$1.stringify = (input, options2 = {}) => {
  if (typeof input === "string") {
    return stringify(braces$1.parse(input, options2), options2);
  }
  return stringify(input, options2);
};
braces$1.compile = (input, options2 = {}) => {
  if (typeof input === "string") {
    input = braces$1.parse(input, options2);
  }
  return compile(input, options2);
};
braces$1.expand = (input, options2 = {}) => {
  if (typeof input === "string") {
    input = braces$1.parse(input, options2);
  }
  let result = expand(input, options2);
  if (options2.noempty === true) {
    result = result.filter(Boolean);
  }
  if (options2.nodupes === true) {
    result = [...new Set(result)];
  }
  return result;
};
braces$1.create = (input, options2 = {}) => {
  if (input === "" || input.length < 3) {
    return [input];
  }
  return options2.expand !== true ? braces$1.compile(input, options2) : braces$1.expand(input, options2);
};
var braces_1 = braces$1;
var require$$0 = [
  "3dm",
  "3ds",
  "3g2",
  "3gp",
  "7z",
  "a",
  "aac",
  "adp",
  "afdesign",
  "afphoto",
  "afpub",
  "ai",
  "aif",
  "aiff",
  "alz",
  "ape",
  "apk",
  "appimage",
  "ar",
  "arj",
  "asf",
  "au",
  "avi",
  "bak",
  "baml",
  "bh",
  "bin",
  "bk",
  "bmp",
  "btif",
  "bz2",
  "bzip2",
  "cab",
  "caf",
  "cgm",
  "class",
  "cmx",
  "cpio",
  "cr2",
  "cur",
  "dat",
  "dcm",
  "deb",
  "dex",
  "djvu",
  "dll",
  "dmg",
  "dng",
  "doc",
  "docm",
  "docx",
  "dot",
  "dotm",
  "dra",
  "DS_Store",
  "dsk",
  "dts",
  "dtshd",
  "dvb",
  "dwg",
  "dxf",
  "ecelp4800",
  "ecelp7470",
  "ecelp9600",
  "egg",
  "eol",
  "eot",
  "epub",
  "exe",
  "f4v",
  "fbs",
  "fh",
  "fla",
  "flac",
  "flatpak",
  "fli",
  "flv",
  "fpx",
  "fst",
  "fvt",
  "g3",
  "gh",
  "gif",
  "graffle",
  "gz",
  "gzip",
  "h261",
  "h263",
  "h264",
  "icns",
  "ico",
  "ief",
  "img",
  "ipa",
  "iso",
  "jar",
  "jpeg",
  "jpg",
  "jpgv",
  "jpm",
  "jxr",
  "key",
  "ktx",
  "lha",
  "lib",
  "lvp",
  "lz",
  "lzh",
  "lzma",
  "lzo",
  "m3u",
  "m4a",
  "m4v",
  "mar",
  "mdi",
  "mht",
  "mid",
  "midi",
  "mj2",
  "mka",
  "mkv",
  "mmr",
  "mng",
  "mobi",
  "mov",
  "movie",
  "mp3",
  "mp4",
  "mp4a",
  "mpeg",
  "mpg",
  "mpga",
  "mxu",
  "nef",
  "npx",
  "numbers",
  "nupkg",
  "o",
  "odp",
  "ods",
  "odt",
  "oga",
  "ogg",
  "ogv",
  "otf",
  "ott",
  "pages",
  "pbm",
  "pcx",
  "pdb",
  "pdf",
  "pea",
  "pgm",
  "pic",
  "png",
  "pnm",
  "pot",
  "potm",
  "potx",
  "ppa",
  "ppam",
  "ppm",
  "pps",
  "ppsm",
  "ppsx",
  "ppt",
  "pptm",
  "pptx",
  "psd",
  "pya",
  "pyc",
  "pyo",
  "pyv",
  "qt",
  "rar",
  "ras",
  "raw",
  "resources",
  "rgb",
  "rip",
  "rlc",
  "rmf",
  "rmvb",
  "rpm",
  "rtf",
  "rz",
  "s3m",
  "s7z",
  "scpt",
  "sgi",
  "shar",
  "snap",
  "sil",
  "sketch",
  "slk",
  "smv",
  "snk",
  "so",
  "stl",
  "suo",
  "sub",
  "swf",
  "tar",
  "tbz",
  "tbz2",
  "tga",
  "tgz",
  "thmx",
  "tif",
  "tiff",
  "tlz",
  "ttc",
  "ttf",
  "txz",
  "udf",
  "uvh",
  "uvi",
  "uvm",
  "uvp",
  "uvs",
  "uvu",
  "viv",
  "vob",
  "war",
  "wav",
  "wax",
  "wbmp",
  "wdp",
  "weba",
  "webm",
  "webp",
  "whl",
  "wim",
  "wm",
  "wma",
  "wmv",
  "wmx",
  "woff",
  "woff2",
  "wrm",
  "wvx",
  "xbm",
  "xif",
  "xla",
  "xlam",
  "xls",
  "xlsb",
  "xlsm",
  "xlsx",
  "xlt",
  "xltm",
  "xltx",
  "xm",
  "xmind",
  "xpi",
  "xpm",
  "xwd",
  "xz",
  "z",
  "zip",
  "zipx"
];
var binaryExtensions$1 = require$$0;
var path$7 = import_path.default;
var binaryExtensions = binaryExtensions$1;
var extensions = new Set(binaryExtensions);
var isBinaryPath$1 = (filePath) => extensions.has(path$7.extname(filePath).slice(1).toLowerCase());
var constants$1 = {};
(function(exports) {
  const { sep: sep2 } = import_path.default;
  const { platform: platform2 } = process;
  const os2 = import_os.default;
  exports.EV_ALL = "all";
  exports.EV_READY = "ready";
  exports.EV_ADD = "add";
  exports.EV_CHANGE = "change";
  exports.EV_ADD_DIR = "addDir";
  exports.EV_UNLINK = "unlink";
  exports.EV_UNLINK_DIR = "unlinkDir";
  exports.EV_RAW = "raw";
  exports.EV_ERROR = "error";
  exports.STR_DATA = "data";
  exports.STR_END = "end";
  exports.STR_CLOSE = "close";
  exports.FSEVENT_CREATED = "created";
  exports.FSEVENT_MODIFIED = "modified";
  exports.FSEVENT_DELETED = "deleted";
  exports.FSEVENT_MOVED = "moved";
  exports.FSEVENT_CLONED = "cloned";
  exports.FSEVENT_UNKNOWN = "unknown";
  exports.FSEVENT_FLAG_MUST_SCAN_SUBDIRS = 1;
  exports.FSEVENT_TYPE_FILE = "file";
  exports.FSEVENT_TYPE_DIRECTORY = "directory";
  exports.FSEVENT_TYPE_SYMLINK = "symlink";
  exports.KEY_LISTENERS = "listeners";
  exports.KEY_ERR = "errHandlers";
  exports.KEY_RAW = "rawEmitters";
  exports.HANDLER_KEYS = [exports.KEY_LISTENERS, exports.KEY_ERR, exports.KEY_RAW];
  exports.DOT_SLASH = `.${sep2}`;
  exports.BACK_SLASH_RE = /\\/g;
  exports.DOUBLE_SLASH_RE = /\/\//;
  exports.SLASH_OR_BACK_SLASH_RE = /[/\\]/;
  exports.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
  exports.REPLACER_RE = /^\.[/\\]/;
  exports.SLASH = "/";
  exports.SLASH_SLASH = "//";
  exports.BRACE_START = "{";
  exports.BANG = "!";
  exports.ONE_DOT = ".";
  exports.TWO_DOTS = "..";
  exports.STAR = "*";
  exports.GLOBSTAR = "**";
  exports.ROOT_GLOBSTAR = "/**/*";
  exports.SLASH_GLOBSTAR = "/**";
  exports.DIR_SUFFIX = "Dir";
  exports.ANYMATCH_OPTS = { dot: true };
  exports.STRING_TYPE = "string";
  exports.FUNCTION_TYPE = "function";
  exports.EMPTY_STR = "";
  exports.EMPTY_FN = () => {
  };
  exports.IDENTITY_FN = (val) => val;
  exports.isWindows = platform2 === "win32";
  exports.isMacos = platform2 === "darwin";
  exports.isLinux = platform2 === "linux";
  exports.isIBMi = os2.type() === "OS400";
})(constants$1);
var fs$4 = import_fs.default;
var sysPath$2 = import_path.default;
var { promisify: promisify$2 } = import_util.default;
var isBinaryPath = isBinaryPath$1;
var {
  isWindows: isWindows$2,
  isLinux,
  EMPTY_FN: EMPTY_FN$2,
  EMPTY_STR: EMPTY_STR$1,
  KEY_LISTENERS,
  KEY_ERR,
  KEY_RAW,
  HANDLER_KEYS,
  EV_CHANGE: EV_CHANGE$2,
  EV_ADD: EV_ADD$2,
  EV_ADD_DIR: EV_ADD_DIR$2,
  EV_ERROR: EV_ERROR$2,
  STR_DATA: STR_DATA$1,
  STR_END: STR_END$2,
  BRACE_START: BRACE_START$1,
  STAR
} = constants$1;
var THROTTLE_MODE_WATCH = "watch";
var open$1 = promisify$2(fs$4.open);
var stat$2 = promisify$2(fs$4.stat);
var lstat$1 = promisify$2(fs$4.lstat);
var close = promisify$2(fs$4.close);
var fsrealpath = promisify$2(fs$4.realpath);
var statMethods$1 = { lstat: lstat$1, stat: stat$2 };
var foreach = (val, fn) => {
  if (val instanceof Set) {
    val.forEach(fn);
  } else {
    fn(val);
  }
};
var addAndConvert = (main2, prop, item) => {
  let container = main2[prop];
  if (!(container instanceof Set)) {
    main2[prop] = container = /* @__PURE__ */ new Set([container]);
  }
  container.add(item);
};
var clearItem = (cont) => (key) => {
  const set = cont[key];
  if (set instanceof Set) {
    set.clear();
  } else {
    delete cont[key];
  }
};
var delFromSet = (main2, prop, item) => {
  const container = main2[prop];
  if (container instanceof Set) {
    container.delete(item);
  } else if (container === item) {
    delete main2[prop];
  }
};
var isEmptySet = (val) => val instanceof Set ? val.size === 0 : !val;
var FsWatchInstances = /* @__PURE__ */ new Map();
function createFsWatchInstance(path3, options2, listener2, errHandler, emitRaw) {
  const handleEvent = (rawEvent, evPath) => {
    listener2(path3);
    emitRaw(rawEvent, evPath, { watchedPath: path3 });
    if (evPath && path3 !== evPath) {
      fsWatchBroadcast(
        sysPath$2.resolve(path3, evPath),
        KEY_LISTENERS,
        sysPath$2.join(path3, evPath)
      );
    }
  };
  try {
    return fs$4.watch(path3, options2, handleEvent);
  } catch (error) {
    errHandler(error);
  }
}
var fsWatchBroadcast = (fullPath, type, val1, val2, val3) => {
  const cont = FsWatchInstances.get(fullPath);
  if (!cont) return;
  foreach(cont[type], (listener2) => {
    listener2(val1, val2, val3);
  });
};
var setFsWatchListener = (path3, fullPath, options2, handlers) => {
  const { listener: listener2, errHandler, rawEmitter } = handlers;
  let cont = FsWatchInstances.get(fullPath);
  let watcher;
  if (!options2.persistent) {
    watcher = createFsWatchInstance(
      path3,
      options2,
      listener2,
      errHandler,
      rawEmitter
    );
    return watcher.close.bind(watcher);
  }
  if (cont) {
    addAndConvert(cont, KEY_LISTENERS, listener2);
    addAndConvert(cont, KEY_ERR, errHandler);
    addAndConvert(cont, KEY_RAW, rawEmitter);
  } else {
    watcher = createFsWatchInstance(
      path3,
      options2,
      fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS),
      errHandler,
      // no need to use broadcast here
      fsWatchBroadcast.bind(null, fullPath, KEY_RAW)
    );
    if (!watcher) return;
    watcher.on(EV_ERROR$2, async (error) => {
      const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
      cont.watcherUnusable = true;
      if (isWindows$2 && error.code === "EPERM") {
        try {
          const fd = await open$1(path3, "r");
          await close(fd);
          broadcastErr(error);
        } catch (err) {
        }
      } else {
        broadcastErr(error);
      }
    });
    cont = {
      listeners: listener2,
      errHandlers: errHandler,
      rawEmitters: rawEmitter,
      watcher
    };
    FsWatchInstances.set(fullPath, cont);
  }
  return () => {
    delFromSet(cont, KEY_LISTENERS, listener2);
    delFromSet(cont, KEY_ERR, errHandler);
    delFromSet(cont, KEY_RAW, rawEmitter);
    if (isEmptySet(cont.listeners)) {
      cont.watcher.close();
      FsWatchInstances.delete(fullPath);
      HANDLER_KEYS.forEach(clearItem(cont));
      cont.watcher = void 0;
      Object.freeze(cont);
    }
  };
};
var FsWatchFileInstances = /* @__PURE__ */ new Map();
var setFsWatchFileListener = (path3, fullPath, options2, handlers) => {
  const { listener: listener2, rawEmitter } = handlers;
  let cont = FsWatchFileInstances.get(fullPath);
  const copts = cont && cont.options;
  if (copts && (copts.persistent < options2.persistent || copts.interval > options2.interval)) {
    fs$4.unwatchFile(fullPath);
    cont = void 0;
  }
  if (cont) {
    addAndConvert(cont, KEY_LISTENERS, listener2);
    addAndConvert(cont, KEY_RAW, rawEmitter);
  } else {
    cont = {
      listeners: listener2,
      rawEmitters: rawEmitter,
      options: options2,
      watcher: fs$4.watchFile(fullPath, options2, (curr, prev) => {
        foreach(cont.rawEmitters, (rawEmitter2) => {
          rawEmitter2(EV_CHANGE$2, fullPath, { curr, prev });
        });
        const currmtime = curr.mtimeMs;
        if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) {
          foreach(cont.listeners, (listener3) => listener3(path3, curr));
        }
      })
    };
    FsWatchFileInstances.set(fullPath, cont);
  }
  return () => {
    delFromSet(cont, KEY_LISTENERS, listener2);
    delFromSet(cont, KEY_RAW, rawEmitter);
    if (isEmptySet(cont.listeners)) {
      FsWatchFileInstances.delete(fullPath);
      fs$4.unwatchFile(fullPath);
      cont.options = cont.watcher = void 0;
      Object.freeze(cont);
    }
  };
};
var NodeFsHandler$1 = class NodeFsHandler {
  /**
   * @param {import("../index").FSWatcher} fsW
   */
  constructor(fsW) {
    this.fsw = fsW;
    this._boundHandleError = (error) => fsW._handleError(error);
  }
  /**
   * Watch file for changes with fs_watchFile or fs_watch.
   * @param {String} path to file or dir
   * @param {Function} listener on fs change
   * @returns {Function} closer for the watcher instance
   */
  _watchWithNodeFs(path3, listener2) {
    const opts = this.fsw.options;
    const directory = sysPath$2.dirname(path3);
    const basename2 = sysPath$2.basename(path3);
    const parent = this.fsw._getWatchedDir(directory);
    parent.add(basename2);
    const absolutePath = sysPath$2.resolve(path3);
    const options2 = { persistent: opts.persistent };
    if (!listener2) listener2 = EMPTY_FN$2;
    let closer;
    if (opts.usePolling) {
      options2.interval = opts.enableBinaryInterval && isBinaryPath(basename2) ? opts.binaryInterval : opts.interval;
      closer = setFsWatchFileListener(path3, absolutePath, options2, {
        listener: listener2,
        rawEmitter: this.fsw._emitRaw
      });
    } else {
      closer = setFsWatchListener(path3, absolutePath, options2, {
        listener: listener2,
        errHandler: this._boundHandleError,
        rawEmitter: this.fsw._emitRaw
      });
    }
    return closer;
  }
  /**
   * Watch a file and emit add event if warranted.
   * @param {Path} file Path
   * @param {fs.Stats} stats result of fs_stat
   * @param {Boolean} initialAdd was the file added at watch instantiation?
   * @returns {Function} closer for the watcher instance
   */
  _handleFile(file, stats, initialAdd) {
    if (this.fsw.closed) {
      return;
    }
    const dirname2 = sysPath$2.dirname(file);
    const basename2 = sysPath$2.basename(file);
    const parent = this.fsw._getWatchedDir(dirname2);
    let prevStats = stats;
    if (parent.has(basename2)) return;
    const listener2 = async (path3, newStats) => {
      if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5)) return;
      if (!newStats || newStats.mtimeMs === 0) {
        try {
          const newStats2 = await stat$2(file);
          if (this.fsw.closed) return;
          const at = newStats2.atimeMs;
          const mt = newStats2.mtimeMs;
          if (!at || at <= mt || mt !== prevStats.mtimeMs) {
            this.fsw._emit(EV_CHANGE$2, file, newStats2);
          }
          if (isLinux && prevStats.ino !== newStats2.ino) {
            this.fsw._closeFile(path3);
            prevStats = newStats2;
            this.fsw._addPathCloser(path3, this._watchWithNodeFs(file, listener2));
          } else {
            prevStats = newStats2;
          }
        } catch (error) {
          this.fsw._remove(dirname2, basename2);
        }
      } else if (parent.has(basename2)) {
        const at = newStats.atimeMs;
        const mt = newStats.mtimeMs;
        if (!at || at <= mt || mt !== prevStats.mtimeMs) {
          this.fsw._emit(EV_CHANGE$2, file, newStats);
        }
        prevStats = newStats;
      }
    };
    const closer = this._watchWithNodeFs(file, listener2);
    if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
      if (!this.fsw._throttle(EV_ADD$2, file, 0)) return;
      this.fsw._emit(EV_ADD$2, file, stats);
    }
    return closer;
  }
  /**
   * Handle symlinks encountered while reading a dir.
   * @param {Object} entry returned by readdirp
   * @param {String} directory path of dir being read
   * @param {String} path of this item
   * @param {String} item basename of this item
   * @returns {Promise<Boolean>} true if no more processing is needed for this entry.
   */
  async _handleSymlink(entry, directory, path3, item) {
    if (this.fsw.closed) {
      return;
    }
    const full = entry.fullPath;
    const dir = this.fsw._getWatchedDir(directory);
    if (!this.fsw.options.followSymlinks) {
      this.fsw._incrReadyCount();
      let linkPath;
      try {
        linkPath = await fsrealpath(path3);
      } catch (e) {
        this.fsw._emitReady();
        return true;
      }
      if (this.fsw.closed) return;
      if (dir.has(item)) {
        if (this.fsw._symlinkPaths.get(full) !== linkPath) {
          this.fsw._symlinkPaths.set(full, linkPath);
          this.fsw._emit(EV_CHANGE$2, path3, entry.stats);
        }
      } else {
        dir.add(item);
        this.fsw._symlinkPaths.set(full, linkPath);
        this.fsw._emit(EV_ADD$2, path3, entry.stats);
      }
      this.fsw._emitReady();
      return true;
    }
    if (this.fsw._symlinkPaths.has(full)) {
      return true;
    }
    this.fsw._symlinkPaths.set(full, true);
  }
  _handleRead(directory, initialAdd, wh, target, dir, depth2, throttler) {
    directory = sysPath$2.join(directory, EMPTY_STR$1);
    if (!wh.hasGlob) {
      throttler = this.fsw._throttle("readdir", directory, 1e3);
      if (!throttler) return;
    }
    const previous = this.fsw._getWatchedDir(wh.path);
    const current = /* @__PURE__ */ new Set();
    let stream3 = this.fsw._readdirp(directory, {
      fileFilter: (entry) => wh.filterPath(entry),
      directoryFilter: (entry) => wh.filterDir(entry),
      depth: 0
    }).on(STR_DATA$1, async (entry) => {
      if (this.fsw.closed) {
        stream3 = void 0;
        return;
      }
      const item = entry.path;
      let path3 = sysPath$2.join(directory, item);
      current.add(item);
      if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path3, item)) {
        return;
      }
      if (this.fsw.closed) {
        stream3 = void 0;
        return;
      }
      if (item === target || !target && !previous.has(item)) {
        this.fsw._incrReadyCount();
        path3 = sysPath$2.join(dir, sysPath$2.relative(dir, path3));
        this._addToNodeFs(path3, initialAdd, wh, depth2 + 1);
      }
    }).on(EV_ERROR$2, this._boundHandleError);
    return new Promise(
      (resolve3) => stream3.once(STR_END$2, () => {
        if (this.fsw.closed) {
          stream3 = void 0;
          return;
        }
        const wasThrottled = throttler ? throttler.clear() : false;
        resolve3();
        previous.getChildren().filter((item) => {
          return item !== directory && !current.has(item) && // in case of intersecting globs;
          // a path may have been filtered out of this readdir, but
          // shouldn't be removed because it matches a different glob
          (!wh.hasGlob || wh.filterPath({
            fullPath: sysPath$2.resolve(directory, item)
          }));
        }).forEach((item) => {
          this.fsw._remove(directory, item);
        });
        stream3 = void 0;
        if (wasThrottled) this._handleRead(directory, false, wh, target, dir, depth2, throttler);
      })
    );
  }
  /**
   * Read directory to add / remove files from `@watched` list and re-read it on change.
   * @param {String} dir fs path
   * @param {fs.Stats} stats
   * @param {Boolean} initialAdd
   * @param {Number} depth relative to user-supplied path
   * @param {String} target child path targeted for watch
   * @param {Object} wh Common watch helpers for this path
   * @param {String} realpath
   * @returns {Promise<Function>} closer for the watcher instance.
   */
  async _handleDir(dir, stats, initialAdd, depth2, target, wh, realpath2) {
    const parentDir2 = this.fsw._getWatchedDir(sysPath$2.dirname(dir));
    const tracked = parentDir2.has(sysPath$2.basename(dir));
    if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
      if (!wh.hasGlob || wh.globFilter(dir)) this.fsw._emit(EV_ADD_DIR$2, dir, stats);
    }
    parentDir2.add(sysPath$2.basename(dir));
    this.fsw._getWatchedDir(dir);
    let throttler;
    let closer;
    const oDepth = this.fsw.options.depth;
    if ((oDepth == null || depth2 <= oDepth) && !this.fsw._symlinkPaths.has(realpath2)) {
      if (!target) {
        await this._handleRead(dir, initialAdd, wh, target, dir, depth2, throttler);
        if (this.fsw.closed) return;
      }
      closer = this._watchWithNodeFs(dir, (dirPath, stats2) => {
        if (stats2 && stats2.mtimeMs === 0) return;
        this._handleRead(dirPath, false, wh, target, dir, depth2, throttler);
      });
    }
    return closer;
  }
  /**
   * Handle added file, directory, or glob pattern.
   * Delegates call to _handleFile / _handleDir after checks.
   * @param {String} path to file or ir
   * @param {Boolean} initialAdd was the file added at watch instantiation?
   * @param {Object} priorWh depth relative to user-supplied path
   * @param {Number} depth Child path actually targeted for watch
   * @param {String=} target Child path actually targeted for watch
   * @returns {Promise}
   */
  async _addToNodeFs(path3, initialAdd, priorWh, depth2, target) {
    const ready = this.fsw._emitReady;
    if (this.fsw._isIgnored(path3) || this.fsw.closed) {
      ready();
      return false;
    }
    const wh = this.fsw._getWatchHelpers(path3, depth2);
    if (!wh.hasGlob && priorWh) {
      wh.hasGlob = priorWh.hasGlob;
      wh.globFilter = priorWh.globFilter;
      wh.filterPath = (entry) => priorWh.filterPath(entry);
      wh.filterDir = (entry) => priorWh.filterDir(entry);
    }
    try {
      const stats = await statMethods$1[wh.statMethod](wh.watchPath);
      if (this.fsw.closed) return;
      if (this.fsw._isIgnored(wh.watchPath, stats)) {
        ready();
        return false;
      }
      const follow = this.fsw.options.followSymlinks && !path3.includes(STAR) && !path3.includes(BRACE_START$1);
      let closer;
      if (stats.isDirectory()) {
        const absPath = sysPath$2.resolve(path3);
        const targetPath = follow ? await fsrealpath(path3) : path3;
        if (this.fsw.closed) return;
        closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth2, target, wh, targetPath);
        if (this.fsw.closed) return;
        if (absPath !== targetPath && targetPath !== void 0) {
          this.fsw._symlinkPaths.set(absPath, targetPath);
        }
      } else if (stats.isSymbolicLink()) {
        const targetPath = follow ? await fsrealpath(path3) : path3;
        if (this.fsw.closed) return;
        const parent = sysPath$2.dirname(wh.watchPath);
        this.fsw._getWatchedDir(parent).add(wh.watchPath);
        this.fsw._emit(EV_ADD$2, wh.watchPath, stats);
        closer = await this._handleDir(parent, stats, initialAdd, depth2, path3, wh, targetPath);
        if (this.fsw.closed) return;
        if (targetPath !== void 0) {
          this.fsw._symlinkPaths.set(sysPath$2.resolve(path3), targetPath);
        }
      } else {
        closer = this._handleFile(wh.watchPath, stats, initialAdd);
      }
      ready();
      this.fsw._addPathCloser(path3, closer);
      return false;
    } catch (error) {
      if (this.fsw._handleError(error)) {
        ready();
        return path3;
      }
    }
  }
};
var nodefsHandler = NodeFsHandler$1;
var fseventsHandler = { exports: {} };
var fs$3 = import_fs.default;
var sysPath$1 = import_path.default;
var { promisify: promisify$1 } = import_util.default;
var fsevents;
try {
  fsevents = __require2("fsevents");
} catch (error) {
  if (process.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR) console.error(error);
}
if (fsevents) {
  const mtch = process.version.match(/v(\d+)\.(\d+)/);
  if (mtch && mtch[1] && mtch[2]) {
    const maj2 = Number.parseInt(mtch[1], 10);
    const min2 = Number.parseInt(mtch[2], 10);
    if (maj2 === 8 && min2 < 16) {
      fsevents = void 0;
    }
  }
}
var {
  EV_ADD: EV_ADD$1,
  EV_CHANGE: EV_CHANGE$1,
  EV_ADD_DIR: EV_ADD_DIR$1,
  EV_UNLINK: EV_UNLINK$1,
  EV_ERROR: EV_ERROR$1,
  STR_DATA,
  STR_END: STR_END$1,
  FSEVENT_CREATED,
  FSEVENT_MODIFIED,
  FSEVENT_DELETED,
  FSEVENT_MOVED,
  // FSEVENT_CLONED,
  FSEVENT_UNKNOWN,
  FSEVENT_FLAG_MUST_SCAN_SUBDIRS,
  FSEVENT_TYPE_FILE,
  FSEVENT_TYPE_DIRECTORY,
  FSEVENT_TYPE_SYMLINK,
  ROOT_GLOBSTAR,
  DIR_SUFFIX,
  DOT_SLASH,
  FUNCTION_TYPE: FUNCTION_TYPE$1,
  EMPTY_FN: EMPTY_FN$1,
  IDENTITY_FN
} = constants$1;
var Depth = (value2) => isNaN(value2) ? {} : { depth: value2 };
var stat$1 = promisify$1(fs$3.stat);
var lstat = promisify$1(fs$3.lstat);
var realpath = promisify$1(fs$3.realpath);
var statMethods = { stat: stat$1, lstat };
var FSEventsWatchers = /* @__PURE__ */ new Map();
var consolidateThreshhold = 10;
var wrongEventFlags = /* @__PURE__ */ new Set([
  69888,
  70400,
  71424,
  72704,
  73472,
  131328,
  131840,
  262912
]);
var createFSEventsInstance = (path3, callback2) => {
  const stop = fsevents.watch(path3, callback2);
  return { stop };
};
function setFSEventsListener(path3, realPath, listener2, rawEmitter) {
  let watchPath = sysPath$1.extname(realPath) ? sysPath$1.dirname(realPath) : realPath;
  const parentPath = sysPath$1.dirname(watchPath);
  let cont = FSEventsWatchers.get(watchPath);
  if (couldConsolidate(parentPath)) {
    watchPath = parentPath;
  }
  const resolvedPath = sysPath$1.resolve(path3);
  const hasSymlink = resolvedPath !== realPath;
  const filteredListener = (fullPath, flags, info) => {
    if (hasSymlink) fullPath = fullPath.replace(realPath, resolvedPath);
    if (fullPath === resolvedPath || !fullPath.indexOf(resolvedPath + sysPath$1.sep)) listener2(fullPath, flags, info);
  };
  let watchedParent = false;
  for (const watchedPath of FSEventsWatchers.keys()) {
    if (realPath.indexOf(sysPath$1.resolve(watchedPath) + sysPath$1.sep) === 0) {
      watchPath = watchedPath;
      cont = FSEventsWatchers.get(watchPath);
      watchedParent = true;
      break;
    }
  }
  if (cont || watchedParent) {
    cont.listeners.add(filteredListener);
  } else {
    cont = {
      listeners: /* @__PURE__ */ new Set([filteredListener]),
      rawEmitter,
      watcher: createFSEventsInstance(watchPath, (fullPath, flags) => {
        if (!cont.listeners.size) return;
        if (flags & FSEVENT_FLAG_MUST_SCAN_SUBDIRS) return;
        const info = fsevents.getInfo(fullPath, flags);
        cont.listeners.forEach((list) => {
          list(fullPath, flags, info);
        });
        cont.rawEmitter(info.event, fullPath, info);
      })
    };
    FSEventsWatchers.set(watchPath, cont);
  }
  return () => {
    const lst = cont.listeners;
    lst.delete(filteredListener);
    if (!lst.size) {
      FSEventsWatchers.delete(watchPath);
      if (cont.watcher) return cont.watcher.stop().then(() => {
        cont.rawEmitter = cont.watcher = void 0;
        Object.freeze(cont);
      });
    }
  };
}
var couldConsolidate = (path3) => {
  let count = 0;
  for (const watchPath of FSEventsWatchers.keys()) {
    if (watchPath.indexOf(path3) === 0) {
      count++;
      if (count >= consolidateThreshhold) {
        return true;
      }
    }
  }
  return false;
};
var canUse = () => fsevents && FSEventsWatchers.size < 128;
var calcDepth = (path3, root) => {
  let i = 0;
  while (!path3.indexOf(root) && (path3 = sysPath$1.dirname(path3)) !== root) i++;
  return i;
};
var sameTypes = (info, stats) => info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() || info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() || info.type === FSEVENT_TYPE_FILE && stats.isFile();
var FsEventsHandler$1 = class FsEventsHandler {
  /**
   * @param {import('../index').FSWatcher} fsw
   */
  constructor(fsw) {
    this.fsw = fsw;
  }
  checkIgnored(path3, stats) {
    const ipaths = this.fsw._ignoredPaths;
    if (this.fsw._isIgnored(path3, stats)) {
      ipaths.add(path3);
      if (stats && stats.isDirectory()) {
        ipaths.add(path3 + ROOT_GLOBSTAR);
      }
      return true;
    }
    ipaths.delete(path3);
    ipaths.delete(path3 + ROOT_GLOBSTAR);
  }
  addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts) {
    const event = watchedDir.has(item) ? EV_CHANGE$1 : EV_ADD$1;
    this.handleEvent(event, path3, fullPath, realPath, parent, watchedDir, item, info, opts);
  }
  async checkExists(path3, fullPath, realPath, parent, watchedDir, item, info, opts) {
    try {
      const stats = await stat$1(path3);
      if (this.fsw.closed) return;
      if (sameTypes(info, stats)) {
        this.addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
      } else {
        this.handleEvent(EV_UNLINK$1, path3, fullPath, realPath, parent, watchedDir, item, info, opts);
      }
    } catch (error) {
      if (error.code === "EACCES") {
        this.addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
      } else {
        this.handleEvent(EV_UNLINK$1, path3, fullPath, realPath, parent, watchedDir, item, info, opts);
      }
    }
  }
  handleEvent(event, path3, fullPath, realPath, parent, watchedDir, item, info, opts) {
    if (this.fsw.closed || this.checkIgnored(path3)) return;
    if (event === EV_UNLINK$1) {
      const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
      if (isDirectory || watchedDir.has(item)) {
        this.fsw._remove(parent, item, isDirectory);
      }
    } else {
      if (event === EV_ADD$1) {
        if (info.type === FSEVENT_TYPE_DIRECTORY) this.fsw._getWatchedDir(path3);
        if (info.type === FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
          const curDepth = opts.depth === void 0 ? void 0 : calcDepth(fullPath, realPath) + 1;
          return this._addToFsEvents(path3, false, true, curDepth);
        }
        this.fsw._getWatchedDir(parent).add(item);
      }
      const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
      this.fsw._emit(eventName, path3);
      if (eventName === EV_ADD_DIR$1) this._addToFsEvents(path3, false, true);
    }
  }
  /**
   * Handle symlinks encountered during directory scan
   * @param {String} watchPath  - file/dir path to be watched with fsevents
   * @param {String} realPath   - real path (in case of symlinks)
   * @param {Function} transform  - path transformer
   * @param {Function} globFilter - path filter in case a glob pattern was provided
   * @returns {Function} closer for the watcher instance
  */
  _watchWithFsEvents(watchPath, realPath, transform2, globFilter) {
    if (this.fsw.closed || this.fsw._isIgnored(watchPath)) return;
    const opts = this.fsw.options;
    const watchCallback = async (fullPath, flags, info) => {
      if (this.fsw.closed || this.fsw._isIgnored(fullPath)) return;
      if (opts.depth !== void 0 && calcDepth(fullPath, realPath) > opts.depth) return;
      const path3 = transform2(sysPath$1.join(
        watchPath,
        sysPath$1.relative(watchPath, fullPath)
      ));
      if (globFilter && !globFilter(path3)) return;
      const parent = sysPath$1.dirname(path3);
      const item = sysPath$1.basename(path3);
      const watchedDir = this.fsw._getWatchedDir(
        info.type === FSEVENT_TYPE_DIRECTORY ? path3 : parent
      );
      if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) {
        if (typeof opts.ignored === FUNCTION_TYPE$1) {
          let stats;
          try {
            stats = await stat$1(path3);
          } catch (error) {
          }
          if (this.fsw.closed) return;
          if (this.checkIgnored(path3, stats)) return;
          if (sameTypes(info, stats)) {
            this.addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
          } else {
            this.handleEvent(EV_UNLINK$1, path3, fullPath, realPath, parent, watchedDir, item, info, opts);
          }
        } else {
          this.checkExists(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
        }
      } else {
        switch (info.event) {
          case FSEVENT_CREATED:
          case FSEVENT_MODIFIED:
            return this.addOrChange(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
          case FSEVENT_DELETED:
          case FSEVENT_MOVED:
            return this.checkExists(path3, fullPath, realPath, parent, watchedDir, item, info, opts);
        }
      }
    };
    const closer = setFSEventsListener(
      watchPath,
      realPath,
      watchCallback,
      this.fsw._emitRaw
    );
    this.fsw._emitReady();
    return closer;
  }
  /**
   * Handle symlinks encountered during directory scan
   * @param {String} linkPath path to symlink
   * @param {String} fullPath absolute path to the symlink
   * @param {Function} transform pre-existing path transformer
   * @param {Number} curDepth level of subdirectories traversed to where symlink is
   * @returns {Promise<void>}
   */
  async _handleFsEventsSymlink(linkPath, fullPath, transform2, curDepth) {
    if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath)) return;
    this.fsw._symlinkPaths.set(fullPath, true);
    this.fsw._incrReadyCount();
    try {
      const linkTarget = await realpath(linkPath);
      if (this.fsw.closed) return;
      if (this.fsw._isIgnored(linkTarget)) {
        return this.fsw._emitReady();
      }
      this.fsw._incrReadyCount();
      this._addToFsEvents(linkTarget || linkPath, (path3) => {
        let aliasedPath = linkPath;
        if (linkTarget && linkTarget !== DOT_SLASH) {
          aliasedPath = path3.replace(linkTarget, linkPath);
        } else if (path3 !== DOT_SLASH) {
          aliasedPath = sysPath$1.join(linkPath, path3);
        }
        return transform2(aliasedPath);
      }, false, curDepth);
    } catch (error) {
      if (this.fsw._handleError(error)) {
        return this.fsw._emitReady();
      }
    }
  }
  /**
   *
   * @param {Path} newPath
   * @param {fs.Stats} stats
   */
  emitAdd(newPath, stats, processPath, opts, forceAdd) {
    const pp = processPath(newPath);
    const isDir = stats.isDirectory();
    const dirObj = this.fsw._getWatchedDir(sysPath$1.dirname(pp));
    const base = sysPath$1.basename(pp);
    if (isDir) this.fsw._getWatchedDir(pp);
    if (dirObj.has(base)) return;
    dirObj.add(base);
    if (!opts.ignoreInitial || forceAdd === true) {
      this.fsw._emit(isDir ? EV_ADD_DIR$1 : EV_ADD$1, pp, stats);
    }
  }
  initWatch(realPath, path3, wh, processPath) {
    if (this.fsw.closed) return;
    const closer = this._watchWithFsEvents(
      wh.watchPath,
      sysPath$1.resolve(realPath || wh.watchPath),
      processPath,
      wh.globFilter
    );
    this.fsw._addPathCloser(path3, closer);
  }
  /**
   * Handle added path with fsevents
   * @param {String} path file/dir path or glob pattern
   * @param {Function|Boolean=} transform converts working path to what the user expects
   * @param {Boolean=} forceAdd ensure add is emitted
   * @param {Number=} priorDepth Level of subdirectories already traversed.
   * @returns {Promise<void>}
   */
  async _addToFsEvents(path3, transform2, forceAdd, priorDepth) {
    if (this.fsw.closed) {
      return;
    }
    const opts = this.fsw.options;
    const processPath = typeof transform2 === FUNCTION_TYPE$1 ? transform2 : IDENTITY_FN;
    const wh = this.fsw._getWatchHelpers(path3);
    try {
      const stats = await statMethods[wh.statMethod](wh.watchPath);
      if (this.fsw.closed) return;
      if (this.fsw._isIgnored(wh.watchPath, stats)) {
        throw null;
      }
      if (stats.isDirectory()) {
        if (!wh.globFilter) this.emitAdd(processPath(path3), stats, processPath, opts, forceAdd);
        if (priorDepth && priorDepth > opts.depth) return;
        this.fsw._readdirp(wh.watchPath, {
          fileFilter: (entry) => wh.filterPath(entry),
          directoryFilter: (entry) => wh.filterDir(entry),
          ...Depth(opts.depth - (priorDepth || 0))
        }).on(STR_DATA, (entry) => {
          if (this.fsw.closed) {
            return;
          }
          if (entry.stats.isDirectory() && !wh.filterPath(entry)) return;
          const joinedPath = sysPath$1.join(wh.watchPath, entry.path);
          const { fullPath } = entry;
          if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
            const curDepth = opts.depth === void 0 ? void 0 : calcDepth(joinedPath, sysPath$1.resolve(wh.watchPath)) + 1;
            this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
          } else {
            this.emitAdd(joinedPath, entry.stats, processPath, opts, forceAdd);
          }
        }).on(EV_ERROR$1, EMPTY_FN$1).on(STR_END$1, () => {
          this.fsw._emitReady();
        });
      } else {
        this.emitAdd(wh.watchPath, stats, processPath, opts, forceAdd);
        this.fsw._emitReady();
      }
    } catch (error) {
      if (!error || this.fsw._handleError(error)) {
        this.fsw._emitReady();
        this.fsw._emitReady();
      }
    }
    if (opts.persistent && forceAdd !== true) {
      if (typeof transform2 === FUNCTION_TYPE$1) {
        this.initWatch(void 0, path3, wh, processPath);
      } else {
        let realPath;
        try {
          realPath = await realpath(wh.watchPath);
        } catch (e) {
        }
        this.initWatch(realPath, path3, wh, processPath);
      }
    }
  }
};
fseventsHandler.exports = FsEventsHandler$1;
fseventsHandler.exports.canUse = canUse;
var fseventsHandlerExports = fseventsHandler.exports;
var { EventEmitter: EventEmitter$2 } = import_events.default;
var fs$2 = import_fs.default;
var sysPath = import_path.default;
var { promisify } = import_util.default;
var readdirp = readdirp_1;
var anymatch = anymatchExports.default;
var globParent2 = globParent$1;
var isGlob2 = isGlob$2;
var braces = braces_1;
var normalizePath2 = normalizePath$2;
var NodeFsHandler2 = nodefsHandler;
var FsEventsHandler2 = fseventsHandlerExports;
var {
  EV_ALL,
  EV_READY,
  EV_ADD,
  EV_CHANGE,
  EV_UNLINK,
  EV_ADD_DIR,
  EV_UNLINK_DIR,
  EV_RAW,
  EV_ERROR,
  STR_CLOSE,
  STR_END,
  BACK_SLASH_RE,
  DOUBLE_SLASH_RE,
  SLASH_OR_BACK_SLASH_RE,
  DOT_RE,
  REPLACER_RE,
  SLASH,
  SLASH_SLASH,
  BRACE_START,
  BANG,
  ONE_DOT,
  TWO_DOTS,
  GLOBSTAR,
  SLASH_GLOBSTAR,
  ANYMATCH_OPTS,
  STRING_TYPE,
  FUNCTION_TYPE,
  EMPTY_STR,
  EMPTY_FN,
  isWindows: isWindows$1,
  isMacos,
  isIBMi
} = constants$1;
var stat = promisify(fs$2.stat);
var readdir = promisify(fs$2.readdir);
var arrify = (value2 = []) => Array.isArray(value2) ? value2 : [value2];
var flatten = (list, result = []) => {
  list.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item, result);
    } else {
      result.push(item);
    }
  });
  return result;
};
var unifyPaths = (paths_) => {
  const paths = flatten(arrify(paths_));
  if (!paths.every((p2) => typeof p2 === STRING_TYPE)) {
    throw new TypeError(`Non-string provided as watch path: ${paths}`);
  }
  return paths.map(normalizePathToUnix);
};
var toUnix = (string) => {
  let str = string.replace(BACK_SLASH_RE, SLASH);
  let prepend = false;
  if (str.startsWith(SLASH_SLASH)) {
    prepend = true;
  }
  while (str.match(DOUBLE_SLASH_RE)) {
    str = str.replace(DOUBLE_SLASH_RE, SLASH);
  }
  if (prepend) {
    str = SLASH + str;
  }
  return str;
};
var normalizePathToUnix = (path3) => toUnix(sysPath.normalize(toUnix(path3)));
var normalizeIgnored = (cwd = EMPTY_STR) => (path3) => {
  if (typeof path3 !== STRING_TYPE) return path3;
  return normalizePathToUnix(sysPath.isAbsolute(path3) ? path3 : sysPath.join(cwd, path3));
};
var getAbsolutePath = (path3, cwd) => {
  if (sysPath.isAbsolute(path3)) {
    return path3;
  }
  if (path3.startsWith(BANG)) {
    return BANG + sysPath.join(cwd, path3.slice(1));
  }
  return sysPath.join(cwd, path3);
};
var undef = (opts, key) => opts[key] === void 0;
var DirEntry = class {
  /**
   * @param {Path} dir
   * @param {Function} removeWatcher
   */
  constructor(dir, removeWatcher) {
    this.path = dir;
    this._removeWatcher = removeWatcher;
    this.items = /* @__PURE__ */ new Set();
  }
  add(item) {
    const { items } = this;
    if (!items) return;
    if (item !== ONE_DOT && item !== TWO_DOTS) items.add(item);
  }
  async remove(item) {
    const { items } = this;
    if (!items) return;
    items.delete(item);
    if (items.size > 0) return;
    const dir = this.path;
    try {
      await readdir(dir);
    } catch (err) {
      if (this._removeWatcher) {
        this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
      }
    }
  }
  has(item) {
    const { items } = this;
    if (!items) return;
    return items.has(item);
  }
  /**
   * @returns {Array<String>}
   */
  getChildren() {
    const { items } = this;
    if (!items) return;
    return [...items.values()];
  }
  dispose() {
    this.items.clear();
    delete this.path;
    delete this._removeWatcher;
    delete this.items;
    Object.freeze(this);
  }
};
var STAT_METHOD_F = "stat";
var STAT_METHOD_L = "lstat";
var WatchHelper = class {
  constructor(path3, watchPath, follow, fsw) {
    this.fsw = fsw;
    this.path = path3 = path3.replace(REPLACER_RE, EMPTY_STR);
    this.watchPath = watchPath;
    this.fullWatchPath = sysPath.resolve(watchPath);
    this.hasGlob = watchPath !== path3;
    if (path3 === EMPTY_STR) this.hasGlob = false;
    this.globSymlink = this.hasGlob && follow ? void 0 : false;
    this.globFilter = this.hasGlob ? anymatch(path3, void 0, ANYMATCH_OPTS) : false;
    this.dirParts = this.getDirParts(path3);
    this.dirParts.forEach((parts) => {
      if (parts.length > 1) parts.pop();
    });
    this.followSymlinks = follow;
    this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
  }
  checkGlobSymlink(entry) {
    if (this.globSymlink === void 0) {
      this.globSymlink = entry.fullParentDir === this.fullWatchPath ? false : { realPath: entry.fullParentDir, linkPath: this.fullWatchPath };
    }
    if (this.globSymlink) {
      return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
    }
    return entry.fullPath;
  }
  entryPath(entry) {
    return sysPath.join(
      this.watchPath,
      sysPath.relative(this.watchPath, this.checkGlobSymlink(entry))
    );
  }
  filterPath(entry) {
    const { stats } = entry;
    if (stats && stats.isSymbolicLink()) return this.filterDir(entry);
    const resolvedPath = this.entryPath(entry);
    const matchesGlob = this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ? this.globFilter(resolvedPath) : true;
    return matchesGlob && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
  }
  getDirParts(path3) {
    if (!this.hasGlob) return [];
    const parts = [];
    const expandedPath = path3.includes(BRACE_START) ? braces.expand(path3) : [path3];
    expandedPath.forEach((path4) => {
      parts.push(sysPath.relative(this.watchPath, path4).split(SLASH_OR_BACK_SLASH_RE));
    });
    return parts;
  }
  filterDir(entry) {
    if (this.hasGlob) {
      const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
      let globstar = false;
      this.unmatchedGlob = !this.dirParts.some((parts) => {
        return parts.every((part, i) => {
          if (part === GLOBSTAR) globstar = true;
          return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
        });
      });
    }
    return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
  }
};
var FSWatcher = class extends EventEmitter$2 {
  // Not indenting methods for history sake; for now.
  constructor(_opts) {
    super();
    const opts = {};
    if (_opts) Object.assign(opts, _opts);
    this._watched = /* @__PURE__ */ new Map();
    this._closers = /* @__PURE__ */ new Map();
    this._ignoredPaths = /* @__PURE__ */ new Set();
    this._throttled = /* @__PURE__ */ new Map();
    this._symlinkPaths = /* @__PURE__ */ new Map();
    this._streams = /* @__PURE__ */ new Set();
    this.closed = false;
    if (undef(opts, "persistent")) opts.persistent = true;
    if (undef(opts, "ignoreInitial")) opts.ignoreInitial = false;
    if (undef(opts, "ignorePermissionErrors")) opts.ignorePermissionErrors = false;
    if (undef(opts, "interval")) opts.interval = 100;
    if (undef(opts, "binaryInterval")) opts.binaryInterval = 300;
    if (undef(opts, "disableGlobbing")) opts.disableGlobbing = false;
    opts.enableBinaryInterval = opts.binaryInterval !== opts.interval;
    if (undef(opts, "useFsEvents")) opts.useFsEvents = !opts.usePolling;
    const canUseFsEvents = FsEventsHandler2.canUse();
    if (!canUseFsEvents) opts.useFsEvents = false;
    if (undef(opts, "usePolling") && !opts.useFsEvents) {
      opts.usePolling = isMacos;
    }
    if (isIBMi) {
      opts.usePolling = true;
    }
    const envPoll = process.env.CHOKIDAR_USEPOLLING;
    if (envPoll !== void 0) {
      const envLower = envPoll.toLowerCase();
      if (envLower === "false" || envLower === "0") {
        opts.usePolling = false;
      } else if (envLower === "true" || envLower === "1") {
        opts.usePolling = true;
      } else {
        opts.usePolling = !!envLower;
      }
    }
    const envInterval = process.env.CHOKIDAR_INTERVAL;
    if (envInterval) {
      opts.interval = Number.parseInt(envInterval, 10);
    }
    if (undef(opts, "atomic")) opts.atomic = !opts.usePolling && !opts.useFsEvents;
    if (opts.atomic) this._pendingUnlinks = /* @__PURE__ */ new Map();
    if (undef(opts, "followSymlinks")) opts.followSymlinks = true;
    if (undef(opts, "awaitWriteFinish")) opts.awaitWriteFinish = false;
    if (opts.awaitWriteFinish === true) opts.awaitWriteFinish = {};
    const awf = opts.awaitWriteFinish;
    if (awf) {
      if (!awf.stabilityThreshold) awf.stabilityThreshold = 2e3;
      if (!awf.pollInterval) awf.pollInterval = 100;
      this._pendingWrites = /* @__PURE__ */ new Map();
    }
    if (opts.ignored) opts.ignored = arrify(opts.ignored);
    let readyCalls = 0;
    this._emitReady = () => {
      readyCalls++;
      if (readyCalls >= this._readyCount) {
        this._emitReady = EMPTY_FN;
        this._readyEmitted = true;
        process.nextTick(() => this.emit(EV_READY));
      }
    };
    this._emitRaw = (...args) => this.emit(EV_RAW, ...args);
    this._readyEmitted = false;
    this.options = opts;
    if (opts.useFsEvents) {
      this._fsEventsHandler = new FsEventsHandler2(this);
    } else {
      this._nodeFsHandler = new NodeFsHandler2(this);
    }
    Object.freeze(opts);
  }
  // Public methods
  /**
   * Adds paths to be watched on an existing FSWatcher instance
   * @param {Path|Array<Path>} paths_
   * @param {String=} _origAdd private; for handling non-existent paths to be watched
   * @param {Boolean=} _internal private; indicates a non-user add
   * @returns {FSWatcher} for chaining
   */
  add(paths_, _origAdd, _internal) {
    const { cwd, disableGlobbing } = this.options;
    this.closed = false;
    let paths = unifyPaths(paths_);
    if (cwd) {
      paths = paths.map((path3) => {
        const absPath = getAbsolutePath(path3, cwd);
        if (disableGlobbing || !isGlob2(path3)) {
          return absPath;
        }
        return normalizePath2(absPath);
      });
    }
    paths = paths.filter((path3) => {
      if (path3.startsWith(BANG)) {
        this._ignoredPaths.add(path3.slice(1));
        return false;
      }
      this._ignoredPaths.delete(path3);
      this._ignoredPaths.delete(path3 + SLASH_GLOBSTAR);
      this._userIgnored = void 0;
      return true;
    });
    if (this.options.useFsEvents && this._fsEventsHandler) {
      if (!this._readyCount) this._readyCount = paths.length;
      if (this.options.persistent) this._readyCount += paths.length;
      paths.forEach((path3) => this._fsEventsHandler._addToFsEvents(path3));
    } else {
      if (!this._readyCount) this._readyCount = 0;
      this._readyCount += paths.length;
      Promise.all(
        paths.map(async (path3) => {
          const res = await this._nodeFsHandler._addToNodeFs(path3, !_internal, 0, 0, _origAdd);
          if (res) this._emitReady();
          return res;
        })
      ).then((results) => {
        if (this.closed) return;
        results.filter((item) => item).forEach((item) => {
          this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
        });
      });
    }
    return this;
  }
  /**
   * Close watchers or start ignoring events from specified paths.
   * @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
   * @returns {FSWatcher} for chaining
  */
  unwatch(paths_) {
    if (this.closed) return this;
    const paths = unifyPaths(paths_);
    const { cwd } = this.options;
    paths.forEach((path3) => {
      if (!sysPath.isAbsolute(path3) && !this._closers.has(path3)) {
        if (cwd) path3 = sysPath.join(cwd, path3);
        path3 = sysPath.resolve(path3);
      }
      this._closePath(path3);
      this._ignoredPaths.add(path3);
      if (this._watched.has(path3)) {
        this._ignoredPaths.add(path3 + SLASH_GLOBSTAR);
      }
      this._userIgnored = void 0;
    });
    return this;
  }
  /**
   * Close watchers and remove all listeners from watched paths.
   * @returns {Promise<void>}.
  */
  close() {
    if (this.closed) return this._closePromise;
    this.closed = true;
    this.removeAllListeners();
    const closers = [];
    this._closers.forEach((closerList) => closerList.forEach((closer) => {
      const promise2 = closer();
      if (promise2 instanceof Promise) closers.push(promise2);
    }));
    this._streams.forEach((stream3) => stream3.destroy());
    this._userIgnored = void 0;
    this._readyCount = 0;
    this._readyEmitted = false;
    this._watched.forEach((dirent) => dirent.dispose());
    ["closers", "watched", "streams", "symlinkPaths", "throttled"].forEach((key) => {
      this[`_${key}`].clear();
    });
    this._closePromise = closers.length ? Promise.all(closers).then(() => void 0) : Promise.resolve();
    return this._closePromise;
  }
  /**
   * Expose list of watched paths
   * @returns {Object} for chaining
  */
  getWatched() {
    const watchList = {};
    this._watched.forEach((entry, dir) => {
      const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
      watchList[key || ONE_DOT] = entry.getChildren().sort();
    });
    return watchList;
  }
  emitWithAll(event, args) {
    this.emit(...args);
    if (event !== EV_ERROR) this.emit(EV_ALL, ...args);
  }
  // Common helpers
  // --------------
  /**
   * Normalize and emit events.
   * Calling _emit DOES NOT MEAN emit() would be called!
   * @param {EventName} event Type of event
   * @param {Path} path File or directory path
   * @param {*=} val1 arguments to be passed with event
   * @param {*=} val2
   * @param {*=} val3
   * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
   */
  async _emit(event, path3, val1, val2, val3) {
    if (this.closed) return;
    const opts = this.options;
    if (isWindows$1) path3 = sysPath.normalize(path3);
    if (opts.cwd) path3 = sysPath.relative(opts.cwd, path3);
    const args = [event, path3];
    if (val3 !== void 0) args.push(val1, val2, val3);
    else if (val2 !== void 0) args.push(val1, val2);
    else if (val1 !== void 0) args.push(val1);
    const awf = opts.awaitWriteFinish;
    let pw;
    if (awf && (pw = this._pendingWrites.get(path3))) {
      pw.lastChange = /* @__PURE__ */ new Date();
      return this;
    }
    if (opts.atomic) {
      if (event === EV_UNLINK) {
        this._pendingUnlinks.set(path3, args);
        setTimeout(() => {
          this._pendingUnlinks.forEach((entry, path4) => {
            this.emit(...entry);
            this.emit(EV_ALL, ...entry);
            this._pendingUnlinks.delete(path4);
          });
        }, typeof opts.atomic === "number" ? opts.atomic : 100);
        return this;
      }
      if (event === EV_ADD && this._pendingUnlinks.has(path3)) {
        event = args[0] = EV_CHANGE;
        this._pendingUnlinks.delete(path3);
      }
    }
    if (awf && (event === EV_ADD || event === EV_CHANGE) && this._readyEmitted) {
      const awfEmit = (err, stats) => {
        if (err) {
          event = args[0] = EV_ERROR;
          args[1] = err;
          this.emitWithAll(event, args);
        } else if (stats) {
          if (args.length > 2) {
            args[2] = stats;
          } else {
            args.push(stats);
          }
          this.emitWithAll(event, args);
        }
      };
      this._awaitWriteFinish(path3, awf.stabilityThreshold, event, awfEmit);
      return this;
    }
    if (event === EV_CHANGE) {
      const isThrottled = !this._throttle(EV_CHANGE, path3, 50);
      if (isThrottled) return this;
    }
    if (opts.alwaysStat && val1 === void 0 && (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)) {
      const fullPath = opts.cwd ? sysPath.join(opts.cwd, path3) : path3;
      let stats;
      try {
        stats = await stat(fullPath);
      } catch (err) {
      }
      if (!stats || this.closed) return;
      args.push(stats);
    }
    this.emitWithAll(event, args);
    return this;
  }
  /**
   * Common handler for errors
   * @param {Error} error
   * @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
   */
  _handleError(error) {
    const code = error && error.code;
    if (error && code !== "ENOENT" && code !== "ENOTDIR" && (!this.options.ignorePermissionErrors || code !== "EPERM" && code !== "EACCES")) {
      this.emit(EV_ERROR, error);
    }
    return error || this.closed;
  }
  /**
   * Helper utility for throttling
   * @param {ThrottleType} actionType type being throttled
   * @param {Path} path being acted upon
   * @param {Number} timeout duration of time to suppress duplicate actions
   * @returns {Object|false} tracking object or false if action should be suppressed
   */
  _throttle(actionType, path3, timeout2) {
    if (!this._throttled.has(actionType)) {
      this._throttled.set(actionType, /* @__PURE__ */ new Map());
    }
    const action = this._throttled.get(actionType);
    const actionPath = action.get(path3);
    if (actionPath) {
      actionPath.count++;
      return false;
    }
    let timeoutObject;
    const clear = () => {
      const item = action.get(path3);
      const count = item ? item.count : 0;
      action.delete(path3);
      clearTimeout(timeoutObject);
      if (item) clearTimeout(item.timeoutObject);
      return count;
    };
    timeoutObject = setTimeout(clear, timeout2);
    const thr = { timeoutObject, clear, count: 0 };
    action.set(path3, thr);
    return thr;
  }
  _incrReadyCount() {
    return this._readyCount++;
  }
  /**
   * Awaits write operation to finish.
   * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
   * @param {Path} path being acted upon
   * @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
   * @param {EventName} event
   * @param {Function} awfEmit Callback to be called when ready for event to be emitted.
   */
  _awaitWriteFinish(path3, threshold, event, awfEmit) {
    let timeoutHandler;
    let fullPath = path3;
    if (this.options.cwd && !sysPath.isAbsolute(path3)) {
      fullPath = sysPath.join(this.options.cwd, path3);
    }
    const now = /* @__PURE__ */ new Date();
    const awaitWriteFinish = (prevStat) => {
      fs$2.stat(fullPath, (err, curStat) => {
        if (err || !this._pendingWrites.has(path3)) {
          if (err && err.code !== "ENOENT") awfEmit(err);
          return;
        }
        const now2 = Number(/* @__PURE__ */ new Date());
        if (prevStat && curStat.size !== prevStat.size) {
          this._pendingWrites.get(path3).lastChange = now2;
        }
        const pw = this._pendingWrites.get(path3);
        const df = now2 - pw.lastChange;
        if (df >= threshold) {
          this._pendingWrites.delete(path3);
          awfEmit(void 0, curStat);
        } else {
          timeoutHandler = setTimeout(
            awaitWriteFinish,
            this.options.awaitWriteFinish.pollInterval,
            curStat
          );
        }
      });
    };
    if (!this._pendingWrites.has(path3)) {
      this._pendingWrites.set(path3, {
        lastChange: now,
        cancelWait: () => {
          this._pendingWrites.delete(path3);
          clearTimeout(timeoutHandler);
          return event;
        }
      });
      timeoutHandler = setTimeout(
        awaitWriteFinish,
        this.options.awaitWriteFinish.pollInterval
      );
    }
  }
  _getGlobIgnored() {
    return [...this._ignoredPaths.values()];
  }
  /**
   * Determines whether user has asked to ignore this path.
   * @param {Path} path filepath or dir
   * @param {fs.Stats=} stats result of fs.stat
   * @returns {Boolean}
   */
  _isIgnored(path3, stats) {
    if (this.options.atomic && DOT_RE.test(path3)) return true;
    if (!this._userIgnored) {
      const { cwd } = this.options;
      const ign = this.options.ignored;
      const ignored = ign && ign.map(normalizeIgnored(cwd));
      const paths = arrify(ignored).filter((path4) => typeof path4 === STRING_TYPE && !isGlob2(path4)).map((path4) => path4 + SLASH_GLOBSTAR);
      const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
      this._userIgnored = anymatch(list, void 0, ANYMATCH_OPTS);
    }
    return this._userIgnored([path3, stats]);
  }
  _isntIgnored(path3, stat2) {
    return !this._isIgnored(path3, stat2);
  }
  /**
   * Provides a set of common helpers and properties relating to symlink and glob handling.
   * @param {Path} path file, directory, or glob pattern being watched
   * @param {Number=} depth at any depth > 0, this isn't a glob
   * @returns {WatchHelper} object containing helpers for this path
   */
  _getWatchHelpers(path3, depth2) {
    const watchPath = depth2 || this.options.disableGlobbing || !isGlob2(path3) ? path3 : globParent2(path3);
    const follow = this.options.followSymlinks;
    return new WatchHelper(path3, watchPath, follow, this);
  }
  // Directory helpers
  // -----------------
  /**
   * Provides directory tracking objects
   * @param {String} directory path of the directory
   * @returns {DirEntry} the directory's tracking object
   */
  _getWatchedDir(directory) {
    if (!this._boundRemove) this._boundRemove = this._remove.bind(this);
    const dir = sysPath.resolve(directory);
    if (!this._watched.has(dir)) this._watched.set(dir, new DirEntry(dir, this._boundRemove));
    return this._watched.get(dir);
  }
  // File helpers
  // ------------
  /**
   * Check for read permissions.
   * Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
   * @param {fs.Stats} stats - object, result of fs_stat
   * @returns {Boolean} indicates whether the file can be read
  */
  _hasReadPermissions(stats) {
    if (this.options.ignorePermissionErrors) return true;
    const md = stats && Number.parseInt(stats.mode, 10);
    const st = md & 511;
    const it = Number.parseInt(st.toString(8)[0], 10);
    return Boolean(4 & it);
  }
  /**
   * Handles emitting unlink events for
   * files and directories, and via recursion, for
   * files and directories within directories that are unlinked
   * @param {String} directory within which the following item is located
   * @param {String} item      base path of item/directory
   * @returns {void}
  */
  _remove(directory, item, isDirectory) {
    const path3 = sysPath.join(directory, item);
    const fullPath = sysPath.resolve(path3);
    isDirectory = isDirectory != null ? isDirectory : this._watched.has(path3) || this._watched.has(fullPath);
    if (!this._throttle("remove", path3, 100)) return;
    if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) {
      this.add(directory, item, true);
    }
    const wp = this._getWatchedDir(path3);
    const nestedDirectoryChildren = wp.getChildren();
    nestedDirectoryChildren.forEach((nested) => this._remove(path3, nested));
    const parent = this._getWatchedDir(directory);
    const wasTracked = parent.has(item);
    parent.remove(item);
    if (this._symlinkPaths.has(fullPath)) {
      this._symlinkPaths.delete(fullPath);
    }
    let relPath = path3;
    if (this.options.cwd) relPath = sysPath.relative(this.options.cwd, path3);
    if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
      const event = this._pendingWrites.get(relPath).cancelWait();
      if (event === EV_ADD) return;
    }
    this._watched.delete(path3);
    this._watched.delete(fullPath);
    const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
    if (wasTracked && !this._isIgnored(path3)) this._emit(eventName, path3);
    if (!this.options.useFsEvents) {
      this._closePath(path3);
    }
  }
  /**
   * Closes all watchers for a path
   * @param {Path} path
   */
  _closePath(path3) {
    this._closeFile(path3);
    const dir = sysPath.dirname(path3);
    this._getWatchedDir(dir).remove(sysPath.basename(path3));
  }
  /**
   * Closes only file-specific watchers
   * @param {Path} path
   */
  _closeFile(path3) {
    const closers = this._closers.get(path3);
    if (!closers) return;
    closers.forEach((closer) => closer());
    this._closers.delete(path3);
  }
  /**
   *
   * @param {Path} path
   * @param {Function} closer
   */
  _addPathCloser(path3, closer) {
    if (!closer) return;
    let list = this._closers.get(path3);
    if (!list) {
      list = [];
      this._closers.set(path3, list);
    }
    list.push(closer);
  }
  _readdirp(root, opts) {
    if (this.closed) return;
    const options2 = { type: EV_ALL, alwaysStat: true, lstat: true, ...opts };
    let stream3 = readdirp(root, options2);
    this._streams.add(stream3);
    stream3.once(STR_CLOSE, () => {
      stream3 = void 0;
    });
    stream3.once(STR_END, () => {
      if (stream3) {
        this._streams.delete(stream3);
        stream3 = void 0;
      }
    });
    return stream3;
  }
};
chokidar.FSWatcher = FSWatcher;
var watch = (paths, options2) => {
  const watcher = new FSWatcher(options2);
  watcher.add(paths);
  return watcher;
};
chokidar.watch = watch;
var shellQuote$1 = {};
var quote = function quote2(xs) {
  return xs.map(function(s) {
    if (s === "") {
      return "''";
    }
    if (s && typeof s === "object") {
      return s.op.replace(/(.)/g, "\\$1");
    }
    if (/["\s]/.test(s) && !/'/.test(s)) {
      return "'" + s.replace(/(['\\])/g, "\\$1") + "'";
    }
    if (/["'\s]/.test(s)) {
      return '"' + s.replace(/(["\\$`!])/g, "\\$1") + '"';
    }
    return String(s).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2");
  }).join(" ");
};
var CONTROL = "(?:" + [
  "\\|\\|",
  "\\&\\&",
  ";;",
  "\\|\\&",
  "\\<\\(",
  "\\<\\<\\<",
  ">>",
  ">\\&",
  "<\\&",
  "[&;()|<>]"
].join("|") + ")";
var controlRE = new RegExp("^" + CONTROL + "$");
var META = "|&;()<> \\t";
var SINGLE_QUOTE = '"((\\\\"|[^"])*?)"';
var DOUBLE_QUOTE = "'((\\\\'|[^'])*?)'";
var hash = /^#$/;
var SQ = "'";
var DQ = '"';
var DS = "$";
var TOKEN = "";
var mult = 4294967296;
for (i = 0; i < 4; i++) {
  TOKEN += (mult * Math.random()).toString(16);
}
var i;
var startsWithToken = new RegExp("^" + TOKEN);
function matchAll(s, r) {
  var origIndex = r.lastIndex;
  var matches = [];
  var matchObj;
  while (matchObj = r.exec(s)) {
    matches.push(matchObj);
    if (r.lastIndex === matchObj.index) {
      r.lastIndex += 1;
    }
  }
  r.lastIndex = origIndex;
  return matches;
}
function getVar(env2, pre, key) {
  var r = typeof env2 === "function" ? env2(key) : env2[key];
  if (typeof r === "undefined" && key != "") {
    r = "";
  } else if (typeof r === "undefined") {
    r = "$";
  }
  if (typeof r === "object") {
    return pre + TOKEN + JSON.stringify(r) + TOKEN;
  }
  return pre + r;
}
function parseInternal(string, env2, opts) {
  if (!opts) {
    opts = {};
  }
  var BS = opts.escape || "\\";
  var BAREWORD = "(\\" + BS + `['"` + META + `]|[^\\s'"` + META + "])+";
  var chunker = new RegExp([
    "(" + CONTROL + ")",
    // control chars
    "(" + BAREWORD + "|" + SINGLE_QUOTE + "|" + DOUBLE_QUOTE + ")+"
  ].join("|"), "g");
  var matches = matchAll(string, chunker);
  if (matches.length === 0) {
    return [];
  }
  if (!env2) {
    env2 = {};
  }
  var commented = false;
  return matches.map(function(match) {
    var s = match[0];
    if (!s || commented) {
      return void 0;
    }
    if (controlRE.test(s)) {
      return { op: s };
    }
    var quote3 = false;
    var esc = false;
    var out = "";
    var isGlob3 = false;
    var i;
    function parseEnvVar() {
      i += 1;
      var varend;
      var varname;
      var char = s.charAt(i);
      if (char === "{") {
        i += 1;
        if (s.charAt(i) === "}") {
          throw new Error("Bad substitution: " + s.slice(i - 2, i + 1));
        }
        varend = s.indexOf("}", i);
        if (varend < 0) {
          throw new Error("Bad substitution: " + s.slice(i));
        }
        varname = s.slice(i, varend);
        i = varend;
      } else if (/[*@#?$!_-]/.test(char)) {
        varname = char;
        i += 1;
      } else {
        var slicedFromI = s.slice(i);
        varend = slicedFromI.match(/[^\w\d_]/);
        if (!varend) {
          varname = slicedFromI;
          i = s.length;
        } else {
          varname = slicedFromI.slice(0, varend.index);
          i += varend.index - 1;
        }
      }
      return getVar(env2, "", varname);
    }
    for (i = 0; i < s.length; i++) {
      var c = s.charAt(i);
      isGlob3 = isGlob3 || !quote3 && (c === "*" || c === "?");
      if (esc) {
        out += c;
        esc = false;
      } else if (quote3) {
        if (c === quote3) {
          quote3 = false;
        } else if (quote3 == SQ) {
          out += c;
        } else {
          if (c === BS) {
            i += 1;
            c = s.charAt(i);
            if (c === DQ || c === BS || c === DS) {
              out += c;
            } else {
              out += BS + c;
            }
          } else if (c === DS) {
            out += parseEnvVar();
          } else {
            out += c;
          }
        }
      } else if (c === DQ || c === SQ) {
        quote3 = c;
      } else if (controlRE.test(c)) {
        return { op: s };
      } else if (hash.test(c)) {
        commented = true;
        var commentObj = { comment: string.slice(match.index + i + 1) };
        if (out.length) {
          return [out, commentObj];
        }
        return [commentObj];
      } else if (c === BS) {
        esc = true;
      } else if (c === DS) {
        out += parseEnvVar();
      } else {
        out += c;
      }
    }
    if (isGlob3) {
      return { op: "glob", pattern: out };
    }
    return out;
  }).reduce(function(prev, arg) {
    return typeof arg === "undefined" ? prev : prev.concat(arg);
  }, []);
}
var parse$6 = function parse2(s, env2, opts) {
  var mapped = parseInternal(s, env2, opts);
  if (typeof env2 !== "function") {
    return mapped;
  }
  return mapped.reduce(function(acc, s2) {
    if (typeof s2 === "object") {
      return acc.concat(s2);
    }
    var xs = s2.split(RegExp("(" + TOKEN + ".*?" + TOKEN + ")", "g"));
    if (xs.length === 1) {
      return acc.concat(xs[0]);
    }
    return acc.concat(xs.filter(Boolean).map(function(x) {
      if (startsWithToken.test(x)) {
        return JSON.parse(x.split(TOKEN)[1]);
      }
      return x;
    }));
  }, []);
};
shellQuote$1.quote = quote;
shellQuote$1.parse = parse$6;
var macos = {
  "/Applications/Atom.app/Contents/MacOS/Atom": "atom",
  "/Applications/Atom Beta.app/Contents/MacOS/Atom Beta": "/Applications/Atom Beta.app/Contents/MacOS/Atom Beta",
  "/Applications/Brackets.app/Contents/MacOS/Brackets": "brackets",
  "/Applications/Sublime Text.app/Contents/MacOS/Sublime Text": "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
  "/Applications/Sublime Text.app/Contents/MacOS/sublime_text": "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
  "/Applications/Sublime Text 2.app/Contents/MacOS/Sublime Text 2": "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl",
  "/Applications/Sublime Text Dev.app/Contents/MacOS/Sublime Text": "/Applications/Sublime Text Dev.app/Contents/SharedSupport/bin/subl",
  "/Applications/Visual Studio Code.app/Contents/MacOS/Electron": "code",
  "/Applications/Visual Studio Code - Insiders.app/Contents/MacOS/Electron": "code-insiders",
  "/Applications/VSCodium.app/Contents/MacOS/Electron": "codium",
  "/Applications/Cursor.app/Contents/MacOS/Cursor": "cursor",
  "/Applications/AppCode.app/Contents/MacOS/appcode": "/Applications/AppCode.app/Contents/MacOS/appcode",
  "/Applications/CLion.app/Contents/MacOS/clion": "/Applications/CLion.app/Contents/MacOS/clion",
  "/Applications/IntelliJ IDEA.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA.app/Contents/MacOS/idea",
  "/Applications/IntelliJ IDEA Ultimate.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA Ultimate.app/Contents/MacOS/idea",
  "/Applications/IntelliJ IDEA Community Edition.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA Community Edition.app/Contents/MacOS/idea",
  "/Applications/PhpStorm.app/Contents/MacOS/phpstorm": "/Applications/PhpStorm.app/Contents/MacOS/phpstorm",
  "/Applications/PyCharm.app/Contents/MacOS/pycharm": "/Applications/PyCharm.app/Contents/MacOS/pycharm",
  "/Applications/PyCharm CE.app/Contents/MacOS/pycharm": "/Applications/PyCharm CE.app/Contents/MacOS/pycharm",
  "/Applications/RubyMine.app/Contents/MacOS/rubymine": "/Applications/RubyMine.app/Contents/MacOS/rubymine",
  "/Applications/WebStorm.app/Contents/MacOS/webstorm": "/Applications/WebStorm.app/Contents/MacOS/webstorm",
  "/Applications/MacVim.app/Contents/MacOS/MacVim": "mvim",
  "/Applications/GoLand.app/Contents/MacOS/goland": "/Applications/GoLand.app/Contents/MacOS/goland",
  "/Applications/Rider.app/Contents/MacOS/rider": "/Applications/Rider.app/Contents/MacOS/rider",
  "/Applications/Zed.app/Contents/MacOS/zed": "zed"
};
var linux = {
  atom: "atom",
  Brackets: "brackets",
  "code-insiders": "code-insiders",
  code: "code",
  vscodium: "vscodium",
  codium: "codium",
  emacs: "emacs",
  gvim: "gvim",
  idea: "idea",
  "idea.sh": "idea",
  phpstorm: "phpstorm",
  "phpstorm.sh": "phpstorm",
  pycharm: "pycharm",
  "pycharm.sh": "pycharm",
  rubymine: "rubymine",
  "rubymine.sh": "rubymine",
  sublime_text: "subl",
  vim: "vim",
  webstorm: "webstorm",
  "webstorm.sh": "webstorm",
  goland: "goland",
  "goland.sh": "goland",
  rider: "rider",
  "rider.sh": "rider"
};
var windows$1 = [
  "Brackets.exe",
  "Code.exe",
  "Code - Insiders.exe",
  "VSCodium.exe",
  "Cursor.exe",
  "atom.exe",
  "sublime_text.exe",
  "notepad++.exe",
  "clion.exe",
  "clion64.exe",
  "idea.exe",
  "idea64.exe",
  "phpstorm.exe",
  "phpstorm64.exe",
  "pycharm.exe",
  "pycharm64.exe",
  "rubymine.exe",
  "rubymine64.exe",
  "webstorm.exe",
  "webstorm64.exe",
  "goland.exe",
  "goland64.exe",
  "rider.exe",
  "rider64.exe"
];
var path$6 = import_path.default;
var shellQuote = shellQuote$1;
var childProcess$1 = import_child_process.default;
var COMMON_EDITORS_MACOS = macos;
var COMMON_EDITORS_LINUX = linux;
var COMMON_EDITORS_WIN = windows$1;
var guess = function guessEditor(specifiedEditor) {
  if (specifiedEditor) {
    return shellQuote.parse(specifiedEditor);
  }
  if (process.env.LAUNCH_EDITOR) {
    return [process.env.LAUNCH_EDITOR];
  }
  if (process.versions.webcontainer) {
    return [process.env.EDITOR || "code"];
  }
  try {
    if (process.platform === "darwin") {
      const output = childProcess$1.execSync("ps x -o comm=", {
        stdio: ["pipe", "pipe", "ignore"]
      }).toString();
      const processNames = Object.keys(COMMON_EDITORS_MACOS);
      const processList = output.split("\n");
      for (let i = 0; i < processNames.length; i++) {
        const processName = processNames[i];
        if (processList.includes(processName)) {
          return [COMMON_EDITORS_MACOS[processName]];
        }
        const processNameWithoutApplications = processName.replace("/Applications", "");
        if (output.indexOf(processNameWithoutApplications) !== -1) {
          if (processName !== COMMON_EDITORS_MACOS[processName]) {
            return [COMMON_EDITORS_MACOS[processName]];
          }
          const runningProcess = processList.find((procName) => procName.endsWith(processNameWithoutApplications));
          if (runningProcess !== void 0) {
            return [runningProcess];
          }
        }
      }
    } else if (process.platform === "win32") {
      const output = childProcess$1.execSync(
        'powershell -NoProfile -Command "[Console]::OutputEncoding=[Text.Encoding]::UTF8;Get-CimInstance -Query \\"select executablepath from win32_process where executablepath is not null\\" | % { $_.ExecutablePath }"',
        {
          stdio: ["pipe", "pipe", "ignore"]
        }
      ).toString();
      const runningProcesses = output.split("\r\n");
      for (let i = 0; i < runningProcesses.length; i++) {
        const fullProcessPath = runningProcesses[i].trim();
        const shortProcessName = path$6.basename(fullProcessPath);
        if (COMMON_EDITORS_WIN.indexOf(shortProcessName) !== -1) {
          return [fullProcessPath];
        }
      }
    } else if (process.platform === "linux") {
      const output = childProcess$1.execSync("ps x --no-heading -o comm --sort=comm", {
        stdio: ["pipe", "pipe", "ignore"]
      }).toString();
      const processNames = Object.keys(COMMON_EDITORS_LINUX);
      for (let i = 0; i < processNames.length; i++) {
        const processName = processNames[i];
        if (output.indexOf(processName) !== -1) {
          return [COMMON_EDITORS_LINUX[processName]];
        }
      }
    }
  } catch (ignoreError) {
  }
  if (process.env.VISUAL) {
    return [process.env.VISUAL];
  } else if (process.env.EDITOR) {
    return [process.env.EDITOR];
  }
  return [null];
};
var path$5 = import_path.default;
var getArgs = function getArgumentsForPosition(editor, fileName, lineNumber, columnNumber = 1) {
  const editorBasename = path$5.basename(editor).replace(/\.(exe|cmd|bat)$/i, "");
  switch (editorBasename) {
    case "atom":
    case "Atom":
    case "Atom Beta":
    case "subl":
    case "sublime":
    case "sublime_text":
    case "wstorm":
    case "charm":
    case "zed":
      return [`${fileName}:${lineNumber}:${columnNumber}`];
    case "notepad++":
      return ["-n" + lineNumber, "-c" + columnNumber, fileName];
    case "vim":
    case "mvim":
      return [`+call cursor(${lineNumber}, ${columnNumber})`, fileName];
    case "joe":
    case "gvim":
      return [`+${lineNumber}`, fileName];
    case "emacs":
    case "emacsclient":
      return [`+${lineNumber}:${columnNumber}`, fileName];
    case "rmate":
    case "mate":
    case "mine":
      return ["--line", lineNumber, fileName];
    case "code":
    case "Code":
    case "code-insiders":
    case "Code - Insiders":
    case "codium":
    case "cursor":
    case "vscodium":
    case "VSCodium":
      return ["-r", "-g", `${fileName}:${lineNumber}:${columnNumber}`];
    case "appcode":
    case "clion":
    case "clion64":
    case "idea":
    case "idea64":
    case "phpstorm":
    case "phpstorm64":
    case "pycharm":
    case "pycharm64":
    case "rubymine":
    case "rubymine64":
    case "webstorm":
    case "webstorm64":
    case "goland":
    case "goland64":
    case "rider":
    case "rider64":
      return ["--line", lineNumber, "--column", columnNumber, fileName];
  }
  if (process.env.LAUNCH_EDITOR) {
    return [fileName, lineNumber, columnNumber];
  }
  return [fileName];
};
var fs$1 = import_fs.default;
var os = import_os.default;
var path$4 = import_path.default;
var colors = picocolorsExports;
var childProcess = import_child_process.default;
var guessEditor2 = guess;
var getArgumentsForPosition2 = getArgs;
function wrapErrorCallback(cb) {
  return (fileName, errorMessage) => {
    console.log();
    console.log(
      colors.red("Could not open " + path$4.basename(fileName) + " in the editor.")
    );
    if (errorMessage) {
      if (errorMessage[errorMessage.length - 1] !== ".") {
        errorMessage += ".";
      }
      console.log(
        colors.red("The editor process exited with an error: " + errorMessage)
      );
    }
    console.log();
    if (cb) cb(fileName, errorMessage);
  };
}
function isTerminalEditor(editor) {
  switch (editor) {
    case "vim":
    case "emacs":
    case "nano":
      return true;
  }
  return false;
}
var positionRE = /:(\d+)(:(\d+))?$/;
function parseFile(file) {
  if (file.startsWith("file://")) {
    file = import_url.default.fileURLToPath(file);
  }
  const fileName = file.replace(positionRE, "");
  const match = file.match(positionRE);
  const lineNumber = match && match[1];
  const columnNumber = match && match[3];
  return {
    fileName,
    lineNumber,
    columnNumber
  };
}
var _childProcess = null;
function launchEditor(file, specifiedEditor, onErrorCallback) {
  const parsed = parseFile(file);
  let { fileName } = parsed;
  const { lineNumber, columnNumber } = parsed;
  if (!fs$1.existsSync(fileName)) {
    return;
  }
  if (typeof specifiedEditor === "function") {
    onErrorCallback = specifiedEditor;
    specifiedEditor = void 0;
  }
  onErrorCallback = wrapErrorCallback(onErrorCallback);
  const [editor, ...args] = guessEditor2(specifiedEditor);
  if (!editor) {
    onErrorCallback(fileName, null);
    return;
  }
  if (process.platform === "linux" && fileName.startsWith("/mnt/") && /Microsoft/i.test(os.release())) {
    fileName = path$4.relative("", fileName);
  }
  if (lineNumber) {
    const extraArgs = getArgumentsForPosition2(editor, fileName, lineNumber, columnNumber);
    args.push.apply(args, extraArgs);
  } else {
    args.push(fileName);
  }
  if (_childProcess && isTerminalEditor(editor)) {
    _childProcess.kill("SIGKILL");
  }
  if (process.platform === "win32") {
    let escapeCmdArgs = function(cmdArgs) {
      return cmdArgs.replace(/([&|<>,;=^])/g, "^$1");
    }, doubleQuoteIfNeeded = function(str) {
      if (str.includes("^")) {
        return `^"${str}^"`;
      } else if (str.includes(" ")) {
        return `"${str}"`;
      }
      return str;
    };
    const launchCommand = [editor, ...args.map(escapeCmdArgs)].map(doubleQuoteIfNeeded).join(" ");
    _childProcess = childProcess.exec(launchCommand, {
      stdio: "inherit",
      shell: true
    });
  } else {
    _childProcess = childProcess.spawn(editor, args, { stdio: "inherit" });
  }
  _childProcess.on("exit", function(errorCode) {
    _childProcess = null;
    if (errorCode) {
      onErrorCallback(fileName, "(code " + errorCode + ")");
    }
  });
  _childProcess.on("error", function(error) {
    let { code, message } = error;
    if ("ENOENT" === code) {
      message = `${message} ('${editor}' command does not exist in 'PATH')`;
    }
    onErrorCallback(fileName, message);
  });
}
var launchEditor_1 = launchEditor;
var url$2 = import_url.default;
var path$3 = import_path.default;
var launch = launchEditor_1;
var launchEditorMiddleware = (specifiedEditor, srcRoot, onErrorCallback) => {
  if (typeof specifiedEditor === "function") {
    onErrorCallback = specifiedEditor;
    specifiedEditor = void 0;
  }
  if (typeof srcRoot === "function") {
    onErrorCallback = srcRoot;
    srcRoot = void 0;
  }
  srcRoot = srcRoot || process.cwd();
  return function launchEditorMiddleware2(req2, res) {
    const { file } = url$2.parse(req2.url, true).query || {};
    if (!file) {
      res.statusCode = 500;
      res.end(`launch-editor-middleware: required query param "file" is missing.`);
    } else {
      launch(path$3.resolve(srcRoot, file), specifiedEditor, onErrorCallback);
      res.end();
    }
  };
};
var launchEditorMiddleware$1 = getDefaultExportFromCjs(launchEditorMiddleware);
var isDockerCached;
function hasDockerEnv() {
  try {
    import_node_fs2.default.statSync("/.dockerenv");
    return true;
  } catch {
    return false;
  }
}
function hasDockerCGroup() {
  try {
    return import_node_fs2.default.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
  } catch {
    return false;
  }
}
function isDocker() {
  if (isDockerCached === void 0) {
    isDockerCached = hasDockerEnv() || hasDockerCGroup();
  }
  return isDockerCached;
}
var cachedResult;
var hasContainerEnv = () => {
  try {
    import_node_fs2.default.statSync("/run/.containerenv");
    return true;
  } catch {
    return false;
  }
};
function isInsideContainer() {
  if (cachedResult === void 0) {
    cachedResult = hasContainerEnv() || isDocker();
  }
  return cachedResult;
}
var isWsl = () => {
  if (import_node_process.default.platform !== "linux") {
    return false;
  }
  if (import_node_os.default.release().toLowerCase().includes("microsoft")) {
    if (isInsideContainer()) {
      return false;
    }
    return true;
  }
  try {
    return import_node_fs2.default.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !isInsideContainer() : false;
  } catch {
    return false;
  }
};
var isWsl$1 = import_node_process.default.env.__IS_WSL_TEST__ ? isWsl : isWsl();
function defineLazyProperty(object, propertyName, valueGetter) {
  const define = (value2) => Object.defineProperty(object, propertyName, { value: value2, enumerable: true, writable: true });
  Object.defineProperty(object, propertyName, {
    configurable: true,
    enumerable: true,
    get() {
      const result = valueGetter();
      define(result);
      return result;
    },
    set(value2) {
      define(value2);
    }
  });
  return object;
}
var execFileAsync$3 = (0, import_node_util.promisify)(import_node_child_process.execFile);
var execFileAsync$2 = (0, import_node_util.promisify)(import_node_child_process.execFile);
var execFileAsync$1 = (0, import_node_util.promisify)(import_node_child_process.execFile);
var execFileAsync = (0, import_node_util.promisify)(import_node_child_process.execFile);
var __dirname2 = import_node_path3.default.dirname((0, import_node_url2.fileURLToPath)(import.meta.url));
var localXdgOpenPath = import_node_path3.default.join(__dirname2, "xdg-open");
var { platform, arch } = import_node_process.default;
function detectArchBinary(binary) {
  if (typeof binary === "string" || Array.isArray(binary)) {
    return binary;
  }
  const { [arch]: archBinary } = binary;
  if (!archBinary) {
    throw new Error(`${arch} is not supported`);
  }
  return archBinary;
}
function detectPlatformBinary({ [platform]: platformBinary }, { wsl }) {
  if (wsl && isWsl$1) {
    return detectArchBinary(wsl);
  }
  if (!platformBinary) {
    throw new Error(`${platform} is not supported`);
  }
  return detectArchBinary(platformBinary);
}
var apps = {};
defineLazyProperty(apps, "chrome", () => detectPlatformBinary({
  darwin: "google chrome",
  win32: "chrome",
  linux: ["google-chrome", "google-chrome-stable", "chromium"]
}, {
  wsl: {
    ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
  }
}));
defineLazyProperty(apps, "firefox", () => detectPlatformBinary({
  darwin: "firefox",
  win32: "C:\\Program Files\\Mozilla Firefox\\firefox.exe",
  linux: "firefox"
}, {
  wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
}));
defineLazyProperty(apps, "edge", () => detectPlatformBinary({
  darwin: "microsoft edge",
  win32: "msedge",
  linux: ["microsoft-edge", "microsoft-edge-dev"]
}, {
  wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
}));
defineLazyProperty(apps, "browser", () => "browser");
defineLazyProperty(apps, "browserPrivate", () => "browserPrivate");
var crossSpawn = { exports: {} };
var windows;
var hasRequiredWindows;
function requireWindows() {
  if (hasRequiredWindows) return windows;
  hasRequiredWindows = 1;
  windows = isexe2;
  isexe2.sync = sync2;
  var fs2 = import_fs.default;
  function checkPathExt(path3, options2) {
    var pathext = options2.pathExt !== void 0 ? options2.pathExt : process.env.PATHEXT;
    if (!pathext) {
      return true;
    }
    pathext = pathext.split(";");
    if (pathext.indexOf("") !== -1) {
      return true;
    }
    for (var i = 0; i < pathext.length; i++) {
      var p2 = pathext[i].toLowerCase();
      if (p2 && path3.substr(-p2.length).toLowerCase() === p2) {
        return true;
      }
    }
    return false;
  }
  function checkStat(stat2, path3, options2) {
    if (!stat2.isSymbolicLink() && !stat2.isFile()) {
      return false;
    }
    return checkPathExt(path3, options2);
  }
  function isexe2(path3, options2, cb) {
    fs2.stat(path3, function(er, stat2) {
      cb(er, er ? false : checkStat(stat2, path3, options2));
    });
  }
  function sync2(path3, options2) {
    return checkStat(fs2.statSync(path3), path3, options2);
  }
  return windows;
}
var mode;
var hasRequiredMode;
function requireMode() {
  if (hasRequiredMode) return mode;
  hasRequiredMode = 1;
  mode = isexe2;
  isexe2.sync = sync2;
  var fs2 = import_fs.default;
  function isexe2(path3, options2, cb) {
    fs2.stat(path3, function(er, stat2) {
      cb(er, er ? false : checkStat(stat2, options2));
    });
  }
  function sync2(path3, options2) {
    return checkStat(fs2.statSync(path3), options2);
  }
  function checkStat(stat2, options2) {
    return stat2.isFile() && checkMode(stat2, options2);
  }
  function checkMode(stat2, options2) {
    var mod = stat2.mode;
    var uid = stat2.uid;
    var gid = stat2.gid;
    var myUid = options2.uid !== void 0 ? options2.uid : process.getuid && process.getuid();
    var myGid = options2.gid !== void 0 ? options2.gid : process.getgid && process.getgid();
    var u = parseInt("100", 8);
    var g = parseInt("010", 8);
    var o = parseInt("001", 8);
    var ug = u | g;
    var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
    return ret;
  }
  return mode;
}
var core;
if (process.platform === "win32" || commonjsGlobal.TESTING_WINDOWS) {
  core = requireWindows();
} else {
  core = requireMode();
}
var isexe_1 = isexe$1;
isexe$1.sync = sync;
function isexe$1(path3, options2, cb) {
  if (typeof options2 === "function") {
    cb = options2;
    options2 = {};
  }
  if (!cb) {
    if (typeof Promise !== "function") {
      throw new TypeError("callback not provided");
    }
    return new Promise(function(resolve3, reject) {
      isexe$1(path3, options2 || {}, function(er, is) {
        if (er) {
          reject(er);
        } else {
          resolve3(is);
        }
      });
    });
  }
  core(path3, options2 || {}, function(er, is) {
    if (er) {
      if (er.code === "EACCES" || options2 && options2.ignoreErrors) {
        er = null;
        is = false;
      }
    }
    cb(er, is);
  });
}
function sync(path3, options2) {
  try {
    return core.sync(path3, options2 || {});
  } catch (er) {
    if (options2 && options2.ignoreErrors || er.code === "EACCES") {
      return false;
    } else {
      throw er;
    }
  }
}
var isWindows2 = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
var path$2 = import_path.default;
var COLON = isWindows2 ? ";" : ":";
var isexe = isexe_1;
var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
var getPathInfo = (cmd, opt) => {
  const colon = opt.colon || COLON;
  const pathEnv = cmd.match(/\//) || isWindows2 && cmd.match(/\\/) ? [""] : [
    // windows always checks the cwd first
    ...isWindows2 ? [process.cwd()] : [],
    ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
    "").split(colon)
  ];
  const pathExtExe = isWindows2 ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
  const pathExt = isWindows2 ? pathExtExe.split(colon) : [""];
  if (isWindows2) {
    if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
      pathExt.unshift("");
  }
  return {
    pathEnv,
    pathExt,
    pathExtExe
  };
};
var which$1 = (cmd, opt, cb) => {
  if (typeof opt === "function") {
    cb = opt;
    opt = {};
  }
  if (!opt)
    opt = {};
  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
  const found = [];
  const step = (i) => new Promise((resolve3, reject) => {
    if (i === pathEnv.length)
      return opt.all && found.length ? resolve3(found) : reject(getNotFoundError(cmd));
    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
    const pCmd = path$2.join(pathPart, cmd);
    const p2 = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
    resolve3(subStep(p2, i, 0));
  });
  const subStep = (p2, i, ii) => new Promise((resolve3, reject) => {
    if (ii === pathExt.length)
      return resolve3(step(i + 1));
    const ext = pathExt[ii];
    isexe(p2 + ext, { pathExt: pathExtExe }, (er, is) => {
      if (!er && is) {
        if (opt.all)
          found.push(p2 + ext);
        else
          return resolve3(p2 + ext);
      }
      return resolve3(subStep(p2, i, ii + 1));
    });
  });
  return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
};
var whichSync = (cmd, opt) => {
  opt = opt || {};
  const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
  const found = [];
  for (let i = 0; i < pathEnv.length; i++) {
    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
    const pCmd = path$2.join(pathPart, cmd);
    const p2 = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
    for (let j = 0; j < pathExt.length; j++) {
      const cur = p2 + pathExt[j];
      try {
        const is = isexe.sync(cur, { pathExt: pathExtExe });
        if (is) {
          if (opt.all)
            found.push(cur);
          else
            return cur;
        }
      } catch (ex) {
      }
    }
  }
  if (opt.all && found.length)
    return found;
  if (opt.nothrow)
    return null;
  throw getNotFoundError(cmd);
};
var which_1 = which$1;
which$1.sync = whichSync;
var pathKey$1 = { exports: {} };
var pathKey = (options2 = {}) => {
  const environment = options2.env || process.env;
  const platform2 = options2.platform || process.platform;
  if (platform2 !== "win32") {
    return "PATH";
  }
  return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
};
pathKey$1.exports = pathKey;
pathKey$1.exports.default = pathKey;
var pathKeyExports = pathKey$1.exports;
var path$1 = import_path.default;
var which = which_1;
var getPathKey = pathKeyExports;
function resolveCommandAttempt(parsed, withoutPathExt) {
  const env2 = parsed.options.env || process.env;
  const cwd = process.cwd();
  const hasCustomCwd = parsed.options.cwd != null;
  const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
  if (shouldSwitchCwd) {
    try {
      process.chdir(parsed.options.cwd);
    } catch (err) {
    }
  }
  let resolved;
  try {
    resolved = which.sync(parsed.command, {
      path: env2[getPathKey({ env: env2 })],
      pathExt: withoutPathExt ? path$1.delimiter : void 0
    });
  } catch (e) {
  } finally {
    if (shouldSwitchCwd) {
      process.chdir(cwd);
    }
  }
  if (resolved) {
    resolved = path$1.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
  }
  return resolved;
}
function resolveCommand$1(parsed) {
  return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}
var resolveCommand_1 = resolveCommand$1;
var _escape = {};
var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
function escapeCommand(arg) {
  arg = arg.replace(metaCharsRegExp, "^$1");
  return arg;
}
function escapeArgument(arg, doubleEscapeMetaChars) {
  arg = `${arg}`;
  arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
  arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
  arg = `"${arg}"`;
  arg = arg.replace(metaCharsRegExp, "^$1");
  if (doubleEscapeMetaChars) {
    arg = arg.replace(metaCharsRegExp, "^$1");
  }
  return arg;
}
_escape.command = escapeCommand;
_escape.argument = escapeArgument;
var shebangRegex$1 = /^#!(.*)/;
var shebangRegex = shebangRegex$1;
var shebangCommand$1 = (string = "") => {
  const match = string.match(shebangRegex);
  if (!match) {
    return null;
  }
  const [path3, argument] = match[0].replace(/#! ?/, "").split(" ");
  const binary = path3.split("/").pop();
  if (binary === "env") {
    return argument;
  }
  return argument ? `${binary} ${argument}` : binary;
};
var fs = import_fs.default;
var shebangCommand = shebangCommand$1;
function readShebang$1(command) {
  const size = 150;
  const buffer = Buffer.alloc(size);
  let fd;
  try {
    fd = fs.openSync(command, "r");
    fs.readSync(fd, buffer, 0, size, 0);
    fs.closeSync(fd);
  } catch (e) {
  }
  return shebangCommand(buffer.toString());
}
var readShebang_1 = readShebang$1;
var path2 = import_path.default;
var resolveCommand = resolveCommand_1;
var escape$1 = _escape;
var readShebang = readShebang_1;
var isWin$1 = process.platform === "win32";
var isExecutableRegExp = /\.(?:com|exe)$/i;
var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function detectShebang(parsed) {
  parsed.file = resolveCommand(parsed);
  const shebang = parsed.file && readShebang(parsed.file);
  if (shebang) {
    parsed.args.unshift(parsed.file);
    parsed.command = shebang;
    return resolveCommand(parsed);
  }
  return parsed.file;
}
function parseNonShell(parsed) {
  if (!isWin$1) {
    return parsed;
  }
  const commandFile = detectShebang(parsed);
  const needsShell = !isExecutableRegExp.test(commandFile);
  if (parsed.options.forceShell || needsShell) {
    const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
    parsed.command = path2.normalize(parsed.command);
    parsed.command = escape$1.command(parsed.command);
    parsed.args = parsed.args.map((arg) => escape$1.argument(arg, needsDoubleEscapeMetaChars));
    const shellCommand = [parsed.command].concat(parsed.args).join(" ");
    parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
    parsed.command = process.env.comspec || "cmd.exe";
    parsed.options.windowsVerbatimArguments = true;
  }
  return parsed;
}
function parse$5(command, args, options2) {
  if (args && !Array.isArray(args)) {
    options2 = args;
    args = null;
  }
  args = args ? args.slice(0) : [];
  options2 = Object.assign({}, options2);
  const parsed = {
    command,
    args,
    options: options2,
    file: void 0,
    original: {
      command,
      args
    }
  };
  return options2.shell ? parsed : parseNonShell(parsed);
}
var parse_1 = parse$5;
var isWin = process.platform === "win32";
function notFoundError(original, syscall) {
  return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
    code: "ENOENT",
    errno: "ENOENT",
    syscall: `${syscall} ${original.command}`,
    path: original.command,
    spawnargs: original.args
  });
}
function hookChildProcess(cp2, parsed) {
  if (!isWin) {
    return;
  }
  const originalEmit = cp2.emit;
  cp2.emit = function(name, arg1) {
    if (name === "exit") {
      const err = verifyENOENT(arg1, parsed);
      if (err) {
        return originalEmit.call(cp2, "error", err);
      }
    }
    return originalEmit.apply(cp2, arguments);
  };
}
function verifyENOENT(status2, parsed) {
  if (isWin && status2 === 1 && !parsed.file) {
    return notFoundError(parsed.original, "spawn");
  }
  return null;
}
function verifyENOENTSync(status2, parsed) {
  if (isWin && status2 === 1 && !parsed.file) {
    return notFoundError(parsed.original, "spawnSync");
  }
  return null;
}
var enoent$1 = {
  hookChildProcess,
  verifyENOENT,
  verifyENOENTSync,
  notFoundError
};
var cp = import_child_process.default;
var parse$4 = parse_1;
var enoent = enoent$1;
function spawn(command, args, options2) {
  const parsed = parse$4(command, args, options2);
  const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
  enoent.hookChildProcess(spawned, parsed);
  return spawned;
}
function spawnSync(command, args, options2) {
  const parsed = parse$4(command, args, options2);
  const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
  result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
  return result;
}
crossSpawn.exports = spawn;
crossSpawn.exports.spawn = spawn;
crossSpawn.exports.sync = spawnSync;
crossSpawn.exports._parse = parse$4;
crossSpawn.exports._enoent = enoent;
var crossSpawnExports = crossSpawn.exports;
var spawn$1 = getDefaultExportFromCjs(crossSpawnExports);
var bufferUtil$1 = { exports: {} };
var BINARY_TYPES$2 = ["nodebuffer", "arraybuffer", "fragments"];
var hasBlob$1 = typeof Blob !== "undefined";
if (hasBlob$1) BINARY_TYPES$2.push("blob");
var constants = {
  BINARY_TYPES: BINARY_TYPES$2,
  EMPTY_BUFFER: Buffer.alloc(0),
  GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
  hasBlob: hasBlob$1,
  kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
  kListener: Symbol("kListener"),
  kStatusCode: Symbol("status-code"),
  kWebSocket: Symbol("websocket"),
  NOOP: () => {
  }
};
var { EMPTY_BUFFER: EMPTY_BUFFER$3 } = constants;
var FastBuffer$2 = Buffer[Symbol.species];
function concat$1(list, totalLength) {
  if (list.length === 0) return EMPTY_BUFFER$3;
  if (list.length === 1) return list[0];
  const target = Buffer.allocUnsafe(totalLength);
  let offset = 0;
  for (let i = 0; i < list.length; i++) {
    const buf = list[i];
    target.set(buf, offset);
    offset += buf.length;
  }
  if (offset < totalLength) {
    return new FastBuffer$2(target.buffer, target.byteOffset, offset);
  }
  return target;
}
function _mask(source, mask, output, offset, length) {
  for (let i = 0; i < length; i++) {
    output[offset + i] = source[i] ^ mask[i & 3];
  }
}
function _unmask(buffer, mask) {
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] ^= mask[i & 3];
  }
}
function toArrayBuffer$1(buf) {
  if (buf.length === buf.buffer.byteLength) {
    return buf.buffer;
  }
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
}
function toBuffer$2(data) {
  toBuffer$2.readOnly = true;
  if (Buffer.isBuffer(data)) return data;
  let buf;
  if (data instanceof ArrayBuffer) {
    buf = new FastBuffer$2(data);
  } else if (ArrayBuffer.isView(data)) {
    buf = new FastBuffer$2(data.buffer, data.byteOffset, data.byteLength);
  } else {
    buf = Buffer.from(data);
    toBuffer$2.readOnly = false;
  }
  return buf;
}
bufferUtil$1.exports = {
  concat: concat$1,
  mask: _mask,
  toArrayBuffer: toArrayBuffer$1,
  toBuffer: toBuffer$2,
  unmask: _unmask
};
if (!process.env.WS_NO_BUFFER_UTIL) {
  try {
    const bufferUtil2 = __require("bufferutil");
    bufferUtil$1.exports.mask = function(source, mask, output, offset, length) {
      if (length < 48) _mask(source, mask, output, offset, length);
      else bufferUtil2.mask(source, mask, output, offset, length);
    };
    bufferUtil$1.exports.unmask = function(buffer, mask) {
      if (buffer.length < 32) _unmask(buffer, mask);
      else bufferUtil2.unmask(buffer, mask);
    };
  } catch (e) {
  }
}
var bufferUtilExports = bufferUtil$1.exports;
var kDone = Symbol("kDone");
var kRun = Symbol("kRun");
var Limiter$1 = class Limiter {
  /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */
  constructor(concurrency) {
    this[kDone] = () => {
      this.pending--;
      this[kRun]();
    };
    this.concurrency = concurrency || Infinity;
    this.jobs = [];
    this.pending = 0;
  }
  /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */
  add(job) {
    this.jobs.push(job);
    this[kRun]();
  }
  /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */
  [kRun]() {
    if (this.pending === this.concurrency) return;
    if (this.jobs.length) {
      const job = this.jobs.shift();
      this.pending++;
      job(this[kDone]);
    }
  }
};
var limiter = Limiter$1;
var zlib = import_zlib.default;
var bufferUtil = bufferUtilExports;
var Limiter2 = limiter;
var { kStatusCode: kStatusCode$2 } = constants;
var FastBuffer$1 = Buffer[Symbol.species];
var TRAILER = Buffer.from([0, 0, 255, 255]);
var kPerMessageDeflate = Symbol("permessage-deflate");
var kTotalLength = Symbol("total-length");
var kCallback = Symbol("callback");
var kBuffers = Symbol("buffers");
var kError$1 = Symbol("error");
var zlibLimiter;
var PerMessageDeflate$4 = class PerMessageDeflate {
  /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed if context takeover is disabled
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */
  constructor(options2, isServer, maxPayload) {
    this._maxPayload = maxPayload | 0;
    this._options = options2 || {};
    this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
    this._isServer = !!isServer;
    this._deflate = null;
    this._inflate = null;
    this.params = null;
    if (!zlibLimiter) {
      const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
      zlibLimiter = new Limiter2(concurrency);
    }
  }
  /**
   * @type {String}
   */
  static get extensionName() {
    return "permessage-deflate";
  }
  /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */
  offer() {
    const params = {};
    if (this._options.serverNoContextTakeover) {
      params.server_no_context_takeover = true;
    }
    if (this._options.clientNoContextTakeover) {
      params.client_no_context_takeover = true;
    }
    if (this._options.serverMaxWindowBits) {
      params.server_max_window_bits = this._options.serverMaxWindowBits;
    }
    if (this._options.clientMaxWindowBits) {
      params.client_max_window_bits = this._options.clientMaxWindowBits;
    } else if (this._options.clientMaxWindowBits == null) {
      params.client_max_window_bits = true;
    }
    return params;
  }
  /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */
  accept(configurations) {
    configurations = this.normalizeParams(configurations);
    this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
    return this.params;
  }
  /**
   * Releases all resources used by the extension.
   *
   * @public
   */
  cleanup() {
    if (this._inflate) {
      this._inflate.close();
      this._inflate = null;
    }
    if (this._deflate) {
      const callback2 = this._deflate[kCallback];
      this._deflate.close();
      this._deflate = null;
      if (callback2) {
        callback2(
          new Error(
            "The deflate stream was closed while data was being processed"
          )
        );
      }
    }
  }
  /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsServer(offers) {
    const opts = this._options;
    const accepted = offers.find((params) => {
      if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
        return false;
      }
      return true;
    });
    if (!accepted) {
      throw new Error("None of the extension offers can be accepted");
    }
    if (opts.serverNoContextTakeover) {
      accepted.server_no_context_takeover = true;
    }
    if (opts.clientNoContextTakeover) {
      accepted.client_no_context_takeover = true;
    }
    if (typeof opts.serverMaxWindowBits === "number") {
      accepted.server_max_window_bits = opts.serverMaxWindowBits;
    }
    if (typeof opts.clientMaxWindowBits === "number") {
      accepted.client_max_window_bits = opts.clientMaxWindowBits;
    } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
      delete accepted.client_max_window_bits;
    }
    return accepted;
  }
  /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsClient(response) {
    const params = response[0];
    if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
      throw new Error('Unexpected parameter "client_no_context_takeover"');
    }
    if (!params.client_max_window_bits) {
      if (typeof this._options.clientMaxWindowBits === "number") {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      }
    } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
      throw new Error(
        'Unexpected or invalid parameter "client_max_window_bits"'
      );
    }
    return params;
  }
  /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */
  normalizeParams(configurations) {
    configurations.forEach((params) => {
      Object.keys(params).forEach((key) => {
        let value2 = params[key];
        if (value2.length > 1) {
          throw new Error(`Parameter "${key}" must have only a single value`);
        }
        value2 = value2[0];
        if (key === "client_max_window_bits") {
          if (value2 !== true) {
            const num = +value2;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(
                `Invalid value for parameter "${key}": ${value2}`
              );
            }
            value2 = num;
          } else if (!this._isServer) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value2}`
            );
          }
        } else if (key === "server_max_window_bits") {
          const num = +value2;
          if (!Number.isInteger(num) || num < 8 || num > 15) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value2}`
            );
          }
          value2 = num;
        } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
          if (value2 !== true) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value2}`
            );
          }
        } else {
          throw new Error(`Unknown parameter "${key}"`);
        }
        params[key] = value2;
      });
    });
    return configurations;
  }
  /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  decompress(data, fin, callback2) {
    zlibLimiter.add((done) => {
      this._decompress(data, fin, (err, result) => {
        done();
        callback2(err, result);
      });
    });
  }
  /**
   * Compress data. Concurrency limited.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  compress(data, fin, callback2) {
    zlibLimiter.add((done) => {
      this._compress(data, fin, (err, result) => {
        done();
        callback2(err, result);
      });
    });
  }
  /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _decompress(data, fin, callback2) {
    const endpoint = this._isServer ? "client" : "server";
    if (!this._inflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
      this._inflate = zlib.createInflateRaw({
        ...this._options.zlibInflateOptions,
        windowBits
      });
      this._inflate[kPerMessageDeflate] = this;
      this._inflate[kTotalLength] = 0;
      this._inflate[kBuffers] = [];
      this._inflate.on("error", inflateOnError);
      this._inflate.on("data", inflateOnData);
    }
    this._inflate[kCallback] = callback2;
    this._inflate.write(data);
    if (fin) this._inflate.write(TRAILER);
    this._inflate.flush(() => {
      const err = this._inflate[kError$1];
      if (err) {
        this._inflate.close();
        this._inflate = null;
        callback2(err);
        return;
      }
      const data2 = bufferUtil.concat(
        this._inflate[kBuffers],
        this._inflate[kTotalLength]
      );
      if (this._inflate._readableState.endEmitted) {
        this._inflate.close();
        this._inflate = null;
      } else {
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];
        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._inflate.reset();
        }
      }
      callback2(null, data2);
    });
  }
  /**
   * Compress data.
   *
   * @param {(Buffer|String)} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _compress(data, fin, callback2) {
    const endpoint = this._isServer ? "server" : "client";
    if (!this._deflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
      this._deflate = zlib.createDeflateRaw({
        ...this._options.zlibDeflateOptions,
        windowBits
      });
      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];
      this._deflate.on("data", deflateOnData);
    }
    this._deflate[kCallback] = callback2;
    this._deflate.write(data);
    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
      if (!this._deflate) {
        return;
      }
      let data2 = bufferUtil.concat(
        this._deflate[kBuffers],
        this._deflate[kTotalLength]
      );
      if (fin) {
        data2 = new FastBuffer$1(data2.buffer, data2.byteOffset, data2.length - 4);
      }
      this._deflate[kCallback] = null;
      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];
      if (fin && this.params[`${endpoint}_no_context_takeover`]) {
        this._deflate.reset();
      }
      callback2(null, data2);
    });
  }
};
var permessageDeflate = PerMessageDeflate$4;
function deflateOnData(chunk) {
  this[kBuffers].push(chunk);
  this[kTotalLength] += chunk.length;
}
function inflateOnData(chunk) {
  this[kTotalLength] += chunk.length;
  if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
    this[kBuffers].push(chunk);
    return;
  }
  this[kError$1] = new RangeError("Max payload size exceeded");
  this[kError$1].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
  this[kError$1][kStatusCode$2] = 1009;
  this.removeListener("data", inflateOnData);
  this.reset();
}
function inflateOnError(err) {
  this[kPerMessageDeflate]._inflate = null;
  err[kStatusCode$2] = 1007;
  this[kCallback](err);
}
var validation = { exports: {} };
var { isUtf8 } = import_buffer.default;
var { hasBlob } = constants;
var tokenChars$2 = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // 0 - 15
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  // 16 - 31
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  // 32 - 47
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  // 48 - 63
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  // 64 - 79
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  1,
  // 80 - 95
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  // 96 - 111
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  0
  // 112 - 127
];
function isValidStatusCode$2(code) {
  return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
}
function _isValidUTF8(buf) {
  const len = buf.length;
  let i = 0;
  while (i < len) {
    if ((buf[i] & 128) === 0) {
      i++;
    } else if ((buf[i] & 224) === 192) {
      if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
        return false;
      }
      i += 2;
    } else if ((buf[i] & 240) === 224) {
      if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
      buf[i] === 237 && (buf[i + 1] & 224) === 160) {
        return false;
      }
      i += 3;
    } else if ((buf[i] & 248) === 240) {
      if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
      buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
        return false;
      }
      i += 4;
    } else {
      return false;
    }
  }
  return true;
}
function isBlob$2(value2) {
  return hasBlob && typeof value2 === "object" && typeof value2.arrayBuffer === "function" && typeof value2.type === "string" && typeof value2.stream === "function" && (value2[Symbol.toStringTag] === "Blob" || value2[Symbol.toStringTag] === "File");
}
validation.exports = {
  isBlob: isBlob$2,
  isValidStatusCode: isValidStatusCode$2,
  isValidUTF8: _isValidUTF8,
  tokenChars: tokenChars$2
};
if (isUtf8) {
  validation.exports.isValidUTF8 = function(buf) {
    return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
  };
} else if (!process.env.WS_NO_UTF_8_VALIDATE) {
  try {
    const isValidUTF82 = __require("utf-8-validate");
    validation.exports.isValidUTF8 = function(buf) {
      return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF82(buf);
    };
  } catch (e) {
  }
}
var validationExports = validation.exports;
var { Writable: Writable$1 } = import_stream.default;
var PerMessageDeflate$3 = permessageDeflate;
var {
  BINARY_TYPES: BINARY_TYPES$1,
  EMPTY_BUFFER: EMPTY_BUFFER$2,
  kStatusCode: kStatusCode$1,
  kWebSocket: kWebSocket$3
} = constants;
var { concat, toArrayBuffer, unmask } = bufferUtilExports;
var { isValidStatusCode: isValidStatusCode$1, isValidUTF8 } = validationExports;
var FastBuffer = Buffer[Symbol.species];
var GET_INFO = 0;
var GET_PAYLOAD_LENGTH_16 = 1;
var GET_PAYLOAD_LENGTH_64 = 2;
var GET_MASK = 3;
var GET_DATA = 4;
var INFLATING = 5;
var DEFER_EVENT = 6;
var Receiver$1 = class Receiver extends Writable$1 {
  /**
   * Creates a Receiver instance.
   *
   * @param {Object} [options] Options object
   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {String} [options.binaryType=nodebuffer] The type for binary data
   * @param {Object} [options.extensions] An object containing the negotiated
   *     extensions
   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
   *     client or server mode
   * @param {Number} [options.maxPayload=0] The maximum allowed message length
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   */
  constructor(options2 = {}) {
    super();
    this._allowSynchronousEvents = options2.allowSynchronousEvents !== void 0 ? options2.allowSynchronousEvents : true;
    this._binaryType = options2.binaryType || BINARY_TYPES$1[0];
    this._extensions = options2.extensions || {};
    this._isServer = !!options2.isServer;
    this._maxPayload = options2.maxPayload | 0;
    this._skipUTF8Validation = !!options2.skipUTF8Validation;
    this[kWebSocket$3] = void 0;
    this._bufferedBytes = 0;
    this._buffers = [];
    this._compressed = false;
    this._payloadLength = 0;
    this._mask = void 0;
    this._fragmented = 0;
    this._masked = false;
    this._fin = false;
    this._opcode = 0;
    this._totalPayloadLength = 0;
    this._messageLength = 0;
    this._fragments = [];
    this._errored = false;
    this._loop = false;
    this._state = GET_INFO;
  }
  /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */
  _write(chunk, encoding, cb) {
    if (this._opcode === 8 && this._state == GET_INFO) return cb();
    this._bufferedBytes += chunk.length;
    this._buffers.push(chunk);
    this.startLoop(cb);
  }
  /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */
  consume(n) {
    this._bufferedBytes -= n;
    if (n === this._buffers[0].length) return this._buffers.shift();
    if (n < this._buffers[0].length) {
      const buf = this._buffers[0];
      this._buffers[0] = new FastBuffer(
        buf.buffer,
        buf.byteOffset + n,
        buf.length - n
      );
      return new FastBuffer(buf.buffer, buf.byteOffset, n);
    }
    const dst = Buffer.allocUnsafe(n);
    do {
      const buf = this._buffers[0];
      const offset = dst.length - n;
      if (n >= buf.length) {
        dst.set(this._buffers.shift(), offset);
      } else {
        dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
        this._buffers[0] = new FastBuffer(
          buf.buffer,
          buf.byteOffset + n,
          buf.length - n
        );
      }
      n -= buf.length;
    } while (n > 0);
    return dst;
  }
  /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */
  startLoop(cb) {
    this._loop = true;
    do {
      switch (this._state) {
        case GET_INFO:
          this.getInfo(cb);
          break;
        case GET_PAYLOAD_LENGTH_16:
          this.getPayloadLength16(cb);
          break;
        case GET_PAYLOAD_LENGTH_64:
          this.getPayloadLength64(cb);
          break;
        case GET_MASK:
          this.getMask();
          break;
        case GET_DATA:
          this.getData(cb);
          break;
        case INFLATING:
        case DEFER_EVENT:
          this._loop = false;
          return;
      }
    } while (this._loop);
    if (!this._errored) cb();
  }
  /**
   * Reads the first two bytes of a frame.
   *
   * @param {Function} cb Callback
   * @private
   */
  getInfo(cb) {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }
    const buf = this.consume(2);
    if ((buf[0] & 48) !== 0) {
      const error = this.createError(
        RangeError,
        "RSV2 and RSV3 must be clear",
        true,
        1002,
        "WS_ERR_UNEXPECTED_RSV_2_3"
      );
      cb(error);
      return;
    }
    const compressed = (buf[0] & 64) === 64;
    if (compressed && !this._extensions[PerMessageDeflate$3.extensionName]) {
      const error = this.createError(
        RangeError,
        "RSV1 must be clear",
        true,
        1002,
        "WS_ERR_UNEXPECTED_RSV_1"
      );
      cb(error);
      return;
    }
    this._fin = (buf[0] & 128) === 128;
    this._opcode = buf[0] & 15;
    this._payloadLength = buf[1] & 127;
    if (this._opcode === 0) {
      if (compressed) {
        const error = this.createError(
          RangeError,
          "RSV1 must be clear",
          true,
          1002,
          "WS_ERR_UNEXPECTED_RSV_1"
        );
        cb(error);
        return;
      }
      if (!this._fragmented) {
        const error = this.createError(
          RangeError,
          "invalid opcode 0",
          true,
          1002,
          "WS_ERR_INVALID_OPCODE"
        );
        cb(error);
        return;
      }
      this._opcode = this._fragmented;
    } else if (this._opcode === 1 || this._opcode === 2) {
      if (this._fragmented) {
        const error = this.createError(
          RangeError,
          `invalid opcode ${this._opcode}`,
          true,
          1002,
          "WS_ERR_INVALID_OPCODE"
        );
        cb(error);
        return;
      }
      this._compressed = compressed;
    } else if (this._opcode > 7 && this._opcode < 11) {
      if (!this._fin) {
        const error = this.createError(
          RangeError,
          "FIN must be set",
          true,
          1002,
          "WS_ERR_EXPECTED_FIN"
        );
        cb(error);
        return;
      }
      if (compressed) {
        const error = this.createError(
          RangeError,
          "RSV1 must be clear",
          true,
          1002,
          "WS_ERR_UNEXPECTED_RSV_1"
        );
        cb(error);
        return;
      }
      if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
        const error = this.createError(
          RangeError,
          `invalid payload length ${this._payloadLength}`,
          true,
          1002,
          "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
        );
        cb(error);
        return;
      }
    } else {
      const error = this.createError(
        RangeError,
        `invalid opcode ${this._opcode}`,
        true,
        1002,
        "WS_ERR_INVALID_OPCODE"
      );
      cb(error);
      return;
    }
    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
    this._masked = (buf[1] & 128) === 128;
    if (this._isServer) {
      if (!this._masked) {
        const error = this.createError(
          RangeError,
          "MASK must be set",
          true,
          1002,
          "WS_ERR_EXPECTED_MASK"
        );
        cb(error);
        return;
      }
    } else if (this._masked) {
      const error = this.createError(
        RangeError,
        "MASK must be clear",
        true,
        1002,
        "WS_ERR_UNEXPECTED_MASK"
      );
      cb(error);
      return;
    }
    if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
    else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
    else this.haveLength(cb);
  }
  /**
   * Gets extended payload length (7+16).
   *
   * @param {Function} cb Callback
   * @private
   */
  getPayloadLength16(cb) {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }
    this._payloadLength = this.consume(2).readUInt16BE(0);
    this.haveLength(cb);
  }
  /**
   * Gets extended payload length (7+64).
   *
   * @param {Function} cb Callback
   * @private
   */
  getPayloadLength64(cb) {
    if (this._bufferedBytes < 8) {
      this._loop = false;
      return;
    }
    const buf = this.consume(8);
    const num = buf.readUInt32BE(0);
    if (num > Math.pow(2, 53 - 32) - 1) {
      const error = this.createError(
        RangeError,
        "Unsupported WebSocket frame: payload length > 2^53 - 1",
        false,
        1009,
        "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
      );
      cb(error);
      return;
    }
    this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
    this.haveLength(cb);
  }
  /**
   * Payload length has been read.
   *
   * @param {Function} cb Callback
   * @private
   */
  haveLength(cb) {
    if (this._payloadLength && this._opcode < 8) {
      this._totalPayloadLength += this._payloadLength;
      if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
        const error = this.createError(
          RangeError,
          "Max payload size exceeded",
          false,
          1009,
          "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
        );
        cb(error);
        return;
      }
    }
    if (this._masked) this._state = GET_MASK;
    else this._state = GET_DATA;
  }
  /**
   * Reads mask bytes.
   *
   * @private
   */
  getMask() {
    if (this._bufferedBytes < 4) {
      this._loop = false;
      return;
    }
    this._mask = this.consume(4);
    this._state = GET_DATA;
  }
  /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @private
   */
  getData(cb) {
    let data = EMPTY_BUFFER$2;
    if (this._payloadLength) {
      if (this._bufferedBytes < this._payloadLength) {
        this._loop = false;
        return;
      }
      data = this.consume(this._payloadLength);
      if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
        unmask(data, this._mask);
      }
    }
    if (this._opcode > 7) {
      this.controlMessage(data, cb);
      return;
    }
    if (this._compressed) {
      this._state = INFLATING;
      this.decompress(data, cb);
      return;
    }
    if (data.length) {
      this._messageLength = this._totalPayloadLength;
      this._fragments.push(data);
    }
    this.dataMessage(cb);
  }
  /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */
  decompress(data, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate$3.extensionName];
    perMessageDeflate.decompress(data, this._fin, (err, buf) => {
      if (err) return cb(err);
      if (buf.length) {
        this._messageLength += buf.length;
        if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
          const error = this.createError(
            RangeError,
            "Max payload size exceeded",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
          );
          cb(error);
          return;
        }
        this._fragments.push(buf);
      }
      this.dataMessage(cb);
      if (this._state === GET_INFO) this.startLoop(cb);
    });
  }
  /**
   * Handles a data message.
   *
   * @param {Function} cb Callback
   * @private
   */
  dataMessage(cb) {
    if (!this._fin) {
      this._state = GET_INFO;
      return;
    }
    const messageLength = this._messageLength;
    const fragments = this._fragments;
    this._totalPayloadLength = 0;
    this._messageLength = 0;
    this._fragmented = 0;
    this._fragments = [];
    if (this._opcode === 2) {
      let data;
      if (this._binaryType === "nodebuffer") {
        data = concat(fragments, messageLength);
      } else if (this._binaryType === "arraybuffer") {
        data = toArrayBuffer(concat(fragments, messageLength));
      } else if (this._binaryType === "blob") {
        data = new Blob(fragments);
      } else {
        data = fragments;
      }
      if (this._allowSynchronousEvents) {
        this.emit("message", data, true);
        this._state = GET_INFO;
      } else {
        this._state = DEFER_EVENT;
        setImmediate(() => {
          this.emit("message", data, true);
          this._state = GET_INFO;
          this.startLoop(cb);
        });
      }
    } else {
      const buf = concat(fragments, messageLength);
      if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
        const error = this.createError(
          Error,
          "invalid UTF-8 sequence",
          true,
          1007,
          "WS_ERR_INVALID_UTF8"
        );
        cb(error);
        return;
      }
      if (this._state === INFLATING || this._allowSynchronousEvents) {
        this.emit("message", buf, false);
        this._state = GET_INFO;
      } else {
        this._state = DEFER_EVENT;
        setImmediate(() => {
          this.emit("message", buf, false);
          this._state = GET_INFO;
          this.startLoop(cb);
        });
      }
    }
  }
  /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  controlMessage(data, cb) {
    if (this._opcode === 8) {
      if (data.length === 0) {
        this._loop = false;
        this.emit("conclude", 1005, EMPTY_BUFFER$2);
        this.end();
      } else {
        const code = data.readUInt16BE(0);
        if (!isValidStatusCode$1(code)) {
          const error = this.createError(
            RangeError,
            `invalid status code ${code}`,
            true,
            1002,
            "WS_ERR_INVALID_CLOSE_CODE"
          );
          cb(error);
          return;
        }
        const buf = new FastBuffer(
          data.buffer,
          data.byteOffset + 2,
          data.length - 2
        );
        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          const error = this.createError(
            Error,
            "invalid UTF-8 sequence",
            true,
            1007,
            "WS_ERR_INVALID_UTF8"
          );
          cb(error);
          return;
        }
        this._loop = false;
        this.emit("conclude", code, buf);
        this.end();
      }
      this._state = GET_INFO;
      return;
    }
    if (this._allowSynchronousEvents) {
      this.emit(this._opcode === 9 ? "ping" : "pong", data);
      this._state = GET_INFO;
    } else {
      this._state = DEFER_EVENT;
      setImmediate(() => {
        this.emit(this._opcode === 9 ? "ping" : "pong", data);
        this._state = GET_INFO;
        this.startLoop(cb);
      });
    }
  }
  /**
   * Builds an error object.
   *
   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
   * @param {String} message The error message
   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
   *     `message`
   * @param {Number} statusCode The status code
   * @param {String} errorCode The exposed error code
   * @return {(Error|RangeError)} The error
   * @private
   */
  createError(ErrorCtor, message, prefix, statusCode, errorCode) {
    this._loop = false;
    this._errored = true;
    const err = new ErrorCtor(
      prefix ? `Invalid WebSocket frame: ${message}` : message
    );
    Error.captureStackTrace(err, this.createError);
    err.code = errorCode;
    err[kStatusCode$1] = statusCode;
    return err;
  }
};
var receiver = Receiver$1;
var { randomFillSync } = import_crypto.default;
var PerMessageDeflate$2 = permessageDeflate;
var { EMPTY_BUFFER: EMPTY_BUFFER$1, kWebSocket: kWebSocket$2, NOOP: NOOP$2 } = constants;
var { isBlob: isBlob$1, isValidStatusCode } = validationExports;
var { mask: applyMask, toBuffer: toBuffer$1 } = bufferUtilExports;
var kByteLength = Symbol("kByteLength");
var maskBuffer = Buffer.alloc(4);
var RANDOM_POOL_SIZE = 8 * 1024;
var randomPool;
var randomPoolPointer = RANDOM_POOL_SIZE;
var DEFAULT = 0;
var DEFLATING = 1;
var GET_BLOB_DATA = 2;
var Sender$1 = class Sender {
  /**
   * Creates a Sender instance.
   *
   * @param {Duplex} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Function} [generateMask] The function used to generate the masking
   *     key
   */
  constructor(socket, extensions2, generateMask) {
    this._extensions = extensions2 || {};
    if (generateMask) {
      this._generateMask = generateMask;
      this._maskBuffer = Buffer.alloc(4);
    }
    this._socket = socket;
    this._firstFragment = true;
    this._compress = false;
    this._bufferedBytes = 0;
    this._queue = [];
    this._state = DEFAULT;
    this.onerror = NOOP$2;
    this[kWebSocket$2] = void 0;
  }
  /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {(Buffer|String)} data The data to frame
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {(Buffer|String)[]} The framed data
   * @public
   */
  static frame(data, options2) {
    let mask;
    let merge2 = false;
    let offset = 2;
    let skipMasking = false;
    if (options2.mask) {
      mask = options2.maskBuffer || maskBuffer;
      if (options2.generateMask) {
        options2.generateMask(mask);
      } else {
        if (randomPoolPointer === RANDOM_POOL_SIZE) {
          if (randomPool === void 0) {
            randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
          }
          randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
          randomPoolPointer = 0;
        }
        mask[0] = randomPool[randomPoolPointer++];
        mask[1] = randomPool[randomPoolPointer++];
        mask[2] = randomPool[randomPoolPointer++];
        mask[3] = randomPool[randomPoolPointer++];
      }
      skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
      offset = 6;
    }
    let dataLength;
    if (typeof data === "string") {
      if ((!options2.mask || skipMasking) && options2[kByteLength] !== void 0) {
        dataLength = options2[kByteLength];
      } else {
        data = Buffer.from(data);
        dataLength = data.length;
      }
    } else {
      dataLength = data.length;
      merge2 = options2.mask && options2.readOnly && !skipMasking;
    }
    let payloadLength = dataLength;
    if (dataLength >= 65536) {
      offset += 8;
      payloadLength = 127;
    } else if (dataLength > 125) {
      offset += 2;
      payloadLength = 126;
    }
    const target = Buffer.allocUnsafe(merge2 ? dataLength + offset : offset);
    target[0] = options2.fin ? options2.opcode | 128 : options2.opcode;
    if (options2.rsv1) target[0] |= 64;
    target[1] = payloadLength;
    if (payloadLength === 126) {
      target.writeUInt16BE(dataLength, 2);
    } else if (payloadLength === 127) {
      target[2] = target[3] = 0;
      target.writeUIntBE(dataLength, 4, 6);
    }
    if (!options2.mask) return [target, data];
    target[1] |= 128;
    target[offset - 4] = mask[0];
    target[offset - 3] = mask[1];
    target[offset - 2] = mask[2];
    target[offset - 1] = mask[3];
    if (skipMasking) return [target, data];
    if (merge2) {
      applyMask(data, mask, target, offset, dataLength);
      return [target];
    }
    applyMask(data, mask, data, 0, dataLength);
    return [target, data];
  }
  /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {(String|Buffer)} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */
  close(code, data, mask, cb) {
    let buf;
    if (code === void 0) {
      buf = EMPTY_BUFFER$1;
    } else if (typeof code !== "number" || !isValidStatusCode(code)) {
      throw new TypeError("First argument must be a valid error code number");
    } else if (data === void 0 || !data.length) {
      buf = Buffer.allocUnsafe(2);
      buf.writeUInt16BE(code, 0);
    } else {
      const length = Buffer.byteLength(data);
      if (length > 123) {
        throw new RangeError("The message must not be greater than 123 bytes");
      }
      buf = Buffer.allocUnsafe(2 + length);
      buf.writeUInt16BE(code, 0);
      if (typeof data === "string") {
        buf.write(data, 2);
      } else {
        buf.set(data, 2);
      }
    }
    const options2 = {
      [kByteLength]: buf.length,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 8,
      readOnly: false,
      rsv1: false
    };
    if (this._state !== DEFAULT) {
      this.enqueue([this.dispatch, buf, false, options2, cb]);
    } else {
      this.sendFrame(Sender.frame(buf, options2), cb);
    }
  }
  /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  ping(data, mask, cb) {
    let byteLength;
    let readOnly;
    if (typeof data === "string") {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else if (isBlob$1(data)) {
      byteLength = data.size;
      readOnly = false;
    } else {
      data = toBuffer$1(data);
      byteLength = data.length;
      readOnly = toBuffer$1.readOnly;
    }
    if (byteLength > 125) {
      throw new RangeError("The data size must not be greater than 125 bytes");
    }
    const options2 = {
      [kByteLength]: byteLength,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 9,
      readOnly,
      rsv1: false
    };
    if (isBlob$1(data)) {
      if (this._state !== DEFAULT) {
        this.enqueue([this.getBlobData, data, false, options2, cb]);
      } else {
        this.getBlobData(data, false, options2, cb);
      }
    } else if (this._state !== DEFAULT) {
      this.enqueue([this.dispatch, data, false, options2, cb]);
    } else {
      this.sendFrame(Sender.frame(data, options2), cb);
    }
  }
  /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  pong(data, mask, cb) {
    let byteLength;
    let readOnly;
    if (typeof data === "string") {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else if (isBlob$1(data)) {
      byteLength = data.size;
      readOnly = false;
    } else {
      data = toBuffer$1(data);
      byteLength = data.length;
      readOnly = toBuffer$1.readOnly;
    }
    if (byteLength > 125) {
      throw new RangeError("The data size must not be greater than 125 bytes");
    }
    const options2 = {
      [kByteLength]: byteLength,
      fin: true,
      generateMask: this._generateMask,
      mask,
      maskBuffer: this._maskBuffer,
      opcode: 10,
      readOnly,
      rsv1: false
    };
    if (isBlob$1(data)) {
      if (this._state !== DEFAULT) {
        this.enqueue([this.getBlobData, data, false, options2, cb]);
      } else {
        this.getBlobData(data, false, options2, cb);
      }
    } else if (this._state !== DEFAULT) {
      this.enqueue([this.dispatch, data, false, options2, cb]);
    } else {
      this.sendFrame(Sender.frame(data, options2), cb);
    }
  }
  /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */
  send(data, options2, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate$2.extensionName];
    let opcode = options2.binary ? 2 : 1;
    let rsv1 = options2.compress;
    let byteLength;
    let readOnly;
    if (typeof data === "string") {
      byteLength = Buffer.byteLength(data);
      readOnly = false;
    } else if (isBlob$1(data)) {
      byteLength = data.size;
      readOnly = false;
    } else {
      data = toBuffer$1(data);
      byteLength = data.length;
      readOnly = toBuffer$1.readOnly;
    }
    if (this._firstFragment) {
      this._firstFragment = false;
      if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
        rsv1 = byteLength >= perMessageDeflate._threshold;
      }
      this._compress = rsv1;
    } else {
      rsv1 = false;
      opcode = 0;
    }
    if (options2.fin) this._firstFragment = true;
    const opts = {
      [kByteLength]: byteLength,
      fin: options2.fin,
      generateMask: this._generateMask,
      mask: options2.mask,
      maskBuffer: this._maskBuffer,
      opcode,
      readOnly,
      rsv1
    };
    if (isBlob$1(data)) {
      if (this._state !== DEFAULT) {
        this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
      } else {
        this.getBlobData(data, this._compress, opts, cb);
      }
    } else if (this._state !== DEFAULT) {
      this.enqueue([this.dispatch, data, this._compress, opts, cb]);
    } else {
      this.dispatch(data, this._compress, opts, cb);
    }
  }
  /**
   * Gets the contents of a blob as binary data.
   *
   * @param {Blob} blob The blob
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     the data
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */
  getBlobData(blob, compress, options2, cb) {
    this._bufferedBytes += options2[kByteLength];
    this._state = GET_BLOB_DATA;
    blob.arrayBuffer().then((arrayBuffer) => {
      if (this._socket.destroyed) {
        const err = new Error(
          "The socket was closed while the blob was being read"
        );
        process.nextTick(callCallbacks, this, err, cb);
        return;
      }
      this._bufferedBytes -= options2[kByteLength];
      const data = toBuffer$1(arrayBuffer);
      if (!compress) {
        this._state = DEFAULT;
        this.sendFrame(Sender.frame(data, options2), cb);
        this.dequeue();
      } else {
        this.dispatch(data, compress, options2, cb);
      }
    }).catch((err) => {
      process.nextTick(onError, this, err, cb);
    });
  }
  /**
   * Dispatches a message.
   *
   * @param {(Buffer|String)} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
   *     key
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */
  dispatch(data, compress, options2, cb) {
    if (!compress) {
      this.sendFrame(Sender.frame(data, options2), cb);
      return;
    }
    const perMessageDeflate = this._extensions[PerMessageDeflate$2.extensionName];
    this._bufferedBytes += options2[kByteLength];
    this._state = DEFLATING;
    perMessageDeflate.compress(data, options2.fin, (_, buf) => {
      if (this._socket.destroyed) {
        const err = new Error(
          "The socket was closed while data was being compressed"
        );
        callCallbacks(this, err, cb);
        return;
      }
      this._bufferedBytes -= options2[kByteLength];
      this._state = DEFAULT;
      options2.readOnly = false;
      this.sendFrame(Sender.frame(buf, options2), cb);
      this.dequeue();
    });
  }
  /**
   * Executes queued send operations.
   *
   * @private
   */
  dequeue() {
    while (this._state === DEFAULT && this._queue.length) {
      const params = this._queue.shift();
      this._bufferedBytes -= params[3][kByteLength];
      Reflect.apply(params[0], this, params.slice(1));
    }
  }
  /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */
  enqueue(params) {
    this._bufferedBytes += params[3][kByteLength];
    this._queue.push(params);
  }
  /**
   * Sends a frame.
   *
   * @param {(Buffer | String)[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */
  sendFrame(list, cb) {
    if (list.length === 2) {
      this._socket.cork();
      this._socket.write(list[0]);
      this._socket.write(list[1], cb);
      this._socket.uncork();
    } else {
      this._socket.write(list[0], cb);
    }
  }
};
var sender = Sender$1;
function callCallbacks(sender2, err, cb) {
  if (typeof cb === "function") cb(err);
  for (let i = 0; i < sender2._queue.length; i++) {
    const params = sender2._queue[i];
    const callback2 = params[params.length - 1];
    if (typeof callback2 === "function") callback2(err);
  }
}
function onError(sender2, err, cb) {
  callCallbacks(sender2, err, cb);
  sender2.onerror(err);
}
var { kForOnEventAttribute: kForOnEventAttribute$1, kListener: kListener$1 } = constants;
var kCode = Symbol("kCode");
var kData = Symbol("kData");
var kError = Symbol("kError");
var kMessage = Symbol("kMessage");
var kReason = Symbol("kReason");
var kTarget = Symbol("kTarget");
var kType = Symbol("kType");
var kWasClean = Symbol("kWasClean");
var Event$1 = class Event2 {
  /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @throws {TypeError} If the `type` argument is not specified
   */
  constructor(type) {
    this[kTarget] = null;
    this[kType] = type;
  }
  /**
   * @type {*}
   */
  get target() {
    return this[kTarget];
  }
  /**
   * @type {String}
   */
  get type() {
    return this[kType];
  }
};
Object.defineProperty(Event$1.prototype, "target", { enumerable: true });
Object.defineProperty(Event$1.prototype, "type", { enumerable: true });
var CloseEvent = class extends Event$1 {
  /**
   * Create a new `CloseEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {Number} [options.code=0] The status code explaining why the
   *     connection was closed
   * @param {String} [options.reason=''] A human-readable string explaining why
   *     the connection was closed
   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
   *     connection was cleanly closed
   */
  constructor(type, options2 = {}) {
    super(type);
    this[kCode] = options2.code === void 0 ? 0 : options2.code;
    this[kReason] = options2.reason === void 0 ? "" : options2.reason;
    this[kWasClean] = options2.wasClean === void 0 ? false : options2.wasClean;
  }
  /**
   * @type {Number}
   */
  get code() {
    return this[kCode];
  }
  /**
   * @type {String}
   */
  get reason() {
    return this[kReason];
  }
  /**
   * @type {Boolean}
   */
  get wasClean() {
    return this[kWasClean];
  }
};
Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
var ErrorEvent = class extends Event$1 {
  /**
   * Create a new `ErrorEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.error=null] The error that generated this event
   * @param {String} [options.message=''] The error message
   */
  constructor(type, options2 = {}) {
    super(type);
    this[kError] = options2.error === void 0 ? null : options2.error;
    this[kMessage] = options2.message === void 0 ? "" : options2.message;
  }
  /**
   * @type {*}
   */
  get error() {
    return this[kError];
  }
  /**
   * @type {String}
   */
  get message() {
    return this[kMessage];
  }
};
Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
var MessageEvent = class extends Event$1 {
  /**
   * Create a new `MessageEvent`.
   *
   * @param {String} type The name of the event
   * @param {Object} [options] A dictionary object that allows for setting
   *     attributes via object members of the same name
   * @param {*} [options.data=null] The message content
   */
  constructor(type, options2 = {}) {
    super(type);
    this[kData] = options2.data === void 0 ? null : options2.data;
  }
  /**
   * @type {*}
   */
  get data() {
    return this[kData];
  }
};
Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
var EventTarget = {
  /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {(Function|Object)} handler The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */
  addEventListener(type, handler, options2 = {}) {
    for (const listener2 of this.listeners(type)) {
      if (!options2[kForOnEventAttribute$1] && listener2[kListener$1] === handler && !listener2[kForOnEventAttribute$1]) {
        return;
      }
    }
    let wrapper;
    if (type === "message") {
      wrapper = function onMessage(data, isBinary) {
        const event = new MessageEvent("message", {
          data: isBinary ? data : data.toString()
        });
        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === "close") {
      wrapper = function onClose(code, message) {
        const event = new CloseEvent("close", {
          code,
          reason: message.toString(),
          wasClean: this._closeFrameReceived && this._closeFrameSent
        });
        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === "error") {
      wrapper = function onError2(error) {
        const event = new ErrorEvent("error", {
          error,
          message: error.message
        });
        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else if (type === "open") {
      wrapper = function onOpen() {
        const event = new Event$1("open");
        event[kTarget] = this;
        callListener(handler, this, event);
      };
    } else {
      return;
    }
    wrapper[kForOnEventAttribute$1] = !!options2[kForOnEventAttribute$1];
    wrapper[kListener$1] = handler;
    if (options2.once) {
      this.once(type, wrapper);
    } else {
      this.on(type, wrapper);
    }
  },
  /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {(Function|Object)} handler The listener to remove
   * @public
   */
  removeEventListener(type, handler) {
    for (const listener2 of this.listeners(type)) {
      if (listener2[kListener$1] === handler && !listener2[kForOnEventAttribute$1]) {
        this.removeListener(type, listener2);
        break;
      }
    }
  }
};
var eventTarget = {
  EventTarget
};
function callListener(listener2, thisArg, event) {
  if (typeof listener2 === "object" && listener2.handleEvent) {
    listener2.handleEvent.call(listener2, event);
  } else {
    listener2.call(thisArg, event);
  }
}
var { tokenChars: tokenChars$1 } = validationExports;
function push(dest, name, elem) {
  if (dest[name] === void 0) dest[name] = [elem];
  else dest[name].push(elem);
}
function parse$3(header) {
  const offers = /* @__PURE__ */ Object.create(null);
  let params = /* @__PURE__ */ Object.create(null);
  let mustUnescape = false;
  let isEscaping = false;
  let inQuotes = false;
  let extensionName;
  let paramName;
  let start = -1;
  let code = -1;
  let end = -1;
  let i = 0;
  for (; i < header.length; i++) {
    code = header.charCodeAt(i);
    if (extensionName === void 0) {
      if (end === -1 && tokenChars$1[code] === 1) {
        if (start === -1) start = i;
      } else if (i !== 0 && (code === 32 || code === 9)) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 59 || code === 44) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (end === -1) end = i;
        const name = header.slice(start, end);
        if (code === 44) {
          push(offers, name, params);
          params = /* @__PURE__ */ Object.create(null);
        } else {
          extensionName = name;
        }
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else if (paramName === void 0) {
      if (end === -1 && tokenChars$1[code] === 1) {
        if (start === -1) start = i;
      } else if (code === 32 || code === 9) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 59 || code === 44) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (end === -1) end = i;
        push(params, header.slice(start, end), true);
        if (code === 44) {
          push(offers, extensionName, params);
          params = /* @__PURE__ */ Object.create(null);
          extensionName = void 0;
        }
        start = end = -1;
      } else if (code === 61 && start !== -1 && end === -1) {
        paramName = header.slice(start, i);
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else {
      if (isEscaping) {
        if (tokenChars$1[code] !== 1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (start === -1) start = i;
        else if (!mustUnescape) mustUnescape = true;
        isEscaping = false;
      } else if (inQuotes) {
        if (tokenChars$1[code] === 1) {
          if (start === -1) start = i;
        } else if (code === 34 && start !== -1) {
          inQuotes = false;
          end = i;
        } else if (code === 92) {
          isEscaping = true;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
        inQuotes = true;
      } else if (end === -1 && tokenChars$1[code] === 1) {
        if (start === -1) start = i;
      } else if (start !== -1 && (code === 32 || code === 9)) {
        if (end === -1) end = i;
      } else if (code === 59 || code === 44) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (end === -1) end = i;
        let value2 = header.slice(start, end);
        if (mustUnescape) {
          value2 = value2.replace(/\\/g, "");
          mustUnescape = false;
        }
        push(params, paramName, value2);
        if (code === 44) {
          push(offers, extensionName, params);
          params = /* @__PURE__ */ Object.create(null);
          extensionName = void 0;
        }
        paramName = void 0;
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    }
  }
  if (start === -1 || inQuotes || code === 32 || code === 9) {
    throw new SyntaxError("Unexpected end of input");
  }
  if (end === -1) end = i;
  const token = header.slice(start, end);
  if (extensionName === void 0) {
    push(offers, token, params);
  } else {
    if (paramName === void 0) {
      push(params, token, true);
    } else if (mustUnescape) {
      push(params, paramName, token.replace(/\\/g, ""));
    } else {
      push(params, paramName, token);
    }
    push(offers, extensionName, params);
  }
  return offers;
}
function format$1(extensions2) {
  return Object.keys(extensions2).map((extension2) => {
    let configurations = extensions2[extension2];
    if (!Array.isArray(configurations)) configurations = [configurations];
    return configurations.map((params) => {
      return [extension2].concat(
        Object.keys(params).map((k) => {
          let values = params[k];
          if (!Array.isArray(values)) values = [values];
          return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
        })
      ).join("; ");
    }).join(", ");
  }).join(", ");
}
var extension$1 = { format: format$1, parse: parse$3 };
var EventEmitter$1 = import_events.default;
var https$2 = import_https.default;
var http$3 = import_http.default;
var net = import_net.default;
var tls = import_tls.default;
var { randomBytes, createHash: createHash$1 } = import_crypto.default;
var { URL: URL$2 } = import_url.default;
var PerMessageDeflate$1 = permessageDeflate;
var Receiver2 = receiver;
var Sender2 = sender;
var { isBlob } = validationExports;
var {
  BINARY_TYPES,
  EMPTY_BUFFER,
  GUID: GUID$1,
  kForOnEventAttribute,
  kListener,
  kStatusCode,
  kWebSocket: kWebSocket$1,
  NOOP: NOOP$1
} = constants;
var {
  EventTarget: { addEventListener, removeEventListener }
} = eventTarget;
var { format, parse: parse$2 } = extension$1;
var { toBuffer } = bufferUtilExports;
var closeTimeout = 30 * 1e3;
var kAborted = Symbol("kAborted");
var protocolVersions = [8, 13];
var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
var WebSocket$1 = class WebSocket extends EventEmitter$1 {
  /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */
  constructor(address, protocols, options2) {
    super();
    this._binaryType = BINARY_TYPES[0];
    this._closeCode = 1006;
    this._closeFrameReceived = false;
    this._closeFrameSent = false;
    this._closeMessage = EMPTY_BUFFER;
    this._closeTimer = null;
    this._errorEmitted = false;
    this._extensions = {};
    this._paused = false;
    this._protocol = "";
    this._readyState = WebSocket.CONNECTING;
    this._receiver = null;
    this._sender = null;
    this._socket = null;
    if (address !== null) {
      this._bufferedAmount = 0;
      this._isServer = false;
      this._redirects = 0;
      if (protocols === void 0) {
        protocols = [];
      } else if (!Array.isArray(protocols)) {
        if (typeof protocols === "object" && protocols !== null) {
          options2 = protocols;
          protocols = [];
        } else {
          protocols = [protocols];
        }
      }
      initAsClient(this, address, protocols, options2);
    } else {
      this._autoPong = options2.autoPong;
      this._isServer = true;
    }
  }
  /**
   * For historical reasons, the custom "nodebuffer" type is used by the default
   * instead of "blob".
   *
   * @type {String}
   */
  get binaryType() {
    return this._binaryType;
  }
  set binaryType(type) {
    if (!BINARY_TYPES.includes(type)) return;
    this._binaryType = type;
    if (this._receiver) this._receiver._binaryType = type;
  }
  /**
   * @type {Number}
   */
  get bufferedAmount() {
    if (!this._socket) return this._bufferedAmount;
    return this._socket._writableState.length + this._sender._bufferedBytes;
  }
  /**
   * @type {String}
   */
  get extensions() {
    return Object.keys(this._extensions).join();
  }
  /**
   * @type {Boolean}
   */
  get isPaused() {
    return this._paused;
  }
  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onclose() {
    return null;
  }
  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onerror() {
    return null;
  }
  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onopen() {
    return null;
  }
  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onmessage() {
    return null;
  }
  /**
   * @type {String}
   */
  get protocol() {
    return this._protocol;
  }
  /**
   * @type {Number}
   */
  get readyState() {
    return this._readyState;
  }
  /**
   * @type {String}
   */
  get url() {
    return this._url;
  }
  /**
   * Set up the socket and the internal resources.
   *
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Object} options Options object
   * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {Function} [options.generateMask] The function used to generate the
   *     masking key
   * @param {Number} [options.maxPayload=0] The maximum allowed message size
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @private
   */
  setSocket(socket, head, options2) {
    const receiver2 = new Receiver2({
      allowSynchronousEvents: options2.allowSynchronousEvents,
      binaryType: this.binaryType,
      extensions: this._extensions,
      isServer: this._isServer,
      maxPayload: options2.maxPayload,
      skipUTF8Validation: options2.skipUTF8Validation
    });
    const sender2 = new Sender2(socket, this._extensions, options2.generateMask);
    this._receiver = receiver2;
    this._sender = sender2;
    this._socket = socket;
    receiver2[kWebSocket$1] = this;
    sender2[kWebSocket$1] = this;
    socket[kWebSocket$1] = this;
    receiver2.on("conclude", receiverOnConclude);
    receiver2.on("drain", receiverOnDrain);
    receiver2.on("error", receiverOnError);
    receiver2.on("message", receiverOnMessage);
    receiver2.on("ping", receiverOnPing);
    receiver2.on("pong", receiverOnPong);
    sender2.onerror = senderOnError;
    if (socket.setTimeout) socket.setTimeout(0);
    if (socket.setNoDelay) socket.setNoDelay();
    if (head.length > 0) socket.unshift(head);
    socket.on("close", socketOnClose);
    socket.on("data", socketOnData);
    socket.on("end", socketOnEnd);
    socket.on("error", socketOnError$1);
    this._readyState = WebSocket.OPEN;
    this.emit("open");
  }
  /**
   * Emit the `'close'` event.
   *
   * @private
   */
  emitClose() {
    if (!this._socket) {
      this._readyState = WebSocket.CLOSED;
      this.emit("close", this._closeCode, this._closeMessage);
      return;
    }
    if (this._extensions[PerMessageDeflate$1.extensionName]) {
      this._extensions[PerMessageDeflate$1.extensionName].cleanup();
    }
    this._receiver.removeAllListeners();
    this._readyState = WebSocket.CLOSED;
    this.emit("close", this._closeCode, this._closeMessage);
  }
  /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {(String|Buffer)} [data] The reason why the connection is
   *     closing
   * @public
   */
  close(code, data) {
    if (this.readyState === WebSocket.CLOSED) return;
    if (this.readyState === WebSocket.CONNECTING) {
      const msg = "WebSocket was closed before the connection was established";
      abortHandshake$1(this, this._req, msg);
      return;
    }
    if (this.readyState === WebSocket.CLOSING) {
      if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
        this._socket.end();
      }
      return;
    }
    this._readyState = WebSocket.CLOSING;
    this._sender.close(code, data, !this._isServer, (err) => {
      if (err) return;
      this._closeFrameSent = true;
      if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
        this._socket.end();
      }
    });
    setCloseTimer(this);
  }
  /**
   * Pause the socket.
   *
   * @public
   */
  pause() {
    if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
      return;
    }
    this._paused = true;
    this._socket.pause();
  }
  /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */
  ping(data, mask, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    }
    if (typeof data === "function") {
      cb = data;
      data = mask = void 0;
    } else if (typeof mask === "function") {
      cb = mask;
      mask = void 0;
    }
    if (typeof data === "number") data = data.toString();
    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }
    if (mask === void 0) mask = !this._isServer;
    this._sender.ping(data || EMPTY_BUFFER, mask, cb);
  }
  /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */
  pong(data, mask, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    }
    if (typeof data === "function") {
      cb = data;
      data = mask = void 0;
    } else if (typeof mask === "function") {
      cb = mask;
      mask = void 0;
    }
    if (typeof data === "number") data = data.toString();
    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }
    if (mask === void 0) mask = !this._isServer;
    this._sender.pong(data || EMPTY_BUFFER, mask, cb);
  }
  /**
   * Resume the socket.
   *
   * @public
   */
  resume() {
    if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
      return;
    }
    this._paused = false;
    if (!this._receiver._writableState.needDrain) this._socket.resume();
  }
  /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */
  send(data, options2, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    }
    if (typeof options2 === "function") {
      cb = options2;
      options2 = {};
    }
    if (typeof data === "number") data = data.toString();
    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }
    const opts = {
      binary: typeof data !== "string",
      mask: !this._isServer,
      compress: true,
      fin: true,
      ...options2
    };
    if (!this._extensions[PerMessageDeflate$1.extensionName]) {
      opts.compress = false;
    }
    this._sender.send(data || EMPTY_BUFFER, opts, cb);
  }
  /**
   * Forcibly close the connection.
   *
   * @public
   */
  terminate() {
    if (this.readyState === WebSocket.CLOSED) return;
    if (this.readyState === WebSocket.CONNECTING) {
      const msg = "WebSocket was closed before the connection was established";
      abortHandshake$1(this, this._req, msg);
      return;
    }
    if (this._socket) {
      this._readyState = WebSocket.CLOSING;
      this._socket.destroy();
    }
  }
};
Object.defineProperty(WebSocket$1, "CONNECTING", {
  enumerable: true,
  value: readyStates.indexOf("CONNECTING")
});
Object.defineProperty(WebSocket$1.prototype, "CONNECTING", {
  enumerable: true,
  value: readyStates.indexOf("CONNECTING")
});
Object.defineProperty(WebSocket$1, "OPEN", {
  enumerable: true,
  value: readyStates.indexOf("OPEN")
});
Object.defineProperty(WebSocket$1.prototype, "OPEN", {
  enumerable: true,
  value: readyStates.indexOf("OPEN")
});
Object.defineProperty(WebSocket$1, "CLOSING", {
  enumerable: true,
  value: readyStates.indexOf("CLOSING")
});
Object.defineProperty(WebSocket$1.prototype, "CLOSING", {
  enumerable: true,
  value: readyStates.indexOf("CLOSING")
});
Object.defineProperty(WebSocket$1, "CLOSED", {
  enumerable: true,
  value: readyStates.indexOf("CLOSED")
});
Object.defineProperty(WebSocket$1.prototype, "CLOSED", {
  enumerable: true,
  value: readyStates.indexOf("CLOSED")
});
[
  "binaryType",
  "bufferedAmount",
  "extensions",
  "isPaused",
  "protocol",
  "readyState",
  "url"
].forEach((property) => {
  Object.defineProperty(WebSocket$1.prototype, property, { enumerable: true });
});
["open", "error", "close", "message"].forEach((method) => {
  Object.defineProperty(WebSocket$1.prototype, `on${method}`, {
    enumerable: true,
    get() {
      for (const listener2 of this.listeners(method)) {
        if (listener2[kForOnEventAttribute]) return listener2[kListener];
      }
      return null;
    },
    set(handler) {
      for (const listener2 of this.listeners(method)) {
        if (listener2[kForOnEventAttribute]) {
          this.removeListener(method, listener2);
          break;
        }
      }
      if (typeof handler !== "function") return;
      this.addEventListener(method, handler, {
        [kForOnEventAttribute]: true
      });
    }
  });
});
WebSocket$1.prototype.addEventListener = addEventListener;
WebSocket$1.prototype.removeEventListener = removeEventListener;
var websocket = WebSocket$1;
function initAsClient(websocket2, address, protocols, options2) {
  const opts = {
    allowSynchronousEvents: true,
    autoPong: true,
    protocolVersion: protocolVersions[1],
    maxPayload: 100 * 1024 * 1024,
    skipUTF8Validation: false,
    perMessageDeflate: true,
    followRedirects: false,
    maxRedirects: 10,
    ...options2,
    socketPath: void 0,
    hostname: void 0,
    protocol: void 0,
    timeout: void 0,
    method: "GET",
    host: void 0,
    path: void 0,
    port: void 0
  };
  websocket2._autoPong = opts.autoPong;
  if (!protocolVersions.includes(opts.protocolVersion)) {
    throw new RangeError(
      `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
    );
  }
  let parsedUrl;
  if (address instanceof URL$2) {
    parsedUrl = address;
  } else {
    try {
      parsedUrl = new URL$2(address);
    } catch (e) {
      throw new SyntaxError(`Invalid URL: ${address}`);
    }
  }
  if (parsedUrl.protocol === "http:") {
    parsedUrl.protocol = "ws:";
  } else if (parsedUrl.protocol === "https:") {
    parsedUrl.protocol = "wss:";
  }
  websocket2._url = parsedUrl.href;
  const isSecure = parsedUrl.protocol === "wss:";
  const isIpcUrl = parsedUrl.protocol === "ws+unix:";
  let invalidUrlMessage;
  if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
    invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https", or "ws+unix:"`;
  } else if (isIpcUrl && !parsedUrl.pathname) {
    invalidUrlMessage = "The URL's pathname is empty";
  } else if (parsedUrl.hash) {
    invalidUrlMessage = "The URL contains a fragment identifier";
  }
  if (invalidUrlMessage) {
    const err = new SyntaxError(invalidUrlMessage);
    if (websocket2._redirects === 0) {
      throw err;
    } else {
      emitErrorAndClose(websocket2, err);
      return;
    }
  }
  const defaultPort = isSecure ? 443 : 80;
  const key = randomBytes(16).toString("base64");
  const request = isSecure ? https$2.request : http$3.request;
  const protocolSet = /* @__PURE__ */ new Set();
  let perMessageDeflate;
  opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
  opts.defaultPort = opts.defaultPort || defaultPort;
  opts.port = parsedUrl.port || defaultPort;
  opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
  opts.headers = {
    ...opts.headers,
    "Sec-WebSocket-Version": opts.protocolVersion,
    "Sec-WebSocket-Key": key,
    Connection: "Upgrade",
    Upgrade: "websocket"
  };
  opts.path = parsedUrl.pathname + parsedUrl.search;
  opts.timeout = opts.handshakeTimeout;
  if (opts.perMessageDeflate) {
    perMessageDeflate = new PerMessageDeflate$1(
      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
      false,
      opts.maxPayload
    );
    opts.headers["Sec-WebSocket-Extensions"] = format({
      [PerMessageDeflate$1.extensionName]: perMessageDeflate.offer()
    });
  }
  if (protocols.length) {
    for (const protocol of protocols) {
      if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
        throw new SyntaxError(
          "An invalid or duplicated subprotocol was specified"
        );
      }
      protocolSet.add(protocol);
    }
    opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
  }
  if (opts.origin) {
    if (opts.protocolVersion < 13) {
      opts.headers["Sec-WebSocket-Origin"] = opts.origin;
    } else {
      opts.headers.Origin = opts.origin;
    }
  }
  if (parsedUrl.username || parsedUrl.password) {
    opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
  }
  if (isIpcUrl) {
    const parts = opts.path.split(":");
    opts.socketPath = parts[0];
    opts.path = parts[1];
  }
  let req2;
  if (opts.followRedirects) {
    if (websocket2._redirects === 0) {
      websocket2._originalIpc = isIpcUrl;
      websocket2._originalSecure = isSecure;
      websocket2._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
      const headers = options2 && options2.headers;
      options2 = { ...options2, headers: {} };
      if (headers) {
        for (const [key2, value2] of Object.entries(headers)) {
          options2.headers[key2.toLowerCase()] = value2;
        }
      }
    } else if (websocket2.listenerCount("redirect") === 0) {
      const isSameHost = isIpcUrl ? websocket2._originalIpc ? opts.socketPath === websocket2._originalHostOrSocketPath : false : websocket2._originalIpc ? false : parsedUrl.host === websocket2._originalHostOrSocketPath;
      if (!isSameHost || websocket2._originalSecure && !isSecure) {
        delete opts.headers.authorization;
        delete opts.headers.cookie;
        if (!isSameHost) delete opts.headers.host;
        opts.auth = void 0;
      }
    }
    if (opts.auth && !options2.headers.authorization) {
      options2.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
    }
    req2 = websocket2._req = request(opts);
    if (websocket2._redirects) {
      websocket2.emit("redirect", websocket2.url, req2);
    }
  } else {
    req2 = websocket2._req = request(opts);
  }
  if (opts.timeout) {
    req2.on("timeout", () => {
      abortHandshake$1(websocket2, req2, "Opening handshake has timed out");
    });
  }
  req2.on("error", (err) => {
    if (req2 === null || req2[kAborted]) return;
    req2 = websocket2._req = null;
    emitErrorAndClose(websocket2, err);
  });
  req2.on("response", (res) => {
    const location2 = res.headers.location;
    const statusCode = res.statusCode;
    if (location2 && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
      if (++websocket2._redirects > opts.maxRedirects) {
        abortHandshake$1(websocket2, req2, "Maximum redirects exceeded");
        return;
      }
      req2.abort();
      let addr;
      try {
        addr = new URL$2(location2, address);
      } catch (e) {
        const err = new SyntaxError(`Invalid URL: ${location2}`);
        emitErrorAndClose(websocket2, err);
        return;
      }
      initAsClient(websocket2, addr, protocols, options2);
    } else if (!websocket2.emit("unexpected-response", req2, res)) {
      abortHandshake$1(
        websocket2,
        req2,
        `Unexpected server response: ${res.statusCode}`
      );
    }
  });
  req2.on("upgrade", (res, socket, head) => {
    websocket2.emit("upgrade", res);
    if (websocket2.readyState !== WebSocket$1.CONNECTING) return;
    req2 = websocket2._req = null;
    const upgrade = res.headers.upgrade;
    if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
      abortHandshake$1(websocket2, socket, "Invalid Upgrade header");
      return;
    }
    const digest = createHash$1("sha1").update(key + GUID$1).digest("base64");
    if (res.headers["sec-websocket-accept"] !== digest) {
      abortHandshake$1(websocket2, socket, "Invalid Sec-WebSocket-Accept header");
      return;
    }
    const serverProt = res.headers["sec-websocket-protocol"];
    let protError;
    if (serverProt !== void 0) {
      if (!protocolSet.size) {
        protError = "Server sent a subprotocol but none was requested";
      } else if (!protocolSet.has(serverProt)) {
        protError = "Server sent an invalid subprotocol";
      }
    } else if (protocolSet.size) {
      protError = "Server sent no subprotocol";
    }
    if (protError) {
      abortHandshake$1(websocket2, socket, protError);
      return;
    }
    if (serverProt) websocket2._protocol = serverProt;
    const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
    if (secWebSocketExtensions !== void 0) {
      if (!perMessageDeflate) {
        const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
        abortHandshake$1(websocket2, socket, message);
        return;
      }
      let extensions2;
      try {
        extensions2 = parse$2(secWebSocketExtensions);
      } catch (err) {
        const message = "Invalid Sec-WebSocket-Extensions header";
        abortHandshake$1(websocket2, socket, message);
        return;
      }
      const extensionNames = Object.keys(extensions2);
      if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate$1.extensionName) {
        const message = "Server indicated an extension that was not requested";
        abortHandshake$1(websocket2, socket, message);
        return;
      }
      try {
        perMessageDeflate.accept(extensions2[PerMessageDeflate$1.extensionName]);
      } catch (err) {
        const message = "Invalid Sec-WebSocket-Extensions header";
        abortHandshake$1(websocket2, socket, message);
        return;
      }
      websocket2._extensions[PerMessageDeflate$1.extensionName] = perMessageDeflate;
    }
    websocket2.setSocket(socket, head, {
      allowSynchronousEvents: opts.allowSynchronousEvents,
      generateMask: opts.generateMask,
      maxPayload: opts.maxPayload,
      skipUTF8Validation: opts.skipUTF8Validation
    });
  });
  if (opts.finishRequest) {
    opts.finishRequest(req2, websocket2);
  } else {
    req2.end();
  }
}
function emitErrorAndClose(websocket2, err) {
  websocket2._readyState = WebSocket$1.CLOSING;
  websocket2._errorEmitted = true;
  websocket2.emit("error", err);
  websocket2.emitClose();
}
function netConnect(options2) {
  options2.path = options2.socketPath;
  return net.connect(options2);
}
function tlsConnect(options2) {
  options2.path = void 0;
  if (!options2.servername && options2.servername !== "") {
    options2.servername = net.isIP(options2.host) ? "" : options2.host;
  }
  return tls.connect(options2);
}
function abortHandshake$1(websocket2, stream3, message) {
  websocket2._readyState = WebSocket$1.CLOSING;
  const err = new Error(message);
  Error.captureStackTrace(err, abortHandshake$1);
  if (stream3.setHeader) {
    stream3[kAborted] = true;
    stream3.abort();
    if (stream3.socket && !stream3.socket.destroyed) {
      stream3.socket.destroy();
    }
    process.nextTick(emitErrorAndClose, websocket2, err);
  } else {
    stream3.destroy(err);
    stream3.once("error", websocket2.emit.bind(websocket2, "error"));
    stream3.once("close", websocket2.emitClose.bind(websocket2));
  }
}
function sendAfterClose(websocket2, data, cb) {
  if (data) {
    const length = isBlob(data) ? data.size : toBuffer(data).length;
    if (websocket2._socket) websocket2._sender._bufferedBytes += length;
    else websocket2._bufferedAmount += length;
  }
  if (cb) {
    const err = new Error(
      `WebSocket is not open: readyState ${websocket2.readyState} (${readyStates[websocket2.readyState]})`
    );
    process.nextTick(cb, err);
  }
}
function receiverOnConclude(code, reason) {
  const websocket2 = this[kWebSocket$1];
  websocket2._closeFrameReceived = true;
  websocket2._closeMessage = reason;
  websocket2._closeCode = code;
  if (websocket2._socket[kWebSocket$1] === void 0) return;
  websocket2._socket.removeListener("data", socketOnData);
  process.nextTick(resume, websocket2._socket);
  if (code === 1005) websocket2.close();
  else websocket2.close(code, reason);
}
function receiverOnDrain() {
  const websocket2 = this[kWebSocket$1];
  if (!websocket2.isPaused) websocket2._socket.resume();
}
function receiverOnError(err) {
  const websocket2 = this[kWebSocket$1];
  if (websocket2._socket[kWebSocket$1] !== void 0) {
    websocket2._socket.removeListener("data", socketOnData);
    process.nextTick(resume, websocket2._socket);
    websocket2.close(err[kStatusCode]);
  }
  if (!websocket2._errorEmitted) {
    websocket2._errorEmitted = true;
    websocket2.emit("error", err);
  }
}
function receiverOnFinish() {
  this[kWebSocket$1].emitClose();
}
function receiverOnMessage(data, isBinary) {
  this[kWebSocket$1].emit("message", data, isBinary);
}
function receiverOnPing(data) {
  const websocket2 = this[kWebSocket$1];
  if (websocket2._autoPong) websocket2.pong(data, !this._isServer, NOOP$1);
  websocket2.emit("ping", data);
}
function receiverOnPong(data) {
  this[kWebSocket$1].emit("pong", data);
}
function resume(stream3) {
  stream3.resume();
}
function senderOnError(err) {
  const websocket2 = this[kWebSocket$1];
  if (websocket2.readyState === WebSocket$1.CLOSED) return;
  if (websocket2.readyState === WebSocket$1.OPEN) {
    websocket2._readyState = WebSocket$1.CLOSING;
    setCloseTimer(websocket2);
  }
  this._socket.end();
  if (!websocket2._errorEmitted) {
    websocket2._errorEmitted = true;
    websocket2.emit("error", err);
  }
}
function setCloseTimer(websocket2) {
  websocket2._closeTimer = setTimeout(
    websocket2._socket.destroy.bind(websocket2._socket),
    closeTimeout
  );
}
function socketOnClose() {
  const websocket2 = this[kWebSocket$1];
  this.removeListener("close", socketOnClose);
  this.removeListener("data", socketOnData);
  this.removeListener("end", socketOnEnd);
  websocket2._readyState = WebSocket$1.CLOSING;
  let chunk;
  if (!this._readableState.endEmitted && !websocket2._closeFrameReceived && !websocket2._receiver._writableState.errorEmitted && (chunk = websocket2._socket.read()) !== null) {
    websocket2._receiver.write(chunk);
  }
  websocket2._receiver.end();
  this[kWebSocket$1] = void 0;
  clearTimeout(websocket2._closeTimer);
  if (websocket2._receiver._writableState.finished || websocket2._receiver._writableState.errorEmitted) {
    websocket2.emitClose();
  } else {
    websocket2._receiver.on("error", receiverOnFinish);
    websocket2._receiver.on("finish", receiverOnFinish);
  }
}
function socketOnData(chunk) {
  if (!this[kWebSocket$1]._receiver.write(chunk)) {
    this.pause();
  }
}
function socketOnEnd() {
  const websocket2 = this[kWebSocket$1];
  websocket2._readyState = WebSocket$1.CLOSING;
  websocket2._receiver.end();
  this.end();
}
function socketOnError$1() {
  const websocket2 = this[kWebSocket$1];
  this.removeListener("error", socketOnError$1);
  this.on("error", NOOP$1);
  if (websocket2) {
    websocket2._readyState = WebSocket$1.CLOSING;
    this.destroy();
  }
}
var { tokenChars } = validationExports;
function parse$1(header) {
  const protocols = /* @__PURE__ */ new Set();
  let start = -1;
  let end = -1;
  let i = 0;
  for (i; i < header.length; i++) {
    const code = header.charCodeAt(i);
    if (end === -1 && tokenChars[code] === 1) {
      if (start === -1) start = i;
    } else if (i !== 0 && (code === 32 || code === 9)) {
      if (end === -1 && start !== -1) end = i;
    } else if (code === 44) {
      if (start === -1) {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
      if (end === -1) end = i;
      const protocol2 = header.slice(start, end);
      if (protocols.has(protocol2)) {
        throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
      }
      protocols.add(protocol2);
      start = end = -1;
    } else {
      throw new SyntaxError(`Unexpected character at index ${i}`);
    }
  }
  if (start === -1 || end !== -1) {
    throw new SyntaxError("Unexpected end of input");
  }
  const protocol = header.slice(start, i);
  if (protocols.has(protocol)) {
    throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
  }
  protocols.add(protocol);
  return protocols;
}
var subprotocol$1 = { parse: parse$1 };
var EventEmitter = import_events.default;
var http$2 = import_http.default;
var { createHash } = import_crypto.default;
var extension = extension$1;
var PerMessageDeflate2 = permessageDeflate;
var subprotocol = subprotocol$1;
var WebSocket2 = websocket;
var { GUID, kWebSocket } = constants;
var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
var RUNNING = 0;
var CLOSING = 1;
var CLOSED = 2;
var WebSocketServer = class extends EventEmitter {
  /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
   *     multiple times in the same tick
   * @param {Boolean} [options.autoPong=true] Specifies whether or not to
   *     automatically send a pong in response to a ping
   * @param {Number} [options.backlog=511] The maximum length of the queue of
   *     pending connections
   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
   *     track clients
   * @param {Function} [options.handleProtocols] A hook to handle protocols
   * @param {String} [options.host] The hostname where to bind the server
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Boolean} [options.noServer=false] Enable no server mode
   * @param {String} [options.path] Accept only connections matching this path
   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.port] The port where to bind the server
   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
   *     server to use
   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
   *     not to skip UTF-8 validation for text and close messages
   * @param {Function} [options.verifyClient] A hook to reject connections
   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
   *     class to use. It must be the `WebSocket` class or class that extends it
   * @param {Function} [callback] A listener for the `listening` event
   */
  constructor(options2, callback2) {
    super();
    options2 = {
      allowSynchronousEvents: true,
      autoPong: true,
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: false,
      handleProtocols: null,
      clientTracking: true,
      verifyClient: null,
      noServer: false,
      backlog: null,
      // use default (511 as implemented in net.js)
      server: null,
      host: null,
      path: null,
      port: null,
      WebSocket: WebSocket2,
      ...options2
    };
    if (options2.port == null && !options2.server && !options2.noServer || options2.port != null && (options2.server || options2.noServer) || options2.server && options2.noServer) {
      throw new TypeError(
        'One and only one of the "port", "server", or "noServer" options must be specified'
      );
    }
    if (options2.port != null) {
      this._server = http$2.createServer((req2, res) => {
        const body = http$2.STATUS_CODES[426];
        res.writeHead(426, {
          "Content-Length": body.length,
          "Content-Type": "text/plain"
        });
        res.end(body);
      });
      this._server.listen(
        options2.port,
        options2.host,
        options2.backlog,
        callback2
      );
    } else if (options2.server) {
      this._server = options2.server;
    }
    if (this._server) {
      const emitConnection = this.emit.bind(this, "connection");
      this._removeListeners = addListeners(this._server, {
        listening: this.emit.bind(this, "listening"),
        error: this.emit.bind(this, "error"),
        upgrade: (req2, socket, head) => {
          this.handleUpgrade(req2, socket, head, emitConnection);
        }
      });
    }
    if (options2.perMessageDeflate === true) options2.perMessageDeflate = {};
    if (options2.clientTracking) {
      this.clients = /* @__PURE__ */ new Set();
      this._shouldEmitClose = false;
    }
    this.options = options2;
    this._state = RUNNING;
  }
  /**
   * Returns the bound address, the address family name, and port of the server
   * as reported by the operating system if listening on an IP socket.
   * If the server is listening on a pipe or UNIX domain socket, the name is
   * returned as a string.
   *
   * @return {(Object|String|null)} The address of the server
   * @public
   */
  address() {
    if (this.options.noServer) {
      throw new Error('The server is operating in "noServer" mode');
    }
    if (!this._server) return null;
    return this._server.address();
  }
  /**
   * Stop the server from accepting new connections and emit the `'close'` event
   * when all existing connections are closed.
   *
   * @param {Function} [cb] A one-time listener for the `'close'` event
   * @public
   */
  close(cb) {
    if (this._state === CLOSED) {
      if (cb) {
        this.once("close", () => {
          cb(new Error("The server is not running"));
        });
      }
      process.nextTick(emitClose, this);
      return;
    }
    if (cb) this.once("close", cb);
    if (this._state === CLOSING) return;
    this._state = CLOSING;
    if (this.options.noServer || this.options.server) {
      if (this._server) {
        this._removeListeners();
        this._removeListeners = this._server = null;
      }
      if (this.clients) {
        if (!this.clients.size) {
          process.nextTick(emitClose, this);
        } else {
          this._shouldEmitClose = true;
        }
      } else {
        process.nextTick(emitClose, this);
      }
    } else {
      const server = this._server;
      this._removeListeners();
      this._removeListeners = this._server = null;
      server.close(() => {
        emitClose(this);
      });
    }
  }
  /**
   * See if a given request should be handled by this server instance.
   *
   * @param {http.IncomingMessage} req Request object to inspect
   * @return {Boolean} `true` if the request is valid, else `false`
   * @public
   */
  shouldHandle(req2) {
    if (this.options.path) {
      const index = req2.url.indexOf("?");
      const pathname = index !== -1 ? req2.url.slice(0, index) : req2.url;
      if (pathname !== this.options.path) return false;
    }
    return true;
  }
  /**
   * Handle a HTTP Upgrade request.
   *
   * @param {http.IncomingMessage} req The request object
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @public
   */
  handleUpgrade(req2, socket, head, cb) {
    socket.on("error", socketOnError);
    const key = req2.headers["sec-websocket-key"];
    const upgrade = req2.headers.upgrade;
    const version3 = +req2.headers["sec-websocket-version"];
    if (req2.method !== "GET") {
      const message = "Invalid HTTP method";
      abortHandshakeOrEmitwsClientError(this, req2, socket, 405, message);
      return;
    }
    if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
      const message = "Invalid Upgrade header";
      abortHandshakeOrEmitwsClientError(this, req2, socket, 400, message);
      return;
    }
    if (key === void 0 || !keyRegex.test(key)) {
      const message = "Missing or invalid Sec-WebSocket-Key header";
      abortHandshakeOrEmitwsClientError(this, req2, socket, 400, message);
      return;
    }
    if (version3 !== 8 && version3 !== 13) {
      const message = "Missing or invalid Sec-WebSocket-Version header";
      abortHandshakeOrEmitwsClientError(this, req2, socket, 400, message);
      return;
    }
    if (!this.shouldHandle(req2)) {
      abortHandshake(socket, 400);
      return;
    }
    const secWebSocketProtocol = req2.headers["sec-websocket-protocol"];
    let protocols = /* @__PURE__ */ new Set();
    if (secWebSocketProtocol !== void 0) {
      try {
        protocols = subprotocol.parse(secWebSocketProtocol);
      } catch (err) {
        const message = "Invalid Sec-WebSocket-Protocol header";
        abortHandshakeOrEmitwsClientError(this, req2, socket, 400, message);
        return;
      }
    }
    const secWebSocketExtensions = req2.headers["sec-websocket-extensions"];
    const extensions2 = {};
    if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
      const perMessageDeflate = new PerMessageDeflate2(
        this.options.perMessageDeflate,
        true,
        this.options.maxPayload
      );
      try {
        const offers = extension.parse(secWebSocketExtensions);
        if (offers[PerMessageDeflate2.extensionName]) {
          perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
          extensions2[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
      } catch (err) {
        const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
        abortHandshakeOrEmitwsClientError(this, req2, socket, 400, message);
        return;
      }
    }
    if (this.options.verifyClient) {
      const info = {
        origin: req2.headers[`${version3 === 8 ? "sec-websocket-origin" : "origin"}`],
        secure: !!(req2.socket.authorized || req2.socket.encrypted),
        req: req2
      };
      if (this.options.verifyClient.length === 2) {
        this.options.verifyClient(info, (verified, code, message, headers) => {
          if (!verified) {
            return abortHandshake(socket, code || 401, message, headers);
          }
          this.completeUpgrade(
            extensions2,
            key,
            protocols,
            req2,
            socket,
            head,
            cb
          );
        });
        return;
      }
      if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
    }
    this.completeUpgrade(extensions2, key, protocols, req2, socket, head, cb);
  }
  /**
   * Upgrade the connection to WebSocket.
   *
   * @param {Object} extensions The accepted extensions
   * @param {String} key The value of the `Sec-WebSocket-Key` header
   * @param {Set} protocols The subprotocols
   * @param {http.IncomingMessage} req The request object
   * @param {Duplex} socket The network socket between the server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @throws {Error} If called more than once with the same socket
   * @private
   */
  completeUpgrade(extensions2, key, protocols, req2, socket, head, cb) {
    if (!socket.readable || !socket.writable) return socket.destroy();
    if (socket[kWebSocket]) {
      throw new Error(
        "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
      );
    }
    if (this._state > RUNNING) return abortHandshake(socket, 503);
    const digest = createHash("sha1").update(key + GUID).digest("base64");
    const headers = [
      "HTTP/1.1 101 Switching Protocols",
      "Upgrade: websocket",
      "Connection: Upgrade",
      `Sec-WebSocket-Accept: ${digest}`
    ];
    const ws = new this.options.WebSocket(null, void 0, this.options);
    if (protocols.size) {
      const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req2) : protocols.values().next().value;
      if (protocol) {
        headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
        ws._protocol = protocol;
      }
    }
    if (extensions2[PerMessageDeflate2.extensionName]) {
      const params = extensions2[PerMessageDeflate2.extensionName].params;
      const value2 = extension.format({
        [PerMessageDeflate2.extensionName]: [params]
      });
      headers.push(`Sec-WebSocket-Extensions: ${value2}`);
      ws._extensions = extensions2;
    }
    this.emit("headers", headers, req2);
    socket.write(headers.concat("\r\n").join("\r\n"));
    socket.removeListener("error", socketOnError);
    ws.setSocket(socket, head, {
      allowSynchronousEvents: this.options.allowSynchronousEvents,
      maxPayload: this.options.maxPayload,
      skipUTF8Validation: this.options.skipUTF8Validation
    });
    if (this.clients) {
      this.clients.add(ws);
      ws.on("close", () => {
        this.clients.delete(ws);
        if (this._shouldEmitClose && !this.clients.size) {
          process.nextTick(emitClose, this);
        }
      });
    }
    cb(ws, req2);
  }
};
var websocketServer = WebSocketServer;
function addListeners(server, map) {
  for (const event of Object.keys(map)) server.on(event, map[event]);
  return function removeListeners() {
    for (const event of Object.keys(map)) {
      server.removeListener(event, map[event]);
    }
  };
}
function emitClose(server) {
  server._state = CLOSED;
  server.emit("close");
}
function socketOnError() {
  this.destroy();
}
function abortHandshake(socket, code, message, headers) {
  message = message || http$2.STATUS_CODES[code];
  headers = {
    Connection: "close",
    "Content-Type": "text/html",
    "Content-Length": Buffer.byteLength(message),
    ...headers
  };
  socket.once("finish", socket.destroy);
  socket.end(
    `HTTP/1.1 ${code} ${http$2.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
  );
}
function abortHandshakeOrEmitwsClientError(server, req2, socket, code, message) {
  if (server.listenerCount("wsClientError")) {
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
    server.emit("wsClientError", err, socket, req2);
  } else {
    abortHandshake(socket, code, message);
  }
}
var WebSocketServerRaw_ = getDefaultExportFromCjs(websocketServer);
var WebSocketServerRaw = process.versions.bun ? (
  // @ts-expect-error: Bun defines `import.meta.require`
  import.meta.require("ws").WebSocketServer
) : WebSocketServerRaw_;
var isWebSocketServer = Symbol("isWebSocketServer");
var httpProxy$3 = { exports: {} };
var eventemitter3 = { exports: {} };
(function(module) {
  var has = Object.prototype.hasOwnProperty, prefix = "~";
  function Events() {
  }
  if (Object.create) {
    Events.prototype = /* @__PURE__ */ Object.create(null);
    if (!new Events().__proto__) prefix = false;
  }
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") {
      throw new TypeError("The listener must be a function");
    }
    var listener2 = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener2, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener2);
    else emitter._events[evt] = [emitter._events[evt], listener2];
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
  }
  function EventEmitter2() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter2.prototype.eventNames = function eventNames() {
    var names = [], events2, name;
    if (this._eventsCount === 0) return names;
    for (name in events2 = this._events) {
      if (has.call(events2, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events2));
    }
    return names;
  };
  EventEmitter2.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };
  EventEmitter2.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };
  EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length, j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
              args[j - 1] = arguments[j];
            }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter2.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };
  EventEmitter2.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };
  EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events2 = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events2.push(listeners[i]);
        }
      }
      if (events2.length) this._events[evt] = events2.length === 1 ? events2[0] : events2;
      else clearEvent(this, evt);
    }
    return this;
  };
  EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
  EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
  EventEmitter2.prefixed = prefix;
  EventEmitter2.EventEmitter = EventEmitter2;
  {
    module.exports = EventEmitter2;
  }
})(eventemitter3);
var eventemitter3Exports = eventemitter3.exports;
var common$3 = {};
var requiresPort = function required(port, protocol) {
  protocol = protocol.split(":")[0];
  port = +port;
  if (!port) return false;
  switch (protocol) {
    case "http":
    case "ws":
      return port !== 80;
    case "https":
    case "wss":
      return port !== 443;
    case "ftp":
      return port !== 21;
    case "gopher":
      return port !== 70;
    case "file":
      return false;
  }
  return port !== 0;
};
(function(exports) {
  var common2 = exports, url2 = import_url.default, required2 = requiresPort;
  var upgradeHeader = /(^|,)\s*upgrade\s*($|,)/i, isSSL = /^https|wss/;
  common2.isSSL = isSSL;
  common2.setupOutgoing = function(outgoing, options2, req2, forward) {
    outgoing.port = options2[forward || "target"].port || (isSSL.test(options2[forward || "target"].protocol) ? 443 : 80);
    [
      "host",
      "hostname",
      "socketPath",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "secureProtocol"
    ].forEach(
      function(e) {
        outgoing[e] = options2[forward || "target"][e];
      }
    );
    outgoing.method = options2.method || req2.method;
    outgoing.headers = Object.assign({}, req2.headers);
    if (options2.headers) {
      Object.assign(outgoing.headers, options2.headers);
    }
    if (options2.auth) {
      outgoing.auth = options2.auth;
    }
    if (options2.ca) {
      outgoing.ca = options2.ca;
    }
    if (isSSL.test(options2[forward || "target"].protocol)) {
      outgoing.rejectUnauthorized = typeof options2.secure === "undefined" ? true : options2.secure;
    }
    outgoing.agent = options2.agent || false;
    outgoing.localAddress = options2.localAddress;
    if (!outgoing.agent) {
      outgoing.headers = outgoing.headers || {};
      if (typeof outgoing.headers.connection !== "string" || !upgradeHeader.test(outgoing.headers.connection)) {
        outgoing.headers.connection = "close";
      }
    }
    var target = options2[forward || "target"];
    var targetPath = target && options2.prependPath !== false ? target.path || "" : "";
    var outgoingPath = !options2.toProxy ? url2.parse(req2.url).path || "" : req2.url;
    outgoingPath = !options2.ignorePath ? outgoingPath : "";
    outgoing.path = common2.urlJoin(targetPath, outgoingPath);
    if (options2.changeOrigin) {
      outgoing.headers.host = required2(outgoing.port, options2[forward || "target"].protocol) && !hasPort(outgoing.host) ? outgoing.host + ":" + outgoing.port : outgoing.host;
    }
    return outgoing;
  };
  common2.setupSocket = function(socket) {
    socket.setTimeout(0);
    socket.setNoDelay(true);
    socket.setKeepAlive(true, 0);
    return socket;
  };
  common2.getPort = function(req2) {
    var res = req2.headers.host ? req2.headers.host.match(/:(\d+)/) : "";
    return res ? res[1] : common2.hasEncryptedConnection(req2) ? "443" : "80";
  };
  common2.hasEncryptedConnection = function(req2) {
    return Boolean(req2.connection.encrypted || req2.connection.pair);
  };
  common2.urlJoin = function() {
    var args = Array.prototype.slice.call(arguments), lastIndex = args.length - 1, last = args[lastIndex], lastSegs = last.split("?"), retSegs;
    args[lastIndex] = lastSegs.shift();
    retSegs = [
      args.filter(Boolean).join("/").replace(/\/+/g, "/").replace("http:/", "http://").replace("https:/", "https://")
    ];
    retSegs.push.apply(retSegs, lastSegs);
    return retSegs.join("?");
  };
  common2.rewriteCookieProperty = function rewriteCookieProperty(header, config2, property) {
    if (Array.isArray(header)) {
      return header.map(function(headerElement) {
        return rewriteCookieProperty(headerElement, config2, property);
      });
    }
    return header.replace(new RegExp("(;\\s*" + property + "=)([^;]+)", "i"), function(match, prefix, previousValue) {
      var newValue;
      if (previousValue in config2) {
        newValue = config2[previousValue];
      } else if ("*" in config2) {
        newValue = config2["*"];
      } else {
        return match;
      }
      if (newValue) {
        return prefix + newValue;
      } else {
        return "";
      }
    });
  };
  function hasPort(host) {
    return !!~host.indexOf(":");
  }
})(common$3);
var url$1 = import_url.default;
var common$2 = common$3;
var redirectRegex = /^201|30(1|2|7|8)$/;
var webOutgoing = {
  // <--
  /**
   * If is a HTTP 1.0 request, remove chunk headers
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  removeChunked: function removeChunked(req2, res, proxyRes) {
    if (req2.httpVersion === "1.0") {
      delete proxyRes.headers["transfer-encoding"];
    }
  },
  /**
   * If is a HTTP 1.0 request, set the correct connection header
   * or if connection header not present, then use `keep-alive`
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  setConnection: function setConnection(req2, res, proxyRes) {
    if (req2.httpVersion === "1.0") {
      proxyRes.headers.connection = req2.headers.connection || "close";
    } else if (req2.httpVersion !== "2.0" && !proxyRes.headers.connection) {
      proxyRes.headers.connection = req2.headers.connection || "keep-alive";
    }
  },
  setRedirectHostRewrite: function setRedirectHostRewrite(req2, res, proxyRes, options2) {
    if ((options2.hostRewrite || options2.autoRewrite || options2.protocolRewrite) && proxyRes.headers["location"] && redirectRegex.test(proxyRes.statusCode)) {
      var target = url$1.parse(options2.target);
      var u = url$1.parse(proxyRes.headers["location"]);
      if (target.host != u.host) {
        return;
      }
      if (options2.hostRewrite) {
        u.host = options2.hostRewrite;
      } else if (options2.autoRewrite) {
        u.host = req2.headers["host"];
      }
      if (options2.protocolRewrite) {
        u.protocol = options2.protocolRewrite;
      }
      proxyRes.headers["location"] = u.format();
    }
  },
  /**
   * Copy headers from proxyResponse to response
   * set each header in response object.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   * @param {Object} Options options.cookieDomainRewrite: Config to rewrite cookie domain
   *
   * @api private
   */
  writeHeaders: function writeHeaders(req2, res, proxyRes, options2) {
    var rewriteCookieDomainConfig = options2.cookieDomainRewrite, rewriteCookiePathConfig = options2.cookiePathRewrite, preserveHeaderKeyCase = options2.preserveHeaderKeyCase, rawHeaderKeyMap, setHeader = function(key2, header) {
      if (header == void 0) return;
      if (rewriteCookieDomainConfig && key2.toLowerCase() === "set-cookie") {
        header = common$2.rewriteCookieProperty(header, rewriteCookieDomainConfig, "domain");
      }
      if (rewriteCookiePathConfig && key2.toLowerCase() === "set-cookie") {
        header = common$2.rewriteCookieProperty(header, rewriteCookiePathConfig, "path");
      }
      res.setHeader(String(key2).trim(), header);
    };
    if (typeof rewriteCookieDomainConfig === "string") {
      rewriteCookieDomainConfig = { "*": rewriteCookieDomainConfig };
    }
    if (typeof rewriteCookiePathConfig === "string") {
      rewriteCookiePathConfig = { "*": rewriteCookiePathConfig };
    }
    if (preserveHeaderKeyCase && proxyRes.rawHeaders != void 0) {
      rawHeaderKeyMap = {};
      for (var i = 0; i < proxyRes.rawHeaders.length; i += 2) {
        var key = proxyRes.rawHeaders[i];
        rawHeaderKeyMap[key.toLowerCase()] = key;
      }
    }
    Object.keys(proxyRes.headers).forEach(function(key2) {
      var header = proxyRes.headers[key2];
      if (preserveHeaderKeyCase && rawHeaderKeyMap) {
        key2 = rawHeaderKeyMap[key2] || key2;
      }
      setHeader(key2, header);
    });
  },
  /**
   * Set the statusCode from the proxyResponse
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {proxyResponse} Res Response object from the proxy request
   *
   * @api private
   */
  writeStatusCode: function writeStatusCode(req2, res, proxyRes) {
    if (proxyRes.statusMessage) {
      res.statusCode = proxyRes.statusCode;
      res.statusMessage = proxyRes.statusMessage;
    } else {
      res.statusCode = proxyRes.statusCode;
    }
  }
};
var followRedirects$1 = { exports: {} };
var debug$7;
var debug_1 = function() {
  if (!debug$7) {
    try {
      debug$7 = srcExports$1("follow-redirects");
    } catch (error) {
    }
    if (typeof debug$7 !== "function") {
      debug$7 = function() {
      };
    }
  }
  debug$7.apply(null, arguments);
};
var url = import_url.default;
var URL$1 = url.URL;
var http$1 = import_http.default;
var https$1 = import_https.default;
var Writable = import_stream.default.Writable;
var assert = import_assert.default;
var debug$6 = debug_1;
(function detectUnsupportedEnvironment() {
  var looksLikeNode = typeof process !== "undefined";
  var looksLikeBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  var looksLikeV8 = isFunction(Error.captureStackTrace);
  if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
    console.warn("The follow-redirects package should be excluded from browser builds.");
  }
})();
var useNativeURL = false;
try {
  assert(new URL$1(""));
} catch (error) {
  useNativeURL = error.code === "ERR_INVALID_URL";
}
var preservedUrlFields = [
  "auth",
  "host",
  "hostname",
  "href",
  "path",
  "pathname",
  "port",
  "protocol",
  "query",
  "search",
  "hash"
];
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = /* @__PURE__ */ Object.create(null);
events.forEach(function(event) {
  eventHandlers[event] = function(arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});
var InvalidUrlError = createErrorType(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
);
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  RedirectionError
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);
var destroy = Writable.prototype.destroy || noop$1;
function RedirectableRequest(options2, responseCallback) {
  Writable.call(this);
  this._sanitizeOptions(options2);
  this._options = options2;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];
  if (responseCallback) {
    this.on("response", responseCallback);
  }
  var self2 = this;
  this._onNativeResponse = function(response) {
    try {
      self2._processResponse(response);
    } catch (cause) {
      self2.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({ cause }));
    }
  };
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
  destroyRequest(this._currentRequest);
  this._currentRequest.abort();
  this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
  destroyRequest(this._currentRequest, error);
  destroy.call(this, error);
  return this;
};
RedirectableRequest.prototype.write = function(data, encoding, callback2) {
  if (this._ending) {
    throw new WriteAfterEndError();
  }
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback2 = encoding;
    encoding = null;
  }
  if (data.length === 0) {
    if (callback2) {
      callback2();
    }
    return;
  }
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data, encoding });
    this._currentRequest.write(data, encoding, callback2);
  } else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};
RedirectableRequest.prototype.end = function(data, encoding, callback2) {
  if (isFunction(data)) {
    callback2 = data;
    data = encoding = null;
  } else if (isFunction(encoding)) {
    callback2 = encoding;
    encoding = null;
  }
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback2);
  } else {
    var self2 = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function() {
      self2._ended = true;
      currentRequest.end(null, null, callback2);
    });
    this._ending = true;
  }
};
RedirectableRequest.prototype.setHeader = function(name, value2) {
  this._options.headers[name] = value2;
  this._currentRequest.setHeader(name, value2);
};
RedirectableRequest.prototype.removeHeader = function(name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};
RedirectableRequest.prototype.setTimeout = function(msecs, callback2) {
  var self2 = this;
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }
  function startTimer(socket) {
    if (self2._timeout) {
      clearTimeout(self2._timeout);
    }
    self2._timeout = setTimeout(function() {
      self2.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }
  function clearTimer() {
    if (self2._timeout) {
      clearTimeout(self2._timeout);
      self2._timeout = null;
    }
    self2.removeListener("abort", clearTimer);
    self2.removeListener("error", clearTimer);
    self2.removeListener("response", clearTimer);
    self2.removeListener("close", clearTimer);
    if (callback2) {
      self2.removeListener("timeout", callback2);
    }
    if (!self2.socket) {
      self2._currentRequest.removeListener("socket", startTimer);
    }
  }
  if (callback2) {
    this.on("timeout", callback2);
  }
  if (this.socket) {
    startTimer(this.socket);
  } else {
    this._currentRequest.once("socket", startTimer);
  }
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);
  this.on("close", clearTimer);
  return this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(method) {
  RedirectableRequest.prototype[method] = function(a, b) {
    return this._currentRequest[method](a, b);
  };
});
["aborted", "connection", "socket"].forEach(function(property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function() {
      return this._currentRequest[property];
    }
  });
});
RedirectableRequest.prototype._sanitizeOptions = function(options2) {
  if (!options2.headers) {
    options2.headers = {};
  }
  if (options2.host) {
    if (!options2.hostname) {
      options2.hostname = options2.host;
    }
    delete options2.host;
  }
  if (!options2.pathname && options2.path) {
    var searchPos = options2.path.indexOf("?");
    if (searchPos < 0) {
      options2.pathname = options2.path;
    } else {
      options2.pathname = options2.path.substring(0, searchPos);
      options2.search = options2.path.substring(searchPos);
    }
  }
};
RedirectableRequest.prototype._performRequest = function() {
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    throw new TypeError("Unsupported protocol " + protocol);
  }
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }
  var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }
  this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : (
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path
  );
  if (this._isRedirect) {
    var i = 0;
    var self2 = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      if (request === self2._currentRequest) {
        if (error) {
          self2.emit("error", error);
        } else if (i < buffers.length) {
          var buffer = buffers[i++];
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        } else if (self2._ended) {
          request.end();
        }
      }
    })();
  }
};
RedirectableRequest.prototype._processResponse = function(response) {
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode
    });
  }
  var location2 = response.headers.location;
  if (!location2 || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);
    this._requestBodyBuffers = [];
    return;
  }
  destroyRequest(this._currentRequest);
  response.destroy();
  if (++this._redirectCount > this._options.maxRedirects) {
    throw new TooManyRedirectsError();
  }
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host")
    }, this._options.headers);
  }
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
  var currentUrlParts = parseUrl(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location2) ? this._currentUrl : url.format(Object.assign(currentUrlParts, { host: currentHost }));
  var redirectUrl = resolveUrl(location2, currentUrl);
  debug$6("redirecting to", redirectUrl.href);
  this._isRedirect = true;
  spreadUrlObject(redirectUrl, this._options);
  if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
    removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
  }
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode
    };
    var requestDetails = {
      url: currentUrl,
      method,
      headers: requestHeaders
    };
    beforeRedirect(this._options, responseDetails, requestDetails);
    this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function wrap(protocols) {
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024
  };
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function(scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
    function request(input, options2, callback2) {
      if (isURL(input)) {
        input = spreadUrlObject(input);
      } else if (isString(input)) {
        input = spreadUrlObject(parseUrl(input));
      } else {
        callback2 = options2;
        options2 = validateUrl(input);
        input = { protocol };
      }
      if (isFunction(options2)) {
        callback2 = options2;
        options2 = null;
      }
      options2 = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength
      }, input, options2);
      options2.nativeProtocols = nativeProtocols;
      if (!isString(options2.host) && !isString(options2.hostname)) {
        options2.hostname = "::1";
      }
      assert.equal(options2.protocol, protocol, "protocol mismatch");
      debug$6("options", options2);
      return new RedirectableRequest(options2, callback2);
    }
    function get(input, options2, callback2) {
      var wrappedRequest = wrappedProtocol.request(input, options2, callback2);
      wrappedRequest.end();
      return wrappedRequest;
    }
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true }
    });
  });
  return exports;
}
function noop$1() {
}
function parseUrl(input) {
  var parsed;
  if (useNativeURL) {
    parsed = new URL$1(input);
  } else {
    parsed = validateUrl(url.parse(input));
    if (!isString(parsed.protocol)) {
      throw new InvalidUrlError({ input });
    }
  }
  return parsed;
}
function resolveUrl(relative2, base) {
  return useNativeURL ? new URL$1(relative2, base) : parseUrl(url.resolve(base, relative2));
}
function validateUrl(input) {
  if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
    throw new InvalidUrlError({ input: input.href || input });
  }
  if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
    throw new InvalidUrlError({ input: input.href || input });
  }
  return input;
}
function spreadUrlObject(urlObject, target) {
  var spread = target || {};
  for (var key of preservedUrlFields) {
    spread[key] = urlObject[key];
  }
  if (spread.hostname.startsWith("[")) {
    spread.hostname = spread.hostname.slice(1, -1);
  }
  if (spread.port !== "") {
    spread.port = Number(spread.port);
  }
  spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
  return spread;
}
function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
  function CustomError(properties) {
    if (isFunction(Error.captureStackTrace)) {
      Error.captureStackTrace(this, this.constructor);
    }
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }
  CustomError.prototype = new (baseClass || Error)();
  Object.defineProperties(CustomError.prototype, {
    constructor: {
      value: CustomError,
      enumerable: false
    },
    name: {
      value: "Error [" + code + "]",
      enumerable: false
    }
  });
  return CustomError;
}
function destroyRequest(request, error) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop$1);
  request.destroy(error);
}
function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value2) {
  return typeof value2 === "string" || value2 instanceof String;
}
function isFunction(value2) {
  return typeof value2 === "function";
}
function isBuffer(value2) {
  return typeof value2 === "object" && "length" in value2;
}
function isURL(value2) {
  return URL$1 && value2 instanceof URL$1;
}
followRedirects$1.exports = wrap({ http: http$1, https: https$1 });
followRedirects$1.exports.wrap = wrap;
var followRedirectsExports = followRedirects$1.exports;
var httpNative = import_http.default;
var httpsNative = import_https.default;
var web_o = webOutgoing;
var common$1 = common$3;
var followRedirects = followRedirectsExports;
web_o = Object.keys(web_o).map(function(pass) {
  return web_o[pass];
});
var nativeAgents = { http: httpNative, https: httpsNative };
var webIncoming = {
  /**
   * Sets `content-length` to '0' if request is of DELETE type.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */
  deleteLength: function deleteLength(req2, res, options2) {
    if ((req2.method === "DELETE" || req2.method === "OPTIONS") && !req2.headers["content-length"]) {
      req2.headers["content-length"] = "0";
      delete req2.headers["transfer-encoding"];
    }
  },
  /**
   * Sets timeout in request socket if it was specified in options.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */
  timeout: function timeout(req2, res, options2) {
    if (options2.timeout) {
      req2.socket.setTimeout(options2.timeout);
    }
  },
  /**
   * Sets `x-forwarded-*` headers if specified in config.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */
  XHeaders: function XHeaders(req2, res, options2) {
    if (!options2.xfwd) return;
    var encrypted = req2.isSpdy || common$1.hasEncryptedConnection(req2);
    var values = {
      for: req2.connection.remoteAddress || req2.socket.remoteAddress,
      port: common$1.getPort(req2),
      proto: encrypted ? "https" : "http"
    };
    ["for", "port", "proto"].forEach(function(header) {
      req2.headers["x-forwarded-" + header] = (req2.headers["x-forwarded-" + header] || "") + (req2.headers["x-forwarded-" + header] ? "," : "") + values[header];
    });
    req2.headers["x-forwarded-host"] = req2.headers["x-forwarded-host"] || req2.headers["host"] || "";
  },
  /**
   * Does the actual proxying. If `forward` is enabled fires up
   * a ForwardStream, same happens for ProxyStream. The request
   * just dies otherwise.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */
  stream: function stream(req2, res, options2, _, server, clb) {
    server.emit("start", req2, res, options2.target || options2.forward);
    var agents = options2.followRedirects ? followRedirects : nativeAgents;
    var http2 = agents.http;
    var https2 = agents.https;
    if (options2.forward) {
      var forwardReq = (options2.forward.protocol === "https:" ? https2 : http2).request(
        common$1.setupOutgoing(options2.ssl || {}, options2, req2, "forward")
      );
      var forwardError = createErrorHandler(forwardReq, options2.forward);
      req2.on("error", forwardError);
      forwardReq.on("error", forwardError);
      (options2.buffer || req2).pipe(forwardReq);
      if (!options2.target) {
        return res.end();
      }
    }
    var proxyReq = (options2.target.protocol === "https:" ? https2 : http2).request(
      common$1.setupOutgoing(options2.ssl || {}, options2, req2)
    );
    proxyReq.on("socket", function(socket) {
      if (server && !proxyReq.getHeader("expect")) {
        server.emit("proxyReq", proxyReq, req2, res, options2);
      }
    });
    if (options2.proxyTimeout) {
      proxyReq.setTimeout(options2.proxyTimeout, function() {
        proxyReq.abort();
      });
    }
    req2.on("aborted", function() {
      proxyReq.abort();
    });
    var proxyError = createErrorHandler(proxyReq, options2.target);
    req2.on("error", proxyError);
    proxyReq.on("error", proxyError);
    function createErrorHandler(proxyReq2, url2) {
      return function proxyError2(err) {
        if (req2.socket.destroyed && err.code === "ECONNRESET") {
          server.emit("econnreset", err, req2, res, url2);
          return proxyReq2.abort();
        }
        if (clb) {
          clb(err, req2, res, url2);
        } else {
          server.emit("error", err, req2, res, url2);
        }
      };
    }
    (options2.buffer || req2).pipe(proxyReq);
    proxyReq.on("response", function(proxyRes) {
      if (server) {
        server.emit("proxyRes", proxyRes, req2, res);
      }
      if (!res.headersSent && !options2.selfHandleResponse) {
        for (var i = 0; i < web_o.length; i++) {
          if (web_o[i](req2, res, proxyRes, options2)) {
            break;
          }
        }
      }
      if (!res.finished) {
        proxyRes.on("end", function() {
          if (server) server.emit("end", req2, res, proxyRes);
        });
        if (!options2.selfHandleResponse) proxyRes.pipe(res);
      } else {
        if (server) server.emit("end", req2, res, proxyRes);
      }
    });
  }
};
var http = import_http.default;
var https = import_https.default;
var common = common$3;
var wsIncoming = {
  /**
   * WebSocket requests must have the `GET` method and
   * the `upgrade:websocket` header
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   *
   * @api private
   */
  checkMethodAndHeader: function checkMethodAndHeader(req2, socket) {
    if (req2.method !== "GET" || !req2.headers.upgrade) {
      socket.destroy();
      return true;
    }
    if (req2.headers.upgrade.toLowerCase() !== "websocket") {
      socket.destroy();
      return true;
    }
  },
  /**
   * Sets `x-forwarded-*` headers if specified in config.
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */
  XHeaders: function XHeaders2(req2, socket, options2) {
    if (!options2.xfwd) return;
    var values = {
      for: req2.connection.remoteAddress || req2.socket.remoteAddress,
      port: common.getPort(req2),
      proto: common.hasEncryptedConnection(req2) ? "wss" : "ws"
    };
    ["for", "port", "proto"].forEach(function(header) {
      req2.headers["x-forwarded-" + header] = (req2.headers["x-forwarded-" + header] || "") + (req2.headers["x-forwarded-" + header] ? "," : "") + values[header];
    });
  },
  /**
   * Does the actual proxying. Make the request and upgrade it
   * send the Switching Protocols request and pipe the sockets.
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */
  stream: function stream2(req2, socket, options2, head, server, clb) {
    var createHttpHeader = function(line, headers) {
      return Object.keys(headers).reduce(function(head2, key) {
        var value2 = headers[key];
        if (!Array.isArray(value2)) {
          head2.push(key + ": " + value2);
          return head2;
        }
        for (var i = 0; i < value2.length; i++) {
          head2.push(key + ": " + value2[i]);
        }
        return head2;
      }, [line]).join("\r\n") + "\r\n\r\n";
    };
    common.setupSocket(socket);
    if (head && head.length) socket.unshift(head);
    var proxyReq = (common.isSSL.test(options2.target.protocol) ? https : http).request(
      common.setupOutgoing(options2.ssl || {}, options2, req2)
    );
    if (server) {
      server.emit("proxyReqWs", proxyReq, req2, socket, options2, head);
    }
    proxyReq.on("error", onOutgoingError);
    proxyReq.on("response", function(res) {
      if (!res.upgrade) {
        socket.write(createHttpHeader("HTTP/" + res.httpVersion + " " + res.statusCode + " " + res.statusMessage, res.headers));
        res.pipe(socket);
      }
    });
    proxyReq.on("upgrade", function(proxyRes, proxySocket, proxyHead) {
      proxySocket.on("error", onOutgoingError);
      proxySocket.on("end", function() {
        server.emit("close", proxyRes, proxySocket, proxyHead);
      });
      socket.on("error", function() {
        proxySocket.end();
      });
      common.setupSocket(proxySocket);
      if (proxyHead && proxyHead.length) proxySocket.unshift(proxyHead);
      socket.write(createHttpHeader("HTTP/1.1 101 Switching Protocols", proxyRes.headers));
      proxySocket.pipe(socket).pipe(proxySocket);
      server.emit("open", proxySocket);
      server.emit("proxySocket", proxySocket);
    });
    return proxyReq.end();
    function onOutgoingError(err) {
      if (clb) {
        clb(err, req2, socket);
      } else {
        server.emit("error", err, req2, socket);
      }
      socket.end();
    }
  }
};
(function(module) {
  var httpProxy2 = module.exports, parse_url = import_url.default.parse, EE3 = eventemitter3Exports, http2 = import_http.default, https2 = import_https.default, web = webIncoming, ws = wsIncoming;
  httpProxy2.Server = ProxyServer2;
  function createRightProxy(type) {
    return function(options2) {
      return function(req2, res) {
        var passes = type === "ws" ? this.wsPasses : this.webPasses, args = [].slice.call(arguments), cntr = args.length - 1, head, cbl;
        if (typeof args[cntr] === "function") {
          cbl = args[cntr];
          cntr--;
        }
        var requestOptions = options2;
        if (!(args[cntr] instanceof Buffer) && args[cntr] !== res) {
          requestOptions = Object.assign({}, options2);
          Object.assign(requestOptions, args[cntr]);
          cntr--;
        }
        if (args[cntr] instanceof Buffer) {
          head = args[cntr];
        }
        ["target", "forward"].forEach(function(e) {
          if (typeof requestOptions[e] === "string")
            requestOptions[e] = parse_url(requestOptions[e]);
        });
        if (!requestOptions.target && !requestOptions.forward) {
          return this.emit("error", new Error("Must provide a proper URL as target"));
        }
        for (var i = 0; i < passes.length; i++) {
          if (passes[i](req2, res, requestOptions, head, this, cbl)) {
            break;
          }
        }
      };
    };
  }
  httpProxy2.createRightProxy = createRightProxy;
  function ProxyServer2(options2) {
    EE3.call(this);
    options2 = options2 || {};
    options2.prependPath = options2.prependPath === false ? false : true;
    this.web = this.proxyRequest = createRightProxy("web")(options2);
    this.ws = this.proxyWebsocketRequest = createRightProxy("ws")(options2);
    this.options = options2;
    this.webPasses = Object.keys(web).map(function(pass) {
      return web[pass];
    });
    this.wsPasses = Object.keys(ws).map(function(pass) {
      return ws[pass];
    });
    this.on("error", this.onError, this);
  }
  import_util.default.inherits(ProxyServer2, EE3);
  ProxyServer2.prototype.onError = function(err) {
    if (this.listeners("error").length === 1) {
      throw err;
    }
  };
  ProxyServer2.prototype.listen = function(port, hostname) {
    var self2 = this, closure = function(req2, res) {
      self2.web(req2, res);
    };
    this._server = this.options.ssl ? https2.createServer(this.options.ssl, closure) : http2.createServer(closure);
    if (this.options.ws) {
      this._server.on("upgrade", function(req2, socket, head) {
        self2.ws(req2, socket, head);
      });
    }
    this._server.listen(port, hostname);
    return this;
  };
  ProxyServer2.prototype.close = function(callback2) {
    var self2 = this;
    if (this._server) {
      this._server.close(done);
    }
    function done() {
      self2._server = null;
      if (callback2) {
        callback2.apply(null, arguments);
      }
    }
  };
  ProxyServer2.prototype.before = function(type, passName, callback2) {
    if (type !== "ws" && type !== "web") {
      throw new Error("type must be `web` or `ws`");
    }
    var passes = type === "ws" ? this.wsPasses : this.webPasses, i = false;
    passes.forEach(function(v, idx) {
      if (v.name === passName) i = idx;
    });
    if (i === false) throw new Error("No such pass");
    passes.splice(i, 0, callback2);
  };
  ProxyServer2.prototype.after = function(type, passName, callback2) {
    if (type !== "ws" && type !== "web") {
      throw new Error("type must be `web` or `ws`");
    }
    var passes = type === "ws" ? this.wsPasses : this.webPasses, i = false;
    passes.forEach(function(v, idx) {
      if (v.name === passName) i = idx;
    });
    if (i === false) throw new Error("No such pass");
    passes.splice(i++, 0, callback2);
  };
})(httpProxy$3);
var httpProxyExports = httpProxy$3.exports;
var ProxyServer = httpProxyExports.Server;
function createProxyServer(options2) {
  return new ProxyServer(options2);
}
ProxyServer.createProxyServer = createProxyServer;
ProxyServer.createServer = createProxyServer;
ProxyServer.createProxy = createProxyServer;
var httpProxy$2 = ProxyServer;
var httpProxy = httpProxy$2;
var httpProxy$1 = getDefaultExportFromCjs(httpProxy);
var debug$5 = createDebugger("vite:proxy");
var debug$4 = createDebugger("vite:html-fallback");
var etag_1 = etag;
var crypto = import_crypto.default;
var Stats = import_fs.default.Stats;
var toString = Object.prototype.toString;
function entitytag(entity) {
  if (entity.length === 0) {
    return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
  }
  var hash2 = crypto.createHash("sha1").update(entity, "utf8").digest("base64").substring(0, 27);
  var len = typeof entity === "string" ? Buffer.byteLength(entity, "utf8") : entity.length;
  return '"' + len.toString(16) + "-" + hash2 + '"';
}
function etag(entity, options2) {
  if (entity == null) {
    throw new TypeError("argument entity is required");
  }
  var isStats = isstats(entity);
  var weak = options2 && typeof options2.weak === "boolean" ? options2.weak : isStats;
  if (!isStats && typeof entity !== "string" && !Buffer.isBuffer(entity)) {
    throw new TypeError("argument entity must be string, Buffer, or fs.Stats");
  }
  var tag = isStats ? stattag(entity) : entitytag(entity);
  return weak ? "W/" + tag : tag;
}
function isstats(obj) {
  if (typeof Stats === "function" && obj instanceof Stats) {
    return true;
  }
  return obj && typeof obj === "object" && "ctime" in obj && toString.call(obj.ctime) === "[object Date]" && "mtime" in obj && toString.call(obj.mtime) === "[object Date]" && "ino" in obj && typeof obj.ino === "number" && "size" in obj && typeof obj.size === "number";
}
function stattag(stat2) {
  var mtime = stat2.mtime.getTime().toString(16);
  var size = stat2.size.toString(16);
  return '"' + size + "-" + mtime + '"';
}
var getEtag = getDefaultExportFromCjs(etag_1);
var debug$3 = createDebugger("vite:send", {
  onlyWhenFocused: true
});
var debugLoad = createDebugger("vite:load");
var debugTransform = createDebugger("vite:transform");
var debugCache$1 = createDebugger("vite:cache");
var modulePreloadPolyfillId = "vite/modulepreload-polyfill";
var resolvedModulePreloadPolyfillId = "\0" + modulePreloadPolyfillId + ".js";
var inlineImportRE = new RegExp(`(?<!(?<!\\.\\.)\\.)\\bimport\\s*\\(("(?:[^"]|(?<=\\\\)")*"|'(?:[^']|(?<=\\\\)')*')\\)`, "dg");
var moduleScriptRE = /[ \t]*<script[^>]*type\s*=\s*(?:"module"|'module'|module)[^>]*>/i;
var modulePreloadLinkRE = /[ \t]*<link[^>]*rel\s*=\s*(?:"modulepreload"|'modulepreload'|modulepreload)[\s\S]*?\/>/i;
var importMapAppendRE = new RegExp(
  [moduleScriptRE, modulePreloadLinkRE].map((r) => r.source).join("|"),
  "i"
);
var debugCache = createDebugger("vite:cache");
var logTime = createDebugger("vite:time");
var EMPTY_OBJECT$1 = Object.freeze({});
var serverConfigDefaults = Object.freeze({
  port: DEFAULT_DEV_PORT,
  strictPort: false,
  host: "localhost",
  allowedHosts: [],
  https: void 0,
  open: false,
  proxy: void 0,
  cors: { origin: defaultAllowedOrigins },
  headers: {},
  // hmr
  // ws
  warmup: {
    clientFiles: [],
    ssrFiles: []
  },
  // watch
  middlewareMode: false,
  fs: {
    strict: true,
    // allow
    deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"]
  },
  // origin
  preTransformRequests: true,
  // sourcemapIgnoreList
  perEnvironmentStartEndDuringDev: false
  // hotUpdateEnvironments
});
var debugHmr = createDebugger("vite:hmr");
var normalizedClientDir = normalizePath$3(CLIENT_DIR);
var debug$2 = createDebugger("vite:import-analysis");
var clientDir = normalizePath$3(CLIENT_DIR);
var normalizedClientEntry = normalizePath$3(CLIENT_ENTRY);
var normalizedEnvEntry = normalizePath$3(ENV_ENTRY);
var wasmHelper = async (opts = {}, url2) => {
  let result;
  if (url2.startsWith("data:")) {
    const urlContent = url2.replace(/^data:.*?base64,/, "");
    let bytes;
    if (typeof Buffer === "function" && typeof Buffer.from === "function") {
      bytes = Buffer.from(urlContent, "base64");
    } else if (typeof atob === "function") {
      const binaryString = atob(urlContent);
      bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
    } else {
      throw new Error(
        "Failed to decode base64-encoded data URL, Buffer and atob are not supported"
      );
    }
    result = await WebAssembly.instantiate(bytes, opts);
  } else {
    const response = await fetch(url2);
    const contentType = response.headers.get("Content-Type") || "";
    if ("instantiateStreaming" in WebAssembly && contentType.startsWith("application/wasm")) {
      result = await WebAssembly.instantiateStreaming(response, opts);
    } else {
      const buffer = await response.arrayBuffer();
      result = await WebAssembly.instantiate(buffer, opts);
    }
  }
  return result.instance;
};
var wasmHelperCode = wasmHelper.toString();
var EMPTY_OBJECT = Object.freeze({});
var debugSourcemapCombineFilter = process.env.DEBUG_VITE_SOURCEMAP_COMBINE_FILTER;
var debugSourcemapCombine = createDebugger("vite:sourcemap-combine", {
  onlyWhenFocused: true
});
var debugResolve = createDebugger("vite:resolve");
var debugPluginResolve = createDebugger("vite:plugin-resolve", {
  onlyWhenFocused: "vite:plugin"
});
var debugPluginTransform = createDebugger("vite:plugin-transform", {
  onlyWhenFocused: "vite:plugin"
});
var debugPluginContainerContext = createDebugger(
  "vite:plugin-container-context"
);
var decoder = new TextDecoder();
var cssConfigDefaults = Object.freeze({
  /** @experimental */
  transformer: "postcss",
  // modules
  // preprocessorOptions
  /** @experimental */
  preprocessorMaxWorkers: 0,
  // postcss
  /** @experimental */
  devSourcemap: false
  // lightningcss
});
var cssModuleRE = new RegExp(`\\.module${CSS_LANGS_RE.source}`);
var functionCallRE = /^[A-Z_][.\w-]*\(/i;
var nonEscapedDoubleQuoteRe = new RegExp('(?<!\\\\)"', "g");
function createCachedImport(imp) {
  let cached;
  return () => {
    if (!cached) {
      cached = imp().then((module) => {
        cached = module;
        return module;
      });
    }
    return cached;
  };
}
var importPostcssImport = createCachedImport(() => import("./dep-CmNzPT96-ZXRKZFYS.js").then(function(n) {
  return n.i;
}));
var importPostcssModules = createCachedImport(() => import("./dep-Ccxds025-KWWCKPTF.js").then(function(n) {
  return n.i;
}));
var importPostcss = createCachedImport(() => import("./postcss-ZADZV6RX.js"));
var cssUrlRE = new RegExp(`(?<!@import\\s+)(?<=^|[^\\w\\-\\u0080-\\uffff])url\\((\\s*('[^']+'|"[^"]+")\\s*|[^'")]+)\\)`);
var cssDataUriRE = new RegExp(`(?<=^|[^\\w\\-\\u0080-\\uffff])data-uri\\((\\s*('[^']+'|"[^"]+")\\s*|[^'")]+)\\)`);
var cssImageSetRE = new RegExp("(?<=image-set\\()((?:[\\w-]{1,256}\\([^)]*\\)|[^)])*)(?=\\))");
var UrlRewritePostcssPlugin = (opts) => {
  if (!opts) {
    throw new Error("base or replace is required");
  }
  return {
    postcssPlugin: "vite-url-rewrite",
    Once(root) {
      const promises2 = [];
      root.walkDecls((declaration) => {
        var _a2;
        const importer = (_a2 = declaration.source) == null ? void 0 : _a2.input.file;
        if (!importer) {
          opts.logger.warnOnce(
            "\nA PostCSS plugin did not pass the `from` option to `postcss.parse`. This may cause imported assets to be incorrectly transformed. If you've recently added a PostCSS plugin that raised this warning, please contact the package author to fix the issue."
          );
        }
        const isCssUrl = cssUrlRE.test(declaration.value);
        const isCssImageSet = cssImageSetRE.test(declaration.value);
        if (isCssUrl || isCssImageSet) {
          const replacerForDeclaration = async (rawUrl) => {
            const [newUrl, resolvedId] = await opts.resolver(rawUrl, importer);
            if (newUrl.startsWith("data:") && resolvedId) {
              opts.deps.add(resolvedId);
            }
            return newUrl;
          };
          if (isCssUrl && isCssImageSet) {
            promises2.push(
              rewriteCssUrls(declaration.value, replacerForDeclaration).then((url2) => rewriteCssImageSet(url2, replacerForDeclaration)).then((url2) => {
                declaration.value = url2;
              })
            );
          } else {
            const rewriterToUse = isCssImageSet ? rewriteCssImageSet : rewriteCssUrls;
            promises2.push(
              rewriterToUse(declaration.value, replacerForDeclaration).then(
                (url2) => {
                  declaration.value = url2;
                }
              )
            );
          }
        }
      });
      if (promises2.length) {
        return Promise.all(promises2);
      }
    }
  };
};
UrlRewritePostcssPlugin.postcss = true;
function rewriteCssUrls(css, replacer) {
  return asyncReplace(css, cssUrlRE, async (match) => {
    const [matched, rawUrl] = match;
    return await doUrlReplace(rawUrl.trim(), matched, replacer);
  });
}
var cssNotProcessedRE = /(?:gradient|element|cross-fade|image)\(/;
async function rewriteCssImageSet(css, replacer) {
  return await asyncReplace(css, cssImageSetRE, async (match) => {
    const [, rawUrl] = match;
    const url2 = await processSrcSet(rawUrl, async ({ url: url22 }) => {
      if (cssUrlRE.test(url22)) {
        return await rewriteCssUrls(url22, replacer);
      }
      if (!cssNotProcessedRE.test(url22)) {
        return await doUrlReplace(url22, url22, replacer);
      }
      return url22;
    });
    return url2;
  });
}
function skipUrlReplacer(rawUrl) {
  return isExternalUrl(rawUrl) || isDataUrl(rawUrl) || rawUrl[0] === "#" || functionCallRE.test(rawUrl);
}
async function doUrlReplace(rawUrl, matched, replacer, funcName = "url") {
  let wrap2 = "";
  const first2 = rawUrl[0];
  if (first2 === `"` || first2 === `'`) {
    wrap2 = first2;
    rawUrl = rawUrl.slice(1, -1);
  }
  if (skipUrlReplacer(rawUrl)) {
    return matched;
  }
  let newUrl = await replacer(rawUrl);
  if (wrap2 === "" && newUrl !== encodeURI(newUrl)) {
    wrap2 = '"';
  }
  if (wrap2 === "'" && newUrl.includes("'")) {
    wrap2 = '"';
  }
  if (wrap2 === '"' && newUrl.includes('"')) {
    newUrl = newUrl.replace(nonEscapedDoubleQuoteRe, '\\"');
  }
  return `${funcName}(${wrap2}${newUrl}${wrap2})`;
}
var atImportRE = new RegExp(`@import(?:\\s*(?:url\\([^)]*\\)|"(?:[^"]|(?<=\\\\)")*"|'(?:[^']|(?<=\\\\)')*').*?|[^;]*);`, "g");
var atCharsetRE = new RegExp(`@charset(?:\\s*(?:"(?:[^"]|(?<=\\\\)")*"|'(?:[^']|(?<=\\\\)')*').*?|[^;]*);`, "g");
var importLightningCSS = createCachedImport(() => import("./__vite-optional-peer-dep_lightningcss_vite-75YCNPSB.js"));
var preloadMarker = `__VITE_PRELOAD__`;
var preloadMarkerRE = new RegExp(preloadMarker, "g");
var buildEnvironmentOptionsDefaults = Object.freeze({
  target: "modules",
  /** @deprecated */
  polyfillModulePreload: true,
  modulePreload: true,
  outDir: "dist",
  assetsDir: "assets",
  assetsInlineLimit: DEFAULT_ASSETS_INLINE_LIMIT,
  // cssCodeSplit
  // cssTarget
  // cssMinify
  sourcemap: false,
  // minify
  terserOptions: {},
  rollupOptions: {},
  commonjsOptions: {
    include: [/node_modules/],
    extensions: [".js", ".cjs"]
  },
  dynamicImportVarsOptions: {
    warnOnError: true,
    exclude: [/node_modules/]
  },
  write: true,
  emptyOutDir: null,
  copyPublicDir: true,
  manifest: false,
  lib: false,
  // ssr
  ssrManifest: false,
  ssrEmitAssets: false,
  // emitAssets
  reportCompressedSize: true,
  chunkSizeWarningLimit: 500,
  watch: null
  // createEnvironment
});
var needsEscapeRegEx = /[\n\r'\\\u2028\u2029]/;
var quoteNewlineRegEx = /([\n\r'\u2028\u2029])/g;
var backSlashRegEx = /\\/g;
function escapeId(id) {
  if (!needsEscapeRegEx.test(id)) return id;
  return id.replace(backSlashRegEx, "\\\\").replace(quoteNewlineRegEx, "\\$1");
}
var getResolveUrl = (path22, URL2 = "URL") => `new ${URL2}(${path22}).href`;
var getRelativeUrlFromDocument = (relativePath, umd = false) => getResolveUrl(
  `'${escapeId(partialEncodeURIPath(relativePath))}', ${umd ? `typeof document === 'undefined' ? location.href : ` : ""}document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT' && document.currentScript.src || document.baseURI`
);
var getFileUrlFromFullPath = (path22) => `require('u' + 'rl').pathToFileURL(${path22}).href`;
var getFileUrlFromRelativePath = (path22) => getFileUrlFromFullPath(`__dirname + '/${escapeId(path22)}'`);
var relativeUrlMechanisms = {
  amd: (relativePath) => {
    if (relativePath[0] !== ".") relativePath = "./" + relativePath;
    return getResolveUrl(
      `require.toUrl('${escapeId(relativePath)}'), document.baseURI`
    );
  },
  cjs: (relativePath) => `(typeof document === 'undefined' ? ${getFileUrlFromRelativePath(
    relativePath
  )} : ${getRelativeUrlFromDocument(relativePath)})`,
  es: (relativePath) => getResolveUrl(
    `'${escapeId(partialEncodeURIPath(relativePath))}', import.meta.url`
  ),
  iife: (relativePath) => getRelativeUrlFromDocument(relativePath),
  // NOTE: make sure rollup generate `module` params
  system: (relativePath) => getResolveUrl(
    `'${escapeId(partialEncodeURIPath(relativePath))}', module.meta.url`
  ),
  umd: (relativePath) => `(typeof document === 'undefined' && typeof location === 'undefined' ? ${getFileUrlFromRelativePath(
    relativePath
  )} : ${getRelativeUrlFromDocument(relativePath, true)})`
};
var customRelativeUrlMechanisms = {
  ...relativeUrlMechanisms,
  "worker-iife": (relativePath) => getResolveUrl(
    `'${escapeId(partialEncodeURIPath(relativePath))}', self.location.href`
  )
};
var builderOptionsDefaults = Object.freeze({
  sharedConfigBuild: false,
  sharedPlugins: false
  // buildApp
});
var OTHER_SOURCE_MAP_REGEXP = new RegExp(
  `//# ${SOURCEMAPPING_URL2}=data:application/json[^,]+base64,([A-Za-z0-9+/=]+)$`,
  "gm"
);
var debug$1 = createDebugger("vite:deps");
var ssrConfigDefaults = Object.freeze({
  // noExternal
  // external
  target: "node",
  optimizeDeps: {}
  // resolve
});
var debug = createDebugger("vite:config", { depth: 10 });
var promisifiedRealpath = (0, import_node_util.promisify)(import_node_fs2.default.realpath);
var configDefaults = Object.freeze({
  define: {},
  dev: {
    warmup: [],
    // preTransformRequests
    /** @experimental */
    sourcemap: { js: true },
    sourcemapIgnoreList: void 0
    // createEnvironment
    // recoverable
    // moduleRunnerTransform
  },
  build: buildEnvironmentOptionsDefaults,
  resolve: {
    // mainFields
    // conditions
    externalConditions: ["node"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    dedupe: [],
    /** @experimental */
    noExternal: [],
    external: [],
    preserveSymlinks: false,
    alias: []
  },
  // root
  base: "/",
  publicDir: "public",
  // cacheDir
  // mode
  plugins: [],
  html: {
    cspNonce: void 0
  },
  css: cssConfigDefaults,
  json: {
    namedExports: true,
    stringify: "auto"
  },
  // esbuild
  assetsInclude: void 0,
  /** @experimental */
  builder: builderOptionsDefaults,
  server: serverConfigDefaults,
  preview: {
    port: DEFAULT_PREVIEW_PORT
    // strictPort
    // host
    // https
    // open
    // proxy
    // cors
    // headers
  },
  /** @experimental */
  experimental: {
    importGlobRestoreExtension: false,
    renderBuiltUrl: void 0,
    hmrPartialAccept: false,
    skipSsrTransform: false
  },
  future: {
    removePluginHookHandleHotUpdate: void 0,
    removePluginHookSsrArgument: void 0,
    removeServerModuleGraph: void 0,
    removeServerHot: void 0,
    removeServerTransformRequest: void 0,
    removeSsrLoadModule: void 0
  },
  legacy: {
    proxySsrExternalModules: false,
    skipWebSocketTokenCheck: false
  },
  logLevel: "info",
  customLogger: void 0,
  clearScreen: true,
  envDir: void 0,
  envPrefix: "VITE_",
  worker: {
    format: "iife",
    plugins: () => []
    // rollupOptions
  },
  optimizeDeps: {
    include: [],
    exclude: [],
    needsInterop: [],
    // esbuildOptions
    /** @experimental */
    extensions: [],
    /** @deprecated @experimental */
    disabled: "build",
    // noDiscovery
    /** @experimental */
    holdUntilCrawlEnd: true,
    // entries
    /** @experimental */
    force: false
  },
  ssr: ssrConfigDefaults,
  environments: {},
  appType: "spa"
});
var clientAlias = [
  {
    find: /^\/?@vite\/env/,
    replacement: import_node_path3.default.posix.join(FS_PREFIX, normalizePath$3(ENV_ENTRY))
  },
  {
    find: /^\/?@vite\/client/,
    replacement: import_node_path3.default.posix.join(FS_PREFIX, normalizePath$3(CLIENT_ENTRY))
  }
];
var _require = (0, import_node_module.createRequire)(import.meta.url);

export {
  require_node_url,
  require_node_util,
  require_node_module,
  require_node_crypto,
  require_child_process,
  require_main,
  require_node_child_process,
  require_net,
  require_http,
  require_node_net,
  require_node_dns,
  require_node_buffer,
  require_node_readline,
  require_node_events,
  require_node_assert,
  require_node_v8,
  require_node_worker_threads,
  require_https,
  require_tls,
  require_zlib,
  require_buffer,
  require_node_querystring,
  require_node_zlib,
  commonjsGlobal,
  getDefaultExportFromCjs,
  createFilter2 as createFilter
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

rollup/dist/es/parseAst.js:
  (*
    @license
  	Rollup.js v4.35.0
  	Sat, 08 Mar 2025 06:24:12 GMT - commit 70ef1cce7c740030cc2935b563d13950cc1511f5
  
  	https://github.com/rollup/rollup
  
  	Released under the MIT License.
  *)

vite/dist/node/chunks/dep-glQox-ep.js:
  (**
   * Autoload Config for PostCSS
   *
   * @author Michael Ciniawsky @michael-ciniawsky <michael.ciniawsky@gmail.com>
   * @license MIT
   *
   * @module postcss-load-config
   * @version 2.1.0
   *
   * @requires comsiconfig
   * @requires ./options
   * @requires ./plugins
   *)

vite/dist/node/chunks/dep-glQox-ep.js:
  (*!
   * encodeurl
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)
  (*!
   * escape-html
   * Copyright(c) 2012-2013 TJ Holowaychuk
   * Copyright(c) 2015 Andreas Lubbe
   * Copyright(c) 2015 Tiancheng "Timothy" Gu
   * MIT Licensed
   *)
  (*!
   * ee-first
   * Copyright(c) 2014 Jonathan Ong
   * MIT Licensed
   *)
  (*!
   * on-finished
   * Copyright(c) 2013 Jonathan Ong
   * Copyright(c) 2014 Douglas Christopher Wilson
   * MIT Licensed
   *)
  (*!
   * parseurl
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)
  (*!
   * statuses
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2016 Douglas Christopher Wilson
   * MIT Licensed
   *)
  (*!
   * unpipe
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
  (*!
   * finalhandler
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)
  (*!
   * connect
   * Copyright(c) 2010 Sencha Inc.
   * Copyright(c) 2011 TJ Holowaychuk
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
  (*!
   * vary
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)
  (*!
   * normalize-path <https://github.com/jonschlinkert/normalize-path>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

vite/dist/node/chunks/dep-glQox-ep.js:
  (*!
   * Array of passes.
   *
   * A `pass` is just a function that is executed on `req, res, options`
   * so that you can easily add new checks while still keeping the base
   * flexible.
   *)
  (*!
   * Array of passes.
   *
   * A `pass` is just a function that is executed on `req, socket, options`
   * so that you can easily add new checks while still keeping the base
   * flexible.
   *)
  (*!
   * Caron dimonio, con occhi di bragia
   * loro accennando, tutte le raccoglie;
   * batte col remo qualunque s’adagia 
   *
   * Charon the demon, with the eyes of glede,
   * Beckoning to them, collects them all together,
   * Beats with his oar whoever lags behind
   *          
   *          Dante - The Divine Comedy (Canto III)
   *)

vite/dist/node/chunks/dep-glQox-ep.js:
  (*!
   * etag
   * Copyright(c) 2014-2016 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=chunk-JHUS64XZ.js.map
