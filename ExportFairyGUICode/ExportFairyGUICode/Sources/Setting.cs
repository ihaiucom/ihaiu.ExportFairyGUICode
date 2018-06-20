using CommandLine;
using System;
using System.IO;

public class Setting
{
    public static Options Options { get; set; }

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

        if(useSetting)
        {
            Options = Options.Load(Options.optionSetting);
        }
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