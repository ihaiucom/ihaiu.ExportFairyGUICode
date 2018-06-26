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

        List<object[]> fields = new List<object[]>();
        List<object[]> setControllerList = new List<object[]>();
        List<object[]> setTransitionList = new List<object[]>();
        List<object[]> setDisplayList = new List<object[]>();

        // fields
        foreach(Node node in com.controllerList)
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

            object[] lines = new object[] { node.fieldName, node.GetType(com) };
            fields.Add(lines);
        }

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

            object[] lines = new object[] { node.fieldName, node.name, node.GetType(com) };
            setDisplayList.Add(lines);
        }


        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.ComponentStruct));
        template.AddVariable("namespace", com.nameSpace);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        template.AddVariable("packagename", com.packageName);
        template.AddVariable("comname", Path.GetFileNameWithoutExtension(com.name));
        template.AddVariable("URL", com.URL);
        template.AddVariable("fields", fields.ToArray());
        template.AddVariable("setControllerList", setControllerList.ToArray());
        template.AddVariable("setDisplayList", setDisplayList.ToArray());
        template.AddVariable("setTransitionList", setTransitionList.ToArray());
        string content = template.Parse();
        string path = string.Format(TsPathOut.ComponentStruct, com.package.codeFolderName, name);

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }

    /// <summary>
    /// 导出扩展
    /// </summary>
    private void ExportExtend()
    {
        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.ComponentExtend));
        template.AddVariable("namespace", com.nameSpace);
        template.AddVariable("classNameFGUI", com.classNameFGUI);
        template.AddVariable("classNameStruct", com.classNameStruct);
        template.AddVariable("classNameExtend", com.classNameExtend);
        string content = template.Parse();
        string path = string.Format(TsPathOut.ComponentExtend, com.package.codeFolderName, name);

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }
}