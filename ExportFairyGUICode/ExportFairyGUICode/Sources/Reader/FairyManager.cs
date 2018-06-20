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
    }

    private void LoadComponent()
    {
        foreach(Package package in packageList)
        {
            foreach(ResourceComponent component in package.ComponentList)
            {
                string path = package.rootPath + component.path + component.name;
                ComponentReader.Load(path, component);
                break;
            }
            break;
        }
    }
}