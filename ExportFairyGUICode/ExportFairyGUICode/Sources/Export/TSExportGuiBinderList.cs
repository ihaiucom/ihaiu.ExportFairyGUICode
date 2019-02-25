using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class TSExportGuiBinderList
{
    public static void Export(List<Package> packageList)
    {
        string path = TsPathOut.GuiBinderList;

        List<object[]> list = new List<object[]>();
        List<object[]> imports = new List<object[]>();

        foreach (Package package in packageList)
        {
            if (!package.genCode)
                continue;

            list.Add(new object[] { $"{package.classNameBinder}.bindAll()" });
            imports.Add(new object[] { package.classNameBinder, PathHelper.GetImportPath(path, package.tsBinderPath) });
        }


        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.GuiBinderList));
        template.AddVariable("packlist", list.ToArray());
        template.AddVariable("imports", imports.ToArray());
        string content = template.Parse();

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }
}