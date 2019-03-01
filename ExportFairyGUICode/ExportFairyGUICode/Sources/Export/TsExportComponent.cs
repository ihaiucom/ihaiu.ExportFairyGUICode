using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class TsExportComponent
{
    public ResourceComponent com;

    public string name;
    public void Export()
    {
        name = com.className;


        ExportStruct();
        ExportExtend();
    }

    /// <summary>
    /// 导出结构
    /// </summary>
    private void ExportStruct()
    {

        List<object[]> imports = new List<object[]>();
        List<object[]> fields = new List<object[]>();
        List<object[]> setControllerList = new List<object[]>();
        List<object[]> setTransitionList = new List<object[]>();
        List<object[]> setDisplayList = new List<object[]>();

        // fields
        foreach (Node node in com.controllerList)
        {
            if (node.isIngore)
                continue;

            object[] lines = new object[] { node.fieldName, node.type };
            fields.Add(lines);
        }

        foreach (Node node in com.transitionList)
        {
            if (node.isIngore)
                continue;

            object[] lines = new object[] { node.fieldName, node.type };
            fields.Add(lines);
        }

        foreach (Node node in com.displayList)
        {
            if (node.isIngore)
                continue;

            object[] lines = new object[] { node.fieldName, node.type };
            fields.Add(lines);
        }

        foreach (ComponentNode node in com.componentList)
        {
            if (node.isIngore)
                continue;

            object[] lines = new object[] { node.fieldName, node.GetTypeForLaya2(com) };
            fields.Add(lines);
        }

        Dictionary<string, bool> importDict = new Dictionary<string, bool>();
        // imports
        foreach (ComponentNode node in com.componentList)
        {
            if (node.isIngore)
                continue;

            if (node.resourceComponent == null)
                continue;

            if (node.resourceComponent.isIngore)
                continue;

            if (!importDict.ContainsKey(node.resourceComponent.classNameExtend))
            {
                importDict.Add(node.resourceComponent.classNameExtend, true);
                object[] lines = new object[] { node.resourceComponent.classNameExtend, node.GetImportPathForStruct(com) };
                imports.Add(lines);
            }
        }


        imports.Add(new object[] { com.classNameExtend, PathHelper.GetImportPath(com.tsStructPath, com.tsExtendPath)});

        // setControllerList
        foreach (Node node in com.controllerList)
        {
            if (node.isIngore)
                continue;

            object[] lines = new object[] { node.fieldName, node.name };
            setControllerList.Add(lines);
        }

        // setTransitionList
        foreach (Node node in com.transitionList)
        {
            if (node.isIngore)
                continue;

            object[] lines = new object[] { node.fieldName, node.name };
            setTransitionList.Add(lines);
        }

        // setDisplayList
        foreach (Node node in com.displayList)
        {
            if (node.isIngore)
                continue;

            object[] lines = new object[] { node.fieldName, node.name, node.type };
            setDisplayList.Add(lines);
        }

        foreach (ComponentNode node in com.componentList)
        {
            if (node.isIngore)
                continue;

            object[] lines = new object[] { node.fieldName, node.name, node.GetTypeForLaya2(com) };
            setDisplayList.Add(lines);
        }

        string dependPackages = "";
        List<string> dependPackageList = new List<string>();

        foreach (Package item in com.dependPackageList)
        {
            dependPackageList.Add($"\"{item.name}\"");
        }
       
        dependPackages = String.Join(",", dependPackageList.ToArray());


        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.ComponentStruct));
        template.AddVariable("namespace", com.nameSpace);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        template.AddVariable("packagename", com.packageName);
        template.AddVariable("dependPackages", dependPackages);
        template.AddVariable("comname", Path.GetFileNameWithoutExtension(com.name));
        template.AddVariable("URL", com.URL);
        template.AddVariable("fields", fields.ToArray());
        template.AddVariable("setControllerList", setControllerList.ToArray());
        template.AddVariable("setDisplayList", setDisplayList.ToArray());
        template.AddVariable("setTransitionList", setTransitionList.ToArray());
        template.AddVariable("imports", imports.ToArray());
        string content = template.Parse();
        string path = com.tsStructPath;

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }

    /// <summary>
    /// 导出扩展
    /// </summary>
    private void ExportExtend()
    {

        // imports
        List<object[]> imports = new List<object[]>();

        object[] lines = new object[] { com.classNameStruct, PathHelper.GetImportPath(com.tsExtendPath, com.tsStructPath) };
        imports.Add(lines);

        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.ComponentExtend));
        template.AddVariable("namespace", com.nameSpace);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        template.AddVariable("imports", imports.ToArray());
        string content = template.Parse();
        string path = com.tsExtendPath;

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }
}