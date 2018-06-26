using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class TSExportGuiPackageNames
{
    public static void Export(List<Package> packageList)
    {

        List<object[]> list = new List<object[]>();

        foreach (Package package in packageList)
        {
            list.Add(new object[] { package.codeFolderName, package.name });
        }


        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.GuiPackageNames));
        template.AddVariable("packlist", list.ToArray());
        string content = template.Parse();
        string path = TsPathOut.GuiPackageNames;

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }
}