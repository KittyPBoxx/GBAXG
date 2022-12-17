const CommandExecutor={_commands:new Map,register:(m,e)=>CommandExecutor._commands.set(m,e),execute:(m,e={})=>CommandExecutor._commands.get(m).call(e)};
//# sourceMappingURL=index.9c9fbd7b.js.map
