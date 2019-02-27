using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class TSExportBinder
{
    public static void Export(Package package)
    {
        string path = package.tsBinderPath;

        List<object[]> coms = new List<object[]>();
        List<object[]> imports = new List<object[]>();

        Dictionary<string, bool> importDict = new Dictionary<string, bool>();

        foreach (ResourceComponent component in package.ComponentList)
        {
            if (component.isIngore)
                continue;

            coms.Add(new object[] { component .classNameExtend });


            if (!importDict.ContainsKey(component.classNameExtend))
            {
                importDict.Add(component.classNameExtend, true);
                imports.Add(new object[] { component.classNameExtend, PathHelper.GetImportPath(path, component.tsExtendPath) });
            }
        }


        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.Binder));
        template.AddVariable("namespace", package.nameSpace);
        template.AddVariable("className", package.classNameBinder);
        template.AddVariable("coms", coms.ToArray());
        template.AddVariable("imports", imports.ToArray());
        string content = template.Parse();

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }
}