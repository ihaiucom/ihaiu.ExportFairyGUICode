using CommandLine;
using System;
using System.IO;


public class CmdType
{
    // 生成代码
    public const string generatecode = "generatecode";
    // 修改 xlsx
    public const string modifyxml = "modifyxml";
}

public class Setting
{
    public static Options Options { get; set; }
    public static EngineSetting EngineSetting { get; set; }

    public static string cmd = CmdType.generatecode;

    public static void Init(string[] args)
    {
        bool useSetting = args.Length == 0;
        foreach (string op in args)
        {
            if (op.StartsWith("--optionSetting"))
            {
                useSetting = true;
                break;
            }
        }

        Parse(args);

        if(!File.Exists(Options.optionSetting))
        {
            Options.Save(Options.optionSetting);
        }


        cmd = Options.cmd;
        if (string.IsNullOrEmpty(cmd))
        {
            cmd = CmdType.generatecode;
        }

        if (useSetting)
        {
            Options = Options.Load(Options.optionSetting);
        }


        EngineSetting = EngineSetting.Load();

    }


    public static void Parse(string[] args)
    {
        Parser.Default.ParseArguments<Options>(args)
            .WithNotParsed(error => throw new Exception($"命令行格式错误!"))
            .WithParsed(options =>
            {
                Options = options;
            });
    }



}