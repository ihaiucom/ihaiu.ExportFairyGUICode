using ETModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

public class Package
{
    public string rootPath;
    public string id;
    public string name;
    public bool genCode;

    QueueDictionary<string, ResourceComponent> resources = new QueueDictionary<string, ResourceComponent>();
    List<ResourceComponent> components = new List<ResourceComponent>();
    List<ResourceComponent> exportComponents = new List<ResourceComponent>();
    public List<ResourceComponent> sounds = new List<ResourceComponent>();

    public List<ResourceComponent> ComponentList
    {
        get
        {
            return components;
        }
    }



    public void AddResource(ResourceComponent res)
    {
        res.package = this;

        resources.Enqueue(res.id, res);
        if(res.type == ResourceComponentType.component)
        {
            components.Add(res);

            if (res.exported)
            {
                exportComponents.Add(res);
            }
        }
        else if(res.type == ResourceComponentType.sound)
        {
            sounds.Add(res);
        }
    }

    public ResourceComponent GetResource(string resId)
    {
        if (resources.ContainsKey(resId))
            return resources[resId];
        return null;
    }


    // 代码文件夹名称
    private string _codeFolderName;
    public string codeFolderName
    {
        get
        {
            if (string.IsNullOrEmpty(_codeFolderName))
            {
                _codeFolderName = Regex.Replace(name, @"[^A-Za-z0-9_]", @"_");
            }
            return _codeFolderName;
        }


        set
        {
            _codeFolderName = value;
        }
    }


    // 命名空间
    private string _nameSpace;
    public string nameSpace
    {
        get
        {
            if (string.IsNullOrEmpty(_nameSpace))
            {
                _nameSpace = codeFolderName;
                if (!string.IsNullOrEmpty(Setting.Options.codeNamespace))
                    _nameSpace = Setting.Options.codeNamespace + "." + _nameSpace;
            }
            return _nameSpace;
        }


        set
        {
            _nameSpace = value;
        }
    }

    private string _classNameBinder;
    public string classNameBinder
    {

        get
        {
            if (string.IsNullOrEmpty(_classNameBinder))
            {
                _classNameBinder = codeFolderName.FirstUpper() + "Binder"; 
            }
            return _classNameBinder;
        }
    }

    public string tsBinderPath
    {
        get
        {
            return string.Format(TsPathOut.Binder, codeFolderName, classNameBinder);
        }
    }

    

}