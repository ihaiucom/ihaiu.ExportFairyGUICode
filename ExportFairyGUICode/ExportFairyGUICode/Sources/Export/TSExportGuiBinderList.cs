using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class TSExportGuiBinderList
{
    public static void Export(List<Package> packageList)
    {

        List<object[]> list = new List<object[]>();

        foreach (Package package in packageList)
        {
            if (!package.genCode)
                continue;

            list.Add(new object[] { $"{package.nameSpace}.{package.classNameBinder}.bindAll()" });
        }


        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.GuiBinderList));
        template.AddVariable("packlist", list.ToArray());
        string content = template.Parse();
        string path = TsPathOut.GuiBinderList;

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }
}