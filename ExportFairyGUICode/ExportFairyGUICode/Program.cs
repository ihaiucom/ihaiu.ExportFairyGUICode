using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

class Program
{
    static void Main(string[] args)
    {
        //注册EncodeProvider
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
        


        Setting.Init(args);

        FairyManager fairyManager = new FairyManager();
        fairyManager.LoadProject(Setting.Options.fairyProject);
        fairyManager.ExportTS();


        Console.WriteLine("完成!");

        //if (!Setting.Options.autoEnd)
            Console.Read();
    }
}