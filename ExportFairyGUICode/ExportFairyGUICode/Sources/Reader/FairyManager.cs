using ETModel;
using System;
using System.IO;
using System.Collections.Generic;
using System.Text;


public class FairyManager
{
    List<Package> packageList = new List<Package>();
    QueueDictionary<string, Package> packages = new QueueDictionary<string, Package>();

    public void AddPackage(Package package)
    {
        packageList.Add(package);
        packages.Enqueue(package.id, package);
    }

    public Package GetPackage(string packageId)
    {
        if(packages.ContainsKey(packageId))
        {
            return packages[packageId];
        }
        return null;
    }

    public ResourceComponent GetRescoureComponent(string packageId, string resId)
    {
        Package package = GetPackage(packageId);
        if(package != null)
        {
            package.GetResource(resId);
        }
        return null;
    }



    public ResourceComponent GetRescoureComponent(ComponentNode node)
    {
        if(string.IsNullOrEmpty(node.pkg) && node.parent != null)
        {
            return node.parent.package.GetResource(node.src);
        }

        Package package = GetPackage(node.pkg);
        if (package != null)
        {
            return package.GetResource(node.src);
        }
        return null;
    }

    public void LoadProject(string projectPath)
    {
        string root = projectPath + "/assets";
        string[] dirs = Directory.GetDirectories(root);

        for(int i = 0; i < dirs.Length; i ++)
        {
            string packageXmlPath = dirs[i] + "/package.xml";
            if(File.Exists(packageXmlPath))
            {
                Package package = PackageReader.Load(packageXmlPath);
                AddPackage(package);
            }
        }

        LoadComponent();
        SetComponentNode();
    }

    private void LoadComponent()
    {
        foreach (Package package in packageList)
        {
            foreach(ResourceComponent component in package.ComponentList)
            {
                string path = package.rootPath + component.path + component.name;
                ComponentReader.Load(path, component);
            }
        }
    }

    private void SetComponentNode()
    {
        foreach (Package package in packageList)
        {
            foreach (ResourceComponent component in package.ComponentList)
            {
                foreach(ComponentNode node in component.componentList)
                {
                    node.resourceComponent = GetRescoureComponent(node);
                    if (node.resourceComponent == null)
                    {
                        Log.Warning($"没有找到 resourceComponent packagename= {node.parent.package.name} comname= {node.parent.name} nodename={node.name}");
                    }
                }
            }
        }
    }

    public void ExportTS()
    {
        ExportTSComponent();
        ExportTSBinder();
    }

    private void ExportTSComponent()
    {
        foreach (Package package in packageList)
        {
            foreach (ResourceComponent component in package.ComponentList)
            {
                if (component.isIngore)
                    continue;

                TsExportComponent export = new TsExportComponent() { com = component };
                export.Export();
            }
        }
    }

    private void ExportTSBinder()
    {

        foreach (Package package in packageList)
        {
            if(package.genCode)
                TSExportBinder.Export(package);
        }
    }

}