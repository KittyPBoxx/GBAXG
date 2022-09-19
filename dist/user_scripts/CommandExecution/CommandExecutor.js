const CommandExecutor = {

    _commands: new Map()                                                          ,
    register : (name, command  ) => CommandExecutor._commands.set(name, command)  ,
    execute  : (name, args = {}) => CommandExecutor._commands.get(name).call(args),

}