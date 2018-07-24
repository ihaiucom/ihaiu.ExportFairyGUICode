using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

public class Node
{
    public string name;
    public string type;


    // 所在包ID
    public string pkg;
    // 资源ID
    public string src;

    private string _fieldName;
    public string fieldName
    {
        get
        {
            if(string.IsNullOrEmpty(_fieldName))
            {
                _fieldName = Setting.Options.codeMemberNamePrefix + name;
            }
            return _fieldName;
        }
    }

    static Regex IngoreRegex = new Regex("^n[0-9]+$");
    public bool isIngore
    {
        get
        {
            if (Setting.Options.codeIgnoreNoname)
            {
                if (name.StartsWith("_"))
                    return true;

                return IngoreRegex.IsMatch(name);
            }
            else
                return false;
        }
    }
}


public class ComponentNode : Node
{

    public ResourceComponent parent;
    public ResourceComponent resourceComponent;

    public string GetType(ResourceComponent com)
    {
        if(resourceComponent == null)
        {
            return fairygui.CommonName.GObject;
        }

        if(resourceComponent.isIngore)
        {
            return resourceComponent.extendClassName;
        }

        if(com.package == resourceComponent.package)
        {
            return resourceComponent.classNameExtend;
        }
        else
        {
            if(Setting.Options.codeUseOtherPkgType)
            {
                return resourceComponent.classNameFull;
            }
            else
            {
                return resourceComponent.extendClassName;
            }
        }
    }
}