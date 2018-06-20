using System;
using System.IO;
using System.Text;


class Program
{
    static void Main(string[] args)
    {
        //注册EncodeProvider
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);


        Setting.Init(args);

        FairyManager fairyManager = new FairyManager();
        fairyManager.LoadProject(Setting.Options.fairyProject);


        Console.WriteLine("完成!");

        //if (!Setting.Options.autoEnd)
            Console.Read();
    }
}