using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class TSExportBinder
{
    public static void Export(Package package)
    {

        List<object[]> coms = new List<object[]>();

        foreach (ResourceComponent component in package.ComponentList)
        {
            if (component.isIngore)
                continue;

            coms.Add(new object[] { component .classNameExtend });
        }


        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.Binder));
        template.AddVariable("namespace", package.nameSpace);
        template.AddVariable("className", package.classNameBinder);
        template.AddVariable("coms", coms.ToArray());
        string content = template.Parse();
        string path = string.Format(TsPathOut.Binder, package.codeFolderName, package.classNameBinder);

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }
}