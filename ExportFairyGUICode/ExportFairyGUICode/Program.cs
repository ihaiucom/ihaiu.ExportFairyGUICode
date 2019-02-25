using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

class Program
{
    static void Main(string[] args)
    {
        //注册EncodeProvider
        //Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);



        Setting.Init(args);


        switch (Setting.cmd)
        {
            // 生成代码
            case CmdType.generatecode:
                generatecode();
                break;
            // 修改 xlsx
            case CmdType.modifyxml:
                modifyxml();
                break;
        }

        Console.WriteLine("完成!");

        if (!Setting.Options.autoEnd)
            Console.Read();

    }

    static void generatecode()
    {
        FairyManager fairyManager = new FairyManager();
        fairyManager.LoadProject(Setting.Options.fairyProject);
        fairyManager.ExportTS();

    }

    static void modifyxml()
    {
        FguiModifyXml fguiModifyXml = new FguiModifyXml();
        fguiModifyXml.LoadProject(Setting.Options.fairyProject);
    }
}