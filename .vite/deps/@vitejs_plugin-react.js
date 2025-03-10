import {
  createFilter,
  require_buffer,
  require_child_process,
  require_http,
  require_https,
  require_main,
  require_net,
  require_node_assert,
  require_node_buffer,
  require_node_child_process,
  require_node_crypto,
  require_node_dns,
  require_node_events,
  require_node_module,
  require_node_net,
  require_node_querystring,
  require_node_readline,
  require_node_url,
  require_node_util,
  require_node_v8,
  require_node_worker_threads,
  require_node_zlib,
  require_tls,
  require_zlib
} from "./chunk-JHUS64XZ.js";
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
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/vite/dist/node/index.js
var import_esbuild = __toESM(require_main());
var import_node_fs = __toESM(require_node_fs());
var import_node_path = __toESM(require_node_path());
var import_promises = __toESM(require_promises());
var import_node_url = __toESM(require_node_url());
var import_node_util = __toESM(require_node_util());
var import_node_perf_hooks = __toESM(require_node_perf_hooks());
var import_node_module = __toESM(require_node_module());
var import_node_crypto = __toESM(require_node_crypto());
var import_path = __toESM(require_path());
var import_fs = __toESM(require_fs());
var import_node_child_process = __toESM(require_node_child_process());
var import_node_http = __toESM(require_node_http());
var import_node_https = __toESM(require_node_https());
var import_tty = __toESM(require_tty());
var import_util = __toESM(require_util());
var import_net = __toESM(require_net());
var import_events = __toESM(require_events());
var import_url = __toESM(require_url());
var import_http = __toESM(require_http());
var import_stream = __toESM(require_stream());
var import_os = __toESM(require_os());
var import_child_process = __toESM(require_child_process());
var import_node_os = __toESM(require_node_os());
var import_node_net = __toESM(require_node_net());
var import_node_dns = __toESM(require_node_dns());
var import_node_buffer = __toESM(require_node_buffer());
var import_module = __toESM(require_module());
var import_node_readline = __toESM(require_node_readline());
var import_node_process = __toESM(require_node_process());
var import_node_events = __toESM(require_node_events());
var import_crypto = __toESM(require_crypto());
var import_node_assert = __toESM(require_node_assert());
var import_node_v8 = __toESM(require_node_v8());
var import_node_worker_threads = __toESM(require_node_worker_threads());
var import_https = __toESM(require_https());
var import_tls = __toESM(require_tls());
var import_zlib = __toESM(require_zlib());
var import_buffer = __toESM(require_buffer());
var import_assert = __toESM(require_assert());
var import_node_querystring = __toESM(require_node_querystring());
var import_node_zlib = __toESM(require_node_zlib());

