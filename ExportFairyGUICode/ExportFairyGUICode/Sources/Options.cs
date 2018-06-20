using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using CommandLine;

public class Options
{
    // 运行完，是否自动关闭cmd
    [Option("autoEnd", Required = false, Default = true)]
    public bool autoEnd { get; set; }

    // 启动参数设置 配置路径
    [Option("optionSetting", Required = false, Default = "./optionSetting.json")]
    public string optionSetting { get; set; }

    // xlsx目录(可以用分号';'分割填写多个路径)
    [Option("xlsxDir", Required = false, Default = "../FairyGUI")]
    public string fairyProject { get; set; }

    // 配置输出目录
    [Option("outDir", Required = false, Default = "../FairyGUICode/TS")]
    public string outDir { get; set; }



    public void Save(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./optionSetting.json";

        string json = JsonHelper.ToJsonType(this);
        File.WriteAllText(path, json);
    }

    public static Options Load(string path = null)
    {
        if (string.IsNullOrEmpty(path))
            path = "./optionSetting.json";

        string json = File.ReadAllText(path);
        Options options = JsonHelper.FromJson<Options>(json);
        return options;
    }
}