// node_modules/@vitejs/plugin-react/dist/index.mjs
var import_node_fs2 = __toESM(require_node_fs(), 1);
var import_node_path2 = __toESM(require_node_path(), 1);
var import_node_module2 = __toESM(require_node_module(), 1);
var runtimePublicPath = "/@react-refresh";
var _require = (0, import_node_module2.createRequire)(import.meta.url);
var reactRefreshDir = import_node_path2.default.dirname(
  _require.resolve("react-refresh/package.json")
);
var runtimeFilePath = import_node_path2.default.join(
  reactRefreshDir,
  "cjs/react-refresh-runtime.development.js"
);
var runtimeCode = `
const exports = {}
${import_node_fs2.default.readFileSync(runtimeFilePath, "utf-8")}
${import_node_fs2.default.readFileSync(_require.resolve("./refreshUtils.js"), "utf-8")}
export default exports
`;
var preambleCode = `
import RefreshRuntime from "__BASE__${runtimePublicPath.slice(1)}"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
`;
var sharedHeader = `
import RefreshRuntime from "${runtimePublicPath}";

const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
`.replace(/\n+/g, "");
var functionHeader = `
let prevRefreshReg;
let prevRefreshSig;

if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong. " +
      "See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201"
    );
  }

  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, __SOURCE__ + " " + id)
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}`.replace(/\n+/g, "");
var functionFooter = `
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}`;
var sharedFooter = (id) => `
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh(${JSON.stringify(
  id
)}, currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(${JSON.stringify(
  id
)}, currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}`;
function addRefreshWrapper(code, id) {
  return sharedHeader + functionHeader.replace("__SOURCE__", JSON.stringify(id)) + code + functionFooter + sharedFooter(id);
}
function addClassComponentRefreshWrapper(code, id) {
  return sharedHeader + code + sharedFooter(id);
}
var babel;
async function loadBabel() {
  if (!babel) {
    babel = await import("./lib-IQWK6SLU.js");
  }
  return babel;
}
var reactCompRE = /extends\s+(?:React\.)?(?:Pure)?Component/;
var refreshContentRE = /\$Refresh(?:Reg|Sig)\$\(/;
var defaultIncludeRE = /\.[tj]sx?$/;
var tsRE = /\.tsx?$/;
function viteReact(opts = {}) {
  var _a;
  let devBase = "/";
  const filter = createFilter(opts.include ?? defaultIncludeRE, opts.exclude);
  const jsxImportSource = opts.jsxImportSource ?? "react";
  const jsxImportRuntime = `${jsxImportSource}/jsx-runtime`;
  const jsxImportDevRuntime = `${jsxImportSource}/jsx-dev-runtime`;
  let isProduction = true;
  let projectRoot = process.cwd();
  let skipFastRefresh = false;
  let runPluginOverrides;
  let staticBabelOptions;
  const importReactRE = /\bimport\s+(?:\*\s+as\s+)?React\b/;
  const viteBabel = {
    name: "vite:react-babel",
    enforce: "pre",
    config() {
      if (opts.jsxRuntime === "classic") {
        return {
          esbuild: {
            jsx: "transform"
          }
        };
      } else {
        return {
          esbuild: {
            jsx: "automatic",
            jsxImportSource: opts.jsxImportSource
          },
          optimizeDeps: { esbuildOptions: { jsx: "automatic" } }
        };
      }
    },
    configResolved(config) {
      devBase = config.base;
      projectRoot = config.root;
      isProduction = config.isProduction;
      skipFastRefresh = isProduction || config.command === "build" || config.server.hmr === false;
      if ("jsxPure" in opts) {
        config.logger.warnOnce(
          "[@vitejs/plugin-react] jsxPure was removed. You can configure esbuild.jsxSideEffects directly."
        );
      }
      const hooks = config.plugins.map((plugin) => {
        var _a2;
        return (_a2 = plugin.api) == null ? void 0 : _a2.reactBabel;
      }).filter(defined);
      if (hooks.length > 0) {
        runPluginOverrides = (babelOptions, context) => {
          hooks.forEach((hook) => hook(babelOptions, context, config));
        };
      } else if (typeof opts.babel !== "function") {
        staticBabelOptions = createBabelOptions(opts.babel);
      }
    },
    async transform(code, id, options) {
      if (id.includes("/node_modules/"))
        return;
      const [filepath] = id.split("?");
      if (!filter(filepath))
        return;
      const ssr = (options == null ? void 0 : options.ssr) === true;
      const babelOptions = (() => {
        if (staticBabelOptions)
          return staticBabelOptions;
        const newBabelOptions = createBabelOptions(
          typeof opts.babel === "function" ? opts.babel(id, { ssr }) : opts.babel
        );
        runPluginOverrides == null ? void 0 : runPluginOverrides(newBabelOptions, { id, ssr });
        return newBabelOptions;
      })();
      const plugins = [...babelOptions.plugins];
      const isJSX = filepath.endsWith("x");
      const useFastRefresh = !skipFastRefresh && !ssr && (isJSX || (opts.jsxRuntime === "classic" ? importReactRE.test(code) : code.includes(jsxImportDevRuntime) || code.includes(jsxImportRuntime)));
      if (useFastRefresh) {
        plugins.push([
          await loadPlugin("react-refresh/babel"),
          { skipEnvCheck: true }
        ]);
      }
      if (opts.jsxRuntime === "classic" && isJSX) {
        if (!isProduction) {
          plugins.push(
            await loadPlugin("@babel/plugin-transform-react-jsx-self"),
            await loadPlugin("@babel/plugin-transform-react-jsx-source")
          );
        }
      }
      if (!plugins.length && !babelOptions.presets.length && !babelOptions.configFile && !babelOptions.babelrc) {
        return;
      }
      const parserPlugins = [...babelOptions.parserOpts.plugins];
      if (!filepath.endsWith(".ts")) {
        parserPlugins.push("jsx");
      }
      if (tsRE.test(filepath)) {
        parserPlugins.push("typescript");
      }
      const babel2 = await loadBabel();
      const result = await babel2.transformAsync(code, {
        ...babelOptions,
        root: projectRoot,
        filename: id,
        sourceFileName: filepath,
        // Required for esbuild.jsxDev to provide correct line numbers
        // This crates issues the react compiler because the re-order is too important
        // People should use @babel/plugin-transform-react-jsx-development to get back good line numbers
        retainLines: getReactCompilerPlugin(plugins) != null ? false : !isProduction && isJSX && opts.jsxRuntime !== "classic",
        parserOpts: {
          ...babelOptions.parserOpts,
          sourceType: "module",
          allowAwaitOutsideFunction: true,
          plugins: parserPlugins
        },
        generatorOpts: {
          ...babelOptions.generatorOpts,
          // import attributes parsing available without plugin since 7.26
          importAttributesKeyword: "with",
          decoratorsBeforeExport: true
        },
        plugins,
        sourceMaps: true
      });
      if (result) {
        let code2 = result.code;
        if (useFastRefresh) {
          if (refreshContentRE.test(code2)) {
            code2 = addRefreshWrapper(code2, id);
          } else if (reactCompRE.test(code2)) {
            code2 = addClassComponentRefreshWrapper(code2, id);
          }
        }
        return { code: code2, map: result.map };
      }
    }
  };
  const dependencies = [
    "react",
    "react-dom",
    jsxImportDevRuntime,
    jsxImportRuntime
  ];
  const staticBabelPlugins = typeof opts.babel === "object" ? ((_a = opts.babel) == null ? void 0 : _a.plugins) ?? [] : [];
  const reactCompilerPlugin = getReactCompilerPlugin(staticBabelPlugins);
  if (reactCompilerPlugin != null) {
    const reactCompilerRuntimeModule = getReactCompilerRuntimeModule(reactCompilerPlugin);
    dependencies.push(reactCompilerRuntimeModule);
  }
  const viteReactRefresh = {
    name: "vite:react-refresh",
    enforce: "pre",
    config: (userConfig) => ({
      build: silenceUseClientWarning(userConfig),
      optimizeDeps: {
        include: dependencies
      },
      resolve: {
        dedupe: ["react", "react-dom"]
      }
    }),
    resolveId(id) {
      if (id === runtimePublicPath) {
        return id;
      }
    },
    load(id) {
      if (id === runtimePublicPath) {
        return runtimeCode;
      }
    },
    transformIndexHtml() {
      if (!skipFastRefresh)
        return [
          {
            tag: "script",
            attrs: { type: "module" },
            children: preambleCode.replace(`__BASE__`, devBase)
          }
        ];
    }
  };
  return [viteBabel, viteReactRefresh];
}
viteReact.preambleCode = preambleCode;
var silenceUseClientWarning = (userConfig) => ({
  rollupOptions: {
    onwarn(warning, defaultHandler) {
      var _a, _b;
      if (warning.code === "MODULE_LEVEL_DIRECTIVE" && warning.message.includes("use client")) {
        return;
      }
      if (warning.code === "SOURCEMAP_ERROR" && warning.message.includes("resolve original location") && warning.pos === 0) {
        return;
      }
      if ((_b = (_a = userConfig.build) == null ? void 0 : _a.rollupOptions) == null ? void 0 : _b.onwarn) {
        userConfig.build.rollupOptions.onwarn(warning, defaultHandler);
      } else {
        defaultHandler(warning);
      }
    }
  }
});
var loadedPlugin = /* @__PURE__ */ new Map();
function loadPlugin(path2) {
  const cached = loadedPlugin.get(path2);
  if (cached)
    return cached;
  const promise = import(path2).then((module) => {
    const value = module.default || module;
    loadedPlugin.set(path2, value);
    return value;
  });
  loadedPlugin.set(path2, promise);
  return promise;
}
function createBabelOptions(rawOptions) {
  var _a;
  const babelOptions = {
    babelrc: false,
    configFile: false,
    ...rawOptions
  };
  babelOptions.plugins || (babelOptions.plugins = []);
  babelOptions.presets || (babelOptions.presets = []);
  babelOptions.overrides || (babelOptions.overrides = []);
  babelOptions.parserOpts || (babelOptions.parserOpts = {});
  (_a = babelOptions.parserOpts).plugins || (_a.plugins = []);
  return babelOptions;
}
function defined(value) {
  return value !== void 0;
}
function getReactCompilerPlugin(plugins) {
  return plugins.find(
    (p) => p === "babel-plugin-react-compiler" || Array.isArray(p) && p[0] === "babel-plugin-react-compiler"
  );
}
function getReactCompilerRuntimeModule(plugin) {
  var _a, _b, _c, _d;
  let moduleName = "react/compiler-runtime";
  if (Array.isArray(plugin)) {
    if (((_a = plugin[1]) == null ? void 0 : _a.target) === "17" || ((_b = plugin[1]) == null ? void 0 : _b.target) === "18") {
      moduleName = "react-compiler-runtime";
    } else if (typeof ((_c = plugin[1]) == null ? void 0 : _c.runtimeModule) === "string") {
      moduleName = (_d = plugin[1]) == null ? void 0 : _d.runtimeModule;
    }
  }
  return moduleName;
}
export {
  viteReact as default
};
//# sourceMappingURL=@vitejs_plugin-react.js.map
